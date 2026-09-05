---
id: idea-0003/artifacts/0018-phase-05-campaign-record-and-save.md
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
summary: "One record per campaign: one Master, its deeds ledger, per-adventure flags, passages and the reading ids; continue or fresh start at each scene; export and import as versioned JSON with migrations keyed on reading ids; the override count for the milestone proof."
---

# Phase 5 — The campaign record and the save

**Outcome.** A Master and their world persist, and can leave the phone
as a file.

**Depends on.** Phases 2 and 4.

**Steps.**
1. The record: Master (with the overspend mark), deeds ledger (named
   foes killed or fled, treasures held, NPCs rescued, Dishonor), flags
   namespaced per adventure, passages, reading ids, the override count.
2. Opening a scene: continue with the living Master, or start fresh as a
   new campaign record; the world dies with the Master by T's word.
3. Export and import: versioned JSON; migrations run when the reading
   ids differ; the file is the offline app's only backup.
4. Tests: round-trip a record; migrate a record across a reversed
   reading; the ledger removes a dead King from every table.

**Done looks like.** A record survives export, import and one migration
in tests; the override count increments on a manual entry that is not
dice.

**Cost.** One to two weeks.
