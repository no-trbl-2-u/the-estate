---
type: Verb
title: "decide"
description: "Seal an explicit choice: decided, rejected, why, and what would reopen it."
resource: ../../.claude/skills/decide/SKILL.md
tags: [verb, transformer]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/decide/SKILL.md
    title: "decide skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# decide

| | |
|---|---|
| Signature | `Tensions → Decision` |
| Family | transformer |
| Performed by | [The Chancellor](../offices/chancellor.md) — a [hard binding](../law.md) |

Drive toward an explicit, recorded choice and seal it. A
[Decision](../types/decision.md) names four things and is incomplete
without them: **what was decided**, **what was rejected**, **why**, and
**what would reopen it**.

`Tensions` names the tensions in the record's head state snapshot; state
paths are legal `inputs:` targets, so the Decision's lineage chains like
everything else. If the operator is not ready to choose, the choice is
recorded as open — a premature decision is more expensive than an
acknowledged tension, because it looks settled.
