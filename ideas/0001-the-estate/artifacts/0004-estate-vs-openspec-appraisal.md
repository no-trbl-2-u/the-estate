---
id: idea-0001/artifacts/0004-estate-vs-openspec-appraisal.md
type: Appraisal
shape: prose
lenses: []
produced-by: compare
inputs:
  - ideas/0001-the-estate/artifacts/0003-openspec-findings.md
  - ideas/0001-the-estate/artifacts/0002-first-full-arc-residue.md
date: 2026-09-12
classifiers:
  challenged: false
potential-next-steps: [decide, distill]
summary: "The estate against Fission-AI/OpenSpec on two operator-stated criteria: stage coverage (disjoint — OpenSpec starts at a proposal, the estate ends at a Seed; they meet at the build-plan seam and do not compete) and operator overhead (OpenSpec wins per change by a wide margin; the estate's cost is dominated by self-governance, not by idea work). 'Worth it' is not decided by this comparison but by the standing falsifier: use outside the repository by 2026-09-25."
---

# Appraisal: the estate against OpenSpec

Spoken by The Assayer, inline: this session did not shape either option.
Facts about OpenSpec are from the Factor's Findings (unverified tier,
primary sources, 2026-09-12). Facts about the estate are measured from this
repository on the same day.

## Criteria, fixed before judging

T named two: **stage coverage** and **operator overhead**. Nothing else is
weighed here.

## 1. Stage coverage

| Stage | the estate | OpenSpec |
|---|---|---|
| Raw thought, pre-record | `jot` slip, durable | none; `/opsx:explore` is chat-only and persists nothing |
| Spark → Framing → Horizon | `capture`, `frame`, `envision` | none |
| Pressure-test, decision record | `challenge`, `decide`, immutable ADRs | a `## Decisions` section inside `design.md` |
| Path → phases | `chart`, `phase` (recursive) | `proposal` → `tasks.md` |
| Behavioral spec of a system | none | main specs plus delta specs — its core |
| Implementation | none, by design | `apply` writes code, `verify` checks it |
| Portfolio, lineage, branching | `survey`, `relate`, `graft`, state chain | none; flat per-project list, dated archive |
| Domain | general by law | software-only in every template |

**Verdict.** Disjoint. OpenSpec's first durable object is a named change;
the estate's last is a Seed. The `build-plan` payload contract is already
the seam where an OpenSpec proposal would begin. Two of the "OpenSpec lacks
X" rows rest on absence in the docs rather than a tested install.

## 2. Operator overhead

| Measure | the estate | OpenSpec |
|---|---|---|
| Ceremony per unit | one verb per artifact, one mandatory close snapshot per session, T's word at four boundaries | three slash commands per change, minimum |
| Files per unit | record 0003: 47 files, 15 states, 27 artifacts | four AI-drafted files plus an optional yaml |
| Governance surface | 965 lines of `system/`, 35 ADRs, 21 skills, for 3 records | 12 generated skills, one config, versioned upstream |
| Validation | `validate-estate.mjs`, hand-maintained | `openspec validate`, shipped upstream |
| Who maintains the kit | T | two maintainers, weekly releases, 68k stars |

**Verdict.** OpenSpec wins per change by a wide margin, but its unit is a
codebase change and the estate's unit is a session on an idea. The
estate's overhead is spent on state snapshots and on law; OpenSpec has no
such cost because it keeps no such history. The ratio that matters is the
estate's own: 35 ADRs and two residues of seventeen defects for three
records. The cost is self-governance, not idea work.

## Where each wins

- **OpenSpec** when the idea already is a codebase, the project is single,
  and the thinking fits in one explore conversation.
- **The estate** when the idea has no codebase or is not software, will be
  revisited across months, may branch, needs an adversary before commitment,
  or must be ranked against siblings.
- **Neither** owns the middle. A Seed's `build-plan` payload and an OpenSpec
  proposal describe the same moment from opposite sides. That handoff is
  unbuilt; a custom OpenSpec schema whose first artifact is the Seed is the
  cheapest shape for it.

## What this comparison cannot decide

"Is the estate worth it" is not answered by a tool that covers a different
stage. It reduces to: **is the pre-spec stage worth recording at all.** If
T's ideas arrive spec-shaped, no. If they arrive loose and return months
later, yes, and OpenSpec explicitly declines that stage.

The estate already carries the test that does decide it: evidence of use
outside this repository by 2026-09-25 (`system/FALSIFIERS.md`). Thirteen
days remain. Nothing has been exported. This Appraisal is one more day of
comparing instead of shipping, and the residue filed beside it says so.
