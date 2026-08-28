---
type: Reference
title: "Glossary"
description: "The estate's vocabulary in one place: canonical terms as the system files define them, and the operator's UI vocabulary mapped onto them — with the gaps named."
tags: [glossary, reference, vocabulary]
generated: { by: claude-code/2026-08-28, at: 2026-08-28T00:00:00Z }
---

# Glossary

Two tables. The first is **descriptive**: the estate's canonical terms, each
pointing at the file that governs it — this document defines nothing and
overrides nothing; where it disagrees with `system/`, `system/` wins. The
second is a **mapping**: the vocabulary T uses when talking about a UI for the
estate, matched to the canonical concept it lands on — and flagged honestly
where it lands on nothing, because a UI word with no repo concept underneath it
is a feature request, not a synonym.

## Canonical terms

| Term | What it is | Governed by |
|---|---|---|
| **The Estate** | The whole repository: the portfolio of Idea Records, the system that works them, and the agents that staff it. | `VISION.md`, `system/LAW.md` |
| **Idea Record** | One idea and everything that has happened to it: `ideas/NNNN-slug/` holding `idea.md`, `artifacts/`, `state/`, and optionally `assets/`. The unit the portfolio counts. | `templates/idea.md` |
| **Artifact** | One typed document produced by one verb invocation, immutable once written. Lives in a record's `artifacts/`, numbered sequentially. | `system/TYPES.md` |
| **Type** | What an artifact *is* — `Spark`, `Framing`, `Horizon`, `Trajectory`, `Phase`, `Findings`, `Appraisal`, `Decision`, `Brief`, `Seed`. Set by the verb that produced it, used by composition. | `system/TYPES.md` |
| **Verb** | An action performed on an idea — `capture`, `frame`, `challenge`, `seed`, … Implemented as a **skill** in `.claude/skills/`, each bound in frontmatter to exactly one agent. Verbs are verbs, never personas. | `system/LAW.md`, `system/registry.md` |
| **Agent** | A specific person with a name, an office, and a voice — "The ⟨Something⟩". Performs the verbs bound to it and no others. Agents write artifacts. | `system/LAW.md`, `system/registry.md` |
| **The Steward** | The main session's standing identity: front door, router, dispatcher, and the **only writer of state**. Performs no bound verb itself. | `AGENTS.md`, `system/STEWARD.md` |
| **State snapshot** | The Steward's record of a session on an Idea Record: what was established, decided, left open. Immutable — copied forward, never edited. `state/NNNN.md`, with `idea.md`'s `state-head:` pointing at the tip. | `system/LAW.md` (writer seam), `templates/state.md` |
| **Lineage** | The history graph of a record, **derived** from artifacts' `inputs:`/`outputs:` chains — never hand-drawn. The graph is a view, not a database. | `system/TYPES.md` |
| **Version chain** | A refiner (`challenge`, `distill`, `explore`) never edits — it writes a new artifact naming its predecessor in `inputs:`. The **tip** of that chain is the current version; handoffs always mean the tip. | `system/TYPES.md` |
| **`relates`** | The one hand-authored edge: "this idea reminds me of that idea." Drawn only by `relate` (The Cartographer), recorded in `idea.md`. Everything else about the graph is derived. | `system/TYPES.md` |
| **Lens** | An optional angle on a verb (`technical`, `commercial`, `user`, `adversarial`, `long-term`, `ethical`). Modifies, never performs. | `system/LENSES.md` |
| **Shape** | How an artifact is rendered for its reader (`prose`, `prd`, `phases`, …). Chosen by the operator, never by the verb. An open vocabulary, not an enum. | `system/TYPES.md` |
| **Classifier** | A structural quality label on artifact frontmatter — `horizon: falsifiable\|unfalsified`, `challenged: true\|false`, `trajectory: actionable\|abstract`. Classifies, never gates: nothing is ever blocked on one. | `system/TYPES.md` |
| **Seed** | The terminal export: Horizon + Trajectory + next concrete move + at least one refusal + provenance stamp. Leaves clean, to `exports/`. A run that stops early may export a **Brief** instead. | `system/TYPES.md`, `templates/seed.md` |
| **Status** | Where a record stands: `active`, incubating, or retired. Changed only by transition verbs (`incubate`, `retire`); nothing is ever deleted. | `templates/idea.md`, the keeper's skills |
| **Appetite** | Hand-set heat on a record — how much the operator currently cares. T's to set, never inferred. | `templates/idea.md` |
| **Handoff packet** | What the Steward gives a dispatched agent: the state snapshot, input artifacts, lenses, requested shape. *(Currently exists only in the dispatching session — the unaddressable steering layer named in idea-0001's Framing.)* | `system/STEWARD.md`, `ideas/0001-the-estate/artifacts/0003-framing.md` |

## The operator's UI vocabulary, mapped

| UI word | Maps to | Honest note |
|---|---|---|
| **Verb** | **Skill** — exact match. | `.claude/skills/<verb>/SKILL.md`, binding in frontmatter. |
| **Project** | **Idea Record** (`ideas/NNNN-slug/`). | The estate has **no grouping level above records** — the portfolio is flat, and "the Starvu project" *is* `idea-0003`. If the UI needs folders-of-projects, that is a **structural change** (new convention), which goes to T with the reading list per `AGENTS.md`. |
| **Idea** (within a project) | The record's **artifact trail** — the Sparks, Framings, Horizons and their version chains inside one record. | What "travels" is the artifact chain; the map of its travel is the derived lineage plus the state sequence. |
| **Sub-idea / branch** | Two real things, neither called that: **(a)** a **version branch** in the derived lineage — two artifacts naming the same predecessor in `inputs:`; **(b)** a **related record** — a separate `idea-NNNN` joined by the hand-authored `relates` edge. | A true *child record* (an idea nested inside an idea) **does not exist**. If the UI needs one, that is a record-schema change — T's decision, not a rendering choice. Until then: branch = (a), spun-off idea = (b). |
| **Map of how the idea is traveling** | The **lineage graph**: `inputs:`/`outputs:` chains across artifacts, plus `state/` in sequence, plus `relates` edges between records. | Entirely derivable from frontmatter today — no new data needed to draw it. What the graph *cannot* show is the steering layer (handoff packets, route derivations): those are not artifacts, per idea-0001's Framing. A UI that draws only artifacts is drawing the addressable half. |
| **Jump between projects** | Portfolio navigation across `ideas/`, oriented by `ideas/SURVEY.md` (the Cartographer's ranked read) and each record's `status` / `appetite` / `state-head`. | All present today. |

## One boundary, restated

This file describes; it never governs. New terms enter the canon through
`system/` (with T's approval, per `AGENTS.md`), and this glossary follows them
— never the other way around.

## Second tranche — verified by T, 2026-08-28

### People & dialogue

| Term | What it is | Governed by |
|---|---|---|
| **Operator** | T. Final authority over everything in the estate; agents propose, the operator decides. | `AGENTS.md` |
| **Dispatch** | The Steward handing a verb to its bound agent with a handoff packet. | `system/LAW.md`, `system/STEWARD.md` |
| **Dialogue relay** | A dispatched agent has no channel to the operator — it returns a *question* instead of an artifact; the Steward relays and re-dispatches with the answer. | `system/LAW.md` |
| **Writer seam** | The one-writer rule: agents write artifacts, the Steward writes state and record frontmatter. One file, one writer. | `system/LAW.md` |
| **Steering layer** | Everything that aims the verbs — handoff packets, route derivations, nugget selection. Produces no artifacts; named *unaddressable* by idea-0001's Framing. | `ideas/0001-the-estate/artifacts/0003-framing.md` |

### Machinery

| Term | What it is | Governed by |
|---|---|---|
| **Verb family** | The seven signatures: Refiner `a→a`, Transformer `a→b`, Decomposer `a→[b]`, Aggregator `[a]→b`, Reader, Transition, Edge author. | `system/TYPES.md` |
| **Boundary input** | `Text` (capture) and `Question` (research) — operator words crossing into the system, not artifacts already in it. | `system/TYPES.md` |
| **Route / gap derivation** | The Steward derives what runs next from what a record *has* versus what it still *needs* — never a fixed sequence. | `system/STEWARD.md`, `system/TYPES.md` |
| **Playbook** | A worked example composition (`spark-to-seed`, `merge`, `split`). Example only — routes are derived, not prescribed. | `playbooks/` |
| **Session close** | The Steward's end-of-session duty: what was established, what remains open, the honest current state — sealed as a state snapshot. | `system/LAW.md`, `system/STEWARD.md` |

### The ten artifact types

Each produced by its verb, per `system/TYPES.md` — collected here row-by-row
because a UI reader will be clicking on them constantly.

| Type | One line |
|---|---|
| **Spark** | A raw capture: minimal processing, maximal fidelity to the original thought. |
| **Framing** | The problem, question, or opportunity space, stated. |
| **Horizon** | The elaborated six-month vision — what the idea looks like working. |
| **Trajectory** | The rough path from here to the Horizon; must terminate in something actionable. |
| **Phase** | One sequenced step of a Trajectory. Recursive — a Phase may decompose into Phases. |
| **Findings** | Gathered information with sources, honestly bounded by what was not found. Speaks OKF. |
| **Appraisal** | A judgment of one thing, or of several against each other. |
| **Decision** | An explicit recorded choice: what was decided, what was rejected, and why. |
| **Brief** | An early-exit export — what leaves when a run stops before Seed-shape. |
| **Seed** | The terminal export: Horizon + Trajectory + next move + refusal + provenance stamp. |

### Portfolio & scoring

| Term | What it is | Governed by |
|---|---|---|
| **Survey** | The Cartographer's walk of the whole estate: ranked shortlist plus convergent notices, written to `ideas/SURVEY.md`. | `system/SCORING.md` |
| **Reachability** | The primary rank: what fraction of a record's remaining chain the single best next verb completes. Favors raw ideas over nearly-done ones. | `system/SCORING.md` |
| **Convergent notice** | The survey's highest-value output: candidate `relates` edges, duplicate suspicions, dead-Spark-fits-live-record matches. Surfaced above the ranking. | `system/SCORING.md` |
| **Connective record** | An idea whose value is the edges it draws rather than the Seed it becomes. Earned over months — inbound citations while its own state stays flat — never inferred from dormancy alone. | `system/SCORING.md` |
| **Drift** | Distance between current framing and the original Spark. Display only, never scored — drift usually means the idea is working. | `system/SCORING.md` |

### Governance & quality

| Term | What it is | Governed by |
|---|---|---|
| **Falsifier** | A named observation that would prove the thing wrong. Required of Horizons for the `falsifiable` classifier; the estate carries its own. | `system/FALSIFIERS.md`, `system/TYPES.md` |
| **Check date** | **2026-09-25** — the estate's own falsifier clock: failed if no evidence of use outside this repo by then. | `system/FALSIFIERS.md` |
| **Named failure mode** | *"Building it is more fun than using it."* Machinery elaboration while `ideas/` holds nothing live must be said out loud. | `system/FALSIFIERS.md` |
| **Tension vs. open question** | A tension awaits a **choice** between competing framings and may never resolve; an open question awaits an **answer**. Different sections, different fates. | `templates/idea.md` |
| **Gold nuggets** | The state section preserving a session's best-phrased findings — carried with the standing warning that quotability is not evidence (residue item 6, held under challenge). | `templates/state.md`, `ideas/0001-the-estate/artifacts/0002-residue-challenged.md` |
| **Residue** | Session observations about *the estate itself*, filed to idea-0001 rather than to the idea being worked. Operator's coinage, 2026-08-27. | `ideas/0001-the-estate/artifacts/0001-first-full-arc-residue.md` |
| **ADR** | Architecture Decision Record, `docs/adr/` — every major decision with its reasoning, indexed. | `docs/adr/` |
| **OKF** | The Open Knowledge Format — how Findings cite sources, mark credibility, and carry `stale_after:` shelf lives. External knowledge rots on a schedule the other types don't have. | `reference/okf-spec.md`, ADR 0018 |
| **Promotion** | A finding with cross-record value becomes a `reference/` concept citing the artifact as its source — never relocated out of the record. | `system/TYPES.md` |
| **Wake condition** | What `incubate` requires: a parked record names what wakes it, so sleep is deliberate rather than drift. | the keeper's skills |
