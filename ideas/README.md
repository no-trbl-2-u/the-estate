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
forward from an older snapshot into a new record — the source is never
*edited*, because nothing here is ever edited. Lineage is derived from the
`inputs:`/`previous:` chains; `relates:` in `idea.md` holds the hand-authored
edges **and** the machine-written graft edges (`system/TYPES.md` distinguishes
them).

## Branching, exactly — the `graft` verb

Branching is performed by **`graft`** (`.claude/skills/graft/SKILL.md`, ADR
0024), bound to **The Gardener**: a graft is an arrival whose origin happens to
be internal. It supersedes the hand-run procedure this section used to describe.
To branch `idea-0007` from its `state/0002.md` — whatever its head is now:

1. **The Direction, first.** The operator's words for *why this branch exists*.
   Required: a graft without one is a copy.
2. **Allocate the next global id** and create `ideas/NNNN-new-slug/` from
   `templates/idea.md`.
3. **Origin**: copy the source record's Origin verbatim, then the graft stamp —
   source id, source snapshot, and the **Direction verbatim**.
4. **Inherit the tips *as of `state/0002`***, not the source's current tips.
   Copy them in as the graft's own artifacts, **renumbered from 0001**, each
   `inputs:` citing the source's original artifact path. Walk
   `state/0000 → state/0002` and take the last artifact of each type off the
   `outputs:` chain — never the source's `artifacts/` directory, which is the
   *current* state and is exactly what must not leak backward.
5. **First snapshot**: the new record's `state/0000.md` carries the sole
   cross-record pointer form, `previous: idea-0007/state/0002.md`, and cites the
   same snapshot in `inputs:`. Numbering restarts at `0000` in every record.
6. **Both `relates` edges.** `relates: [idea-0007]` on the graft;
   `relates: [idea-NNNN]` appended to the **source's** `idea.md`.
7. **The source is advanced, never edited**: its head state is copied forward to
   a snapshot noting the graft was taken. Both `state-head:` pointers move.

**Who writes what.** The Gardener writes the shell, the Origin, and the
inherited artifacts. Everything in steps 5–7 is **state**, so the Gardener
*returns* it and the Steward writes it — the writer seam, unchanged.

**Why a back-edge, when `parent` is derivable.** It is derivable: any
`previous:` naming another record is a branch point, read straight off the
chain. But deriving *descendants* means scanning every record in the estate to
find the ones pointing back at this one. The back-edge makes the source
self-describing, and a source that cannot tell a future reader a branch left
from it has lost the fact in a system with no index. The edge is a convenience
denormalization of something true, which is why `system/TYPES.md` files it under
`relates` while keeping it distinct from an authored edge.

Reviving a retired record is this same operation from any of its snapshots.
