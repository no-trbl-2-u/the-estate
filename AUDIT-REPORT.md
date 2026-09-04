---
type: Report
title: "Audit Report"
description: "The 2026-08-26 design-and-coherence audit: seventeen findings, scenario traces, and the Dreamer verdict."
tags: [audit, report]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
---

> Historical record (pre-ADR 0027). The .claude/agents/ layer it references was retired; office names survive only as skill voice: values.

# Audit Report — think-tank implementation review

Conducted 2026-08-26 against `AUDIT-PROMPT.md`, by an outside session with no
prior context. The whole repository was read before any finding was formed:
`system/` in full, all seventeen skills, all twelve agent definitions, the
templates, all fourteen ADRs, both historical documents, and both HTML visuals.
No file was edited; this report is the only addition.

> **Named `think-tank` throughout.** The project was renamed **The Estate**
> on 2026-08-26 (ADR 0016), after this report was written and its findings
> fixed (ADR 0015). File paths cited below are the pre-rename ones — notably
> `ideas/0001-think-tank/`, now `ideas/0001-the-estate/`. The report is left
> as written: it is the record of what was found, on the day it was found.

**Headline answer to Part 1:** the system mostly functions as intended *on
paper*. The spine (Spark → Framing → Horizon → Trajectory → [Phase] → Seed)
typechecks, resume and session close are well-specified, and the honesty
machinery — freshness reporting, survey staleness stamps, classifiers-not-gates
— is genuinely implementable, which is rarer than it sounds. But it fails in
four confirmed places, and three of them sit on the *most-used* paths: the very
first artifact of every idea, the `challenge` verb the canonical run depends
on, and the assumption that the main session knows it is The Steward at all.

Findings are ordered most severe first. Each is labeled **Confirmed** (the
cited text contradicts itself or another cited text) or **Suspicion** (a
judgment call that could be argued).

---

## Part 1 — Findings

### F-1 · The front door has a type hole: nothing produces the first Spark — **Confirmed**

**Where:** `.claude/skills/steward/SKILL.md:56-58` vs
`.claude/skills/capture/SKILL.md:14-17` and `system/registry.md:15`.

**What:** For a new idea, the Steward "create[s] `ideas/NNNN-slug/` …, record[s]
the origin verbatim, write[s] `state/0000.md`", and then asserts "(usually
`capture` is already done by the act of recording; often `frame`)". But
`capture` is `Text → Spark` and produces "one artifact from
`templates/artifact.md` with `type: Spark`". The Steward's record creation
writes `idea.md` (Origin section) and a state snapshot — **no `type: Spark`
artifact exists**. So either:

- the Steward's origin-recording *is* capture, in which case the Steward is
  performing a bound verb inline — the exact thing `system/LAW.md:24-34` and
  `AGENTS.md:17-31` forbid at length; or
- it isn't, in which case "capture is already done" is false, no Spark exists,
  and `frame` (`Spark → Framing`) has no input to typecheck against. The very
  first handoff of every idea's life fails.

**Why it matters:** this is the most-trodden path in the system — every idea
enters here. The route derivation the system is proudest of starts from a type
that was never produced.

**Fix (pick one, write it down):** (a) The Steward creates the record *shell*
only and always dispatches `capture` to The Gardener, who writes the Spark
artifact from the operator's words — one extra dispatch, law intact; or
(b) declare in `system/TYPES.md` that `idea.md`'s Origin section *is* the
Spark (capture's output lives there for a record's first artifact), and adjust
`frame` to accept it. Option (a) is cleaner; it also gives the Gardener's
"fidelity beats polish" instruction a real job on day one.

---

### F-2 · The Advocate is ordered to write artifacts and denied the Write tool — **Confirmed**

**Where:** `.claude/agents/advocate.md:4` (`tools: Read, Grep, Glob`) vs
`.claude/agents/advocate.md:36` ("**You write artifacts.** Your attack is
yours… Use `templates/artifact.md` frontmatter") and
`.claude/skills/challenge/SKILL.md:16-19` ("Output the same type: the artifact
revised where it bent… Set `classifiers.challenged: true`").
`docs/architecture.html:451` labels the Advocate "read-only · cannot write" —
presenting the defect as a feature.

**What:** Every other artifact-writing agent has Write. The Advocate does not,
yet its own definition and its verb's instructions require it to produce a
revised artifact and set classifiers in frontmatter. Under the writer seam
(`system/LAW.md:68-79`) the only alternative writer is the Steward — who writes
state, not artifacts, and whose transcription would be precisely the
"summarizing relay [where] thinking goes to die" the law prohibits.

**Why it matters:** `challenge` is not a peripheral verb. The canonical run
includes it, the `challenged:` classifier depends on it, and ADR 0004's whole
grading scheme routes through it. As shipped, every `challenge` invocation
dead-ends at the write.

**Fix:** grant the Advocate `Write`. If read-only was a deliberate safety
posture (an attacker that cannot alter the record), then say so and redefine
`challenge`'s output as *returned findings* that the Steward records **verbatim
into a new artifact file, unedited** — and amend `LAW.md` to name that one
seam exception explicitly. Either is fine; the current state is neither.

---

### F-3 · Standing identity depends on `AGENTS.md` auto-loading — and there is no `CLAUDE.md` — **Confirmed in this environment; Suspicion generally**

**Where:** `AGENTS.md:7-14` ("If you are the main session in this repository,
you are The Steward… act as it describes from your first reply"),
`system/LAW.md:22-34`.

**What:** The entire enforcement story — standing identity, never performing a
bound verb inline, the greeting — rests on the main session having read
`AGENTS.md` before its first reply. The repository contains no `CLAUDE.md`.
Empirical data point: in the session that performed this audit (Claude Code,
remote), `AGENTS.md` was **not** injected into context at session start; a
fresh operator typing "I have an idea about X" would have been answered by a
plain assistant, not The Steward. The law itself concedes "Nothing in the
harness enforces this" — but it assumes the instruction at least *reaches* the
main session, and in at least one real environment it does not.

**Why it matters:** the cold-start scenario — the audit prompt's first trace —
fails before the first word. Everything downstream of "the main session is The
Steward" is unreachable if the main session never learns it.

**Fix:** add a `CLAUDE.md` whose entire content points at `AGENTS.md` (or
duplicates the standing-identity block). One file, a few lines, no downside,
and it closes the gap in every harness that reads `CLAUDE.md` but not
`AGENTS.md`.

---

### F-4 · `relate` orders the Cartographer to write state — the seam's own skill violates the seam — **Confirmed**

**Where:** `.claude/skills/relate/SKILL.md:16-21` vs `system/LAW.md:68-75`.

**What:** relate's instructions: "1. Add each record's id to the other's
`relates:` list in `idea.md` frontmatter. 2. **Copy each record's state
forward** with a note explaining why…" But "The Steward writes state.
`state/` snapshots and the session close belong to the Steward alone" — with a
stated rationale (single allocator for an immutable sequence) that the
Cartographer writing snapshots into *two* records directly defeats. Note also
that the second record's session was never opened, so its new snapshot has no
close protocol behind it.

**The wider hole:** `idea.md` frontmatter is neither artifact nor state, and
the seam never assigns it. Three parties write it as specified: the
Cartographer (`relates:`), the Keeper (`status:` — `incubate`/`retire` SKILL
files), and the Steward (`state-head:`, necessarily — see F-5). "Agents write
artifacts; the Steward writes state" is presented as *the* single most
important operational rule, and the file most contested by concurrent writers
is covered by neither half of it.

**Fix:** amend `LAW.md` with one sentence — "record frontmatter (`idea.md`) is
state" — and rewrite `relate`/`incubate`/`retire` so the agent *returns* the
edge/status/reason and the Steward writes it. This costs the transitions
nothing: they produce judgment (the why, the wake condition), not artifacts,
and judgment travels fine in a return value.

---

### F-5 · Nothing ever instructs anyone to update `state-head:` — **Confirmed**

**Where:** close protocol in `.claude/skills/steward/SKILL.md:87-97` and
`system/STEWARD.md:46-52`; consumers at `templates/idea.md:5`,
`.claude/skills/steward/SKILL.md:32-35` (survey staleness diff), and
`.claude/skills/survey/SKILL.md:24-29`.

**What:** The close protocol enumerates everything the Steward writes at
session end — snapshot copied forward, summary, decisions, nuggets, open
questions, declaration, the exact question. It never says to bump
`state-head:` in `idea.md`. Yet the Steward's orientation reads `state-head`,
and the survey's entire staleness mechanism is a diff of `covers:` stamps
against each record's `state-head`. If `state-head` silently lags, staleness
detection reports *fresh* — the one failure mode the mechanism exists to
prevent, failing invisibly.

**Fix:** add "update `state-head:` in `idea.md` to the new snapshot" as an
explicit numbered step of the close protocol, in both files.

---

### F-6 · Reachability, as defined, scores raw Sparks at zero — the opposite of its stated purpose — **Confirmed**

**Where:** `system/SCORING.md:17`; Seed components at `system/TYPES.md:41-52`;
`templates/idea.md:7`.

**What:** Reachability is "Of the Seed components this record is missing, how
many would the single best next verb fill?" The Seed components are Horizon,
Trajectory, next concrete move, refusal, provenance stamp. A raw Spark's best
next verb is `frame` — which fills **zero** Seed components, because Framing
is not one. So a raw Spark computes reachability 0 and ranks last — while the
very same table row claims the metric "favors early, high-leverage ideas over
nearly-done ones, so raw Sparks are not permanently outranked." The formula
does the reverse of its caption. Compounding it: `appetite` is a multiplier
and the template defaults it to `0`, so every new record scores exactly 0
until the operator remembers to hand-set heat.

**Why it matters:** the score's one job is a zero-reasoning answer to "what
should I work on next?", and the spec's worked definition buries exactly the
records ADR 0007 says it exists to rescue. Two competent Cartographers reading
this file today would ship different, mutually inconsistent surveys.

**Fix:** define reachability over the *remaining chain* to Seed-shape, not the
terminal components — e.g., "of the typed steps still between this record and
Seed-shape, what fraction does the best next verb complete?" (a Spark with 5
steps left where `frame` completes 1 scores 1/5, not 0). And default
`appetite: 1`, reserving 0 for deliberately cold.

---

### F-7 · Dispatched verbs promise dialogue that a subagent cannot have — **Confirmed**

**Where:** `.claude/skills/capture/SKILL.md:19` ("Ask at most one clarifying
question"), `.claude/skills/challenge/SKILL.md:22` ("the operator may stop the
attack at any time"), `.claude/skills/decide/SKILL.md:15` ("The operator may
decline to decide").

**What:** Under hard binding plus mandatory dispatch, these verbs run inside
spawned subagents. A subagent runs to completion on its handoff packet; it has
no channel to the operator mid-run. The Gardener cannot ask its one question;
the operator cannot stop The Advocate mid-attack; the Chancellor cannot hear a
decline. These are unenforceable rules in the audit prompt's exact sense: no
reader is positioned to obey them.

**Fix:** either specify the relay — "an agent needing operator input returns
the question *instead of* an artifact; the Steward relays and re-dispatches
with the answer in the packet" (one paragraph in `LAW.md` or `STEWARD.md`) —
or delete the clauses and move that judgment to the Steward's pre-dispatch
conversation, where dialogue actually exists.

---

### F-8 · Registry, TYPES, and the architecture diagram disagree about verb families — **Confirmed**

**Where:** `system/registry.md:23` vs `system/TYPES.md:11-17` vs
`docs/architecture.html:323,335`.

**What:** three separate contradictions:

- `relate`'s family is "edge author" in the registry — a family the TYPES.md
  table (which claims to define the families) does not contain.
- `docs/architecture.html` files `relate` under **Transitions** — whose own
  caption says "change a record's *status*, never its content." `relate`
  changes content (frontmatter lists, a why-note) and never status.
- `docs/architecture.html` files `compare` under **Decomposers** (`a → [b]`);
  the registry says transformer `[a] → Appraisal`. Neither is right by the
  table: `[a] → b` is an *aggregator*, a shape no declared family covers.

**Why it matters:** the type discipline is the system's stated payoff; the
three documents an operator would use to learn it teach three different
algebras. The diagram is the worst offender because it is the most persuasive.

**Fix:** in TYPES.md, either add the two missing shapes honestly (edge-author
`(Idea, Idea) → edge`; aggregator `[a] → b`) or widen transformer to cover
list inputs — then make registry and diagram match it.

---

### F-9 · `Findings`, `Appraisal`, `Decision` are orphans, and route derivation can never recommend them — **Confirmed** (the audit prompt's suspicion, verified)

**Where:** `system/registry.md:13-31` (no verb consumes any of the three);
`system/TYPES.md:41-52` (none appears in the Seed contract);
`.claude/skills/steward/SKILL.md:65-69` (route = "the verb that closes the
most gap" toward Seed-shape).

**What:** No verb takes Findings, Appraisal, or Decision as input, and none of
them is a Seed component — so `research`, `compare`, `review`, and `decide`
close zero Seed-gap by construction, and the Steward's routing algorithm will
structurally *never* propose them. They run only when the operator asks by
name — which is exactly the memorization burden the system promises to remove.
Two smaller type holes travel with this: `Question` (research's input) and
`Tensions` (decide's input) are not artifact types, so a Decision's `inputs:`
has no artifact path to cite and its lineage chain dangles.

**Why it matters:** a third of the verb set is invisible to the mechanism the
documents call "the payoff." Not fatal — these verbs inform the human — but
the docs oversell derivation as covering the system, and the derived-lineage
promise ("every verb records what it consumed") quietly fails for `decide`.

**Fix:** two sentences in TYPES.md: (1) state snapshots are legal `inputs:`
targets (decide consumes the snapshot holding its tensions; lineage restored);
(2) extend gap-derivation beyond Seed-components the same way ADR 0004 already
does for classifiers — "unresolved tension in the head snapshot → suggest
`decide`; open question shaped like a fact → suggest `research`." Grading is
already doing gating's work; let tensions do routing's.

---

### F-10 · Branching is promised everywhere and specified nowhere — **Confirmed**

**Where:** `VISION.md:44-47`, `ideas/README.md:14-19`,
`docs/architecture.html` §04, `templates/state.md:3`.

**What:** Every document repeats the slogan (branching is copying forward from
an older snapshot into a new record; `previous:` records the exact origin).
None specifies: the cross-record form of `previous:` (the template shows only
same-record relative paths — `state/NNNN-1.md`); who allocates the new record's
id; whether the branch's state numbering restarts at `0000`; whether Origin is
copied or written fresh; or how `parent` is then derived from the result. The
audit prompt's branch scenario (branch from `state/0001` while head is `0004`)
cannot be executed two ways the same by two competent Stewards today.

**Fix:** a ten-line "Branching" section in `ideas/README.md`: new directory,
next global NNNN, state restarts at `0000` with
`previous: idea-NNNN/state/0001.md` (the one cross-record `previous:` form),
Origin copied verbatim plus one line naming the branch point, `parent` derived
from any cross-record `previous:`.

---

### F-11 · Refiner mechanics: revise in place or new version? Nobody says — **Confirmed**

**Where:** `.claude/skills/challenge/SKILL.md:16-18` ("the artifact revised
where it bent… Set `classifiers.challenged: true`") vs
`.claude/skills/distill/SKILL.md:16-17` and `explore/SKILL.md:16-18` ("a new
version of the artifact, `inputs:` pointing at its predecessor").

**What:** distill and explore imply immutable artifacts with versions-as-new-
files; challenge reads most naturally as mutation of the existing file —
against "nothing is ever altered." If versions are new files, no naming
convention exists (`templates/artifact.md` shows `NNNN-slug.md`, no version
notion), and gap-derivation now needs a "current version" resolution rule
(walk the `inputs:` chains to the un-superseded tip?) that no document states.

**Fix:** one paragraph in TYPES.md: artifacts are immutable like state;
refiners write a new file (next artifact NNNN, same slug), `inputs:` names the
predecessor; the current version of an artifact is the one no other artifact
of the same type supersedes via `inputs:`. Challenge revises *as a new
version* and sets classifiers there.

---

### F-12 · `Brief` is produced by no verb — **Confirmed, small**

**Where:** `system/TYPES.md:31` ("Produced by: any point in a run") vs the
system's own rule that the verb fixes the type (`system/LAW.md:59`).

**What:** every other type names its producing verb; Brief names a
circumstance. `seed/SKILL.md` implies the Sower assembles Briefs ("The
operator may export anyway as a `type: Brief`") but nothing says so.

**Fix:** bind it: `seed` emits `Seed | Brief` (Brief when components are
missing and the operator exports anyway). One cell in the TYPES table.

---

### F-13 · Eleven agent definitions point at a nonexistent path — **Confirmed, mechanical**

**Where:** line 15 of `architect`, `assayer`, `cartographer`, `chancellor`,
`distiller`, `factor`, `forager`, `gardener`, `keeper`, `sower`, `surveyor`
in `.claude/agents/`: `You own the verb(s): … (.claude/skills/<verb>/SKILL.md)`.

**What:** the `<verb>` template placeholder was never expanded; only
`advocate.md` carries a real path. An agent that follows its own pointer to
read its verb's instructions hits a file that does not exist.

**Fix:** expand per verb (multi-verb agents list both paths).

---

### F-14 · The only real record violates its own template — **Confirmed, minor**

**Where:** `ideas/0001-think-tank/state/0000.md:4` (`session-skill:`) vs
`templates/state.md:5` (`session-verb:`); the snapshot also lacks the
template's Tensions section.

**What:** the snapshot predates the reconciliation and is immutable — fine —
but it is also the only worked example in the tank, and worked examples get
imitated over templates. **Fix:** nothing to 0000 (frozen, correctly); when
its state is next copied forward, conform the copy and note the rename.

---

### F-15 · The one displayed composition doesn't typecheck — **Confirmed, cosmetic**

**Where:** `system/registry.md:85`, `playbooks/spark-to-seed.md:3`:
`capture ∘ frame ∘ envision ∘ challenge ∘ chart ∘ phase ∘ seed`.

**What:** `∘` composes right-to-left; as written this applies `seed` first.
For a system whose identity is typed functional composition, its single
worked composition is backwards. **Fix:** reverse it or use a left-to-right
pipeline arrow (`capture ▸ frame ▸ …`).

---

### F-16 · Two shapes leak the operator's home domain — **Suspicion**

**Where:** `system/TYPES.md:71-72` (`harness-architecture`,
`prototype-design`) vs the domain-generality principle (`VISION.md:68-70`,
`AGENTS.md:69-71`).

**What:** a narrative premise or a mathematical conjecture never renders as
`harness-architecture`. Harmless, but the closed 8-item shape enum carries two
entries only a software operator would ever use, in a system that repeatedly
promises domain neutrality. **Fix:** declare the shape list open ("a
vocabulary, not an enum") or trim these two to an example note.

---

### F-17 · "Use ONLY via the challenge handoff packet" vs "connect the operator to an agent they name" — **Suspicion**

**Where:** `.claude/agents/advocate.md:3` vs
`.claude/skills/steward/SKILL.md:78-80` (step 5).

**What:** the Steward is told to route "let me talk to The Advocate" directly;
the Advocate's own description forbids any invocation outside the challenge
packet. One of them yields. **Fix:** decide whether direct audiences with
specialists are a feature (the estate metaphor suggests yes) and align the
descriptions.

---

### Taxonomy pressure — the audit prompt's direct question

17 verbs + 12 agents + 10 types + 6 lenses + 8 shapes + 4 statuses + 3
classifiers + 5 families ≈ **55 named things**. That is past what one head
holds — *and mostly by design it doesn't have to be held*: the
Steward-confirmation loop ("So you'd like The Advocate to `challenge`…?")
exists precisely so nothing is memorized, and it degrades correctly. I would
merge nothing today. If the count ever must shrink: `compare`/`review` are one
verb (`appraise`) wearing two arities — same agent, same output type — and
they are the only clean merge on the board. The places taxonomy is *actually*
costing are the family table (F-8) and the shape enum (F-16), not the verbs.

### Scenario traces, summarized

| Scenario | Verdict |
|---|---|
| Cold start | **Fails** without the harness loading `AGENTS.md` (F-3); with it, works except the missing first Spark (F-1) |
| Full run | Typechecks end to end **except** the challenge write (F-2) and the Spark origin (F-1); every other handoff has the tools and inputs it needs |
| Resume | **Works.** Current-state declaration + honest-freshness rule are specified well enough to obey; the weak link is `state-head` maintenance (F-5) |
| Branch | **Underspecified** (F-10) — two competent agents diverge immediately |
| Export | **Mostly serves.** The seed template's sections are sound for a non-technical reader; the YAML frontmatter block and the heading "Acceptance criteria" are developer-flavored. The Sower's audience-sizing instruction covers this *if obeyed* — add one line telling it to render classifiers as a plain sentence ("this vision hasn't been stress-tested yet") for human audiences |
| Portfolio (40 records) | Staleness detection (`generated:` + `covers:` vs `state-head`) is **specified well enough to implement**. The score itself is not (F-6) |
| Agent unavailable | **Works as designed** — an honest dead end. The gap report is specified; acceptable |

---

## Part 2 — Missing verbs

**None.** Two apparent gaps dissolve into existing machinery, which is the
best possible outcome for a system whose non-goal is taxonomy growth:

- **merge / absorb.** The sharpest apparent gap: the system's flagship
  convergent notice — "two records are secretly one idea" — seems to have no
  verb to act on it beyond `relate`. But it does, by composition: run `frame`
  (or `distill`) on the surviving record with `inputs:` citing artifacts from
  *both* records — the cross-record `inputs:` derives the merge edge exactly
  as ADR 0005 promises — then `retire` the absorbed record with reason
  "absorbed." No new verb, no new office. What is missing is only the
  *recipe*: nothing anywhere records that this is how merging works. Write it
  as `playbooks/merge.md` (and its mirror, split: `capture` a new record whose
  Spark cites the parent artifact as input). Two short playbooks close the
  gap at zero taxonomy cost.
- **The return path** (field reports from exported Seeds). Genuinely
  unreachable, genuinely deferred — ADR 0002 defers it on purpose and the
  provenance stamp keeps it open. Adding it before a single Seed has left
  would fail the falsifier test this report is required to apply. Leave it.

What Part 1 shows the system actually lacks is not verbs but *specifications*:
the branch spec (F-10), the refiner versioning rule (F-11), and the two
playbooks above.

## Part 3 — Missing offices

**None** — this follows from Part 2, since under the hard-binding law an
office is only ever justified by a verb. Candidates considered and rejected:

- **The Joiner** (merge) — unnecessary; merging is a composition (above).
- **The Librarian / The Archivist** (retrieval, search) — the Steward's
  existing office; splitting it would fracture the front door.
- **The Messenger** (carrying field reports back through the walls) — the
  right office *when* the return path ships; naming it now is speculative
  fleet-building, the exact thing ADR 0009 scoped out.

---

## The Dreamer — verdict

**Don't build it now.** Not because the idea is wrong — because the capability
already exists as a composition, and that composition is itself the best guard
anyone has proposed for it.

**Is it already covered?** It is genuinely a third thing in *kind* — the
prompt's instinct is right. `explore` refines one artifact and returns the
same type in the same record; `phase` decomposes along the *execution* axis
(steps toward one Horizon). The Dreamer fans along the *possibility* axis into
sibling records. Neither existing verb has that signature, which would be
`Framing → [Idea]` — and yes, that would be the first verb to create records
other than the one it was invoked on, requiring per-child `parent` derivation
and a snapshot origin.

**But it is covered in *capability*.** A Forager run already "generates
variants, chases implications" — the sub-ideas surface as content. Any variant
worth keeping becomes `capture` into a new record whose Spark cites the
parent's explore artifact in `inputs:` — at which point the split/parent edge
derives for free under ADR 0005, exactly like the merge recipe in Part 2. The
composition `explore`, then `capture` × N, *is* The Dreamer — with one crucial
difference: **each child costs an explicit operator decision.** That per-child
friction is a stronger guard than any cap, and it is the vision's own
"suggestions are not assignments" principle enforced structurally rather than
by rule.

**Does it fight the vision?** As an unguarded verb, fatally.
`system/SCORING.md` is explicit that divergent noticing "needs no help" — it
is the one thing a serial starter does unaided — and the operator named loving
to *start* things as their own failure mode. A verb that manufactures ideas
from ideas is an amplifier pointed at that failure mode. And the falsifier
cuts hardest here: shipping a divergence engine before a single Seed has left
the building (check date 2026-09-25, tank currently holds one record — the
system itself) would be the named failure mode executed in one commit. As a
*composition* with per-child operator consent, the objection is managed, not
fatal.

**Not a lens, not a shape.** A lens changes a verb's angle, not its output
count; a shape changes rendering. Fanning one record into several is
irreducibly verb-shaped. It is a verb or it is nothing.

**What would change my mind — build it when both are true:**

1. The falsifier has passed: at least one Seed exported and used outside this
   repo by 2026-09-25. (Amplify divergence only after extraction is proven.)
2. The state files show the manual composition performed by hand three or more
   times — documented friction, not anticipated friction.

Then admit it with the guards the prompt proposes, all four of which are
right: signature `Framing → [Spark]` (require a Framing, so it fans a
*defined* space, not a vague one); children born `incubating`, never `active`;
a cap of three per invocation; each child's `idea.md` Origin citing
`parent-id @ state-N` verbatim. Name the verb **`germinate`** — and give it to
**The Gardener**, not a new office. Propagation is gardener's work; the estate
already employs the right person, and the prompt's own rule ("do not propose a
new office where an existing one plausibly fits") decides it. "The Dreamer"
would also be the roster's first office named for a state of mind rather than
an estate function — the naming law survives better without it.

---

## A closing note the falsifier requires

`system/FALSIFIERS.md:26-28` instructs: if work in this repo is elaborating
the machinery while `ideas/` holds nothing live, *say so out loud*. Out loud:
this audit is itself machinery work, the tank holds exactly one record (the
system's own), and the clock runs to **2026-09-25**. Of everything above, the
fixes worth doing this week are the five that unblock real use — F-1, F-2,
F-3, F-5, and the merge playbook — and the fix worth doing above all is not in
this report: put an idea in the tank and drive it out the door.
