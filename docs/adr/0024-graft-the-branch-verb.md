---
type: Decision Record
title: "ADR 0024"
description: "graft branches a new record off any prior snapshot, inheriting as-of-snapshot tips, carrying a required Direction, and writing lineage in both directions."
tags: [adr, decision]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
verified: { by: human:T, at: 2026-08-31T00:00:00Z }
---

# ADR 0024: Graft — the branch verb

**Status:** accepted · **Date:** 2026-08-31 · **Source:** architecture review of 2026-08-31, decision 3 of the locked set and D1; `load-bearing-updates-plan.md` Phase 4

## Context

`README.md` has promised branching since the first build: *"Time travel is
opening an older file; branching is copying forward from one, and the original
is never altered because nothing is ever altered."* No verb implemented it. The
promise was true about the *data model* — immutable snapshots do make branching
possible — and false about the system, which offered no way to do it. An
operator wanting to take an idea a different way had to hand-build a record and
hand-wire its lineage, or lose the fork.

This is the un-built half of the stated vision, and idea 0003 makes it concrete:
thirteen snapshots, any of which is a legitimate fork point.

## Decisions

**1. `graft` exists, with the signature `(Idea @ state-N, Direction) → Idea`.**
Family: transformer — it moves across the graph to a new record, and unlike
`relate` it produces a thing rather than an edge.

**2. The `Direction` is a required boundary input.** The operator's words for
*why this branch exists*, verbatim in the new record's Origin. **A graft without
a Direction is a copy**, and a copy of a record is pure cost: a second thing to
read that says nothing about why it is not the first. The Gardener asks for it
rather than inferring it from the snapshot — inferring it would be the agent
writing the operator's reason for them.

**3. Tips are inherited *as of the source snapshot*, never the source's current
tips.** For each artifact type present at state-N, the graft inherits the
version no successor of the same type supersedes **as of that snapshot**.

This is the decision most likely to be implemented wrongly, and the plan's own
risk note flagged it, so the prohibition is stated positively wherever the verb
is described: **artifacts written on the source after state-N must not leak
backward into the graft.** A graft from state 4 of a record now at state 13 that
quietly inherited state 13's artifacts would have an origin stamp that lies,
`inputs:` chains citing work that did not exist at the fork, and no ability to
do the one thing branching is for — exploring the road not taken *from where it
forked*.

The mechanism is specified too, not just the rule: walk `state/0000 → state/N`
and take the last artifact of each type off the `outputs:` chain. **Do not list
the source's `artifacts/` directory and filter by date** — file dates are not
the record, and the directory is the current state, which is precisely what
must not be read.

**4. Lineage is recorded in both directions.** The graft's artifacts carry
`inputs:` citing the **source record's original artifact paths** (cross-record
lineage, honestly recorded); `state/0000.md` cites the source snapshot; the
graft's `idea.md` gets `relates: [<source-id>]` and the **source's** gets
`relates: [<graft-id>]` appended.

The back-edge is not symmetry for its own sake. Lineage in this repository is
*derived*, and a source record that cannot tell a future reader that a branch
left from it has lost the fact — there is no index to consult, only the records.

**5. The Gardener owns `graft`** — D1's recommendation, accepted. The office
"receives what arrives and gives it its first shape," and a graft is an arrival
whose origin happens to be internal. The alternative readings were considered:
The Cartographer (owns `relate`, and a graft writes `relates` edges) and The
Keeper (tends the record lifecycle). Both were rejected on the same ground: the
edges and the lifecycle are *consequences* of the graft, while the work itself
is receiving something and shaping a new record from it, which is the Gardener's
whole office. The Gardener now owns two batch verbs and one audience.

**6. The `relates` writes are the Steward's; the Gardener returns them.** Record
frontmatter is state (`system/LAW.md`), so this needs no new rule — it is the
seam working as designed. It is also why `graft` does not encroach on The
Cartographer's `relate`: `graft` does not author an edge as its purpose, it
produces a record whose existence implies one.

**7. A graft session closes two records.** The graft's `state/0000`, and the
source's head state **copied forward** to a snapshot noting the graft was taken.
The source is advanced, never edited. Both `state-head:` pointers move.

**8. `relates` now holds two kinds of edge, and `TYPES.md` says so.** The
existing claim that `relates` is "the only hand-authored edge" was falsified by
graft edges, which are machine-produced. Rather than inventing a second edge
field, graft edges are recorded in `relates` as a **convenience
denormalization** — they are fully derivable from the graft's Origin and its
`inputs:` chains, and are stored so that either record can be read without
walking the graph. `TYPES.md` now distinguishes authored from graft edges by
origin and by derivability, and a graft edge contradicting its record's Origin
is a defect in the edge.

**9. `connective` counts authored edges only.** Found by verification rather
than assumed: `system/SCORING.md` earns a record `connective` when its `relates`
degree grows while its state stays flat. A record branched from repeatedly would
otherwise drift toward `connective` for having been *used as a starting point* —
close to the opposite of a hub whose value is the connections it draws. In
practice a graft also advances the source's state, so the flatness test already
excludes it; the rule is stated explicitly anyway, because a coincidence is not
a rule.

**10. `survey` shows descendants — and this was not free.** The plan expected
graft support to fall out of `relates` being an existing edge type. Verification
showed it does not: `survey` never displayed `relates` edges at all. It now
reports each record's descendants and fork points (displayed, never scored),
distinguishes graft edges from authored ones by checking the counterpart's
Origin, and reports a missing back-edge as a notice.

## Consequences

- New skill `.claude/skills/graft/SKILL.md`; new verb row in
  `system/registry.md`; The Gardener's row and definition updated.
- **A hand-run branching procedure already existed and is superseded.**
  `ideas/README.md` and `reference/record-model.md` both documented "Branching,
  exactly" — a procedure the *Steward* performed, which copied no artifacts,
  wrote no back-edge, and left the source wholly untouched. Found during the
  reconciliation sweep; it contradicted this ADR on four points and would have
  meant two incompatible answers to "how do I branch." Both files now describe
  `graft`. Three of the four conflicts resolve in `graft`'s favour (the
  performer, the inherited tips, the back-edge). The fourth — the cross-record
  `previous: idea-NNNN/state/000K.md` pointer — resolves in the **old**
  procedure's favour and is kept: it is a cleaner `parent` derivation than the
  Origin prose, and it is what makes decision 8's claim that graft edges are
  *derivable* concretely true rather than merely arguable. A graft's
  `state/0000` therefore carries both `previous:` (cross-record, the parent
  pointer) and `inputs:` (the snapshot consumed); they name the same file by
  design.
- The old procedure's stated reason for **no** back-edge — that `parent` is
  derived, so the edge is redundant — is answered rather than ignored. It is
  redundant for finding a graft's *parent* and not for finding a record's
  *descendants*, which otherwise requires scanning every record in an estate
  with no index.
- `system/TYPES.md` gains the `graft` section (tip semantics, mechanics), the
  `Direction` boundary input, and the authored-vs-graft edge table.
- `system/SCORING.md` gains the **Descendants** signal and the authored-only
  rule for `connective`; `survey` and The Cartographer gain the branch report.
- `system/STEWARD.md` and the steward skill gain the graft trigger (including
  "confirm which snapshot" — silently defaulting to head is how a branch becomes
  a copy) and the two-record close.
- **The verb count moves from 17 to 18**; skill directories from 19 to 20.
- **A cost worth naming:** a graft duplicates artifact content into a second
  record. That is deliberate — the graft must be readable on its own, and a
  record of pointers is not a record — but it means a correction to an inherited
  artifact does not propagate. It cannot: the two records forked, and the whole
  point is that they may now diverge. The `inputs:` chain records where each
  copy came from, which is the honest form of the relationship.
- No verb ran. Steward structural session.
