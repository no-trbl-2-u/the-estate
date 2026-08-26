---
type: Artifact Type
title: "Seed"
description: "The terminal export: horizon plus trajectory, thin on implementation, clean."
tags: [type]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: types
    resource: ../../system/TYPES.md
    title: "The Type System"
  - id: template
    resource: ../../templates/seed.md
    title: "Seed template"
---

# Seed

The point of the whole system. A Seed typechecks only when **all five**
components are present:

1. **Horizon** — the six-month vision, elaborated.
2. **Trajectory** — the rough path toward it.
3. **Next concrete move** — startable Monday for a project; the case to
   test first for a conjecture; the scene to write first for a premise.
4. **At least one refusal** — a named thing this will *not* become.
5. **Provenance stamp** — one line, `origin: idea-NNNN @ state/NNNN`; the
   only thing that travels backward.

Anything less is a [Brief](./brief.md). Seeds leave **clean** — no session
logs, no rejected framings, no baggage — and are sized for their
`audience:`. The wording is deliberately domain-neutral: a business, a
conjecture, and a narrative premise are served by the same contract.

* Produced by [seed](../verbs/seed.md)
* Leaves the estate via `exports/`; template at `templates/seed.md`
* Classifiers travel with the export: `horizon` · `trajectory` · `challenged`
