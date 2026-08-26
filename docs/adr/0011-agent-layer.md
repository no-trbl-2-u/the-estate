---
type: Decision Record
title: "ADR 0011"
description: "The agent layer \u2014 skills bind to agents via the registry."
tags: [adr, decision]
status: deprecated
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# ADR 0011: The agent layer — skills bind to agents via the registry

**Status:** superseded by [ADR 0012](0012-hard-bindings-and-single-entrypoint.md) · **Date:** 2026-08-25 · **Source:** interview Q3; T's build follow-up

## Context
The interview settled that "each SKILL may have 1 specific agent it invokes,
multiple agents it invokes, uses a 'general' agent, or is invoked by the
Steward" — and that the devil's advocate specifically lives behind the
`challenge` skill. The first build (ADR 0009) shipped the skills without the
agent layer underneath them; T flagged the omission.

## Decision
Skills are the stable interface; **agents are swappable workers bound to
skills through `system/registry.md`**. Four binding forms: one specific
agent, multiple agents, `general` (the invoking session performs the work),
or `steward-inline` (routing and reads only). A skill's SKILL.md carries an
"Agent binding" section when bound to a specialist; rebinding is a registry
edit plus that note — the skill's type signature and interface never change.

Specialist agents live in `.claude/agents/`, receive handoff packets, and
return **raw findings only** — the invoking skill owns artifact writes,
classifier updates, and the session close. One specialist ships now, because
the interview explicitly authorized it: `devils-advocate`, bound to
`challenge`.

## Consequences
- Assigning a future specialist to any skill is additive: agent file +
  registry rows. No skill or Steward changes (per ADR 0006's stable-interface
  requirement).
- All other skills default to `general`, honoring the no-speculative-fleet
  guardrail — specialists are earned by need, not anticipated.
