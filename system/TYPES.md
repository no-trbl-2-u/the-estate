# The Type System

Artifacts in think-tank are **typed values**. Verbs are functions over those types,
and each verb is performed by exactly one named agent (`system/LAW.md`).
Composition is what makes "not the same pipeline every time" possible: the route an
idea takes is derived from what it *has* versus what it still *needs*, never from a
fixed sequence.

## Verb families

| Family | Signature | Behavior | Examples |
|---|---|---|---|
| **Refiner** | `a → a` | Sharpens without changing kind. Safe to re-run, safe to nest, depth-free. | `distill`, `challenge`, `explore` |
| **Transformer** | `a → b` | Moves the idea across the graph to a new kind. | `frame`, `envision`, `chart`, `seed` |
| **Decomposer** | `a → [b]` | Breaks one thing into parts. Where recursion lives (`Phase → [Phase]`). | `phase` |
| **Reader** | `[Idea] → r` | Reads across records without changing any. | `survey` |
| **Transition** | `Idea → Idea` | Changes a record's *status*, not its content. | `incubate`, `retire` |

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
| `Brief` | An early-exit export. What you get when a run stops before Seed-shape. | any point in a run |
| `Seed` | The terminal export type. See below. | `seed` |

Refiners (`distill`, `challenge`, `explore`) operate on any of these — they return the
same type, sharper.

## The Seed (terminal type)

A Seed is a **horizon plus a trajectory** — an elaborated vision and a rough path,
deliberately thin on implementation. It typechecks as a Seed only when all of these
are present:

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
| `harness-architecture` | An agent/tooling system design |
| `prototype-design` | An experiment or trial to run |
| `none` | No rendered artifact; the session log is the output |

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

An unfalsified, unchallenged Seed may absolutely be exported. It just says so on the tin.

## Lineage: derived, not authored

State is immutable and copied forward (see `templates/idea.md`). Every verb invocation
records what it consumed and what it produced. Lineage — branch, merge, split, parent —
is therefore **read off the composition log**, never hand-drawn. The graph is a view,
not a database.

**One exception: `relates`.** "This idea reminds me of that idea" is produced by no
verb — it comes out of the operator's (or Steward's) head. It is the only hand-authored
edge, and the most valuable one, because it's the connection the machinery cannot make.
