---
type: Artifact Type
title: "Findings"
description: "Gathered information with its sources, honestly bounded by what was not found."
tags: [type]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: types
    resource: ../../system/TYPES.md
    title: "The Type System"
---

# Findings

What was found (with sources), what was looked for and not found, and
what could not be verified — known and inferred visibly separate. Not a
Seed component: Findings feed the operator and the route, reached through
open questions rather than Seed-distance.

**Findings speak OKF** (ADR 0018): the artifact extends the record
frontmatter with the [OKF](../okf-spec.md) families — citations as
`sources:` entries with credibility signals, per-claim footnotes keyed to
`sources[].id`, `generated:` in the actor convention, and `stale_after:`
when the facts' shelf life is honestly estimable. External knowledge rots
on a schedule the other types don't have.

The artifact lives in the record's `artifacts/`. A finding with
cross-record value is **promoted** — a concept in `reference/` citing the
artifact as its source — never relocated: the record keeps its original,
and the reference stays a derived, curated view.

* Produced by `research`
* Consumed by the operator and the Steward's route derivation
* Promotable to `reference/`, by operator selection
