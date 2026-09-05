---
id: idea-0002/artifacts/0001-rivers-and-lakes-web-edition-spark.md
type: Spark
shape: prose
lenses: []
produced-by: capture
inputs: []
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [research, frame]
summary: "A website version of Rivers and Lakes (Wym Lawson's solo journaling wuxia game on Tim Hutchings' Thousand Year Old Vampire system): the browser as journal and dice, the sheet updating itself under the paper rules, nothing dropped and nothing added. Three reference files are the rules; the licence question comes first."
---

# Spark: Rivers and Lakes, web edition

The operator's words as they arrived, unaltered. The Gardener has added
nothing below this line but the heading.

---

New idea. Root `ideas/`, no project. You have my word to create the record and to run `capture` inline from the words below, verbatim.

Title: Rivers and Lakes, web edition

## The idea

I want to build a website version of Rivers and Lakes, the solo journaling wuxia game by Wym Lawson, based on Thousand Year Old Vampire by Tim Hutchings. The browser is the journal and the dice: a player creates a Xiake, rolls, lands on a Prompt, writes, and the record sheet updates itself under the game's rules. Nothing the paper game does is dropped; nothing is added that the paper game does not do.

## Source of truth

Repo `no-trbl-2-u/rivers-and-lakes`, folder `reference/`:

- `rivers_and_lakes.pdf`, 136 pages. PDF pages 5–24 are the rules; Prompts start at PDF page 25.
- `rivers_and_lakes_oracles.pdf`, 32 pages of oracle tables: Cantonese given names and surnames, Ordinary Character roles, location names, plants, colours, descriptors, nature, directions, sect names and naming customs, items, animals, sect techniques.
- `rivers_and_lakes_prompts.txt`, the full Prompt list as plain text: Prompts 1–71 each with entries A/B/C (213 entries), Prompts 72–80 are single-entry endings ("The game is over").

Those files are the rules. Where my summary below and the files disagree, the files win.

## The rules the site must enforce (my reading of the rulebook)

- A Xiake has six traits: Legends, Tags, Resources, Techniques, Characters, Scars. Plus Songs.
- Legends: five slots, each holding up to three Stories. Every answered Prompt creates one Story (one sentence, third person). A Story joins an existing Legend it fits, or opens a new one. No free slot means the player strikes out a whole Legend, or moves one into a Song.
- Songs: up to four, each holding one Legend permanently, with a short description (poem, folk song, novella). A Song accepts no new Stories.
- Tags: reputation. Each may be checked once (accepted as identity) or struck out (lost).
- Resources: possessions, possibly detrimental. Stationary Resources cannot be carried away. Lost Resources stay readable and may be recovered.
- Characters: name plus a one-sentence description that grows over play. Type Righteous, Evil, or Ordinary. Struck out only when a Prompt kills them.
- Techniques: name, type, description. Orthodox needs three checkboxes to be Acquired, Unorthodox one. "Use a Technique" requires an Acquired one; an unacquired one may be used but is lost afterwards.
- Scars: a description plus the story behind it.
- Struck-out traits are never deleted. They stay on the sheet, readable.
- Xiake creation: a name (oracles), a birth Story, three Tags, three Resources, at least three Characters, one Story in each of the five Legends.
- Movement: roll d10 minus d6. Positive moves forward, negative back, zero repeats the Prompt. Never below Prompt 1. Counting starts at Prompt 1 without answering it.
- Repeat landings: first visit answers entry A, second B, third C, fourth skips to the next Prompt.
- Substitution: told to check a Tag with none available, lose a Resource instead; told to lose a Resource with none, check a Tag instead. Only Tags and Resources swap.
- Game over: unable to check or lose a Tag or Resource, or unable to lose a Technique, when required; or a Prompt says the game is over.
- Two modes: Quick Game (answer inside the Legend line) and Journaling Game (a passage per Prompt, plus the Story).
- Time is loose; the first five Prompts are roughly childhood. Content warnings apply (death, abuse, self-harm). The player may skip a Prompt.

## Constraints I already hold

- Functional style: pure functions over immutable sheet state. The rules engine is data in, data out. The UI is a thin layer over it. No classes.
- Explicit code comments and documentation for every function, from the lowest abstraction upward.
- Local-first: fully playable with no account and no server. Persistence in the browser, export to a file.
- Runs without any external service.

## Open questions I want on the record

1. Licence. No licence or copyright statement was found in the extracted text of either PDF. The Prompts and oracles are Wym Lawson's work and the system is Tim Hutchings'. What can ship publicly: Prompts verbatim, Prompt numbers only with a "bring your own book" mode, or nothing until permission is obtained? This is first; it decides the product.
2. Which mode first: Quick Game, Journaling Game, or both?
3. Dice: in-browser roll, physical dice entered by hand, or both?
4. Does the site show the oracle tables and roll on them, or only reference them?
5. Is the `reference/` repo a `research` source only, or should anything be promoted into the estate's own `reference/`?

## Tensions

- Faithful reproduction against a product I can publish. The licence question wearing another coat.
- Strict enforcement (the site refuses illegal moves) against the book's own looseness ("you do not need to answer every question", "feel free to modify the Prompt").

## What I want from this session

Create the record, capture this verbatim as the Spark, then propose the route. My expectation: `research` over the three reference files (a dispatch; I give the word now), producing Findings that inventory every rule, trait, Prompt shape, and oracle table in machine-readable form, then `frame`. Push back if you see a better order.
