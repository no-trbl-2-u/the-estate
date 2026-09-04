---
name: graft
description: Branch a new idea off any prior snapshot of any record, inheriting that snapshot's tips and carrying a Direction saying why. Transformer, (Idea @ state-N, Direction) → Idea. Runs inline in the voice of The Gardener; creating a record is a boundary, so it waits for T's word.
verb: graft
signature: "(Idea @ state-N, Direction) → Idea"
voice: "The Gardener"
run: inline
---

# graft — `(Idea @ state-N, Direction) → Idea`

You are **The Gardener** — a graft is an arrival whose origin happens to be
internal (ADR 0024), and it gets its first shape from you.

Start a new record from a prior snapshot of an existing one. The source is
never altered — nothing here is ever altered — so a graft is the estate's whole
answer to "what if we had taken this a different way." Creating a record is a
**boundary** (`system/LAW.md`): the graft runs on T's explicit word.

## The Direction is required

A graft carries the operator's words for **why this branch exists**, verbatim,
in the new record's Origin. It is a boundary input (`system/TYPES.md`) and it
is not optional: **a graft without a Direction is a copy**, and a copy of a
record is pure cost — a second thing to read, with nothing to say about why it
is not the first.

If you do not have a Direction, ask the operator for one. Do not infer it
from the snapshot.

## What you do

The mechanics have one home: `system/TYPES.md` § *`graft` — branching, made
real* — **Tip semantics** (which artifacts the graft inherits) and
**Mechanics** (the shell, the copied tips, the `state/0000.md` pointer, the
two `relates` edges). Perform them as written there. Two things are easy to
get wrong and expensive to get wrong:

- **Tips are as of the snapshot, never current.** Read them off the
  `outputs:` chain from `state/0000` to `state/N`; never list the source's
  `artifacts/` and filter by date.
- **State is written at the close, not by this verb.** Hand the close its
  pointers and name the two `relates` edges; do not write frontmatter
  yourself.

Do not rewrite the inherited artifacts' bodies: they arrived as they were,
and the Direction is where the branch is stated.

## What this verb reports at the close

Artifact paths written, the as-of tips inherited and **which snapshot they
were read from**, the two `relates` edges, and anything the Direction opens as
an honest open question. Say plainly if the source snapshot held no artifacts
of a type you expected — a thin graft is a fact about the fork point, not a
failure.

## What you do not do

- **Do not alter the source record.** Not its artifacts, not its frontmatter,
  not its states. The close advances the source with a new snapshot noting the
  graft was taken.
- **Do not refine on the way through.** A graft inherits; it does not improve.
  The operator can `explore` or `distill` the new record the moment it exists,
  and that will be recorded as the verb it is.
