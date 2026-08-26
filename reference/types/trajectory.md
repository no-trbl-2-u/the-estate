---
type: Artifact Type
title: "Trajectory"
description: "The rough path from here to the Horizon, terminating in something startable."
tags: [type]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: types
    resource: ../../system/TYPES.md
    title: "The Type System"
---

# Trajectory

Direction, ordering, and dependencies — deliberately thin on
implementation, but it must bottom out in a first actionable step. One
that stays abstract is classified `trajectory: abstract`, a recorded
[Seed falsifier](../falsifiers.md).

* Produced by [chart](../verbs/chart.md)
* Consumed by [phase](../verbs/phase.md) and [seed](../verbs/seed.md)
* Classifiers: `trajectory: actionable | abstract` · `challenged`
