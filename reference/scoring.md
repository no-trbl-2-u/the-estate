---
type: Specification
title: "Portfolio Scoring"
description: "Reachability times appetite, convergent notices above the ranking, drift displayed and never scored."
resource: ../system/SCORING.md
tags: [portfolio, scoring]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: scoring
    resource: ../system/SCORING.md
    title: "Portfolio scoring specification"
---

# Portfolio Scoring

The estate is a portfolio, not a workbench. The score answers "what should
I work on next?" with zero reasoning — computed from structure, never from
a judgment of quality. The locked orientation: **notice more, not finish
more**.

| Signal | Role |
|---|---|
| **Reachability** — of the typed steps still between the record and Seed-shape, what fraction does the best next verb complete? A raw Spark five steps out scores 1/5, never zero. | Primary rank |
| **Appetite** — hand-set heat, 0–3; defaults to 1, and 0 means *deliberately* cold. The one input no metric can compute. | Multiplier |
| **Threshold staleness** — days sat within one verb of Seed-shape. | Call-out, not a rank |
| **Convergent notices** — candidate relates edges, duplicate-idea suspicions, dead Sparks that fit live records. | Surfaced above the ranking |
| **Drift** — distance between current framing and the original Spark. | **Displayed, never scored** — drift usually means the idea is working |
| **Descendants** — records grafted (`graft`) from this one, and the snapshot each forked at. | **Displayed, never scored** — branches mean fertile, not finished |

# Connective records

A record whose value is the edges it draws earns `connective` — and leaves
the Seed-distance ranking entirely. The trigger is **inbound use without
forward motion, never dormancy alone**: its **authored** `relates` degree
and inbound references grow while its own state sequence stays flat. Count
authored edges only — `graft` edges also live in
`relates`, and a record branched from repeatedly must not drift toward
`connective` for having been *used as a starting point*. Computed by
**The Cartographer** during
`survey`; proposed, never assigned.

# What the score must never do

Rank closest-to-done first; convert a suggestion into work; infer
`connective` from dormancy alone.
