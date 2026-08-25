---
name: challenge
description: Adversarial pressure-test of any artifact - the invocable devil's advocate. Refiner, a → a; sets the challenged classifier and tests Horizon falsifiability. Use when the operator wants an idea attacked, or when the Steward suggests testing before export.
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

## Agent binding

This skill delegates the attack itself to the **`devils-advocate`** agent
(`.claude/agents/devils-advocate.md`), handing it the target artifact and the
record's current state snapshot. The skill remains responsible for the
artifact revision, classifier updates, and the session close. If the agent is
unavailable, perform the attack inline under the same rules of engagement.
