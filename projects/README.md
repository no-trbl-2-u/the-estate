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
  INDEX.md         # GENERATED — records, front step, decision log, border crossings
  ideas/           # this project's Idea Records — same layout as root ideas/
  exports/         # this project's departure lounge — same rules as root exports/
  inbox/           # this project's front step: material parked by /onboard (ADR 0034)
  docs/adr/        # this project's OWN decision log, written by `decide` (ADR 0035)
```

A **project scopes ideas**. Its `ideas/` holds ordinary Idea Records —
`ideas/README.md` describes them and nothing about a record changes by
being scoped. The root `ideas/` and `exports/` still exist and hold
**unscoped** work. The root `inbox/` remains the home of the stray thought,
which is pre-project by nature; supplied material that arrives *with* its
project — via `/onboard` — parks on the project's own `inbox/` as slips,
verbatim, under the same stamped-never-deleted law (ADR 0034 amending
ADR 0033's exclusivity).

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
  the directory listing — the index is a view of it, plus the front step,
  the decision log, and the border crossings.
- **Sibling projects never read each other** (ADR 0035). A scoped session
  opens no other project's records, exports, inbox — and above all not its
  `docs/adr/`. Border crossings are named, never followed, without T's
  word. The machinery (`system/`, `templates/`, the root `docs/adr/`) and
  the root estate record stay readable from any scope: the walls face
  sideways, not down.

## Where a project's decisions live

`project.md` is identity, not state: no state chain, no artifacts. Three
decision homes, disjoint by subject (ADR 0035):

- **About one record** → a `Decision` artifact on that record, with
  lineage — `decide`, unchanged.
- **About the project** → the project's own ADR:
  `docs/adr/NNNN-slug.md` from `templates/project-adr.md`, numbered per
  project from 0001, written by `decide` in a scoped session, and under
  the root log's own law — immutable once accepted, superseded never
  edited. No other project ever reads it. *(Supersedes ADR 0033's rule
  that project decisions live as artifacts on a record about the
  project.)*
- **About the machinery** → the root `docs/adr/`, authored outside the
  Steward context. `decide` never writes it.

The generated index lists both project-side homes in one decision log;
there is no hand-maintained per-project ADR index.

## Portability

A project directory is **copy-and-go**: records, exports, and index travel
as one subtree. The honest limit is cross-tree lineage — a graft's
`inputs:` may cite artifacts outside the project, and the index's border
crossings section is exactly the list of what a copied directory would
leave behind. A project with an empty crossings list is fully
self-contained; one with crossings says so, rather than pretending.
