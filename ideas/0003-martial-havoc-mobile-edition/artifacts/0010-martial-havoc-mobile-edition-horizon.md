---
id: idea-0003/artifacts/0010-martial-havoc-mobile-edition-horizon.md
type: Horizon
shape: prose
lenses: []
produced-by: envision
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0008-martial-havoc-mobile-edition-framing-explored.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0009-creation-advisory-decision.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0002-rules-tables-opponents-adventure-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
  horizon: falsifiable
potential-next-steps: [challenge, chart]
summary: "Six months out, 2027-03-05: the operator's second Master walks out of the Lotus Flower cave into a region the engine threw as dice on a plane, on a phone, PDF closed; the campaign record holds a dead King and a living one; every rule wears its label. The milestone falsifier is dated 2026-12-05; the sandbox's own falsifier, the operator's sentence, is stated and left undated by the operator's word. The sandbox playable by March is the operator's claim against the Architect's recommendation."
---

# Horizon: Martial Havoc, mobile edition, on 2027-03-05

The Architect, drawing the thing working. Six months from the Framing.
Told from inside, in the present tense of that day. Where the operator's
word set the picture against the Architect's recommendation it says so,
because `challenge` should know where the operator leaned.

## A sitting

It is an evening in March. The operator opens the app on a phone. It was
installed from an internal track, not a store; the web build is a
bookmark on the laptop with the same save imported. No network request
happens after the install, because the engine, the content, the rules
panel and the adventure files are one bundle.

The campaign record opens where it was left. The first Master, Wei, a
Long Weapons Master rolled in October, is in the deeds ledger: dead in
the Dining Hall on the second attempt at the Kings, on a night when the
gourd had been opened and the Ogres were out hunting. The second Master
is Beggar So, chosen from the eight presets, his sheet as printed and a
small mark beside his Proficiencies: *overspent at creation, 12 of 8
resource points; allowed*. He finished The 5 Treasures in January. The
ledger says Senior King Golden Horn is dead everywhere, Junior King
Silver Horn fled on a Morale 4, the Old Vixen was Kind and taught the
cord's spell, the Monk was rescued, and the seven-star sword and the
Plantain fan are in Beggar So's pack. The Dazzling Golden Cord is inert
in the ledger until its spell is known; it is known.

Tonight Beggar So is not in the cave. He is on a plain two days' walk
from the trail-head village, in a region the engine threw in February:
seven dice on a plane, each rolled for Location, Landmark, Resources,
Risk and Event from the rulebook's table, distances by the parent's rule
(the sum of two dice in miles, the route band from Nothing to Paved
road). The region screen shows it as an SVG: circles, a line for the
route, the village at the centre. The app labels the scatter *invention*
and cites the Findings row that says why. The operator taps the Monastery
landmark. A monastery generates room by room as it is entered, from the
rulebook's monastery table. Event roll: Encounter. Encounter column:
Monastery. 2d6: Shi Di. Oracle, creature reaction: Territorial. The
menu offers what the rules allow: talk, fight, leave, use a Technique;
beside it, a text field for what Beggar So says. The operator writes two
lines. They are kept.

The fight is three rounds. The Attack Strength comparison shows both
rolls, the Proficiency each side added, and the difference. Round two is
a tie: an Unexpected Event, 2d6, a 4, *enemy retreat*, Morale 1d6, a 2,
the Shi Di flees. The panel beside the roll says *from Heroic Havoc* on
the Morale line and *rule, p. 27* on the Unexpected Event. Nothing was
refused; nothing was invented silently.

## The engine

A TypeScript package with no dependency on React. Pure functions over an
immutable game state; dice are an injected source, so the test suite
plays every rule with fixed rolls and the sandbox with a seeded scatter.
Master creation computes the pools, flags overspend and allows it, rolls
attributes and refuses to let them be typed. Combat, multiple combat
with one Master roll against each attacker up to ATTACK, escape and
Dishonor, healing including a night's rest at +4, XP by the SKILL band,
the market, the Oracle with Inspirations and Sparks, encounters,
treasures, Special Items, 50 opponents, 18 Martial Arts, 72 effect
records under five classes. A double six fumbles every check and lands
every doubles roll. Every function documented from the lowest up.

Every behaviour carries one of three labels with a citation: *rule* (a
page), *reading* (an `I-nn` id), *invention* (a Decision or a content
file). The rules panel lists them all, filterable, and the campaign
record stores the ids active when each save was written. Reversing a
reading in February migrated three saves and said so.

## The content

Four kinds of file, all CC BY-SA, all in the public repository:

- **The rulebook's tables as data**, every cell, with an authored line
  each: 66 Oracle cells, 11 Unexpected Events, 72 Inspirations, 216
  Sparks, 72 effects. The operator wrote them between October and
  December, the effects first. The fallback (mechanical subset, word
  tables as words) was never taken.
- **The 5 Treasures** as the first adventure file in the documented
  format: eight areas, the event table, encounter tables, nine foes,
  hints gated until earned, the key, the treasures, per-adventure flags,
  act markers and a freeze-frame ending screen.
- **The trail-head village**, as a City on fixed data: market, temple,
  inn, using the rulebook's own city procedures and price lists, labelled
  *invention* for its existence and *rule* for its prices.
- **The sandbox tables**: region, route, road features, monastery, the
  five encounter columns, the 36 hooks. And the region generator, which
  is the one thing the book never wrote as a procedure a machine can run.

No art. Text and SVG only, by the operator's word. The cave is a room
list and an original SVG; the credited plates, icons and map are not in
the bundle.

## The campaign record and the save

One record per campaign: the Master, the deeds ledger, per-adventure
flags, the player's passages, the reading ids. Opening a scene asks:
continue with this Master, or start fresh. Both work; a fresh start opens
a second campaign record beside the first. Export writes one versioned
JSON file; import reads it and runs migrations if the reading ids differ.
The operator moved a campaign from phone to laptop in January and back.

## What it is not

No account, no server, no sync. No multiplayer. No generated prose. No
money. No authoring tool, so every adventure file in the repository is
the operator's. No store listing yet; the internal track and the web
build are the whole distribution.

## The claim the operator made against the recommendation

The Architect recommended a March in which the cave release has been
played and the sandbox has begun. The operator said: **the sandbox is
playable**. This Horizon draws that. The cost, stated: roughly 440
authored lines, the engine, two content files, the campaign record, the
format, and a region generator that is an invention, in six months, by
one builder. If March arrives with the cave done and the sandbox begun,
this Horizon is wrong in its picture and right in its direction, and the
record will say which.

## What would make this wrong

1. **The engine is proven by the cave.** Checked on **2026-12-05**, three
   months out, by the operator's word. Proven if the operator has played
   The 5 Treasures through in the app with the PDF closed and never had
   to open it. Falsified if, finishing the cave with a living Master, the
   operator has nowhere to take them and stops. Evidence on that date: a
   campaign record whose ledger holds a defeated or fled King, and a
   second scene opened or not.
2. **The sandbox is the real game.** Falsified by the operator's own
   sentence: **"if I stop playing it myself"**, checked once a sandbox
   exists. The operator left this **undated** by their word, though the
   picture above puts a playable sandbox on 2027-03-05. The Architect
   records the gap rather than closing it: a Horizon that draws a
   playable sandbox in March and dates no test of it is exactly what
   `challenge` should press. This Horizon is `falsifiable` on the first
   falsifier alone.

A third, for the record: the estate's own falsifier in
`system/FALSIFIERS.md` names building over using as the failure mode.
This Horizon does not answer for that; the Trajectory must, and the
milestone date is where it will show.
