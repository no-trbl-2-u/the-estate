---
type: Decision Record
title: "ADR 0031"
description: "The main session carries no persona by default; entering as The Steward requires invoking /start. Reverses the standing identity ADR 0019 delivered."
tags: [adr, decision]
generated: { by: claude-code/2026-09-03, at: 2026-09-03T12:44:00Z }
---

# ADR 0031: Explicit entry via `/start`

**Status:** accepted · **Date:** 2026-09-03 · **Source:** T's direction, this session

## Context

ADR 0019 made the main session's Steward identity load as text at session
start rather than depend on the session electing to read a second file: "the
standing identity no longer depends on the main session electing to read a
second file." `AGENTS.md` since read "If you are the main session in this
repository, you are The Steward. Not a role you adopt when asked — your
standing identity here," and named `/steward` as existing only to *reload*
instructions, never to summon them.

T now reverses that, plainly: "I no longer want to always chat with the
Steward." The standing identity was a deliberate fix for a real defect
(F-3 — the orientation not reliably loading), but it also means every
session in this repository opens as the idea pipeline, whether or not that
is the work at hand. T wants the choice back.

## Decision

**1. The main session carries no persona by default.** Before `/start` is
invoked, none of the Steward's behavior applies — no greeting, no portfolio
orientation, no verb performance. The rest of `AGENTS.md` (authority and the
boundary, domain-generality, self-containment, the source-of-truth
precedence) still governs regardless, since those bind the repository, not
the Steward's office specifically.

**2. `/start` is the trigger, and the only one.** The `steward` skill is
renamed to `start` (`.claude/skills/start/SKILL.md`) — invoking it is what
begins the session as The Steward, per `system/STEWARD.md`. There is no
separate reload command: invoking `/start` again mid-session simply re-reads
the same instructions, which is all the old `/steward` reload ever did.

**3. `system/LAW.md` and the portfolio are read on `/start`, not before.**
Nothing changes about what happens once the Steward is entered — orientation,
routing, inline performance, the dispatch exceptions, and the delta close
(ADR 0027, ADR 0028) all stand unmodified. Only the trigger for entering that
office changes.

**4. The orientation is trimmed to what a pre-`/start` session needs.**
`AGENTS.md` is injected into every session in this repository, so its contents
are a standing per-session cost. While the session *was* the Steward from its
first reply, that file had to carry the verb table, the writer seam, and the
lineage rules. Under decision 1 it no longer does: those are read on `/start`,
from `system/LAW.md` and the skills, where they already live in full. The
orientation keeps only what governs a session that has **not** entered — the
`/start` gate, the boundary (exports, commits, pushes, new records, dispatch,
structural change), the source-of-truth precedence and protected files,
domain-generality, and self-containment.

This applies the estate's own rule to its own memory file: `system/` is the
source of truth *because nothing in it is stored twice* (ADR 0019 decision 2).
The duplication in `AGENTS.md` was only ever justified by the standing
identity, and it does not survive it.

## What this does not change

ADR 0019's mechanism — `CLAUDE.md` imports `AGENTS.md`, so the orientation
loads as text at session start rather than by an errand — is untouched and
still correct: it is *content-neutral*, and this ADR only changes what that
loaded content says. ADR 0006 and ADR 0012's "the Steward is the one
entrypoint the operator needs" also stands: `/start` remains the single
thing to invoke, and every verb remains directly invocable besides it, as
before. What changes is narrow: whether that entrypoint is assumed or asked
for.

## Rejected alternatives

**Keep the standing identity and add a way to opt out per session.** Rejected
as the more complex fix for the same result — a flag to disable a default is
more moving parts than a default that requires the word, and T's stated
preference is the latter.

**A distinct `/steward` reload command alongside `/start`.** Rejected: with
no standing identity to reload, the two commands would do the same thing
under different names. One name, invoked at the start of a session or again
mid-session, is the whole of it.

## Consequences

- `.claude/skills/steward/` renamed to `.claude/skills/start/` (`git mv`);
  frontmatter `name: steward` → `name: start`; body updated to describe
  entering rather than an always-on identity.
- `AGENTS.md`: "You are The Steward" replaced with "The Steward is entered,
  not assumed," naming `/start` as the trigger; and trimmed per decision 4
  from 148 lines to 83 — the verb voice/dispatch table, "You do write state,"
  "Lineage and clean state," and "The Steward, in brief" are removed as
  duplication of `system/LAW.md`, `system/STEWARD.md`, and the skills. ADR
  0027's consequence "AGENTS.md replaces 'Never perform a bound verb
  yourself' with the inline provision and the exception table" is thereby
  moot: the exception table lives in `system/LAW.md` and each skill's `run:`.
- `CLAUDE.md`: trimmed to the import plus the two guardrails ADR 0019 set
  (no duplicate, no rename, no OKF frontmatter) and the spawned-agent seam.
- `system/LAW.md`, *Where the law lives*: corrected. It claimed inline verbs
  receive the law because "`AGENTS.md` points here and loads at start" —
  false under decision 1, since the orientation now points here **without**
  loading it. `/start` reads the law when the Steward is entered.
- `system/STEWARD.md`, `README.md`, `reference/the-estate.md`,
  `docs/GLOSSARY.md`: updated to name `/start` as the entrypoint and drop
  "standing identity" language.
- `scripts/validate-estate.mjs`: the skip condition for the non-verb
  entrypoint skill now matches `name === 'start'`.
- ADRs 0006, 0019, 0021, 0022 are historical record and are **not edited** —
  they describe the `steward` skill and the standing identity as they stood
  at the time. This ADR does not supersede any of them; ADR 0019's decision
  (the import mechanism) stands, and this ADR changes only the content that
  mechanism delivers.
- No verb ran. This is a structural session, made directly at T's word.
