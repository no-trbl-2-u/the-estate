#!/usr/bin/env node
// Checks the invariants system/LAW.md asserts (ADR 0028: an invariant worth
// a law is worth a check; what this file does not check is guidance).
//
//   node scripts/validate-estate.mjs        exits 1 on any error

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

function frontmatter(file) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const out = {};
  let lastKey = null;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (kv) {
      out[kv[1]] = kv[2].replace(/^"|"$/g, '').trim();
      lastKey = kv[1];
      continue;
    }
    const item = line.match(/^\s+-\s+(.+)$/); // YAML block-list entries
    if (item && lastKey) {
      out[lastKey] = out[lastKey] ? `${out[lastKey]}, ${item[1]}` : item[1];
    }
  }
  return out;
}

const rel = (p) => p.slice(root.length + 1).replaceAll('\\', '/');

// --- Skills: frontmatter completeness and valid run: values -----------------
const RUNS = new Set(['inline', 'fresh-eyes', 'quarantine']);
const skillsDir = join(root, '.claude', 'skills');
for (const d of readdirSync(skillsDir)) {
  const f = join(skillsDir, d, 'SKILL.md');
  if (!existsSync(f)) continue;
  const fm = frontmatter(f);
  if (!fm) { errors.push(`${rel(f)}: no frontmatter`); continue; }
  if (fm.name === 'start') continue; // the entrypoint itself, not a verb
  for (const key of ['name', 'verb', 'signature', 'voice', 'run']) {
    if (!fm[key]) errors.push(`${rel(f)}: missing \`${key}:\``);
  }
  if (fm.run && !RUNS.has(fm.run)) {
    errors.push(`${rel(f)}: run: "${fm.run}" is not inline|fresh-eyes|quarantine`);
  }
}

// --- Ideas: state-head resolves; artifacts carry type/produced-by/inputs ----
const ideasDir = join(root, 'ideas');
const records = existsSync(ideasDir)
  ? readdirSync(ideasDir).filter((d) => {
      try { return statSync(join(ideasDir, d)).isDirectory(); } catch { return false; }
    })
  : [];

for (const record of records) {
  const dir = join(ideasDir, record);
  const ideaFile = join(dir, 'idea.md');
  if (!existsSync(ideaFile)) { errors.push(`${rel(dir)}: no idea.md`); continue; }
  const idea = frontmatter(ideaFile);
  if (!idea) { errors.push(`${rel(ideaFile)}: no frontmatter`); continue; }
  if (!idea['state-head']) {
    errors.push(`${rel(ideaFile)}: missing \`state-head:\``);
  } else if (!existsSync(join(dir, idea['state-head']))) {
    errors.push(`${rel(ideaFile)}: state-head "${idea['state-head']}" does not resolve`);
  }

  const artifactsDir = join(dir, 'artifacts');
  if (existsSync(artifactsDir)) {
    for (const a of readdirSync(artifactsDir).filter((x) => x.endsWith('.md'))) {
      const f = join(artifactsDir, a);
      const fm = frontmatter(f);
      if (!fm) { errors.push(`${rel(f)}: no frontmatter`); continue; }
      if (!fm.type) errors.push(`${rel(f)}: missing \`type:\``);
      if (!fm['produced-by']) errors.push(`${rel(f)}: missing \`produced-by:\``);
      if (!fm.inputs || fm.inputs === '[]') {
        warnings.push(`${rel(f)}: empty \`inputs:\` — lineage cannot be derived through it`);
      }
    }
  }

  const stateDir = join(dir, 'state');
  if (existsSync(stateDir)) {
    for (const s of readdirSync(stateDir).filter((x) => x.endsWith('.md'))) {
      const f = join(stateDir, s);
      const fm = frontmatter(f);
      if (!fm) { errors.push(`${rel(f)}: no frontmatter`); continue; }
      if (fm.state === undefined) errors.push(`${rel(f)}: missing \`state:\``);
      if (!fm.previous && !s.startsWith('0000')) {
        errors.push(`${rel(f)}: missing \`previous:\` (only state 0000 may omit it)`);
      }
    }
  }
}

// --- Inbox: slips are stamped ----------------------------------------------
const inboxDir = join(root, 'inbox');
if (existsSync(inboxDir)) {
  for (const s of readdirSync(inboxDir).filter((x) => x.endsWith('.md') && x !== 'README.md')) {
    const f = join(inboxDir, s);
    const fm = frontmatter(f);
    if (!fm) { errors.push(`${rel(f)}: no frontmatter`); continue; }
    if (!fm.jotted) errors.push(`${rel(f)}: missing \`jotted:\``);
    if (!['pending', 'processed'].includes(fm.status)) {
      errors.push(`${rel(f)}: status "${fm.status}" is not pending|processed`);
    }
    if (fm.status === 'processed' && (!fm.became || fm.became === '""')) {
      errors.push(`${rel(f)}: processed slip with empty \`became:\``);
    }
  }
}

// --- Exports: a Seed behind its record; build-plan payload shape (ADR 0029) --
const exportsDir = join(root, 'exports');
const BUILD_PLAN_FILES = [ // the nexus-native shape (ADR 0030)
  'README.md', 'spec.md', 'nexus.adopt.json', 'plan/bearings.md',
  'plan/steps/01_build_plan.md', 'plan/phases/phase_1_bootstrap.md',
];
const stateNum = (s) => Number((s || '').match(/(\d{4})/)?.[1] ?? NaN);
const base = (p) => (p || '').replace(/^"|"$/g, '').split('/').pop();

if (existsSync(exportsDir)) {
  const seedFiles = readdirSync(exportsDir).filter((x) => x.endsWith('-seed.md'));
  const exportFms = seedFiles.map((s) => [s, frontmatter(join(exportsDir, s))]);

  // Anything that names a stale export as reconciled: a later export's
  // `supersedes:`, or a record artifact's `reconciles:`.
  const reconciled = new Set();
  for (const [, fm] of exportFms) if (fm?.supersedes) reconciled.add(base(fm.supersedes));
  for (const record of records) {
    const artifactsDir = join(ideasDir, record, 'artifacts');
    if (!existsSync(artifactsDir)) continue;
    for (const a of readdirSync(artifactsDir).filter((x) => x.endsWith('.md'))) {
      const fm = frontmatter(join(artifactsDir, a));
      if (fm?.reconciles) reconciled.add(base(fm.reconciles));
    }
  }

  for (const [s, fm] of exportFms) {
    const f = join(exportsDir, s);
    if (!fm) { errors.push(`${rel(f)}: no frontmatter`); continue; }
    const origin = (fm.origin || '').match(/idea-(\d{4})\s*@\s*state\/(\d{4})/);
    if (!origin) { errors.push(`${rel(f)}: \`origin:\` is not "idea-NNNN @ state/NNNN"`); continue; }

    const record = records.find((r) => r.startsWith(`${origin[1]}-`));
    if (!record) { errors.push(`${rel(f)}: origin idea-${origin[1]} has no record`); continue; }
    const head = stateNum(frontmatter(join(ideasDir, record, 'idea.md'))?.['state-head']);

    // The anchor is the *sealing* state — the one whose `outputs:` names this
    // export — not `origin:`. A Seed reads the record at state N and the close
    // then writes state N+1 recording the export, so origin is one behind by
    // construction on every healthy Seed. Staleness is work done *after* the
    // seal. Falls back to origin when no state claims the export.
    const stateDir = join(ideasDir, record, 'state');
    let seal = Number(origin[2]);
    if (existsSync(stateDir)) {
      for (const st of readdirSync(stateDir).filter((x) => x.endsWith('.md'))) {
        const outputs = frontmatter(join(stateDir, st))?.outputs || '';
        if (outputs.includes(`exports/${s}`)) seal = Math.max(seal, stateNum(st));
      }
    }
    if (head > seal && !reconciled.has(s)) {
      const pad = (n) => String(n).padStart(4, '0');
      warnings.push(`${rel(f)}: sealed at state/${pad(seal)}, ${record} head is state/${pad(head)} — reconciliation owed (re-seed | graft | decide-abandon)`);
    }

    if (fm.contract === 'build-plan') {
      if (!fm.target) errors.push(`${rel(f)}: build-plan Seed missing \`target:\``);
      if (!fm.payload || fm.payload === '""') {
        errors.push(`${rel(f)}: build-plan Seed missing \`payload:\` (the payload is the deliverable)`);
      } else {
        const payload = fm.payload.replace(/\/+$/, '');
        for (const p of BUILD_PLAN_FILES) {
          if (!existsSync(join(exportsDir, payload, p))) errors.push(`${rel(f)}: build-plan payload missing ${payload}/${p}`);
        }
      }
    }
  }
}

// --- Report -----------------------------------------------------------------
for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s) across ${records.length} record(s).`);
process.exit(errors.length ? 1 : 0);
