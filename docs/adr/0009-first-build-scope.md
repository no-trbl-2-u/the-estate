---
type: Decision Record
title: "ADR 0009"
description: "First-build scope."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0009: First-build scope

**Status:** accepted · **Date:** 2026-08-25 · **Source:** `BUILD-PROMPT.md` (smallest coherent build) + interview throughout

## Context
`BUILD-PROMPT.md` demands the minimum build demonstrating the core loop, no
speculative specialist fleet, and repository self-containment. The named
failure mode (`system/FALSIFIERS.md`) is building instead of using — scope is
the defense.

## Decision
**In:** the Steward; ten molecular skills (capture, frame, explore, distill,
challenge, envision, chart, phase, relate, seed); the type system, scoring
spec, falsifiers, and routing registry (`system/`); record/state/artifact/seed
templates; `ideas/` + `exports/` layout; one example playbook. Everything is
markdown + skills — no CLI, no code, no external dependencies; the repo is the
whole harness.

**Out (deliberately):** specialist agents (added on demand via the registry);
any sync/live-link to downstream repos (ADR 0002); eager indexing (ADR 0006);
computed scoring tooling (ADR 0007 — spec only); merge/split/absorb ceremony
(derived when needed, per ADR 0005); any rewrite of the protected docs
(ADR 0010).

## Consequences
- The core loop (capture → work → clean close → retrieve → continue → export)
  is exercisable today, by hand, through the Steward.
- The falsifier clock is running: the build is judged by an export used
  outside this repo before 2026-09-25, not by further machinery.
