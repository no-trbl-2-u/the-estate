---
type: Decision Record
title: "ADR 0018"
description: "Findings artifacts speak OKF; promotion to reference/, never relocation."
tags: [adr, decision]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
verified: { by: human:T, at: 2026-08-26T00:00:00Z }
---

# ADR 0018: Findings speak OKF; promotion, never relocation

**Status:** accepted · **Date:** 2026-08-26 · **Source:** T's question and approval, this session

## Context

With the reference bundle in place (ADR 0017), T asked whether `research`
should drop its Findings into `reference/` as OKF documents. The question
splits into two: where Findings *live*, and what they *speak*.

## Decisions

**1. Findings stay in the record; relocation is rejected.** A Finding filed
in `reference/` would be invisible to the machinery that consumes it — the
`inputs:` chains, the handoff packets, and the gap derivation that suggests
`research` all look in the record's `artifacts/` — and it would fork the
type system (nine types in one schema, one in another) while muddying the
reference's charter as a derived view, never a second source of truth.

**2. Findings speak OKF.** The Findings artifact extends the record
frontmatter with the OKF v0.2 families, because they are the Factor's own
discipline made machine-readable: citations are `sources:` entries with
credibility signals (`author`, `usage_count`, `last_modified`) — "cite what
you found"; per-claim markdown footnotes key to a `sources[].id`; absence
from `sources` plus the body's not-found section — "bound what you didn't";
`generated:` in the actor convention; `verified:` absent until someone
confirms; and `stale_after:` set only when the shelf life is honestly
estimable — external knowledge rots on a schedule the other types don't
have, and OKF makes the rot a timestamp comparison. OKF permits the record
keys (`produced-by`, `inputs`, `potential-next-steps`, classifiers) as
extensions, and `type: Findings` was already conformant, so no template
changes: the contract lives in the research skill.

**3. Promotion, never relocation.** When a finding proves useful beyond
its record, the **operator may select promotion at the close**: a concept
is written into `reference/` whose `sources` cites the record artifact —
provenance preserved, the record keeps its original, the reference stays
curated. Promotion is never the Factor's default, or every research run
would silently grow the bundle.

## Consequences

- This is a **partial, per-type answer** to ADR 0017's open migration
  question: Findings is the wedge case where OKF pays most. Whether Spark,
  Framing, Horizon, and the rest follow — and whether the templates
  themselves migrate — remains open, now with a live precedent to judge by.
- `system/TYPES.md`, the research skill, The Factor's definition, and the
  reference concepts for `research` and `Findings` all state the contract.
- The falsifier clock is unchanged: **2026-09-25**, and a better-dressed
  Findings artifact is still not a Seed out the door.
