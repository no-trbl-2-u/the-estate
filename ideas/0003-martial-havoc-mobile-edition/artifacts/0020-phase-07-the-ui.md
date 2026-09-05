---
id: idea-0003/artifacts/0020-phase-07-the-ui.md
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
summary: "Creation in the book's order; the sheet with the overspend mark; the menu-and-line beat with a free-text field on every beat; combat showing both rolls and the difference; the rules panel with three labels; dice with manual entry; the cave's areas and the village. Layout is T's hands."
---

# Phase 7 — The UI

**Outcome.** The engine can be played on a phone.

**Depends on.** Phases 3, 4, 5, 6.

**Steps.**
1. `**[HUMAN ATTENTION]**` **Layout.** The agent renders three layouts
   at phone width with a working beat and files them; T's hands pick
   one; the agent builds it. This is the open `decide` the record
   carries.
2. Creation screen in the book's order, presets offered, overspend
   shown.
3. The beat: authored line, menu of what the rules allow, a free-text
   field always present and never required; passages kept.
4. Combat: both rolls, Proficiency each side, the difference; the
   winner's options as a menu; Unexpected Events and Morale shown with
   their labels.
5. The rules panel: every behaviour with its label and citation,
   filterable.
6. Dice: in-app roll by default, manual entry beside it; the manual
   count feeds the override count only when used for something other
   than dice.
7. The cave's areas, the village, the campaign record screen with
   export and import.
8. Playwright on the web export: creation to the first fight.

**Done looks like.** A Playwright run creates a Master and wins a fight
on the web export; the layout Decision is sealed on the record.

**Cost.** Three weeks after the layout is picked.
