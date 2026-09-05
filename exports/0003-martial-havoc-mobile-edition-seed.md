---
id: exports/0003-martial-havoc-mobile-edition-seed.md
type: Seed
shape: prose
lenses: []
produced-by: seed
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0011-martial-havoc-mobile-edition-horizon-challenged.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0012-martial-havoc-mobile-edition-trajectory.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0013-phase-00-garden.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0014-phase-01-tables-and-creation.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0015-phase-02-engine-core.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0016-phase-03-effects-and-oracle-lines.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0017-phase-04-format-and-the-cave.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0018-phase-05-campaign-record-and-save.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0019-phase-06-the-village.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0020-phase-07-the-ui.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0021-phase-08-web-release.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0022-phase-09-the-cave-played.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0023-phase-10-word-table-lines.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0024-phase-11-sandbox-procedures.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0025-phase-12-native-builds.md
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0026-phase-13-the-whole-sitting.md
date: 2026-09-05
origin: "idea-0003 @ state/0013"
contract: build-plan
target: nexus
supersedes: ""
payload: 0003-martial-havoc-mobile-edition-payload/
classifiers:
  horizon: falsifiable
  trajectory: actionable
  challenged: true
  payload: present
audience: "a coding agent running the Nexus loop in no-trbl-2-u/martial-havoc"
summary: "A rules engine for Martial Havoc for many wuxia campaigns; the sandbox is the real game, The 5 Treasures the first scene. build-plan for nexus: fourteen phases from a garden to the whole sitting by 2027-03-05, the cave played by 2026-12-05. Payload present."
---

# Seed: Martial Havoc, mobile edition

The Sower, sending the idea beyond the walls. Contract `build-plan`,
target `nexus`, provenance `idea-0003 @ state/0013`. The payload beside
this document is the droppable form; this document is complete without
it and says nothing the recipient's loop needs to run.

## Horizon

A rules engine for Martial Havoc, Gianluca Monaco's rule-light d6 solo
wuxia RPG, made to run so that many wuxia campaigns can be played on it.
The sandbox is the real game; adventures are scenes in it, and The 5
Treasures is the first. On 2027-03-05, working: the operator's second
Master walks out of the Lotus Flower cave into a region the engine threw
as dice on a plane, on a phone, PDF closed. The campaign record holds one
Master, a deeds ledger, per-adventure flags, the player's passages and
the reading ids it was played under; a dead King is dead everywhere in
that campaign; the world dies with the Master. Every engine behaviour
wears one of three labels, rule, reading or invention, with a citation,
in a rules panel. About 440 authored lines: every table cell, every
Technique and Ritual effect. Text and SVG only, art later. Distribution
is a web build on Cloudflare and, when the accounts exist, internal
tracks on iOS and Android. Offline; no account; export and import of the
campaign record as versioned JSON.

**What would make this wrong:**

1. The engine is proven by the cave, checked on **2026-12-05**. Evidence:
   a campaign record whose cave reached the freeze-frame ending screen,
   played in the app with the PDF closed; stricter, the record's override
   count shows no manual entry used for anything but dice. Falsified if
   no such record exists on that day, whatever the reason.
2. The picture holds on **2027-03-05**. Evidence: the whole sitting, a
   region thrown, a location entered, an encounter resolved, the record
   carrying all of it, on a phone, exported and imported once. Falsified
   if any part cannot be performed on the day.
3. The sandbox is the real game. Falsified by the operator's own
   sentence, "if I stop playing it myself", checked at every session
   close after falsifier 2 passes; undated by calendar by the operator's
   word.

## Trajectory

Thirteen legs hung from the December milestone. September: repository
and engine package; every table as validated data; the engine core.
October: the 72 effect records and the Oracle lines. October to
November: the adventure format and the cave; the campaign record and
save; the village; the UI; the web release. By 2026-12-05: the cave
played to its ending. December to February: the word-table lines; the
sandbox procedures; native builds when the accounts exist. By
2027-03-05: the whole sitting. The estate's own date, 2026-09-25, is met
by this export.

## First actionable step

In `no-trbl-2-u/martial-havoc`, after the garden: scaffold the `engine`
package with the dice interface and a fixed-dice test source; encode the
creation tables (attributes, social status and gold, the 18 Martial Arts
with Proficiencies, the Techniques and Rituals with costs) and the 50
opponents as data files under one schema; implement creation with the
pools computed, checked and flagged, never refused. Done when the schema
validates every file, the eight presets load with Yin flagged, and a
Master rolls from fixture dice with the pools reported.

## Refusals

- **No accounts, login or cloud sync.** Offline; the device holds the
  save; the exported file is the only backup.
- **No multiplayer.** The book is solo; the game stays solo.
- **No generated prose.** No model, external or on-device, writes
  narration; authored lines and the player's own words only.
- **No monetisation.** No ads, purchases or paid tiers; the whole
  repository is CC BY-SA 4.0.
- **No authoring tool.** The adventure format is public and documented;
  a tool to write it is not in scope.
- **No credited art.** Text and SVG only until a later decision; none of
  the rulebook's or adventure's art ships.
- **No store listing** before a decision the operator makes.
- **Creation's pools are advisory; everything else at creation is
  enforced.** The engine flags overspend and never refuses; attributes
  are rolled, not typed; the author's eight presets ship as printed.
- **Every behaviour is labelled.** Rule, reading or invention, with a
  citation; a build with an unlabelled behaviour is red.

## Acceptance criteria

- [ ] `npm run verify` (typecheck, Vitest, Expo web export, Playwright
      smoke) is green at HEAD; `npm run deploy:check` is green against
      Cloudflare.
- [ ] Every table in the rulebook and the adventure validates against
      one schema and carries a citation.
- [ ] Every rule in the record's inventory has a fixed-dice test; the
      label leg fails the build on an unlabelled behaviour.
- [ ] The eight presets load as printed; Yin loads flagged.
- [ ] A scripted Master reaches the cave's ending screen on fixed dice.
- [ ] A campaign record round-trips export and import and survives one
      migration across a reversed reading.
- [ ] The shipped authored-line count is printed by the build; 437 is
      the full count, and a smaller number names the fallback.
- [ ] By 2026-12-05, the operator's campaign record shows the ending
      screen reached with the PDF closed.
- [ ] By 2027-03-05, a region throws, a location is entered, an
      encounter resolves, and the record carries it, on a phone.

## Payload

`exports/0003-martial-havoc-mobile-edition-payload/`, the droppable
form, in the kit's own shape: `README.md` (how to drop it in, pinned to
kit tag `v0.2-estate`), `spec.md` (this Horizon, the refusals, the
acceptance criteria, the provenance), `nexus.adopt.json` (project
identity), `plan/bearings.md` (stack locked, refusals as standing
decisions, the gates), `plan/steps/01_build_plan.md` (the Status block,
garden first, fourteen phases), `plan/phases/phase_1_bootstrap.md` (the
garden's brief). Dropping it in means: copy this directory to the root
of `no-trbl-2-u/martial-havoc`, run one adopt command, paste the kit's
Seed-payload prompt, then `/ship-a-phase`. The loop is fetched by the
command and leaves no source behind.
