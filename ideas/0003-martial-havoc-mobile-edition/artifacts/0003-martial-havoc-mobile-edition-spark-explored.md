---
id: idea-0003/artifacts/0003-martial-havoc-mobile-edition-spark-explored.md
type: Spark
shape: prose
lenses: []
produced-by: explore
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0001-martial-havoc-mobile-edition-spark.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0002-rules-tables-opponents-adventure-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [research, relate, frame, challenge]
summary: "The Spark explored with the operator live and the Findings in hand: Expo/React Native for iOS, Android and web over a pure functional engine; first release is the engine plus The 5 Treasures only; menus and authored short text with an optional player-written passage; all 72 Technique and Ritual effects hand-authored under a five-class scheme; the Factor's readings adopted as labelled, reversible defaults; ATT as headcount when a group and SKILL penalty when alone; whole repo CC BY-SA 4.0; a relate edge to idea-0002; Heroic Havoc researched before frame; the eight printed Masters shipped as printed; the operator as first audience."
---

# Spark, explored: Martial Havoc, mobile edition

The Forager, back from wandering the Spark with the operator alongside and
the Factor's inventory open. Same type in, sharper out: the thought is still
"the phone is the Master's sheet, the dice, the oracle and the Game Master",
and it now knows what it has chosen and what it has not.

Method, honestly: the operator was live. The Forager offered threads in four
rounds of parallel choices, each with a recommendation attached; the
operator picked, and twice picked against the recommendation, and once wrote
their own answer. Those three are where the idea is load-bearing and are
marked below. Nothing here was invented for the operator; the operator's own
words from the first Spark stand unaltered in `0001` and are corrected here
only where the Findings showed the summary diverging from the book (§5 of
the inventory).

## The thought, as it now stands

A mobile game version of Martial Havoc (Gianluca Monaco; a hack of Heroic
Havoc, Ruolatori Solitari; CC BY-SA 4.0). One TypeScript codebase on Expo
and React Native, building for iOS, Android and the web, with the rules
engine a pure functional package of its own and the UI a thin layer over
it. The first release implements the whole rulebook's mechanics but ships
one piece of content: The 5 Treasures. Every roll resolves to a menu of
concrete options with a line of authored text, and the player may write
their own passage at any point. The book's silences are filled by readings,
each labelled as a reading and each reversible.

## Threads followed, and where the operator pulled

### Platform

- **Expo / React Native, iOS + Android + web.** Chosen with the
  recommendation. Engine as its own package: pure functions over immutable
  game state, dice injected as a source so every rule is testable with
  fixed rolls; the UI never computes a rule.
- Implication: a CLI or test harness over the engine exists before any
  screen does, and the engine is where the readings live.

### Scope of the first release

- **Engine plus The 5 Treasures only.** Chosen with the recommendation.
  Creation, actions, combat, multiple combat, escape, healing, XP, market,
  oracle: all implemented. Region generation, monasteries, the 36 hooks and
  the encounter matrices: deferred. The Findings' warning stands: a digital
  region generator is an invention, not an implementation (A33), and it is
  not in the first release.
- Implication: the market, temple and healing loops need somewhere to
  happen. The adventure has no town. Open, below.

### Narration

- **"Menu choices and authored short with an option to write in a player
  authored text."** The operator's own words, written in place of the
  offered options. *Load-bearing.* The Forager reads it as: every Oracle
  reading, Unexpected Event and Technique effect resolves to a short menu
  with one authored line each; a free-text field is always available and
  never required; what the player writes is kept in the game's record.
- Implication: two content layers, authored lines and player passages, and
  a save that carries both.

### The 72 Technique and Ritual effects (A23)

- **Five-class scheme, one hand-authored effect record per entry.** Chosen
  with the recommendation. Mechanical, combat-narrative, exploration,
  oracle-like, summoning. Each of the 72 gets an authored record naming its
  class, its cost, and what the engine does. Wudang Quan's Rituals in
  combat (D08) is a per-style flag on the record.

### Combat readings the adventure makes load-bearing

- **ATT: headcount when a group, SKILL penalty when alone** (A05, I-05).
  Chosen with the recommendation. A band of Woodgatherers is five
  attackers; a lone Senior King imposes −4 SKILL.
- **Multiple combat: one Master roll against each attacker's own roll**
  (A06, I-06). Chosen with the recommendation. SKILL reduced by headcount;
  each attacker up to ATT rolls; each comparison resolves independently.

### The remaining readings

- **All of the Factor's `I-nn` readings adopted as labelled defaults, each
  reversible.** Chosen with the recommendation. Every default is tagged
  "reading, not rule" with its citation, shown in a rules panel, and
  overturned by a later `decide` without touching the engine's shape.

### The Monk (A50, D13)

- **NPC, rescue by default; attacking him costs 1 Dishonor.** Chosen with
  the recommendation, the Forager's confidence stated at 50: the Dishonor
  cost is an invention the source does not make. Rescue yields the loot
  roll as a gift.

### World state (A49, A52, A53, A63)

- **A small explicit world-state layer, data-driven.** Chosen with the
  recommendation. A flags map owned by the adventure content (day or night,
  hints revealed per area, key held, named foes defeated, per-area state),
  mutated only by pure functions. The gourd toggles day and night; the
  Ogres are absent by night; a defeated King is gone from every table.

### Licence (open question 4)

- **Whole repository CC BY-SA 4.0.** Chosen with the recommendation. No
  content/code line to defend; the game is itself an open remix, in the
  spirit of the rulebook's Appendix A. Attribution to Gianluca Monaco,
  Cristian Cammarata, limofeus and watabou ships inside the game.

### Idea-0002, Rivers and Lakes web edition

- **A `relate` edge now, engines separate.** Chosen with the
  recommendation. The why: two solo wuxia paper games adapted by the same
  operator into pure functional engines with injected dice, an advisory
  posture, and the same self-imposed constraints; patterns shared by
  reading, not by code. No shared engine before either exists.

### Heroic Havoc, the parent game

- **A `research` dispatch before `frame`.** Chosen **against** the
  recommendation (revisit only if a reading fails in play). *Load-bearing.*
  The operator wants the undefined terms ("Special" attack, Ambush against
  Attack, the Event outcomes, "Openings", Minions 1–4) settled from the
  parent rules before the problem is framed, not patched by readings. The
  Findings from that dispatch supersede the corresponding `I-nn` defaults
  where the parent is explicit.

### Dice

- **In-app roll, with manual entry for table dice.** Chosen with the
  recommendation. The engine only ever sees integers.

### Audience

- **The operator first; private builds.** Chosen with the recommendation.
  Internal tracks and a web build; a store listing is a later `decide`.

### The eight printed Masters (§3.25)

- **Ship all eight exactly as printed.** Chosen **against** the
  recommendation (correct Yin's overspend). *Load-bearing: fidelity to the
  print over legality.* Yin's sheet spends 12 of 8 resource points and 10
  of 9 Proficiency points; the engine flags the overspend and allows it,
  as it would for any preset that breaks creation's rules.
- Implication: creation's rules are checks the engine reports, not gates
  it enforces, at least for presets. That is the advisory posture arriving
  through a side door.

### Cinematic Journey (Appendix B)

- **Light frame: act markers and an ending screen.** Chosen with the
  recommendation. The adventure shows the passage into Act II (the cave)
  and Act III (the Kings), and closes on a freeze-frame; no dice are
  overridden.

## Variants the Forager generated and left on the shelf

- **Installable web app only**, no store presence: the fastest private
  ship, and the fallback if Expo's native builds cost more than they give.
- **Engine first, platform later**: the CLI harness as the whole first
  milestone. Absorbed rather than shelved: it is the first leg of the
  chosen platform anyway.
- **Engine plus adventure plus one city**: gives the market, temple and
  healing loops a home. Not chosen; the question of where those loops
  happen is open, below.
- **Mechanical subset first, the other 64 effects narrative**: a smaller
  first release if 72 authored records prove too many.
- **Strict enforcement of creation's rules** as a switchable setting, for
  players who want presets and sheets refused when illegal.
- **Full three-act frame** with plot points steering Event rolls, per the
  appendix's own advice.
- **Split licence** (content CC BY-SA, code MIT), if the whole-repo choice
  ever blocks a contribution.

## What the exploration did not settle

- Where the market, temple, meals and rest happen in a first release with
  no town. A base camp on the Flat-top mountain, a village at the trail
  head, or none: `frame` should name it.
- How the player's own passages are stored and shown: alongside the
  authored line, in a separate journal, exported.
- Huang Feng Guai's blank ATTACK (A20): not in the adventure, so deferred
  with the sandbox.
- Which two treasures the Chieftain's sheets explain (A55): a guess in the
  Findings, still a guess.
- The cave map: the Findings inferred adjacency from the drawing; whether
  the app shows the original image, a redrawn map, or a room list only.
- What "reading, not rule" looks like on a phone screen without becoming
  noise.

## Corrections to the first Spark's rules summary, from the Findings

Applied here so the next verb reads a corrected Spark; the first Spark is
untouched. There are fifty opponent stat blocks, not forty-five; five carry
a single "Martial Arts (n)" Proficiency, the Brawler's ATTACK is 2–4, Huang
Feng Guai's is blank. The Deities and City-encounter tables are 12-row
banded tables; the Final Blow and Martial Arts tables are 18-row banded
tables; none is a 36-cell d66. The Final Blow name is "for inspiration"; the
player names the Technique. Proficiency points equal the *rolled* SKILL,
before Training deductions. The Gambling House adds a relevant Proficiency
on the Master's side. Wudang Quan may use Rituals in combat. Exactly one
relevant Proficiency is added to an Attack Strength. The source itself
writes both "Gold Horn" and "Golden Horn". The pre-generated Masters are
legible and are transcribed in the Findings.
