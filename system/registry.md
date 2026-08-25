# Routing Registry

The structured list the Steward consults when routing. Adding a specialist here
is the whole act of installing it — the Steward's interface never changes.

## Skills

| Skill | Family | Signature | Status |
|---|---|---|---|
| `steward` | entrypoint | — | active |
| `capture` | transformer | `Text → Spark` | active |
| `frame` | transformer | `Spark → Framing` | active |
| `explore` | refiner | `a → a` | active |
| `distill` | refiner | `a → a` | active |
| `challenge` | refiner | `a → a` (sets `challenged`, tests falsifiability) | active |
| `envision` | transformer | `Framing → Horizon` | active |
| `chart` | transformer | `Horizon → Trajectory` | active |
| `phase` | decomposer | `Trajectory → [Phase]`, `Phase → [Phase]` | active |
| `relate` | edge author | `(Idea, Idea) → relates` | active |
| `seed` | transformer | `Horizon + Trajectory (+ [Phase]) → Seed` | active |

## Specialist agents

None yet. Specialists are added on demand, never pre-populated. To add one:
append a row (name, capability, handoff expectations) and the Steward can route
to it.

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| `spark-to-seed` | `capture ∘ frame ∘ envision ∘ challenge ∘ chart ∘ phase ∘ seed` | example only — routes are normally derived, not prescribed |
