---
type: Specification
title: "The Type System"
description: "Verb families, artifact types, the Seed contract, boundary inputs, artifact immutability, and output shapes."
tags: [types, specification]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# The Type System

Artifacts in The Estate are **typed values**. Verbs are functions over those types,
and each verb is performed in exactly one named voice (`system/LAW.md`).
Composition is what makes "not the same pipeline every time" possible: the route an
idea takes is derived from what it *has* versus what it still *needs*, never from a
fixed sequence.

## Verb families

| Family | Signature | Behavior | Examples |
|---|---|---|---|
| **Refiner** | `a → a` | Sharpens without changing kind. Safe to re-run, safe to nest, depth-free. | `distill`, `challenge`, `explore` |
| **Transformer** | `a → b` | Moves the idea across the graph to a new kind. | `frame`, `envision`, `chart`, `seed`, `research`, `review`, `decide`, `graft` |
| **Decomposer** | `a → [b]` | Breaks one thing into parts. Where recursion lives (`Phase → [Phase]`). | `phase` |
| **Aggregator** | `[a] → b` | Draws many things into one judgment. | `compare` |
| **Reader** | `[Idea] → r` | Reads across records without changing any. | `survey` |
| **Transition** | `Idea → Idea` | Changes a record's *status*, not its content. | `incubate`, `retire` |
| **Edge author** | `(Idea, Idea) → relates` | Draws the one hand-authored edge. A family of exactly one, and it will stay that way. | `relate` |

### Boundary inputs and state inputs

Two verb signatures name inputs that are not artifact types, deliberately:

- **`Text`** (capture), **`Question`** (research), and **`Direction`** (graft)
  are **boundary inputs** — operator-supplied words crossing into the system,
  not artifacts already in it. They exist only on the left edge of a signature.
  `Direction` is the operator's words for *why this branch exists*, and it is
  **required**: a graft without a direction is a copy.
- **`Tensions`** (decide) names the tensions recorded in the record's head
  state snapshot. **State snapshot paths are legal `inputs:` targets** — a
  Decision's `inputs:` cites the snapshot that held its tensions, so its
  lineage chains like everything else.

### `Slip` — the one durable boundary input

`jot` has the signature **`Text → Slip`**, and a `Slip` is the exception that
proves the boundary-input rule rather than breaking it.

A Slip is **pre-record and pre-artifact**: operator words made durable on a
front step — the root `inbox/`, or a project's own `inbox/` where `onboard`
parks supplied material with a `source:` stamp (ADR 0034) — while they wait
for a verb to consume them. It has no
record, no lineage, no classifiers, no `inputs:` chain, and no producing verb
in the artifact sense — it is `Text` that has been written down, not `Text`
that has been transformed. It appears on the **left** edge of a later signature
(the `capture` that eventually reads it) exactly as raw `Text` would.

That is precisely why `jot` is clerical rather than bound (ADR 0023): the
hard-binding law binds **artifact-producing** verbs to agents, and `jot`
produces no artifact. Binding it would have bought nothing and cost the
instantaneity that is the entire point.

`Slip` is consumed, never refined. No refiner operates on it; there is no
version chain; the only transitions it has are `pending → processed` and the
`became:` stamp, both of which are the Steward's to write.

`Findings`, `Appraisal`, and `Decision` feed the *operator and the route*, not
a downstream verb: they are not Seed components, and the Steward's gap
derivation reaches them through tensions and open questions (an unresolved
tension suggests `decide`; a checkable unknown suggests `research`; competing
options suggest `compare`) rather than through Seed-distance.

## Artifact types (provisional vocabulary)

| Type | What it is | Produced by |
|---|---|---|
| `Spark` | A raw capture. Minimal processing, maximal fidelity to the original thought. | `capture` |
| `Framing` | The problem, question, or opportunity, stated. | `frame` |
| `Horizon` | The elaborated six-month vision. What the idea looks like when it's working. | `envision` |
| `Trajectory` | The rough path from here to the Horizon. Thin on implementation, but it must terminate in something actionable. | `chart` |
| `Phase` | One sequenced step of a Trajectory. Recursive: a Phase may decompose into Phases. | `phase` |
| `Findings` | Gathered information with its sources, honestly bounded by what was not found. | `research` |
| `Appraisal` | A judgment of one thing, or of several against each other. | `review`, `compare` |
| `Decision` | An explicit recorded choice: what was decided, what was rejected, and why. | `decide` |
| `SessionResidue` | What a session left behind about **the estate's own functioning** — observed while doing something else. Multi-item, honestly self-critical, filed on the record the *observations* belong to (normally idea 0001), never the record that happened to be open. | `capture` |
| `Brief` | An early-exit export. What you get when a run stops before Seed-shape. | `seed` (when components are missing and the operator exports anyway) |
| `Seed` | The terminal export type. See below. | `seed` |

Refiners (`distill`, `challenge`, `explore`) operate on any of these — they return the
same type, sharper.

### `SessionResidue` — when the session itself was the work

Some sessions produce their most valuable output as a **side effect**. A build
stretch, a deploy, a first full arc through the verbs: the record advances, and
separately the session reveals something about how the estate is actually
behaving — a rule improvised because none existed, a verb that has never run, a
seam carrying load nobody assigned it.

That observation is real output and it has nowhere else to go. It does not
belong to the record that happened to be open (it is not about that idea), and
it is not a `Findings` (nothing outside the walls was consulted). Before this
type it was filed as a `Spark`, which strained the definition past usefulness:
a Spark is a *raw thought, minimally processed*, and a residue is a structured
inventory of eight things that went sideways.

- **Produced by `capture`**, and by The Gardener — the office that receives what
  arrives. Fidelity is the requirement, as always: record what happened, not a
  flattering reading of it.
- **Filed where the observations belong**, which is normally idea 0001 (the
  estate's own record), *not* the record the session was nominally about.
- **Self-criticism is the payload.** A residue that reports only what worked has
  failed; the value is concentrated in what was improvised, what was skipped,
  and what has never run at all. `challenge` on a residue is the natural next
  step and has already happened once.

**Why the handback packet does not replace this.** A packet reports on the
verb's own work, from inside a dispatch. A residue reports on the machinery,
from outside any one verb — and the sessions that generate the richest residue
are exactly the ones where **no verb ran**. The two coexist because they observe
different things.

### Artifacts are immutable; refiners write versions

Artifacts follow the same law as state: **never edited, only superseded**. A
refiner writes a **new file** — the record's next artifact number, same slug
(`artifacts/NNNN-slug.md`) — with `inputs:` naming its predecessor. That chain
is the version history. The **current version** of an artifact is the tip of
the chain: the one no other artifact of the same type names as its `inputs:`
predecessor; gap derivation and handoff packets always mean the tip.
`challenge` writes its revision as a new version and sets its classifiers
there — it never revises in place, because nothing here is ever altered.

### Findings speak OKF

The `Findings` artifact extends the record frontmatter with the OKF v0.2
families (`reference/okf-spec.md`, ADR 0018): citations are `sources:`
entries with credibility signals, claims footnote to a `sources[].id`,
`generated:` follows the actor convention, and `stale_after:` marks the
facts' honest shelf life. External knowledge rots on a schedule the other
types don't have; OKF makes the rot a timestamp comparison. The artifact
remains a record artifact in `artifacts/`; a finding with cross-record
value is **promoted** — a `reference/` concept citing the artifact as its
source — never relocated. Whether the remaining types follow is the open
migration question in ADR 0017.

## `graft` — branching, made real

**Signature:** `(Idea @ state-N, Direction) → Idea` — transformer, performed by
**The Gardener** (ADR 0024).

`README.md` has always said branching is *"copying forward from one snapshot,
and the original is never altered because nothing is ever altered."* `graft` is
that sentence given a mechanism. A new record starts from **any prior snapshot
of any record**, inherits what that record had **at that moment**, and carries a
Direction saying why the branch exists.

### Tip semantics — as of the snapshot, never current

The **tip** of an artifact chain is already defined above: the version no other
artifact of the same type names as its `inputs:` predecessor. A graft inherits
tips, and the qualification is the load-bearing part:

> For each artifact type present at the source snapshot, the graft inherits the
> version that **no successor of the same type supersedes *as of that
> snapshot***.

Not the record's current tips. **Artifacts written on the source record after
state-N must not leak backward into the graft.** A graft taken from state 4 of a
record now at state 13 inherits what state 4 could see and nothing else —
otherwise the graft's own origin stamp is a lie, its `inputs:` chains cite work
that did not exist when it was taken, and the one thing branching is for
(exploring the road not taken *from where it forked*) is quietly destroyed.

The snapshot's `outputs:` chain is the evidence. Read forward from `state/0000`
to `state/N`, collect what was produced, and take the last of each type. Do not
read the record's current artifact directory and filter by date.

A graft may be taken from the head snapshot, which is the ordinary case and
needs no special handling: the as-of tips and the current tips coincide.

### Mechanics

1. **A new record shell** — `NNNN-slug/` from `templates/idea.md`, in the
   source's tree unless the Direction says otherwise (ADR 0033). Its
   **Origin** section records the graft: the source id, the source snapshot, and
   the **Direction verbatim**.
2. **Tip artifacts copied in** as the graft's starting artifacts, **renumbered
   from 0001** in the new record's own sequence. Each carries `inputs:` citing
   the **source record's original artifact path** — cross-record lineage,
   honestly recorded. The chain leaves the record, and that is the point: a
   graft whose artifacts cite nothing is indistinguishable from a fresh idea.
3. **`state/0000.md`** carries the sole cross-record pointer form —
   `previous: idea-NNNN/state/000K.md` — and cites the same snapshot in
   `inputs:`. They name the same file by design: `previous:` is what `parent`
   derivation reads (`ideas/README.md`), `inputs:` is what the session consumed.
   Numbering restarts at `0000` in every record.
4. **Both `relates` edges.** The graft's `idea.md` gets `relates: [<source-id>]`;
   the **source's** `idea.md` gets `relates: [<graft-id>]` appended. Lineage is
   derivable in both directions or it is not derivable at all — a source record
   that cannot tell you a branch was taken from it has lost the fact.

**Both `relates` writes belong to the close.** Record frontmatter is state
(`system/LAW.md`); the verb **names** the edges and the session writes them
when it closes as the Steward. This is the same rule `relate` already follows,
so The Cartographer's `relate` is untouched: `graft` does not author an edge
as its purpose, it produces a record whose existence implies one.

The close writes **two** states: the graft's `0000`, and a state copied forward
on the **source** noting that the graft was taken. The source is not edited —
it is advanced, which is how this repository records anything.

## The Seed (terminal type)

A Seed is a **horizon plus a trajectory** — an elaborated vision and a rough path,
deliberately thin on implementation.

### The `standard` contract (the default)

The five components below are the **default contract**, named `standard`. A Seed
typechecks against it only when all five are present:

1. **Horizon** — the six-month vision, elaborated.
2. **Trajectory** — the rough path toward it.
3. **Next concrete move** — a specific thing the recipient can actually do next.
   For a project that is "start Monday"; for a conjecture it is the case to test
   first; for a premise it is the scene to write first. A trajectory that stays
   abstract fails the check (this is a recorded Seed falsifier).
4. **At least one refusal** — a named thing this will *not* become. A project
   refuses scope; an inquiry refuses a line of attack; a story refuses a genre.
5. **Provenance stamp** — one line: `origin: <idea-id> @ <state-n>`. The only thing
   that travels backward. No other baggage leaves with the Seed.

The wording is deliberately domain-neutral. A Seed must serve a business, a
mathematical conjecture, and a narrative premise equally — `VISION.md`'s
domain-generality promise is load-bearing, not decorative.

### Nameable contracts

**Contracts are a vocabulary, not a closed enum** — the same move already made
for shapes. A record may name a domain contract in the Seed's `contract:`
frontmatter, and it exists.

This is the honest response to a real limit. `standard` is domain-neutral in
*wording*, but it is not domain-neutral in *structure*: it assumes the recipient
wants a vision and a path. Some do not. A dataset handoff, a proof obligation, a
character bible, a design system — each has a shape its recipient expects, and
forcing it through five components it does not have is how the export becomes a
ritual instead of a delivery.

**Three things are contract-invariant.** Whatever a named contract's components
are, it must still state:

1. **What the recipient can *do* next** — the specific move, not a direction.
2. **At least one refusal** — a named thing this will not become.
3. **The provenance stamp** — `origin: <idea-id> @ <state-n>`.

These three survive because they are what makes a Seed a Seed rather than a
document: an actionable next move is the difference between an export and an
essay; a refusal is the only thing that gives the export edges; and the stamp is
the sole return path. A named contract that drops any of them has not named a
contract — it has left the type.

A Seed states its contract; a Seed with no `contract:` is `standard`.

### The `build-plan` contract (ADR 0029)

The first named contract, for a Seed whose recipient is an **implementation
loop** — a harness that takes a spec and a phased plan and ships slices
unattended. Its components:

1. The `standard` five, unchanged.
2. **`[Phase]` — mandatory.** The record has run `phase`; the Seed's
   `inputs:` name the Phase artifacts.
3. **A payload of the declared shape** (below) — `payload: present` is
   required, not graded, because the payload *is* the deliverable.
4. **`target:`** — the loop the payload is rendered for: `nexus`, or
   `none` for a plain build plan with no loop attached. This is the switch
   for *"include the Nexus worker loop?"*, asked of T once when the idea is
   buildable software (ADR 0030). The contract is the one place the estate
   knows a target's file conventions.

**Phase 0 — the garden.** Under this contract `phase` emits a Phase 0 ahead
of the route, with a done-condition fixed by the contract: **the loop
completes one tick on nothing.** For `nexus`: the stack is decided (by
`decide` where decidable; otherwise a `[HUMAN ATTENTION]` item); an
environment manifest names every variable and who supplies it, values being
always human; the verify gate is wired and green on an empty project; the
deploy target answers; the kit's `seed-check`/`re-seed` are present and any
Seed-specific skill is written. Human-attention tags travel into the plan
in the target's vocabulary (`[needs-user-call]` for `nexus`) — the loop
parks them for its operator, and the estate's duty is to make that pile
accurate. The estate numbers the garden Phase 0; the payload renders it as
the target's Phase 1, the slot the loop reads first.

**The payload shape** (`templates/payload-build-plan/`):

```
README.md                        how to drop it in: one adopt command, pinned to a kit tag
spec.md                          the target's anchor — Horizon, refusals, acceptance, provenance
nexus.adopt.json                 the adopt manifest: project identity keyed by the kit's tokens
plan/bearings.md                 standing context: stack locked, refusals as standing decisions, gates
plan/steps/01_build_plan.md      the kit's Status block — garden first, then the Seed's Phases
plan/phases/phase_1_bootstrap.md the garden as a brief the loop can ship
skills/                          optional: Seed-specific skills; adopt generates their pointers
```

The target is **forked and pinned, never vendored**: a software-only toolkit
does not live inside a domain-general repository. The payload names the kit
tag it was rendered for; the adopt command fetches the kit at that tag,
overlays it around the payload without overwriting, and leaves no kit source
in the repository (ADR 0030). The Seed document and the plan are complete
without the target; the target is what runs them, which is what keeps the
integration non-critical (`AGENTS.md`, self-containment).

### A Seed behind its record (ADR 0029)

A Seed is **sealed** by the state whose `outputs:` names it — the close of the
session that exported it. When the record's `state-head:` has moved past the
**sealing** state, the Seed is **stale** and the record owes a
**reconciliation** — one of:

| Move | Verb | Recorded as |
|---|---|---|
| **re-seed** | `seed` | a new export whose `supersedes:` names the old one |
| **graft** | `graft` | the deviation is a new idea; a branch (ADR 0024) |
| **decide-abandon** | `decide` | a `Decision` artifact whose `reconciles:` names the Seed and says why the road was left |

Exports are immutable, so the pointer runs **forward**: the old Seed is never
edited. `scripts/validate-estate.mjs` warns on a stale Seed until a
`supersedes:` or `reconciles:` names it. The provenance stamp is the return
path in both directions: a field report from outside arrives as `capture`
(`Text → Spark`) on the record it names.

**Why the seal and not `origin:`.** The stamp names the state the Sower
*read*; the close then writes the state that *records* the export. Origin is
therefore one behind by construction on every healthy Seed, and anchoring
staleness to it would flag every export the moment it was made. The seal is
derived from `outputs:` — the same lineage frontmatter everything else is
derived from — and it marks the last moment the record and the Seed agreed.

### The payload — the droppable form

A Seed has always been a *description* of a thing to build. It may now **carry
the thing**.

The `payload:` frontmatter field holds a relative path to a **payload
directory** — the droppable result: the files pasted into a repo, the prompt
handed to an agent, the deck given to a partner. It sits beside the Seed
document as a sibling (`exports/README.md`):

```
exports/NNNN-slug-seed.md        the document
exports/NNNN-slug-payload/       the droppable result
```

The payload is **optional**, and its absence is a **classifier, not a gate** —
the estate grades, it never gates. A Seed with no payload exports perfectly well
and says so on the tin. Where a payload is absent, the Seed names in one line
what the record would need to build one — which is routing information: the gap
suggests the verb that would fill it.

## Output shape — the third dimension

The verb determines the artifact's **type**. It does not determine its
**shape** — how that artifact is rendered for a reader. Type is for the
machine (composition, gap calculation); shape is for the audience.

| Shape | For |
|---|---|
| `prose` | Default. The thinking, written plainly. |
| `prd` | A product requirements document |
| `research-brief` | Findings written for someone who wasn't there |
| `decision-record` | The choice, the rejected alternatives, the why |
| `phases` | A sequenced work breakdown |
| `none` | No rendered artifact; the session log is the output |

**Shapes are a vocabulary, not a closed enum.** When an audience needs a shape
this table doesn't have — an experiment design, an agent-harness architecture,
a pitch one-pager, a scene outline — name it in the artifact's `shape:`
frontmatter and it exists. The table lists the domain-neutral recurring ones;
domain-specific shapes belong to sessions, not to this file.

Shape is requested by the operator per session and recorded in artifact
frontmatter as `shape:`. **A `Horizon` can be rendered as a PRD; an `explore`
session can produce one.** This is what keeps the *no output-type siloing*
non-goal true under a typed system: types are siloed by verb, shapes never are.

## Classification, not certification

Types record quality **structurally**; they never judge it, and nothing is ever blocked.
Classifiers are recorded in artifact frontmatter and the label travels with the export:

| Classifier | Values | Meaning |
|---|---|---|
| `horizon` | `falsifiable` \| `unfalsified` | Does the Horizon name what would make it wrong? |
| `challenged` | `true` \| `false` | Has this artifact survived a `challenge` pass? |
| `trajectory` | `actionable` \| `abstract` | Does the path bottom out in a startable step? |
| `payload` | `present` \| `absent` | Does the Seed carry the droppable result, or only describe it? |

An unfalsified, unchallenged Seed may absolutely be exported. It just says so on the tin.
Staleness (a Seed behind its record) is not a classifier on the Seed — the Seed
cannot know — but a validator warning on the record (ADR 0029).

## Lineage: derived, not authored

State is immutable and copied forward (see `templates/idea.md`). Every verb invocation
records what it consumed and what it produced. Lineage — branch, merge, split, parent —
is therefore **read off the composition log**, never hand-drawn. The graph is a view,
not a database.

**One exception: `relates`.** "This idea reminds me of that idea" is produced by no
verb — it comes out of the operator's (or Steward's) head. It is the only hand-authored
edge, and the most valuable one, because it's the connection the machinery cannot make.

**Graft edges live in `relates`, and they are not hand-authored.** The pair of
edges a `graft` writes (`system/TYPES.md`, above) is fully derivable — from the
graft's Origin, its `state/0000` `inputs:`, and its artifacts' cross-record
`inputs:` chains. They are recorded in `relates` as a **convenience
denormalization**, so that a reader of either `idea.md` sees the branch without
walking the graph, and so the *source* can say a branch left from it without
scanning every other record.

This does not weaken the rule; it qualifies it precisely. `relates` holds two
kinds of edge:

| | Origin | Derivable? |
|---|---|---|
| **Authored edge** | The operator's or Steward's head | No — this is the whole point |
| **Graft edge** | A `graft` invocation | Yes — the record's own Origin states it |

A graft edge that contradicts the record's Origin is a defect in the edge, not
in the Origin. An authored edge answers to nothing but the operator.
