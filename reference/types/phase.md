---
type: Artifact Type
title: "Phase"
description: "One sequenced step of a Trajectory; recursive."
tags: [type]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: types
    resource: ../../system/TYPES.md
    title: "The Type System"
---

# Phase

A concrete, sequenced step: its outcome, its dependencies, and what
"done" looks like. Recursive — a Phase may decompose into Phases, to any
depth that stays useful, stopping when a step is startable as-is.

* Produced by [phase](../verbs/phase.md)
* Consumed by [phase](../verbs/phase.md) (recursion) and optionally
  [seed](../verbs/seed.md)
