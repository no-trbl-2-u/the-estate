---
name: phase
description: Break a Trajectory or Phase into concrete sequenced parts. Decomposer, Trajectory → [Phase]. Performed by its bound agent; the Steward normally dispatches this for you.
verb: phase
signature: "Trajectory → [Phase]"
agent: TBD
---

# phase — `Trajectory → [Phase]`, `Phase → [Phase]` (decomposer)

Decompose the input into concrete, sequenced Phases: each one names its
outcome, its dependencies, and what "done" looks like. This is where recursion
lives — a Phase may itself be phased further, and any Phase may be `distill`ed.

Produce one `type: Phase` artifact per part, each with `inputs:` pointing at
the decomposed parent (this chain is how lineage is derived). Stop decomposing
when a step is startable as-is; molecularity is the goal, dust is not.
Close per protocol.
