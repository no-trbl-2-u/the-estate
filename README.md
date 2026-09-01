---
type: Guide
title: "The Estate"
description: "Orientation: what The Estate is, the law, the household, and where everything lives."
tags: [orientation]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# The Estate

An AI-assisted idea foundry. Ideas enter loose and leave as **Seeds** — an
elaborated six-month vision plus a rough path — ready to be built somewhere
else.

## What it is

The Estate is a structured workspace where ideas are first-class, durable
objects rather than chat logs. An idea is captured, framed, envisioned,
attacked, connected to other ideas, and eventually **extracted** as a Seed that
carries out to a real project. Every session advances the idea and leaves an
explicit, queryable trail.

State is **immutable**: each session closes with a new snapshot — a delta
plus the live questions and an honest current-state declaration (ADR 0028) —
and prior states are never edited. Time
travel is opening an older file; branching is the `graft` verb — a new record
started from any prior snapshot, inheriting what that record held **at that
moment** — and the source is never altered, because nothing is ever altered.

## What it is not

- Not a task tracker (no mandatory action plans).
- Not a document generator (no forced PRD).
- Not a chat interface or scratch pad.
- Not specific to any domain, team, or technology.

## How you use it

Greet **The Steward** — the front door. It knows the portfolio, offers a
shortlist rather than a wall of records, and acts on what you say: an inline
verb runs in its voice the moment you describe it, while a dispatch, a new
record, an export, or a structural change waits for your explicit word
(the **boundary**, ADR 0028). Verbs are also directly invocable: the goal is
that nothing must be *memorized*, not that invocation is forbidden.

```
/steward          the front door — start here
/jot              catch a stray thought; the ceremony waits
/survey           what deserves attention next
/challenge        have The Advocate find the holes
/graft            branch a new idea off an older snapshot
```

Most verbs run **inline** — the session performs them in the verb's voice,
conversing with you as it works. Five dispatch to a spawned context for a
named reason: `challenge` (and conditionally `review`/`compare`) as
**fresh-eyes**, because a session should not grade its own homework;
`research` and `survey` as **quarantine**, so web bulk and the
whole-portfolio read stay out of the window (ADR 0027).

## The law

Three rules govern every addition ([system/LAW.md](system/LAW.md)):

1. **Verbs are verbs** — never personas.
2. **Every verb has a voice** — "You are The ⟨Something⟩…", thematic to The
   Estate, opening each verb's skill.
3. **Every verb declares how it runs** — `inline`, `fresh-eyes`, or
   `quarantine`; the value names the reason, and changing one is an ADR.

Two rules follow: **artifacts carry the work in the performing voice, the
Steward writes state**; and **grade, never gate** — quality is classified
structurally, never enforced.

## The household

| Voice | Verbs |
|---|---|
| The Steward | — (front door; writes all state; clerical `jot`) |
| The Gardener | `capture`, `frame`, `graft` |
| The Architect | `envision` |
| The Surveyor | `chart`, `phase` |
| The Forager | `explore` |
| The Distiller | `distill` |
| The Advocate | `challenge` |
| The Factor | `research` |
| The Assayer | `compare`, `review` |
| The Chancellor | `decide` |
| The Cartographer | `relate`, `survey` |
| The Keeper | `incubate`, `retire` |
| The Sower | `seed` |

## Files

| Path | Purpose |
|---|---|
| [VISION.md](VISION.md) | Product vision, principles, non-goals, success criteria |
| [system/LAW.md](system/LAW.md) | The governing law. Dispatched verbs read it directly |
| [system/TYPES.md](system/TYPES.md) | Verb families, artifact types, the Seed contract, output shapes |
| [system/LENSES.md](system/LENSES.md) | The six lenses |
| [system/SCORING.md](system/SCORING.md) | Portfolio scoring: notice more, not finish more |
| [system/STEWARD.md](system/STEWARD.md) | Full Steward specification |
| [system/registry.md](system/registry.md) | Routing registry — **generated** from skill frontmatter (`scripts/generate-registry.mjs`) |
| [system/FALSIFIERS.md](system/FALSIFIERS.md) | What would prove this wrong, and by when |
| [reference/](reference/) | The OKF reference bundle: the spec, the model, and the artifact types. Describes, never governs |
| [inbox/](inbox/) | The front step: jotted slips awaiting processing |
| [ideas/](ideas/) | The records. `ideas/SURVEY.md` is the sitemap |
| [exports/](exports/) | The departure lounge for Seeds and their payload directories |
| [docs/architecture.html](docs/architecture.html) | Visual model of the whole flow: idea → state → artifacts |
| [docs/adr/](docs/adr/) | Every major decision, in order |
| [AUDIT-PROMPT.md](AUDIT-PROMPT.md) | Standalone brief for an outside agent auditing this implementation |
| [AUDIT-REPORT.md](AUDIT-REPORT.md) | The 2026-08-26 audit's findings; fixes recorded in ADR 0015 |
| [BRAINSTORM.md](BRAINSTORM.md) | Historical design log |
| [BUILD-PROMPT.md](BUILD-PROMPT.md) | Historical build brief |
| [AGENTS.md](AGENTS.md) | Orientation for agents in this repo |
| [CLAUDE.md](CLAUDE.md) | Imports `AGENTS.md` so Claude Code loads the orientation at session start |
