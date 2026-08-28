---
id: exports/0004-estate-ui-seed.md
type: Seed
produced-by: seed
inputs:
  - ideas/0004-estate-ui/artifacts/0003-horizon.md
  - ideas/0004-estate-ui/artifacts/0004-trajectory.md
  - ideas/0004-estate-ui/artifacts/0005-phase-1-the-parser-and-the-proof.md
  - ideas/0004-estate-ui/artifacts/0006-phase-2-the-shelf-and-the-open-command.md
  - ideas/0004-estate-ui/artifacts/0007-phase-3-the-travel-map.md
  - ideas/0004-estate-ui/artifacts/0008-phase-4-the-reading-panel-and-the-clean-jump.md
  - ideas/0004-estate-ui/artifacts/0009-phase-5-the-watch.md
date: 2026-08-28
origin: "idea-0004 @ state/0003"
classifiers:
  horizon: falsifiable
  trajectory: actionable
  challenged: false
audience: "T — a working software engineer building this personally, likely handing sections to a coding agent. Sections 2, 3, 4 and 7 are written to be pasted into a fresh coding-agent context with no memory of this record. There is no other reader."
---

# Seed: The estate viewer

A read-only, build-time-generated, self-contained HTML viewer for this
repository: a portfolio shelf that answers "where is everything and what
moved" in five seconds, and per-record travel maps that draw each idea's
derived lineage against the state rail, with the steering gap rendered as a
visible, labeled seam.

**Provenance:** `origin: idea-0004 @ state/0003`. That line is the only thing
in this document that points backward. Everything else stands on its own.

---

## 0. How to read this

1. **The design in three rules** — derivation before pixels; frontmatter and
   only frontmatter; empty layers labeled, never hidden. Everything below
   falls out of these.
2. **The Horizon** — the viewer in steady use, and the five ways it would be
   wrong.
3. **The Trajectory** — five legs, fully funded at the appetite T has set,
   with the truncation ladder kept as the honest fallback.
4. **This Saturday** — the startable step. Zero dependencies.
5. **The refusals, each with its wall.**
6. **The routine calls** — stack and placement, stated as reversible
   assumptions.
7. **Acceptance criteria** — the fixture assertion list and the per-leg
   checks.
8. **Classification, on the tin** — including the one uncomfortable fact
   about this export's timing.

Sections 2, 3, 4 and 7 are written so they can be pasted into a coding agent
with no memory of this repository's history. Where they name repo files, the
files exist and are the acceptance fixture — no mock data exists or is
permitted.

---

## 1. The design in three rules

**Rule 1 — generator before pixels.** The product's spine is a graph
derivation over frontmatter: version-chain stacking and tip-finding, fan-out
detection, cross-boundary export edges, one backward provenance line,
state-to-artifact rungs, inbound-citation counts, tempo from state dates.
That derivation is built first, proven as **plain text** against a real
record, and every rendering decision is downstream of its correctness. If the
build sequences visuals first, it has sequenced the decoration before the
drawing.

**Rule 2 — frontmatter and only frontmatter.** The lineage this viewer draws
is *derived, never hand-drawn*. Edges come from `inputs:`/`outputs:` fields;
body-text mentions of other files are **not** edges, and counting them would
be hand-drawing lineage the repo's own rules say is derived. Consequence,
ruled and accepted: on today's data, the inbound-citation badge on
`idea-0001` honestly reads **zero**, because the only cross-record
frontmatter edges in the whole fixture set belong to the one exported Seed.
An unresolvable `inputs:` link renders as a visibly broken edge, labeled as
such — the viewer never repairs lineage.

**Rule 3 — empty layers labeled, never hidden.** Three layers are honestly
empty on day one and each is filled by a different future act, none of them
this build's work: the survey panel (empty until `ideas/SURVEY.md` is first
generated), the `relates` edges between records (empty until the first
`relate` session draws them), and the inbound-citation badges (zero until
cross-record `inputs:` edges exist). The viewer renders each empty state in
plain words with the remedy named. An empty layer honestly labeled is a map;
an empty layer hidden is a lie of smoothness.

One vocabulary contract binds every label: `docs/GLOSSARY.md`. Where the
operator's word and the canonical term differ, the canonical term renders,
and the operator's word is admitted only as a search synonym. Canon into UI,
never UI into canon.

---

## 2. Horizon — the viewer in steady use

One command regenerates the view from the repo (sub-second at this scale) and
opens the browser. Everything below renders from frontmatter that exists in
the repository today.

### 2.1 The shelf

The landing view: one card per record in `ideas/`, on a **flat** shelf — flat
because the portfolio is flat, and the viewer does not invent a tier the
schema does not have. Each card carries: id, title, status, state-head
recency, artifact and state counts, a tempo strip computed from state dates
(a record whose nineteen artifacts landed in a single day must show as a
spike), an appetite dial, an inbound-citation count (from `inputs:`
frontmatter only), and — where a Seed has left the record — an **exported**
glyph naming the state it left from.

Above the cards, always visible: the **generated-at time and `covers:`
stamp** — which state-heads this view was computed from. When the live heads
have moved past the stamp, the banner says so. This stamp is the evidence
surface for falsifier 3 below.

The survey panel sits beside the shelf. While `ideas/SURVEY.md` has never
been generated it says exactly that, in the glossary's words, and names the
remedy. The rendering logic for the *filled* state — ranked shortlist,
convergent notices, staleness-at-threshold call-outs, `covers:`-vs-heads
comparison — is written now, so one survey run lights the panel with no code
change. The viewer **displays** the survey's numbers; it never recomputes
them. One computation, one owner.

What a five-second look must answer with zero file-opens: what moved last and
how fast; which records have exported; where appetite is and is not set;
whether the survey layer exists and whether it is fresh.

### 2.2 The travel map

Clicking a card opens the record as **two parallel tracks**:

- **The state rail**, left edge: every state node dated, carrying its
  `session-verb`, the head marked. The legend says this is the only column
  the Steward writes.
- **The artifact field**, the canvas: every artifact a node, typed by glyph
  and color from the **ten-type vocabulary taken verbatim from the type
  table** — Spark, Framing, Horizon, Trajectory, Phase, Findings, Appraisal,
  Decision, Brief, Seed — and from nowhere else, because the marks must serve
  a mathematical conjecture as well as a product. Edges are `inputs:` chains
  only.

Three signature structures render from the derivation with **no
special-casing**, because they are general rules:

1. **Version chains, stacked.** Same type + same-type `inputs:` predecessor =
   a chain; the tip is the artifact no same-type successor names. The tip
   renders bright and marked *tip*; predecessors dim and marked *superseded*;
   a `challenged: true` classifier is worn as a scar-glyph on the tip.
2. **Fan-outs, fanned.** Multiple artifacts naming one parent in `inputs:`
   spread from it in their stated order.
3. **The boundary, drawn as a wall.** An export in `exports/` does not live
   in the record: the record's right border is a wall, the Seed stands
   outside it, its inbound edges gather through the wall — and **one line
   runs backward** through it, the provenance stamp parsed from `origin:`,
   drawn unlike every other edge, because it is the only thing in the whole
   system that ever travels home.

Where a state's frontmatter carries `inputs:`/`outputs:`, thin rungs tie rail
to field: consumed on one side, produced on the other.

**And between every pair of states, the seam.** A uniform hatched band across
the rail; hovering it yields the full label: *"Between these states,
dispatches were derived, packets were assembled, and steering happened. None
of it produced an artifact. This map shows every stop and none of the
steering — the gap is named elsewhere in the estate, not closed here."* The
band is identical everywhere because the record genuinely cannot distinguish
one gap's contents from another's; uniform hatching **is** the honest
rendering. The map never smooths it and never pretends the arrows explain
*why* the travel went where it went.

An assets strip along the bottom lists each record's `assets/MANIFEST.md`
rows with their recorded statuses. No thumbnails until binaries exist; the
manifest's honesty is the render.

### 2.3 The reading panel

Clicking a node opens a right panel; the map stays put. The header is the
frontmatter made legible: type chip; produced-by chip with the verb resolved
to its bound agent through `system/registry.md`; date; lenses; classifiers
worn plainly; `inputs:` as working links; `potential-next-steps` as **inert
labels — labels, never buttons**. The summary renders as the standfirst; the
body as formatted markdown in the author's own voice. For a Findings
artifact, the panel additionally renders the sources table with credibility
signals and compares `stale_after:` against today's date, flagging expired
facts. A version-chain breadcrumb navigates tip-first; landing on a
superseded version shows a banner naming the tip.

### 2.4 The clean jump

"Cleanly" decomposes into three testable properties:

1. **No jump loses your place.** A place-preserving back-stack: returning to
   a record finds the same scroll, same open panel, same selected node.
2. **Every arrival lands at the head.** A record opens oriented — head state
   marked, tip versions bright — never at a listing.
3. **Every drawn cross-record edge is traversable.** When a `relates` edge
   exists it is a link, labeled with the glossary's term. Today the layer is
   empty and says so; the affordance is built, the edges awaited.

Search covers titles and summaries (full-text over bodies deferred until the
embedded payload's weight is measured), with the operator's own words as
synonyms: searching "sub-idea" returns the two real things that term resolves
to — version branches and `relates`-neighbor records — each captioned with
what it actually is.

### 2.5 What would make this wrong

Five falsifiers. Each is an observation a person can make on a date, not a
sentiment.

1. **The unopened viewer.** After it ships, if five consecutive
   record-sessions pass in which T orients by opening files rather than by
   opening the viewer — or if "what moved last week?" is answered faster
   without it — the problem was never legibility, the read-only scope call
   was the fatal one, and the record **stops. Not a redesign, not a feature:
   stop.**
2. **The clock.** If **2026-09-25** arrives with the estate's own governing
   falsifier fired and this project has meanwhile kept accumulating work,
   this viewer fed the failure mode it was describing. Only T can read this
   one.
3. **The staleness banner wins.** If, after the first month of steady use,
   the stale-`covers:` banner is what most opens show, the build-time
   generation call was the wrong half of the decision, and the pre-named
   reversal — a local server — should be taken up. The viewer itself displays
   the evidence, so this one is cheap to read.
4. **The conjecture renders worse.** The first non-product record to enter
   the estate — a mathematical question, a narrative premise — must map as
   legibly as the densest product record. If the rendering leans on product
   vocabulary anywhere, domain-generality was violated, and the glyph
   vocabulary is the first suspect.
5. **The seam reads as noise** (held, not yet claimable). If sessions with
   the map keep ending in "but *why* did it go there?", the honest-half map
   is not honest enough to be useful. The pressure travels to the estate's
   own record about its unaddressable steering layer — it is **never** fixed
   inside this viewer, because the data it would take does not exist.

---

## 3. Trajectory — five legs, fully funded

**Appetite is set: 3, hand-set by T on 2026-08-28.** The route was originally
drawn against an unset placeholder and deliberately built to truncate cleanly
under low heat. At appetite 3 **the full five-leg route is funded — the
truncation ladder below remains as the honest fallback, not the
expectation.** For the record: at low appetite the route is legs 1–2 plus the
watch; at zero, leg 1 alone is a keepable artifact. The designated cut point,
if one is ever needed, is leg 4.

The route is shaped against one named failure mode: a long polish tail before
first use — a viewer accumulating build sessions while never being opened,
inside the estate's own check-date clock. So the governing rule: **"T opens
it on real data" happens at the end of leg 2, not the end of the route**, and
from leg 3 onward every build session is also a use session. The route
degrades from the tail: every leg ends with something openable, so stopping
after any leg leaves a working thing, not a construction site.

### Leg 1 — The parser and the proof (one Saturday; waits on nothing)

A zero-dependency Node script, `docs/estate-view/generate.mjs`, walks
`ideas/` (every `idea.md`, `artifacts/*.md`, `state/*.md`, and
`assets/MANIFEST.md` where present), `exports/`, and `ideas/SURVEY.md`;
hand-parses the narrow frontmatter subset actually in use; and derives the
full graph — chains, tips, fan-outs, cross-boundary edges, the backward
provenance line, rungs, shelf facts, staleness. Output: **plain text** via a
`--text` flag, checked against the written fixture assertion list in §7.1. No
HTML exists at the end of this leg, and the leg is still shippable: the
derivation is the spine, testable in isolation. The text output is a
verification mode, committed nowhere.

If the parser fights back past a day, that is information: the "narrow enough
to hand-parse" assumption is wrong, and the vendoring path
(`docs/estate-view/vendor/`) exists for exactly that.

**Refuses:** any HTML, any layout thought, any caching or index file. The
temptation to "just start the shelf while I'm in here" is the polish tail
arriving early. The leg ends at green assertions.

### Leg 2 — The shelf and the open command (one weekend)

**Trigger:** leg 1's assertions green. The generator gains an HTML emitter:
one self-contained `docs/estate-view/index.html` with an embedded JSON data
island, no external fetches, openable over `file://`, committed to the repo
as derived data — deletable without loss. It renders the shelf (§2.1), the
honest empty layers with their filled-state logic already written, and the
generated-at / `covers:` stamp. Plus the open command:
`docs/estate-view/view.ps1` (with a `view.cmd` shim) — regenerate, then open,
one invocation, so freshness collapses into opening.

**This leg ends with T opening the viewer on real data. Falsifier 1's clock
starts here.** A cheap early reading inside the leg: on first real use, is
the shelf faster than the file tree at its own four questions? If plainly
not, **pause before leg 3** — the map is the expensive leg, and the
read-only-is-enough assumption should be interrogated at shelf price, not map
price. The re-route on a failed reading is a return to the operator with the
evidence, not a feature added to compensate.

The card layout is deliberately plain: this is the surface that gets
measured, not the surface that gets admired. A shelf that wants a second
weekend is a shelf being polished for strangers who do not exist.

### Leg 3 — The travel map (two weekends)

**Trigger:** leg 2 shipped and opened at least once. The per-record view of
§2.2, rendered entirely from derivations leg 1 already proved. Layout is
hand-written SVG or positioned HTML in the emitter; if a layout library ever
earns its way in, it is vendored — no dependency the repo cannot carry.

Cost split honestly: **weekend one ends with a correct ugly map** — rail,
field, edges, chains, fan-out, wall, all topologically right, and shippable
as-is. Weekend two adds glyphs, seam bands, rungs, assets strip, legibility.
If weekend two starts stretching, ship the ugly-correct map and stop:
correctness is the product, prettiness is the polish tail wearing a roadmap.

The leg closes by **taking** the first reading of falsifier 5 — does the
hatched seam read as honesty or noise on the densest real record? — rather
than assuming it. A visual quieting of the band is permitted; an
informational filling of it is not. Falsifier 4 is armed here, in the glyph
choice: glyphs come from the type table and nothing else.

Done looks like: the densest record shows its challenge branch, its
seven-way fan-out, and its wall at a glance; the thinnest, near-empty record
renders from the same code with not one record-specific line.

### Leg 4 — The reading panel and the clean jump (one weekend)

**Trigger:** leg 3's map rendering the fixture correctly (ugly-correct is
sufficient; this leg does not wait on polish). Delivers §2.3 and §2.4 in
full. Markdown rendering is hand-rolled for the subset in use or vendored —
never fetched. This completes the day-one tier and is deliberately the tail:
if anything ever cuts the route, it cuts here, and shelf-plus-map still
stands — an artifact body then costs one file-open, which is degradation, not
failure.

The vocabulary contract bites hardest in this leg: walk every rendered label
and confirm it maps through `docs/GLOSSARY.md`, with the operator's words
appearing only as search synonyms. If building the panel generates pressure
to push a UI term *back* into the canon, that is the named sign the UI is
redesigning the estate rather than viewing it — the term stays out and the
pressure is reported.

### Leg 5 — The watch (a month of ordinary use; ~zero build)

Not a build. A month of steady, *real* use — opening the viewer to admire it
is not a session and does not count — read against the falsifiers where they
sit:

- **Falsifier 1:** five consecutive record-sessions orienting by files →
  **the record stops. It does not iterate.**
- **Falsifier 3:** the staleness banner on most opens → take the pre-named
  **local-server reversal** — explicitly a design choice, not law, and the
  most reversible refusal on the list — **proposed to T** as a small
  follow-on, never smuggled in.
- **Falsifier 5**, accumulated: seam as noise → the pressure travels to the
  estate's steering-layer record through a `relates` edge, once drawn. This
  project labels the gap; it never closes it.
- **Falsifier 4:** armed, dormant until the first non-product record arrives.
- **Falsifier 2:** the 2026-09-25 clock sits inside this leg's window and
  spans every leg before it. T's alone to read.

The cheap unlocks land during this leg as **data acts, not code**, each
lighting a layer already built with no code change: one survey run fills the
panel; one `relate` session draws the first edges; placing the pending asset
binaries lights the assets strip; setting `appetite:` on further records
turns the unset-pattern display into signal.

Done looks like one paragraph T can write: opened or unopened; fresh or
stale; seam honest or noisy; clock survived or fired. From that paragraph the
next move chooses itself. Any of those is a clean ending; only an unread
month is a failure of this leg.

### Stations that span the route

- **The clock (falsifier 2).** 2026-09-25 is roughly four weekends from this
  export and crosses the entire route. Standing rule at **every leg
  boundary**: if the estate's governing falsifier has fired and this project
  is still accumulating work, the route halts wherever it is. Only T reads
  this station.
- **Domain-generality (falsifier 4).** Cannot fire until a non-product record
  arrives; leg 3's glyph vocabulary is where it would bite, so the map is
  built from the domain-neutral type table and nothing else, and the station
  stays armed.

---

## 4. First actionable step — this Saturday

Waits on nothing: no layout decision, no library, no other record, no reply
from anyone.

Write `docs/estate-view/generate.mjs` — Node, zero npm dependencies,
hand-rolled parser for the frontmatter subset in use — and point it at
`ideas/0003-starvu-agency-site`, the acceptance fixture. Before writing code,
write down the fixture assertion list (§7.1). The Saturday is done when the
script runs from a clean checkout in under a second, prints the derived graph
as plain text, and **every assertion passes** — the challenge branch stacked
with the right tip, the seven-way fan-out in order, the exported Seed's nine
inbound edges through the wall, and the one line pointing home.

Where this step can fail honestly, two tiers: a **missing link** — an
artifact whose `inputs:` fails to resolve — renders as a gap, drawn as a gap;
the viewer never repairs lineage. A **systemic failure** — the graph
underivable at all — stops the work and goes back to the operator with the
specific broken links named, because a missing link cannot be reconstructed
and pretending otherwise would make the whole viewer a lie.

---

## 5. Refusals

Each refusal carries its wall, because a refusal without its argument is
overturned by the first person who wants the thing back.

**Any write path** — no appetite dial, no status toggle, no relates-drawing,
no notes, pins, or annotations. *Wall: the estate's one-writer rule. Agents
write artifacts; the Steward writes state and record frontmatter. A UI that
writes anything is a third writer the law does not have. This re-enters only
as an explicit proposal to amend the law, in those words.*

**Any dispatch surface** — no "run this verb on this artifact" button, not
even as a copy-a-prompt convenience. *Wall: the estate's steering layer —
dispatches, packets, route derivations — produces no artifacts and is named
unaddressable in the estate's own open record on the subject. A surface that
originates steering acts pours concrete over that open ground.
`potential-next-steps` render as labels, never buttons.*

**A Project tier or nested child records** — no folders-of-projects, no
sub-idea trees. *Wall: schema that does not exist. The portfolio is flat and
a child record is not a thing; closing either gap is a structural change that
goes to the operator with the reading list. The viewer instead renders the
two honest referents of those words — version branches and related records —
labeled as what they are.*

**Rendering or synthesizing steering content** — no packet reconstruction,
no inferred "why it went there" narration. *Wall: the data does not exist,
and synthesizing it would be the map lying about its own completeness. The
seam stays a labeled gap.*

**A local server, file-watcher, auto-refresh daemon, or any hosted
anything.** *Wall: self-containment plus an audience of one. Note carefully:
the server refusal is **design, not law**, and it is the designated reversal
path — if falsifier 3 fires, this is the refusal that gets reversed, by
proposal, on evidence the viewer itself displays.*

**A second implementation of portfolio scoring inside the viewer.** *Wall:
one computation, one owner. Scoring belongs to the survey; the viewer renders
the survey's numbers or renders their absence.*

**Counting body-text mentions as lineage edges.** *Wall: lineage is derived
from `inputs:` frontmatter; anything else is hand-drawing the graph. The
badge that consequently reads zero reads zero.*

---

## 6. Routine calls, stated as assumptions

All made without ceremony; none would make the work useless if reversed; all
reversible in an afternoon.

- **Home:** `docs/estate-view/` — beside the repo's standing precedent for an
  approved in-repo HTML visual (`docs/idea-pipeline.html`).
- **Generator:** `docs/estate-view/generate.mjs`. **Output:**
  `docs/estate-view/index.html`, committed like `ideas/SURVEY.md` — derived
  data lives in the repo, stays deletable without loss, and the repo remains
  the single source of truth.
- **Runtime:** Node.js, zero npm dependencies; anything ever vendored goes
  under `docs/estate-view/vendor/`. If Node is not on the machine, any
  single-file script runtime substitutes; the design does not care.
- **Open command:** `docs/estate-view/view.ps1` with a `view.cmd` shim —
  regenerate, then open, as one act.
- **Why generated rather than runtime-parsed** (the one architectural call,
  already made, recorded so a fresh context does not reopen it): a static
  page over `file://` cannot fetch sibling files in any mainstream browser,
  so runtime parsing *means* a local server — refused above, reversibly.
  Generation puts the viewer in a category the repo already owns (derived
  data with a `covers:` stamp), keeps the graph derivation in one testable
  place, and keeps the file a view, not a database: delete it and nothing is
  lost.

---

## 7. Acceptance criteria

### 7.1 The fixture assertion list (leg 1's checkpoint — write it before the code)

Run against the real repository; no mock data exists or is permitted.

- [ ] `ideas/0003-starvu-agency-site` yields **19 artifacts and 13 states**.
- [ ] `artifacts/0008-framing.md` and `artifacts/0009-framing-challenged.md`
      stack as one version chain — same type, `inputs:` succession — with
      **0009 the tip**, carrying `challenged: true`; 0008 marked superseded.
- [ ] The **same rule, with no extra code**, stacks `0010-horizon.md` under
      `0011-horizon-explored.md`.
- [ ] `0012-trajectory.md` fans out to **exactly seven** Phase artifacts
      (0013–0019), ordered by phase number.
- [ ] `exports/0003-starvu-agency-site-seed.md` stands **outside the record
      boundary** with **nine inbound edges** (its `inputs:`) reaching through
      it, and **one backward line** parsed from its `origin:` stamp to
      `state/0011` — the only backward edge on the map.
- [ ] State `0006` of that record shows four input rungs and one output rung.
- [ ] `ideas/0001-the-estate` yields 3 artifacts and 10 states; its
      inbound-citation count is **zero** (from `inputs:` frontmatter only).
- [ ] `ideas/0002` parses without error and renders as the quiet thin record
      it is — a thin record is also a fixture.
- [ ] `ideas/SURVEY.md` reads as never-generated.
- [ ] The script runs from a clean checkout in under one second.

### 7.2 At the end of leg 2

- [ ] One command opens the browser on a freshly regenerated
      `index.html`; the file is self-contained and works over `file://`.
- [ ] The four five-second answers arrive with zero file-opens: what moved
      last and how fast (the one-day sprint shows as a spike); which record
      exported and from which state; appetite set on this record and unset
      elsewhere; survey never run — said in those words, with the remedy
      named.
- [ ] The generated-at / `covers:` stamp is visible at the top of the shelf.
- [ ] **T has actually opened it on real data.** Falsifier 1's clock is
      running.

### 7.3 At the end of leg 3

- [ ] The fixture record's map shows the branch, the fan-out, and the wall at
      a glance; the thinnest record renders from the same code with no
      record-specific lines.
- [ ] Every glyph on the map comes from the ten-type table verbatim.
- [ ] The seam band appears between every pair of states, uniform, with its
      full hover label.
- [ ] The first reading of falsifier 5 has been **taken and written down**,
      not assumed.

### 7.4 At the end of leg 4

- [ ] The clean-jump scene passes literally: deep in the fixture record with
      a panel open, jump to another record, arrive at its head, jump back,
      find scroll, panel, and selection exactly as left.
- [ ] Every rendered label maps through `docs/GLOSSARY.md`; the operator's UI
      words appear only as search synonyms.
- [ ] `potential-next-steps` render as labels. There is no button.

### 7.5 At the end of the month (leg 5)

- [ ] The one-paragraph verdict exists: opened or unopened; fresh or stale;
      seam honest or noisy; clock survived or fired.
- [ ] If falsifier 1 fired: the project stopped. If falsifier 3 fired: the
      local-server reversal was proposed, not smuggled. If falsifier 5 fired:
      the pressure was routed out of this project, not fixed inside it.

---

## 8. Classification, on the tin

- **`horizon: falsifiable`** — five falsifiers in §2.5, each an observation a
  person can make on a date. One expires into a hard stop; one is the
  estate's own clock and only T can read it.
- **`trajectory: actionable`** — the route bottoms out in a step startable
  this Saturday with zero dependencies, and every leg after it names its
  trigger.
- **`challenged: false`** — and read this one plainly: **nothing on this
  record has faced a challenge pass.** The record went from first capture to
  Seed-shape in a single day, 2026-08-28, under the operator's fast-track.
  The falsifiers above are the authors' own honesty, not a survived attack.

**The named failure mode, on the tin.** This Seed is machinery *for* the
estate, exported roughly four weeks before the estate's own check date —
**2026-09-25**, by which the estate must show evidence of use outside itself
or its governing falsifier fires. A viewer aimed at comprehension is at least
aimed at making the estate usable rather than more elaborate, and its
acceptance fixture is a record that exists because the estate was used for
something real — but that is a mitigation, not an acquittal. It is exactly
why the first step is startable this Saturday and why "T opens it on real
data" lands at the end of leg 2: the viewer must earn use before the clock
reads.

`origin: idea-0004 @ state/0003`
