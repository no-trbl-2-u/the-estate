---
type: Decision Record
title: "ADR 0002"
description: "The Seed is the terminal type."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0002: The Seed is the terminal type

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q2, Q5, Q10

## Context
T's diagnosed failure when starting projects: "long term goals... an
elaborated vision and a rough idea of how to get there" were missing — a
starting point with no destination. And separately: Seeds that stay abstract,
with no actionable items, fail their purpose.

## Decision
A **Seed = Horizon + Trajectory**, deliberately thin on implementation, with
five required components: Horizon, Trajectory, a first actionable step, at
least one refusal, and a one-line provenance stamp
(`origin: idea-NNNN @ state/NNNN`).

Seeds leave **clean** — no forward baggage, no graveyard of rejected framings.
The provenance stamp is the only backward pointer, kept because it is
near-free now and irreversible to skip: it is the return address that makes a
future field-report/calibration loop possible ("which of my seeds survived
contact with reality?").

A **Brief** is the legitimate early-exit export for a run that stops short.

## Consequences
- No live link / sync in the first build; the return path is a deferred phase
  the stamp keeps open (interview Q2 discussion).
- Seeds must serve non-coding audiences (three friends' businesses), so the
  template carries an `audience:` field and domain-generality is load-bearing.
