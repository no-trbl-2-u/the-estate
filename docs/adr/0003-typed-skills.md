# ADR 0003: Skills are typed composed functions in three families

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q3–Q5

## Context
T: skills must "mimic a functional programming style composed function.
Incredibly molecular, singular focus," with playbooks as compositions — and
chose **Typed** over loose `Record → Record`, accepting the risk that a type
vocabulary could reintroduce pipeline rigidity.

## Decision
Artifacts are typed values (`Spark`, `Framing`, `Horizon`, `Trajectory`,
`Phase`, `Brief`, `Seed`); skills are functions over them in three families:
**refiners** `a → a` (distill, challenge, explore — re-runnable, depth-free),
**transformers** `a → b` (frame, envision, chart, seed), and **decomposers**
`a → [b]` (phase — where recursion lives: `Phase → [Phase]`, satisfying T's
"a Phase could be distilled/decomposed further").

The payoff is **route derivation**: the Steward computes the gap between an
idea's current artifacts and Seed-shape and recommends the skill that closes
the most of it. Routes differ because gaps differ — which is how "not the same
pipeline every time" is achieved without hand-authored pipelines.

## Consequences
- The type vocabulary is deliberately small (7 types) to avoid forcing ideas
  through nearest-shaped holes; extending it is a registry + TYPES.md change.
- Playbooks (e.g. `playbooks/spark-to-seed.md`) are worked examples, never
  required routes.
