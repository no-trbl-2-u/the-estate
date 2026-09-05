---
id: idea-0002/artifacts/0008-rivers-and-lakes-web-edition-trajectory.md
type: Trajectory
shape: prose
lenses: []
produced-by: chart
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0007-rivers-and-lakes-web-edition-horizon.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0006-rivers-and-lakes-web-edition-framing-explored.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0002-rules-prompts-oracles-inventory.md
date: 2026-09-05
classifiers:
  challenged: false
  trajectory: actionable
potential-next-steps: [phase, challenge, seed]
summary: "Eleven legs from state 0006 to the Horizon of 2027-03-05: data contract, engine core, operations table, sheet and play UI, oracles, share, unlisted deploy, the first finished game, the licence research and the ask, listing on terms. Five carry the human-attention tag (layout choice, hosting account, playing the game, sending the ask, listing). First step startable Monday: the schema, the fixture, and the YAML conversion of the reference text, in a new repository."
---

# Trajectory: from state 0006 to 2027-03-05

The Surveyor, staking the route. Direction, order and dependencies; thin
on implementation by design. Every leg is a claim that an agent can do it
unless it carries `**[HUMAN ATTENTION]**`, and a tagged leg says what the
agent does up to the line.

## The ground as it stands

A Findings that inventories every rule, all 222 entries as operations and
84 oracle tables; a Framing tightened by a challenge and a live
exploration; a Horizon with three dated falsifiers. No code, no repository
for the site, no layout, no terms from the author. The estate's own
falsifier falls on 2026-09-25: a Seed must leave this record and be used
outside it by then. That date shapes the first two legs.

## Ordering and dependencies

```
1 data contract ──► 3 engine core ──► 4 operations table ──► 5 sheet & play UI ──► 9 first finished game
       │                                                          ▲                       │
       └──► 6 oracles ────────────────────────────────────────────┘                       │
       └──► 2 stack & skeleton ──► 8 unlisted deploy ◄── 7 share (after 3) ◄──────────────┘
10 licence research (on T's word, any time) ──► the ask ──► 11 listing on terms (after 9)
```

Legs 1 and 2 begin together in the first week. Leg 10 has no dependency and
runs whenever T gives the word; the Horizon's third falsifier dates only
that the ask is made by 2027-03-05.

## The legs

### 1. Data contract (September)

One JSON Schema covering the Prompt file, the oracle file and the
operations table. A converter from the reference text file
(`rivers_and_lakes_prompts.txt`, verified word for word against the book)
to YAML, tolerant of the six spacing variants the Findings found. A
fixture with placeholder text that passes the schema. The rule the
repository enforces from day one: the author's text is a build input from
a file outside the public repository, and the build fails if it is
missing rather than shipping without it.

### 2. Stack and skeleton (September)

A static site with no runtime dependency on any service. Functional style,
pure functions over immutable state, no classes, per T's standing
constraints. A build step that converts YAML to JSON and validates. A test
runner. A deploy pipeline that publishes to an unlisted URL. The stack
itself is decided by `decide` where an agent can weigh it; if T reserves
the choice, it becomes a tagged item in Phase 0. Depends on nothing.

### 3. Engine core (October)

The sheet as data: Xiake, Legends of Stories, Songs, Tags, Resources,
Characters, Techniques on two axes, Scars, the alternate identity as a
nested sheet, play state. The 64 rules of the chapter as pure operations:
movement and clamping, visit counting and entry selection, skip chains,
Tag and Resource substitution, checks, strikes, restores, the Song move,
game over declared and marked. The three labelled readings. Tests over
the fixture. Depends on leg 1.

### 4. Operations table (October to November)

All 222 entries encoded from Findings §4.3: operations, selectors, a
five-word lead, no prose, each of the twenty book-undefined operations
named and citing its Prompt. Player-judged selectors typed as choices the
UI must ask. A test per entry that applies its proposal to a fixture sheet
and checks the result. The longest leg; it is transcription-priced because
the Findings already did the reading. Depends on leg 3.

### 5. Sheet and play UI (November to December)

Xiake creation in the book's order. Roll with manual entry. The entry
view: verbatim prose, the site's reading beside it, one tap to apply,
forms only for player-judged selectors, flags for illegal states. The
ledger per entry. Legends and Songs with the strike-or-Song choice. Quick
and journaling as two views over one save. Restart with an export nudge;
export of the whole save. `**[HUMAN ATTENTION]**` on the **layout**: T
reserved it. The agent proposes a layout against the Findings and the
friction risk and builds whatever T chooses; T's hands pick it. Depends on
legs 3 and 4.

### 6. Oracles (November)

The 84 tables loaded from the oracle file, each rollable with a tap and
inserting into the field being filled. The romanisation toggle at Xiake
creation; the Mandarin set labelled unproof-read. The two-column Verb
table under a labelled reading. Depends on leg 1; joins leg 5 at Xiake
creation.

### 7. Share (December)

The payload projection (Legends and Songs), compression into the URL
fragment, the size cap with its message, the warning screen before a link
is made, the read-only renderer with the book's content warning as a
banner. Depends on leg 3 for the model and leg 5 for the entry point.

### 8. Unlisted deploy (September pipeline; December content)

The pipeline goes up in the first weeks with the fixture, so the deploy is
proven long before the game is. The real text enters the build only on
T's machine or from a private input. `**[HUMAN ATTENTION]**` on the
**hosting account and its secrets**: the agent wires the pipeline and
names every variable and who supplies it; T owns the account and supplies
the values. Depends on leg 2.

### 9. The first finished game (December to January)

`**[HUMAN ATTENTION]**`: T plays a Xiake from creation to an ending on
the unlisted deploy, on a phone at least once. Nothing else can do this
leg, and the first two falsifiers cannot be checked without it. The agent
prepares nothing here beyond fixing what T reports. Depends on legs 5, 6,
8.

### 10. Licence research, then the ask (on T's word)

`research` in quarantine: who holds the rights; what Tim Hutchings' terms
for Thousand Year Old Vampire hacks say about a web edition of a hack;
how Wym Lawson has answered others; whether an unlisted URL is private
use. Then `decide` on the shape of the offer, which T left open. Then
`**[HUMAN ATTENTION]**`: T sends the ask. The agent drafts up to the
line; the sending, the channel and the offer's content are T's. The
Horizon's third falsifier dates the ask by 2027-03-05 and proposes a
sixty-day silence rule; `challenge` may strike it. Depends on nothing;
the ask is better made after leg 9.

### 11. Listing on terms (after 9 and 10)

If terms arrive: credits to Wym Lawson and Tim Hutchings, a link to buy
the book, the site listed. `**[HUMAN ATTENTION]**`: T is the one
answerable for publishing another author's text under terms; the agent
prepares the credited build and T lists it. If no terms: the site stays
as leg 8 left it, and the Horizon's smaller branch holds.

## The first actionable step

Startable Monday, 2026-09-07, by an agent, in a new repository for the
site: write the JSON Schema for the Prompt file, the oracle file and the
operations table; write the converter and run it over
`reference/rivers_and_lakes_prompts.txt` from the reference repository,
writing the YAML to a path the repository ignores; write the fixture with
placeholder text; make the build fail when the real file is absent. Done
when the schema validates both the fixture and the converted file and the
fixture builds to JSON.

Creating that repository is an act outside the estate and waits on T's
word; the Seed is what carries this Trajectory to it.

## Refusals this route carries

No accounts, no server, no sync; no native app; no other game; no
generated prose; no shortener; no listing before terms. Nothing that
answers a Prompt for the player, and nothing the paper game forbids.

## What is thin on purpose

Framework and tooling names, the sheet's visual design, the exact URL
fragment encoding, the test framework, the hosting provider. `phase`
sequences these into parts; `decide` settles the ones that need sealing.
