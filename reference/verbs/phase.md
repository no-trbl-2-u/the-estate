---
type: Verb
title: "phase"
description: "Decompose a Trajectory into concrete, sequenced, recursive Phases."
resource: ../../.claude/skills/phase/SKILL.md
tags: [verb, decomposer]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/phase/SKILL.md
    title: "phase skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# phase

| | |
|---|---|
| Signature | `Trajectory → [Phase] · Phase → [Phase]` |
| Family | decomposer |
| Performed by | [The Surveyor](../offices/surveyor.md) — a [hard binding](../law.md) |

Decompose the input into concrete, sequenced
[Phases](../types/phase.md): each names its outcome, its dependencies, and
what "done" looks like. This is where recursion lives — a Phase may itself
be phased further, and any Phase may be [distilled](./distill.md).

One artifact per part, each with `inputs:` pointing at the decomposed
parent (that chain is how lineage is derived). Stop decomposing when a
step is startable as-is: **molecularity is the goal, dust is not**.
