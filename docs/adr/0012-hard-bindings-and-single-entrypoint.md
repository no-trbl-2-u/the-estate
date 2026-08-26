---
type: Decision Record
title: "ADR 0012"
description: "Hard agent-verb bindings; the Steward is the sole entrypoint."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0012: Hard agent-verb bindings; the Steward is the sole entrypoint

**Status:** accepted · **Supersedes:** ADR 0011 · **Date:** 2026-08-25 · **Source:** T, locks 1–4

## Context
ADR 0011 made agent bindings soft: a skill could fall back to `general` (the
invoking session) if its specialist was unavailable, and all ten skills lived
in `.claude/skills/`, which made every one of them a user-facing slash
command. T locked four corrections.

## Decision

**1. Bindings are hard.** A verb is performed by its bound agent and by no one
else. No `general` fallback, no substitution. If the agent is unavailable the
verb does not run and the Steward reports the gap. Rationale from T:
consistency of result, and forward-compatibility — once agents hold specific
tools, a verb's capabilities are knowable from its binding alone, which a
silent fallback would falsify.

**2. The three-part law** (`system/LAW.md`): agents are a specific person,
named thematically as "The ⟨Something⟩" and self-aware of that name; verbs are
verbs, never personas; specific agents perform specific verbs. An agent may
own several verbs; a verb has exactly one agent.

**3. Verbs are not user-facing.** Anything in `.claude/skills/` is invocable by
the operator by construction, so the ten verbs moved to `system/verbs/` as
agent-owned documents. `.claude/skills/` now contains exactly one entry:
`steward`.

**4. One entrypoint.** The operator invokes the Steward and nothing else. The
Steward decides which verb runs and dispatches it to the owning agent, or
connects the operator to an agent they name. It never tells the operator to
invoke a verb themselves, and never performs a bound verb itself.

## Consequences
- Nine verbs are currently *unassigned* and therefore do not run. Only
  `challenge` (The Advocate) is live. Assigning the rest requires naming their
  agents, which is blocked on T's choice of naming theme — an open decision.
- The Steward retains record writes and the session close; agents return raw
  findings only (unchanged from ADR 0011).
- No vision-level decision changed: ADRs 0001–0010 stand.
