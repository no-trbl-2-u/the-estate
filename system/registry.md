# Routing Registry

The structured list the Steward consults when routing. Governed by
`system/LAW.md`: agents are persons, verbs are verbs, and **every binding is a
hard dependency** — a verb is performed by its bound agent and by no one else.

## Verbs

Verbs live in `system/verbs/` — deliberately outside `.claude/skills/`, so no
verb is a user-facing command. The operator invokes the Steward only.

| Verb | Family | Signature | Performed by | Status |
|---|---|---|---|---|
| `capture` | transformer | `Text → Spark` | *unassigned* | pending agent |
| `frame` | transformer | `Spark → Framing` | *unassigned* | pending agent |
| `explore` | refiner | `a → a` | *unassigned* | pending agent |
| `distill` | refiner | `a → a` | *unassigned* | pending agent |
| `challenge` | refiner | `a → a` | **The Advocate** (`devils-advocate`) | active |
| `envision` | transformer | `Framing → Horizon` | *unassigned* | pending agent |
| `chart` | transformer | `Horizon → Trajectory` | *unassigned* | pending agent |
| `phase` | decomposer | `Trajectory → [Phase]`, `Phase → [Phase]` | *unassigned* | pending agent |
| `relate` | edge author | `(Idea, Idea) → relates` | *unassigned* | pending agent |
| `seed` | transformer | `Horizon + Trajectory (+ [Phase]) → Seed` | *unassigned* | pending agent |

A verb marked *unassigned* does not run: per the hard-binding law the Steward
reports the gap rather than performing it or substituting another agent.
Assigning the remaining verbs is blocked on the agent-naming theme (ADR 0012).

## Agents

Agents live in `.claude/agents/`. **Naming law:** every agent is named
thematically as "The ⟨Something⟩" — the frontmatter `name:` stays a lowercase
slug (the invocation id), while the thematic name opens the definition body
("You are The ⟨Name⟩") and appears here in bold. An agent may own several
verbs; a verb has exactly one agent.

| Agent | Office | Owns verbs | Status |
|---|---|---|---|
| **The Steward** (`steward` skill) | Sole entrypoint. Orients, derives routes, dispatches, owns record writes. Performs no bound verb. | — | active |
| **The Advocate** (`devils-advocate`) | Good-faith adversarial attack; falsifiability testing. Classifies, never gates. | `challenge` | active |

To install a specialist: create its agent file (opening "You are The ⟨Name⟩"),
add a row here, and set the `agent:` field in each verb it owns. The Steward's
interface never changes.

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| `spark-to-seed` | `capture ∘ frame ∘ envision ∘ challenge ∘ chart ∘ phase ∘ seed` | example only — routes are normally derived, not prescribed |
