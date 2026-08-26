---
type: Verb
title: "retire"
description: "Close a record with a terminal state and a reason; preservation, never deletion."
resource: ../../.claude/skills/retire/SKILL.md
tags: [verb, transition]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/retire/SKILL.md
    title: "retire skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# retire

| | |
|---|---|
| Signature | `Idea → Idea` |
| Family | transition |
| Performed by | [The Keeper](../offices/keeper.md) — a [hard binding](../law.md) |

Close a record with a terminal state and an explicit reason, returned to
the Steward to write. Retirement is preservation, never deletion: the
record stays whole, and reviving it is simply
[branching](../record-model.md) from any of its snapshots — the original
is never altered, because nothing here is ever altered.

Also the closing move of a [merge](../playbooks.md): the absorbed record
retires with reason `absorbed into idea-NNNN`.
