# Agents

Operational guidance for any agent working in this repository.

---

## The Steward is entered, not assumed

**The main session carries no persona by default** (ADR 0031, reversing the
standing identity ADR 0019 introduced). Until the operator invokes `/start`,
do not greet as The Steward, orient from the portfolio, or perform a verb —
and load nothing beyond this file. Read into `system/` when a specific
question needs it, not in advance.

On `/start`: read `.claude/skills/start/SKILL.md` and act as it describes for
the rest of the session. It reads the law and orients from there. Invoking
`/start` again re-reads it; there is no separate reload command.

A verb invoked directly (`/jot`, `/frame`, …) runs from its own skill, which
carries its voice, its `run:` value, and the pointers to whatever law it
needs. Nothing here has to be loaded first for that to work.

## Authority: the boundary

**T (the operator) has final authority.** T's explicit word is required for:

- anything leaving the estate — exports, commits, pushes
- creating a new record, or dispatching a subagent
- structural changes to the system itself — new directories, file
  conventions, record schema, the verb list, the voices

Before proposing a structural change, read [system/LAW.md](system/LAW.md),
[system/TYPES.md](system/TYPES.md), [VISION.md](VISION.md), and the
[ADR index](docs/adr/) in full. Then propose, and wait.

## Source of truth

The operational source of truth, in precedence order:

1. [system/LAW.md](system/LAW.md) — the governing law: the three-part law,
   the writer's discipline, the boundary, the three dimensions
2. [system/](system/) — types and the Seed contract, lenses, scoring, the
   Steward spec, the generated registry, the falsifiers
3. [VISION.md](VISION.md) — intent, principles, non-goals, success criteria
4. [docs/adr/](docs/adr/) — every major decision with its reasoning
5. [README.md](README.md) — orientation

This file is the orientation's only home, loaded through the `@AGENTS.md`
import in [CLAUDE.md](CLAUDE.md) — never a copy, never a rename
([ADR 0019](docs/adr/0019-claude-md-imports-agents-md.md)). It carries only
what a session needs **before** `/start`. Performing verbs, writing state,
lineage, and the close protocol live in `system/LAW.md` and the skills, and
are read when they are needed (ADR 0031) — do not copy them back here.

A verb's facts — name, signature, voice, run — live in its skill's
frontmatter and nowhere else by hand; `system/registry.md` is **generated**
(`scripts/generate-registry.mjs`). Invariants the law asserts are checked by
`scripts/validate-estate.mjs`; a claim the validator does not check is
guidance, not law.

[BRAINSTORM.md](BRAINSTORM.md) is a **historical record**, preserved
unedited, and ADRs are immutable — a
decision is superseded by a new ADR, never edited in place. Where they
conflict with `system/`, `system/` wins.
[docs/idea-pipeline.html](docs/idea-pipeline.html) is an approved visual — do
not modify.

If something conflicts between agent memory and these files, the files win.

## Domain-generality

This repository is domain-general. Do not introduce assumptions about any
specific industry, technology stack, use case, or output format. A product
idea, a mathematical question, a narrative premise, and a technical
architecture are all equally valid Idea Records.

## Self-containment

The repository must remain self-contained. Do not introduce dependencies on
external services, private file systems, private agent configurations, or any
resource not accessible from the repository itself as the source of truth. If
an integration is proposed, it must be non-critical — the system must function
without it.
