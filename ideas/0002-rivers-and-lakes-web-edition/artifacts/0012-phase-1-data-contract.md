---
id: idea-0002/artifacts/0012-phase-1-data-contract.md
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
summary: "Phase 1, the data contract: one JSON Schema over the Prompt file, the oracle file and the operations table; a converter from the verified text file to YAML that tolerates the six spacing variants and drops the A/B/C letters for positions; a fixture with placeholder text; the build fails without the private input. No human-attention steps. Done when the schema validates the fixture and the converted file and the fixture builds to JSON."
---

# Phase 1 — Data contract

The Surveyor. The Trajectory's first leg, the first step it called
startable on a Monday. Everything here is agent work: the text file is
already in T's reference repository, verified word for word against the
book (Findings §4.1).

**Outcome.** Three file shapes the whole site is built on, one schema
that checks them, and the rule that the author's text is a private
build input.

**Waits on.** Phase 0 (a repository with a build and a verify gate).

**When.** September.

## Steps

1.1 **The Prompt file shape.** A YAML document: `prompts[1..80]`, each
with `entries[]` of one to three, each entry `{ position: first |
second | third, text }`. No letters: the book has none (Findings §4.1,
§5 F); the file's A/B/C become positions and are never shown. The
schema fixes the counts from the constants: 71 Prompts of three, 9 of
one, 222 in all.

1.2 **The oracle file shape.** A YAML document of `tables[]`, each with
`{ id, title, page: { cantonese, mandarin }, roll: d6 | d10 | d100,
bands: [{ from, to, entry }], kind: lookup | composition, notes }`, and
`procedures[]` for the five composition procedures per half. Two
`romanisation` sets carrying the same table ids. Entry text is free;
typos are preserved (Findings §8). Phase 6 fills it; this Phase shapes
it and puts three tables in the fixture.

1.3 **The operations table shape.** A YAML document keyed by entry
(`37.first`), each with `{ lead, operations: [...], ends }` in the
grammar of Findings §4.2: verb, trait, selector, count, choice (`|`,
`||`), sequence, condition. Player-judged selectors are a typed value
(`choice: { kind, prompt-text }`), not a string, so the UI can ask.
Every operation the rules chapter never defines (Findings §4.6) carries
`cites: <entry>`. Phase 4 fills it; this Phase shapes it and encodes
the fixture's entries.

1.4 **The converter.** A pure function from the text file's string to
the Prompt document: tolerant of the six entries with a space after the
letter and the eight with a double space; rejects a file whose count is
not 222 or whose Prompts are not 1..80 without gaps. Run over
`reference/rivers_and_lakes_prompts.txt`, output to a path the
repository ignores. Tested against a fixture text in each spacing
variant.

1.5 **The fixture.** Placeholder text in the real shapes: all 80
Prompts with their real entry counts and invented five-word entries,
three oracle tables, and the operations for the fixture's first ten
entries. It is what the public repository builds and tests against, and
what the garden already pointed the paths at.

1.6 **The build rule.** The YAML-to-JSON step reads the private paths
from the environment manifest; a missing or unreadable input fails the
build with the variable's name in the message. The fixture is selected
only by setting the path to it. `text-guard` (Phase 0) is wired here to
assert the rule.

1.7 **The schema over all three**, one file, with the constants of
Findings §2 embedded as enums and counts. Validation runs in `verify`
before the build.

## Done when

The schema validates the fixture and the converted real file; the
fixture builds to JSON in `verify`; the build fails, by name, when a
private path is absent; the repository contains no line of the author's
text.

## Cost

One or two loop ticks. Transcription is not in this Phase.

## Left open inside this Phase

- The exact key for player-judged choices; Phase 4 will meet every kind
  and may widen the enum. The schema should allow that without a
  migration of the fixture.
