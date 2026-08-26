---
type: Decision Record
title: "ADR 0013"
description: "The Estate roster, the writer seam, and the survey."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0013: The Estate roster, the writer seam, and the survey

**Status:** accepted · **Date:** 2026-08-25 · **Source:** T, alignment session

## Context
ADR 0012 left nine verbs unowned and over-restricted the entrypoint. Three
questions were put to T with their trade-offs: where the law lives, who writes
what, and how the greeting scales.

## Decisions

**1. The theme is The Estate.** A great house and its grounds, run on behalf of
an owner who retains all authority. Confirmed by T's own framing of the Steward
as "the butler of the estate ... accommodating activities between the master of
the house and the other agents." The name **The Steward** is kept — "butler"
describes the daily office more precisely, but stewardship carries the
authority relation (acting for an owner who retains ownership) that
`AGENTS.md` requires.

**2. The writer seam: agents write artifacts, the Steward writes state.**
Chosen over agents writing state. Rationale: state is immutable copy-forward,
so its sequence needs a single allocator, and the close protocol requires the
whole-session view only the Steward has. Agents writing their own artifacts
prevents the Steward becoming a lossy relay — the thinking lands verbatim, and
only the session narrative is summarized. Accepted cost: the Steward is a
bottleneck for state, and a poorly written narrative degrades the record
silently.

**3. The law lives in `system/LAW.md`, and every agent reads it directly.**
T proposed `AGENTS.md` as the single source of truth for agent obligations.
Pushed back on mechanical grounds: `AGENTS.md` loads into the main session, but
a spawned agent runs on its own definition and never sees it — law placed there
would be invisible to exactly the population it binds. Same single source of
truth, relocated to a file both populations read; `AGENTS.md` points to it.

**4. Manual invocation is restored.** ADR 0012 misread "don't make them
memorize the verbs" as "don't let them invoke the verbs." Verbs are back in
`.claude/skills/` and directly invocable, carrying their binding in
frontmatter. Invocation names the verb; the binding still decides who performs
it — `/challenge` runs as The Advocate either way.

**5. The greeting shortlists, and `survey` computes it.** A new verb (T's
`find-the-next-idea`, renamed to a verb per the three-part law) owned by The
Cartographer. It walks every record and writes the sitemap `ideas/SURVEY.md` —
per-record metadata, computed score, and convergent notices. The Steward offers
it at the greeting rather than listing the whole tank.

**6. The survey must be checkable.** It is derived data and goes stale the
moment a record advances (the "Steward freshness" open question in
`BRAINSTORM.md`). It therefore carries `generated:` and the exact `state-head`
of every record covered, so the Steward diffs against reality rather than
trusting it. A stale survey is never presented as current.

## The roster

| Agent | Office | Verbs |
|---|---|---|
| The Steward | The front door; writes all state | — |
| The Gardener | Receives what arrives, gives it first shape | `capture`, `frame` |
| The Architect | Draws what it becomes when working | `envision` |
| The Surveyor | Stakes the route, sequences the ground | `chart`, `phase` |
| The Forager | Wanders and brings back what is out there | `explore` |
| The Distiller | Reduces to what is load-bearing | `distill` |
| The Advocate | Attacks in good faith; tests falsifiability | `challenge` |
| The Cartographer | Maps the estate, notices what connects | `relate`, `survey` |
| The Sower | Sends the idea beyond the walls | `seed` |

## Consequences
- Every verb now runs. The system is usable end to end for the first time.
- Eight specialists is a larger roster than `BUILD-PROMPT.md`'s
  "no speculative fleet" guardrail anticipated. It is not speculative: the
  hard-binding law (ADR 0012) means a verb without an agent cannot run, so each
  agent exists because a verb already existed. Need-driven, not anticipatory.
- The confirmation step ("so you'd like X? or would you rather Y?") is the
  anti-memorization mechanism and must degrade — when the operator names the
  verb, act rather than re-confirm.
