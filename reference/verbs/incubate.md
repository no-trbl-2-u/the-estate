---
type: Verb
title: "incubate"
description: "Park a record with a reason and a wake condition."
resource: ../../.claude/skills/incubate/SKILL.md
tags: [verb, transition]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/incubate/SKILL.md
    title: "incubate skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# incubate

| | |
|---|---|
| Signature | `Idea → Idea` |
| Family | transition |
| Performed by | [The Keeper](../offices/keeper.md) — a [hard binding](../law.md) |

Park a record deliberately. The Keeper decides **why** it is being parked
and **what would wake it** — a date, a condition, a dependency — and
returns both to the Steward, who writes `status: incubating`
([record frontmatter is state](../law.md)). An incubated record with no
wake condition is an abandoned one wearing a nicer word.

Changes status, never content. Nothing is deleted; the record remains
fully resumable at any moment.
