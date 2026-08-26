---
type: Decision Record
title: "ADR 0017"
description: "Documentation adopts OKF; the reference bundle; ADR 0008's open question answered."
tags: [adr, decision]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
verified: { by: human:T, at: 2026-08-26T00:00:00Z }
---

# ADR 0017: Documentation adopts OKF; the reference bundle; the OKF question answered

**Status:** accepted · **Date:** 2026-08-26 · **Source:** T's instruction, this session

## Context

ADR 0008 recorded an open question: T had referenced an "OpenAI OKF"
documentation format as the model for artifact frontmatter, and the build
agent could not identify it. The question rode along in every state
snapshot since. T has now pointed at the spec directly.

## Decisions

**1. OKF is identified.** It is **Google Cloud's Open Knowledge Format**
(v0.2, from `GoogleCloudPlatform/knowledge-catalog`), not an OpenAI
format: markdown concepts with YAML frontmatter (`type` required),
provenance via `sources`, trust via `generated`/`verified` and the actor
convention, lifecycle via `status`/`stale_after`, links as the graph.
ADR 0008's open question closes.

**2. The `reference/` bundle.** A root section, and an OKF v0.2 bundle
proper (`okf_version` declared in its root `index.md`): the vendored spec
(Apache-2.0, attributed, body verbatim with provenance in frontmatter),
plus one concept per verb (17), office (13), and artifact type (10), and
core concepts for the law, the record model, scoring, lenses, shapes,
playbooks, falsifiers, and the estate itself — with `index.md` files for
progressive disclosure and a `log.md`. Every concept's `sources` names
the governing repository file, so the reference is an honestly-derived
view, not a second source of truth: **where they disagree, `system/`
wins.** Links are relative so the bundle renders on GitHub.

**3. All prose documentation carries OKF frontmatter.** README, VISION,
AGENTS, CLAUDE, `system/*`, all seventeen ADRs, the playbooks, the ideas
and exports guides, the survey, and both audit documents. Historical
records (`BRAINSTORM.md`, `BUILD-PROMPT.md`) carry `status: deprecated` —
OKF's own "kept for links and history" — with bodies untouched, and the
superseded ADR 0011 likewise. `system/FALSIFIERS.md` and the falsifiers
concept carry `stale_after: 2026-09-25` — the falsifier's check date *is*
an OKF staleness instant, so the clock is now machine-readable.

**4. Exclusions, deliberate.** HTML documents (per T's instruction);
`templates/` (forms whose frontmatter *is* the artifact schema — stamping
them would corrupt what they generate); `.claude/skills/` and
`.claude/agents/` (operational configuration, not documentation); and
idea-record data files (`idea.md`, `state/`, `artifacts/`), which keep
their own schema.

**5. The sharpened open question, for T.** OKF's families map suggestively
onto the record schema itself: `produced-by` ≈ `generated.by`,
`challenged` ≈ a verification event, `inputs:` ≈ `sources`. Migrating the
**artifact/state/idea templates** to OKF fields would make every record a
conformant bundle — and would change the schema every verb writes. That
is a structural decision this ADR does not make. ADR 0008 called the
current frontmatter "a placeholder shape, cheap to migrate"; the
migration target now exists, and the choice is T's.

## Consequences

- Conformance is mechanically checkable (frontmatter parses, `type`
  present, links resolve) and was checked for this change.
- The reference bundle is derived documentation and can drift from
  `system/`; its per-concept `sources` make the drift auditable, and its
  `log.md` records updates.
- The survey's placeholder `generated: never` gave way to OKF semantics:
  `survey` now stamps `generated: { by, at }` alongside `covers:`.
- None of this is evidence of use outside the repository. The falsifier
  clock still runs to **2026-09-25**.
