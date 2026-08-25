# ADR 0007: Portfolio scoring — notice more, rank by reachability, display drift

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q8–Q9

## Context
T expects heavy use (portfolio, not workbench) and wants "a zero reasoning
answer to 'what should I work on next?'". T proposed distance-from-original
and distance-to-goal as starting metrics, and locked the orientation as
**"notice more"** despite ("even though") needing help finishing.

## Decision
The score (`system/SCORING.md`) is computed from structure only:
**reachability** (how much would one session move this toward Seed-shape) as
the primary rank — chosen over closest-to-done, which would sort the tank by
tidiness and bury raw Sparks permanently — times hand-set **appetite**.
Threshold-staleness and **convergent notices** (candidate `relates` edges,
duplicate-idea suspicions) are surfaced above the ranking: the noticing worth
amplifying is convergent, since divergent noticing is the one thing a serial
starter needs no help with. **Drift is displayed, never scored** — drift
usually means the idea is working.

## Consequences
- "Help me finish" is served as a side effect (threshold call-outs) without
  finishing-pressure, honoring the notice-more lock.
- Scale features (dashboards, indexes) wait until the tank is actually full;
  the spec exists so the Steward can apply it manually from day one.
