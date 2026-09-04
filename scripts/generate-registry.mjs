#!/usr/bin/env node
// Regenerates system/registry.md from skill frontmatter (ADR 0028).
// A verb's facts live in .claude/skills/<verb>/SKILL.md and nowhere else by
// hand; this file makes the registry a view, not a second copy.
//
//   node scripts/generate-registry.mjs

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, '.claude', 'skills');

function frontmatter(file) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^"|"$/g, '');
  }
  return out;
}

const skills = readdirSync(skillsDir)
  .map((d) => join(skillsDir, d, 'SKILL.md'))
  .flatMap((f) => {
    try { return [frontmatter(f)]; } catch { return []; }
  })
  .filter((fm) => fm.verb) // the steward skill has no verb: it is the session
  .sort((a, b) => a.verb.localeCompare(b.verb));

const rows = skills
  .map((s) => `| \`${s.verb}\` | \`${s.signature}\` | **${s.voice}** | \`${s.run}\` |`)
  .join('\n');

const today = new Date().toISOString().slice(0, 10);

const doc = `---
type: Registry
title: "Routing Registry"
description: "Every verb, its signature, its voice, and how it runs — generated from skill frontmatter."
tags: [registry, routing, generated]
generated: { by: "scripts/generate-registry.mjs", at: ${today} }
---

<!-- GENERATED FILE — do not edit by hand.
     Source of truth: .claude/skills/*/SKILL.md frontmatter.
     Regenerate: node scripts/generate-registry.mjs        (ADR 0028) -->

# Routing Registry

Generated from \`.claude/skills/*/SKILL.md\` frontmatter — the single home of
every verb's facts (ADR 0028). Governed by \`system/LAW.md\`: verbs are verbs,
every verb has a voice, every verb declares how it runs.

## Verbs

| Verb | Signature | Voice | Run |
|---|---|---|---|
${rows}

\`run:\` values (\`system/LAW.md\`): **inline** — performed by the session in
the verb's voice; **fresh-eyes** — dispatched because the session's context is
a liability (\`review\`/\`compare\` conditionally, per their skills);
**quarantine** — dispatched because the inputs must not enter the main window.
\`jot\` and \`onboard\` are the Steward's clerical duties, not verbs (ADR 0023,
ADR 0034); they appear here because they have skill files, and their products
— slips and a project shell — are boundary inputs and a container, not
artifacts.

## Lenses

Lenses (\`system/LENSES.md\`) bias a verb's angle without changing its
operation; they are passed with the work, need no voice, and modify rather
than perform.

\`technical\` · \`commercial\` · \`user\` · \`adversarial\` · \`long-term\` · \`ethical\`

## Output shapes

The verb sets the artifact's **type**; the operator sets its **shape**
(\`system/TYPES.md\`). A \`Horizon\` may be rendered as a PRD — this is what
keeps the *no output-type siloing* non-goal true under a typed system.

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| \`spark-to-seed\` | \`capture ▸ frame ▸ envision ▸ challenge ▸ chart ▸ phase ▸ seed\` | example only — routes are derived, not prescribed |
`;

writeFileSync(join(root, 'system', 'registry.md'), doc);
console.log(`system/registry.md regenerated: ${skills.length} verbs.`);
