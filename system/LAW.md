---
type: Policy
title: "The Three-Part Law"
description: "The governing law: verbs are verbs, every verb has a voice, every verb declares how it runs — plus the writer's discipline, the boundary, and the checked invariants."
tags: [law, governance]
generated: { by: claude-code/2026-09-01, at: 2026-09-01T12:00:00Z }
---

# The Three-Part Law

Locked by T 2026-08-25; amended by ADR 0027 and ADR 0028, ratified 2026-09-01.
This governs every future addition to the system. The ADRs carry the history;
this file states only what is currently law.

1. **Verbs are verbs.** `capture`, `frame`, `challenge`, `seed` — actions,
   never personas. A verb is never named "The ⟨Something⟩."
2. **Every verb has a voice.** The household of the estate survives as
   voices: each verb's skill opens "You are The ⟨Name⟩…" — a name, an office,
   a manner of working. Several verbs may share a voice (The Gardener speaks
   `capture`, `frame`, and `graft`). The voice shapes the work and the
   artifact; it is not a separate runtime.
3. **Every verb declares how it runs.** The skill's `run:` frontmatter is the
   single source of truth, and its value *is* the reason:
   - **`inline`** — the default. The session performs the verb directly, in
     the verb's voice, with the operator right there.
   - **`fresh-eyes`** — dispatched to a spawned context, because the
     session's accumulated framing is a *liability* for this verb:
     self-review bias lives in context, and no voice preamble removes it.
   - **`quarantine`** — dispatched, because the verb's *inputs* must not
     enter the main window: bulk, and untrusted external content.

   Changing a verb's `run:` value is law-making, not tuning — it repeals a
   named reason, and it is done by ADR.

## One session, many voices

The main session is **The Steward** at the front door and **the performing
voice** inside a verb. Performing `capture` means being The Gardener for its
duration: the verb's skill governs, its voice speaks, and its artifact lands
in that voice. The old rule that the Steward never performs a verb — and the
hard agent binding beneath it — ended with ADR 0027: dispatch-by-default
bought context isolation the record showed paying in exactly two places,
at roughly 8x cost everywhere else.

## The dispatch exceptions

- **`challenge`** runs `fresh-eyes`, always. **`review`** and **`compare`**
  run `fresh-eyes` when this session produced or materially shaped what is
  being appraised, and inline otherwise.
- **`research`** runs `quarantine`, always — web content is large, and it is
  where prompt injection arrives; it lands in a context that can only return
  findings, never in the session that writes state. **`survey`** runs
  `quarantine` for scale: the whole-portfolio read stays out of the window.

A dispatched verb runs the *same* skill text in a spawned context — same
voice, same instructions. It stays alive for answers: questions relay through
the Steward to the same living instance, never a re-dispatch. When it
finishes, it writes its artifact first and returns the **handback packet** —
`artifact-path`, classifier verdicts, gold nuggets, open questions, tensions —
and nothing else. The transcript of any conversation is never duplicated into
the record: the artifact carries the fidelity.

## The writer's discipline

- **Artifacts carry the work,** in the performing voice, verbatim where it
  matters. When a verb involved conversation, its substance is folded into
  the artifact — the conversation itself is never transcribed into state.
- **State carries the session,** written by the Steward at the close as a
  **delta** (ADR 0028): what this session established, decided, and coined;
  the **live** tensions and open questions in full; and an honest
  current-state declaration. Prior snapshots are never edited; history lives
  in the chain and in git, not re-copied into every file.
- **Record frontmatter is state.** `idea.md`'s `status:`, `state-head:`,
  `relates:`, and `appetite:` are written at the close. Verbs that change
  them (`relate`, `incubate`, `retire`, `graft`) *name* the edge, status,
  reason, or wake condition; the close writes it. For dispatched verbs this
  is a literal seam — the agent returns, the Steward writes.

## Three dimensions, never conflated

- **Verb** — what cognitive work happens.
- **Lens** — from what angle (`system/LENSES.md`). Optional, additive; it
  modifies a verb rather than performing work.
- **Shape** — how the result is rendered for a reader (`system/TYPES.md`).
  Chosen by the operator, never by the verb.

The verb determines the artifact's *type*, which composition requires. It
never determines the *shape*. That separation is what keeps the **no
output-type siloing** non-goal true under a typed system.

## The boundary

Ceremony lives at the boundary, not on every utterance (ADR 0028). A
**described intent runs an inline verb** on an existing record — the Steward
names what it is doing and does it; the operator redirects if the guess was
wrong. T's explicit word is required for:

- dispatching a subagent (`fresh-eyes` or `quarantine`),
- creating a new record,
- anything leaving the estate — exports, commits, pushes,
- structural changes to the system itself.

Every verb remains directly invocable, and naming a verb is always selection.
Questions to the operator may be batched when genuinely parallel; sequential
ones should not be.

## The return path

A Seed's provenance stamp is a road in both directions (ADR 0029). Outward,
a Seed may leave under a **named contract** whose payload is the droppable
form for a specific recipient — `build-plan` renders Horizon, refusals and
Phases for an implementation loop, with a **garden** Phase 0 in front whose
done-condition is that the loop completes one tick on nothing
(`system/TYPES.md`). Inward, a Seed is **sealed** by the state whose
`outputs:` names it, and a Seed whose seal is behind its record's head is
**stale** — the record owes a reconciliation: re-seed (`supersedes:`), graft,
or decide-abandon (`reconciles:`). Exports are never edited; the pointer runs
forward. A field report from outside enters as
`capture` on the record the stamp names.

The loop itself never lives here. A target is forked under T's control,
pinned by tag, and cloned beside the payload — the estate stays
domain-general, and the integration stays non-critical.

## Checked, not declared

An invariant worth a law is worth a check (`scripts/validate-estate.mjs`):
skill frontmatter completeness and valid `run:` values; artifact `type:`,
`produced-by:`, and `inputs:`; `state-head:` pointers that resolve; state
snapshot chain fields; slip stamps; a Seed's **sealing** state against its
record's head (warn when stale and unreconciled); a `build-plan` payload's
declared files (error when missing). **A stated invariant the validator does not
check is guidance, not law** — no provision may claim a property is
"checkable" without naming what checks it. The garden's "one tick on
nothing" is checked by running the loop, not by the validator, and is
guidance until a target exposes a check.

## Intake precedes the record

A thought may enter the estate before it has a record. `jot` writes the
operator's words to a **slip** on the front step (`inbox/`), and stops: no
record, no artifact, no state. A slip is a boundary input made durable
(`system/TYPES.md`) — `Text` written down, not transformed; it has no
lineage, no classifiers, and no voice in it but the operator's.

The exemption is narrow on purpose: **the moment a slip is read *for*
something — to make a Spark, to judge where it belongs — that is a verb.**
The Spark made from a slip is `capture` in The Gardener's voice, written from
the slip verbatim. The ceremony is deferred, never skipped; slips are stamped
when processed, never deleted.

## Where the law lives

This file is the single source of truth. Inline verbs receive it through the
session — `AGENTS.md` points here and loads at start. The dispatched skills
(`challenge`, `review`, `compare`, `research`, `survey`) read this file
directly, because a spawned context never sees `AGENTS.md`. Facts about
individual verbs live in their skills' frontmatter and nowhere else by hand;
`system/registry.md` is generated from them.
