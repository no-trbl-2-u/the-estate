---
id: idea-0002/artifacts/0004-rivers-and-lakes-web-edition-framing.md
type: Framing
shape: prose
lenses: []
produced-by: frame
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0003-rivers-and-lakes-web-edition-spark-explored.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0002-rules-prompts-oracles-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [challenge, envision]
summary: "The book, playable, for anyone: a PDF and two dice are a barrier, and the site is Rivers and Lakes itself in a browser, as faithful as its author's terms allow. Scope is the whole game with an advisory engine and a link-carried share page; out are accounts, native apps and other games. The interesting tension: to be the book it needs the author's text, and to play the book it must define what the author left to the player."
---

# Framing: Rivers and Lakes, web edition

The Gardener, giving the explored Spark its first shape. The operator was
live; the framing below was offered as three candidates and argued to this
one. Where the operator chose against the Gardener's recommendation it is
said so, because a stranger working from this document should know where
the operator's weight is.

## The problem underneath

**A PDF and two dice are a barrier to a game that is otherwise a notebook.**
Rivers and Lakes is played by reading a Prompt, writing a sentence, and
keeping a sheet of Legends, Tags, Resources, Techniques, Characters and
Scars honest under rules that move traits between checked, struck and
restored. The book is the only edition. To play it you hold a 136-page PDF
open at the Prompt pages, roll physical dice, and keep the sheet by hand.

The operator's answer to "what is this really about" was **the book,
playable, for anyone**: access. Not primarily "the sheet keeps itself so I
keep writing" (the Gardener's recommendation, which survives as the
mechanism), and not "a legacy that outlives the notebook" (which survives
as the share page). The site is Rivers and Lakes itself, in a browser, as
faithful as the licence allows.

The question this record works on is therefore: **can the book be made
playable in a browser without ceasing to be the book?** Two things
threaten that. The text belongs to its author, and no terms for it exist
in the sources (Findings §7). And the book's rules chapter is a small,
closed engine while its Prompts demand roughly twenty operations the
chapter never defines (Findings §4.6), so a site that plays the book must
decide things the book left to the player.

## Who it is for

- **Anyone who wants to play Rivers and Lakes**, on a laptop or a phone,
  without a PDF and dice. This is the framing's audience.
- **The operator first.** Publishing waits on terms; private play does
  not. The record's falsifier is personal: the operator named "if I stop
  playing it myself" as what would make them abandon the idea once it
  worked. A tool for anyone whose first test is one player.
- **Wym Lawson**, whose text it is, is not the audience but the gate. The
  shape of the ask is deliberately open until there is something to show.

## In scope

- The whole game: Xiake creation, the 80 Prompts with their entries
  verbatim, d10 − d6 movement with visit counting, the six traits plus
  Songs, the game-over conditions, both play modes switchable at any time.
- An **advisory rules engine**: it reads the landed entry's instructions as
  proposed sheet changes, applies what the player confirms, flags illegal
  states, and never refuses. Every operation the Prompts demand and the
  rules never define is a named engine operation citing the Prompt that
  demands it. Player-judged selectors are player choices.
- Readings the book leaves open, taken for the engine and labelled as
  readings: two Technique axes (type and reputation); both readings of
  "use a Technique with none Acquired" offered; zero rolls and clamps to
  Prompt 1 count as landings.
- Dice rolled in the browser by default, with manual entry for physical
  dice. The engine sees two integers.
- The oracle tables, rolled in-site with results inserted into the field
  being filled.
- Local-first: no account, no server; the file is the save; export to a
  file.
- A read-only share page for a Xiake's Legends and Songs, payload carried
  in the link, rendered by the same static site.
- A website that works on a phone.
- Meanwhile: built fully and shipped nowhere public, with the author's text
  loaded from a file the operator owns and kept out of the repository.

## Out of scope

Stated by the operator as certain:

- Accounts, login, cloud sync.
- Native mobile apps.
- Other games in the Thousand Year Old Vampire family. One game; the
  engine is not a platform.

Not excluded by the operator when offered: **generated prose** (a model
writing Stories, passages or Songs). The Gardener records this as an open
question, not as scope. Nothing in the Spark asks for it, and "nothing the
paper game does not do" argues against it, but the operator declined to
rule it out.

## The tension that makes it interesting

**To be the book it needs the author's text; to play the book it must
define what the author left to the player.** Fidelity pulls both ways at
once. Verbatim Prompts were chosen over bring-your-own-book knowing that
publication is then blocked on an outside party, because anything less is
not "the book, playable". And an engine that only implemented the rules
chapter could not run 20 of the operations the Prompts demand, so the site
must add definitions and readings the book does not print, while claiming
to be the book. The advisory posture is the chosen way to live with the
second half: propose, flag, never refuse, and label every reading as one.

Two smaller tensions ride along, unamended from the Spark: the share page
against "nothing added", and fidelity to the printed book against fidelity
to the text file the site would ship from (A/B/C labels, the count of 80).

## Constraints carried in

From the operator's standing preferences, unchanged: functional style,
pure functions over immutable sheet state, no classes; explicit
documentation for every function from the lowest abstraction up; no
external service the site cannot run without.

## What a stranger can do with this

Build the engine and the sheet now from the Findings and this framing,
against the operator's local copy of the text. Not: publish, choose the
sheet's layout for the operator, decide the ask, or add generated prose.
Those wait on the operator.
