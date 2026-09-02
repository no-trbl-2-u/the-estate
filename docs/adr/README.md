---
type: Reference
title: "ADR Index"
description: "Every major decision made while building this workspace, in order."
tags: [adr, decisions]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Architecture Decision Records

Major decisions made while building this workspace, in order. Each records the
context, the decision, and what it costs. Interview references are to the
10-question vision interview between T and the design agent (2026-08-25),
conducted per Requirement A of `BUILD-PROMPT.md`.

| ADR | Decision |
|---|---|
| [0001](0001-extraction-first.md) | think-tank is an idea foundry, not a memory system |
| [0002](0002-seed-terminal-type.md) | The Seed is the terminal type: horizon + trajectory, clean export, provenance stamp |
| [0003](0003-typed-skills.md) | Skills are typed composed functions in three families |
| [0004](0004-classification-not-certification.md) | Quality is classified structurally, never certified or gated |
| [0005](0005-immutable-state-derived-lineage.md) | State is immutable copy-forward; lineage is derived; `relates` is the only authored edge |
| [0006](0006-steward-as-router.md) | The Steward routes by Seed-gap and pushes back only by suggesting a skill |
| [0007](0007-portfolio-scoring.md) | Portfolio scoring optimizes for noticing, ranked by reachability, drift displayed not scored |
| [0008](0008-frontmatter-route-hints.md) | Every artifact carries frontmatter with `potential-next-steps` route hints |
| [0009](0009-first-build-scope.md) | First build: Steward + ten molecular skills, no specialists, no sync |
| [0010](0010-process-and-protected-files.md) | Build authorized directly from the confirmed interview; protected files left untouched |
| [0011](0011-agent-layer.md) | *(superseded by 0012)* Skills bind to swappable agents via the registry |
| [0012](0012-hard-bindings-and-single-entrypoint.md) | Hard agent-verb bindings; the three-part law; the Steward is the entrypoint |
| [0013](0013-the-estate-roster-and-the-writer-seam.md) | The Estate theme and full roster; agents write artifacts, the Steward writes state; `survey` and the sitemap |
| [0014](0014-vision-reconciliation.md) | Vision reconciliation: lenses restored, type/shape split, six verbs restored, Seed generalized, `connective` status, protected docs rewritten |
| [0015](0015-audit-fixes.md) | Audit fixes: seam extended to `idea.md`, Spark restored to `capture`, dialogue relay, `state-head` in the close, chain-fraction reachability, algebra reconciled, merge/split as playbooks |
| [0016](0016-the-estate-rename.md) | The project is renamed The Estate; current docs renamed in full, the historical record left unedited |
| [0017](0017-okf-documentation.md) | *(decision 3 amended by 0019)* Documentation adopts OKF (Google Cloud Open Knowledge Format); the reference bundle; ADR 0008's open question answered |
| [0018](0018-findings-speak-okf.md) | Findings artifacts speak OKF; promotion to reference/, never relocation |
| [0019](0019-claude-md-imports-agents-md.md) | `CLAUDE.md` imports `AGENTS.md`; the orientation is neither duplicated nor renamed |
| [0020](0020-human-attention-tag.md) | Roadmap steps carry a human-attention tag for work no agent can perform; approval is not the criterion |
| [0021](0021-audience-mode-and-the-handback-packet.md) | Verbs carry a mode; `frame`/`challenge`/`decide`/`explore` run as audiences; the handback packet replaces the dialogue relay *(supersedes 0015 in part)* |
| [0022](0022-proposal-only-dispatch.md) | The Steward proposes the verb and waits; inference never triggers dispatch, and naming the verb is the one exception |
| [0023](0023-jot-deferred-ceremony-intake.md) | `jot` writes a slip to `inbox/` in one step; a slip is a boundary input, not an artifact, so `jot` is a Steward clerical duty |
| [0024](0024-graft-the-branch-verb.md) | `graft` branches a new record off any prior snapshot, inheriting as-of-snapshot tips, with a required Direction and lineage in both directions |
| [0025](0025-seed-payload-and-nameable-contracts.md) | A Seed may carry a payload directory that *is* the droppable result; the five components become the default `standard` contract, and domain contracts are nameable |
| [0026](0026-session-residue-as-a-type.md) | `SessionResidue` is a `capture`-produced type for what a session reveals about the estate's own functioning; the handback packet does not replace it |
| [0027](0027-inline-verbs-and-the-dispatch-exceptions.md) | Verbs run inline in their own voice; the agent layer retires; dispatch survives only as `fresh-eyes` (`challenge`; conditional `review`/`compare`) and `quarantine` (`research`, `survey`) *(ratified by merge of PR #22; supersedes 0012, 0013, 0021 in part)* |
| [0028](0028-the-use-tax-repeals.md) | The use-tax repeals: ceremony narrows to the boundary, every verb fact has one home (registry generated), invariants get a validator, state closes become deltas *(supersedes 0005, 0017, 0022 in part)* |
| [0029](0029-the-build-plan-contract-and-seed-reconciliation.md) | The `build-plan` contract: a Seed may leave as a loop-ready payload with a garden Phase 0; the target loop is forked and pinned, never vendored; a Seed behind its record owes a reconciliation (re-seed · graft · decide-abandon) *(extends 0025)* |
