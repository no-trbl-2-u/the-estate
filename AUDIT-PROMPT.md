---
type: Prompt
title: "Audit Prompt"
description: "Standalone brief for an outside agent auditing this implementation."
tags: [audit]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Audit Prompt — The Estate implementation review

Paste this into a fresh session with no prior context. It is a standalone
briefing.

---

## Your task

You are auditing **The Estate**, an AI-assisted idea foundry implemented
entirely as markdown, Claude Code skills, and subagent definitions. There is no
code to run and no tests to execute — the "implementation" is a set of documents
that instruct agents, so the audit is a **design and coherence review**, not a
test run.

Read the repository in full before forming any opinion. Then answer three
questions:

1. **Does it function the way it intends to?**
2. **What verbs are missing?**
3. **What offices (agents) are missing?**

The operator has one candidate already in mind — see *Standing questions* below.

---

## What the system is

**Extraction-first.** Ideas enter loose and leave as **Seeds** — an elaborated
six-month vision (Horizon) plus a rough path (Trajectory), thin on
implementation — carried out to become real projects elsewhere. Recall and
lineage are side effects, not the product.

**Typed and composable.** Artifacts are typed values; verbs are functions over
them, in five families: refiners `a → a`, transformers `a → b`, decomposers
`a → [b]`, readers `[Idea] → r`, transitions `Idea → Idea`. A playbook is a
composition. The payoff is **route derivation**: the Steward computes the gap
between a record's artifacts and Seed-shape, and recommends the verb that closes
the most of it — so routes differ because gaps differ, never because a pipeline
was hand-authored.

**The three-part law** (`system/LAW.md`) governs everything: agents are a
specific person; verbs are verbs; specific agents perform specific verbs as a
**hard dependency** — no fallback, no substitution. If a verb's agent is
unavailable, the verb does not run.

**The writer seam.** Agents write artifacts; the Steward writes state.

**Immutable state.** Every session copies the last snapshot forward. Time travel
is opening an older file; branching is copying forward from one; the original is
never altered because nothing is ever altered. Lineage is therefore **derived**
from `inputs:`/`outputs:` chains — `relates` is the only hand-authored edge.

**Classification, not certification.** Quality is recorded structurally in
frontmatter classifiers and **never gated**. Grade, never gate.

**Three dimensions:** verb (what work), lens (what angle), shape (how it
renders). The verb fixes an artifact's *type*; the operator picks its *shape*.

---

## Read these, in this order

1. `system/LAW.md` — the governing law
2. `VISION.md` — intent, principles, non-goals, success criteria
3. `system/TYPES.md` — verb families, artifact types, the Seed contract, shapes
4. `system/registry.md` — every verb, every agent, every binding
5. `system/SCORING.md` — portfolio ranking and the `connective` status
6. `system/STEWARD.md` and `.claude/skills/steward/SKILL.md`
7. `system/LENSES.md`, `system/FALSIFIERS.md`
8. `AGENTS.md` — repo-wide orientation and precedence
9. `.claude/skills/*/SKILL.md` — all seventeen verbs
10. `.claude/agents/*.md` — all twelve specialist offices
11. `templates/` — idea, state, artifact, seed
12. `docs/adr/` — eighteen ADRs; the index first, then any that matter
13. `docs/architecture.html` — the visual model of the whole flow

`BRAINSTORM.md` and `BUILD-PROMPT.md` are **historical records**, preserved
unedited behind banners. Read them for lineage, but where they conflict with
`system/`, `system/` wins.

---

## Part 1 — Does it function as intended?

Trace real scenarios end to end, on paper, citing the files that would govern
each step. Note where a step is under-specified, ambiguous, or would plausibly
be performed differently by two competent agents.

**Scenarios worth tracing:**

- **Cold start.** A new operator opens the repo and types "I have an idea about
  X." Who responds, in what voice, and what exactly gets written to disk?
- **Full run.** Spark → Framing → Horizon → challenged → Trajectory → Phases →
  Seed. Does every handoff typecheck? Does each agent have the tools it needs?
- **Resume.** A record is opened three months later. Does the Steward have
  enough to resume without re-explaining, and does the "honest freshness" rule
  actually work?
- **Branch.** Branching from `state/0001` when head is `state/0004`. Does the
  spec say clearly enough what the new record's `previous:` and id are?
- **Export.** A Seed leaves for a friend's business — a non-technical audience.
  Does the Seed template actually serve that reader?
- **Portfolio.** Forty records exist. Does `survey` produce something useful, and
  is `ideas/SURVEY.md` staleness detection specified well enough to implement?
- **Failure.** A verb's agent is unavailable. Does the operator get a useful
  answer or a dead end?

**Hunt specifically for:**

- **Contradictions** between `VISION.md`, `system/`, ADRs, and the skill files.
- **Unenforceable rules** — anything the documents assert that no reader is
  actually positioned to obey.
- **Underspecification** — where a verb says *what* but not enough *how* for two
  agents to produce comparable output.
- **Type holes** — pairs that should compose but can't, or verbs whose declared
  signature doesn't match what their instructions actually do.
- **Orphans** — types produced by no verb, or consumed by none. `Findings`,
  `Appraisal`, and `Decision` are worth checking hardest: they were added late,
  and it is not obvious they feed anything downstream.
- **The derived-lineage fragility** — lineage exists only if agents faithfully
  record `inputs:`. Is that instruction prominent enough to be reliably obeyed?
- **Taxonomy pressure.** "No giant taxonomy" is a stated non-goal, and the system
  now carries 17 verbs, 13 offices, 10 types, 6 lenses, and an open shape
  vocabulary. Is it past the point where an operator can hold it in their
  head? If so, what would you merge?

---

## Part 2 — Missing verbs

Propose only verbs that are genuinely unreachable today, and for each give:
signature, family, owning office (existing or new), what it produces, and the
gap it closes. Say plainly if you think nothing is missing — the non-goal cuts
against additions, and a shorter honest list beats a longer speculative one.

## Part 3 — Missing offices

Same rigor. Under the hard-binding law, **a new verb requires an owning agent**,
so a proposed verb without an office is incomplete. An agent may own several
verbs; do not propose a new office where an existing one plausibly fits.

Every agent is named thematically for **The Estate** — a great house and its
grounds, run on behalf of an owner who retains all authority. Existing offices:
The Steward, Gardener, Architect, Surveyor, Forager, Distiller, Advocate,
Factor, Assayer, Chancellor, Cartographer, Keeper, Sower. Name any proposal in
that world and in the form "The ⟨Something⟩".

---

## Standing question: The Dreamer

The operator is considering an office — provisionally **The Dreamer** — that
would **extrapolate one idea into multiple potential sub-ideas**. Evaluate it
seriously and specifically:

- **Is it already covered?** The Forager (`explore`) develops one artifact
  open-endedly and returns the same type. The Surveyor (`phase`) decomposes
  `Trajectory → [Phase]`. Is fanning one idea into several *sibling ideas*
  genuinely a third thing, or a rename of one of these?
- **What is the signature?** Plausibly `a → [Idea]` — a decomposer that emits
  new *records* rather than artifacts within one record. If so, note that this
  would be the **first verb that creates records other than the one it was
  invoked on**, and say what that implies for lineage: each child needs a
  `parent` derivation and a snapshot origin.
- **Does it fight the vision?** The operator locked **"notice more, not finish
  more"** — but also named their own failure mode as loving to *start* things. A
  verb that manufactures new ideas from existing ones could be exactly the
  amplifier they do not need. `system/SCORING.md` argues the noticing worth
  supporting is *convergent* (two records are secretly one idea), and The Dreamer
  is purely *divergent*. Take a position on whether that is a fatal objection, a
  manageable one, or wrong.
- **What guards would it need?** Consider: a cap on children per invocation;
  children born `incubating` rather than `active`; requiring the parent to have
  a Framing first, so it fans a *defined* space rather than a vague one.
- **Where does it belong?** If it survives, propose its office and verb name, or
  argue it should be a lens or a shape rather than a verb.

Give a clear verdict — build it, build it with guards, or don't — and say what
would change your mind.

---

## How to report

Write a single markdown report. Order findings **most severe first**, and for
each give: what you found, the file and line that shows it, why it matters, and
a concrete proposed fix. Separate confirmed problems from suspicions, and label
them.

Then a short section for each of Parts 2 and 3, and your Dreamer verdict.

**Do not edit any file.** This is an audit. Propose; the operator decides.

Two things to be hard about:

- **Be adversarial about the parts that sound good.** This system is written
  persuasively and describes itself in flattering language. Fluent prose is not
  evidence. If a rule cannot be obeyed, say so no matter how well it reads.
- **Judge it against its own falsifier**, recorded in `system/FALSIFIERS.md`:
  *"I'll have failed if within a month, I have no evidence of using this outside
  this repo."* The named failure mode is that building The Estate is more
  interesting than using it. Weigh every addition you propose against that: does
  it move a Seed out the door, or does it make the machine more interesting?
