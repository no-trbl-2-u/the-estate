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

A refiner (`explore`) writes a *new file* whose `inputs:` names
its predecessor; the current version is the tip of the chain.
`challenge` revises as a new version and sets its
classifiers there.

# Branching, exactly — the `graft` verb

Performed by `graft` (The Gardener), not by hand.

1. The **Direction** — the operator's words for why the branch exists — is
   required. Without one a graft is a copy.
2. The next global id is allocated and the new directory created.
3. Origin is copied verbatim, plus the graft stamp: source id, source
   snapshot, and the Direction verbatim.
4. The tips **as of the source snapshot** are copied in, renumbered from
   0001, each `inputs:` citing the source's original artifact path.
   Artifacts written on the source *after* that snapshot must not leak
   backward.
5. The new `state/0000.md` carries the sole cross-record pointer form,
   `previous: idea-NNNN/state/000K.md`, and cites the same snapshot in
   `inputs:`. Numbering restarts at 0000.
6. **Both `relates` edges** are written — the graft's, and the source's.
7. The source is **advanced, never edited**: its head state is copied
   forward noting the graft was taken.

The Gardener writes the shell, the Origin, and the artifacts; steps 5–7
are state, so it returns them and the Steward writes them.

# Lineage is derived

`parent`, `branch`, `merge`, and `split` are read off the
`inputs:`/`previous:` chains — the graph is a view, not a database. The
trade is real: a derived edge exists only if the writer faithfully
recorded `inputs:`.

`relates` holds the exceptions, of two kinds. The
**authored** edge is exempt because no machinery can make it. The
**graft** edge is derivable but stored anyway, so that the *source* can
name its descendants without a scan of every record. Only authored edges
count toward `connective` ([scoring](./scoring.md)).
