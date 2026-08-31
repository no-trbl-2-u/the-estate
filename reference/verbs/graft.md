---
type: Verb
title: "graft"
description: "Branch a new record off any prior snapshot, inheriting that snapshot's tips and carrying a Direction saying why."
resource: ../../.claude/skills/graft/SKILL.md
tags: [verb, transformer, branching]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/graft/SKILL.md
    title: "graft skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
  - id: adr
    resource: ../../docs/adr/0024-graft-the-branch-verb.md
    title: "ADR 0024: Graft - the branch verb"
---

# graft

| | |
|---|---|
| Signature | `(Idea @ state-N, Direction) → Idea` |
| Family | transformer |
| Mode | batch |
| Performed by | [The Gardener](../offices/gardener.md) — a [hard binding](../law.md) |

Start a new record from **any prior snapshot of any record**. The source is
never edited — nothing here is ever edited — so `graft` is the estate's
answer to *"what if we had taken this a different way."* It is the
mechanism behind the [record model](../record-model.md)'s branching
promise, which was stated from the first build and unimplemented until
[ADR 0024](../../docs/adr/0024-graft-the-branch-verb.md).

## The Direction

A **boundary input** ([types](../types/index.md)): the operator's words
for *why this branch exists*, verbatim in the new record's Origin. It is
**required** — a graft without a Direction is a copy, and a copy of a
record is pure cost.

## Tip semantics — as of the snapshot

> For each artifact type present at the source snapshot, inherit the
> version that no successor of the same type supersedes **as of that
> snapshot**.

Not the source's *current* tips. Artifacts written after state-N **must
not leak backward** into the graft: a graft from state 4 of a record now
at state 13 that inherited state 13's work would have an origin stamp
that lies and could not do the one thing branching is for. Read the tips
off the `outputs:` chain of `state/0000 → state/N`, never off the
source's `artifacts/` directory.

## The seam

The Gardener writes the shell, the Origin, and the inherited artifacts
(renumbered from 0001, each `inputs:` citing the source's original
artifact path). It **returns** the state: the cross-record
`previous: idea-NNNN/state/000K.md`, the `inputs:`, and both `relates`
edges. The Steward writes them, because record frontmatter is state
([the writer seam](../law.md)).

This is also why `graft` does not encroach on [relate](./relate.md): it
does not author an edge as its purpose, it produces a record whose
existence implies one. Graft edges sit in `relates` beside authored ones
and are told apart by the counterpart's Origin; only authored edges count
toward `connective` ([scoring](../scoring.md)).

A graft session closes **two** records: the graft's `state/0000`, and the
source advanced by a snapshot noting the graft was taken.
