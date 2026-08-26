---
type: Verb
title: "research"
description: "Gather bounded, sourced information from outside the estate."
resource: ../../.claude/skills/research/SKILL.md
tags: [verb, transformer]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/research/SKILL.md
    title: "research skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# research

| | |
|---|---|
| Signature | `Question → Findings` |
| Family | transformer |
| Performed by | [The Factor](../offices/factor.md) — a [hard binding](../law.md) |

Structured information gathering from outside the estate — the only verb
whose agent works beyond the walls. `Question` is a
[boundary input](../types/index.md): operator words, not an artifact.

Produce [Findings](../types/findings.md): what was found, with sources;
what was looked for and **not** found; what could not be verified. Known
and inferred stay visibly separate. Findings without their limits are
worse than none, because they read as complete.

The Findings artifact **speaks OKF** (ADR 0018): citations live in
`sources:` frontmatter entries with credibility signals, claims footnote
to a `sources[].id`, and `stale_after:` marks the facts' honest shelf
life. It stays in the record's `artifacts/`; findings with cross-record
value are promoted to `reference/` by operator selection, citing the
artifact as source.
