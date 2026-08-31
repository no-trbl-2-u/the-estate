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

## The human-attention tag (required)

Ask of every step you write: **can an agent do this?** If yes, no tag. If it is
a "no matter what, AI can't do this," it carries `**[HUMAN ATTENTION]**`.

An untagged step is not a default — it is a claim that the work is
agent-performable.

Work an agent cannot do: choices whose *content* is T's judgment; purchases,
payments, billing; identity, credentials, consent, account ownership;
physical-world acts; acts inside T's own relationships; taste calls T has
reserved; anything a human must be personally or legally answerable for.

**Grey band:** where an agent can prepare, draft, or drive right up to the line
of consent, tag the step *and say what the agent does up to that line*. A tag
is a boundary marker, not an abdication.

Decomposing a tagged parent step does not tag its children by inheritance —
re-evaluate each, since decomposition often isolates the human-only part into
one child and frees the rest.

Do not tag on "needs T's approval" — everything here does, so that criterion
would mark every step and discriminate nothing. Tag on hands, not sign-off.

T's standing decision, 2026-08-28 — sealed as `idea-0001/artifacts/0008-human-attention-tag.md`.

## Agent binding (hard)

Performed by **The Surveyor** (`surveyor`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
