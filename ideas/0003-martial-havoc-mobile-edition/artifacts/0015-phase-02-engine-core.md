---
id: idea-0003/artifacts/0015-phase-02-engine-core.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0012-martial-havoc-mobile-edition-trajectory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [seed]
summary: "Every rule of play as pure functions over immutable state: checks with the double-six fumble, Attack Strength and the winner's options, Opening and Final Blow with the LUCK exception, Unexpected Events with Morale on retreat rows, multiple combat with ATTACK inert against a lone Master, escape and Dishonor, healing with a night's rest, XP by band, the Oracle, encounters, treasures, Special Items; every behaviour labelled with a citation and the reading ids as a list."
---

# Phase 2 — Engine core

**Outcome.** The rulebook runs.

**Depends on.** Phase 1.

**Steps.**
1. SKILL and LUCK checks: 2d6 at or under threshold; LUCK −1 after every
   LUCK check; a double six fails every check; doubles rolls (Final Blow,
   Chaguan) are non-checks and a double six lands.
2. Combat round: Attack Strength with exactly one relevant Proficiency;
   the winner's four options; Opening; Final Blow on doubles; the new
   Technique roll against LUCK with −1 on failure only; a tie is an
   Unexpected Event and ends the combat phase.
3. Unexpected Events 2–12 with the `I-30` minimum effects; rows 4 and 10
   roll the parent's Morale table (flee, cautious retreat, rally +1d6).
4. Multiple combat: SKILL reduced by headcount; one Master roll against
   each attacker up to ATTACK; ATTACK inert against a lone Master;
   headcount from the narrative or *No. of enemies*.
5. Escape with the −2 blow and Dishonor; healing (+4 by technique,
   regeneration, meal, elixir, or a night's rest; full by a week); XP
   by SKILL band with caps; spirits immune to ordinary blows per `I-29`.
6. The Oracle rows, Inspirations, Sparks as rollable tables; encounters
   by column; the Treasure roll; Special Items with the `I-44`/`I-46`
   readings.
7. Labels: every behaviour exports `{label: rule|reading|invention,
   cite}`; the reading ids as a list the save carries. A verify leg
   fails the build if any behaviour lacks a label.
8. Tests with fixed dice for every rule, including the coupling at LUCK
   12 (35 in 36 free) as a documented expectation.

**Done looks like.** Every rule in Findings §2 has a test; the label
leg is green; a scripted fight from the fixture resolves end to end.

**Cost.** Three to four weeks. The beam's heaviest span.
