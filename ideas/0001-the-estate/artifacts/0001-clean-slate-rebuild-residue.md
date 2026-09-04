---
id: idea-0001/artifacts/0001-clean-slate-rebuild-residue.md
type: SessionResidue
shape: prose
lenses: []
produced-by: capture
inputs: []
date: 2026-09-03
classifiers:
  challenged: false
potential-next-steps: [challenge]
summary: "Eight observations from the day the estate was wiped and rebuilt: a green gate over a broken app, an unmeasured cost guessed wrong, a doc that predicted a decision and missed its arrival, a full day of machinery with no verb run on an idea — and, found while writing this, a parser that had been misattributing every artifact's office to The Steward."
---

# Residue: the day of the clean slate and the rebuild

What 2026-09-03 revealed about the estate's own functioning, observed while
doing something else. Filed here because these are observations about the
machinery, not about any idea (`system/TYPES.md`, ADR 0026).

The payload is the self-criticism. Seven of the eight items below are things
that went sideways or have never been tested; that ratio is the point.

Item 7 was found *while writing this artifact*, and is a second instance of
item 1. It is left in the order it was discovered rather than merged upward,
because the sequence is the evidence.

## 1. The gate was green the whole time the app was broken

ADR 0032 emptied `ideas/` and `exports/`. `scripts/validate-estate.mjs`
reported `0 errors, 0 warnings` and kept reporting it. The Estate View
**crashed on load** — the desktop app defaults to the record view, there was
no record, and `TravelMap` read `.artifacts` off `undefined`. That state
shipped in the merge of PR #30 and survived PR #31.

It was found only because a fixture was built to exercise something else and
the built app was actually opened in a browser. Nothing in the estate checks
that the tools which *read* the estate still function; the validator checks
the records' invariants and stops at the repository's edge. The estate's own
rule is *checked, not declared* (ADR 0028), and "the UI renders the estate"
was declared.

**The sharpest form:** the emptiest estate is the one no one tests, and it is
the state every estate passes through exactly once — at the beginning, when
the first user arrives.

## 2. A structural cost was priced by judgment when it was available by measurement

Asked how hard directory-based projects would be, the first answer given to T
was that it would be *"a week and puts your provenance stamps at risk."* The
actual coupling, traced afterward: two `readdirSync` calls, one regex, and six
files mentioning a record path — three of them historical documents. The
estimate was wrong by roughly an order of magnitude, and the correction
changed which design T could afford.

The measurement took one command. `grep -rl "ideas/[0-9]\{4\}"` was available
before the estimate, not only after it. An estate that records its decisions
this carefully has no habit of measuring the quantity those decisions are
priced on — and a wrong price does not announce itself, it just quietly
removes an option.

## 3. A document predicted a decision and had no way to notice it arriving

`docs/GLOSSARY.md` carried, for a week: *"The estate has **no grouping level
above records** — the portfolio is flat… If the UI needs folders-of-projects,
that is a **structural change**, which goes to T."*

Accurate when written, and load-bearing: it correctly routed the question to
the operator. The moment T answered it, the row became false — and nothing
connected the claim to the decision that would falsify it. It was corrected by
hand because someone happened to grep for the word "project."

Guidance that names a future decision is a **standing tripwire with no
trigger**. The estate has a mechanism for the artifact whose facts rot
(`stale_after:` on Findings, ADR 0018) and none for the guidance whose
premise expires.

## 4. The named failure mode ran for a full day

`system/FALSIFIERS.md`: *"building it is more fun than using it. The trap is
six months of type-algebra refinement and an empty estate. If work in this
repo is elaborating the machinery while the idea trees hold nothing live, that
is this failure mode in progress — say so out loud."*

Saying so out loud: on 2026-09-03 the estate produced three ADRs (0032, 0033,
0034), a new skill, a new generator, a restructured validator, and roughly
1,200 lines of machinery — with **zero records, zero artifacts, and zero verbs
performed on any idea**. The falsifier's evidence-of-use deadline is
2026-09-25, twenty-two days out, and the two Seeds that were its only evidence
now exist solely inside a git tag.

The honest defence is that projects and `onboard` are precisely what an
outside project needed in order to enter, so the day bought the falsifier a
door. The honest indictment is that the door has not been walked through and
the same defence will be available tomorrow. Both are recorded as a tension on
this record rather than resolved here, because a residue reports; it does not
decide.

## 5. Two new tools have never met real material

`onboard` and `scripts/generate-project-index.mjs` were exercised only against
a fixture their own author wrote and then deleted before committing. `onboard`
has never parked a real PRD. The index's **Front step** section has never held
a slip that anyone intends to consume. The Decision log has never rendered a
`Decision` that a human made.

A skill proven only by its author's fixture is proven against its author's
assumptions. The first real onboarding is the actual test, and it should be
expected to find something.

## 6. The offices are still cold

No verb has been performed on an idea since the clean slate. The `capture`
that produced this residue is the **first verb to run in the estate since the
wipe** — and it ran on the machinery, not on an idea. The Household view will
show most offices as never called, which is now true twice over: once for the
estate's history, and once again since its refounding.

## 7. Item 1 recurred before this residue was closed — the writer seam was fiction in the UI

Written after items 1–6, while filing this very artifact.

The first `capture` since the clean slate produced this residue, and the UI
attributed it to **The Steward**. `capture` is The Gardener's
(`system/registry.md`, ADR 0013). The cause: `ui/scripts/generate.mjs` read the
office out of the registry table by **column position**, expecting the fourth
column, while the generated table has been `Verb | Signature | Voice | Run`
with the office in the third. The regex matched **zero rows** — and the code's
fallback on no match is `'The Steward'`.

So every artifact the Estate View has ever rendered was labelled The Steward
except Seeds, which survived on a hardcoded `|| 'The Sower'`. The Household
view's count of offices ever called was wrong by the same mechanism, in the
view whose entire subject is *who did what*. The estate's most-repeated
structural claim — the writer seam, the office that performs versus the
Steward that records — was displayed as uniformly false, and it looked
plausible, because a Steward-heavy estate is exactly what one would expect.

Two things make this worth more than its fix:

- **It is item 1 again, immediately.** A tool that reads the estate broke
  silently, no check noticed, and it was found by accident while writing the
  observation that no check would notice. One data point is an anecdote; the
  same failure twice in one session, in two different readers, is the shape of
  the gap.
- **The failure mode was a silent fallback.** The parser could not tell "this
  verb has no office" from "I did not understand this table," and it answered
  both with a plausible name. It now parses by cell *shape* rather than
  position, and warns loudly when it finds no rows at all — a wrong answer
  should be loud, and this one was quiet for as long as the table has had four
  columns.

## 8. What worked, and is worth keeping: fixture-and-teardown

Building a throwaway project tree — a scoped record, a root record, a Seed, a
cross-tree citation — then deliberately injecting each failure the new checks
were written for (duplicate id, orphaned Seed, invalid `target:`, an unstamped
processed slip), confirming each error fired with the right message, and
deleting the fixture before commit.

It caught every new check *and* the crash in item 1, which nothing else was
looking for. It cost minutes. The temptation it defeats is validating a
generator by reading its source, which would have left all four checks and the
crash undiscovered.
