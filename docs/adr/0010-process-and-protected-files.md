---
type: Decision Record
title: "ADR 0010"
description: "Build authorized from the confirmed interview; protected files untouched."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0010: Build authorized from the confirmed interview; protected files untouched

**Status:** accepted · **Date:** 2026-08-25 · **Source:** T's build instruction

## Context
`BUILD-PROMPT.md` defines two stop points: synthesis confirmation after the
interview, then a design package requiring approval before implementation.
The 10-question interview was completed and its synthesis presented; T
responded by directly instructing: "Take everything you've learned... and
build this workspace. Create an ADR to track all the major decisions."

## Decision
T's instruction is exercised as T's final authority (per `AGENTS.md`) to
collapse the second boundary: the confirmed synthesis serves as the approved
design, and this ADR set is the design record. The five protected context
files (`README.md`, `VISION.md`, `BRAINSTORM.md`, `BUILD-PROMPT.md`,
`docs/idea-pipeline.html`) were **not modified**, since their protection
requires explicit per-file approval that was not given.

## Consequences — pending decisions for T
The protected docs now contradict the built system in three known places:
1. `VISION.md` is memory-first; the system is extraction-first (ADR 0001).
2. The authored six-edge vocabulary vs. derived lineage + `relates` (ADR 0005).
3. No portfolio/scoring concept exists in the docs; it is now a headline
   feature (ADR 0007).

Reconciling them is a proposal awaiting T's explicit approval. Until then, the
`system/` directory and these ADRs are the operational law where they conflict.
