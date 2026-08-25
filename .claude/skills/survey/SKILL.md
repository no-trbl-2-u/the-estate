---
name: survey
description: Walk the whole tank and report what deserves attention next - ranked shortlist plus convergent notices, written to the sitemap. Performed by The Cartographer; the Steward normally offers this at the greeting.
verb: survey
signature: "[Idea] → Survey"
agent: cartographer
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

## Staleness is mandatory metadata

The survey is derived data and goes stale the moment any record advances. Stamp
it with `generated:` and the exact `state-head` of every record covered, so the
Steward can diff against reality and know the survey is stale rather than
trusting it. A survey that cannot be checked is worse than none.

## Agent binding (hard)

Performed by **The Cartographer** (`cartographer`) and by no one else.
