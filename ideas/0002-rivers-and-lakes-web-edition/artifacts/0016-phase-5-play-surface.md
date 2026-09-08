---
id: idea-0002/artifacts/0016-phase-5-play-surface.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0008-rivers-and-lakes-web-edition-trajectory.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0009-rivers-and-lakes-web-edition-horizon-dialogue.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0010-layout-decision-rpg-windows.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [phase, distill, challenge]
summary: "Phase 5, the play surface inside RPG Windows: the frame, the beat projection with its labels, the command window, Xiake creation as beats, the dice beat, the six sheet tabs, flags and the strike-or-Song choice, the ending, both modes, restart with export. The layout tag is discharged; no human-attention steps remain. Done when a fixture game runs from creation to an ending on laptop and phone widths."
---

# Phase 5 — The play surface

The Surveyor. The Trajectory's fifth leg, decomposed against a fixed
layout: T chose RPG Windows (Decision 0010), so the leg's human-attention
tag is discharged and every step below is a claim that an agent can do
it. The Horizon's dialogue exploration (0009) gives the beats; the
Decision gives the frame and its stylesheet.

**Outcome.** A game playable one beat at a time, the sheet behind six
tabs, in blue windows with white double borders.

**Waits on.** Phase 3 (the engine); Phase 4 (the table). Phase 6 joins
at 5.4.

**When.** November to December. Large enough to be phased again; the
steps are in shipping order and each is a slice.

## Steps

5.1 **The frame.** The Decision's stylesheet as the site's own: tab row,
HUD window, dialogue log left and command window right at laptop width,
stacked under the container query on a phone; ▶ cursor on the selected
tab and choice; yellow for speaker and selection. Pure view functions
over play state; no component holds state the save does not.

5.2 **The beat projection.** `beats(entry, sheet) → Beat[]`: the entry
whole and verbatim first, labelled *the book*; then each question
alone; then each mechanical instruction as a choice; then the Story;
then the dice. The split is at the book's own full stops. Every beat
after the first is labelled *the site's reading*. The label is a fixed
element of the window, not a colour: the "book" falsifier rests on it.

5.3 **The command window.** One beat's input at a time: a vertical menu
with ▶ for choices, the engine's pre-selected option lit, a text field
for questions and the Story, a form only for a player-judged selector
(Phase 4's choices) with the entry's words as the question. *Next* is
the full-width button. A choice is one cursor move and one press.

5.4 **Xiake creation as beats.** R41–R47 in the book's order: name (the
oracle roll from Phase 6 joins here, with the romanisation toggle),
the birth Story, three Tags and the first-reputation Story, three
Resources, at least three Characters with types, three trait Stories
into three new Legends. End state asserted against `creation`.

5.5 **The dice beat.** d10 and d6 rolled in the browser with the
difference shown; two integer fields for physical dice; the landing
resolved by Phase 3's movement; the roll logged.

5.6 **The dialogue log.** Beats accumulate; past beats dim; the current
one is last. The log is a view over the ledger; nothing is stored twice.

5.7 **The six tabs.** Game, Story, People, Things, Self, Arts as
placeholders T may rename. Each tab replaces the two game windows with
one window per section in the same frame; counts in the tab row; a
pulse when the last beat changed that tab. People grouped Righteous,
Evil, Ordinary. Struck traits shown struck through and readable. The
alternate identity as a folded second sheet under Self.

5.8 **Flags and the full-sheet choice.** Illegal states named with
their rule; the sixth Legend with nowhere to go offers strike or Song
as two menu items; substitution (R52) shown as the proposal it is.

5.9 **The ending.** `end` from Phase 3 renders as a beat: the reason,
the demise asked for, the sheet marked ended; later writing kept and
flagged post-ending.

5.10 **Two modes over one save.** Journaling: a passage beat before the
Story. Quick: the questions collapse into the single Story beat
(state 0009's open question 4, taken as the Forager's reading and
labelled in the readings register). The mode is chosen at creation and
switchable.

5.11 **Teaching lines.** The first time a beat touches a trait, one
line in the book's words says what it is, from a table of R04–R39
sentences.

5.12 **Restart and export.** Restart nudges an export first; export is
the whole save (sheet, journal, ledger, roll log) as one file. One game
per browser.

5.13 **Going back a beat.** Re-answer by replay (Phase 3's answer),
offered as *Back* in the command window; no undo stack. Labelled as a
reading.

## Done when

A fixture game runs from creation to an ending Prompt at laptop and
phone width in the e2e gate; every beat carries its label; every tab
shows the fixture's traits; the export round-trips through the schema.

## Cost

Five to seven loop ticks. If a tick cannot hold a step, `phase` this
Phase again; 5.4, 5.7 and 5.10 are the ones likely to split.

## Left open inside this Phase

- The prose face for Journaling passages inside the monospace frame
  (state 0009, question 8). Ship monospace; the Decision names what
  reopens it.
- Whether the tab names are final. Placeholders until T says.
- Whether an import of an exported save is "nothing added". The
  Horizon names export only; the Surveyor leaves import out and notes
  it for `challenge`.
