---
id: idea-0001/artifacts/0005-comparison-and-pivot-residue.md
type: SessionResidue
shape: prose
lenses: []
produced-by: capture
inputs:
  - ideas/0001-the-estate/artifacts/0002-first-full-arc-residue.md
  - ideas/0001-the-estate/artifacts/0004-estate-vs-openspec-appraisal.md
date: 2026-09-12
classifiers:
  challenged: false
potential-next-steps: [challenge, decide]
summary: "Seven observations from a session that compared the estate to OpenSpec and asked whether a Trajectory can pivot: the mandatory orientation read declined and no lighter one exists; research with no record had nowhere to put its Findings; compare again ran on options that were never artifacts; the Steward asked the close question twice before delivering any artifact; a re-charted Trajectory silently orphans every Phase beneath it because the validator is blind below Seed; the Trajectory is one monolith and its sequencing lives in prose; and the falsifier is thirteen days out with nothing exported while the session compared."
---

# Residue: the comparison session and the pivot question

What 2026-09-12 revealed about the estate's own functioning, observed while
comparing it to an outside tool and answering T's question about
trajectories. Filed here because every item is about the machinery.

## 1. The orientation read was declined, and nothing lighter exists

`/start` prescribes reading the law, every record's frontmatter, the survey
and the inbox before speaking. T declined that read on the first call. The
Steward proceeded on a partial picture and said so. There is no sanctioned
lighter orientation; the choice is the full read or an honest confession.

## 2. `research` assumes a record

T asked for a comparison with no record opened. The Factor was dispatched
and had no `artifacts/` to write into; its Findings landed in a scratch
directory and were re-homed here afterward by hand. The skill's contract,
"the artifact stays in the record's `artifacts/`", has no branch for a
question that belongs to no idea yet. Idea 0001 absorbed it, which is the
right home, but nothing said so in advance.

## 3. `compare` ran on options that were never artifacts, again

Residue 0002, open question 1, asked whether the estate needs a way to hold
candidates. This session compared the estate itself to an external tool.
Neither option was an artifact; the Findings stood in for one side and the
repository for the other. The verb worked. The type system did not
participate.

## 4. Ask, then deliver: inverted twice in one session

The Steward performed `compare` and then asked "what would you like to do
next" before the Appraisal had been shown or written. It did the same on
T's trajectory question: read the skills, then asked which direction to
take, with no assessment delivered. Two rounds of questions, zero
artifacts, until T said "continue." T's standing preference, ask before
inferring, and ADR 0028's "a described intent runs an inline verb" pull
against each other, and the Steward resolved the pull by asking. Neither
rule is wrong. The sequence was: **the artifact lands first, the close
question follows.** The Steward broke it.

## 5. A re-charted Trajectory silently orphans its Phases

T asked whether a Trajectory can pivot when a new Spark arrives on an idea.
At the Trajectory level, yes, cheaply: `capture` the Spark on the record,
`chart` again, the new Trajectory names the old one and the Spark in
`inputs:` and becomes the tip. One verb, one artifact, one snapshot.

Below that level, no. Record 0003 carries fourteen Phase artifacts whose
`inputs:` name Trajectory 0012. After a re-chart they still name it. Tip
semantics run per type, so every Phase remains a tip. The validator warns
when a **Seed** is behind its record's head and owes reconciliation
(`scripts/validate-estate.mjs`, the ADR 0029 block); it has no equivalent
for a Phase behind its Trajectory. `phase` is `Trajectory → [Phase]`,
whole: there is no partial re-phase that carries unchanged legs forward and
re-emits only the changed ones. The estate would hold a fresh path and
fourteen stale steps and could not tell.

`graft` is the other pivot: a new record from a snapshot with a Direction.
It is a fork, not a replacement, and it is a boundary. `explore` on the
Trajectory is the cheapest path of all, and residue 0002 already named
`explore` as the catch-all that absorbs work other verbs were written for.

## 6. The Trajectory is a monolith; modularity begins only after `phase`

Trajectory 0012 is one 220-line file with fourteen legs as headings. Its
ordering and dependencies are a prose section. Phases become separate
files only once `phase` runs, and each Phase's dependency on its
predecessor is again prose in its body, with `inputs:` pointing only at the
parent Trajectory. Nothing in frontmatter says "this leg depends on that
one" or "done when." Legs are therefore not independently re-orderable,
swappable, or retirable by anything but a human reading.

## 7. Thirteen days, still nothing exported

`system/FALSIFIERS.md` set 2026-09-25 as the date by which evidence of use
outside this repository must exist. This session spent itself comparing the
estate to a tool that covers a different stage, and appraising its own
trajectory mechanics. Both were asked for. Both are the building-over-using
failure mode, running, with a date on it.
