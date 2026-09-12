---
id: idea-0001/artifacts/0003-openspec-findings.md
type: Findings
title: "Fission-AI/OpenSpec, as of 2026-09-12"
description: "What OpenSpec covers, what an operator runs per change, and how mature it is — gathered for a compare against the-estate on stage coverage and operator overhead."
shape: prose
lenses: []
produced-by: research
inputs: []
date: 2026-09-12
classifiers:
  challenged: false
potential-next-steps: [compare]
summary: "OpenSpec is a spec-driven-development kit for AI coding assistants: an optional no-artifact explore step, then propose → apply → archive over four generated artifacts per change (proposal, delta specs, design, tasks); it starts at a concrete change and ends at archive, with no idea record, decision record, pressure-test, or portfolio survey. 68k stars, MIT, v1.13.0 (2026-09-09), weekly releases, 1.0 (2026-01-26) removed the /openspec:* commands."
tags: [openspec, spec-driven-development, comparison, external-tool]
generated: { by: factor/2026-09-12, at: 2026-09-12T18:45:00Z }
stale_after: 2026-10-12T00:00:00Z
sources:
  - id: readme
    resource: https://github.com/Fission-AI/OpenSpec/blob/main/README.md
    title: "OpenSpec README (main)"
    author: Fission-AI
  - id: repo-meta
    resource: https://api.github.com/repos/Fission-AI/OpenSpec
    title: "GitHub repository metadata (search API record)"
    author: github
    last_modified: 2026-09-11T17:32:32Z
  - id: npm
    resource: https://registry.npmjs.org/@fission-ai/openspec
    title: "npm registry record for @fission-ai/openspec"
    author: npm:tabish_
    usage_count: 378332
    last_modified: 2026-09-09T21:08:28Z
  - id: changelog
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/CHANGELOG.md
    title: "CHANGELOG.md (main)"
    author: Fission-AI
  - id: docs-commands
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/docs/commands.md
    title: "docs/commands.md — slash command reference"
  - id: docs-concepts
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/docs/concepts.md
    title: "docs/concepts.md — specs, changes, artifacts, schemas, archive"
  - id: docs-workflows
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/docs/workflows.md
    title: "docs/workflows.md — profiles and patterns"
  - id: docs-cli
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/docs/cli.md
    title: "docs/cli.md — CLI reference (init, update, validate, archive)"
  - id: docs-tools
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/docs/supported-tools.md
    title: "docs/supported-tools.md — tool directory and invocation forms"
  - id: docs-start
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/docs/getting-started.md
    title: "docs/getting-started.md"
  - id: schema
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/schemas/spec-driven/schema.yaml
    title: "Built-in spec-driven schema and its templates (proposal.md, design.md, tasks.md)"
  - id: maintainers
    resource: https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/MAINTAINERS.md
    title: "MAINTAINERS.md"
usage_window: { from: 2026-09-05T00:00:00Z, to: 2026-09-11T00:00:00Z }
---

# Fission-AI/OpenSpec — Findings

OpenSpec describes itself as "Spec-driven development (SDD) for AI coding
assistants."[^repo-meta] It is a CLI (`openspec`, npm `@fission-ai/openspec`)
that scaffolds an `openspec/` directory in a software repository and
generates slash commands and skills for AI coding tools; the AI assistant
drives the workflow while the CLI supplies "deterministic scaffolding,
status, and artifact instructions."[^docs-workflows] Everything below is
**known** from primary sources unless marked *(inferred)*.

## 1. Stage coverage

**Where a change begins.** Two entry points. `/opsx:explore` is an optional,
pre-change conversation: it "reads your codebase, compares options, and
sharpens a fuzzy idea into a concrete plan before any change exists"; it
"creates no artifacts and writes no code."[^docs-commands][^docs-workflows]
The first durable object is created by `/opsx:propose` (or `/opsx:new` in the
expanded profile), which makes `openspec/changes/<change-name>/`.[^docs-commands]
So the earliest *recorded* stage is a named change with a proposal; anything
upstream of that lives only in chat. *(inferred)* Explore is an idea stage in
the sense of "think before you commit," but nothing from it survives except
what the proposal absorbs.

**Where a change ends.** `/opsx:archive` (or `openspec archive <name> --yes`)
merges delta specs into `openspec/specs/` and moves the folder to
`openspec/changes/archive/YYYY-MM-DD-<name>/`, "preserved for audit
trail."[^docs-commands][^docs-cli] Archive warns on unchecked tasks but does
not block.[^docs-commands] A capability can be retired (its live `spec.md`
deleted) when a change removes its last requirement and its `.openspec.yaml`
declares `retire_capabilities: true`.[^docs-cli]

**Artifact types.** The default `spec-driven` schema declares four artifacts
with a dependency graph: `proposal` (no requirements) → `specs` and `design`
(each require proposal) → `tasks` (requires specs and design).[^docs-concepts][^schema]
Per change:

| File | Role | Required sections (built-in template) |
|---|---|---|
| `proposal.md` | why / what / scope | Why; What Changes; Capabilities (New / Modified); Impact[^schema] |
| `specs/<capability>/spec.md` | **delta spec** | `## ADDED / MODIFIED / REMOVED / RENAMED Requirements`, each `### Requirement:` with `#### Scenario:` (Given/When/Then, RFC 2119 keywords)[^docs-concepts][^changelog] |
| `design.md` | technical approach | Context; Goals / Non-Goals; Decisions; Risks / Trade-offs[^schema] |
| `tasks.md` | checklist | numbered groups of `- [ ]` items[^schema] |
| `.openspec.yaml` | metadata (optional) | `schema`, `created`, `skip_specs`, `retire_capabilities`[^docs-concepts] |

Main specs (`openspec/specs/<domain>/spec.md`) are "the source of truth —
how your system currently behaves"; deltas are merged into them at archive.[^docs-concepts]
Schemas are customizable (`openspec schema init|fork`); the docs' own example
of a custom schema is `research-first` with a `research.md` artifact
preceding the proposal.[^docs-concepts]

**Adjacent coverage.** `/opsx:verify` checks implementation against artifacts
on completeness / correctness / coherence (expanded profile only).[^docs-commands]
`/opsx:update` revises planning artifacts and reconciles them with each other.[^docs-commands]
"Stores" (standalone OpenSpec repos shared across projects) exist as a
"very early beta."[^docs-cli][^changelog] `openspec list`, `show`, `view`
(an "interactive dashboard") browse the active changes of one project.[^docs-cli]

**What it does NOT cover** (checked against commands, concepts, workflows,
CLI, and schema docs):

- No idea record or exploration artifact — explore is chat-only, and the
  docs say so explicitly.[^docs-commands]
- No decision-record type. The nearest thing is the `## Decisions` section
  inside `design.md` ("Key design decisions with rationale and alternatives
  considered").[^schema] No ADR directory, no supersession, no immutability rule.
- No pressure-test / adversarial-review verb. `/opsx:verify` compares code to
  artifacts; nothing attacks the proposal itself. A separate
  `reviewing-changes.md` guide is described as "the two-minute pass on a
  drafted plan before any code."[^docs-workflows] *(inferred)* That is
  guidance for a human reader, not a tool step.
- No portfolio-level survey or ranking. Listing is per-project and flat.
- No lineage between changes beyond chronological archive naming; no "graft"
  or branch-from-snapshot concept.
- Software-only framing throughout: specs are behavior contracts for a
  codebase, and `apply` writes code.[^docs-concepts] *(inferred)* Nothing
  prevents non-software use, but every template and example assumes one.

## 2. Operator overhead

**Per project, once (terminal):** `npm install -g @fission-ai/openspec@latest`;
`openspec init` (interactive tool picker, or `--tools claude,cursor`);
`openspec update` after each CLI upgrade to regenerate instruction files.[^docs-cli][^docs-start]
Node ≥ 20.19.0.[^npm]

**Per change (chat), default `core` profile:** `/opsx:explore` (optional) →
`/opsx:propose <name-or-description>` → `/opsx:apply` → `/opsx:archive`
(archive offers `/opsx:sync` inline). `/opsx:update` when the plan changes.[^docs-workflows]
Minimum is three slash commands. The expanded profile (`openspec config
profile` + `openspec update`) swaps in `/opsx:new` → `/opsx:continue` (one
artifact at a time) or `/opsx:ff` (all at once) → `/opsx:apply` →
`/opsx:verify` → `/opsx:archive`, plus `/opsx:bulk-archive` and
`/opsx:onboard`.[^docs-commands]

**Generated vs hand-written.** All four artifacts are AI-drafted from the
schema's `instruction:` and `template:` blocks; the human "provides intent,
context, and constraints," reviews, and edits.[^docs-concepts][^schema]
Instructions are "dynamically assembled from three layers" — project context
from `openspec/config.yaml`, per-artifact rules, template — and the AI
queries the CLI (`openspec status --json`, `openspec instructions --json`)
for state.[^changelog][^docs-cli] `tasks.md` checkboxes are the completion
state.[^docs-commands]

**Validation.** `openspec validate [name] [--all|--changes|--specs]
[--strict] [--json] [--archived]` checks structure and checks MODIFIED
requirements against the main specs they replace; a change with zero deltas
fails unless `skip_specs: true`.[^docs-cli] Text output shows section-level
warnings, e.g. `design.md: missing "Technical Approach" section`.[^docs-cli]
`--archived` is a pre-commit-hook check that every archived `tasks.md` is
fully ticked.[^docs-cli] `openspec archive` validates before merging unless
`--no-validate`.[^docs-cli]

**Claude Code integration.** For tool id `claude`, init writes
`.claude/skills/openspec-*/SKILL.md` (twelve skills:
`openspec-propose`, `openspec-explore`, `openspec-new-change`,
`openspec-continue-change`, `openspec-apply-change`,
`openspec-update-change`, `openspec-ff-change`, `openspec-sync-specs`,
`openspec-archive-change`, `openspec-bulk-archive-change`,
`openspec-verify-change`, `openspec-onboard`) and commands at
`.claude/commands/opsx/<id>.md`, invoked as `/opsx:<id>`.[^docs-tools]
Since 1.0, **no `CLAUDE.md` or `AGENTS.md` is generated or edited**; a
vendor-neutral `agents` target writes `.agents/skills/` only.[^changelog][^docs-tools]
Skill files carry the generating version so `update` can detect drift;
"generated files are OpenSpec's to own — keep your own instructions
elsewhere."[^docs-cli]

**Supported tools.** 39 tool ids (README says "30+"), including Claude Code,
Cursor, Codex, Gemini CLI, GitHub Copilot, Devin Desktop (ex-Windsurf),
Cline, Kiro, Zed, OpenCode, Amazon Q, and a shared `.agents` target.[^docs-tools][^readme]
Invocation spelling varies by tool (`/opsx:propose`, `/opsx-propose`,
`$openspec-propose`, `@opsx-propose`).[^docs-commands]

## 3. Maturity signals

- **Stars / forks / open issues:** 68,077 / 4,675 / 280; last push
  2026-09-11.[^repo-meta] Repo created 2025-08-05.[^repo-meta]
- **License:** MIT.[^repo-meta][^npm]
- **Latest:** v1.13.0, published 2026-09-09.[^npm] 48 versions since 0.1.0
  (2025-09-06).[^npm] Weekly downloads 378,332 (2026-09-05 → 09-11).[^npm]
- **Cadence:** roughly weekly since July 2026 (1.7.0 07-29, 1.8.0 08-05,
  1.9.0 08-13, 1.10.0 08-19, 1.11.0 08-26, 1.12.0 09-03, 1.13.0 09-09);
  slower Feb–Jun 2026 (1.2 → 1.5).[^npm]
- **Maintainers:** Tabish Bidiwale (@TabishB, lead), Clay Good
  (@clay-good); an automation maintainer account (@alfred-openspec); advisor
  Hari Krishnan.[^maintainers] npm publisher `tabish_`.[^npm]
- **Breaking changes, 2025–2026:**
  - **1.0.0 (2026-01-26), "The OPSX Release":** `/openspec:proposal`,
    `/openspec:apply`, `/openspec:archive` removed; generated `CLAUDE.md`,
    `.cursorrules`, `AGENTS.md`, `project.md` no longer produced; migration
    via `openspec init`, which detects and cleans legacy files with
    confirmation; move from "8+ config files at project root + slash
    commands scattered across 21 tool-specific locations" to
    `.claude/skills/`.[^changelog] The commands doc still lists the legacy
    trio as "still work but OPSX commands are recommended" — a contradiction
    with the 1.0 changelog.[^docs-commands]
  - **1.5.0 (2026-06-28):** Stores replace the "workspace and initiative
    model"; flagged "expect rough edges and breaking changes."[^changelog]
  - **1.7.0 (2026-07-29):** Windsurf → Devin Desktop rename; `.devin/` is the
    write target, `.windsurf/` a read-only fallback; `--tools windsurf`
    still resolves.[^changelog]
  - The archive layout `openspec/changes/archive/YYYY-MM-DD-<name>/` has been
    stable through 1.x; a 1.0-era doc fix corrected a wrong
    `openspec/archive/` path.[^changelog]

## Looked for, not found

- Any artifact or record type for an idea before it becomes a change; any
  "incubate" / "retire an idea" state (retirement exists only for spec
  capabilities).
- A decision-record type, ADR directory, or supersession mechanism.
- An adversarial or fresh-context review step; any notion of running a step
  in an isolated context.
- A cross-project or portfolio survey, ranking, or "what deserves attention"
  report.
- A release/version date on the GitHub releases page itself (the page was
  read through a summarizer that misreported the year; dates above are from
  the npm registry instead).
- A public roadmap or stated non-goals document (the "Philosophy" section
  in `concepts.md` is the nearest thing).

## Could not verify

- The `skills/` directory at the repo root (visible in a web search index)
  — the GitHub API denied a listing from this session; the twelve skill
  names above come from `docs/supported-tools.md`, not from the tree.
- Whether the legacy `/openspec:*` commands still function in 1.13.0 (docs
  and changelog disagree; not tested).
- Contributor count and commit total (the anonymous GitHub API was blocked;
  a summarizer reported "843 commits" — treat as *unverified*).
- The README's "30+ AI assistants" vs the 39 ids in `docs/cli.md`: the ids
  were counted from the doc table, not from `src/core/config.ts`.

[^readme]: OpenSpec README (main)
[^repo-meta]: GitHub repository metadata
[^npm]: npm registry record for @fission-ai/openspec
[^changelog]: CHANGELOG.md (main)
[^docs-commands]: docs/commands.md
[^docs-concepts]: docs/concepts.md
[^docs-workflows]: docs/workflows.md
[^docs-cli]: docs/cli.md
[^docs-tools]: docs/supported-tools.md
[^docs-start]: docs/getting-started.md
[^schema]: schemas/spec-driven/schema.yaml and templates
[^maintainers]: MAINTAINERS.md
