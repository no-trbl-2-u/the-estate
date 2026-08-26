---
type: Verb
title: "seed"
description: "Assemble the five-component terminal export, or a Brief when it falls short."
resource: ../../.claude/skills/seed/SKILL.md
tags: [verb, transformer]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/seed/SKILL.md
    title: "seed skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# seed

| | |
|---|---|
| Signature | `Horizon + Trajectory (+ [Phase]) → Seed` |
| Family | transformer |
| Performed by | [The Sower](../offices/sower.md) — a [hard binding](../law.md) |

Assemble the terminal export. A [Seed](../types/seed.md) typechecks only
when all five components are present: Horizon, Trajectory, first
actionable step, at least one refusal, and the provenance stamp. If a
component is missing, the gap report says exactly which and names the verb
that produces it — and the operator may export anyway as a
[Brief](../types/brief.md). **Grade, never gate.**

Seeds leave **clean**: no session logs, no rejected framings, no baggage —
the provenance stamp is the only line that points backward. The export
copy lands in `exports/`, sized and worded for its `audience:`.
