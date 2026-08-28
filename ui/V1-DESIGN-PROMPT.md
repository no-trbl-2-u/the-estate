# Estate View — V1 design prompt

*Steward-authored at T's instruction, 2026-08-28, from the sealed Seed
(`exports/0004-estate-ui-seed.md`) and the Horizon tip
(`ideas/0004-estate-ui/artifacts/0010-horizon-explored.md`). This file is the
prompt to hand to claude.ai/design — copy everything below the rule.*

*Design exploration does not violate the build law (generator before pixels):
the generator ships first regardless; this buys the pixels their direction in
parallel.*

---

Design a local, single-page tool called **Estate View** — a read-only visual
browser for a portfolio of idea records. One operator uses it on their own
machine to see, at a glance, what every idea is, where it stands, and how it
traveled from raw thought to exported plan. Desktop-first; it is a working
instrument, not a marketing page.

## The domain, in one paragraph

An "estate" is a portfolio of **idea records**. Each record accumulates
**artifacts** — typed documents (Spark, Framing, Horizon, Trajectory, Phase,
Findings, Appraisal, Decision, Seed) produced by named agents performing verbs
(capture, frame, envision, challenge, chart, phase, seed…) — and **state
snapshots**, a parallel narration track written by a single narrator called
the Steward. Artifacts chain: each names its inputs, so lineage is a derived
graph with version branches (a "challenge" writes a successor beside the old
tip), fan-outs (one Trajectory decomposing into seven Phases), and one
terminal export (the Seed) that leaves the walls. Records also carry a status
(active/incubating/retired), a hand-set heat called **appetite** (0–3), and
occasional hand-drawn **relates** edges to other records.

## Three screens

### 1. The Shelf (landing)

A grid of record cards answering *"where is everything and what moved?"* in
five seconds. Each card: record number + title, status dot, appetite (design
this — a dial? flames? it is hand-set heat, 0–3, and most records may be
unset), state-head recency ("2 days ago"), a **SEEDED** badge where an export
exists, and a small tempo indication (how much this record moved lately).
Below or beside the grid, three panels that are **empty on day one and say
so**: a survey panel ("no survey on file — run /survey to fill this"), a
relates panel ("no edges drawn yet"), inbound-citation badges (zero). Design
the empty states as first-class, labeled, dignified — never gray sadness, and
never fake content.

A persistent header carries the tool name and a **generated-at stamp**
("generated 2026-08-30 09:12 · covers 4 records") — this tool renders a
snapshot, and honesty about its age is a core feature, not chrome.

### 2. The Travel Map (a record, opened)

The heart of the tool. Two horizontal rails:

- **Upper rail — the agents' track:** artifact nodes in lineage order, typed
  by glyph + color (ten types; design a legible glyph system that survives
  10-node-wide graphs). Edges follow each artifact's inputs. Must render
  three structures unmistakably: a **version branch** (a challenged Framing
  sits beside its predecessor; the old tip visibly superseded), a **fan-out**
  (one Trajectory → seven Phases), and the **terminal Seed** crossing a
  boundary line out of the record (with one thin line pointing back — its
  provenance stamp).
- **Lower rail — the Steward's track:** state snapshots 0000 → N as compact
  nodes in strict sequence, with **rungs** connecting each state to the
  artifacts it recorded. The two-rail separation is a law of the system
  (agents write artifacts; the Steward writes state) — the design should make
  the seam *visible and handsome*.
- **Between the rails, where dispatching happened but left no document:** a
  **hatched/textured band** labeled plainly (e.g. "steering — no artifact").
  This gap is disclosed deliberately; design it as honest texture, not as an
  error state.

### 3. The Reading Panel (an artifact, clicked)

A side panel or overlay: frontmatter as a legible header — type badge,
produced-by verb → agent chip ("challenge · The Advocate"), classifier pills
shown *as recorded* (`falsifiable`, `challenged: true`, `actionable`) — then
the rendered markdown body, and version-chain navigation (tip first,
predecessors walkable). A Findings artifact additionally shows a freshness
comparison ("stale_after 2026-09-15 — 18 days left" or "went stale 12 days
ago").

## Aesthetic direction

The theme is a great estate — a manor's library and grounds: warm paper,
ink, brass/patina accents, engraved-map sensibility — but **restrained and
information-first**: this must read like a beautiful instrument, not a themed
website. Dense but calm; typography does the luxury. Light and dark both
welcome; pick one to lead. No stock imagery, no decorative illustration that
competes with the graph.

## Sample data — realism required

Populate mockups with the real shape of the fixture record: **idea-0003 "the
Starvu agency site"** — 19 artifacts, 13 states, one challenge branch
(Framing → challenged Framing), research findings ×5, one Horizon superseded
by an explored Horizon, a Trajectory fanning into 7 Phases, one Seed exported.
A second card: **idea-0004 "estate-ui"**, 10 artifacts, 6 states, appetite 3,
SEEDED. A third: **idea-0001 "the-estate"**, appetite unset. A fourth:
**idea-0002**, nearly empty (one artifact) — the design must make a thin
record look respectable, not broken.

## Open design questions — take positions

1. **Appetite's visual form**, including unset-versus-zero (different
   meanings: unset = never rated; 0 = deliberately cold).
2. **The map's axis:** lineage top-down, or **left-to-right by state
   sequence** so the x-axis is session history and drift becomes visible?
   Argue your choice.
3. **Landing gesture:** shelf first, or last-touched record with the map
   already open?
4. **The seam band:** could clicking it expand the adjacent state's narration
   (the nearest a read-only tool gets to showing steering)? Sketch it.

## Hard rules

- **Never fake anything.** No invented metrics, no placeholder testimonials
  of activity, no "live" indicators — this tool's whole identity is that
  empty states are labeled and honest.
- Every label uses the domain's own vocabulary above (record, artifact,
  state, verb, agent, appetite, relates, Seed) — no renaming.
- The eventual build is one self-contained HTML file (possibly served
  locally): design within that gravity — system/web-safe fonts or one
  embeddable face, SVG-friendly graphics, no heavy imagery.
- Read-only. No edit affordances, no "new idea" button, no chat pane —
  those belong to a future product and must not appear as stubs here.
