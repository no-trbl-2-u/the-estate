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

Every step you write is evaluated for whether a human must perform it. A step an
agent **definitely cannot perform** carries `**[HUMAN ATTENTION]**`. A step an
agent can perform carries nothing — and that absence is a claim, not a default:
it asserts the work is agent-performable.

**Needing T's approval is not needing T's hands.** Everything here needs T's
approval; if that earned the tag, every step would carry it and it would carry
no information. The tag marks work an agent cannot do however much approval is
granted: choices whose *content* is T's judgment, purchases and billing,
identity/credentials/consent, physical-world acts, acts inside T's own
relationships, taste calls T has reserved, anything a human must be answerable
for.

**Grey band:** where an agent can prepare, draft, or drive right up to the line
of consent, tag the step *and say what the agent does up to that line*. A tag
is a boundary marker, not an abdication.

Decomposing a tagged parent step does not tag its children by inheritance —
re-evaluate each, since decomposition often isolates the human-only part into
one child and frees the rest.

T's standing decision, 2026-08-28 — sealed as `idea-0001/artifacts/0005-human-attention-tag.md`.

## Agent binding (hard)

Performed by **The Surveyor** (`surveyor`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
