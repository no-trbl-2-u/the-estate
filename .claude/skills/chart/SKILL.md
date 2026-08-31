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

Every leg you chart is evaluated for whether a human must perform it. A step an
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

T's standing decision, 2026-08-28 — sealed as `idea-0001/artifacts/0005-human-attention-tag.md`.

## Agent binding (hard)

Performed by **The Surveyor** (`surveyor`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
