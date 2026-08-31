---
name: graft
description: Branch a new idea off any prior snapshot of any record, inheriting that snapshot's tips and carrying a Direction saying why. Transformer, (Idea @ state-N, Direction) → Idea. Performed by The Gardener; the Steward normally dispatches this for you.
verb: graft
signature: "(Idea @ state-N, Direction) → Idea"
agent: gardener
mode: batch
---

# graft — `(Idea @ state-N, Direction) → Idea`

Start a new record from a prior snapshot of an existing one. The source is
never altered — nothing here is ever altered — so a graft is the estate's whole
answer to "what if we had taken this a different way."

## The Direction is required

A graft carries the operator's words for **why this branch exists**, verbatim,
in the new record's Origin. It is a boundary input (`system/TYPES.md`) and it
is not optional: **a graft without a Direction is a copy**, and a copy of a
record is pure cost — a second thing to read, with nothing to say about why it
is not the first.

If the handoff packet has no Direction, ask for one through the Steward and
stay alive for the answer. Do not infer it from the snapshot.

## Tip semantics — as of the snapshot, never current

This is the one thing that is easy to get wrong and expensive to get wrong.

> For each artifact type present at the source snapshot, inherit the version
> that **no successor of the same type supersedes *as of that snapshot***.

**Not the source record's current tips.** A graft taken from state 4 of a
record now at state 13 inherits what state 4 could see, and nothing later.
Artifacts written after state-N **must not leak backward** into the graft.

Read it off the snapshots, not the directory: walk `state/0000` → `state/N`,
collect each snapshot's `outputs:`, and take the last of each type. Do **not**
list the source's `artifacts/` and filter by date — file dates are not the
record, and the `outputs:` chain is.

Grafting from the head snapshot is the ordinary case and needs no special
handling; as-of tips and current tips coincide there.

## What you do

1. **Create the record shell** — `ideas/NNNN-slug/` from `templates/idea.md`.
   The **Origin** section records the graft: source id, source snapshot, and the
   **Direction verbatim**.
2. **Copy the as-of tips in** as the graft's starting artifacts, **renumbered
   from 0001** in the new record's own sequence. Each one's `inputs:` cites the
   **source record's original artifact path** — cross-record lineage, honestly
   recorded. Do not rewrite their bodies: they arrived as they were, and the
   Direction is where the branch is stated.
3. **Write `state/0000.md`** — wait. You do not. `state/0000.md` is the
   Steward's (`system/LAW.md`); you **return** what it must contain: the
   cross-record pointer `previous: idea-NNNN/state/000K.md` (the sole place
   `previous:` crosses records, and what `parent` derivation reads) and
   `inputs:` citing that same snapshot.
4. **Return the two `relates` edges** — `<source-id>` for the graft's `idea.md`,
   `<graft-id>` for the source's. Record frontmatter is state; you return the
   edges, the Steward writes them. This is why `graft` does not tread on The
   Cartographer's `relate`: you are not authoring an edge as your purpose, you
   are producing a record whose existence implies one.

## What you return

Artifact paths written, the as-of tips you inherited and **which snapshot you
read them from**, the two `relates` edges, and anything the Direction opens as
an honest open question. Say plainly if the source snapshot held no artifacts
of a type you expected — a thin graft is a fact about the fork point, not a
failure.

## What you do not do

- **Do not alter the source record.** Not its artifacts, not its frontmatter,
  not its states. The Steward advances the source with a new snapshot noting the
  graft was taken; you touch nothing there.
- **Do not refine on the way through.** A graft inherits; it does not improve.
  The operator can `explore` or `distill` the new record the moment it exists,
  and that will be recorded as the verb it is.
- **Do not write state.** Either record's.

## Agent binding (hard)

Performed by **The Gardener** (`gardener`) and by no one else — the office that
receives what arrives and gives it its first shape, a graft being an arrival
whose origin happens to be internal (ADR 0024). If that agent is unavailable
the verb does not run; the Steward reports the gap.
