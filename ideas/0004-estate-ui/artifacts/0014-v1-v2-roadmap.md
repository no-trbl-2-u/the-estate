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
summary: "The two-version roadmap charted at T's instruction from the two-horizon Horizon: v1 finishes the site for one operator on local data — the estate stays files-on-disk as source of truth, the site its published derivation — ordered by fuse length with the Cloudflare Access gate first because the estate is public today and the gate waits only on the owed decide, then the record-keeping catch-up (two Chancellor decisions, the 0004↔0001 relate, a first challenge), full-content reading in the panel and llms-full.txt, one-command regenerate-build-deploy so the estate self-publishes, a bounded polish pass, and the sealed Seed's Phase 5 watch folded in rather than abandoned; v2 is the platform charted from 0010's far horizon — a Hono Worker API beside the same static assets, a D1 schema mirroring the existing types with insert-only tables so immutability is compiled rather than obeyed, the generator repurposed as importer and derive.ts moved server-side untouched, the auth ladder climbing from v1's Access gate to real multi-user auth with per-estate visibility, the loader swapped to the API with components untouched, verb dispatches recorded as rows so the steering layer becomes addressable by construction, the chat-as-Steward with F7 armed, and Durable Objects only when something real demands them. V1 refuses every stub the seam law forbids (the Access gate passes because it is zero code and right for v1 alone); v2 waits on a decided and used v1, which is F6's reading. First actionable step: next session, dispatch the two owed decides — the exposure decision unblocks the gate the same day. Steps carry human-attention tags per T's standing convention of 2026-08-28: every leg is evaluated for whether an agent can perform the work itself, and **[HUMAN ATTENTION]** marks the six of twelve (v1.1, v1.2, v1.6; v2.2, v2.5, v2.6) where it cannot — account consent, purchases, the content of T's own judgment, and lived use — while the silent remainder asserts the work is AI-performable. Needing T's approval is not needing T's hands; the tag marks only the latter."
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

## How to read the human-attention tags

*Amendment note, in my own voice: I drafted this chart on 2026-08-28 and it
has sat unmerged under T's review since. On 2026-08-31 I amended it in place
to comply with a convention that postdates its first drafting. The route did
not change, the ordering did not change, and no leg was added or removed —
only the tags below, this section, and one clause on the summary. The record
should not have to infer that from a diff.*

T's standing decision of 2026-08-28, sealed as a Decision on idea-0001:
**every step in every roadmap is evaluated for whether a human must perform
it.**

- A step an agent **definitely cannot perform** carries **[HUMAN ATTENTION]**.
- A step an agent can perform carries **nothing**, and the silence is a
  claim: it asserts the work is AI-performable. Absence is not an oversight.

**What the tag does not mean.** It does not mean "needs T's approval." This
estate requires T's approval for everything — if approval earned the tag,
every step would wear one and the mark would carry no information at all.
The tag marks steps where *the work itself* cannot be done by an agent,
however freely approval is granted.

The test I applied at every leg, stated so a reader can check my work and
disagree with it visibly: **suppose T says "you have my full approval, go do
it" and walks away. Can the agent finish?** If yes, no tag, however
consequential the step. If no — because the act requires T's account, T's
money, T's consent, T's judgment as its actual content, T's relationships,
T's lived experience, or T's legal answerability — the tag goes on.

**The grey band.** Most tagged steps are only partly human-only: an agent can
prepare, draft, stage, and drive a browser right up to the line of consent.
Every tag below therefore says what the agent does up to that line. A tag is
a boundary marker, not an abdication.

### Roll-up: where the tags landed

**Six of twelve legs carry the tag** — three of six in v1 (v1.1, v1.2, v1.6),
three of six in v2 (v2.2, v2.5, v2.6). Half is a real split, not a rubber
stamp and not a shrug; the rule discriminated.

Two things about the shape of that split are worth naming, because they are
findings and not decoration:

1. **It is not simply the code/not-code line.** Three of the six tagged legs
   (v2.2, v2.5, v2.6) are majority-code legs where an agent writes nearly
   everything and the tag comes from a single non-code act inside — minting a
   credential, upgrading a plan, being the party answerable for other
   people's data. That is exactly the grey band the rule anticipates, and it
   is where the tag earns its keep.
2. **The tag clusters at the ends and thins in the middle.** V1's tagged legs
   are the first, the second, and the last; the buildable middle (v1.3–v1.5)
   is clean. That is a real property of this route: it is bracketed by T's
   judgment and T's lived use, and the span between them is work an agent can
   carry alone. If a future amendment finds that middle acquiring tags, the
   route has drifted.

Within v1.2, which is a compound leg, the tag applies to two of its four
items and not the other two; the leg says which is which.

---

## V1 — the full site, one operator, local data

The organizing fact of v1: **the estate stays files-on-disk as the source of
truth; the site is its published derivation.** Every v1 step either closes a
debt the fast-track left open or finishes a surface the sealed Seed funded.
Ordered by fuse length — the burning item first — with startable/waits-on
honesty on each.

### v1.1 — The gate: Cloudflare Access in front of idea-estate.com **[HUMAN ATTENTION]**

Email-OTP, configured in the Cloudflare console, **zero code** — no login
stub, no auth library, no user table, nothing in the repo changes. This
resolves the sharpest open tension on the record (the whole estate is public
and machine-ingestable, named twice to T and not yet decided) and it happens
to be the recorded v2 login vision's natural first rung. I state the seam
test plainly: the gate passes not because v2 wants it but because v1's
operator has a friend's business details on the open internet today. If the
`decide` lands the other way — T chooses to stay public — this step is a
one-line strikethrough and nothing downstream moves.

**Why tagged, and where the line falls.** Standing up Zero Trust means
onboarding an account: accepting the Zero Trust terms, choosing the team
domain, and enabling an identity provider. Those are acts of account
ownership and consent performed as T, not merely approved by T — full
approval does not let an agent be the account holder. **Up to that line an
agent does the rest:** it can specify the exact application, the email-OTP
policy, the allowed identities, the session duration and the domain
coverage; it can write them down for T to paste; and it can drive T's own
browser to the dashboard and up to the consent surfaces. This session's own
history is the honest precedent — an agent drove the Cloudflare OAuth
consent screen in T's browser, but the authorization was T's account and T's
consent to grant.

**Waits on:** the owed exposure `decide`, nothing else. Minutes of console
work once decided. This is the shortest fuse on the chart and it goes first.

### v1.2 — Record-keeping catch-up **[HUMAN ATTENTION]**

Not code: estate work, and the route is dishonest without it. The two
Chancellor decisions (the Seed deviation from 0006; the exposure gate from
0007), the 0004↔0001 `relates` edge — overdue since 0010 found the
packets-become-rows finding that should travel along it — and the first
`challenge` this record has ever faced, for which F6–F8 were explicitly
written to be attacked. **Waits on:** nothing but dispatch — startable the
next session the Steward opens, which makes it the true Monday step
alongside v1.1's decide.

**Why tagged, and which parts.** Two of the four items earn it and two do
not, and the distinction is the whole point of the tag:

- **The two decisions — tagged.** The verb `decide` runs as The Chancellor,
  an agent, and the sealing is agent work. But the *content* of both choices
  is T's and only T's. The exposure gate asks whether a friend's business
  details stay on the open internet: that is a judgment inside T's own
  relationships, and T is the person answerable for the answer. The Seed
  deviation asks whether a route T funded and a build that overtook it are
  reconciled or the deviation stands: that is T's reading of his own intent.
  Full approval cannot supply either, because the thing needed *is* the
  judgment. **Up to that line an agent does a great deal:** frame both
  questions, lay out the options with their consequences, recommend, and —
  once T states the choice — seal it as a Decision through the bound agent.
- **The `relates` edge and the first `challenge` — not tagged.** Dispatching
  `relate` to The Cartographer and `challenge` to The Advocate is ordinary
  dispatch. Given approval, an agent finishes both without T's hands.

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

No tag, and I mean it as a claim: generator and schema work is entirely
AI-performable, and the one judgment inside it — the revisit threshold — I
have already named as a number rather than leaving it as a taste call.

**Waits on:** nothing — startable now, independent of v1.1 and v1.2.

### v1.4 — Regeneration ergonomics: the estate self-publishes

One command — or a GitHub Action on merge to main — that regenerates,
builds, and deploys, so the published site tracks the records by
construction and the snapshot stamp stays honest without a human
remembering. This is Phase B from 0011 grown to fit the deployed reality:
the freshness question is no longer "is my local tab stale" but "is the
public site behind the repo." Falsifier 3 reads its evidence here.

No tag — and this was the hardest call on the chart, so I show my work
rather than hide it. The step offers two routes. **The one-command local
route an agent completes end to end**: the deploy path already works, the
credentials already exist, nothing new is minted. **The GitHub Action route
contains one act an agent cannot perform** — minting a scoped Cloudflare API
token under T's account and setting it as a repository secret, which is
credential issuance and account ownership. I did not tag the leg, because a
route exists that an agent finishes alone and "definitely cannot perform"
is not true of the step as written. But a reader who thinks the tag belongs
here is not making a mistake, and if T takes the Action branch, **that branch
acquires the tag**: the agent writes the workflow file and names the exact
token scopes; T mints the token and sets the secret.

**Waits on:** nothing hard; sensibly after v1.1 so that what auto-publishes
is behind the gate T decided on.

### v1.5 — The polish and accessibility pass

Phase A, unchanged: focus order and keyboard reachability, aria on the maps,
reduced-motion honoring, contrast on the seam and the pills, touch targets,
print styles maybe. Bounded — a *pass*, not a residency. The sealed
Trajectory's warning still stands guard at this exact spot: this record's
named failure mode is a long polish tail, so this leg has an end and says so.

No tag, and I considered tagging it. The argument for was appetite: heat is
hand-set by T and never the Steward's to assume, and the end of a polish
pass is exactly where an unbounded tail would grow. The argument against
won on the facts — **the appetite is already set** (`idea.md`,
`appetite: 3`, hand-set by T on 2026-08-28), the leg is already declared
bounded here, and accessibility has objective criteria an agent can check
itself against rather than taste an agent must borrow. Given approval, an
agent runs this pass to those criteria and stops. That is a non-earner.

**Waits on:** the surface being still — no point polishing under v1.3's
moving panel.

### v1.6 — The watch (the sealed Seed's Phase 5, folded in) **[HUMAN ATTENTION]**

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

**Why tagged, and where the line falls.** The two parts fall on opposite
sides. The dev-server mode is clean agent work and carries nothing on its
own. The watch is the purest human-only step on the chart: F1 asks whether T
reaches for the viewer or still for the files, F5 asks whether the seam
reads as honesty or noise to the person living with it, and F6 asks whether
anyone in T's world ever wants an estate of their own. No amount of approval
lets an agent live a month as T or feel the pull the falsifiers measure.
**Up to that line an agent does the setup and the scaffolding:** build the
watch mode, prepare the reading template with each falsifier and its
evidence question, collect whatever the site can honestly report, and — when
T reports what he noticed — write it up. The noticing is T's.

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

A word on the tags in this half: they are forecasts, like everything else
here. A step this far out can acquire or shed a tag when it is re-charted
against a real v1, and I would rather be corrected then than vague now.

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

No tag: schema work, importer work, and moving a pure module are exactly the
work an agent does alone, and D1 has a free tier this leg fits inside. If it
turns out not to — if the foundation needs the paid Workers plan on day one
rather than at v2.6 — this leg acquires the tag and the reason is a purchase,
not a difficulty.

### v2.2 — The auth ladder **[HUMAN ATTENTION]**

Rung one already exists: v1's Access gate. Real multi-user auth on D1
arrives when signup exists, not before; per-user estates follow; and the
exposure tension that v1 resolved as a global fact becomes a **per-estate —
later per-record — visibility setting**, which is the durable answer to the
question the gate patched. Row-level ownership is designed in at this rung,
not retrofitted — 0010's RLS warning, carried forward whole.

**Why tagged, and where the line falls.** This is the leg where other
people's data enters the estate, and with it terms, privacy, and legal
answerability — T becomes the party responsible for records that are not
his, and no agent can be answerable in his place. Registering an identity
provider or an OAuth client under T's account is the same act of account
ownership that tagged v1.1, one rung up. **Up to that line the agent builds
essentially all of it:** the schema with row-level ownership designed in,
the session handling, the per-estate visibility model, the migration from
the single-operator shape, and drafts of whatever terms and privacy posture
the thing needs. T registers the provider, and T is the one who is
answerable.

### v2.3 — Data on the wire

The app reads the same contract shapes from the API instead of the embedded
JSON: a loader swap, components untouched — the payoff of v1.3's data-island
discipline and the typed contract. `llms.txt` becomes per-estate. This leg
is small by construction, and if it is not small, v2.1 was built wrong.

No tag. A loader swap behind a typed contract is the cleanest AI-performable
work on the whole chart, and its smallness is the test of v2.1.

### v2.4 — Writes as events

Verb dispatches from the UI recorded as rows. This is where the steering
layer becomes addressable by construction — the population idea-0001's
Framing proved structurally unaddressable in the file-based estate lands in
a table as a side effect of existing. **Noted as 0010 noted it: this
possibly dissolves idea-0001's tension, and possibly only relocates it. The
reading belongs to idea-0001, reached by the relates edge v1.2 draws. This
chart claims nothing there.**

No tag: recording dispatches as rows is engineering. The *reading* of what
those rows mean for idea-0001 is a separate act on a separate record, and I
decline to smuggle it in here as a step just to give it a tag.

### v2.5 — The chat is the Steward **[HUMAN ATTENTION]**

Streaming chat via a Worker (AI Gateway → Anthropic API), speaking in the
Steward's office, dispatching verbs while the map grows live. The vision's
most distinctive claim and its most falsifiable: **F7 is armed the day this
leg starts** — if users route around the conversation to reach for buttons
and forms for everything that matters, the Steward-shaped chat was theater
over a CRUD app, and the design pivots to chat-plus-buttons rather than
being discovered into it. The AI-provider ladder from 0010 (BYO encrypted
key → platform-metered → OAuth-when-real) orders the access question; rung
one is buildable today.

**Why tagged, and where the line falls.** Two human-only acts sit inside an
otherwise fully agent-buildable leg. First, money and credentials: an
Anthropic API key is minted on T's account against T's payment method under
T's acceptance of the provider's terms, and the ladder's upper rungs are
worse — platform-metered means T is absorbing or billing for other people's
inference, and OAuth-when-real means registering as a partner. Second, F7's
reading needs real users doing what they actually do, which is the same
species of evidence as v1.6's watch. **Up to those lines the agent builds
all of it:** the streaming Worker, the gateway wiring, the office voice, the
verb-dispatch plumbing, key handling from an environment secret, and the
instrumentation that would make F7 legible when there is someone to read.

### v2.6 — Live **[HUMAN ATTENTION]**

Durable Objects for the watch across sessions and users — **when something
real demands it and not before.** Named so it is never smuggled into v2.1
as foundation. Nothing in v2.1–v2.5 requires it.

**Why tagged, and where the line falls.** Durable Objects require the paid
Workers plan. That is a purchase on T's account, and a purchase is the
cleanest case the convention has: full approval does not let an agent hold
the payment method. The second human-only part is quieter but real — "when
something real demands it" is a judgment about whether the demand is real,
and this leg exists precisely to keep an agent from answering that question
prematurely on its own enthusiasm. **Up to those lines the agent does the
build:** the Durable Object, the config, the migration, and an honest
statement of what specifically is demanding it and what breaks without it.

### What v2 waits on

**A decided v1 and a used v1.** The gate decision and the deviation
decision seal v1's record; v1.6's watch produces the one reading that
justifies or kills the platform premise: **F6 — nobody else ever wants an
estate.** If v1 ships, gets used, and T feels no pull to show it to anyone
and nobody who sees it asks for one, the multi-user premise has its answer
before a row of D1 exists, at zero build cost. V2 is not started on a
calendar; it is started on that reading, or on T overriding it with eyes
open — his call, classified here, never gated.

This condition carries no tag of its own only because it is not a step: the
human-only work it depends on is v1.6's watch, already tagged there, and I
decline to count it twice to make the roll-up look busier.

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

Worth noticing under the new convention: **every falsifier on this chart
stations at a tagged leg.** F1, F3, F5 and F6 read at v1.6; F7 reads at
v2.5; F8 reads at leg boundaries and its first test case is v1.1. That is
not a coincidence and it is not a problem — a falsifier is a claim about
what T will find to be true, and finding is a human act. But it does mean
the readings that could kill this route all sit on the side of the line an
agent cannot cross, which is a real constraint on how fast this record can
learn.

## Classifier

`trajectory: actionable` — earned the same way as last time: the route
bottoms out in a step startable the next session the Steward opens, and it
waits on nothing but dispatch. **First actionable step: run the two owed
`decide`s — the Seed deviation and the exposure gate. The second of those
unblocks v1.1 the same day, and v1.1 is minutes of console work.** Everything
else on the chart queues behind honesty, which is where it should queue.

The classifier survives the amendment, and I checked that it does rather
than assuming it. The first actionable step is tagged **[HUMAN ATTENTION]**
— its content is T's judgment — but the tag does not touch actionability.
A step is actionable when it is startable Monday, and the agent starts it
Monday by framing both questions and putting them in front of T. What T does
next is answer, not authorize.
