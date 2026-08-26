---
type: Verb
title: "chart"
description: "Sketch the rough path to the Horizon, ending in a startable step."
resource: ../../.claude/skills/chart/SKILL.md
tags: [verb, transformer]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/chart/SKILL.md
    title: "chart skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# chart

| | |
|---|---|
| Signature | `Horizon → Trajectory` |
| Family | transformer |
| Performed by | [The Surveyor](../offices/surveyor.md) — a [hard binding](../law.md) |

Sketch the rough path from the record's current state to its
[Horizon](../types/horizon.md) — direction, ordering, and dependencies,
thin on implementation by design.

The one hard requirement: the [Trajectory](../types/trajectory.md) must
**terminate in a first actionable step**, something startable Monday. A
path that bottoms out in abstraction is classified `trajectory: abstract`
(abstract acceptance criteria are a recorded
[Seed falsifier](../falsifiers.md)).

Route hints: usually `[phase, seed, challenge]`.
