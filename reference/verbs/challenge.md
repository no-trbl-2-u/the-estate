---
type: Verb
title: "challenge"
description: "Attack any artifact in good faith and set its classifiers; grade, never gate."
resource: ../../.claude/skills/challenge/SKILL.md
tags: [verb, refiner]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/challenge/SKILL.md
    title: "challenge skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# challenge

| | |
|---|---|
| Signature | `a → a` |
| Family | refiner |
| Performed by | [The Advocate](../offices/advocate.md) — a [hard binding](../law.md) |

Attack the artifact in good faith: the strongest counter-arguments, hidden
assumptions, and the concrete way it fails in practice. For a
[Horizon](../types/horizon.md) the central test is **falsifiability** —
demand it name what would make it wrong; one that cannot is classified
`horizon: unfalsified`, not rejected. You cannot write a falsifier for a
wish.

Output is the same type **as a new version** — never revised in place —
with `classifiers.challenged: true` set on it, and the horizon or
trajectory classifier per the result.

**Classification, not certification**: nothing is gated on the outcome.
Pushback is invocable, never mandatory — the operator chooses when the
attack runs and may decline it at the Steward's suggestion.
