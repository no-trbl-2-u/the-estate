---
id: idea-0002/artifacts/0017-phase-6-oracles.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0008-rivers-and-lakes-web-edition-trajectory.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0002-rules-prompts-oracles-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [distill]
summary: "Phase 6, the oracles: the 84 tables transcribed from the oracles PDF into the private oracle file with typos preserved and the Mandarin half labelled unproof-read, a roller for lookup, banded and composition tables, the two-column Verb reading labelled, results inserted into the field being filled, the romanisation toggle at creation. No human-attention steps. Done when every table rolls and every band covers its die."
---

# Phase 6 — Oracles

The Surveyor. The Trajectory's sixth leg. The transcription is agent
work over T's private file, as the Prompt conversion was; the book's
contents are not in the estate and do not enter the public repository.

**Outcome.** Every oracle table rollable with a tap, in either
romanisation, dropping its result where it is needed.

**Waits on.** Phase 1 (the oracle file shape). Joins Phase 5 at Xiake
creation.

**When.** November, in parallel with Phase 4's later batches.

## Steps

6.1 **Transcription.** The 42 tables per half from Findings §6 into the
private oracle YAML, Cantonese then Mandarin, same ids: entries, bands,
notes and the five composition procedures. Typos and unusual
romanisations kept as printed (Findings §8); the Mandarin set carries
`proofread: false` and the site labels it so. Done in two ticks, one
per half, validated by Phase 1's schema.

6.2 **The roller.** Pure: `roll(table, dice) → Entry`, over d6, d10,
d100 and banded d100 (Ordinary Character Role's 98–100 *Roll Twice*
recursing; the Technique table's uneven bands as printed).
`compose(procedure, rolls) → string` for the five procedures, honouring
"either a prefix or a suffix" and "either a verb or a descriptor".

6.3 **Band coverage tests.** For every table: bands cover 1..die with
no gap and no overlap, entry count matches §6, both halves have the
same ids and dice.

6.4 **The Verb table reading.** Page 16's two unnumbered columns rolled
as d10 then a labelled choice of column, recorded in Phase 3's readings
register with the rejected reading (twenty entries).

6.5 **Insertion.** An oracle button beside any field a beat fills
(name, Character, Resource, Technique, location); the result lands in
the field, editable; the roll goes to the roll log.

6.6 **The romanisation toggle** at Xiake creation, stored in the save,
switchable later; the Mandarin label shown at the toggle.

## Done when

All 84 tables roll in the fixture build with the three fixture tables
and in the private build with all; band tests green; a name is
generated at creation by the composition procedure.

## Cost

Three loop ticks: two of transcription, one of roller and insertion.

## Left open inside this Phase

- Proof-reading the Mandarin romanisations needs a reader of them;
  not a step, not a tag, the label carries it until someone does.
