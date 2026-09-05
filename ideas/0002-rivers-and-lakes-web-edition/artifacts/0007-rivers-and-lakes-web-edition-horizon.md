---
id: idea-0002/artifacts/0007-rivers-and-lakes-web-edition-horizon.md
type: Horizon
shape: prose
lenses: []
produced-by: envision
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0006-rivers-and-lakes-web-edition-framing-explored.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0002-rules-prompts-oracles-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
  horizon: falsifiable
potential-next-steps: [challenge, chart]
summary: "Six months out, 2027-03-05: the operator has finished one Xiake and started a second in an unlisted browser edition of Rivers and Lakes that keeps the sheet itself, reads every entry aloud as a proposal beside the book's words, and never refuses; the ask to Wym Lawson has been made or the 'for anyone' half of this Horizon is void. Three dated falsifiers, one per claim."
---

# Horizon: Rivers and Lakes, web edition, on 2027-03-05

The Architect, drawing the thing working. Six months from the Framing.
Told from inside, in the present tense of that day. Where the Horizon must
fork on the author's answer, it says so once and carries both branches;
it does not pretend the licence is settled.

## A sitting

It is an evening in March. The operator opens the unlisted URL on a phone.
The site loads with no network request after the first, because everything
it needs came down as one static bundle: the engine, the sheet, the
operations table, and a JSON file that was YAML on the operator's machine
that morning. The Xiake is where it was left: Prompt 37, third Legend
holding two Stories, one Technique at two of three boxes, a Scar from
Prompt 6. The last sitting's ledger is a tap away.

Roll. The browser shows a d10 and a d6 and the difference; a field beside
them takes two integers from dice on a table if the operator has them.
Plus three. Prompt 40, first visit, first entry. The book's words appear
verbatim, and the rules' own label reads "first entry", not a letter.
Beside the prose, the site's reading: **check a Tag**, with the one
eligible Tag pre-selected; **create a Righteous or Evil Character if none
is available**, greyed out because one is. A single tap applies both.
Nothing asked for a form, because nothing needed a player's judgment.
Below, the passage box for the journaling view, and above it the Story
line that both views share. The operator writes the Story. The passage
can wait.

Two Prompts later a selector does need judgment: *a beloved Character*.
The site lists the Characters and asks. It does not guess. The operator
picks, and the ledger records: proposed, applied, and a note that the
choice was the player's. At Prompt 46 the sixth Legend has nowhere to go;
the site flags it, names the rule (five slots, three Stories each), and
offers the two moves the book allows: strike a Legend, or move one to a
Song. The operator strikes. The struck Legend stays on the sheet,
readable, struck through, because the book says it must.

## The sheet

The sheet has a layout now. It was proposed by a stranger against the
Findings and adjusted by the operator over the first two games. It is one
column on a phone and two on a laptop: Legends and Songs on one side,
because they are the game; the six traits on the other, each with its
checkboxes, strikes and restores visible as marks rather than deletions.
Every trait line carries the Prompt that created it, so the sheet is also
an index into the ledger. A Technique shows two axes, type and reputation,
because the Prompts use both words. The alternate identity from Prompt 21
is a second sheet nested inside the first, folded closed until it is in
play. The sheet is the data model rendered; nothing on it exists that is
not in the save.

## The engine

The engine is a set of pure functions over an immutable sheet. Each of the
222 entries has a record in the operations table: operations, selectors, a
five-word lead, no prose. Twenty of the operations have no definition in
the rules chapter, and each of those cites the Prompt that demanded it.
Every function is documented from the lowest one up, in the operator's
own discipline. The engine never refuses: it proposes, it applies what is
confirmed, it flags what the rules would call illegal, and it declares
the end of the game when a required check or loss cannot be satisfied or
an ending Prompt lands, marking the sheet ended and asking for the
demise. What is written after that mark is kept and flagged post-ending.
Three rules readings the book leaves open are taken and labelled as
readings wherever they act. The test suite runs the engine over a fixture
with placeholder text and over every one of the 222 entries, and the
suite passes in the build before the site deploys.

## The data

Two files the operator owns: the Prompts and the oracles, authored in
YAML with the book's words, never in the public repository. One file the
repository owns: the operations table, also YAML. A build step turns all
three into JSON and validates each against one schema. The oracles carry
both romanisation sets; the Mandarin set ships labelled unproof-read and
the Xiake creation screen asks which the player wants. Every oracle table
rolls with a tap and drops its result into the field being filled. One
table, the two-column Verb, rolls under a labelled reading because the
book never said how.

## The save, the export, the link

One game lives in the browser. A restart button starts another and nudges
an export first, because a game in one browser's storage dies with that
storage. The export is the whole save: sheet, journal, ledger, roll log.
When the operator's first Xiake died at Prompt 76, the site offered a
share link. Before generating it, one screen said what the Advocate said:
this cannot be unpublished, and anyone with it can read and alter it. The
link carries the Legends and Songs compressed into its fragment, capped,
with the cap stated. The rendered page carries the book's content warning
above the first Song. Nothing was stored anywhere. Nothing of the
author's was in it.

## The deploy

An unlisted URL. Not indexed, not announced, not linked from anywhere the
operator did not put it. The PDFs are not served and never were. The
build takes the operator's text files as a private input and the public
repository never contained them. Whether the author would count an
unlisted URL as private use is a question the operator carried into the
licence research; the Horizon does not answer it, and the deploy does not
wait on it.

## The fork: the author's answer

By 2027-03-05, one of two things is true.

**The ask was made.** Then either terms exist and the site is listed,
credited to Wym Lawson and Tim Hutchings with a link to buy the book, and
"for anyone" is being tested by whoever arrives; or the answer was no, or
silence, and the site stays exactly as described above, the operator's
edition, unlisted, with bring-your-own-book still on the shelf and never
built.

**The ask was not made.** Then this Horizon's "for anyone" half is void
(see the third falsifier), and what remains is a personal edition that
works. That is not a failed Horizon; it is a smaller one, and the record
says so honestly.

## What it is not

No account, no server, no sync, no native app. No other game in the
Thousand Year Old Vampire family, however tempting the engine makes it.
No generated prose: the site never writes a Story, a passage or a Song,
by the rule "nothing that answers a Prompt for the player, and nothing
the paper game forbids". No shortener. No listing before terms.

## What would make this wrong

Three falsifiers, one per claim, each dated. A Horizon that names them is
`falsifiable`; whether they are the right ones is for `challenge`.

1. **The sheet keeps itself.** Falsified if, having finished one Xiake in
   the site, the operator starts the next on paper or in the PDF. Check
   date: **2027-03-05**. Evidence: the second Xiake's first Story exists in
   the site's save, or it does not.
2. **The book.** Falsified if, after one finished game, the operator
   cannot tell from the site alone where the book's words end and the
   site's readings begin. Check: the operator opens any ten ledger entries
   at random on **2027-03-05** and, for each, points to the prose and the
   reading. One miss falsifies.
3. **For anyone.** Falsified if the site is finished and playable and the
   ask has not been made by **2027-03-05**, because then access was not
   the problem and the identity claim was decoration; or if the ask is
   made and refused, in which case the identity claim fails at the gate.
   The Architect proposes a silence rule for `chart` to carry: an ask
   unanswered for **sixty days** counts as refused for the purposes of
   this Horizon, and the site stays private.

A fourth, for the record, because the estate's own falsifier is dated
2026-09-25 and this is its first candidate: if by that date no Seed has
left this record, the estate's law says the machinery outran its use.
This Horizon does not answer for that; the Trajectory must.
