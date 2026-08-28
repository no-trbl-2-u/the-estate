---
id: idea-0004/artifacts/0005-phase-1-the-parser-and-the-proof.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs: [ideas/0004-estate-ui/artifacts/0004-trajectory.md]
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [seed, challenge, distill]
summary: "Delivers the generator's spine with no pixels: a zero-dependency Node script at docs/estate-view/generate.mjs that walks ideas/ and exports/, parses the frontmatter subset in use, derives the full graph, and prints it as plain text — proven against a written list of idea-0003 fixture assertions (the 0008→0009 branch with 0009 tip, the 0010→0011 chain caught by the same rule, the seven-way fan-out from 0012, the Seed's nine inbound edges and one backward provenance line, thirteen states with their rungs). Waits on nothing; startable this Saturday; cost one Saturday. The checkpoint is the assertion list itself, and it is where Framing assumption 4 bites: if the graph cannot be derived from frontmatter alone, gaps render as gaps — and if the record is too broken to draw at all, the re-route is back to T with the specific missing links named, never to repair-by-inference."
---

# Phase 1 — The parser and the proof

I am The Surveyor. This Phase is the Horizon's first ordering constraint made
into a Saturday: **generator before pixels.** Nothing in it is visible; all of
it is load-bearing.

## What this Phase delivers

`docs/estate-view/generate.mjs` — Node, zero npm dependencies, hand-rolled
parser for the narrow frontmatter subset the estate actually uses — plus a
plain-text output mode (`--text`) that prints the derived graph, and a written
**fixture assertion list** checked against idea-0003. The derivations, each a
small readable rule:

1. **Walk and parse.** Every `idea.md`, `artifacts/*.md`, `state/*.md` under
   `ideas/`, every export under `exports/`, `ideas/SURVEY.md`, and each
   record's `assets/MANIFEST.md` where present. A thin record (idea-0002) must
   parse as cleanly as a dense one — a thin record is also a fixture.
2. **Version chains and tips.** Same type + same-type `inputs:` predecessor =
   version chain; the tip is the artifact no same-type successor names.
3. **Fan-outs.** Multiple artifacts naming one parent in `inputs:`.
4. **Cross-boundary edges.** Export `inputs:` reaching into a record; the
   `origin:` stamp parsed into the one backward edge to a state.
5. **Rungs.** State `inputs:`/`outputs:` tied to artifact nodes.
6. **Shelf facts.** Status, state-head, appetite (placeholder detection),
   counts, recency and tempo from state dates, exported badge, and
   inbound-citation counts computed **from `inputs:` frontmatter only** — the
   Trajectory's finding: on today's data idea-0001's count is honestly zero,
   and the generator does not count body prose.
7. **Staleness.** `SURVEY.md` `covers:` compared against live state-heads.

## The fixture assertions (the checkpoint)

Written down before the code, checked after: idea-0003 yields 19 artifacts and
13 states; the Framing chain stacks 0008 under 0009 with 0009 tip and
`challenged: true`; the *same rule with no extra code* stacks 0010 under 0011;
0012 fans out to exactly seven Phases in phase order; the Seed stands outside
the wall with nine inbound edges and one backward line to `state/0011`; state
0006 shows four input rungs and one output rung; idea-0001 yields 3 artifacts
and 10 states; idea-0002 parses without error and renders as the quiet thin
record it is; `SURVEY.md` reads as never-generated.

**Done looks like:** the script runs from a clean checkout in under a second,
every assertion passes, and the text output is committed nowhere — it is a
verification mode, not an artifact.

## Trigger, dependencies, cost

- **Trigger:** none. This is the route's first actionable step — a Saturday,
  startable now.
- **Waits on:** nothing. No layout decision, no library, no other record.
- **Cost:** one Saturday. If the parser fights back past a day, that is itself
  information — the "narrow enough to hand-parse" assumption is wrong, and the
  vendoring path (`docs/estate-view/vendor/`) exists for exactly that.

## Where a Framing assumption bites

**Assumption 4 — frontmatter is sufficient and trustworthy** — bites here and
nowhere harder. The re-route has two tiers: a *missing link* (an artifact whose
`inputs:` fails to resolve) renders as a gap, drawn as a gap, per the Framing's
own words — the UI never repairs lineage. A *systemic* failure — the graph
undérivable at all — stops the Phase and returns to T with the specific broken
links named, because a missing link cannot be reconstructed and pretending
otherwise would make the whole viewer a lie.

## What this Phase refuses

Any HTML. Any layout thought. Any caching or index file. The temptation to
"just start the shelf while I'm in here" is the polish tail arriving early;
the Phase ends at green assertions, and stopping there is the discipline the
ordering constraint exists to enforce.
