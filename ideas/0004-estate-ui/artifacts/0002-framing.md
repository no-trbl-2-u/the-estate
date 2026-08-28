---
id: idea-0004/artifacts/0002-framing.md
type: Framing
shape: prose
lenses: []
produced-by: frame
inputs: [ideas/0004-estate-ui/artifacts/0001-estate-ui.md]
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [envision, challenge, explore]
summary: "The estate's record is complete but illegible at a glance — every fact a map needs is in frontmatter, yet the file tree renders storage rather than travel, and T, a visual learner, cannot see the thing that has been built. The framing takes the map before the tree (the lineage graph is derivable today; the hierarchy T's words name is not), takes read-only before dispatch (a surface that writes or steers collides with the writer seam and the unaddressable steering layer), and takes in-repo static as the home (self-containment is law). The tension: the honest map can show every place an idea stopped and nothing of what steered it between stops — and this record must not become the pressure that fixes that, because that ground belongs to idea-0001."
---

# The record is complete; the view of it is missing

## The problem underneath

The estate keeps a better record of its ideas than almost any tool T could buy:
every artifact typed, immutable, chained by `inputs:`; every session sealed in a
numbered state; every cross-record connection a deliberate `relates` edge. And
none of it can be *seen*. The only rendering the estate has is a file tree, and
a file tree renders **storage** — directories, filenames, numbers — when what
the record actually contains is **travel**: a Spark becoming a Framing, a
Framing surviving a challenge as a new version, a Trajectory fanning out into
seven Phases, a Seed leaving with a provenance stamp.

T named the cost in the Spark, and the reason is personal, not architectural:
*"I'm a visual learner and I want to see the map of how the idea is
traveling."* The problem is not that the data is absent — the glossary confirms
the map is entirely derivable from frontmatter today. The problem is that the
estate's record is **write-optimized and read-hostile**: legible to an agent
who greps frontmatter, illegible to a person who thinks in pictures. The job of
this UI is to close that gap — to render what the frontmatter already knows, so
that comprehension stops costing file-opens.

Concretely, the two motions T asked for:

1. **The map** — "how the idea is traveling." Within a record: the artifact
   lineage graph (`inputs:` chains, version branches, fan-outs) laid against
   the state sequence. Across records: `relates` edges.
2. **The jump** — "cleanly jump between projects and then ideas/sub-ideas
   within." Portfolio navigation: land on the estate, see the records with
   their `status` / `appetite` / `state-head`, drop into one, drop into an
   artifact, come back out — with "cleanly" meaning the jump stops costing
   anything.

## Who this is for

**One operator. T.** Not a general audience, not the estate's visitors, not a
product with users. This matters because every trade below tips differently for
an audience of one: no auth, no hosting pressure, no onboarding, no
generalization beyond what T's own comprehension needs. The UI succeeds if T
opens it and understands the estate faster than by opening files; there is no
second success criterion.

Domain-generality still binds (`AGENTS.md`): the UI renders Idea Records, and
an Idea Record may be a business, a conjecture, or a narrative premise. Nothing
in the rendering may assume a subject domain — it draws types, chains, states,
and edges, which exist identically for all of them.

## What the UI renders — the ground truth that exists today

A Framing for a viewer must name what the viewer views. The estate has one
record dense enough to be the acceptance test: **idea-0003** — 19 artifacts, 13
states, a challenge that wrote `0009-framing-challenged.md` as a new version of
`0008-framing.md`, a seven-way Phase fan-out from one Trajectory, an assets
directory with a manifest, and a Seed in `exports/`. **A UI that renders
idea-0003 well renders the estate well.** That record is the fixture; no mock
data is needed or wanted.

At the portfolio level, the things a view would show are equally concrete:
`ideas/SURVEY.md` (the Cartographer's ranked read), reachability, appetite,
staleness call-outs, convergent notices, and the `relates` edges between
records — all specified in `system/SCORING.md`, all either present in files or
derivable from them.

## The tree-or-map call

**Map first. The tree waits on T's structure, not on this record's design.**

My own capture note, carried in state 0000, decides this: *the gap is in the
tree, not the map.* T's three-level vocabulary — Project, Idea, sub-idea —
names a hierarchy the estate does not have. The glossary flagged both gaps
honestly: there is **no grouping tier above Idea Records** (the portfolio is
flat), and there is **no child record** ("sub-idea" resolves to either a
derived version branch or a `relates`-joined record, neither of which is an
idea nested inside an idea). Closing either gap is a record-schema change, T's
decision with the reading list, per `AGENTS.md`.

So the near horizon is the map: lineage graph, state sequence, `relates` edges,
portfolio navigation over the flat `ideas/` — everything drawable from
frontmatter today, no new data, no schema. The tree is named as a **dependency
on a structural decision of T's**, not designed around, not simulated. The one
concession the map can make to T's vocabulary without touching schema: render
version branches and `relates` neighbors *as* the two honest meanings of
"sub-idea," labeled with the glossary's words, so the vocabulary T reached for
finds the things that actually exist.

**The vocabulary contract:** every label in the UI maps through
`docs/GLOSSARY.md`. Where T's word and the canon's word differ, the UI shows
the canonical term; the glossary is the translation layer, and it governs in
exactly one direction — canon into UI, never UI into canon.

## The read-only-or-dispatch call

**Read-only. Dispatch is a far horizon at most, and it is not this record's
horizon to reach for.**

Stated as the assumption it is (fast-track; T can reverse it): the near-term UI
is a **viewer** — it renders the addressable half of the estate and writes
nothing. Two independent walls stand behind this call, and naming them is the
point:

1. **The writer seam.** One file, one writer (`system/LAW.md`). Agents write
   artifacts; the Steward writes state and record frontmatter. A UI that writes
   *anything* — an appetite slider, a status toggle, a relates button — is a
   third writer the law does not have. That is not a feature decision; it is a
   proposal to amend `system/LAW.md`, and any future version of this idea that
   wants it must say so in those words.
2. **The unaddressable steering layer.** Idea-0001's Framing establishes that
   dispatch packets, route derivations, and the Steward's discretionary calls
   produce no artifacts. A UI button that says "run `challenge` on this
   Horizon" is a surface that *steers* — it originates exactly the population
   of acts the estate cannot currently record. Building a dispatch surface
   before that record resolves would pour concrete over an open question that
   belongs to another record.

What read-only costs, said plainly: the viewer can show every place an idea
stopped and **nothing of what steered it between stops**. The map of "how the
idea is traveling" is the map of the addressable half. The honest near-term
answer is to **draw that half and label the gap** — a visible seam in the
rendering where the steering happened off-record — rather than to pretend the
map is complete or to make this record the pressure that forces the steering
layer into artifacts. If T ever wants the second thing, it runs through
idea-0001, and the `relates` edge between these two records (still undrawn;
The Cartographer's verb) is where that pressure would travel.

## The where-does-it-run call

**In-repo static, opened locally.** Stated as an assumption, but the prior
behind it is law, not taste: the repository must remain self-contained
(`AGENTS.md`) — no external services, nothing the repo cannot function
without. A hosted app fails that test outright. A local server is tolerable
but adds a moving part for an audience of one. A static artifact that lives in
the repo, reads the records (at build time or at load), and opens in a browser
keeps the repo the single source of truth and keeps the UI what it is: **a
view, not a database** — the same words `system/TYPES.md` uses for lineage
itself. The precedent exists: `docs/idea-pipeline.html` is already an approved
in-repo visual. Stack, build step, and whether "static" means generated or
runtime-parsed are `envision`'s and `chart`'s to work out, not mine.

## In scope

- Rendering the derived lineage graph within a record: `inputs:` chains,
  version branches (challenge/distill/explore chains and their tips), fan-outs
  (Trajectory → Phases), artifact types and classifiers as visible properties.
- The state sequence alongside the artifact graph — states are the travel's
  timestamps, and the map T asked for is both together.
- Portfolio navigation: the flat `ideas/` shelf with `status`, `appetite`,
  `state-head`, staleness; `relates` edges between records; the survey's
  shortlist and convergent notices where they exist.
- The vocabulary mapping: glossary terms as the UI's labels, the two flagged
  gaps rendered as the real things they resolve to.
- An honest marker for the unaddressable: where steering happened and left no
  artifact, the map says so rather than smoothing over it.

## Out of scope

- **Any write path.** No editing, no dispatching, no appetite-setting, no
  relates-drawing. All of it collides with the writer seam or the steering
  layer, and any of it re-enters only as an explicit law-touching proposal.
- **Schema changes.** No Project tier, no child records, no packet artifacts.
  The UI renders what frontmatter provides; wanted features that need more are
  dependencies on T's structural decisions, named and parked.
- **Idea-0001's remedy.** Whether the steering layer should become addressable
  is that record's ground. This UI labels the gap; it does not close it.
- **Visual and technical design.** Screens, layout, graph library, stack,
  build tooling — `envision` and later verbs. Naming the space is the whole
  job here.
- **A general-audience product.** No hosting, no auth, no polish for strangers.

## The tension that makes this interesting

**The map T asks for and the map the record can draw are not the same map, and
the difference is the estate's own open wound.** "How the idea is traveling"
wants motion — and the motion between artifacts is exactly the steering the
estate cannot record. A viewer can be honest (draw the stops, label the gaps)
or complete (make steering addressable), and it cannot be both without
reaching into idea-0001's ground. This Framing chooses honest and says so.

And beneath it, the sharper one — **this record versus the clock.** The
estate's falsifier runs to **2026-09-25**: failed if no evidence of use outside
this repo by then. The named failure mode is *building the estate is more fun
than using it* — and a UI for the estate is machinery, squarely, without
qualification. It is the first record T opened purely for T, it runs on real
personal energy ("I'm a visual learner"), and it spends the month's scarce
resource — T's attention — inside the repo. The one thing that can be said for
it against the clock: a viewer whose job is *comprehension* is at least aimed
at making the estate usable rather than more elaborate, and its acceptance
test is a record (idea-0003) that exists because the estate was used for
something outside itself. That is a mitigation, not an acquittal. I sit this
record where it sits: **inside the failure mode's silhouette**, worth doing
only at a size T can afford, and the size is T's call — `appetite:` is still
the template placeholder, and setting it is the honest first act of scoping.

## Assumptions, exposed so they can be attacked

1. **Map before tree.** If T actually needs the hierarchy first — if the flat
   portfolio at even four records already fails T's navigation — this framing
   inverted the priority, and the real first move is the structural proposal,
   not the viewer.
2. **Read-only is enough to be worth building.** If a viewer that cannot act
   turns out to be a thing T opens twice and abandons — because the value was
   always in *doing from* the view, not looking at it — the scope call was the
   fatal one.
3. **In-repo static.** If the graph rendering T's comprehension needs turns
   out to demand a live server or heavy tooling, the self-containment prior
   and the want collide, and T decides which bends.
4. **Frontmatter is sufficient and trustworthy.** I assume `inputs:`, states,
   and `relates` are recorded faithfully enough to draw without repair. A
   missing link cannot be reconstructed (`AGENTS.md`); the UI will render the
   record's gaps as gaps, and I assume T wants that honesty rather than a
   prettied graph.
5. **The glossary holds as the vocabulary contract.** If the UI's needs start
   pushing terms back into the canon, the one-way boundary the glossary
   declares is being violated, and that is a sign the UI is redesigning the
   estate rather than viewing it.
6. **T wants this at viewer size.** Fast-track energy plus personal energy is
   exactly the fuel the failure mode burns. I assume the fast-track means
   "move briskly at small size," not "build big fast."

## What would show I framed the wrong problem

1. **The tree bites first.** If T's actual friction in use is "I can't group
   and nest," not "I can't see the travel," the map-first call was wrong and
   the structural proposal should have led.
2. **The viewer goes unopened.** If it ships and T still opens files, the
   problem was never legibility — assumption 2 fired.
3. **The steering gap dominates the view.** If every session with the UI ends
   in "but *why* did it go there?", then the honest-half map is not honest
   enough to be useful, and this record and idea-0001 should have been framed
   together rather than walled apart.
4. **The clock fires with this record fat.** If 2026-09-25 arrives with the
   governing falsifier fired and idea-0004 has meanwhile accumulated
   artifacts, this Framing fed the named failure mode while describing it.
   Only T can read this one.

## Not settled here, deliberately

- What the map *looks like* — every rendering question belongs to `envision`.
- `appetite:` — still the placeholder; T's to set, and the honest scoping act.
- The `relates` edge to idea-0001 (and plausibly idea-0003 as the fixture) —
  The Cartographer's verb, not run.
- Whether the two glossary gaps ever close as structure. Parked as T's, with
  the reading list.
- Whether a dispatch surface is ever wanted. Far horizon, law-touching,
  and downstream of idea-0001 either way.
