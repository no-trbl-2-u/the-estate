---
id: idea-0002/artifacts/0006-rivers-and-lakes-web-edition-framing-explored.md
type: Framing
shape: prose
lenses: []
produced-by: explore
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0005-rivers-and-lakes-web-edition-framing-challenged.md
date: 2026-09-05
classifiers:
  challenged: true
potential-next-steps: [envision, research, decide]
summary: "The challenged Framing explored with the operator live, hole by hole: the operations table lives in the repo as data; files are authored in YAML and loaded as JSON; generated prose is out by the rule; game over is declared and marked; refusal means private play; the deploy is unlisted with full text; the ledger is shown and exported; proposals are pre-selected with one tap; the share link carries three mitigations; entries use the book's wording; both romanisations ship behind a toggle; the identity and the daily problem both stand; one game per device with a restart. Licence research and the ask are deferred by the operator."
---

# Framing, explored: Rivers and Lakes, web edition

The Forager, back from walking the Advocate's holes with the operator
alongside. Same type in, sharper out: this is the challenged Framing with
each hole either closed by the operator's choice or left open by the
operator's word. The `challenged: true` classifier is carried forward
because nothing the Advocate attacked was un-revised here; this version
tightens, it does not retreat.

Method, honestly: the operator was live and chose from offered options,
sometimes in their own words. Where the operator's words differed from
every option, they are quoted and the Forager's reading is marked as one.
Where the Forager assumed, it says so.

## What stands unchanged from the challenged Framing

The problem underneath (the book is a notebook with no sheet in it), the
audience, the out-of-scope list, the constraints, the central tension
(to be the book it needs the author's text; to play the book it must
define what the author left to the player), the three falsifiers, and the
rule "nothing that answers a Prompt for the player, and nothing the paper
game forbids". Read them there; this version adds to them.

## The holes, closed or left open

### 1. Identity and problem: both stand

The operator accepted the Advocate's reading. The Framing carries two
sentences, not one: **the site is an edition of Rivers and Lakes** (what it
is; the reason for verbatim Prompts and for the licence gate) and **the
sheet keeps itself** (what it does every day; what play exercises and
disuse indicts).

### 2. "Nothing added": the Advocate's rule stands

The operator's words: "I like the advocate's restatement." The rule is
**nothing that answers a Prompt for the player, and nothing the paper game
forbids.** The first Spark's sentence stays as it was written, as the
record of intent; no new Spark version is written. *Forager's assumption:
the operator chose the rule, not the mechanics of where it lives; leaving
the Spark untouched is the immutable-artifact default.*

### 3. Generated prose: out

Closed by the rule above. A model writing Stories, passages or Songs
answers a Prompt for the player. Out of scope, stated by the operator.

### 4. Game over: declared and marked, writing past allowed

The engine declares the end when a required check or loss cannot be
satisfied or an ending Prompt lands, asks for the demise narration, and
marks the sheet ended. Anything written afterward is flagged post-ending
and never refused. The one exception to "never refuse" is thereby not an
exception: the book stops the game by asking for a narration, and so does
the site.

### 5. The operations table: in the repository, as data

One record per entry, keyed by Prompt number and position: the operations,
the selectors, and a five-word lead. **No prose.** It is a structural
derivative of the author's work, and the record accepts that as the
smallest derivative the engine cannot run without. A stranger can now
encode and test every entry against fixtures.

### 6. The loader contract: YAML authored, JSON loaded

The operator prefers YAML. The files the operator owns (Prompt text, oracle
tables) and the operations table are **authored in YAML**; a build step
converts them to **JSON**, which is all the browser loads. One JSON Schema
validates both after parsing. The reason, given to the operator: browsers
parse JSON natively and a YAML parser would ride in the site forever; YAML
is far better for hand-editing multi-line prose with quotes and
semicolons. The repo ships the schema and a fixture with placeholder text.

### 7. The ledger: shown per entry, exported with the save

Each answered entry shows what the engine proposed, what the player
applied, and any override, beside the verbatim prose. It travels in the
export. This is what lets a player audit the site against the book, and it
is what the "book" falsifier depends on.

### 8. Advisory friction: pre-selected, one tap

The engine pre-fills the obvious choice when there is one (a single
eligible Tag, a named Resource) and one tap applies all of an entry's
proposals. A form appears only for player-judged selectors (a beloved
Character, a positive Tag, a Resource on your person). This is the
layout's answer to "slower than a pencil"; the layout itself remains the
operator's to choose and a stranger's to propose.

### 9. The share link: three mitigations

Chosen: a warning before a link is generated (cannot be unpublished;
anyone with the link can read and alter it), the book's content warning as
a banner on every rendered page, and a payload size cap with a clear
message about what fits and what was left out. Not chosen as a UI rule:
"no shortener, ever"; the constraint on external services already forbids
the site offering one, and the record notes it does not need a second
statement.

### 10. Labels: the book's wording

Entries are labelled **first / second / third entry**, as the rules say.
The text file's A/B/C letters live only in data ids. The verbatim prose is
always shown; the engine's proposal sits beside it, marked as the site's
reading. The text file's ASCII semicolons are shown as they are.

### 11. Romanisation: both, behind a toggle, now

The player picks Cantonese or Mandarin romanisation at Xiake creation.
The Mandarin tables ship unproof-read and labelled so. The operator's own
words on first hearing the question: "English only for now. Other
languages are long term." The Forager's reading, marked as one: the UI is
English-only and other UI languages are a long-term matter; the
romanisation toggle is a separate thing and the operator chose both once
the difference was explained.

### 12. Saves: one game per device, with a restart

The operator's words: "Provide a 'restart' button, but one game per
device." One live game in browser storage; restart begins a new Xiake. The
Forager's suggestion, not confirmed: nudge an export before restart and at
the end of a sitting, since a game that lives in one browser's storage is
lost with that storage.

### 13. Refusal or silence: keep playing it privately

If Wym Lawson says no, or never replies, the full edition stays the
operator's personal tool, unpublished. Nothing is thrown away. The
bring-your-own-book fallback stays on the shelf, and the Advocate's note
that it is not licence-clean either (the operations table is a derivative;
the oracle tables are the author's text) stands beside it.

### 14. The deploy: unlisted, full text

The operator's words: "Full game gets deployed, actual rulebook stays only
in the repo." Clarified to: **an unlisted or gated deploy with the
verbatim text, playable anywhere, not announced or indexed until terms
exist; the PDFs are never served.** This amends the explored Spark's
"built fully, shipped nowhere public": unlisted is not public, and the
operator wants to play it away from the machine it was built on. The
Prompt and oracle text remain a build input from the operator's own file,
outside the public repository. The Advocate's idea of the share renderer
as the first public surface is superseded: the whole game is deployed,
unlisted.

### 15. The licence research: not yet

Offered as a quarantine dispatch (who holds the rights; Tim Hutchings'
terms for Thousand Year Old Vampire hacks; how Wym Lawson has answered
others). The operator: "Not yet." Open, with the TYOV-terms question folded
into it for when it runs.

### 16. The ask: undecided

When, through which channel, offering what. Open by the operator's word.

## Still open after this exploration

- The licence research and the ask (15, 16), by choice.
- The sheet's layout: the operator's to choose, a stranger's to propose.
- Whether an alternate identity's Legends (21A) and a parentless Song
  (46B) count against the slot limits: not raised this session.
- The export nudge (12), the Forager's suggestion awaiting a word.
- A silence deadline for the ask, which `envision` should date.

## What a stranger can do with this

More than before. Build the engine, the data model, the loader (YAML in,
JSON out, one schema), the operations table for all 222 entries, the
ledger, the one-tap proposal flow, the share renderer with its three
mitigations, and the romanisation toggle, all against the fixture. Propose
a sheet layout. Not: publish, list the deploy, send the ask, or add
generated prose.
