---
id: idea-0003/artifacts/0008-martial-havoc-mobile-edition-framing-explored.md
type: Framing
shape: prose
lenses: []
produced-by: explore
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0007-martial-havoc-mobile-edition-framing-challenged.md
date: 2026-09-05
classifiers:
  challenged: true
potential-next-steps: [decide, envision]
summary: "The challenged Framing explored with the operator live, question by question: the campaign record is Master plus a world-wide deeds ledger plus per-adventure flags, so a dead King is dead everywhere; the adventure format is public and documented, with no authoring tool; every table cell gets an authored line, the mechanical subset as fallback; Decisions 2 and 4 stand with their coupling recorded; the first release is text and SVG only, art later; the save is versioned JSON carrying the reading ids it was played under; every engine behaviour wears one of three labels, rule, reading or invention, shown in the rules panel; doubles rolls are non-checks and a double six lands. Sealing creation-as-advisory waits on decide."
---

# Framing, explored: Martial Havoc, mobile edition

The Forager, back from walking the challenged Framing with the operator
alongside. Same type in, sharper out: the problem underneath is unchanged
("A rules engine for Martial Havoc for a way to create multiple Wuxia
style dnd gameplay", the sandbox as the real game, adventures as scenes in
it), and the eight holes the Advocate left open now have the operator's
answer in them. The ninth, sealing creation-as-advisory and
never-corrected, is a `decide` and is not answered here.

Method, honestly: two rounds of parallel choices, each with a
recommendation. The operator picked against the recommendation once and
wrote their own answer once. Those two are marked. Everything the
challenged Framing revised stands; this version adds what was open and
touches nothing that held.

## The campaign record

**Master, deeds ledger, per-adventure flags.** Chosen with the
recommendation. Three parts:

- the Master's sheet, as the rulebook defines it, plus the overspend flag
  and the player's passages;
- a **world-wide deeds ledger** any scene can read: named foes killed,
  treasures held, NPCs rescued, Dishonor earned. A defeated Senior King
  is dead everywhere; the seven-star sword, once taken, is in the ledger
  and not in the next cave;
- **flags namespaced per adventure**: day and night, hints revealed,
  keys held, per-area state. An adventure reads and writes its own
  namespace and the ledger, never another adventure's flags.

Implication: the exploration's "small explicit world-state layer" is the
per-adventure namespace; the ledger is the new thing, and it is the
sandbox's first data structure, present from the first release.

## The adventure format

**Public and documented, no authoring tool.** Chosen with the
recommendation. The format is versioned and documented in the repository
under CC BY-SA; The 5 Treasures is its first file and its worked example.
Anyone with a text editor can write a cave. The cost the Advocate named
stands: until a tool exists, the operator is the only author in practice,
and "many games" are as many as get written.

## Authored lines

**Everything, with "mechanical subset first" as the fallback.** Chosen
**against** the recommendation (word tables shown as words). *Load-bearing.*
Every cell of the Oracle (66), every Unexpected Event (11), every
Inspiration (72), every Spark (216) and every Technique and Ritual effect
(72) gets an authored line; roughly 440 lines before the adventure and the
village. If the count proves too high, the 64 narrative effects fall back
to a uniform "pay the cost, gain an Opening or an escape" and the word
tables to bare words; the fallback is named now so that taking it later
is a scope decision, not a retreat.

Implication: the authored lines are content, licensed CC BY-SA with the
rest, and the largest single writing task in the first release. `phase`
should size it.

## Decisions 2 and 4

**Both stand; the coupling is recorded here and on the Decision's
successor.** Chosen with the recommendation. The Final Blow LUCK roll
loses 1 LUCK on failure only, and a double six fumbles every check; at
LUCK 12 the fumble is the only cost on learning a Technique (35 in 36
free). The operator kept both with that in view. A later reopening treats
them as one.

## Art

**"Text and svg only for now. Art later."** The operator's own words,
written in place of the offered options. The first release reuses none of
the credited art: no Cammarata plates, no limofeus icons, no watabou map.
The cave is a room list or an original SVG; icons are the app's own. No
provenance question ships, and no AI disclosure is inherited. Art is a
later `decide`, with the terms question still open when it comes.

## The save file

**Versioned JSON carrying the reading ids it was played under.** Chosen
with the recommendation. One file: format version, the campaign record in
full, and the list of `I-nn` readings and Decision ids active when it was
saved. Reversing a reading later is a migration of recorded state, not a
retcon. Export and import are the offline app's only backup and are in
the first release.

## Labels

**Three: rule, reading, invention; shown in the rules panel.** Chosen with
the recommendation. Every engine behaviour carries exactly one, with a
citation (a page, an `I-nn` id, a Decision, or the content file that
invented it). The village, the Monk's Dishonor, night Ogres, the fumble
and most of the 72 effect records are inventions and say so.

## The fumble's scope

**Doubles rolls are non-checks; a double six lands.** Chosen with the
recommendation. The Final Blow (R30) and Chaguan (R63) doubles rolls are
named as neither checks nor comparisons; 6-6 lands a Final Blow as any
double does. The fumble touches SKILL and LUCK checks only. The LUCK roll
that follows a landed Final Blow is a check and can fumble.

## What the exploration did not settle

- Sealing creation-as-advisory and never-corrected, with the overspend
  flag's persistence on the campaign record: a `decide`, and the next
  verb the Forager proposes.
- The dates on the two falsifiers the challenge split (the milestone's
  and the sandbox's): `envision`'s.
- The sandbox's region generator, still owed beyond the first release;
  the parent's distance rule is its one non-invented piece.
- The screen layout, the store listing, and how "rule / reading /
  invention" reads on a phone without becoming noise.
- Which two treasures the Chieftain's sheets explain; storage and display
  of passages beyond "kept in the record"; promotion to `reference/`.
