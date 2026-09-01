---
name: survey
description: Walk the whole estate and report what deserves attention next - ranked shortlist plus convergent notices, written to the sitemap. Performed by The Cartographer; the Steward normally offers this at the greeting.
verb: survey
signature: "[Idea] → Survey"
agent: cartographer
mode: batch
---

# survey — `[Idea] → Survey`

Read every Idea Record and produce the sitemap at `ideas/SURVEY.md`: per-record
metadata (state, appetite, artifacts held, distance from Seed-shape, computed
score) plus the shortlist and the convergent notices.

Rank by **reachability × appetite** per `system/SCORING.md` — how much would one
verb move this — never by closest-to-done. Surface above the ranking:

- records that look like the same idea wearing different hats
- records sitting one verb from Seed-shape, and how long they have sat there
- dead or dormant Sparks that fit a live record

Drift is **displayed, never scored**.

## Show the branches

Report each record's **descendants** — records grafted from it — and the
snapshot each forked at, plus each record's own source if it is itself a graft.
Read them off `relates` and **confirm against the counterpart's Origin**: that
is what tells a graft edge from an authored one, and only authored edges count
toward `connective` (`system/SCORING.md`). Descendants are displayed, never
scored — a record with three branches is fertile, not finished, and the fork
points are the map of where the thinking actually divided.

An edge in `relates` that no Origin accounts for and no operator authored is
worth reporting as a notice. So is a graft whose source's `relates` never got
the back-edge: lineage is meant to read in both directions, and a one-way
graft edge is a lost fact, not a tidy one.

## Staleness is mandatory metadata

The survey is derived data and goes stale the moment any record advances. Stamp
it with `generated:` and the exact `state-head` of every record covered, so the
Steward can diff against reality and know the survey is stale rather than
trusting it. A survey that cannot be checked is worse than none.

## Agent binding (hard)

Performed by **The Cartographer** (`cartographer`) and by no one else.
