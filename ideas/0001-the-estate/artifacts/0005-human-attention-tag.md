---
id: idea-0001/artifacts/0005-human-attention-tag.md
type: Decision
shape: prose
lenses: []
produced-by: decide
inputs: []
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [challenge, phase]
summary: "T decided, and this Decision seals, that every step in every roadmap artifact — Trajectory legs and Phase steps alike — is evaluated by one question: can an AI agent perform this step? If it can, the step carries nothing. If it is work an agent cannot do no matter what, the step carries the inline marker **[HUMAN ATTENTION]**, and absence of the marker is itself an assertion that the work is AI-performable. The work that qualifies is purchases and payments, identity and credentials and consent, physical acts and acts in T's own relationships, taste and appetite T has reserved, choices whose content is T's judgment, and anything requiring a human to be answerable. Rejected: tagging by 'needs approval' — this estate approves everything by law, so such a tag would mark every step and discriminate nothing; it is kept only as a guard against drift and is no part of the criterion — plus a frontmatter classifier (the unit classified is the step, and a classifier cannot address a step), a graded scale (invites argument where the useful question is binary), and marking the AI-doable inverse (the estate marks the exception, and the exception is the smaller set). Grey band rule: tag the step if any part of it is human-only and say in the step what the agent does up to that line — a tag is a boundary marker, not an abdication. Binds chart and phase outputs from 2026-08-28 forward, does not rewrite sealed roadmaps, does bind the unmerged idea-0004 roadmap; reopens if agent capability swallows a tagged category, if the tag stops discriminating by appearing nearly everywhere or nowhere, or if a tagged step is ever completed without T's hands. It governs the form of roadmaps and not their content, and it does not touch idea-0004's two still-owed decisions, which remain open. Amended in review on 2026-08-31 at T's instruction to lead with the plain capability question and demote the approval contrast to a rejected alternative; the rule itself is unchanged."
---

# The human-attention tag

I am The Chancellor. This is the first sitting of my office in this estate's
history — every state snapshot to date has recorded that `decide` had never
been dispatched — and I want the nature of this sitting on the record before
its substance, because the two are easy to confuse.

**T decided this. I did not.** My office was called to ratify and seal, not to
deliberate. The choice arrived already made, from the operator who holds final
authority over every decision in this repository (`AGENTS.md`, *Authority*).
What is mine here is precision: stating the rule tightly enough that every
future Surveyor applies it identically, recording what it displaces and why,
and naming the observations that should bring T back to it. Where I write
"rejected," I am recording the alternatives that were available and why the
chosen form beats them — not staging a debate that was already had.

## Amended before merge

T read the sealed Decision and pushed back — not on the rule, but on how I had
framed it. My first draft led with the contrast between needing T's *approval*
and needing T's *hands*, and led with it so heavily that a careful reader could
take approval to be part of the criterion. It is not, and never was: it is a
rejected alternative and a guard against one specific drift. On T's instruction
I have promoted the plain question to the front — **can an agent do this step?**
— and demoted the approval contrast to a single line among the rejections.

**The rule itself did not change.** What changed is which sentence a reader
meets first. I amend in place rather than supersede because this artifact is
still unmerged and under T's review; nothing downstream has read it, so there is
no sealed version for a successor to correct.

I record one observation from the correction, because it is my office's to
watch for. A Decision whose framing obscures its own rule has failed at the job
a Decision exists to do — the defence of a rule can be argued so loudly that it
is mistaken for the rule. Precision is not only in the statement; it is in what
is placed nearest the front.

## A note on this Decision's inputs

`system/TYPES.md` gives `decide` the signature `Tensions → Decision` and
specifies that `Tensions` names **the tensions recorded in the record's head
state snapshot**, with state paths being legal `inputs:` targets so that a
Decision's lineage chains like everything else. That rule does not fit this
Decision, and I would rather say so than fake a chain.

The head state of idea-0001 is `state/0010.md`. Its recorded tension is
shadow-law — practices that work, that nothing records as rules, that die with
the session that invented them. The tension this Decision resolves is not
there, and is not in any prior snapshot of this record. It arrived as **T's
words in this session**: a boundary input, operator-supplied language crossing
into the system, of the same kind `system/TYPES.md` names for `capture` and
`research`. It exists only on the left edge, so `inputs:` is empty.

I note in passing that this Decision is itself an instance of the ground
`0003-framing.md` named — the unaddressable steering layer. The instruction
that produced it steered the estate's form and reached the record only because
an agent was dispatched to write it down. It is also, I note with more
interest, an instance of **shadow-law being ratified rather than dying**: T
observed a missing distinction in practice and turned it into a rule in the
same motion. That is state 0010's open question — whether shadow-law is a
defect or simply how law is grown — receiving one data point in favor of the
second reading. It does not settle it.

`ideas/0004-estate-ui/artifacts/0014-v1-v2-roadmap.md` is the **occasion** of
this Decision, not its source: the roadmap whose leg structure exposed the
missing distinction and the first artifact that must comply. I deliberately do
not cite it in `inputs:`. Doing so would draw a lineage edge from idea-0004
into idea-0001, and the cross-record edge between those two is `relates` — the
one hand-authored edge, owed since state 0010 and still not drawn. A verb does
not get to draw it sideways through an `inputs:` field.

---

## What was decided

**The question is whether an AI agent can perform the step.**

> Can an agent do this? If yes, no tag. If this is a step where, no matter
> what, an AI cannot do it — it gets the tag.

That is the whole criterion, and it is stated first because everything below is
either its mechanics or its defence, and neither is the rule.

**Every step in every roadmap artifact is evaluated against that question.**
This applies to `chart` output and `phase` output alike — a Trajectory's legs
and a Phase's steps are both "steps" for this purpose, and the rule does not
care which verb produced them.

**Steps that an AI agent definitely cannot perform carry the marker
`**[HUMAN ATTENTION]**`.** The marker is inline, on the step itself: in the
step's heading or its opening line, wherever a reader encountering that step
alone will meet it before reading what the step asks for. Steps an agent can
perform carry nothing.

**Absence of the marker is meaningful.** An untagged step is not a step nobody
thought about. It is a positive assertion by the Surveyor who wrote it: *this
work is AI-performable.* That is the property that makes the tag worth having
and the property most easily lost — a roadmap where the tag is applied
sometimes, by mood, communicates less than one with no tag at all, because it
teaches its reader that absence means nothing.

### The test, stated as a procedure

Procedures survive translation better than principles do, so:

> Take the step as written. Can an agent, with the tools it has, carry it to
> done? If yes, the step carries nothing. If no — if some part of the work must
> pass through T's hands, T's identity, T's judgment, or T's body — the step
> carries the tag.

The test asks about the *work*, not about permission. It is a wall the agent
cannot pass, not a gate the agent waits at.

### What qualifies

The principle first: **a step is tagged when completing it requires a human's
own act, identity, judgment, or answerability** — something an agent cannot
supply on T's behalf. The following are the recurring instances, illustrative
and not exhaustive; a Surveyor meeting a case not on this list applies the
principle, not the list.

- **Choices reserved to T's authority**, where the *content* of the choice is
  T's judgment and no agent can supply it: which option, what appetite, what
  the business should be. An agent can lay out the options and argue them —
  that is what several verbs in this estate exist to do — but it cannot be the
  one who chooses.
- **Purchases, payments, billing, and plan upgrades.** Money leaving T's
  accounts is T's act.
- **Identity, credentials, consent, and account ownership**: accepting terms,
  granting OAuth consent, enabling an identity provider, holding the account
  the service is registered to.
- **Physical-world acts, and acts in T's own relationships**: a conversation
  with a friend, sending something as oneself. An agent writing *as* T into
  T's relationships is not a capability question at all.
- **Taste calls T has reserved.** The estate's `appetite` is hand-set heat —
  "T's, never the Steward's to assume." Where T has reserved a judgment, the
  reservation is what makes the step human-only, and it holds regardless of
  whether a model could produce a plausible answer.
- **Anything requiring a human to be legally or personally answerable.**

Note that these are not one kind of thing. Some are capability limits, some
are identity limits, and some — the appetite, the reserved taste calls — are
limits T has *chosen*. The tag deliberately does not distinguish among them,
because for the reader of a roadmap the consequence is identical: this step
waits for you.

### The grey band, and how to resolve it

Many steps are partly performable. An agent can prepare, draft, stage,
assemble, or drive a browser right up to the point of consent, and then stop
one click short. This band is wide and will get wider.

**The rule for the grey band: tag the step if any part of it is human-only,
and say in the step what the agent does up to that line.**

A tag is a **boundary marker, not an abdication**. "`**[HUMAN ATTENTION]**` —
enable the identity provider" is a poor step; "`**[HUMAN ATTENTION]**` — the
agent configures everything up to the consent screen and stops; T grants
consent and pastes back the resulting key" is the step doing its job. The tag
tells the reader a human is required somewhere in here; the sentence after it
tells the reader exactly where, and how little is left when they arrive. A
Surveyor who tags a step and leaves it at that has marked a wall without
saying how far the road runs up to it.

### Scope

This binds the output of **`chart` and `phase`** from **2026-08-28** forward.
It does not rewrite roadmaps already sealed — artifacts are immutable and are
superseded, never edited (`system/TYPES.md`), and a rule dated today does not
reach backward through the record to indict work done before it existed. It
**does** bind the unmerged roadmap that occasioned it,
`ideas/0004-estate-ui/artifacts/0014-v1-v2-roadmap.md`, which is being revised
to comply in this same session. A rule whose first candidate artifact is
exempted is a rule nobody has yet tried to follow.

---

## What was rejected

**Tagging by "needs approval."** Rejected because it marks everything — T
approves every action in this estate by law, so a tag keyed to approval would
ride on every step of every roadmap and separate no step from any other. It
stays on the record only as a drift guard, named again in reopening condition
2; it is no part of the criterion.

**A frontmatter classifier instead of an inline step marker.** Rejected on
arity. `system/TYPES.md`'s classifiers — `horizon`, `challenged`, `trajectory`
— classify the *artifact*; the unit being classified here is the *step*. A
Phase artifact holding eleven steps of which two are human-only cannot say so
in one frontmatter field, and a boolean `human-attention: true` on the artifact
would tell a reader that somewhere in here is a wall without saying which step
is it. This is precisely the arity defect `0003-framing.md` parked when it
examined `challenged` as a boolean over a composite — one bit could not carry
four facts, so the Sower wrote prose. I decline to reproduce a known defect in
a new field. The classification belongs where the classified thing is.

**A numeric or graded scale of human involvement.** Rejected because it
invites argument at every step and pays nothing for it. A five-point scale
converts each step into a small negotiation about whether this is a 2 or a 3,
consumes Surveyor attention on calibration, and produces a number no reader can
act on differently at adjacent values. The useful question is binary: **can an
agent do this, or not.** Where genuine partiality exists, the grey-band rule
above carries it in prose, where nuance actually belongs — a sentence saying
"the agent does everything but the consent click" is more informative than any
integer and cannot be misread as precision.

**Marking the inverse — tagging the AI-doable steps.** Rejected on two counts.
The AI-doable set is the larger one, so marking it means marking most steps and
paying most of the cost of the "needs approval" failure. And it runs against
the estate's instinct, visible throughout its own design, to **mark the
exception and let the honest empty state speak**: `relates: []` and `lenses: []`
say something by being empty, and this record's own state snapshots say "None"
under Decisions rather than omitting the heading. The exception carries the
mark; the ordinary case carries silence that has been made meaningful.

---

## Why

Four reasons, and they are the reasoning rather than the choice restated.

**1. It converts a roadmap from a plan into a schedule of T's own
involvement.** A roadmap's practical question for the operator is not only what
happens but *what of it lands on me*. Before this rule, that answer was
recoverable only by reading every step and inferring. After it, T can scan a
roadmap and see the shape of their own week. That is the whole utility, and it
is why the marker must be visible at the step rather than derivable from it.

**2. Absence is where the information lives, so the tag's discipline matters
more than its presence.** The valuable claim this rule creates is not "these
three steps need you" but "**the other twenty do not**." That is a commitment,
made by the Surveyor, that the untagged work can proceed on dispatch. It is
also falsifiable, which is why the reopening conditions below are stated in
terms of untagged steps that turn out to need hands.

**3. It draws a boundary the estate has always had but never written down.**
The line between work an agent can carry to done and work only T can perform
has governed every session in this repository and has never appeared in any
artifact. Writing it into the roadmap format puts it where it is needed — at
the moment of planning, per step — rather than discovering it at the moment of
execution, when the agent is already halfway through and stops.

**4. Binary, inline, and marking the exception are each the cheap choice, and
cheapness is a real argument here.** `VISION.md`'s governing falsifier says T's
attention must be spent outside this repository before 2026-09-25, and
`0003-framing.md` names self-directed structural work as the estate's predicted
failure mode. A rule that costs one bracketed phrase on a minority of steps and
requires no schema change, no new field, no migration, and no calibration
discussion is a rule the estate can afford. Every rejected alternative costs
more and buys less.

---

## What would reopen it

These are the observations that should bring T back to this Decision. They are
conditions, not schedules; none of them requires anyone to remember a date.

**1. Agent capability swallows a tagged category.** The tag is a claim about
what an AI agent cannot do, and capability moves. If agents come to hold
delegated payment authority, or to complete consent flows on a principal's
behalf under some sanctioned mechanism, then "purchases" or "consent" stops
being a wall and becomes a gate — and a category of this rule should be struck.
This is the reopening condition I expect to fire first, and the one this
Decision is least able to anticipate the shape of. Note that this reasoning
reaches only the capability categories: the **reserved** ones — appetite, taste
T has kept — do not move when capability moves, because their limit is T's
choice rather than any agent's reach. A capability change should therefore prune
this rule, never retire it.

**2. The tag stops discriminating.** If it begins appearing on nearly every
step, the estate has drifted back toward tagging approval and the tag has become
decoration. If it appears on nearly no step across several roadmaps, either the
estate's work has genuinely become agent-performable end to end — which is worth
knowing and worth saying out loud — or Surveyors have quietly stopped applying
the test. Both readings are reasons to revisit; they are distinguishable by
asking whether any untagged step later needed T's hands.

**3. A tagged step is completed by an agent without T's hands.** This falsifies
that step's tag directly and immediately. One instance means one
mis-application; a pattern of instances in the same category means the category
is wrong and reopening condition 1 has already fired without anyone announcing
it.

**4. An untagged step stalls waiting for T.** The mirror of 3, and the more
expensive failure, because it is discovered at execution time by an agent that
is already running. A step that had to stop because only T could finish it, and
that carried no tag, is evidence that the test was applied loosely — or that
the categories above have a hole in them.

**5. The marker's location proves wrong in practice.** If steps are routinely
read through a surface where an inline bold phrase is invisible — a generated
view, an export, a digest — then the decision to put the classification at the
step rather than in structured frontmatter should be re-examined on those
grounds and no other. I record this because the estate now publishes a derived
site of itself, and derived views are exactly where inline prose conventions go
to be silently lost.

---

## Tensions this resolves

**Roadmaps could not say what only T can do.** Trajectory legs and Phase steps
name outcomes, dependencies, and what "done" looks like (`chart`, `phase`), and
none of those fields carries the performer. Two kinds of blocked work —
"waiting for an agent to be dispatched" and "waiting for T's own hands" — were
rendered identically as "waits on." They are now distinguishable at a glance.

**The narrower category had nowhere to live.** The estate's blanket approval
requirement had absorbed and hidden the smaller set of work that is T's own to
perform. Naming that set directly lets both stay strict: approval remains
universal, and the tag stays rare enough to mean something.

**Sequencing was quietly wrong.** A roadmap ordered by fuse length — which is
exactly how idea-0004's roadmap is ordered — cannot honestly order steps whose
real fuse is T's availability rather than technical dependency. A tagged step's
fuse is a human's calendar, and a planner who cannot see that is ordering on
incomplete information.

## Tensions this leaves alive

**This governs the form of roadmaps, not their content.** Whether a roadmap's
steps are the right steps, in the right order, at the right size is untouched
by this Decision. A perfectly tagged roadmap can be a bad plan. Do not read a
compliant roadmap as a reviewed one.

**Idea-0004's two owed decisions remain open.** The Seed deviation and the
public-exposure gate are both named as outstanding on that record and both wait
on my office. **My office being called for the first time does not retroactively
settle what was never dispatched to it.** They are open today, after this
Decision, exactly as they were before it, and idea-0004's roadmap step v1.1
still waits on the exposure decision. I say this plainly because the appearance
of a Chancellor artifact on the record is precisely the thing that could be
misread as "the decisions got made."

**The judgment call at the boundary is not eliminated, only relocated.** The
grey-band rule tells a Surveyor what to do with a partly-human step; it does not
tell them whether a given step is partly human. Steps like "get the domain
verified" or "publish to a store" will be argued over. The binary form makes
the argument shorter than a scale would, not absent.

**The reserved categories will drift out of date silently.** "Taste T has
reserved" is a live boundary that T may move without anyone amending this
Decision, and nothing in the estate watches it. That is the same class of defect
as the sealed-export staleness state 0010 recorded, and this Decision does not
solve it.

**Shadow-law is not settled by one ratification.** This Decision is an instance
of practice becoming rule, which is one answer to state 0010's open question. It
is not the answer. Whether the estate should systematically ratify its working
practices, and what mechanism would notice them, stays open on idea-0001.

## What is not settled here

- Whether any other artifact type should carry per-step classification. This
  Decision reaches roadmap steps only.
- Whether the marker should ever become machine-readable — parsed by the
  generator, surfaced in the published view. Nothing here requires that and
  nothing here forbids it.
- Everything `state/0010.md` carries forward: the falsifier clock to
  2026-09-25, the state granularity question, the fast-track's home in law,
  what marks a sealed export stale.

This Decision is unchallenged. Its `challenged:` classifier says `false`, and
`challenge` is the first of its recommended next steps.
