---
id: idea-0002/artifacts/0003-rivers-and-lakes-web-edition-spark-explored.md
type: Spark
shape: prose
lenses: []
produced-by: explore
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0001-rivers-and-lakes-web-edition-spark.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0002-rules-prompts-oracles-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [frame, challenge, research]
summary: "The Spark explored with the operator live and the Findings in hand: verbatim Prompts with permission sought first and built privately meanwhile; both play modes from one engine, switchable any time; an advisory rules engine that proposes and flags but never refuses, with every book-undefined operation named and cited; in-browser dice with manual entry; oracles rolled in-site; a read-only share page carried in the link, no server; audience is the operator first."
---

# Spark, explored: Rivers and Lakes, web edition

The Forager, back from wandering the Spark with the operator alongside and
the Factor's inventory open. Same type in, sharper out: the thought is still
"the browser is the journal and the dice", and it now knows what it has
chosen and what it has not.

Method, honestly: the operator was live. The Forager offered threads as
choices with a recommendation attached; the operator picked, and three times
picked against the recommendation. Those three are where the idea is
load-bearing and are marked below. Nothing here was invented for the
operator; the operator's own words from the first Spark stand unaltered in
`0001` and are corrected here only where the Findings showed the summary
diverging from the book (§5 of the inventory).

## The thought, as it now stands

A website version of Rivers and Lakes (Wym Lawson; based on Tim Hutchings'
Thousand Year Old Vampire). The browser is the journal and the dice. A
player creates a Xiake, rolls, lands on a Prompt, writes, and the record
sheet updates itself under the game's rules. The Prompts appear verbatim.
Nothing the paper game does is dropped.

"Nothing is added that the paper game does not do" survives with two
named exceptions the operator chose: a rules engine that must define
operations the book leaves to the player, and a share page. Both are
recorded as tensions, not resolved.

## Threads followed, and where the operator pulled

### Licence and publication

- **Verbatim Prompts, permission sought first.** Chosen against the
  recommendation (bring-your-own-book). The operator wants the full game
  in the browser and accepts being blocked on an outside party for
  publication. *Load-bearing.*
- **Meanwhile: build fully, ship nothing public.** Prompt and oracle text
  loaded from a file the operator owns locally and kept out of the repo.
  Everything is playable on the operator's machine; publishing waits on
  terms.
- **The ask itself is undecided.** Free, non-commercial, credited with a
  buy link was offered as the easy yes; handing the author ownership was
  the other pole. The operator chose to leave the offer's shape open until
  there is something to show. Open question, kept.
- Implication the Forager notes: the Findings found no terms anywhere in
  the three files, so the ask cannot be avoided by reading harder. It is a
  `research` outside the walls (who holds the rights, what Tim Hutchings'
  system terms say about derivatives, how Wym Lawson has answered others)
  followed by an outward act that is T's alone.

### Play modes

- **Both from the start.** Chosen against the recommendation (journaling
  first). One engine, two views. *Load-bearing.*
- **Switchable any time.** Mode is a view, not a state. The Story is the
  shared unit; a journal passage is optional per Prompt. One save shape.
- Implication: the engine's unit of play is "an answered entry", which
  yields a Story always (unless the entry says otherwise, per Findings
  §5 B) and a passage sometimes.

### Dice

- **Both, in-browser by default.** A roll button and a manual entry field
  for players with dice on the table. The engine only ever sees two
  integers; where they came from is the UI's business.

### Enforcement

- **Advisory: propose, flag, never refuse.** The engine reads the landed
  entry's instructions as proposed sheet changes, shows them, applies what
  the player confirms, and flags any resulting illegal state (a sixth
  Legend, a fourth check, a Song accepting a Story). The player may
  override anything. This honours the book's "you do not need to answer
  every question" and "feel free to modify the Prompt" while keeping the
  rules visible.
- **Every book-undefined operation becomes a named engine operation, each
  citing the Prompt that demands it.** Unstrike, retype, convert Character
  to Resource, uncheck, remove a Scar, replace or edit a Legend, Story
  overrides, whole-sheet effects, deferred locks. Player-judged selectors
  (a beloved Character, a positive Tag, a Resource on your person) become
  player choices in the UI. The sheet stays a pure data model; the
  operations are pure functions over it; the history of applied operations
  is the game's record.
- **Rules readings the book leaves open, settled by the operator for the
  engine** (each to be labelled a reading, not a rule, in the UI):
  - Technique carries **two axes**: type (Orthodox / Unorthodox, from the
    rules chapter) and reputation (Righteous / Evil, from Prompts 28B and
    30B), as separate fields. Chosen against the recommendation to merge
    them. *Load-bearing: fidelity to the words over a smaller schema.*
  - "Use a Technique" with none Acquired: **offer both readings** (page 15:
    use an unacquired one and lose it; page 20: resolve the consequences,
    or lose an unacquired one) plus the entry's own alternative; the player
    picks, both pages cited.
  - **Zero rolls and clamps to Prompt 1 both count as landings**; a fourth
    visit skips forward, and a skip onto an exhausted Prompt skips again.

### Oracles

- **Rolled in-site, results inserted** into the field being filled: name,
  sect, technique, weapon, creature. The Findings doubled the known scope
  (a Mandarin mirror of every table; weapon, technique and creature naming
  procedures; 84 tables in all), and every table sits under the same
  unresolved licence as the Prompts. Same posture: built privately, shipped
  on terms.

### Sharing and legacy

- **A shareable read-only page.** Chosen against the recommendation (export
  only). The operator's reason, inferred from the choice and not stated:
  the game's own closing question is "what kind of songs will they sing
  about you?", and a page is the web-native Song. *Load-bearing.*
- **Payload carried in the link.** The Xiake's Legends and Songs compressed
  into the URL fragment; the same static site renders it read-only. No
  server, no account, nothing stored. This keeps local-first and
  no-external-service intact at the cost of long links and a size ceiling.
- Implication: the share payload is a projection of the sheet (Legends,
  Songs, perhaps Scars) and not the whole save; the whole save is the
  local export.

### Audience

- **The operator first; others if it works.** A personal tool whose
  publishing is a later question. This lowers the pressure on the licence
  question without removing it: private play needs no permission, public
  play does, and the operator wants public play eventually.

## Variants the Forager generated and left on the shelf

Not chosen, kept because a later session may want them:

- **Bring-your-own-book**: numbers and engine only, Prompt text never
  shipped. Publishable now. Becomes the fallback if permission is refused.
- **Engine-only with player-supplied text**: the player pastes the Prompts
  into their own local copy. A private middle road.
- **Quick Game first** as the smallest playable slice.
- **Strict enforcement** as a switchable "referee" setting on top of the
  advisory engine, for players who want to be refused.
- **Static export the player hosts** as the share mechanism, if link
  payloads prove too long.
- **The official-companion framing**: build it to offer to the author, and
  let the author's wishes shape it. Not chosen now; it remains the natural
  shape of "the ask" if the operator wants the easiest yes.

## What the exploration did not settle

- The shape of the permission ask, and who is asked (the Findings name
  only the credits page).
- Whether the share page belongs to "nothing added" or is the first
  deliberate addition. The operator chose it; the Spark's own sentence has
  not been amended.
- The sheet's layout. The book has none to copy (Findings §7); the site
  designs it.
- The record of a game: whether the applied-operation history is shown to
  the player, exportable, or internal.
- The Mandarin half of the oracles: shipped, or Cantonese only.

## Corrections to the first Spark's rules summary, from the Findings

Applied here so the next verb reads a corrected Spark; the first Spark is
untouched. Every answered entry creates a Story *unless the entry says
otherwise* (36B, 41B, 44B). Xiake creation has a distinct second Story
written from the three Tags before the three trait Stories. The A/B/C
letters are the text file's, not the book's. Characters are struck for
reasons other than death, and can be unstruck; "struck" and "dead" are
different fields. The book grants modification freely and a skip only for
uncomfortable topics; there is no general skip. The oracles are two
parallel language sets with naming procedures the first Spark did not list.
