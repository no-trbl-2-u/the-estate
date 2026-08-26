---
type: Decision Record
title: "ADR 0001"
description: "think-tank is an idea foundry, not a memory system."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0001: think-tank is an idea foundry, not a memory system

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q1–Q2

## Context
`VISION.md` is written memory-first: recall, lineage, and the graph as ends in
themselves, with artifacts as optional byproducts. In the interview, T stated
the actual goal directly: "I'm less interested in the memory and more
interested in what I can take OUT from the repo to use to build other
projects... The seed is the real idea."

## Decision
The system is organized around **extraction**. Ideas enter loose and leave as
Seeds (or Briefs); recall and lineage are side effects of the machinery, not
the product. Every structural choice below serves the export.

## Consequences
- This contradicts `VISION.md` as written. Reconciliation of the protected
  docs is a pending decision for T (see ADR 0010).
- "Success" has a checkable meaning — see `system/FALSIFIERS.md`: evidence of
  use outside this repo within one month (by 2026-09-25).
