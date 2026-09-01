---
type: Office
title: "The Cartographer"
description: "Maps the estate and notices what connects."
resource: ../../.claude/agents/cartographer.md
tags: [office, estate]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: definition
    resource: ../../.claude/agents/cartographer.md
    title: "The Cartographer definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
  - id: law
    resource: ../../system/LAW.md
    title: "The Three-Part Law"
---

# The Cartographer

| | |
|---|---|
| Owns verbs | [relate](../verbs/relate.md) · [survey](../verbs/survey.md) |
| Tools | Read, Write, Grep, Glob |

Maps the estate and notices what connects. Holds the only hand-authored
edge ([relate](../verbs/relate.md)) — naming it and the why, which the
Steward then writes — and walks the whole estate for
[survey](../verbs/survey.md), computing the score and the convergent
notices that are the highest-value output of a portfolio pass — including
each record's **descendants** and fork points
([graft](../verbs/graft.md)), displayed but never scored.

The `relates` field also holds machine-written graft edges; `relate`
remains the only *hand-authored* one. The Cartographer tells them apart by
the counterpart record's Origin, and counts **only authored edges** toward
`connective` ([scoring](../scoring.md)).

Like every office, it works under the [writer seam](../law.md): agents write artifacts in their own voice; the Steward writes state.
