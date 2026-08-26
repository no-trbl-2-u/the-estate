---
type: Guide
title: "Idea Records Layout"
description: "One directory per record; immutable state; the exact branching mechanics."
tags: [records, layout]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Ideas

One directory per Idea Record:

```
ideas/NNNN-slug/
  idea.md          # identity + origin (templates/idea.md); origin is never edited
  state/           # immutable snapshots, copied forward: 0000.md, 0001.md, ...
  artifacts/       # typed artifacts (templates/artifact.md), NNNN-slug.md
```

**State is immutable.** Every session copies the latest snapshot forward and
updates the copy. Time travel is picking up an older file; branching is copying
forward from an older snapshot into a new record (its `previous:` field records
the exact origin — the source is untouched, because nothing is ever touched).
Lineage is derived from the `inputs:`/`outputs:` chains; the only hand-authored
edge is `relates:` in `idea.md` frontmatter.

## Branching, exactly

Branching is record creation, so it is the Steward's to perform (state has one
writer). To branch record `idea-0007` from its `state/0002.md` — whatever its
head is now:

1. **Allocate the next global id** and create `ideas/NNNN-new-slug/` from
   `templates/idea.md`.
2. **Origin**: copy the source record's Origin verbatim, then one added line
   naming the branch point — `Branched from idea-0007 @ state/0002.md because …`
3. **First snapshot**: the new record's `state/0000.md` is the source snapshot
   copied forward, with the cross-record form of the pointer:
   `previous: idea-0007/state/0002.md`. This is the **only** place `previous:`
   crosses records; numbering restarts at `0000` in every new record.
4. **Nothing in the source record changes.** No back-edge is written: `parent`
   is *derived* — any `previous:` that names another record is a branch point,
   read straight off the chain.

Reviving a retired record is this same operation from any of its snapshots.
