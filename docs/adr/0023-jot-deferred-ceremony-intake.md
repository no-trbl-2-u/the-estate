---
type: Decision Record
title: "ADR 0023"
description: "jot writes a slip to inbox/ in one step; a slip is a boundary input, not an artifact, so jot is a Steward clerical duty rather than a bound verb."
tags: [adr, decision]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
verified: { by: human:T, at: 2026-08-31T00:00:00Z }
---

# ADR 0023: Jot — deferred-ceremony intake

**Status:** accepted · **Date:** 2026-08-31 · **Source:** architecture review of 2026-08-31, decision 5 of the locked set and D2; `load-bearing-updates-plan.md` Phase 3

## Context

Entering a new idea costs a record shell, a dispatched `capture`, a state
snapshot, and a close. Every part of that is correct and every part of it earns
its keep — for an idea the operator has sat down with. For a thought that
arrives between two other things, the cost is the whole transaction, and the
outcome is not a scruffier record. **The thought is not written down at all**,
and the loss is silent: nothing in the estate records the ideas that never
reached it.

`system/FALSIFIERS.md` names the failure mode as building the machinery while
`ideas/` holds nothing live. An intake path too expensive to use at the moment
of arrival is that failure mode with a mechanism.

The question this ADR had to settle is **who performs `jot`** — because the
hard-binding law (`system/LAW.md`) says a verb is performed by its bound agent
and by no one else, and the Steward performing a verb is the exact bypass the
law exists to forbid. The two candidate answers were: bind `jot` to The
Gardener and accept one dispatch per jot, or find that `jot` is not the kind of
thing the binding law governs.

## Decisions

**1. `jot` writes a slip and stops.** `inbox/YYYYMMDD-HHMM-slug.md`, the
operator's words **verbatim**, frontmatter of `jotted:` / `status:` /
`became:`, and a one-line confirmation. No record shell, no artifact, no
`capture` dispatch, **no state snapshot and no close protocol** — `jot` opens
no session. Zero processing, zero questions, zero proposals.

**2. A `Slip` is a boundary input, not an artifact.** Added to
`system/TYPES.md` alongside `Text` and `Question`, with the signature
`Text → Slip`. It is *pre-record and pre-artifact*: no lineage, no classifiers,
no `inputs:` chain, no producing agent's voice. It is `Text` that has been
written down, not `Text` that has been transformed, and it appears on the left
edge of a later signature exactly as raw `Text` would.

**3. `jot` is a Steward clerical duty, not a bound verb** — D2's
recommendation, accepted. The hard-binding law binds **artifact-producing**
verbs to agents, for reasons the law states plainly: consistency of voice, and
capabilities knowable from the binding. A slip has no voice to be consistent
about — it is the operator's words, and anything of the performer's that
appears in it is a defect. So binding would buy nothing, and it would cost the
one property `jot` exists to have.

It is therefore recorded on the Steward's row in the agents table and
**deliberately absent from the verbs table**, which stays what it was: the list
of artifact-producing verbs, every one of them bound, without exception.

**4. The exemption is narrow and stated as narrow.** It covers writing words
down. **The moment a slip is read *for* something — to make a Spark, to judge
where it belongs, to decide what it is — that is a verb, dispatched to its
bound agent.** The Spark made from a slip is The Gardener's `capture`, written
from the slip verbatim. This sentence appears in `system/LAW.md`, in
`system/STEWARD.md`, in the skill, and in `inbox/README.md`, because it is the
sentence that keeps decision 3 from being a hole.

**5. Slips are stamped, never deleted.** Processing sets `status: processed`
and fills `became:` with what actually happened — `idea-0007`,
`idea-0003 (merged)`, or `discarded: duplicate of idea-0003`. Discarding stamps
the slip; it does not remove the file. The inbox is an arrival log, not a queue
to be drained to zero, and it grows without bound by design.

**6. Processing is a normal Steward session, proposal-only.** The Steward
surfaces pending slips at greeting — count and ages, one line, no listing and
no summarising — and processing proposes per slip and waits (ADR 0022). A shelf
of slips is a shelf of proposals, never a batch of dispatches.

## Rejected alternatives

**Bind `jot` to The Gardener** (D2's stated strict alternative). It has real
appeal: the Gardener already owns intake, and it keeps the binding law with no
exceptions at all. Rejected because a dispatch per jot reintroduces exactly the
latency `jot` exists to remove — spawning an agent to transcribe a sentence —
and because the binding would be ceremonial. The Gardener would be forbidden
from bringing anything of its own to the slip, which is to say forbidden from
doing what a bound agent is bound for.

**Let a slip be an artifact in a record with no other artifacts.** Rejected:
it forces the shell, which is the cost being avoided, and it puts an untyped
fragment into the lineage graph where every `inputs:` chain must stay honest.

**Let the operator write slips directly, with no verb at all.** Rejected on
self-containment and consistency: the naming convention and the frontmatter are
what make the inbox processable, and a convention with no skill to enforce it
is a convention that drifts.

## Consequences

- New root directory `inbox/`, with a `README.md` defining slips, naming,
  frontmatter, the stamp-never-delete law, and the processing session.
- New skill `.claude/skills/jot/SKILL.md`, invocable as `/jot`. It is the
  nineteenth skill directory and the only one whose `agent:` is `steward`.
- `system/TYPES.md` gains the `Slip` boundary input; `system/LAW.md` gains the
  *Intake precedes the record* section; `system/registry.md` records `jot` on
  the Steward's row and states plainly why it is absent from the verbs table.
- `system/STEWARD.md` and the steward skill gain the greeting check, the `jot`
  offer, and the processing protocol.
- The verb count is unchanged at 17. The skill count rises to 19. These are
  different numbers now, and the reconciliation sweep must not conflate them.
- **A cost worth naming:** the inbox can accumulate silently. The greeting
  check is the only thing preventing a shelf of slips from becoming a second,
  worse graveyard — which is why ages, not counts, are the reported signal.
- No verb ran. Steward structural session.
