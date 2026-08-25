# ADR 0014: Vision reconciliation — lenses, shapes, restored verbs, connective records

**Status:** accepted · **Date:** 2026-08-25 · **Source:** divergence audit requested by T

## Context
T asked for an audit of the built system against `VISION.md`, worried it had
drifted. The audit found three classes of divergence: choices T made in the
interview (sanctioned), consequences of those choices T had not explicitly
signed off on, and omissions made without asking. This ADR records the
resolution of each and the resulting rewrite of the protected documents.

## Decisions

**1. Lenses restored, trimmed to six.** They were a settled first-class
dimension in `VISION.md` and `BRAINSTORM.md`, and were built as nothing at all —
the Steward's handoff packet said "lens" with no vocabulary behind the word.
Restored as `system/LENSES.md` with six that pull against each other:
`technical`, `commercial`, `user`, `adversarial`, `long-term`, `ethical`.
Sixteen was rejected under the **no giant taxonomy** non-goal. Lenses need no
agent and no binding — they modify a verb rather than performing work.

**2. Type and shape split, resolving the output-siloing contradiction.** Typed
verbs meant the verb fully determined the artifact type, directly violating the
*no output-type siloing* non-goal. Resolution: the verb determines the **type**
(composition and gap calculation require it); the operator determines the
**shape** it renders as — `prose`, `prd`, `research-brief`, `decision-record`,
`phases`, `harness-architecture`, `prototype-design`, `none`. A `Horizon` may be
rendered as a PRD; an `explore` session may produce one. Type is for the
machine, shape is for the reader. Verb/lens/shape are now the three dimensions.

**3. Six verbs restored.** `research` (The Factor — the only agent with web
tools, and the first real per-agent tool grant), `compare` and `review` (The
Assayer), `decide` (The Chancellor), `incubate` and `retire` (The Keeper). Four
new agents; roster now twelve plus the Steward, seventeen verbs. `decide` was
the sharpest gap: `VISION.md` listed both a `decide` mode and a decision-record
output, and the built system had no way to record a decision anywhere but prose.
Three new artifact types: `Findings`, `Appraisal`, `Decision`. Two new verb
families: **reader** (`[Idea] → r`) and **transition** (`Idea → Idea`, changing
status not content).

**4. The Seed generalized rather than duplicated.** Its components survived
testing against a mathematical conjecture and a narrative premise; only the
*wording* was project-locked. "Start Monday" became "the next concrete move";
"what this project will not become" became "what this will not become". One
Seed, genuinely domain-general, no second terminal type and no weakened
contract.

**5. `connective` status added.** Seed-distance ranking would leave an idea
whose destiny is a single `relates` edge last forever, though `VISION.md` names
that outcome a success. Such a record is excluded from Seed-distance ranking and
surfaced by the convergent pass instead.

**The signal is inbound use without forward motion — never time alone.** T
correctly challenged a dormancy-based trigger: "untouched for months" also
describes the raw, promising, outranked idea the scoring exists to rescue. A
record earns `connective` only when its `relates` degree and inbound `inputs:`
references grow while its own state sequence stays flat. Computed by The
Cartographer during `survey`, **proposed** by the Steward as a convergent
notice, never assigned; the operator may also declare it. Unknowable early by
design.

**6. Tensions restored** to the record and state templates — competing framings
pulling against each other, explicitly distinguished from open questions: a
question awaits an answer, a tension awaits a choice and may never resolve.

## The protected documents
T authorized reconciliation, so the ADR 0010 hold is released.

- **`VISION.md`** — rewritten. Mission is extraction-first while preserving the
  connective-success example; adds immutable state, derived lineage, the three
  dimensions, classification-not-certification, the estate roster, the
  portfolio, and the falsifiers.
- **`README.md`** — rewritten around the foundry framing, the law, and the
  roster.
- **`AGENTS.md`** — precedence order corrected: `system/LAW.md` first, and it
  states plainly that a spawned agent must read the law itself because
  `AGENTS.md` never reaches it.
- **`BRAINSTORM.md`, `BUILD-PROMPT.md`** — preserved **unedited** with a
  historical-record banner naming what each superseded. They are lineage, and
  lineage is never discarded.
- **`docs/idea-pipeline.html`** — untouched, as instructed.

## Consequences
- Seventeen verbs and twelve agents is a large roster. Each verb was requested
  by T and each agent exists because a verb requires one under hard binding — it
  remains need-driven, but the **no giant taxonomy** non-goal is now under real
  pressure and should be watched.
- `research` grants a web-capable agent. It is the sole external integration and
  is non-critical by construction: the system functions without it.
- The falsifier clock is unchanged and running to **2026-09-25**. None of this
  is evidence of use outside the repo.
