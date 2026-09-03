---
type: Decision Record
title: "ADR 0033"
description: "Projects are directories: a project encapsulates its own ideas/ and exports/ under projects/NNNN-slug/; ids stay global, scope is location, the index is generated."
tags: [adr, decision]
generated: { by: claude-code/2026-09-03, at: 2026-09-03T00:00:00Z }
---

# ADR 0033: Projects are directories

**Status:** accepted · **Date:** 2026-09-03 · **Source:** T's direction, stated
in session ("I want to be able to scope ideas to projects and I want those
projects to be directories")

## Context

The estate's funnel serves an idea that starts small. T asked what happens
when it doesn't — when the operator is "already on v6" and wants to work
small ideas *in the context of a larger project*. The estate had no
container: records are peers, `relates` draws edges but never scope, and the
one project this estate ever had (the estate itself) was scoped by
convention — idea-0001 held the cross-cutting Decisions, and ADR 0020 called
it "the correct home for a convention that governs every record." The
pattern worked; nothing made it structural.

Two shapes were considered. A frontmatter pointer (`project:` on `idea.md`,
no new directories) was the cheaper lift, and T rejected it for the reason
that matters: encapsulation. A project should be a *place* — its records,
its departure lounge, its index in one subtree you can copy and hand over.
T proposed the hybrid this ADR adopts: directory-based projects carrying
their own config and state files, indexing their own ideas, holding their
own exports.

What makes the hybrid affordable is a fact about this repository that was
only confirmed by tracing it: **identity here is id-based, not path-based.**
Artifact ids are `idea-NNNN/artifacts/NNNN-slug.md`, graft's cross-record
pointer is `previous: idea-NNNN/state/000K.md`, and the provenance stamp
`origin: idea-NNNN @ state/NNNN` is resolved by scan, never by
reconstructing a path. Nesting records under projects is a path change, not
an id change. The layout coupling in live code was two directory walks and
one regex.

The timing is a one-off. ADR 0032 emptied `ideas/` and `exports/` the day
before this decision; there are no records to migrate and no grandfathered
exports to move. This restructure will never again be this cheap.

## The holes, poked and filled

T asked for the hybrid to be stress-tested before adoption. Each hole below
is real; each fill is part of this decision.

**Duplicate ids.** Two trees can both mint `idea-0007` — nothing structural
prevents it once records live in more than one place. *Fill:* ids are
allocated from one global sequence (the max across every tree, plus one),
and the validator errors on any id claimed twice. Checked, not declared.

**The index drifts.** "Config/state files to index the ideas" is a
denormalization: a hand-maintained list that can disagree with the
directory it describes. This estate carries exactly one hand-maintained
back-edge (graft's `relates`), and `ideas/README.md` spends a paragraph
defending it. *Fill:* membership **is** the directory listing. The index
(`INDEX.md`) is **generated** by `scripts/generate-project-index.mjs`, the
same move as `system/registry.md` — a view, never a second copy. Only what
the filesystem cannot say is hand-authored, and that lives in `project.md`.

**A Seed orphaned from its record.** With two-plus departure lounges, a
Seed could land in one tree while its origin record lives in another; the
staleness check and the portability claim both break. *Fill:* the
colocation rule — a Seed lands in the lounge of the tree that holds its
origin record, and the validator errors otherwise. When a record moves, its
exports move with it.

**Portability that lies.** "Copy the project directory and hand it over" is
the encapsulation prize, but a graft's `inputs:` may honestly cite
artifacts in another tree — and then the copied directory has dangling
lineage. Forbidding cross-tree lineage would gate the graph to save a
claim. *Fill:* cross-tree citation stays legal, and the generated index
**declares** every border crossing, so portability is a measured property
of a project rather than an assumed one. Grade, never gate.

**`project.md` becomes a shadow record.** Give the project file a state
chain and artifacts and it is a second record type with its own law.
*Fill:* `project.md` is identity only — id, title, origin, status,
appetite, target. It has no state and produces no artifacts. A decision
*about the project* goes where the estate has always put one: a `Decision`
artifact on a record whose subject is the project itself — the idea-0001
pattern, now available per project.

**Per-project ADRs fork the decision mechanism.** A hand-authored
`docs/adr/` per project would be a second way to record decisions, with
different immutability rules than the `Decision` type. *Fill:* the root
`docs/adr/` remains the machinery's log, and a project's decision log is a
**generated section of its index** — an ADR-shaped view over the `Decision`
artifacts of its records. One authoring surface; encapsulation satisfied by
where the generated file lives.

**Nowhere for an unscoped thought.** A `jot` at 2 a.m. does not know its
project, and forcing every stray thought to pick one fakes a scope. *Fill:*
the root `ideas/` and `exports/` remain, holding unscoped records exactly
as before; `inbox/` stays at the root because a Slip is pre-record *and*
pre-project by definition. Scoping later is a `git mv` — free, because
references are id-based (below).

**The shelf fragments.** Scoring ranks records globally by
reachability × appetite; projects invite ranking within and across, and a
project-level appetite multiplier is a real temptation. Scoring is also
where `system/SCORING.md` is most explicit about what must never happen.
*Fill:* deferred, deliberately. Grouping is **display only**. `survey`
still reads every record in the estate and `ideas/SURVEY.md` stays at the
root. `appetite:` on `project.md` is recorded and displayed but consumed by
no metric until a future ADR decides how — silently multiplying it through
would change what the score optimizes for without a decision.

**An empty project.** Onboarding a mature outside project starts with "a
project with no ideas yet" — a container plus supplied material. *Fill:*
legal. The validator requires `project.md` and nothing else; an empty
`ideas/` is a project waiting for its first capture, not an error.

## Decisions

**1. The layout.**

```
projects/NNNN-slug/
  project.md       identity, hand-authored (templates/project.md)
  INDEX.md         generated — records, decision log, border crossings
  ideas/           this project's records, same layout as root ideas/
  exports/         this project's departure lounge, same rules as root exports/
ideas/             unscoped records, unchanged
exports/           the unscoped departure lounge, unchanged
inbox/             slips — always at the root, pre-record and pre-project
```

**2. Scope is location.** A record's project is the directory that holds
it. There is no `project:` frontmatter field — one home per fact, and the
filesystem is the home. (The same rule ADR 0030 applied to `target:`.)

**3. Ids stay global.** `idea-NNNN` is unique across the root tree and
every project tree; the next id is the max anywhere, plus one. Projects
have their own sequence, `project-NNNN`. Directories organize; ids
identify.

**4. Paths in frontmatter are estate-root-relative; references between
records are id-based.** `state-head:` stays record-relative as always.
Because nothing resolves a record by its location, **moving a record
between scopes is a `git mv` of its directory (and its exports, per the
colocation rule) and nothing else** — no other file changes.

**5. `project.md` is identity, not state.** No state chain, no artifacts,
no `relates`. Its `target:` is the **standing answer to the Sower's
question** ("include the Nexus worker loop?") for build-plan Seeds exported
from this project — the Seed still records its own `target:`, which remains
the fact (ADR 0030); the project supplies the default so T is asked once
per project, not once per Seed.

**6. The index is generated, never authored.**
`scripts/generate-project-index.mjs` writes each project's `INDEX.md`:
the record table, the decision log (every `Decision` artifact across the
project's records), and the border crossings (every `inputs:` or `relates`
reaching outside the project). Editing it by hand is editing a build
artifact.

**7. Seeds colocate with their records.** Validator-checked, both
directions: an export whose origin record lives in a different tree is an
error.

**8. Graft defaults to the source's tree.** A graft is taken *from
somewhere*; it lands beside its source unless the Direction says otherwise.
Grafting across the border is legal and shows up in both indexes as a
crossing.

**9. Root `docs/adr/` remains the machinery's log.** Decisions about how
the estate works go there; decisions inside a project go on its records.

## Rejected alternatives

**Scoping by frontmatter pointer, no directories.** The cheaper lift, and
the shape recommended first. T chose encapsulation, and the pointer buys
none: no per-project lounge, no copy-and-go subtree, and the "project" is
scattered across a flat namespace. Rejected by T's explicit direction.

**Project-relative ids** (`project-0002/idea-0001`). Would break the
provenance stamp format, graft's cross-record pointers, and every id-based
reference — the entire cost this ADR's layout avoids — to gain a shorter
number. Rejected.

**A hand-authored index.** See the holes. Rejected for the same reason
`system/registry.md` is generated (ADR 0028).

**A `contains-nexus-loop:` boolean on the project.** Already rejected once
at the Seed level by ADR 0030 ("it would duplicate `target:` and could
disagree with it"); duplicating it a level up resurrects the same defect.
`target:` on `project.md` is a default answer, not a second copy of the
Seed's fact.

## Consequences

- `scripts/validate-estate.mjs` walks root plus every project tree; new
  checks: `project.md` present and well-formed, global id uniqueness, Seed
  colocation. The staleness and payload checks now run per tree.
- `scripts/generate-project-index.mjs` is new; regenerating indexes joins
  regenerating the registry as routine close work.
- The UI walks both trees, gains a `projects` array in `estate.json`, and
  groups the shelf and the Grounds by project. Scoped records show their
  project; unscoped records are unchanged.
- `templates/project.md` and `projects/README.md` are new;
  `ideas/README.md`, `exports/README.md`, `system/STEWARD.md`,
  `system/TYPES.md`, `system/FALSIFIERS.md`, `docs/GLOSSARY.md`, and the
  `start`/`survey`/`graft`/`seed` skills gain the two-tree layout.
- **An intake skill (`/onboard`) is deliberately not part of this ADR.**
  Creating a project directory by hand is three files; the interesting
  decision — how supplied material (PRDs, references, a running codebase)
  enters as slips and becomes typed artifacts without faking a Spark — is
  its own ADR-sized choice and should not ride in on a layout change.
- Scoring and `survey` are unchanged by design; the first time a project
  makes the shelf feel wrong is the trigger for the scoring ADR this one
  defers.
