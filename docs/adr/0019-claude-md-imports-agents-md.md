---
type: Decision Record
title: "ADR 0019"
description: "CLAUDE.md imports AGENTS.md; the orientation is neither duplicated nor renamed."
tags: [adr, decision]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
verified: { by: human:T, at: 2026-08-26T00:00:00Z }
---

# ADR 0019: `CLAUDE.md` imports `AGENTS.md`

**Status:** accepted · **Date:** 2026-08-26 · **Source:** T's question and approval, this session

## Context

ADR 0015 closed audit finding F-3 by adding a `CLAUDE.md` whose body pointed at
`AGENTS.md` in prose: *"Read AGENTS.md now, before your first reply."* T asked
whether to go further — rename the orientation to `CLAUDE.md`, or keep a
duplicate — "to make sure that Claude Code 100% reads it."

The prose pointer was a real improvement over nothing, but it closes the gap by
**compliance** rather than by **loading**. Observed directly in the session that
produced this ADR: `CLAUDE.md` was injected at startup, `AGENTS.md` was not, and
the standing identity arrived only because the main session chose to spend a
tool call on the pointer. The first reply is exactly the moment the identity has
to already be present, and a soft instruction is one instruction among many.

Claude Code's memory documentation states the mechanism plainly: it reads
`CLAUDE.md` and not `AGENTS.md`, and the supported bridge is an `@`-prefixed
import, which is *expanded into context at launch* alongside the file that
references it.

## Decisions

**1. `CLAUDE.md` imports `AGENTS.md`.** Its body is a single `@AGENTS.md` import
plus a short Claude-Code-specific note. The orientation is now loaded text at
session start, not an errand. This is the whole of the fix.

**2. Duplication is rejected.** Two copies of the orientation is the drift
failure the estate is built against: `system/` is the source of truth precisely
because nothing in it is stored twice. A duplicate would also mean the writer
seam had two files to keep honest, with no mechanism keeping them equal.

**3. The rename is rejected.** `AGENTS.md` is named in `system/LAW.md`, in all
twelve agent definitions, in `README.md` and `AUDIT-PROMPT.md`, and in ADRs
0013, 0014, and 0015 — which are immutable record. A rename would either
falsify them or leave them pointing at a file that no longer exists. It would
also bind the estate's orientation to one harness, against the self-containment
principle: `AGENTS.md` is the cross-tool convention, and other harnesses that
read it keep working unchanged.

**4. The rename would not have reached the agents anyway.** Memory files load
into the main session only; a spawned agent loads neither `AGENTS.md` nor
`CLAUDE.md`. That population is served by `system/LAW.md`, which every agent
definition reads directly. F-3 was always a main-session defect, and this fix is
scoped to it.

## Consequences

- The standing identity no longer depends on the main session electing to read
  a second file. F-3 is closed by mechanism rather than by instruction.
- `AGENTS.md` is now loaded in full at every Claude Code session start. At 129
  lines it sits just under the 200-line adherence guidance for a memory file;
  further growth should go to `system/` or a skill, not into the orientation.
- Import depth is capped at four hops and imports resolve relative to the file
  that declares them. `AGENTS.md` currently imports nothing, so the chain is one
  hop; if it ever imports, the budget is worth remembering.
- To mention an `@`-prefixed path in a memory file without importing it, wrap it
  in backticks. This now matters for `CLAUDE.md` and `AGENTS.md` specifically.
- A symlink (`ln -s AGENTS.md CLAUDE.md`) was considered and set aside: it
  forbids Claude-Code-specific content and needs Administrator or Developer Mode
  on Windows, against self-containment.
- No verb ran. This was a Steward structural session, as ADRs 0015, 0016, 0017,
  and 0018 were before it.
