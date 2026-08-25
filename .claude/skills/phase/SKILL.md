---
name: phase
description: Break a Trajectory or Phase into concrete sequenced parts. Decomposer, Trajectory → [Phase]. Performed by The Surveyor; the Steward normally dispatches this for you.
verb: phase
signature: "Trajectory → [Phase]"
agent: surveyor
---

# phase — `Trajectory → [Phase]`, `Phase → [Phase]` (decomposer)

Decompose the input into concrete, sequenced Phases: each one names its
outcome, its dependencies, and what "done" looks like. This is where recursion
lives — a Phase may itself be phased further, and any Phase may be `distill`ed.

Produce one `type: Phase` artifact per part, each with `inputs:` pointing at
the decomposed parent (this chain is how lineage is derived). Stop decomposing
when a step is startable as-is; molecularity is the goal, dust is not.
Close per protocol.

## Agent binding (hard)

Performed by **The Surveyor** (`surveyor`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
