---
id: idea-0003/artifacts/0012-martial-havoc-mobile-edition-trajectory.md
type: Trajectory
shape: prose
lenses: []
produced-by: chart
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0011-martial-havoc-mobile-edition-horizon-challenged.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0008-martial-havoc-mobile-edition-framing-explored.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0002-rules-tables-opponents-adventure-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
  trajectory: actionable
potential-next-steps: [phase, seed, challenge]
summary: "Thirteen legs from state 0011 to 2027-03-05, hung from the December milestone: a Seed out by 2026-09-25; repository, tables as data, engine core, 149 combat-critical authored lines, adventure format and the cave, campaign record and save, the village, the UI, private builds, the cave played to its ending by 2026-12-05; then 288 word-table lines, the sandbox procedures, and the whole sitting by 2027-03-05. Five legs carry the human-attention tag. First step startable Monday: tables as data with a schema, and the engine package's creation and dice, in a new repository."
---

# Trajectory: from state 0011 to 2027-03-05

The Surveyor, staking the route. Direction, order and dependencies; thin
on implementation by design. Every leg is a claim that an agent can do it
unless it carries `**[HUMAN ATTENTION]**`, and a tagged leg says what the
agent does up to the line.

## The ground as it stands

Two Findings that inventory every rule, table, opponent and the adventure,
and the parent game's answers; a Framing tightened by a challenge and an
exploration; two Decisions sealing seven rules and creation-as-advisory; a
Horizon challenged to three falsifiers. No code, no repository, no
authored line. The challenge moved the cost to where it is: the first
three months carry the engine, 72 effect records, the Oracle, the
adventure format and its first file, the campaign record, the village,
the rules panel and three builds; the sandbox quarter is smaller than it
looks. The estate's own project falsifier falls on **2026-09-25**: a Seed
must leave a record and be used outside it by then, and this record is
the estate's likeliest evidence.

## Ordering and dependencies

```
0 phase + seed (by 09-25) ──► 1 repository & engine package ──► 3 engine core ──► 4 effects & Oracle lines ──┐
                                        │                            │                                       │
                                        └──► 2 tables as data ───────┘                                       ▼
                                                                     5 format & the cave ──► 6 record & save ──► 8 UI ──► 10 THE CAVE PLAYED (12-05)
                                                                     7 village ─────────────────────────────────┘             │
                                                                     9 builds (accounts tagged) ────────────────┘             │
                                                                                                                              ▼
                                                        11 word-table lines ──► 12 sandbox procedures ──► 13 THE WHOLE SITTING (03-05)
```

Legs 1 and 2 begin together in September. Leg 9's pipeline goes up early
on the web target and proves itself on the fixture; the native targets
join when the accounts exist. Leg 10 is the beam: everything before it
is sized to reach it, and the sandbox quarter hangs from it.

## The legs

### 0. Phase and Seed (September, by the 25th)

`phase` decomposes this Trajectory into parts, sizing the effects and
the city first as the challenge asked. `seed` assembles Horizon,
Trajectory and Phases into the export with `payload: present` under the
`build-plan` contract, and it leaves for the new repository. An export
leaves the estate and waits for T's word. Done when the Seed is used
outside this repository, which is the estate passing its own test.

### 1. Repository and engine package (September)

A new repository, CC BY-SA 4.0 with attribution to Gianluca Monaco,
Cristian Cammarata, limofeus and watabou in its licence file. Expo and
React Native with TypeScript; three packages: `engine` (pure functions
over immutable state, dice as an injected source, no React), `content`
(data files), `app`. A test runner. Functional style, no classes,
per-function documentation from the lowest abstraction up. Creating the
repository is an act outside the estate and waits on T's word; the Seed
carries it. Depends on nothing.

### 2. Tables as data (September)

Every table in Findings §3 as a data file: 18 Martial Arts with
Proficiencies, 36 Techniques and 36 Rituals with cost, the Final Blow,
Unexpected Event, Deities and XP tables, the 36 hooks, region, route,
road, monastery, city services and encounters, the four Market lists,
the Oracle rows, Inspirations, the six Sparks tables, the encounter
matrix, Treasures, Special Items, 50 opponents, the eight presets as
printed. One schema; the build validates every file. Each row carries
its citation. Depends on leg 1.

### 3. Engine core (September to October)

Creation with rolled attributes, the pools checked and flagged, never
refused; SKILL and LUCK checks with the double-six fumble; Attack
Strength with one relevant Proficiency, the winner's four options,
Opening and Final Blow with doubles landing, the Final Blow LUCK
exception; Unexpected Events with Morale on the retreat rows; multiple
combat as one Master roll against each attacker up to ATTACK, ATTACK
inert against a lone Master; escape and Dishonor; healing with a night's
rest at +4; XP by band; the Oracle; encounters, treasures, Special
Items. Every behaviour tagged rule, reading or invention with its
citation; the `I-nn` ids as a list the save can carry. Tests over fixed
dice for every rule. Depends on legs 1 and 2.

### 4. Effects and Oracle lines (October)

The 72 effect records under the five classes, each a design decision
and each an authored line; the 66 Oracle cells and 11 Unexpected Events
with a line each. 149 lines, the ones the cave cannot be played without.
The agent drafts every line and its effect record; T reads them as the
game's voice, and may reserve any. Depends on leg 3.

### 5. Adventure format and The 5 Treasures (October to November)

The format, versioned and documented in the repository: areas with
description, event table, encounter table and gated hint; foes; loot;
treasures with effects; per-adventure flags; act markers; an ending
screen. The cave as its first file, from Findings §4: eight areas, nine
foes, five treasures, the key, the Monk as a rescue with Dishonor on
attack, day and night, Ogres absent by night, a fled King gone from his
tables. Depends on leg 3.

### 6. Campaign record and save (November)

One record per campaign: one Master, its deeds ledger, per-adventure
flags, passages, the reading ids. Continue or fresh start at each scene.
Export and import as versioned JSON with migrations keyed on reading
ids. The override count the challenge asked for, kept in the record.
Depends on legs 3 and 5.

### 7. The trail-head village (November)

A City on fixed data using the rulebook's city procedures: market with
the four price lists, temple with the Spirituality check for LUCK, inn
with meals and a night's rest. Labelled invention for its existence,
rule for its prices. Depends on leg 3.

### 8. The UI (November)

Creation in the book's order; the sheet with the overspend mark; the
menu-and-line beat with a free-text field on every beat; combat showing
both rolls and the difference; the rules panel with three labels; dice
with manual entry; the cave's areas and the village. `**[HUMAN
ATTENTION]**` on the **layout**: the agent proposes layouts rendered at
phone width and builds whatever T chooses; T's hands pick it. Depends
on legs 4 to 7.

### 9. Builds (pipeline in September; releases in November)

The web build first, on the fixture, so the pipeline is proven early.
Internal tracks for iOS and Android when the accounts exist. `**[HUMAN
ATTENTION]**` on the **accounts, the fees and the machine**: an Expo
account, an Apple developer membership, a Google Play console, and a
Mac for the iOS build are T's to own and pay for; the agent wires the
pipeline and names every credential and who supplies it. If the native
accounts are not in place by November, the shelved "installable web app
only" is the fallback and the milestone is played on the web build.
Depends on leg 1.

### 10. The cave played to its ending (by 2026-12-05)

`**[HUMAN ATTENTION]**`: T plays The 5 Treasures from creation to the
freeze-frame ending screen on the app, PDF closed, on a phone at least
once. The first falsifier is checked on this leg and on nothing else;
the record's override count is the stricter proof. The agent prepares
nothing here beyond fixing what T reports. Depends on legs 6, 8, 9.

### 11. Word-table lines (December to January)

The 72 Inspirations and 216 Sparks, a line each: 288 lines, after the
milestone by the challenge's order. If the count is short in March, the
fallback was taken and the record says so. Depends on leg 10 only in
time.

### 12. Sandbox procedures (December to February)

The region generator: seven points on a plane, nearest-neighbour links,
the parent's miles and route band on each link, positions declared
decorative on the screen; region columns rolled per the rule (R51) on
visit and per move, with the at-throw variant as a labelled reading.
Monastery generation on the same procedure with its own table. Road
features. The five encounter columns and the 36 hooks as menus. The
city procedures generalised from the village. A persistent Master
walking from the cave into the region, and a fresh one thrown into it.
Depends on legs 6, 10, 11.

### 13. The whole sitting (by 2027-03-05)

`**[HUMAN ATTENTION]**`: T throws a region, enters a location, resolves
an encounter, and the record carries all of it, on a phone, exported and
imported once. The second falsifier is checked here. On the day it
passes, the third falsifier's clock starts. Depends on leg 12.

## The first actionable step

Startable Monday, 2026-09-07, by an agent, in the new repository once T
gives the word for it: scaffold the `engine` package with the dice
interface and a fixed-dice test source; encode the creation tables
(attributes, social status and gold, the 18 Martial Arts with
Proficiencies, the Techniques and Rituals with costs) and the 50
opponents from Findings §3 as data files under one schema; implement
creation with the pools computed, checked and flagged. Done when the
schema validates every file, the eight presets load with Yin flagged,
and a Master rolls from fixture dice with the pools reported.

The Seed is what carries this Trajectory to that repository.

## Refusals this route carries

No accounts, login or sync; no multiplayer; no generated prose; no
money; no authoring tool; no credited art; no store listing before a
`decide`. Creation's pools advisory, everything else at creation
enforced. Every behaviour labelled.

## What is thin on purpose

Framework versions, the schema's shape, the SVG's look, the save's
migration mechanics, the three labels' appearance on a phone, the region
screen's geometry. `phase` sequences these into parts; `decide` settles
the ones that need sealing, the layout first.
