---
id: idea-0003/artifacts/0006-martial-havoc-mobile-edition-framing.md
type: Framing
shape: prose
lenses: []
produced-by: frame
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0003-martial-havoc-mobile-edition-spark-explored.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0005-parent-rules-decision.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0002-rules-tables-opponents-adventure-inventory.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0004-heroic-havoc-parent-rules-findings.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [challenge, envision]
summary: "A rules engine for Martial Havoc, in the operator's words, 'for a way to create multiple Wuxia style dnd gameplay': the sandbox is the real game and adventures are scenes in it, The 5 Treasures the first. First release is the engine plus that scene plus a trail-head village. Out: accounts, multiplayer, generated prose, money. Falsifier: the operator stops playing. The interesting tension: an engine that must resolve everything, built for a book that delegates by design, on a phone where every reading is a rule."
---

# Framing: Martial Havoc, mobile edition

The Gardener, giving the explored Spark its first shape. The operator was
live; four candidate framings were offered and the operator wrote a fifth
in their own words, then chose among four readings of it. Where the
operator chose against the Gardener's recommendation it is said so, because
a stranger working from this document should know where the operator's
weight is.

## The problem underneath

The operator's answer to "what is this really about", verbatim:

> A rules engine for Martial Havoc for a way to create multiple Wuxia
> style dnd gameplay.

Not "the book, playable on a phone" (the Gardener's recommendation, which
survives as the first release's shape), not the film, not a personal tool.
**The engine is the product.** Martial Havoc's rules, made to run, so that
many wuxia games can be played on them the way a table plays many
campaigns on one rulebook. Asked which reading of "multiple" the Framing
carries, the operator chose: **the sandbox is the real game; adventures
are scenes in it.** *Load-bearing, and against the recommendation* (adventures
as data with a persistent Master). The rulebook's dice-thrown regions,
monasteries, thirty-six hooks and encounter matrices are the engine's end
state; The 5 Treasures is the first authored island inside a world the
engine will one day generate.

The question this record works on is therefore: **can Martial Havoc's
rules become an engine that plays a whole wuxia world, starting from one
cave?** Three things shape that. The book delegates by design ("some terms
or mechanics are intentionally ambiguous", p. 3), and the Findings list 63
places where the engine must decide (§6). The rulebook's region generation
is a physical scatter of dice on paper with "arbitrary" distance, so the
sandbox the operator names as the real game is the part the book describes
least. And the first release, by the operator's earlier word, ships the
engine with one scene and no sandbox at all.

## Who it is for

- **The operator first.** Private builds; the store is a later `decide`.
  The falsifier is personal, the operator's own: **"if I stop playing it
  myself."** A tool for many campaigns whose first test is one player.
- **Solo wuxia players**, on a phone, without the PDF, the dice or the
  bookkeeping, when it is published.
- **Gianluca Monaco** is not the audience but the source: CC BY-SA 4.0
  means no gate, and the whole repository ships under the same licence
  with attribution inside the game.

## In scope

The first release, as the exploration fixed it and this framing confirms:

- **The engine, whole.** Master creation with all 18 Martial Arts, the 72
  Techniques and Rituals each with a hand-authored effect record under the
  five-class scheme, actions, combat with Opening and Final Blow and
  Unexpected Events, multiple combat, escape and Dishonor, healing, XP and
  advancement, the market, the Oracle with Inspirations and Sparks,
  encounters, treasures and Special Items, the 50 opponents. Pure functions
  over immutable state; dice injected; the UI never computes a rule.
- **The five sealed rules** of the Decision: the parent's ATTACK, the Final
  Blow LUCK exception, a night's rest at +4, the double-six fumble, Morale
  on retreat rows. And every remaining `I-nn` reading as a labelled,
  reversible default.
- **The 5 Treasures**, complete: eight areas, the event table, nine foes,
  five treasures, spoiler-gated Hints, the key, a small explicit
  world-state layer (day and night, defeated foes, per-area flags), the
  Monk as a rescue, act markers and a freeze-frame ending.
- **A trail-head village** at the foot of Flat-top mountain: market,
  temple, inn. One authored place, no exploration, so that buying, LUCK
  recovery, meals and a night's rest have a home.
- **Menus and authored short text with an optional player-written
  passage**, the operator's own phrasing; the passages kept in the game's
  record.
- **The eight printed Masters as presets, as printed**, overspend flagged
  and allowed.
- **In-app dice with manual entry.** Expo and React Native for iOS,
  Android and web. Offline; no server. A `relate` edge to idea-0002 and
  nothing shared but patterns.

Beyond the first release, in scope for the record and named as the end
state: **the sandbox.** Region generation, routes and roads, monasteries,
city exploration, the Adventures table, the encounter matrices, a Master
who persists across scenes. The Findings warn that any digital region
generator is an invention, not an implementation (A33); the parent offers
a numeric distance rule the child made arbitrary (Findings §3, `I-15`).
Naming the sandbox as the real game means that invention is owed, not
avoided.

## Out of scope

Stated by the operator as certain:

- Accounts, login, cloud sync.
- Multiplayer of any kind.
- Generated prose: no model, external or on-device, writing narration.
- Monetisation: no ads, purchases or paid tiers.

And by earlier word: other games in the Havoc family (the edge to
idea-0002 is kinship, not a shared engine); the sandbox in the first
release.

## The tension that makes it interesting

**An engine that must resolve everything, built for a book that delegates
by design, on a phone where every reading becomes a rule.** The book hands
the player its gaps as a gift; the engine cannot. The exploration's answer
was labelled, reversible readings, and the Decision showed the pattern the
operator follows when the parent game speaks: the child's words where it
wrote them, the parent's where the child only echoed, and the operator's
own invention (the fumble) where neither source gives the game a floor of
risk. The sandbox sharpens this to its edge: the part of the book the
operator names as the real game is the part the book describes as a
handful of dice thrown on paper.

Two smaller tensions ride along. Fidelity to the print against legality:
Yin's sheet ships overspent, and creation's rules are checks the engine
reports, not gates it enforces, at least for presets. And the book's
advice against ending fights with Techniques, which the engine can show
but not impose.

## Constraints carried in

From the operator's standing preferences, unchanged: functional style,
pure functions over immutable game state, no classes; explicit
documentation for every function from the lowest abstraction up; no
external service the game cannot run without; the whole repository CC
BY-SA 4.0 with attribution shipped inside.

## What a stranger can do with this

Build the engine now from the two Findings, the Decision and this
framing: every table is inventoried, every ambiguity has a default with an
id, five contested rules are sealed. Author The 5 Treasures and the
trail-head village as content files. Not: design the sandbox's region
generator, choose the screen layout, decide the store listing, or extend
checks-not-gates from presets to rolled Masters. Those wait on the
operator.
