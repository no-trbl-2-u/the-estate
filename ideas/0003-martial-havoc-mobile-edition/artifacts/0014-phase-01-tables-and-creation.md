---
id: idea-0003/artifacts/0014-phase-01-tables-and-creation.md
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
summary: "Every table of the rulebook and the adventure as validated data files with citations; the engine's dice interface and Master creation with the pools computed, checked, flagged and never refused; the eight presets loading as printed with Yin flagged. The Trajectory's first actionable step."
---

# Phase 1 — Tables as data, and creation

**Outcome.** The book is data, and a Master can be rolled.

**Depends on.** Phase 0.

**Steps.**
1. One JSON Schema for table files; every row carries `cite` (page or
   adventure page) and a `label` of `rule`.
2. Encode from Findings §3: attributes and social status, the 18
   Martial Arts with Proficiencies, 36 Techniques and 36 Rituals with
   pinyin and cost, the Final Blow, Unexpected Event, Deities and XP
   tables, the 36 hooks, region, route, road, monastery, city services,
   city encounters, the four Market lists, the Oracle rows, Inspirations,
   the six Sparks tables, the encounter matrix, Treasures, Special Items,
   the 50 opponents, the eight presets as printed.
3. The dice interface: a source of integers; a fixed-sequence source for
   tests; an in-app roller and a manual-entry source for the UI later.
4. Creation: roll SKILL, ENDURANCE, LUCK; choose one Martial Art; social
   status and gold; Training deduction; compute the pools from rolled
   SKILL; check spends; flag overspend with the numbers; never refuse;
   attributes are not typeable. The starting kit per the book.
5. Tests: every table validates; every preset loads; Yin loads flagged
   (10 of 9 Proficiency points, 12 of 8 resource points); a Master rolls
   from fixture dice with the pools reported.

**Done looks like.** The schema validates every file; the presets load
with Yin flagged; the creation test passes on fixed dice.

**Cost.** One to two weeks; transcription-priced because the Findings
did the reading.
