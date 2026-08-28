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
