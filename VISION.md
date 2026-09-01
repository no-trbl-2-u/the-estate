---
type: Vision
title: "Vision"
description: "Intent, principles, non-goals, and success criteria for The Estate."
tags: [vision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Vision

## Mission

The Estate exists to make ideas durable, explorable, connectable — and
**extractable**. Ideas enter loose and leave as **Seeds**: an elaborated
six-month vision plus a rough path, thin on implementation, carried out to
become a real project somewhere else.

Extraction is the point, but it is not the only success. An idea that sits in
incubation for six months and then becomes a one-line connection to a different
idea has succeeded — that is a `connective` record, and the system is built to
recognize it rather than rank it last forever. What the system will not do is
pressure any idea toward an artifact it does not want to become.

## Problem being solved

Two problems, and the second is the sharper one.

**Ideas are ephemeral.** Sessions start fresh, context is lost, the same
territory gets re-explored. Artifacts float free of the reasoning that produced
them. Branches are forgotten, dead ends re-walked, connections unnoticed.

**Ideas leave badly.** When an idea does become a project elsewhere, it arrives
as a starting point with no destination — so every local decision in month three
is locally reasonable and globally aimless. What was missing was never the
detail. It was the **horizon**: what this looks like when it is working, and a
rough sense of how to get there.

## Core principles

**Ideas are the primary object.** The durable Idea Record — not a document,
spec, or task — is what the system manages.

**Seeds are the export.** A Seed is horizon plus trajectory, and it leaves
**clean**: no session logs, no rejected framings, no baggage. One line travels
backward — the provenance stamp — and it is the return address for any future
field report.

**Clean state between sessions.** Every session closes with an explicit state
declaration. The next session inherits a clear starting point, not accumulated
ambiguity.

**State is immutable.** Every session closes with a new snapshot; prior
states are never edited. A snapshot records the session's **delta** plus the
live tensions, open questions, and an honest current-state declaration
(ADR 0028) — history lives in the chain and in git, not re-copied into every
file. Time travel is opening an older file; branching is starting a new chain
from an older snapshot — the original is untouched because nothing is ever
touched.

**Lineage is derived, not authored.** Every verb records what it consumed and
what it produced, so parent, branch, merge, and split are *read off the
composition chain* rather than maintained by hand. The graph is a view, not a
database. **`relates` is the sole hand-authored edge** — no verb produces it, it
comes out of a head, and it is the connection the machinery cannot make. (The
`relates` *field* also stores the machine-written edges of a `graft`, which are
derivable and denormalized for readability; the hand-authored edge remains the
only one no machinery could have made — `system/TYPES.md` keeps them distinct.)

**Three dimensions, never conflated.** A verb decides what cognitive work
happens; a **lens** decides from what angle; a **shape** decides how the result
is rendered. The verb determines an artifact's *type* — composition requires
that — but never its *shape*.

**Classification, not certification.** Quality is recorded structurally and
never gated. A horizon that names its falsifier and one that does not are
different types, not good and bad. Everything composes, nothing is blocked, and
the label travels with the export. **Grade, never gate.**

**Suggestions are not assignments.** The system may propose next steps. It does
not act on them without explicit selection by the operator.

**Domain-general.** A business, a mathematical conjecture, a narrative premise,
and a technical architecture are all valid Idea Records, and the Seed contract
is worded to serve all four.

**Self-contained.** The repository is the source of truth. Nothing critical
lives only in an external service or agent memory.

## Intended experience

The operator greets **The Steward**, the front door of the estate. It knows the
portfolio, and rather than listing everything it offers a shortlist with reasons
— or offers to have The Cartographer `survey` the grounds first.

The operator says what they want in their own words: *"I want to find some holes
in Ledger."* Finding holes is a `challenge` — a dispatch, so the Steward
proposes it and offers the runner-up: *"That calls for a `challenge` from The
Advocate — or shall I `explore` it first?"* For an inline verb the Steward
simply names what it is doing and does it: *"That's a `frame`; speaking as The
Gardener…"* — and the operator redirects if the guess was wrong. That is how
the vocabulary is learned without ever being memorized: naming the verb is
always selection, and only the boundaries — dispatch, new records, exports,
structural change — wait for the explicit word (ADR 0028).

Verbs remain directly invocable for anyone who already knows what they want. The
goal is that **nothing must be memorized**, not that invocation is forbidden.

At the end, the operator sees what was established, what remains open, and the
exact question: *What would you like to do next with this idea?*

## The household

The household survives as **voices** (ADR 0027): verbs are **verbs**, every
verb has a voice, and every verb declares how it runs — `inline` performed by
the session in the verb's voice, or dispatched as `fresh-eyes` (the session's
context is a liability) or `quarantine` (the inputs stay out of the window).
**Artifacts carry the work in the performing voice; the Steward writes
state.** The generated `system/registry.md` is the current table; the voices:

| Voice | Office | Verbs |
|---|---|---|
| The Steward | The front door; writes all state; clerical `jot` | — |
| The Gardener | Receives what arrives, gives it first shape | `capture`, `frame`, `graft` |
| The Architect | Draws what it becomes when working | `envision` |
| The Surveyor | Stakes the route, sequences the ground | `chart`, `phase` |
| The Forager | Wanders and brings back what is out there | `explore` |
| The Distiller | Reduces to what is load-bearing | `distill` |
| The Advocate | Attacks in good faith; tests falsifiability | `challenge` *(fresh-eyes)* |
| The Factor | Deals with the world outside the walls | `research` *(quarantine)* |
| The Assayer | Weighs and values | `compare`, `review` *(fresh-eyes when the session shaped them)* |
| The Chancellor | Ratifies and records what was decided | `decide` |
| The Cartographer | Maps the estate, notices what connects | `relate`, `survey` *(quarantine)* |
| The Keeper | Tends what sleeps, closes what is finished | `incubate`, `retire` |
| The Sower | Sends the idea beyond the walls | `seed` |

## The graph model

### Nodes: Idea Records

- **Identity** — id, title, creation date
- **Origin** — the prompt or context that initiated it, verbatim, never edited
- **State snapshots** — immutable, copied forward; each records decisions, gold
  nuggets, tensions, open questions and an honest current-state declaration
- **Tensions** — competing framings pulling against each other. Distinct from
  open questions: a question awaits an answer, a tension awaits a choice and may
  never be resolved at all
- **Status** — `active` · `incubating` · `retired` · `connective`
- **Artifacts** — typed, shaped, classified
- **Appetite** — hand-set heat; the one input no metric can compute

### Lineage

`parent`, `branch`, `merge`, `split` are **derived** from `inputs:`/`outputs:`
chains. `relates` is authored by hand, and also carries `graft`'s derivable
branch edges. Branching is performed by `graft`; reviving a retired record is
branching from any recorded state, under the same law: the original is never
altered — a source is *advanced* by a new snapshot, never edited.

## The portfolio

The estate is a portfolio, not a workbench. `survey` computes the sitemap
(`ideas/SURVEY.md`) — per-record metadata, score, and convergent notices —
stamped with the exact `state-head` of every record it covers so staleness is
detectable rather than silent.

The score **optimizes for noticing, not finishing**, and ranks by
**reachability × appetite** — how much would one verb move this — never by
closest-to-done, which would sort a creative life by tidiness and bury raw ideas
forever. Drift is displayed, never scored: drift usually means the idea is
working.

The noticing worth surfacing is **convergent** — two records that are secretly
the same idea, a record one verb from a Seed sitting idle for months, a dead
Spark that is the missing piece of a live one. Divergent noticing needs no help.

## Non-goals

- **No forced artifact.** No idea is assumed to be headed toward a product, or
  toward anything.
- **No mandatory action plan.** Exploration without commitment is a valid end
  state.
- **No output-type siloing.** A verb fixes an artifact's type but never its
  shape; a `Horizon` may be rendered as a PRD.
- **No gating.** Quality is classified, never enforced. An unfalsified Seed
  exports freely — labelled.
- **No opaque autonomous work.** Suggestions do not become work without explicit
  selection.
- **No giant taxonomy.** Verbs, lenses, and shapes are kept to a usable size.
- **No external dependency as source of truth.** One integration exists —
  The Factor's web access — and it is non-critical by construction.
- **No domain lock-in.**
- **No forward baggage.** Seeds leave clean.

## Success criteria

- An operator can open any record and immediately understand its state, its
  history, and what was last open.
- A new session starts from any prior state without re-explaining the idea.
- Two ideas can be connected, and that connection is queryable.
- A record can be incubated, retired, revived, and branched without altering the
  original.
- A session can end with no artifact and no action, and that is a valid outcome.
- A `connective` record — one whose value is the edges it draws — is recognized
  as a success rather than ranked last.
- A Seed leaves and is used to build something real elsewhere.
- No task or assignment is created without explicit operator selection.

## Falsifiers

Recorded in full at [system/FALSIFIERS.md](system/FALSIFIERS.md). The governing
one, verbatim:

> "I'll have failed if within a month, I have no evidence of using this outside
> this repo."

Check date: **2026-09-25**. The named failure mode is that building The Estate
is more interesting than using it.

## Where the law lives

[system/LAW.md](system/LAW.md) is the operational source of truth and every
agent reads it directly. This document states the intent; `system/` states the
rules.
