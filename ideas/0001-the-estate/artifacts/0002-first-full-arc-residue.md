---
id: idea-0001/artifacts/0002-first-full-arc-residue.md
type: SessionResidue
shape: prose
lenses: []
produced-by: capture
inputs:
  - ideas/0001-the-estate/artifacts/0001-clean-slate-rebuild-residue.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [challenge, decide]
summary: "Nine observations from the estate's first full arc — capture through decide on a real idea, ten artifacts in one session: a whole design round built outside the estate with no type for it, a load-bearing assumption nobody wrote down until it cost a rebuild, explore as the catch-all for every redirect, questions asked in estate vocabulary the operator could not parse, tension lists copied verbatim across five snapshots, an inputs: chain nothing checks resolves, six PRs of git ceremony around one record, and the falsifier still twenty days out with nothing exported."
---

# Residue: the first full arc, capture to decide

What 2026-09-05 revealed about the estate's own functioning, observed
while running idea-0002 from a `/start` prompt to a sealed layout
Decision. Ten artifacts, nine state snapshots, seven verbs, two
dispatches, six pull requests, one session.

Filed here because these are observations about the machinery, not
about Rivers and Lakes (`system/TYPES.md`, ADR 0026).

The payload is the self-criticism. Eight of the nine items below are
things that went sideways, were improvised, or have never been tested.
The record advanced well; that is not what this file is for.

## 1. A whole design round happened outside the estate, and there is no type for it

Two rounds of ten layout proposals were built, rendered, verified in a
browser, and handed to T as temporary HTML files. Twenty designs, each
with a stated identity, structure, what it optimises for, and its risk.
T chose one. The estate holds: a `Decision` naming the winner and
listing the other nineteen by name.

The options themselves — the thing that took the most work in this
session and that T actually judged — have **no artifact**. `compare`
exists and produces an `Appraisal` from `[a]`, and it was never
invoked, because the options were not artifacts to compare; they were
files in a scratch directory. The verb that fits was unavailable
precisely because the work had not entered the estate.

This is not a complaint about the temporary files: T asked for a
downloadable file, twice, and got one. It is that **the estate has no
way to hold a set of candidates**. A `Decision` records the choice and
by law cannot be edited; if T reopens the layout in a month, the
nineteen rejected designs exist only as one-line descriptions written
by the party that lost the argument.

Undecided whether this wants a type, a shape, or nothing at all.

## 2. The assumption that cost a rebuild was never written down

T's redirect, verbatim: *"Imagine 20 prompts in, this sheet would be
huge."*

The first ten layouts were all sheet-centred: the record sheet as the
interface, the entry as one panel within it. Nothing in the Spark, the
Framing, the challenged Framing, the Horizon or the Trajectory said the
sheet was the interface. Nothing said it was not. The Findings said the
book has no record sheet and the site must design one (§7), and the
Framing turned that into scope — *"build the engine and the sheet's data
model"* — without ever asking what the player looks at.

Six artifacts had passed, one of them through a `fresh-eyes` challenge
that found nine other things, and none of them surfaced it. The
Advocate attacked the sheet layout as *"where the advisory engine's
friction is either solved or not"* and still assumed a sheet.

**An assumption load-bearing enough to waste a full build round was
invisible to every verb that ran.** The pattern worth naming: the
estate's artifacts describe *what the thing is and does*, and nothing
in the chain from Spark to Trajectory is required to describe **what
the user is looking at**. The gap was found by building a thing and
showing it, which is the one move the estate has no verb for.

## 3. `explore` absorbed every redirect, including two it is not typed for

`explore` ran three times: once on a Spark (correct), once producing a
sharpened Framing (correct), and once on a **Horizon** after T's
interface redirect, emitting `type: Horizon` with a materially
different picture inside it.

That third run is defensible — `explore` is `a → a` and a refiner
operates on any type — and it was also the wrong shape for what
happened. T did not develop the Horizon; T replaced its central image.
The candidates were `graft` (branch the road not taken, keeping both)
or a second `envision`. `explore` was chosen because it is cheap and
inline, and the two alternatives are boundaries needing T's word.

**The cheapest correct-looking verb wins under time pressure**, and the
record now shows one Horizon superseding another with no trace that a
fork was ever considered. Whether that is a defect or the system
working is genuinely unclear; it is recorded so someone can decide.

## 4. Two questions were unanswerable because they were asked in estate vocabulary

T answered *"I don't understand the question"* twice:

- *"If the ask is refused, or goes unanswered, what does the record
  do?"* — "the record" is the estate's word. Rephrased as *"what happens
  to the project if Wym Lawson says no"*, it was answered immediately.
- *"The Advocate reclassified 'the book, playable, for anyone' as an
  identity claim … Accept?"* — this asked T to adjudicate a distinction
  between identity and problem that exists only inside the Framing's
  own prose.

Both were asked by the performing voice using the estate's internal
model of itself. The verbs' skills say *converse*; nothing says
**converse in the operator's words**, and the one office whose whole
discipline is fidelity to the operator's phrasing — The Gardener, in
`capture` and `jot` — does not carry that discipline into `frame`,
which it also speaks.

## 5. The delta close is not a delta

ADR 0028 says a snapshot records **this session's delta**, and carries
the live tensions and open questions **in full**. Across states 0005 to
0009 the tension list is substantially identical, five times, and the
open-question list is nearly so. Four of the five tensions have been
copied verbatim since state 0002.

Each snapshot is therefore mostly a copy of the previous one, which is
the exact thing the delta close was written to stop — arrived at
legitimately, by following the rule that says the live sets are carried
whole. The rule and its purpose disagree, and the validator checks the
chain fields but has no opinion on a snapshot that is 80% duplicate.

## 6. `inputs:` is checked for presence, never for resolution

`scripts/validate-estate.mjs` errors when `type:` or `produced-by:` is
missing and warns when `inputs:` is empty. It does not open the paths.

Every artifact this session cites its predecessors by path, and lineage
is *derived off this chain* (`system/TYPES.md`). A typo in a path — or
a citation of an artifact that was never written — passes the gate
silently and breaks lineage invisibly. This is the same shape as the
first residue's item 1: **green while broken**, one layer up.

Small, mechanical, and checkable, which by the estate's own law
(*checked, not declared*) means it should be checked or the claim about
lineage should be softened.

## 7. The estate can render and verify its own proposals, and does not know it

The twenty mockups were checked in a real browser: Playwright driving
the pre-installed Chromium, screenshots read back, four visual defects
found and fixed that no amount of reading the CSS would have caught (a
collapsed frame, a class-name collision between `.d6` the design and
`.d6` the die, cards that did not stack, a grid that padded a header to
half the viewport).

Nothing in the estate records that this capability exists. The first
residue's item 1 was *"nothing checks that the tools which read the
estate still function"*; the mirror is that nothing knows the estate
can **look at what it proposes**. The Estate View crash that opened
that residue is exactly the class of defect this session's loop caught
four times in an afternoon.

## 8. The git ceremony outgrew the estate ceremony

One session on one record produced **six pull requests**, six merges,
six subscriptions, six scheduled check-ins, and roughly thirty
notification wakes, every one of them reporting the same Cloudflare
deployment succeeding. The estate's own ceremony — nine snapshots, ten
artifacts — was the smaller half of the session's overhead.

The estate's law is silent on git beyond *"anything leaving the estate
waits for T's word"*, and the operator's word was given per PR, which
is correct and which is also how six PRs happened. Nothing says a
record's arc is one branch.

## 9. The falsifier is twenty days out and this record has exported nothing

`system/FALSIFIERS.md`: *"I'll have failed if within a month, I have no
evidence of using this outside this repo."* Check date **2026-09-25**.

Idea-0002 is Seed-shaped — Horizon, Trajectory, a fixed layout, an
actionable first step — and `seed` has not run, because an export is a
boundary and T has not given the word. The first residue named the
same tension on 2026-09-03 (*"machinery against use, with a
deadline"*) and it survives, unchanged, two days later, with the
distance to the falsifier down from twenty-two days to twenty.

The estate did what it exists to do this session: it took a raw prompt
and produced a decided, challenged, dated plan. **That is not the thing
the falsifier asks for.** The falsifier asks for a Seed used outside
this repository, and the gap between "ready to export" and "exported"
is one word from T that nobody has asked for.

---

The ninth item is the only one that is not about the machinery, and it
is here because a residue that inventories nine defects while the
project's own deadline runs out has failed at proportion.
