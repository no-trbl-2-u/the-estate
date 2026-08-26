---
type: Verb
title: "survey"
description: "Walk every record and write the ranked, staleness-stamped sitemap."
resource: ../../.claude/skills/survey/SKILL.md
tags: [verb, reader]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/survey/SKILL.md
    title: "survey skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# survey

| | |
|---|---|
| Signature | `[Idea] → Survey` |
| Family | reader |
| Performed by | [The Cartographer](../offices/cartographer.md) — a [hard binding](../law.md) |

Walk every Idea Record and write the sitemap (`ideas/SURVEY.md`):
per-record metadata, distance from Seed-shape, computed
[score](../scoring.md), the ranked shortlist, and — above the ranking —
the **convergent notices**: records that are secretly the same idea,
records one verb from a Seed sitting idle, dead Sparks that fit live
records.

The survey is derived data and goes stale the moment any record advances,
so it is stamped with its generation time and the exact `state-head` of
every record covered — staleness is detectable, never silent. Reads
everything, changes nothing.
