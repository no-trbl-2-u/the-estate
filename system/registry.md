---
type: Registry
title: "Routing Registry"
description: "Every verb, every office, and every hard binding the Steward consults when routing."
tags: [registry, routing]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Routing Registry

The structured list the Steward consults when routing. Governed by
`system/LAW.md`: agents are persons, verbs are verbs, and **every binding is a
hard dependency** — a verb is performed by its bound agent and by no one else.

## Verbs

Verbs live in `.claude/skills/`, each carrying its binding in frontmatter. They
are directly invocable — the goal is that no one must *memorize* them, not that
invocation is forbidden. Invoking a verb never bypasses its binding.

| Verb | Family | Signature | Performed by | Mode | Status |
|---|---|---|---|---|---|
| `capture` | transformer | `Text → Spark` | **The Gardener** | batch | active |
| `frame` | transformer | `Spark → Framing` | **The Gardener** | **audience** | active |
| `envision` | transformer | `Framing → Horizon` | **The Architect** | batch | active |
| `chart` | transformer | `Horizon → Trajectory` | **The Surveyor** | batch | active |
| `phase` | decomposer | `Trajectory → [Phase]`, `Phase → [Phase]` | **The Surveyor** | batch | active |
| `explore` | refiner | `a → a` | **The Forager** | **audience** | active |
| `distill` | refiner | `a → a` | **The Distiller** | batch | active |
| `challenge` | refiner | `a → a` | **The Advocate** | **audience** | active |
| `relate` | edge author | `(Idea, Idea) → relates` | **The Cartographer** | batch | active |
| `survey` | reader | `[Idea] → Survey` | **The Cartographer** | batch | active |
| `seed` | transformer | `Horizon + Trajectory (+ [Phase]) → Seed` | **The Sower** | batch | active |
| `research` | transformer | `Question → Findings` | **The Factor** | batch | active |
| `compare` | aggregator | `[a] → Appraisal` | **The Assayer** | batch | active |
| `review` | transformer | `a → Appraisal` | **The Assayer** | batch | active |
| `decide` | transformer | `Tensions → Decision` | **The Chancellor** | **audience** | active |
| `incubate` | transition | `Idea → Idea` | **The Keeper** | batch | active |
| `retire` | transition | `Idea → Idea` | **The Keeper** | batch | active |
| `graft` | transformer | `(Idea @ state-N, Direction) → Idea` | **The Gardener** | batch | active |

**Mode** (`system/LAW.md`) says how the verb is run, never who runs it. A
`batch` verb runs to completion on its handoff packet. An **audience** verb is
dispatched, then the Steward introduces the operator and steps out: the
operator converses with the agent directly, and the agent ends by writing its
artifact and returning the handback packet. The four audiences are the four
verbs whose quality depends on the operator's live words rather than on what
the record already holds — `frame` needs the operator's sense of the problem,
`challenge` needs them to defend it, `decide` needs their word to seal it, and
`explore` is a conversation by nature.

Every verb has an owner. A verb whose agent is unavailable does not run: per
the hard-binding law the Steward reports the gap rather than performing it or
substituting another agent.

**`jot` is deliberately absent from this table.** It is a Steward **clerical
duty**, not a bound verb: it produces a `Slip` — a boundary input on the front
step — and no artifact, so the hard-binding law does not reach it (ADR 0023,
`system/TYPES.md`). It is invocable as `/jot` and appears in the agents table
on the Steward's row. Every verb below the line that *does* produce an artifact
is bound, without exception.

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
| **The Steward** (`steward` skill) | The front door. Greets, orients, derives routes, dispatches, **writes all state**. Performs no bound verb. Holds one **clerical duty**: `jot` (`Text → Slip`, ADR 0023) — not a bound verb, because a slip is a boundary input and no artifact is produced. | — (clerical: `jot`) | active |
| **The Gardener** (`gardener`) | Receives what arrives and gives it its first shape — including an arrival whose origin is internal. | `capture`, `frame`, `graft` | active |
| **The Architect** (`architect`) | Draws what an idea becomes when it is working. | `envision` | active |
| **The Surveyor** (`surveyor`) | Stakes out the route and sequences the ground. | `chart`, `phase` | active |
| **The Forager** (`forager`) | Wanders the idea and brings back what is out there. | `explore` | active |
| **The Distiller** (`distiller`) | Reduces an idea to what is load-bearing. | `distill` | active |
| **The Advocate** (`advocate`) | Good-faith adversarial attack; falsifiability testing. Classifies, never gates. | `challenge` | active |
| **The Cartographer** (`cartographer`) | Maps the estate and notices what connects. | `relate`, `survey` | active |
| **The Sower** (`sower`) | Sends the idea beyond the walls. | `seed` | active |
| **The Factor** (`factor`) | Deals with the world outside the walls. The only agent with web tools — text fetch **and** a rendering browser, so a question about how something *looks* is answerable. | `research` | active |
| **The Assayer** (`assayer`) | Weighs and values — one thing, or several against each other. | `compare`, `review` | active |
| **The Chancellor** (`chancellor`) | Ratifies and records what was decided. | `decide` | active |
| **The Keeper** (`keeper`) | Tends what sleeps and closes what is finished. Never deletes. | `incubate`, `retire` | active |

To install a specialist: create its agent file (opening "You are The ⟨Name⟩"),
add a row here, and set the `agent:` field in each verb it owns. The Steward's
interface never changes.

## Lenses

Lenses (`system/LENSES.md`) are the third dimension: they bias a verb's angle
without changing its operation. They need no agent and no binding — they modify
a verb rather than performing work — and are passed in the handoff packet.

`technical` · `commercial` · `user` · `adversarial` · `long-term` · `ethical`

## Output shapes

The verb sets the artifact's **type**; the operator sets its **shape**
(`system/TYPES.md`). A `Horizon` may be rendered as a PRD. This is what keeps
the *no output-type siloing* non-goal true under a typed system.

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| `spark-to-seed` | `capture ▸ frame ▸ envision ▸ challenge ▸ chart ▸ phase ▸ seed` | example only — routes are normally derived, not prescribed |
