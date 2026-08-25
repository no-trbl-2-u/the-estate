# Routing Registry

The structured list the Steward consults when routing. Adding a specialist here
is the whole act of installing it — the Steward's interface never changes.

## Skills

Each skill binds to the agent(s) that perform its work. Valid bindings, per
the interview: **one specific agent**, **multiple agents**, the **general**
agent (the invoking session itself), or **steward-inline** (the Steward acts
directly, for reads and routing only). Rebinding a skill is an edit to its
row here plus an "Agent binding" note in its SKILL.md — the skill's interface
never changes.

| Skill | Family | Signature | Agent(s) | Status |
|---|---|---|---|---|
| `steward` | entrypoint | — | steward-inline | active |
| `capture` | transformer | `Text → Spark` | general | active |
| `frame` | transformer | `Spark → Framing` | general | active |
| `explore` | refiner | `a → a` | general | active |
| `distill` | refiner | `a → a` | general | active |
| `challenge` | refiner | `a → a` (sets `challenged`, tests falsifiability) | `devils-advocate` | active |
| `envision` | transformer | `Framing → Horizon` | general | active |
| `chart` | transformer | `Horizon → Trajectory` | general | active |
| `phase` | decomposer | `Trajectory → [Phase]`, `Phase → [Phase]` | general | active |
| `relate` | edge author | `(Idea, Idea) → relates` | general | active |
| `seed` | transformer | `Horizon + Trajectory (+ [Phase]) → Seed` | general | active |

## Specialist agents

Specialists live in `.claude/agents/` and are added on demand, never
pre-populated. To install one: create its agent file, add a row here, and
bind it in the skills table above — the Steward routes to it from then on.
Every specialist receives a handoff packet (state snapshot + input artifacts +
requested lens/output) and returns raw findings; the invoking skill owns the
artifact writes and the session close.

| Agent | Capability | Bound to | Status |
|---|---|---|---|
| `devils-advocate` | Good-faith adversarial attack; falsifiability testing. Classifies, never gates. | `challenge` | active |

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| `spark-to-seed` | `capture ∘ frame ∘ envision ∘ challenge ∘ chart ∘ phase ∘ seed` | example only — routes are normally derived, not prescribed |
