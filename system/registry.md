---
type: Registry
title: "Routing Registry"
description: "Every verb, its signature, its voice, and how it runs — generated from skill frontmatter."
tags: [registry, routing, generated]
generated: { by: "scripts/generate-registry.mjs", at: 2026-09-04 }
---

<!-- GENERATED FILE — do not edit by hand.
     Source of truth: .claude/skills/*/SKILL.md frontmatter.
     Regenerate: node scripts/generate-registry.mjs        (ADR 0028) -->

# Routing Registry

Generated from `.claude/skills/*/SKILL.md` frontmatter — the single home of
every verb's facts (ADR 0028). Governed by `system/LAW.md`: verbs are verbs,
every verb has a voice, every verb declares how it runs.

## Verbs

| Verb | Signature | Voice | Run |
|---|---|---|---|
| `capture` | `Text → Spark` | **The Gardener** | `inline` |
| `challenge` | `a → a` | **The Advocate** | `fresh-eyes` |
| `chart` | `Horizon → Trajectory` | **The Surveyor** | `inline` |
| `compare` | `[a] → Appraisal` | **The Assayer** | `fresh-eyes` |
| `decide` | `Tensions → Decision` | **The Chancellor** | `inline` |
| `distill` | `a → a` | **The Distiller** | `inline` |
| `envision` | `Framing → Horizon` | **The Architect** | `inline` |
| `explore` | `a → a` | **The Forager** | `inline` |
| `frame` | `Spark → Framing` | **The Gardener** | `inline` |
| `graft` | `(Idea @ state-N, Direction) → Idea` | **The Gardener** | `inline` |
| `incubate` | `Idea → Idea` | **The Keeper** | `inline` |
| `jot` | `Text → Slip` | **The Steward** | `inline` |
| `onboard` | `(Text, [Material]) → (Project, [Slip])` | **The Steward** | `inline` |
| `phase` | `Trajectory → [Phase]` | **The Surveyor** | `inline` |
| `relate` | `(Idea, Idea) → relates` | **The Cartographer** | `inline` |
| `research` | `Question → Findings` | **The Factor** | `quarantine` |
| `retire` | `Idea → Idea` | **The Keeper** | `inline` |
| `review` | `a → Appraisal` | **The Assayer** | `fresh-eyes` |
| `seed` | `Horizon + Trajectory (+ [Phase]) → Seed` | **The Sower** | `inline` |
| `survey` | `[Idea] → Survey` | **The Cartographer** | `quarantine` |

`run:` values (`system/LAW.md`): **inline** — performed by the session in
the verb's voice; **fresh-eyes** — dispatched because the session's context is
a liability (`review`/`compare` conditionally, per their skills);
**quarantine** — dispatched because the inputs must not enter the main window.
`jot` and `onboard` are the Steward's clerical duties, not verbs (ADR 0023,
ADR 0034); they appear here because they have skill files, and their products
— slips and a project shell — are boundary inputs and a container, not
artifacts.

## Lenses

Lenses (`system/LENSES.md`) bias a verb's angle without changing its
operation; they are passed with the work, need no voice, and modify rather
than perform.

`technical` · `commercial` · `user` · `adversarial` · `long-term` · `ethical`

## Output shapes

The verb sets the artifact's **type**; the operator sets its **shape**
(`system/TYPES.md`). A `Horizon` may be rendered as a PRD — this is what
keeps the *no output-type siloing* non-goal true under a typed system.

## Playbooks

| Playbook | Composition | Status |
|---|---|---|
| `spark-to-seed` | `capture ▸ frame ▸ envision ▸ challenge ▸ chart ▸ phase ▸ seed` | example only — routes are derived, not prescribed |
