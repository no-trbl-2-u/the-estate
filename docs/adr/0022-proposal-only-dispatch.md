---
type: Decision Record
title: "ADR 0022"
description: "The Steward proposes the verb and waits; inference never triggers dispatch. Naming the verb is the one exception."
tags: [adr, decision]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
verified: { by: human:T, at: 2026-08-31T00:00:00Z }
---

# ADR 0022: Proposal-only dispatch

**Status:** accepted · **Date:** 2026-08-31 · **Source:** architecture review of 2026-08-31, decision 6 of the locked set; `load-bearing-updates-plan.md` Phase 2

## Context

`AGENTS.md` has always said suggestions do not become work until T selects
them, and `system/STEWARD.md` has always said the Steward proposes and T
decides. But the Steward's own skill described route derivation in language
that made dispatch sound like the natural completion of the derivation — the
Steward "recommends the verb that closes the most gap" and then "dispatches
when the operator selects a verb," with nothing stated about the gap between
those two sentences when the operator's intent is *obvious*.

That gap is where the failure lives. An operator who says "this framing feels
thin" has described something the Steward can route with high confidence, and
a Steward optimizing for helpfulness will run `explore` and present the result.
Nine times in ten it is the right verb, and the tenth is not a wasted turn but
a durable one: an agent spawned, an artifact written and numbered, a record
advanced on the Steward's judgment. **Nothing in this repository is ever
deleted.** A wrong inference is not undone; it is preserved, and every future
reader has to work out whether the operator asked for it.

The asymmetry is total. The cost of asking is one line the operator answers in
three words. The cost of guessing wrong is permanent record.

## Decisions

**1. Inference never triggers dispatch.** When the operator describes what they
want rather than naming a verb, the Steward names the verb it derived, names
the runner-up, and **waits for an explicit selection**. This holds however
obvious the derivation is. Confidence is not authority.

**2. A described intent is never an invocation.** Stated as an explicit
negative rule in `.claude/skills/steward/SKILL.md`, not left as an implication
of the positive one. The positive form ("propose, then dispatch on selection")
was already there and was not enough — it is readable as a description of the
happy path rather than as a prohibition on the shortcut.

**3. The degrade clause survives, unchanged and narrowed to one case.** An
operator who *names* the verb — by command (`/challenge`) or in words ("have
The Advocate challenge this") — has already selected it. Re-confirming that is
friction, not diligence. Naming the verb is the selection; describing the
desire is not. This is the only exception, and it is stated as the only one.

**4. `AGENTS.md`'s *Suggestions* section is extended to verb dispatch
explicitly.** It was already compatible — a derived verb is a suggestion like
any other — but "suggestions do not become work" read as being about proposed
*tasks*, and one line makes it cover routing too.

## Rejected alternatives

**A confidence threshold: dispatch when derivation is unambiguous.** Rejected.
It replaces a rule the operator can rely on with a judgment the operator cannot
see, and the cases where the Steward is most confident are exactly the cases
where it is most likely to have pattern-matched on the wrong record. There is
no threshold at which permanent record becomes cheap.

**Dispatch on inference but ask before writing anything.** Rejected: the agent
has already been spawned and has already spent its context, and an agent that
must ask permission before writing is a batch verb with a broken contract. It
also puts the operator in the position of declining work already done, which is
the pressure that makes people accept it.

## Consequences

- `.claude/skills/steward/SKILL.md` gains the hard rule and the explicit
  negative; `system/STEWARD.md` gains it in both the routing description (step
  3, "derives the route, **and proposes it**") and the Authority section.
- `AGENTS.md` gains one line under *Suggestions*.
- Phases 3 and 4 of this round add new Steward sentences (`jot` intake, `graft`
  triggers). They are written against this rule, which is why this ADR lands
  before them: a new trigger described as "the Steward proposes `graft` when
  the operator points at an old snapshot" is only safe once "proposes" is
  known to mean "and waits."
- No verb ran. Steward structural session.
