---
id: idea-0002/artifacts/0014-phase-3-engine-core.md
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
potential-next-steps: [distill, challenge]
summary: "Phase 3, the engine core: the sheet as immutable data, the 64 rules as pure operations in seven groups, the propose/apply/flag/end model with a ledger, a readings register that labels every rule the book left open, and the twenty book-undefined operations as functions. No human-attention steps. Done when every enforceable rule has a test over the fixture and the readings register is complete."
---

# Phase 3 — Engine core

The Surveyor. The Trajectory's third leg. All of it is agent work; the
Findings did the reading.

**Outcome.** A rules engine that is data in, data out: a sheet, a
proposal, a new sheet, a ledger entry. It proposes, applies what is
confirmed, flags what the rules call illegal, and declares the end. It
never refuses.

**Waits on.** Phase 1 (types from the schema); Phase 2 (module layout
and lints).

**When.** October.

## Steps

3.1 **The sheet as data.** Types from Findings §3, exactly: Xiake with
`legends[5]`, `songs[0..4]`, `tags`, `resources`, `techniques`,
`characters`, `scars`, `alternate_identity?`; every trait with `struck`
kept readable (R06); Story with `prompt_ref`; Technique `acquired`
derived, never stored (I-5); Character `struck` and dead not the same
field (§5 G); the inferred fields (`polarity`, `theme`, `stationary`,
`on_person`, `lock`, `relationship`, `created_order`) present and
optional. Play state per §3.8. A `readonly` type for all of it and a
frozen fixture sheet.

3.2 **The proposal model.** A `Proposal` is an operation from the table
grammar bound to concrete targets; `propose(sheet, entry) →
Proposal[]` with the obvious target pre-selected where the sheet leaves
one candidate; `apply(sheet, proposal) → { sheet, ledger }`; `flag(sheet)
→ Flag[]` naming each rule an illegal state breaks; `end(sheet, entry)
→ EndReason?`. Every function is pure and documented with the rule it
implements. The ledger records proposed, applied, and whether a choice
was the player's.

3.3 **Movement and landing.** R49, R50, R61, R62 and the inferred I-1
to I-4: the roll, the clamp at Prompt 1, visit counting on every
landing including zero and clamp, entry selection by visit, the fourth
landing skipping forward, and the skip chain continuing over exhausted
Prompts (I-2, a reading).

3.4 **Trait operations, one group per trait.** Tags (R18–R20, check
once, strike); Resources (R22–R24, strike, unstrike, stationary,
lock); Techniques (R30–R37, boxes, check, acquire, uncheck, use, lose,
create-unchecked-when-none R33); Characters (R25–R29, create-if-none
R26, retype, strike, unstrike, description append); Scars (R39,
remove 58B); Legends, Stories and Songs (R08–R16: the Story joins or
opens, the full-sheet choice of strike-or-Song R12, the Song's freeze
R15, the write-lock on Legends outside instructions R13, the Story
overrides of 36B/41B/44B).

3.5 **Substitution and game over.** R52 both directions and never for
other traits; R53 and R54 as `end` reasons; the ending Prompts 72–80;
the post-ending mark that keeps and flags later writing.

3.6 **The twenty undefined operations** (Findings §4.6) as named
functions, each citing the entry that demanded it: unstrike, retype and
merge, convert Character to Resource (34C), uncheck and acquire
outright, lose strongest or first-learned, remove Scar, replace and
edit Legend, edit Song nouns, Song with no parent Legend (46B), the
three Story overrides, the whole-sheet operations (21A/21C alternate
identity, 58A, 41A, 54B, 1A/70A), and the two locks (35A, 68C).

3.7 **The readings register.** A data file of every rule the book left
open that the engine had to answer, each with the reading taken, the
rejected reading, and the citation, and a `label(reading)` the UI shows
wherever the reading acts. Entries known now: I-2 skip chains; I-3
landings; §5 C Evil/Righteous Technique as Unorthodox/Orthodox; §5 D
using a Technique with none Acquired (page 15 against page 20); 21A's
alternate identity against the five slots; 46B's parentless Song
against the four; 71B "opposites". The Horizon's "three labelled
readings" is a floor, not a count.

3.8 **Tests.** One per rule row marked `yes` or `partly` in Findings §2,
over the fixture sheet; one per undefined operation; one per reading
showing the labelled behaviour and the rejected one failing.

## Done when

Every `yes`/`partly` rule has a passing test; the readings register has
no entry without a citation; `propose`, `apply`, `flag`, `end` are pure
under the lint; the fixture's first ten entries run end to end.

## Cost

Two to three loop ticks; the trait groups can ship as separate slices.

## Left open inside this Phase

- Going back a beat (state 0009, question 3). The engine's shape
  answers half of it: a sheet is immutable and the ledger holds every
  proposal, so "back" is a re-answer by replaying the ledger to the
  beat before. Whether the UI also offers undo is Phase 5's.
- 21A and 46B against the slot limits (question 7): taken as readings in
  3.7, labelled, reversible by `decide`.
