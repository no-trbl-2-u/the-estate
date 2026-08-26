---
type: Decision Record
title: "ADR 0016"
description: "The project is renamed The Estate."
tags: [adr, decision]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
verified: { by: human:T, at: 2026-08-26T00:00:00Z }
---

# ADR 0016: The project is renamed The Estate

**Status:** accepted · **Date:** 2026-08-26 · **Source:** T, after PR #3 merged

## Context

The repository was named `think-tank` from its first commit — a working name
from before the system had a shape. Since ADR 0013 the shape has had a theme:
**The Estate**, a great house and its grounds, run on behalf of an owner who
retains all authority. Every office is named in that world, the Steward is its
butler, The Factor deals "beyond the walls", and The Cartographer surveys "the
grounds". The project name was the last thing still speaking the old language.

T renamed the GitHub repository to **`The-Estate`**.

## Decision

**The project is The Estate.** `think-tank` survives only where rewriting it
would falsify a record.

**1. Current documents are renamed in full.** `README.md`, `VISION.md`,
`AGENTS.md`, `CLAUDE.md`, `system/`, every skill and agent definition,
`templates/`, `playbooks/`, `ideas/README.md`, `AUDIT-PROMPT.md`, and
`docs/architecture.html`.

**2. The Steward's formal title is "The Steward of The Estate."** It was "The
Think Tank Steward" — a name that only ever made sense under the old one. In
running prose it stays what it has always been: **The Steward**.

**3. The "tank" metaphor is retired with the name.** An idea collection that
was "the tank" is now "the estate": *the estate is a portfolio, not a
workbench*; `survey` walks *the whole estate*; The Factor gathers from
*outside the estate*. The metaphor was downstream of the old name and reads as
a leftover once the name is gone.

**4. The roster sections are renamed "The household."** `README.md` and
`VISION.md` both carried a `## The estate` heading over the agent table. With
the project itself now called The Estate, that heading names two different
things one line apart. "The household" is the term `docs/architecture.html`
already used for the roster.

**5. Record `idea-0001` is renamed, and its Origin is not touched.** The
directory moves `ideas/0001-think-tank/` → `ideas/0001-the-estate/` and the
record's `title:` becomes "The Estate". The Origin — the verbatim want from the
vision interview — is unedited, as the record template requires and as it will
remain forever. `state/0000.md` is likewise untouched: it is immutable, it
still says `think-tank` throughout, and that is correct, because that is what
the project was called when the snapshot was written. The rename is recorded
where every session records itself — a new copy-forward snapshot,
`state/0001.md`, with `state-head:` advanced to it.

**6. The historical record keeps every `think-tank` in its body.**
`BRAINSTORM.md`, `BUILD-PROMPT.md`, the ADR set (0001–0015), and
`AUDIT-REPORT.md` are not rewritten. Each historical document's banner gains a
line naming the rename; the ADRs are dated decisions and get this one instead.
ADR 0001 is still titled "think-tank is an idea foundry, not a memory system",
because that is the decision that was made, under the name it was made under.

Rewriting them would produce a repository that had apparently always been
called The Estate — which is precisely the kind of tidied history this system
refuses everywhere else. *Preserved unedited — this is lineage, and lineage is
never discarded.*

## Consequences

- No law, verb, type, agent, or signature changed. This ADR is a naming
  decision and nothing else.
- The old GitHub URL redirects, and the local remote was repointed to
  `The-Estate`. Any clone using the old URL keeps working via GitHub's
  redirect, but should be updated.
- The repository description and topics on GitHub are unchanged and still
  describe a "graph-of-thought repository" — accurate, but written before
  extraction became the point. Logged as an open question in
  `ideas/0001-the-estate/state/0001.md`.
- The falsifier is unchanged and unaffected by any of this: still
  **2026-09-25**, still "no evidence of using this outside this repo", and a
  rename is not evidence.
