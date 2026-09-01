---
type: Decision Record
title: "ADR 0028"
description: "The use-tax repeals: ceremony narrows to the boundary, every fact gets one home, invariants get checkers, and state closes become deltas."
tags: [adr, decision]
generated: { by: claude-code/2026-09-01, at: 2026-09-01T12:00:00Z }
---

# ADR 0028: The use-tax repeals

**Status:** accepted · **Date:** 2026-09-01 · **Source:** the law audit of
2026-09-01; T's direction to handle all four findings in one go, alongside the
ADR 0027 implementation

## Context

The law audit judged every provision against the estate's own falsifier —
*"I'll have failed if within a month, I have no evidence of using this outside
this repo"* (check date **2026-09-25**, named failure mode: building the
estate is more interesting than using it). Four findings survived ADR 0027,
and they share one signature: **each costs something on every use and pays
out only in hypothetical failures.**

1. **The documentation fan-out.** Every binding fact lived in ~7 places
   (skill frontmatter, two registry tables, the VISION household table,
   `reference/offices/`, `reference/verbs/`, the glossary). ADRs 0015–0027
   were all structural sessions — the record's own evidence that maintenance
   was crowding out use.
2. **The ceremony stack.** Absolute approval + one-question-at-a-time +
   "described intent is never an invocation" (ADR 0022) taxed every
   interaction with a fixed ritual that never decreased.
3. **Unenforced invariants written as law.** Lineage that "cannot be
   reconstructed" with nothing checking it is recorded; defects "checkable by
   reading" that nobody reads for; a hard-binding gap rule guarding a failure
   (an agent file being unavailable) that cannot occur.
4. **Copy-forward state.** Fourteen snapshots on idea 0001, each mostly
   duplicating the last, in a git repository that already provides time
   travel — cost that grows linearly with exactly the ideas that succeed.

## Decisions

**1. Ceremony narrows to the boundary.** Described intent now **runs an
inline verb** on an existing record: the Steward names what it is doing and
does it, and the operator redirects if the guess was wrong — an inline verb
is cheap, its artifact is versioned, and nothing is deleted. T's explicit
word remains required at the **boundaries**: dispatching a subagent, creating
a new record, anything leaving the estate (exports, commits, pushes), and
structural changes. The one-question-at-a-time rule is repealed — genuinely
parallel questions may be batched; sequential ones still should not be.
ADR 0022 is **superseded in part**: proposal-only survives exactly at the
boundaries and nowhere else.

**2. Every fact gets one home.** A verb's facts — name, signature, voice,
run — live in its skill's frontmatter and nowhere else by hand.
`system/registry.md` becomes a **generated file** (`scripts/generate-registry.mjs`)
and says so in its header. `reference/law.md`, `reference/verbs/`, and
`reference/offices/` are retired — the reference bundle keeps its descriptive
documents and points at `system/` for anything governing, under the
glossary's existing boundary: *describes, never governs*.

**3. An invariant worth a law is worth a check.** `scripts/validate-estate.mjs`
verifies what the law asserts: skill frontmatter completeness and valid
`run:` values, artifact `type:`/`produced-by:`/`inputs:`, `state-head:`
pointers that resolve, state snapshot chain fields, and slip stamps. **A
stated invariant the validator does not check is guidance, not law**, and the
law text may no longer claim otherwise ("checkable by reading" is repealed as
a category).

**4. State closes become deltas.** A session still closes with an explicit
snapshot, still immutable, still never editing a prior state — but it records
the **delta** (what this session established, decided, and coined) plus the
**live sets** (tensions and open questions in full, since they are the
working state) and the honest current-state declaration. Full copy-forward of
accumulated content is repealed; history lives in the chain and in git, not
in every file. Prior snapshots remain valid as written. ADR 0005 is
**superseded in part**: immutability and derived lineage stand; the
copy-everything mechanism does not.

## Why: what this buys and what it costs

**Bought.** Using the estate stops paying rent to maintaining it. A described
intent becomes work in one turn instead of three. A structural change touches
one file plus a script run instead of seven files. The record's claimed
properties become *actually true* (checked) instead of aspirationally true
(declared). And a record's cost stops growing with its success.

**Paid.** Three real losses, accepted with eyes open. *Guess risk:* the
Steward will sometimes run the wrong inline verb on a described intent — the
cost is a wrong artifact in an immutable trail, mitigated by cheapness and
versioning, and bounded by keeping proposal-only at every boundary that is
expensive or externally visible. *Reader convenience:* a human browsing
`reference/` loses the mirrored law and household; they follow a pointer to
`system/` instead. *Snapshot self-containment:* a delta snapshot no longer
tells the whole story alone — reading a record's full history now means
walking the chain (or git), which is the trade for not paying the whole
history's cost on every close. The live tensions/questions and the
current-state declaration keep the *working* view self-contained, which is
the view sessions actually resume from.

**Residual risk.** The validator only binds if it runs. It is wired to be
runnable in one command; wiring it into CI is left as the natural next step
and is deliberately not blocked on.

## Rejected alternatives

**Keep the ceremony and speed it up with better prompts.** Rejected: the tax
was structural (three rules interlocking), not a wording problem.

**Generate the reference mirrors instead of retiring them.** Rejected: a
generated mirror is still a second copy to regenerate and still drifts
between runs; the bundle's consumers are better served by one authoritative
file than two synchronized ones.

**Delete state history and keep only a current-state file.** Rejected: the
chain is what lineage derivation and `graft`'s as-of-snapshot semantics read;
immutable history stays, only its duplication goes.

## Consequences

- `AGENTS.md`: the "How to ask questions" section is repealed; "Suggestions"
  narrows to the boundary form; the close description reflects deltas.
- `system/LAW.md`: gains the boundary provision and the checked-invariants
  provision; the writer's discipline section describes delta closes.
- `system/STEWARD.md` and the `steward` skill: proposal rules rewritten to
  the boundary form; close protocol rewritten to the delta form.
- `templates/state.md`: sections re-annotated — Established / Decisions /
  Gold nuggets are *this session only*; Tensions / Open questions are *the
  live set in full*.
- `scripts/generate-registry.mjs` and `scripts/validate-estate.mjs` created;
  `system/registry.md` regenerated and marked as generated.
- `reference/law.md`, `reference/verbs/`, `reference/offices/` removed (git
  history is the archive); `reference/index.md` updated to point at
  `system/`.
- Supersessions, recorded here because ADRs are immutable: **0022 in part**
  (proposal-only, narrowed to boundaries), **0005 in part** (copy-forward
  mechanics), **0017 in part** (the reference bundle's mirrored scope).
- Implemented in the same change-set as ADR 0027's file plan, at T's
  direction.
