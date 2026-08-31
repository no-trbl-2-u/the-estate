---
name: chart
description: Chart the rough path from here to a Horizon. Transformer, Horizon → Trajectory. Performed by The Surveyor; the Steward normally dispatches this for you.
verb: chart
signature: "Horizon → Trajectory"
agent: surveyor
---

# chart — `Horizon → Trajectory`

Sketch the rough path from the record's current state to its Horizon. Thin on
implementation by design — direction, ordering, and dependencies, not detail.

The one hard requirement: the Trajectory must **terminate in a first
actionable step** — something startable Monday. If it bottoms out in
abstraction, classify it `trajectory: abstract` honestly (abstract acceptance
criteria are a recorded Seed falsifier — see `system/FALSIFIERS.md`).

Produce one `type: Trajectory` artifact, `potential-next-steps` usually
`[phase, seed, challenge]`. Close per protocol.

## The human-attention tag (required)

Ask of every leg you chart: **can an agent do this?** If yes, no tag. If it is a
"no matter what, AI can't do this," it carries `**[HUMAN ATTENTION]**`.

An untagged step is not a default — it is a claim that the work is
agent-performable.

Work an agent cannot do: choices whose *content* is T's judgment; purchases,
payments, billing; identity, credentials, consent, account ownership;
physical-world acts; acts inside T's own relationships; taste calls T has
reserved; anything a human must be personally or legally answerable for.

**Grey band:** where an agent can prepare, draft, or drive right up to the line
of consent, tag the step *and say what the agent does up to that line*. A tag
is a boundary marker, not an abdication.

Do not tag on "needs T's approval" — everything here does, so that criterion
would mark every step and discriminate nothing. Tag on hands, not sign-off.

T's standing decision, 2026-08-28 — sealed as `idea-0001/artifacts/0008-human-attention-tag.md`.

## Agent binding (hard)

Performed by **The Surveyor** (`surveyor`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
