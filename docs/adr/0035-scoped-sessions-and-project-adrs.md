---
type: Decision Record
title: "ADR 0035"
description: "Sessions are scoped to a project via /start; projects carry their own authored ADR logs written by decide; the root log is reserved for machinery work outside the Steward context; sibling projects never read each other."
tags: [adr, decision]
generated: { by: claude-code/2026-09-04, at: 2026-09-04T00:00:00Z }
---

# ADR 0035: Scoped sessions, and project ADRs the Chancellor writes

**Status:** accepted · **Date:** 2026-09-04 · **Source:** T's decision,
stated in session ("It all just makes more sense this way")

## Context

T asked whether projects leak into each other. The honest audit: artifacts
do not, but **attention does** — `/start` scanned every record in every
tree before the operator said which project they were working on, an
inheritance from the flat estate, where "holding the whole estate in mind
at once" was the stated leverage (`system/SCORING.md`). That argument was
written when the portfolio was flat. With projects, it means an agent that
has read four projects pattern-matches across them whether or not any file
cites any other.

Separately, ADR 0033 gave project-level decisions a home that T has now
rejected: a `Decision` artifact on a record whose subject is the project,
with the project's "ADR log" existing only as a generated view. The
objection that design answered — two authoring surfaces for one concept —
was mine, T heard it twice, and T has decided the other way: **a project's
decisions belong in a real, authored, per-project ADR log**, written by the
verb that ratifies decisions, and walled off from every other project.

The root `docs/adr/` gains a sharper identity in the same stroke. Every one
of its thirty-five entries was authored outside the Steward context —
structural sessions like this one — and none was written by `decide`. What
was habit becomes rule.

## Decisions

**1. `/start` takes a scope.**

- **`/start <project>`** — number, slug, or title — opens a session scoped
  to that project. Orientation reads the law and **that project's tree
  only**: `project.md`, `INDEX.md`, its `ideas/*/idea.md` and head
  snapshots, its `inbox/`, its `exports/`, its `docs/adr/`.
- **`/start`** bare no longer orients from the whole estate. The Steward
  asks: *start a new project? If not, which of these?* — listing existing
  projects by name, with the unscoped root shelf as the remaining option.
  The whole-estate scan survives only in the unscoped session; the
  operator chooses it, it is never the default.

**2. Sibling projects never read each other.** A scoped session does not
open another project's records, exports, inbox — **and above all not its
`docs/adr/`**. A border crossing in the index is *named*, never followed,
without T's word. The isolation is lateral, not vertical: `system/`,
`templates/`, the root `docs/adr/` (the machinery governs every project),
and the root estate record (`idea-0001`, where residue files) remain
readable from any scope. The walls face sideways.

**3. Projects carry authored ADR logs.**
`projects/NNNN-slug/docs/adr/NNNN-slug.md`, numbered per project from
0001, from `templates/project-adr.md` — and under the root log's own law:
**immutable once accepted, superseded never edited**. There is no
hand-maintained per-project index; the generated `INDEX.md` lists the ADRs
beside the Decision artifacts, so the index remains a view (ADR 0028) even
though the log is now authored.

**4. `decide` routes by subject.** A decision about **one record's**
tensions seals a `Decision` artifact on that record — unchanged, lineage
and all. A decision about **the project** — a convention, a stack, a
structure that governs its records — is ratified by the Chancellor as the
project's next ADR. Same verb, same four obligations (decided, rejected,
why, what reopens it), two landing places distinguished by what the
decision is *about*. This supersedes ADR 0033 decision 5's second half
(project decisions as artifacts on a record-about-the-project) and adopts,
with walls, the alternative 0033 rejected.

**5. `decide` never writes the root log.** Root `docs/adr/` is
**exclusively** for machinery work performed outside the Steward context —
sessions like the one that produced this document. No verb touches it; the
Chancellor's reach ends at the project boundary. A machinery question
surfacing mid-session is surfaced to T and taken outside, not ratified
inside.

## Rejected alternatives

**The generated-view-only log (ADR 0033's design).** Rejected by T,
twice-affirmed. The view gave project decisions no authoring surface of
their own and parked their substance on a synthetic record. The original
objection — two mechanisms for one concept — is answered structurally
instead: the *scopes are disjoint*. Record decisions → artifacts; project
decisions → that project's log; machinery → root, human-authored. Three
homes, no overlap, each readable in isolation.

**Scope as convention, not skill behavior.** Telling the Steward to "focus
on" a project while orientation still scans everything would leave the
attention leak intact — the reading *is* the leak.

**A `--project` argument on every verb.** Scope is a property of the
session, not of each invocation; per-verb flags re-ask a settled question
and invite a mid-session drift the operator never chose.

**A `project:` field in ADR frontmatter.** Scope is location (ADR 0033).
The directory is the fact's one home.

## Consequences

- `.claude/skills/start/SKILL.md` carries the scope argument, the chooser,
  the scoped orientation, and the isolation rule; `system/STEWARD.md`
  follows. `.claude/skills/decide/SKILL.md` carries the routing and the
  root prohibition.
- `templates/project-adr.md` is new. `scripts/validate-estate.mjs` checks
  each project's ADR directory: `NNNN-*.md` naming, frontmatter present,
  no duplicate numbers within a project. `scripts/generate-project-index.mjs`
  renders the ADRs in the decision log.
- The unscoped session still exists and still sees everything — surveys,
  cross-project reconciliation, and the estate's own record live there.
  Estate-wide `survey` is unscoped-session work; a scoped portfolio
  question ranks the project's own records only.
- A graft *across* projects requires stepping outside the scope, which is
  correct: it is a deliberate border crossing, and it costs one.
- ADR numbering is per-log. `projects/0002-x/docs/adr/0001-*.md` and
  `projects/0003-y/docs/adr/0001-*.md` coexist; a bare "ADR 0001" is
  ambiguous outside its log, so cross-log citation names the project.
- The trade is made consciously: locality over a single authoring surface.
  What keeps it honest is decision 2 — a log that no sibling ever reads
  cannot silently become load-bearing for anyone but its own project.
