---
type: Decision Record
title: "ADR 0020"
description: "Roadmap steps carry a human-attention tag marking work no agent can perform; approval is explicitly not the criterion."
tags: [adr, decision]
generated: { by: claude-code/2026-08-28, at: 2026-08-28T00:00:00Z }
verified: { by: human:T, at: 2026-08-28T00:00:00Z }
---

# ADR 0020: The human-attention tag

**Status:** accepted · **Date:** 2026-08-28 · **Source:** T's decision, stated in session

## Context

The Surveyor charted idea-0004's two-version roadmap
(`0015-v1-v2-roadmap.md`) and T, reviewing it, added a standing requirement
for **all** roadmaps from that point forward: each step is marked when it
"no matter what" needs human attention — tagged if an AI is *definitely
unable* to do it, untagged if an AI can.

The need is legible from this very session's history. An agent built and
deployed a site, attached a domain, and drove a browser to a Cloudflare
consent screen — but T bought the domain, and T's own consent granted the
OAuth authorization. A roadmap that does not distinguish those two kinds of
step misleads whoever plans from it: it reads as though the whole route is
dispatchable, and the human-only steps surface only when the route stalls
against them.

## Decisions

**1. The rule, as T stated it: can an agent do this step?** If yes, no tag.
If it is a "no matter what, AI can't do this," it carries
`**[HUMAN ATTENTION]**`. This binds the outputs of `chart` (Trajectory legs)
and `phase` (Phase steps), from 2026-08-28 forward.

Work an agent cannot do: choices whose *content* is T's judgment; purchases,
payments, billing, plan upgrades; identity, credentials, consent, account
ownership; physical-world acts; acts inside T's own relationships; taste calls
T has reserved (`appetite` is hand-set heat, "T's, never the Steward's to
assume"); anything a human must be personally or legally answerable for.

**2. Absence of the tag is an assertion, not a default.** An untagged step
claims the work is agent-performable. That is what makes the tag worth
reading in either direction, and what makes it falsifiable: a tagged step an
agent later completes without T's hands refutes that tag directly.

**3. Rejected alternatives.** Tagging on *"needs T's approval"* — everything
here needs T's approval, so it would mark every step and discriminate nothing;
the criterion is hands, not sign-off. A graded or numeric scale — invites
argument at every step, where the useful question is binary. Marking the
inverse (tagging AI-doable steps) — the estate marks the exception, and the
exception is the smaller set.

**4. Partly-human steps are tagged, with the agent's reach stated.** Where an
agent can prepare, draft, stage, or drive right up to the line of consent, the
step is tagged *and says what the agent does up to that line*. A tag is a
boundary marker, not an abdication — it must not become a reason to hand a
whole step to T when nine-tenths of it is dispatchable.

**5. An inline step marker, not a frontmatter classifier.** The unit being
classified is the step; a classifier addresses the artifact and cannot reach
inside it.

**6. The convention lives in the skills, not only in the record.** Both
`.claude/skills/chart/SKILL.md` and `.claude/skills/phase/SKILL.md` carry it,
because a spawned agent runs on its own definition and reads neither
`AGENTS.md` nor this ADR (`system/LAW.md`, *Where the law lives*). A decision
recorded only in an idea record would not reach the population it binds.

**7. Decomposition does not inherit the tag.** A `phase` run over a tagged
parent re-evaluates each child, since decomposition frequently isolates the
human-only part into one child and frees the rest — which is a good reason to
decompose a tagged step rather than accept it whole.

## Consequences

- **The Chancellor's office was called for the first time.** Every state
  snapshot in this estate had recorded that it never had; idea-0003 exported a
  Seed carrying four open decisions. T's instruction was a decision, so the
  verb was dispatched rather than absorbed into a structural session, and the
  ratified Decision is
  [`idea-0001/artifacts/0008-human-attention-tag.md`](../../ideas/0001-the-estate/artifacts/0008-human-attention-tag.md).
  Unlike ADRs 0015–0019, this structural session was not verb-free.
- The Decision sits on **idea-0001**, the record whose subject is the estate
  itself — the correct home for a convention that governs every record.
- `0015-v1-v2-roadmap.md` was amended before merge to comply, and says so
  in-body rather than leaving a reader to infer it from a diff. Roadmaps
  already sealed are not rewritten.
- The tag is a claim about agent capability, and capability moves. If a tagged
  category becomes performable, or if the tag starts landing on nearly every
  step or nearly none, the rule has stopped discriminating and this ADR should
  be revisited.
- **T corrected the framing before merge, and the correction is instructive.**
  The first draft of this ADR and of the sealed Decision led with the
  approval rejection, calling it the load-bearing part. T read that and
  pushed back — not on the rule, which was already exactly right, but on an
  emphasis that made a *rejected alternative* look like part of the
  criterion. The guard had grown larger than the thing it guarded. Both were
  amended to lead with the plain question and demote approval to a rejected
  alternative. Worth keeping: a decision whose framing obscures its own rule
  is a defect the Chancellor's office should watch for, and it was caught by
  the operator rather than by the office.
- Nothing in the harness enforces this, as with every binding here. It is law
  obeyed, not law compiled.
