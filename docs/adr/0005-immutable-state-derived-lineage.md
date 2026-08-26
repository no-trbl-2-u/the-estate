---
type: Decision Record
title: "ADR 0005"
description: "Immutable copy-forward state; lineage derived; `relates` only authored edge."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0005: Immutable copy-forward state; lineage derived; `relates` only authored edge

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q7 + T's state note

## Context
`VISION.md`/`BUILD-PROMPT.md` specify six-plus hand-authored edge types with
acceptance criteria requiring all of them verified in phase one. T
independently specified: state is "always a copy of the state and then
updated... we'd be able to time travel... that old state becomes
documentation" — and, on authored-vs-derived lineage, chose derived.

## Decision
Every session copies the latest state snapshot forward and updates the copy;
prior states are never edited (`ideas/*/state/NNNN.md`). Skill invocations
record `inputs:`/`outputs:`, so **lineage is read off the composition log**:
branch, merge, split, and parent are derived views, not maintained data. Time
travel is opening an older file; branching is copying forward from an older
snapshot into a new record.

**`relates` is the sole hand-authored edge** — produced by no skill, it is the
connection the machinery cannot make, and (per ADR 0007) the highest-value
output for a serial starter.

## Consequences
- The first build carries no graph database and no edge-maintenance ceremony —
  a large scope cut against `BUILD-PROMPT.md`'s acceptance criteria (flagged in
  ADR 0010).
- State snapshots double as documentation: decisions, gold nuggets, and open
  questions are captured in the snapshot template.
