---
id: idea-0004/artifacts/0014-v1-v2-roadmap.md
type: Trajectory
shape: prose
lenses: []
produced-by: chart
inputs: [ideas/0004-estate-ui/artifacts/0010-horizon-explored.md, ideas/0004-estate-ui/artifacts/0011-ui-v1-phases.md, ideas/0004-estate-ui/artifacts/0004-trajectory.md]
date: 2026-08-28
classifiers:
  challenged: false
  trajectory: actionable
potential-next-steps: [phase, decide, challenge]
summary: "The two-version roadmap charted at T's instruction from the two-horizon Horizon: v1 finishes the site for one operator on local data — the estate stays files-on-disk as source of truth, the site its published derivation — ordered by fuse length with the Cloudflare Access gate first because the estate is public today and the gate waits only on the owed decide, then the record-keeping catch-up (two Chancellor decisions, the 0004↔0001 relate, a first challenge), full-content reading in the panel and llms-full.txt, one-command regenerate-build-deploy so the estate self-publishes, a bounded polish pass, and the sealed Seed's Phase 5 watch folded in rather than abandoned; v2 is the platform charted from 0010's far horizon — a Hono Worker API beside the same static assets, a D1 schema mirroring the existing types with insert-only tables so immutability is compiled rather than obeyed, the generator repurposed as importer and derive.ts moved server-side untouched, the auth ladder climbing from v1's Access gate to real multi-user auth with per-estate visibility, the loader swapped to the API with components untouched, verb dispatches recorded as rows so the steering layer becomes addressable by construction, the chat-as-Steward with F7 armed, and Durable Objects only when something real demands them. V1 refuses every stub the seam law forbids (the Access gate passes because it is zero code and right for v1 alone); v2 waits on a decided and used v1, which is F6's reading. First actionable step: next session, dispatch the two owed decides — the exposure decision unblocks the gate the same day."
---

# The road in two versions

I am The Surveyor. This is my third pass over this record and the first from
a live site: Estate View runs at https://idea-estate.com, public,
AI-ingestable, serving the real records off a real snapshot stamp. My sealed
Trajectory (`0004-trajectory.md`) charted five legs to a local viewer; the
build overtook legs 1–4 in a fast-track my Phase survey (`0011-ui-v1-phases.md`)
inventoried honestly, and leg 5 — the watch — was never run. **This roadmap
subsumes that remainder into v1 rather than superseding the old route
silently**: what the sealed legs still owe (the watch, the falsifier
readings) appears below by name, folded into the new sequence, so no reader
has to diff two Trajectories to learn what survived.

T's instruction, verbatim in shape: v1 is the full site for one operator on
local data; v2 is the full site with login, users, and databased records.
That maps exactly onto the two horizons 0010 drew and the seam it drew
between them, which means the Starvu house rule governs this chart from its
first line: **nothing in v1 may exist because v2 will need it.** Where a v1
step happens to be v2's first rung — and one is — it qualifies only because
it is right for v1 alone.

---

## Ground truth: what is already under the road

Shipped and live, per 0011 and state 0007: the Vite + React + TS SPA in
`/ui`; the zero-dependency generator (`ui/scripts/generate.mjs`) emitting
`estate.json`, `llms.txt`, `llms-full.txt`, and the sitemap; the pure
derivation spine in `ui/src/lib/derive.ts` — no DOM, no React, the Phase-1
graph rules made portable; the custom domain on Cloudflare Workers static
assets with ~5-second deploys; SEO and AI metadata with a real-screenshot OG
card; pan/zoom maps, the drawer toggle, drill-in panels; the mobile surfaces.
Also true and load-bearing for the ordering below: **the estate is public
today**, including idea-0003's friend's-business details, and two
decide-shaped items wait (the Seed deviation; the exposure gate).

---

## V1 — the full site, one operator, local data

The organizing fact of v1: **the estate stays files-on-disk as the source of
truth; the site is its published derivation.** Every v1 step either closes a
debt the fast-track left open or finishes a surface the sealed Seed funded.
Ordered by fuse length — the burning item first — with startable/waits-on
honesty on each.

### v1.1 — The gate: Cloudflare Access in front of idea-estate.com

Email-OTP, configured in the Cloudflare console, **zero code** — no login
stub, no auth library, no user table, nothing in the repo changes. This
resolves the sharpest open tension on the record (the whole estate is public
and machine-ingestable, named twice to T and not yet decided) and it happens
to be the recorded v2 login vision's natural first rung. I state the seam
test plainly: the gate passes not because v2 wants it but because v1's
operator has a friend's business details on the open internet today. If the
`decide` lands the other way — T chooses to stay public — this step is a
one-line strikethrough and nothing downstream moves.

**Waits on:** the owed exposure `decide`, nothing else. Minutes of console
work once decided. This is the shortest fuse on the chart and it goes first.

### v1.2 — Record-keeping catch-up

Not code: estate work, and the route is dishonest without it. The two
Chancellor decisions (the Seed deviation from 0006; the exposure gate from
0007), the 0004↔0001 `relates` edge — overdue since 0010 found the
packets-become-rows finding that should travel along it — and the first
`challenge` this record has ever faced, for which F6–F8 were explicitly
written to be attacked. **Waits on:** nothing but dispatch — startable the
next session the Steward opens, which makes it the true Monday step
alongside v1.1's decide.

### v1.3 — Full-content reading

The generator embeds full artifact bodies, not just summaries, so the
reading panel reads the real markdown; `llms-full.txt` gains the same. The
honest size note, made now: the estate today is hundreds of KB of prose,
which is fine as an embedded data island — but there is a threshold, and I
name it rather than discover it later: **when `estate.json` crosses roughly
a few MB, the embed stops being a data island and starts being a download
tax, and that is the moment this step's approach gets revisited — not
before, and not preemptively with a v2-shaped API.** Watching a number is
free; building for it early is a seam violation.

**Waits on:** nothing — startable now, independent of v1.1 and v1.2.

### v1.4 — Regeneration ergonomics: the estate self-publishes

One command — or a GitHub Action on merge to main — that regenerates,
builds, and deploys, so the published site tracks the records by
construction and the snapshot stamp stays honest without a human
remembering. This is Phase B from 0011 grown to fit the deployed reality:
the freshness question is no longer "is my local tab stale" but "is the
public site behind the repo." Falsifier 3 reads its evidence here.

**Waits on:** nothing hard; sensibly after v1.1 so that what auto-publishes
is behind the gate T decided on.

### v1.5 — The polish and accessibility pass

Phase A, unchanged: focus order and keyboard reachability, aria on the maps,
reduced-motion honoring, contrast on the seam and the pills, touch targets,
print styles maybe. Bounded — a *pass*, not a residency. The sealed
Trajectory's warning still stands guard at this exact spot: this record's
named failure mode is a long polish tail, so this leg has an end and says so.

**Waits on:** the surface being still — no point polishing under v1.3's
moving panel.

### v1.6 — The watch (the sealed Seed's Phase 5, folded in)

Two parts. The code part: a local dev-server mode that regenerates on file
change — the near horizon's last unfinished leg, and the "local server"
T's own phrasing pre-named on F3's reversal path, arriving by hand exactly
as 0010 predicted it might. The non-code part, which the old leg 5 always
was: a month of steady use read against the armed falsifiers — F1 (does T
orient by the viewer or still by files), F3 (staleness in practice), F5
(seam as honesty or noise, pressure travelling to idea-0001 via the
now-drawn edge), and crucially **F6, whose reading gates v2** (see below).
Cost in build effort: nearly zero. The route ends in reading, not building —
same as it always did.

**Waits on:** a finished v1.1–v1.5 and elapsed time.

### What v1 refuses

The seam law from 0010, restated as this version's walls: **no login stub**
(the Access gate is console configuration, not product surface — the viewer
still has no user concept), **no disabled chat pane**, **no schema work,
API scaffolding, or database "because v2 will need it."** Every v1 decision
is made for the viewer; F8 is armed and reads at every leg boundary. If any
step above starts justifying itself by pointing forward, the seam has
failed and F8 has fired.

---

## V2 — the platform: login, users, databased artifacts

Charted from 0010's far horizon and the findings already on record:
insert-only tables compile the immutability law; dispatches are application
events, and events are rows; the chat is the Steward, not a chatbox. This
half is deliberately thinner than v1 — direction, ordering, dependencies —
because that is what a Trajectory owes a horizon this far out, and because
v2's first real leg should be re-charted against a *used* v1, not this
forecast.

### v2.1 — Foundation: the API, the schema, the importer

A Worker API (Hono) beside the static assets in the same `wrangler.jsonc` —
one deploy, two surfaces. A D1 schema that mirrors `ui/src/lib/types.ts`
row for row: **insert-only tables for artifacts and states, no UPDATE and
no DELETE grant, so the estate's most fragile law — obeyed, not compiled —
becomes compiled at the record layer**, exactly as 0010 found. The
generator repurposed as an importer: walk `ideas/` → rows, the frontmatter
walker's last job. And the derivation spine moves server-side **untouched**
— `derive.ts` was built framework-free for exactly this, which is the seam
paying out: what transfers, transfers because it was right for the viewer
first.

### v2.2 — The auth ladder

Rung one already exists: v1's Access gate. Real multi-user auth on D1
arrives when signup exists, not before; per-user estates follow; and the
exposure tension that v1 resolved as a global fact becomes a **per-estate —
later per-record — visibility setting**, which is the durable answer to the
question the gate patched. Row-level ownership is designed in at this rung,
not retrofitted — 0010's RLS warning, carried forward whole.

### v2.3 — Data on the wire

The app reads the same contract shapes from the API instead of the embedded
JSON: a loader swap, components untouched — the payoff of v1.3's data-island
discipline and the typed contract. `llms.txt` becomes per-estate. This leg
is small by construction, and if it is not small, v2.1 was built wrong.

### v2.4 — Writes as events

Verb dispatches from the UI recorded as rows. This is where the steering
layer becomes addressable by construction — the population idea-0001's
Framing proved structurally unaddressable in the file-based estate lands in
a table as a side effect of existing. **Noted as 0010 noted it: this
possibly dissolves idea-0001's tension, and possibly only relocates it. The
reading belongs to idea-0001, reached by the relates edge v1.2 draws. This
chart claims nothing there.**

### v2.5 — The chat is the Steward

Streaming chat via a Worker (AI Gateway → Anthropic API), speaking in the
Steward's office, dispatching verbs while the map grows live. The vision's
most distinctive claim and its most falsifiable: **F7 is armed the day this
leg starts** — if users route around the conversation to reach for buttons
and forms for everything that matters, the Steward-shaped chat was theater
over a CRUD app, and the design pivots to chat-plus-buttons rather than
being discovered into it. The AI-provider ladder from 0010 (BYO encrypted
key → platform-metered → OAuth-when-real) orders the access question; rung
one is buildable today.

### v2.6 — Live

Durable Objects for the watch across sessions and users — **when something
real demands it and not before.** Named so it is never smuggled into v2.1
as foundation. Nothing in v2.1–v2.5 requires it.

### What v2 waits on

**A decided v1 and a used v1.** The gate decision and the deviation
decision seal v1's record; v1.6's watch produces the one reading that
justifies or kills the platform premise: **F6 — nobody else ever wants an
estate.** If v1 ships, gets used, and T feels no pull to show it to anyone
and nobody who sees it asks for one, the multi-user premise has its answer
before a row of D1 exists, at zero build cost. V2 is not started on a
calendar; it is started on that reading, or on T overriding it with eyes
open — his call, classified here, never gated.

---

## Falsifiers, carried where they bind

- **F6** (nobody else wants an estate) — station: v1.6's watch; it is the
  v1→v2 gate reading.
- **F7** (chat-as-Steward proves worse than chat-plus-buttons) — named since
  0010, armed at v2.5.
- **F8** (the platform pulls the near build off course) — armed today, reads
  at every v1 leg boundary; the Access gate is its first test case and this
  artifact has stated why it passes.
- F1, F3, F5 from the sealed route carry into v1.6 unchanged; F2's estate
  clock (2026-09-25) still crosses everything and only T reads it.

## Classifier

`trajectory: actionable` — earned the same way as last time: the route
bottoms out in a step startable the next session the Steward opens, and it
waits on nothing but dispatch. **First actionable step: run the two owed
`decide`s — the Seed deviation and the exposure gate. The second of those
unblocks v1.1 the same day, and v1.1 is minutes of console work.** Everything
else on the chart queues behind honesty, which is where it should queue.
