---
name: chart
description: Chart the rough path from here to a Horizon. Transformer, Horizon → Trajectory. Performed by its bound agent; the Steward normally dispatches this for you.
verb: chart
signature: "Horizon → Trajectory"
agent: TBD
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
