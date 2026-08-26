---
type: Verb
title: "explore"
description: "Develop any artifact open-endedly without commitment; same type, richer."
resource: ../../.claude/skills/explore/SKILL.md
tags: [verb, refiner]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/explore/SKILL.md
    title: "explore skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# explore

| | |
|---|---|
| Signature | `a → a` |
| Family | refiner |
| Performed by | [The Forager](../offices/forager.md) — a [hard binding](../law.md) |

Develop any artifact open-endedly: follow threads, generate variants,
chase implications. No commitment is required and no conclusion is forced —
unresolved thinking is a complete, valid output.

Returns the **same type in, sharper out**: a new immutable version whose
`inputs:` names its predecessor
([artifact versioning](../record-model.md)). Safe to run repeatedly.
Updates `potential-next-steps` to reflect what the exploration opened.

`explore` then per-variant [capture](./capture.md) is also how one record
[splits](../playbooks.md) into siblings.
