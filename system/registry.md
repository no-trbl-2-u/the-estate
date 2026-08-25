# Routing Registry

The structured list the Steward consults when routing. Governed by
`system/LAW.md`: agents are persons, verbs are verbs, and **every binding is a
hard dependency** — a verb is performed by its bound agent and by no one else.

## Verbs

Verbs live in `.claude/skills/`, each carrying its binding in frontmatter. They
are directly invocable — the goal is that no one must *memorize* them, not that
invocation is forbidden. Invoking a verb never bypasses its binding.

| Verb | Family | Signature | Performed by | Status |
|---|---|---|---|---|
| `capture` | transformer | `Text → Spark` | **The Gardener** | active |
| `frame` | transformer | `Spark → Framing` | **The Gardener** | active |
| `envision` | transformer | `Framing → Horizon` | **The Architect** | active |
| `chart` | transformer | `Horizon → Trajectory` | **The Surveyor** | active |
| `phase` | decomposer | `Trajectory → [Phase]`, `Phase → [Phase]` | **The Surveyor** | active |
| `explore` | refiner | `a → a` | **The Forager** | active |
| `distill` | refiner | `a → a` | **The Distiller** | active |
| `challenge` | refiner | `a → a` | **The Advocate** | active |
| `relate` | edge author | `(Idea, Idea) → relates` | **The Cartographer** | active |
| `survey` | reader | `[Idea] → Survey` | **The Cartographer** | active |
| `seed` | transformer | `Horizon + Trajectory (+ [Phase]) → Seed` | **The Sower** | active |

Every verb has an owner. A verb whose agent is unavailable does not run: per
the hard-binding law the Steward reports the gap rather than performing it or
substituting another agent.

## Agents

The theme is **The Estate**: a great house and its grounds, run on behalf of an
owner who retains all authority. Agents live in `.claude/agents/`.
**Naming law:** every agent is named
thematically as "The ⟨Something⟩" — the frontmatter `name:` stays a lowercase
slug (the invocation id), while the thematic name opens the definition body
("You are The ⟨Name⟩") and appears here in bold. An agent may own several
verbs; a verb has exactly one agent.

| Agent | Office | Owns verbs | Status |
|---|---|---|---|
| **The Steward** (`steward` skill) | The front door. Greets, orients, derives routes, dispatches, **writes all state**. Performs no bound verb. | — | active |
| **The Gardener** (`gardener`) | Receives what arrives and gives it its first shape. | `capture`, `frame` | active |
| **The Architect** (`architect`) | Draws what an idea becomes when it is working. | `envision` | active |
| **The Surveyor** (`surveyor`) | Stakes out the route and sequences the ground. | `chart`, `phase` | active |
| **The Forager** (`forager`) | Wanders the idea and brings back what is out there. | `explore` | active |
| **The Distiller** (`distiller`) | Reduces an idea to what is load-bearing. | `distill` | active |
| **The Advocate** (`advocate`) | Good-faith adversarial attack; falsifiability testing. Classifies, never gates. | `challenge` | active |
| **The Cartographer** (`cartographer`) | Maps the estate and notices what connects. | `relate`, `survey` | active |
| **The Sower** (`sower`) | Sends the idea beyond the walls. | `seed` | active |

To install a specialist: create its agent file (opening "You are The ⟨Name⟩"),
add a row here, and set the `agent:` field in each verb it owns. The Steward's
interface never changes.

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| `spark-to-seed` | `capture ∘ frame ∘ envision ∘ challenge ∘ chart ∘ phase ∘ seed` | example only — routes are normally derived, not prescribed |
