---
id: idea-0004/artifacts/0003-horizon.md
type: Horizon
shape: prose
lenses: []
produced-by: envision
inputs: [ideas/0004-estate-ui/artifacts/0002-framing.md]
date: 2026-08-28
classifiers:
  challenged: false
  horizon: falsifiable
potential-next-steps: [challenge, chart]
summary: "The viewer, working, is one self-contained HTML file in the repo that T opens with one command and that renders the estate as travel instead of storage: a portfolio shelf that answers 'where is everything and what moved' in five seconds, and per-record maps that lay the artifact lineage graph against the Steward's state track with the steering gap drawn as a visible labeled seam. The architectural call left open by the Framing is made here: build-time-generated, not runtime-parsed — file:// blocks fetch in every mainstream browser, so runtime parsing forces a local server, whereas generation makes the viewer a member of a category the estate already owns (derived data, like SURVEY.md, with a covers: staleness stamp), and the regenerate step collapses into the open command itself. Feature inventory tiered honestly: everything on the map is drawable from frontmatter that exists today; the cheap unlocks are named (run survey once, run relate once, place three binaries); every refusal carries its wall (third writer, steering surface, unapproved schema). Falsifiable four ways, including one this Horizon adds: if the staleness banner is what T sees on most opens, the build-time call was the wrong half of the deferred decision."
---

# The estate, visible

I am The Architect. The type is named for a six-month vision; a viewer for one
operator over four records earns its verdict faster than that, and I will not
inflate it to fill the name. What follows is the viewer **in steady use, weeks
from now** — every scene drawn against data that exists in this repository
today, because the Framing's rule holds: idea-0003 is the acceptance fixture,
and no mock data exists or is permitted.

---

## Scene 1 — Landing: the portfolio shelf

T types one command. It regenerates the view from the repo (sub-second at this
scale) and opens the browser. The estate is on screen.

Four cards on a flat shelf — flat because the portfolio *is* flat, and the
viewer does not invent a tier the schema does not have:

- **idea-0001 — The Estate.** Active. Three artifacts, ten states. The card
  carries a small badge the file tree could never compute: **inbound
  citations** — other records' artifacts and this viewer's own Framing point
  into its `0003-framing.md`. Its own artifact count is low while arrows come
  in; the shelf shows the raw ingredients of `connective` without claiming the
  status (SCORING is explicit: proposed by survey, declared by T, never
  inferred — the card shows the numbers and says nothing more).
- **idea-0002 — Operator-supplied material.** Quiet. Recency shown plainly.
- **idea-0003 — The Starvu agency site.** Nineteen artifacts, thirteen states,
  and a glyph no other card has: **exported** — a Seed left the record, and the
  card says from which state (`@ state/0011`). One glance answers what
  previously took a directory listing and an open: this record ran the whole
  arc.
- **idea-0004 — this record.** Hot today; the recency dot is fresh because the
  state dates say so.

Across all four cards, one strip of honesty the tree cannot render as a single
fact: **every `appetite:` is still the placeholder `1`.** The shelf shows it as
a row of identical unset dials with the template's own comment surfaced —
"hand-set heat is T's." The viewer does not nag; it makes the unset-ness
*visible as a pattern*, which is exactly the kind of estate-wide noticing
SCORING says the operator cannot do alone.

Where the survey panel would sit, the shelf tells the truth: **`SURVEY.md` has
never been generated** (`covers:` is empty), so there is no shortlist, no
convergent notices, no computed rank — and the panel says so in those words,
with the canonical remedy named (`survey`, The Cartographer). When the survey
exists and its `covers:` matches the live state-heads, the panel fills:
shortlist ranked by reachability × appetite, convergent notices above the
ranking, staleness-at-threshold call-outs beside the cards they concern. When
`covers:` lags the heads, the panel renders **stale, and says which records
moved past it** — the SURVEY convention, drawn instead of grepped.

`relates` edges between cards: the affordance exists, and today it draws
**zero edges**, because `relate` has never run. The shelf says that too, in the
glossary's words. An empty layer honestly labeled is a map; an empty layer
hidden is a lie of smoothness.

**What T notices in the first five seconds that the tree never shows:** which
record moved last and how fast (the state dates cluster — idea-0003's entire
nineteen-artifact run happened on one day, and the shelf's tempo strip makes
that single-day sprint visible as a spike); that one record has exported and
three have not; that appetite has never been set anywhere; that the survey
layer of the estate has never existed. Four facts, zero file-opens.

---

## Scene 2 — Entering a record: the travel map

T clicks the Starvu card. The record opens as **two parallel tracks — the
writer seam, drawn**:

**The state track** runs down the left rail: 0000 through 0012, the Steward's
narration, each node dated, each carrying its `session-verb`. This is the only
column the Steward writes, and the map says so in its legend.

**The artifact field** fills the canvas: nineteen nodes, each typed by glyph
and color from the ten-type vocabulary in the glossary (Spark, Framing,
Horizon, Trajectory, Phase, Findings, Appraisal, Decision, Brief, Seed —
domain-neutral marks, nothing that assumes the record holds a website rather
than a conjecture). Edges are `inputs:` chains and nothing else — the lineage
is *derived, never hand-drawn*, exactly as `system/TYPES.md` orders, and the
viewer draws only what the frontmatter states.

On this fixture the map's three signature structures appear without any
special-casing, because they are real:

- **The challenge branch, visibly a branch.** `0008-framing.md` and
  `0009-framing-challenged.md` share a slug and a type; 0009 names 0008 in
  `inputs:`. The map stacks them as a version chain — 0009 bright and marked
  **tip**, 0008 dimmed and marked **superseded**, the `challenged: true`
  classifier worn as a scar-glyph on the tip. The same rendering rule catches
  0010 → 0011 (`horizon-explored`) with no extra code: version chains are
  same-type `inputs:` succession, full stop.
- **The fan-out, visibly a fan-out.** `0012-trajectory.md` opens into seven
  Phase nodes, 0013 through 0019, ordered left to right by their phase number.
  One node, seven edges, the Decomposer family made visible.
- **The terminal node, across the boundary.** The Seed does not live in the
  record — it lives in `exports/`, and the map draws the record's right border
  as a wall with the Seed standing **outside it**, nine inbound edges gathering
  through the wall (its `inputs:` cite 0011, 0012, and all seven Phases — the
  widest ingather on the map). And one line runs *backward* through the wall:
  the provenance stamp, `origin: idea-0003 @ state/0011`, drawn as an edge from
  the Seed to state 0011 on the left rail — rendered distinctly, because the
  type system says it is the **only thing that ever travels backward**, and a
  map that can show "only one line points home" is teaching the estate's law
  by picture.

Where a state's frontmatter carries `inputs:`/`outputs:`, thin rungs tie the
rail to the field: this session consumed that artifact, produced this one. The
two tracks and their rungs are the writer seam as a diagram — agents' work on
the right, the Steward's narration on the left, nothing written by both.

**And between every pair of states, the seam the Framing ordered drawn:** a
hatched band across the rail. Hover it and it says, in full: *"Between these
states, dispatches were derived, packets were assembled, and steering
happened. None of it produced an artifact. This map shows every stop and none
of the steering — the gap is named in idea-0001, not closed here."* The band
is identical everywhere because the record genuinely cannot distinguish one
gap's contents from another's — uniform hatching **is** the honest rendering.
The map never smooths it, and never pretends the arrows between artifacts
explain *why* the travel went where it went.

Assets, when the record has them: a strip along the bottom listing
`assets/MANIFEST.md` rows with their status — on this fixture, three entries,
all **pending**, binaries not on disk. The strip shows the catalogue and the
pending flags as recorded. No thumbnails until files exist; the manifest's
honesty is the render.

---

## Scene 3 — Reading an artifact

T clicks node 0009. The right panel opens — no page navigation, the map stays
where it is:

- **The header is the frontmatter made legible:** type chip (*Framing*),
  produced-by chip (*challenge* — and beside it, from the registry, the agent
  the verb binds to: *The Advocate*), date, lenses (none), classifiers worn
  plainly (`challenged: true`), `inputs:` as a working link back to 0008,
  `potential-next-steps` as inert labels — **labels, not buttons**; the viewer
  renders route hints and will never grow a "run this" affordance on them.
- **The summary as the standfirst,** because that is what the field is for.
- **The body rendered** as formatted markdown — the Advocate's own voice, not
  a précis. For a `Findings` artifact the header additionally renders the OKF
  furniture: the `sources:` table with credibility signals, and `stale_after:`
  compared against today's date, expired facts flagged. External knowledge
  rots on a timestamp; the viewer does the comparison so T doesn't.
- **The version chain, navigable tip-first:** a breadcrumb reading *Framing —
  v2 (tip) ← v1 (superseded)*. Landing on any superseded version shows the
  banner "not the current version — the tip is 0009," because handoffs and gap
  derivation always mean the tip, and the viewer teaches the same reflex.

---

## Scene 4 — Jumping, and what makes it clean

From deep in the Starvu record — panel open on a Phase, map scrolled to the
fan-out — T presses the one key that raises the shelf. Clicks idea-0001.
Its map opens **at its state-head**, tip states and tip artifacts already
in focus. Presses back: the Starvu record returns *exactly as left* — same
scroll, same open panel, same selected node.

"Cleanly" decomposes into three properties, and they are the acceptance test
of this scene:

1. **No jump loses your place.** Every view is restorable; back always means
   back.
2. **Every arrival lands at the head, not at a listing.** A record opens
   oriented — tip versions bright, head state marked — because orientation is
   the entire product.
3. **Every cross-record edge is traversable where it is drawn.** When a
   `relates` edge exists on the shelf or in a record's header, it is a link,
   labeled with the glossary's term. Today that layer is empty and says so;
   the cleanliness is built, the edges await The Cartographer.

And the vocabulary contract holds at every label: where T's word and the
canon's word differ, the canonical term renders, with T's word admitted only
as a search synonym — typing "sub-idea" into the finder returns the two
honest things (version branches; `relates`-neighbor records), each captioned
with what it actually is. Canon into UI, never UI into canon.

---

## The architectural call: build-time-generated, and why

The Framing left one decision explicitly to me: whether "in-repo static" means
**generated at build time** or **parsed at load time**. Decided: **generated.**

**One self-contained HTML file, in the repo, carrying an embedded JSON data
island; a dependency-light generator script, also in the repo, that walks
`ideas/`, `exports/`, and `SURVEY.md`, parses frontmatter, derives the graph,
and rewrites the data island.** Opening the viewer *is* running the generator
— one command that regenerates and opens, so the freshness step collapses
into the open action instead of standing beside it.

Four reasons, in order of force:

1. **Runtime parsing does not actually exist for this audience.** A static
   page opened over `file://` cannot fetch sibling files — every mainstream
   browser blocks it. Runtime parsing therefore *means* a local server, which
   the Framing already weighed as "a moving part for an audience of one." The
   deferred choice was never static-vs-static; it was
   generate-vs-run-a-server, and self-containment plus one operator on one
   machine decides it.
2. **Generation puts the viewer in a category the estate already owns.**
   `SURVEY.md` is derived data with a `covers:` stamp naming the exact
   state-heads it was computed from. The viewer is the same kind of thing —
   a derived read of the records, staleness detectable by the same
   convention — and `docs/idea-pipeline.html` is the standing precedent for
   an approved in-repo HTML visual. Nothing new under the law.
3. **The graph derivation belongs in one place, testable.** Version-chain
   tips, fan-outs, cross-boundary Seed edges, state-to-artifact rungs — these
   are rules over frontmatter, and a generator can carry them as plain
   readable code with the fixture as its test: *point it at idea-0003; if the
   branch, the fan-out, and the backward provenance line come out right, it
   renders the estate right.*
4. **A view, not a database — literally.** The generated file holds no truth;
   delete it and nothing is lost; the repo remains the single source. A
   runtime parser tempts caching, indexing, a data layer. Generation keeps
   the temptation structurally absent.

**The cost, named:** a generated view can be stale. Mitigated three ways: the
open command regenerates first; the file prints its generated-at time and its
`covers:` stamp at the top of the shelf, always visible; and the falsifier
below makes staleness-in-practice a named way for this call to be *wrong*,
not an annoyance to be endured.

The generator's constraint is law-shaped: **no external services, and no
dependency the repo cannot carry.** The frontmatter subset in actual use is
narrow enough to parse without a framework; if any library is used, it is
vendored into the repo. Stack choice and file placement are `chart`'s.

---

## Feature inventory, in honest tiers

### Real on day one — drawable from frontmatter that exists now

- Portfolio shelf: id, title, status, appetite (with unset-pattern strip),
  state-head, created, recency, artifact/state counts, exported badge with
  origin stamp, tempo strip from state dates, inbound-citation counts.
- Survey panel in its honest empty state; full rendering plus `covers:`
  staleness comparison the moment a survey exists.
- Per-record travel map: derived lineage from `inputs:`; ten-type glyph
  vocabulary; version chains with tip/superseded marking; fan-outs;
  cross-boundary Seed nodes with the single backward provenance edge; state
  rail with session-verbs and state↔artifact rungs; the uniform hatched
  steering seam with its full label; assets strip from `MANIFEST.md` statuses.
- Artifact panel: frontmatter header (verb chip resolved to its bound agent
  via the registry), summary standfirst, rendered body, tip-first chain
  navigation, OKF source tables with `stale_after:` comparison.
- Clean jumping: place-preserving back-stack, head-oriented arrival,
  glossary-labeled links; search over titles and summaries, with T's UI words
  as synonyms mapping to canonical terms.
- Reachability and staleness-at-threshold, *when computed by a survey*,
  rendered from it. (The viewer displays SCORING's outputs; it does not
  become a second implementation of the scorer. One computation, one owner.)

### Real once something cheap exists — the cheap thing named

- **Survey shortlist, convergent notices, computed ranks** → one `survey`
  run by The Cartographer, filling `SURVEY.md` and its `covers:`.
- **`relates` edges on shelf and record headers** → one `relate` session; the
  natural first edges are already named in the records (0004↔0001,
  0004↔0003-as-fixture).
- **Asset thumbnails** → T places the three Starvu binaries the manifest
  already catalogues as pending.
- **Full-text search across artifact bodies** → nothing but payload size; the
  generator already reads every body. Enabled when the embedded island's
  weight is measured and found acceptable.
- **Appetite heat rendered as real signal** → T sets `appetite:` on any
  record, the honest first scoping act the state named — for this record
  most of all.

### Not yet / refused — with the wall each stands behind

- **Any write path** — appetite dial, status toggle, relates drawing, notes,
  pins, annotations. *Wall: the writer seam. A UI that writes anything is a
  third writer `system/LAW.md` does not have; it re-enters only as an
  explicit proposal to amend the law, in those words.*
- **Any dispatch surface** — "run `challenge` on this," even as a
  copy-a-prompt convenience. *Wall: it originates exactly the steering acts
  idea-0001 names unaddressable; building it pours concrete over that
  record's open ground. `potential-next-steps` render as labels, never
  buttons.*
- **A Project tier or nested child records** — folders of projects, sub-idea
  trees. *Wall: schema that does not exist; a structural change that goes to
  T with the reading list. The map renders the two honest referents of T's
  words instead.*
- **Rendering the steering layer's contents** — packet reconstruction,
  inferred "why it went there" narration. *Wall: the data does not exist, and
  synthesizing it would be the map lying about its own completeness. Labels
  only, until idea-0001 resolves.*
- **A local server, file-watcher, auto-refresh daemon, or any hosted
  anything** — *Wall: self-containment plus the audience of one; and for the
  server specifically, the build-time call above — this one is design, not
  law, and is the most reversible refusal on the list.*
- **A second implementation of portfolio scoring inside the viewer** —
  *Wall: one computation, one owner; SCORING belongs to `survey`. The viewer
  renders the survey's numbers or renders their absence.*

---

## Falsifiers

This Horizon names four ways to be wrong. The first two are inherited from
the Framing and sharpened to observables; the third is created by this
document's own architectural call; the fourth guards the law that binds the
rendering.

1. **The unopened viewer.** After it ships, if **five consecutive
   record-sessions** pass in which T orients by opening files rather than by
   opening the viewer — or if T cannot answer "what moved last week?" faster
   with it than without it — the problem was never legibility, the read-only
   scope call was the fatal one (Framing assumption 2), and the record should
   stop, not iterate.
2. **The clock.** If **2026-09-25** arrives with the estate's governing
   falsifier fired and this record has meanwhile accumulated artifacts and
   sessions, this Horizon fed the named failure mode while describing it.
   Only T can read this one, and the mitigation claimed in the Framing —
   comprehension aims at use — does not survive that reading.
3. **The staleness banner wins.** If, after the first month of steady use,
   the stale-`covers:` banner is what T sees on **most opens** — because the
   regenerate-then-open command didn't become the habit, or mid-session
   states outrun it — then the build-time call was the wrong half of the
   deferred decision, and the local-server path (the most reversible refusal
   above) should be taken up. This falsifier is cheap to read: the viewer
   itself displays the evidence.
4. **The conjecture renders worse.** The first time a non-product record — a
   mathematical question, a narrative premise — enters the estate, its map
   must be as legible as Starvu's. If the rendering turns out to lean on
   product vocabulary or product-shaped assumptions anywhere, domain-
   generality was violated in the one place this record controls, and the
   glyph vocabulary is the first suspect.

A fifth, held rather than claimed: the Framing's "steering gap dominates the
view" — every session ending in *why did it go there?* That one cannot fire
until the viewer exists to be asked; it is listed so `challenge` can find it
already named.

`classifiers.horizon: falsifiable` — set because all of the above are
observations a person can make on a date, not sentiments.

---

## What this hands to `chart`

The order of building matters more than it looks, and in one specific place:
**the generator's graph derivation before any pixel.** Tip-finding, branch
stacking, fan-out detection, cross-boundary edges, the backward provenance
line — that derivation, run against idea-0003 and printed as plain text, is a
shippable and testable artifact before a single layout decision exists, and
every rendering scene above is downstream of its correctness. If the chart
sequences visuals first, it has sequenced the decoration before the drawing.
Second ordering note: the shelf before the record map — the shelf is smaller,
exercises the same generator, and is the surface falsifier 1 measures.
Third: `appetite:` on this record is still the placeholder, and the Trajectory
should not outrun the heat T has never set.
