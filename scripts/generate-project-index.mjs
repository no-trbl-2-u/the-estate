#!/usr/bin/env node
// Regenerates each project's INDEX.md from its directory (ADR 0033).
// Membership IS the directory listing; this file makes the index a view,
// never a second copy — the same move as system/registry.md (ADR 0028).
//
//   node scripts/generate-project-index.mjs

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function frontmatter(file) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  let lastKey = null;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (kv) {
      out[kv[1]] = kv[2].replace(/^"|"$/g, '').trim();
      lastKey = kv[1];
      continue;
    }
    const item = line.match(/^\s+-\s+(.+)$/);
    if (item && lastKey) out[lastKey] = out[lastKey] ? `${out[lastKey]}, ${item[1]}` : item[1];
  }
  return out;
}

const dirsIn = (p) =>
  existsSync(p)
    ? readdirSync(p).filter((d) => {
        try { return statSync(join(p, d)).isDirectory(); } catch { return false; }
      })
    : [];
const mdIn = (p) => (existsSync(p) ? readdirSync(p).filter((x) => x.endsWith('.md')) : []);
const ideaRefs = (s) => [...String(s || '').matchAll(/idea[s]?[-/](\d{4})/g)].map((m) => m[1]);

const projectsDir = join(root, 'projects');
let written = 0;
for (const p of dirsIn(projectsDir)) {
  const dir = join(projectsDir, p);
  if (!existsSync(join(dir, 'project.md'))) continue; // validator's complaint, not ours
  const pfm = frontmatter(join(dir, 'project.md'));
  const ideasDir = join(dir, 'ideas');
  const exportsDir = join(dir, 'exports');
  const records = dirsIn(ideasDir).sort();
  const ownNums = new Set(records.map((r) => r.slice(0, 4)));

  const rows = [];
  const decisions = [];
  const crossings = [];
  const seeds = mdIn(exportsDir).filter((f) => f.endsWith('-seed.md'));

  for (const r of records) {
    const rdir = join(ideasDir, r);
    const fm = frontmatter(join(rdir, 'idea.md'));
    const artifacts = mdIn(join(rdir, 'artifacts')).sort();
    const states = mdIn(join(rdir, 'state'));
    const seed = seeds.find((s) => frontmatter(join(exportsDir, s)).origin?.includes(`idea-${r.slice(0, 4)}`));
    rows.push(
      `| idea-${r.slice(0, 4)} | ${fm.title || r.slice(5)} | ${fm.status || '?'} | ${fm.appetite ?? '?'} | ` +
      `${fm['state-head'] || '?'} | ${artifacts.length} | ${seed ? `\`exports/${seed}\`` : '—'} |`,
    );

    // decision log: every Decision artifact, wherever it sits in the project
    for (const a of artifacts) {
      const afm = frontmatter(join(rdir, 'artifacts', a));
      if (afm.type === 'Decision') {
        decisions.push(`| ${afm.date || '?'} | ${afm.summary || a} | idea-${r.slice(0, 4)} | \`ideas/${r}/artifacts/${a}\` |`);
      }
      // border crossings via lineage
      for (const num of ideaRefs(afm.inputs)) {
        if (!ownNums.has(num)) crossings.push(`- \`ideas/${r}/artifacts/${a}\` cites idea-${num} in \`inputs:\``);
      }
    }
    for (const num of ideaRefs(fm.relates)) {
      if (!ownNums.has(num)) crossings.push(`- idea-${r.slice(0, 4)} \`relates:\` idea-${num}`);
    }
    for (const s of states) {
      for (const num of ideaRefs(frontmatter(join(rdir, 'state', s)).previous)) {
        if (!ownNums.has(num)) crossings.push(`- \`ideas/${r}/state/${s}\` \`previous:\` points at idea-${num} (branch point)`);
      }
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const out = `---
type: Index
title: "${pfm.title || p.slice(5)} — Index"
description: "Generated view of ${p}: records, decision log, border crossings."
tags: [project, index, generated]
generated: { by: "scripts/generate-project-index.mjs", at: ${today} }
---

<!-- GENERATED FILE — do not edit by hand.
     Source of truth: this directory's own listing and frontmatter.
     Regenerate: node scripts/generate-project-index.mjs        (ADR 0033) -->

# ${pfm.title || p.slice(5)} — Index

\`${pfm.id || `project-${p.slice(0, 4)}`}\` · status: ${pfm.status || '?'} · appetite: ${pfm.appetite ?? '?'} · target: ${pfm.target || 'none'}

## Records

${records.length ? `| Record | Title | Status | Appetite | Head | Artifacts | Seed |
|---|---|---|---|---|---|---|
${rows.join('\n')}` : '*No records yet — a project waiting for its first capture is not an error (ADR 0033).*'}

## Decision log

${decisions.length ? `Every \`Decision\` artifact across this project's records — the project's
ADR-shaped log, generated, with the artifacts as the single authoring surface.

| Date | Decision | Record | Artifact |
|---|---|---|---|
${decisions.join('\n')}` : '*No Decisions recorded — `decide` has not run in this project.*'}

## Border crossings

${crossings.length ? `Lineage and edges reaching outside this project. Legal and honest — and
exactly what a copied project directory would leave behind:

${[...new Set(crossings)].join('\n')}` : '*None — this project is fully self-contained; the directory is copy-and-go.*'}
`;
  writeFileSync(join(dir, 'INDEX.md'), out);
  written++;
  console.log(`projects/${p}/INDEX.md: ${records.length} record(s), ${decisions.length} decision(s), ${crossings.length} crossing(s)`);
}
console.log(written ? `${written} index(es) regenerated.` : 'No projects — nothing to index.');
