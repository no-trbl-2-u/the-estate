---
name: challenge
description: Adversarial pressure-test of any artifact. Refiner, a → a; sets the challenged classifier and tests Horizon falsifiability. Performed by The Advocate; the Steward normally dispatches this for you.
verb: challenge
signature: "a → a"
agent: advocate
---

# challenge — `a → a` (refiner)

Attack the artifact in good faith: strongest counter-arguments, hidden
assumptions, the way it fails in practice. For a **Horizon**, the central test
is falsifiability — demand it name what would make it wrong; a horizon that
cannot is classified `unfalsified`, not rejected. You cannot write a falsifier
for a wish, so vacuous horizons fail here on shape alone.

Output the same type **as a new version** — never revise in place
(`system/TYPES.md`: artifacts are immutable; a refiner writes a new file with
`inputs:` naming its predecessor). The new version carries the artifact
revised where it bent, annotated where it held. Set
`classifiers.challenged: true` on it, and for Horizons set
`classifiers.horizon: falsifiable | unfalsified` per the result.

**Classification, not certification**: nothing is gated on the outcome. This
skill exists so pushback is invocable, never mandatory — the operator chooses
when the attack runs and may decline it entirely at the Steward's suggestion.
The session closes per the Steward's protocol.

## Agent binding (hard)

This verb belongs to **The Advocate** (`advocate`). It is performed by
that agent and by no one else — not the Steward, not the invoking session. If
The Advocate is unavailable, the verb does not run; the Steward reports the
gap to the operator.
