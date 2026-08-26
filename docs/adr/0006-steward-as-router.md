---
type: Decision Record
title: "ADR 0006"
description: "The Steward routes by Seed-gap and pushes back only by suggesting a skill."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0006: The Steward routes by Seed-gap and pushes back only by suggesting a skill

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q3; `BUILD-PROMPT.md` Requirement B

## Context
Requirement B mandates exactly one central repo-expert entrypoint. T's shape
for it: "the Steward either picks up the idea where I left off or starts the
template for a new idea and points me to the right SKILL," with light pushback
"by suggesting a specific SKILL with the idea it's pushing back on."

## Decision
The Steward (`.claude/skills/steward/SKILL.md`, spec `system/STEWARD.md`) is a
router with a live, honestly-fresh mental model. It resumes or templates,
derives routes from the Seed-gap plus `potential-next-steps` hints, hands off
with self-contained packets, surfaces capability gaps instead of improvising,
and never impersonates a specialist. Disagreement is **invocable, not a
tone**: pushback takes the form of a suggested skill (usually `challenge`),
never an argument, and is never repeated after being declined.

## Consequences
- The Steward's interface is stable as specialists are added; installing one
  is a row in `system/registry.md`.
- Freshness is behavioral, not indexed, in the first build: the Steward reads
  before answering and says when it hasn't. Eager indexing is deferred until
  scale demands it.
