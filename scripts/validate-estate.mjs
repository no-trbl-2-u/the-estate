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
  if (fm.name === 'steward') continue; // the session itself, not a verb
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

// --- Report -----------------------------------------------------------------
for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s) across ${records.length} record(s).`);
process.exit(errors.length ? 1 : 0);
