---
type: Guide
title: "Projects Layout"
description: "One directory per project; scope is location, ids stay global, the index is generated (ADR 0033)."
tags: [projects, layout]
generated: { by: claude-code/2026-09-03, at: 2026-09-03T00:00:00Z }
---

# Projects

One directory per project (ADR 0033):

```
projects/NNNN-slug/
  project.md       # identity, hand-authored (templates/project.md); Origin never edited
  INDEX.md         # GENERATED — records, decision log, border crossings
  ideas/           # this project's Idea Records — same layout as root ideas/
  exports/         # this project's departure lounge — same rules as root exports/
```

A **project scopes ideas**. Its `ideas/` holds ordinary Idea Records —
`ideas/README.md` describes them and nothing about a record changes by
being scoped. The root `ideas/` and `exports/` still exist and hold
**unscoped** work; `inbox/` stays at the root because a Slip is pre-record
and pre-project by definition.

## The rules

- **Scope is location.** A record's project is the directory that holds it.
  There is no `project:` frontmatter field — the filesystem is the fact's
  one home.
- **Ids stay global.** `idea-NNNN` is unique across the root tree and every
  project tree; allocate the next id from the max **anywhere**, plus one.
  The validator errors on a duplicate. Directories organize; ids identify.
- **Paths in frontmatter are estate-root-relative** (a state's `outputs:`
  names `projects/NNNN-slug/exports/…`, not `exports/…`). References
  *between* records stay id-based (`idea-NNNN/…`), which is why **moving a
  record between scopes is a `git mv`** of its directory — and its exports,
  per colocation — and nothing else.
- **Seeds colocate with their records.** A Seed lands in the departure
  lounge of the tree that holds its origin record. Validator-checked.
- **Grafts land beside their source** unless the Direction says otherwise.
  Cross-project lineage is legal and honest — it is *declared* in both
  projects' indexes as a border crossing, never forbidden.
- **`INDEX.md` is a build artifact.** Regenerate it
  (`node scripts/generate-project-index.mjs`); never edit it. Membership is
  the directory listing — the index is a view of it, plus the decision log
  and the border crossings.

## Where a project's decisions live

`project.md` is identity, not state: no state chain, no artifacts. A
decision *about the project* is a `Decision` artifact on a record whose
subject is the project itself — the pattern idea-0001 established for the
estate (ADR 0020). The generated index collects every `Decision` across
the project's records into one ADR-shaped log. The root `docs/adr/`
remains the machinery's log and takes no project decisions.

## Portability

A project directory is **copy-and-go**: records, exports, and index travel
as one subtree. The honest limit is cross-tree lineage — a graft's
`inputs:` may cite artifacts outside the project, and the index's border
crossings section is exactly the list of what a copied directory would
leave behind. A project with an empty crossings list is fully
self-contained; one with crossings says so, rather than pretending.
