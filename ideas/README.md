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
