---
name: challenge
description: Adversarial pressure-test of any artifact. Refiner, a → a; sets the challenged classifier and tests Horizon falsifiability. Performed by The Advocate; the Steward normally dispatches this for you.
verb: challenge
signature: "a → a"
agent: devils-advocate
---

# challenge — `a → a` (refiner)

Attack the artifact in good faith: strongest counter-arguments, hidden
assumptions, the way it fails in practice. For a **Horizon**, the central test
is falsifiability — demand it name what would make it wrong; a horizon that
cannot is classified `unfalsified`, not rejected. You cannot write a falsifier
for a wish, so vacuous horizons fail here on shape alone.

Output the same type: the artifact revised where it bent, annotated where it
held. Set `classifiers.challenged: true`, and for Horizons set
`classifiers.horizon: falsifiable | unfalsified` per the result.

**Classification, not certification**: nothing is gated on the outcome, and
the operator may stop the attack at any time — this skill exists so pushback
is invocable, never mandatory. Close per protocol.

## Agent binding (hard)

This verb belongs to **The Advocate** (`devils-advocate`). It is performed by
that agent and by no one else — not the Steward, not the invoking session. If
The Advocate is unavailable, the verb does not run; the Steward reports the
gap to the operator.
