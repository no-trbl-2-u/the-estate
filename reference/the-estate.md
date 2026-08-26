---
type: Guide
title: "The Estate"
description: "An AI-assisted idea foundry: ideas enter loose and leave as Seeds, carried out to become real projects elsewhere."
tags: [orientation]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: readme
    resource: ../README.md
    title: "Repository orientation"
  - id: vision
    resource: ../VISION.md
    title: "Vision"
---

# The Estate

An idea foundry. Ideas enter loose, pass through thirteen
[offices](./offices/index.md) as [typed values](./types/index.md), and
leave as [Seeds](./types/seed.md) — an elaborated six-month vision plus a
rough path, thin on implementation, ready to be built somewhere else.
Extraction is the point; recall and lineage are side effects of the
machinery, not the product.

# How to enter

Greet [The Steward](./offices/steward.md) — the main session **is** the
Steward by standing identity. Say what you want in your own words; the
Steward names the [verb](./verbs/index.md) and the office that performs
it, and offers the runner-up. Nothing must be memorized, and every verb
also remains directly invocable.

# The estate's map

| Path | What lives there |
|---|---|
| `system/` | [The law](./law.md), the type system, the Steward spec, scoring, lenses, falsifiers, the registry |
| `.claude/skills/` | The seventeen verbs, each carrying its binding |
| `.claude/agents/` | The twelve specialist offices (the Steward is the main session) |
| `ideas/` | The Idea Records and the survey sitemap ([record model](./record-model.md)) |
| `exports/` | The departure lounge for Seeds and Briefs |
| `playbooks/` | Worked verb compositions ([playbooks](./playbooks.md)) |
| `templates/` | The forms: idea, state, artifact, seed |
| `docs/adr/` | Every major decision, in order |
| `reference/` | This bundle |

# The clock

The estate carries its own [falsifier](./falsifiers.md): evidence of use
outside this repository by **2026-09-25**, or the build has failed its
builder. The named failure mode is that building the machine is more fun
than using it.
