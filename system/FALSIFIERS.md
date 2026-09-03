---
type: Policy
title: "Falsifiers"
description: "What would prove The Estate wrong, and by when; the named failure mode."
tags: [falsifiers, governance]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# Falsifiers

Written down before the building started, per this project's own law
(classification requires a horizon to name what would make it wrong).
Hold all future work in this repository against these lines.

## Project falsifier (verbatim, from T, 2026-08-25)

> "I'll have failed if within a month, I have no evidence of using this
> outside this repo."

Check date: **2026-09-25**. Evidence means a Seed or Brief exported from this
repository and used in a real external context — a new repo, or one of the
three friends' businesses.

## Seed falsifiers

A Seed has failed its purpose when:

- It lacks actionable items.
- Its acceptance criteria remain abstract, with no action items.
- **Its payload cannot actually be dropped in** — it does not run, or it
  references assets that are not in the directory. Same spirit as the abstract
  trajectory: the export claims to hand over something usable and does not.
  Note the asymmetry — an **absent** payload is not a falsifier at all
  (`payload: absent` is an honest classifier, and the Seed says so on the tin).
  A **broken** one is, because it spends the recipient's trust before they
  discover it.
- **Its garden does not grow** — under `build-plan` (ADR 0029), the loop
  cannot complete one tick after Phase 0 is marked done. The payload claimed
  the ground was ready and it was not.
- **It goes stale silently** — the record moves past the Seed's origin and
  nothing reconciles it. This one the validator now catches; a warning left
  standing for a month is the falsifier firing in slow motion.

## Named failure mode

The Estate is a fascinating design problem, and **building it is more fun than
using it**. The trap is six months of type-algebra refinement and an empty estate.
If work in this repo is elaborating the machinery while the idea trees —
root `ideas/` and every `projects/*/ideas/` — hold nothing live, that is
this failure mode in progress — say so out loud.

## Near-term beneficiaries

Three friends starting businesses. Domain-generality is load-bearing, not
aspirational: a Seed must serve an audience that is not a coding agent.
