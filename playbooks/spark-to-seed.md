---
type: Playbook
title: "Playbook: spark-to-seed"
description: "The canonical full run from raw text to Seed; any prefix is a valid stop."
tags: [playbook, composition]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Playbook: spark-to-seed

**Composition:** `capture ▸ frame ▸ envision ▸ challenge ▸ chart ▸ phase ▸ seed`

(`▸` is the left-to-right pipeline arrow — apply `capture` first. The
mathematician's `∘` reads right-to-left and would put `seed` first.)

The canonical full run, shown once so the shape is visible. Typechecks:

```
Text → Spark → Framing → Horizon → Horizon(challenged) → Trajectory → [Phase] → Seed
```

Any prefix of this composition is a valid stopping point — exiting early yields
a Brief. Refiners (`explore`, `distill`, `challenge`) may be interleaved at any
step, since `a → a` composes anywhere. This playbook is an example, not a
pipeline: most ideas will not take this route, and that is the system working.
