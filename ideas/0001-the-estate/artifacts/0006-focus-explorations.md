---
id: idea-0001/artifacts/0006-focus-explorations.md
type: Findings
title: "Focusing the estate: add, fold, and next moves under the user lens"
description: "The prior-art Findings developed toward the operator's question — how to focus the estate so it is easier to use. The five gaps re-weighed against usability rather than capability; a fold list drawn from what the record shows the user actually feels; three candidate sequences against the 2026-09-25 clock. UI excluded (idea-0004's thread)."
shape: prose
lenses: [user]
produced-by: explore
inputs: [ideas/0001-the-estate/artifacts/0005-prior-art-viability-findings.md]
date: 2026-08-29
classifiers:
  challenged: false
potential-next-steps: [decide, compare, challenge]
summary: "Under the user lens the gap ranking inverts from build to use: gap 1's remedy is planting a Seed, not building a receiver; gaps 2+3 collapse into one greeting behavior; gaps 4+5 defer; the fold list targets ceremony (state-per-session, appetite silence, vocabulary layering, compare/review merge) — and every fold is T's structural decision, while the strongest next move costs no building at all."
generated: { by: forager/2026-08-29, at: 2026-08-29T20:30:00Z }
stale_after: 2026-11-29T00:00:00Z   # inherited from the predecessor; every external claim here rides on its survey
sources:
  # Carried from artifacts/0005 — only the entries this exploration leans on.
  # The full 32-source survey lives there; nothing new was consulted (I do not leave the walls).
  - id: bmad
    resource: https://github.com/bmad-code-org/BMAD-METHOD
    title: "BMAD-METHOD — AI-driven agile development framework"
  - id: garden-stages
    resource: https://mxstbr.com/notes/digital-garden
    title: "Max Stoiber — How I tend to my digital garden (seedling/budding/evergreen)"
    author: "human:mxstbr"
  - id: obsidian-agent-memory
    resource: https://mattmatheson.github.io/RandomPhoneBuilds/obsidian-second-brain-ai/
    title: "Obsidian as a Second Brain for AI Agents — layered memory, heartbeat cycles"
  - id: shapeup-bets
    resource: https://basecamp.com/shapeup/2.3-chapter-09
    title: "Shape Up — Place Your Bets (appetite, betting table, no backlog)"
    author: "human:rjs"
  - id: studio-kill
    resource: https://medium.com/@roamy/how-startup-studios-validate-kill-ideas-in-4-weeks-or-less-e7455371cdb6
    title: "How startup studios validate/kill ideas in 4 weeks or less"
---

# Focusing the estate

The Factor's Findings (my predecessor, `artifacts/0005`) answered *is this
dumb, done, or missing something*. The operator's follow-on question is
different in kind: **how to focus the estate so it is easier for users to
use** — what to add, what to remove, what to do next. This artifact develops
the Findings toward that question under the `user` lens. It commits to
nothing; where a thread ends in a structural change I mark it as T's decision
per `AGENTS.md` and stop.

One exclusion, stated once: a UI is idea-0004's thread and does not appear
here. Everything below is what focusing looks like *without* one.

## Who the user is, and the one piece of user evidence we hold

The estate has exactly one user: T. The Framing (`artifacts/0003`) already
established the record has no external reader; the Seed's consumer is a
different party served by a different document. So "easier for users to use"
means, concretely: **less vocabulary T must hold, fewer decisions per turn,
less ceremony per session, and a record T can read back without confusion.**

The record holds exactly one primary datum on this, and it is load-bearing
for everything below. Second-day residue, item 4 — T, verbatim:

> "I'll be honest, I've been a little confused about the evolution of these
> ideas."

That is a **reading** problem, not a writing problem. Nearly all of the
estate's machinery — types, lineage, classifiers, immutable snapshots — serves
writing and provenance. Almost none of it serves reading back. Any focusing
move should be scored against that datum, because it is the only one we have.

## A finding that anchors both lists: the estate already has a de facto core

Checkable from frontmatter alone (`grep produced-by ideas/*/artifacts/*.md`,
plus `exports/` and `ideas/SURVEY.md`): after three full arcs across three
records, **ten of seventeen verbs have run** — `capture`, `frame`, `envision`,
`chart`, `phase`, `explore`, `challenge`, `research`, `seed`, `survey`.

**Seven have never run:** `distill`, `compare`, `review`, `decide`, `relate`,
`incubate`, `retire`. Which means four of thirteen agents — the Distiller, the
Assayer, the Chancellor, the Keeper — have **never been dispatched**, and the
Cartographer has performed only half his office.

Two readings, held apart honestly:

- *Dormant capacity.* Three days and three arcs is nothing; `incubate` and
  `retire` are lifecycle verbs that only fire when a portfolio ages. Deleting
  them now would be pruning a tree planted Tuesday.
- *Revealed core.* The verbs that ran are the ones the work pulled for. The
  seven that didn't are the ones the design imagined. Notably, `decide` has
  now been *hinted* three times in `potential-next-steps` (the Framing, the
  prior-art Findings, and now this artifact) without ever running — the
  estate keeps recommending a verb it never reaches for.

I do not resolve this. But it reframes "what to remove": the question is not
which verbs to delete, it is **whether the unexercised wing should receive any
further investment** before use demands it. Shape Up's no-backlog posture
[^shapeup-bets] offers the template: nothing is removed for dormancy, and
nothing dormant is elaborated — if it still matters, the work will re-raise
it.

---

## Thread one — what to add

The Factor ranked five gaps by how loudly prior art shouts them. Under the
user lens the ranking survives at the top and collapses in the middle, and
the honest summary is: **almost none of the gaps calls for building.**

### Gap 1, the Seed's missing consumer — the remedy is usage, not machinery

The gap is real and the falsifier turns on it. But notice what the gap
actually is: nothing has ever *tried* to consume a Seed. Two sit sealed in
`exports/` right now. The smallest remedy is not a receiving protocol; it is
an afternoon:

- **Small (no estate change):** open a fresh project outside this repo, hand
  it `exports/0003-starvu-agency-site-seed.md`, and build against it. This
  produces falsifier evidence, the first real test of the Seed contract, and
  — the part that serves *this* artifact's question — usage data on which of
  the Seed's sections a consumer actually reads. It will also surface the
  known staleness problems as data instead of design questions: the Starvu
  seed ships `pending` asset rows (residue one, item 7) and the estate-ui
  seed carries a path its own record has since reversed (residue two,
  item 8).
- **Medium (structural, T's):** a short "planting instructions" preamble in
  `templates/seed.md` — three sentences telling the receiving session what a
  Seed is and what to do with the provenance stamp. Template convention
  change; reading-list process.
- **Large (fails the bar):** a designed receiving protocol or companion kit.
  This is more estate. The Factor found no prior art for export contracts
  *because nothing consumes them elsewhere either* — building the receiver
  before one planting has occurred is speculation with extra steps.

### Gaps 2 and 3 collapse into one greeting behavior

The Factor listed them separately: Horizons' falsifiers have no clock (gap 2),
and the estate's noticing waits to be asked (gap 3, against the standard
heartbeat pattern [^obsidian-agent-memory]). Under the user lens they are one
gap: **a clock nobody reads is not a clock, and the only place the user
reliably stands is the Steward's greeting.**

- **Small (structural, cheap):** one added duty in `system/STEWARD.md` — on
  greeting, the Steward checks `ideas/SURVEY.md` staleness against current
  `state-head`s and any recorded check dates (today, only the estate's own
  2026-09-25), and mentions what is overdue. No scheduler, no new agent, no
  new artifact type. This is the single cheapest move on the whole board that
  directly converts the estate from *a place T must remember to interrogate*
  into *a place that says one useful thing on arrival*. It also stays inside
  "suggestions are not assignments": the greeting mentions; T selects.
- **Medium (structural):** a check-date field on Horizon classifiers
  (`system/TYPES.md` change) so exported visions carry a clock the way the
  estate carries its own. Worth nothing until the small version exists to
  read it; sequenced second, if at all. Venture practice pre-commits dates
  [^studio-kill], but venture practice also has a portfolio manager paid to
  look — the greeting is ours.
- **Large (defer):** a scheduled heartbeat agent. Infrastructure, and the
  first move on this board that is unmistakably "more estate."

### Gap 4, law without enforcement — fails the user bar entirely, for now

Enforcement serves record integrity against drift; the single operator feels
none of it until the day drift bites. The counterargument is real — the
estate's own history holds an instruction-layer binding failing twice — but
building enforcement machinery in the falsifier's final month is the named
failure mode wearing a helmet. Defer, and let the residue channel keep
logging violations; if they accumulate, the case makes itself.

### Gap 5, scale — defer flat

Four records. The Factor himself marked this one "may honestly never bite."

### The one add that came from use rather than from prior art: fast-track

The residue holds an ease-of-use win larger than anything the gap list
offers: T improvised "fast-track," the Steward translated it into a packet
convention, and an idea went Spark → Seed in one day with every assumption
stated and reversible (residue two, item 1). That is the estate at its most
usable — and it exists only in one session's packet prose; a future session
cannot invoke what that day improvised.

Naming fast-track modifies the dialogue-relay rule, so — per the Framing's
own caution about workflow details that are secretly law amendments — **this
is a proposal to amend `system/LAW.md` and must be said in those words.**
T's, with the reading list. I flag it because it is the only add candidate
whose evidence is the operator's actual hand rather than someone else's
ecosystem.

(Considered and dropped: a named channel for operator experience reports.
Item 4's confusion datum reached the record fine through residue capture.
The channel exists; it is this record.)

---

## Thread two — what to remove or fold

The inventory: thirteen agents, seventeen verbs, ten types, six lenses, seven
verb families, plus VISION / LAW / TYPES / STEWARD / registry / GLOSSARY /
ADRs. The question is which distinctions the user *feels* and which exist for
the system's own coherence. The prior art is blunt about how lean the usable
versions are: BMAD ships numbered workflows you follow [^bmad]; digital
gardens run whole lifecycles on three maturity states [^garden-stages].

### The ten types: fix by vocabulary layering, not deletion

Composition genuinely needs the types — lineage and verb signatures are built
on them, and removing any would be schema surgery. But the confusion datum
says the *ladder* (Spark → Framing → Horizon → Trajectory → Phase) is legible
to the system, not to the operator. The gardens suggest the move: keep the
ten types in frontmatter and let the Steward *speak* in about three stages —
raw / being worked / ready to leave. Nothing in `system/TYPES.md` changes; the
change is to how the Steward narrates (`system/STEWARD.md`, so still T's
approval, but prose rather than schema). This is the cheapest possible attack
on "confused about the evolution of these ideas" that is not a UI.

### `compare` and `review`: the clearest fold candidate

Both the Assayer's, both produce an `Appraisal`; the entire difference is
arity (`[a] → Appraisal` vs `a → Appraisal`) — a distinction the type system
feels and the user does not, since reviewing one thing is comparing a list of
one. Neither has ever run, so the fold costs nothing yet. **Structural: verb
list change, T's reading-list process.** I mark it as the test case: if the
estate cannot fold these two, it cannot fold anything.

### The unexercised wing: remove by neglect, not surgery

Per the anchor finding — adopt the no-backlog posture. No verb is deleted for
dormancy; no dormant verb gets playbooks, examples, or documentation
investment until a session actually needs it. This "remove" costs zero
sessions, which under the clock is its entire appeal.

### Ceremony that could become defaults

- **State-per-session as the named norm.** Residue holds the open question
  three ways (per-verb, per-session, per-dispatch); meanwhile idea-0003
  accumulated twelve states in two days — and a record whose story is
  smeared across a dozen snapshots is exactly what a confused reader reads.
  Fewer, richer snapshots serve the confusion datum directly. Structural
  (Steward spec), T's — and it is *already* the open question the Steward
  carries; this lens just votes on it.
- **Appetite: make silence legal.** `appetite: 1` survived twelve states as
  flagged noise (residue one, item 8). The fold is not removing the field —
  it is the one input no metric can compute, and T has now set it once, so it
  earns its place — but making *absent* mean "not yet felt" and never
  carrying it as an open question again. A nagging field is ceremony; a
  waiting field is furniture.
- **Shape defaults to prose.** Every artifact across three arcs is
  `shape: prose`. Write the default down so the operator is never asked. The
  dimension stays (the no-siloing non-goal needs it); the question disappears.
- **Lenses: leave alone.** Six options in an optional dimension cost the user
  nothing until someone recites them. Nobody recites them. Unused optionality
  is free; unused *machinery* is not — that is the line between lenses and
  the unexercised verbs.

### Documents that duplicate — real, and honestly low-priority under this lens

The household table in `VISION.md` duplicates `system/registry.md` row for
row (a drift pair: two files must now agree about thirteen agents), and the
three-dimensions doctrine is stated in at least four files. Real maintainer
cost. But the *user's* interface is the Steward's greeting, not the document
set — T does not read `registry.md` to use the estate. Under the user lens
doc consolidation ranks below everything above it, and I say so rather than
padding the remove list with it.

### One check against the walls

Nothing above gates anything, so `grade, never gate` is untouched. Trimming
runs *with* a locked non-goal, not against one: `VISION.md` names "no giant
taxonomy" explicitly. The folds still change the verb list, templates, and
the Steward spec — every one of them is T's structural decision with the
reading list, and none of this artifact is a recommendation to just do.

---

## Thread three — what to do next, other than UI

Twenty-seven days to 2026-09-25, and the falsifier reads one thing only:
*evidence of use outside this repo.* Three candidate sequences, with the
trade-offs shown rather than settled.

**Sequence A — plant first.** Week one: plant the Starvu Seed in a fresh
project elsewhere; build against it; file the field report back through the
provenance stamp. Then let what the planting surfaced (which Seed sections
carried weight, how the staleness bit, whether the contract held) drive one
small structural session at most. This is the only move on the board that
feeds the falsifier directly, tests gap 1 for real, and generates the usage
data every add/remove judgment above currently lacks. It costs zero
estate-building — which is precisely its qualification.

**Sequence B — test-drive first.** Run one fresh, non-estate idea through the
current machinery with T narrating confusion as it occurs (item 4 made
operator experience admissible as data). This produces the evidence the fold
list needs before `decide` touches the verb roster. Risk: it happens entirely
inside the walls, so it feeds the falsifier only if that idea then exports
and gets used — B alone can eat the month while feeling like diligence.

**Sequence C — trim first.** Take the fold list to `decide` now, on the
theory that a leaner estate gets used more. Risk, stated plainly: **the
falsifier does not distinguish elaborating machinery from streamlining it.**
Both are days spent inside the walls, and C alone is the named failure mode
approached from the flattering side.

My honest weighing, short of a conclusion: A dominates on the only clock that
matters; B generates what C needs; C alone is the trap. The evidence leans
A → B → a small C after the check date. But sequencing is a choice between
live tensions, which is a `Decision`, not a `Finding` — and this record has
now hinted `decide` three times without running it. At some point that
pattern is itself the finding.

---

## What this exploration opened and did not resolve

- **Dormant capacity vs. revealed core** — the seven unexercised verbs. Not
  resolvable at n=3 arcs; the neglect posture defers it without deciding it.
- **Whether trimming before the check date is discipline or displacement.**
  Sequence C's trap argument cuts against my own fold list; both are on the
  record.
- **The predecessor's central tension stands untouched:** unoccupied position
  vs. absent demand. Nothing in this artifact resolves it — but Sequence A is
  the only candidate move that would feed it *data*.
- **Structural ledger** (every item T's, with the reading list, per
  `AGENTS.md`): fast-track named in law (a `LAW.md` amendment, said in those
  words); the greeting-time noticing duty and state-per-session norm
  (`system/STEWARD.md`); the `compare`/`review` fold (verb list); a Seed
  planting preamble (`templates/seed.md`); a Horizon check-date classifier
  (`system/TYPES.md`); appetite-silence and shape-default conventions.
  **Non-structural, pure usage:** planting a Seed; the test-drive arc.
- **Route hints:** `decide` (the sequences and the fold list are choices, and
  the verb is three hints overdue); `compare` (if T wants A/B/C weighed as a
  formal Appraisal first — noting the small irony that this would be the
  Assayer's first-ever dispatch); `challenge` (this artifact is unchallenged,
  written by an agent proposing to shrink the household he belongs to, and
  that interest should be attacked).

*Derivations in this artifact are checkable against frontmatter: the
exercised-verb count from `produced-by:` across `ideas/*/artifacts/`, plus
`exports/` and `ideas/SURVEY.md`; the shape count likewise. External claims
are carried from `artifacts/0005` and inherit its bounds and shelf life.*

[^shapeup-bets]: Shape Up, "Place Your Bets" — no backlog; work that matters re-raises itself. Carried from 0005.
[^obsidian-agent-memory]: Heartbeat consolidation/surfacing as standard agentic-PKM practice. Carried from 0005.
[^bmad]: BMAD's numbered, sequenced workflows — the lean usable version of a persona pipeline. Carried from 0005.
[^garden-stages]: Seedling/budding/evergreen — a whole lifecycle in three user-facing states. Carried from 0005.
[^studio-kill]: Pre-committed kill criteria and dates in venture practice. Carried from 0005.
