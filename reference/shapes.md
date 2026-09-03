---
type: Reference
title: "Output Shapes"
description: "How an artifact renders for a reader - chosen by the operator, never by the verb; an open vocabulary."
tags: [shapes, dimensions]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: types
    resource: ../system/TYPES.md
    title: "The Type System"
---

# Output Shapes

The verb determines an artifact's **type**; it never determines its
**shape** — how the artifact renders for a reader. Type is for the machine
(composition, gap calculation); shape is for the audience. A `Horizon` can
render as a PRD. This is what keeps the *no output-type siloing* non-goal
true under a typed system.

| Shape | For |
|---|---|
| `prose` | Default. The thinking, written plainly |
| `prd` | A product requirements document |
| `research-brief` | Findings written for someone who wasn't there |
| `decision-record` | The choice, the rejected alternatives, the why |
| `phases` | A sequenced work breakdown |
| `none` | No rendered artifact; the session log is the output |

**Shapes are a vocabulary, not a closed enum.** When an audience needs a
shape the table doesn't have, name it in the artifact's `shape:`
frontmatter and it exists. The table lists the domain-neutral recurring
ones; domain-specific shapes belong to sessions.

The three dimensions — [verb](../system/registry.md),
[lens](./lenses.md), shape — are independent axes, never conflated.
