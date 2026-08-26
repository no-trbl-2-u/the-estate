---
type: Specification
title: "The Record Model"
description: "Idea Records, immutable copy-forward state, artifact versioning, branching, and derived lineage."
tags: [records, state, lineage]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: layout
    resource: ../ideas/README.md
    title: "Idea Records layout"
  - id: types
    resource: ../system/TYPES.md
    title: "The Type System"
  - id: templates
    resource: ../templates/idea.md
    title: "Record template"
---

# The Record Model

One directory per Idea Record:

```
ideas/NNNN-slug/
  idea.md          # identity, verbatim Origin (never edited), status,
                   # appetite, relates, state-head
  state/           # immutable snapshots: 0000.md, 0001.md, ...
  artifacts/       # typed artifacts, immutable, versioned by inputs:
```

# Immutable state

Every session copies the latest snapshot forward and writes a new one;
prior states are never edited. Each snapshot records what was established,
decisions with the why, gold nuggets, tensions, open questions, and an
honest current-state declaration. At every close the Steward advances
`state-head:` in `idea.md` — the pointer the survey's staleness detection
reads.

One rule buys four features: **time travel** is opening an older file;
**branching** is copying forward from an older snapshot; **revival** of a
retired record is branching; and old states become **documentation**.

# Artifacts are immutable too

A [refiner](./verbs/explore.md) writes a *new file* whose `inputs:` names
its predecessor; the current version is the tip of the chain.
[challenge](./verbs/challenge.md) revises as a new version and sets its
classifiers there.

# Branching, exactly

1. The Steward allocates the next global id and creates the new directory.
2. Origin is copied verbatim, plus one line naming the branch point.
3. The new `state/0000.md` carries the sole cross-record pointer form:
   `previous: idea-NNNN/state/000K.md`. Numbering restarts at 0000.
4. Nothing in the source record changes: `parent` is **derived** from any
   cross-record `previous:`.

# Lineage is derived

`parent`, `branch`, `merge`, and `split` are read off the
`inputs:`/`previous:` chains — the graph is a view, not a database. The
trade is real: a derived edge exists only if the writer faithfully
recorded `inputs:`. One edge is exempt because no machinery can make it:
[relates](./verbs/relate.md), the hand-authored one.
