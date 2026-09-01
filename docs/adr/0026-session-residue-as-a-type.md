---
type: Decision Record
title: "ADR 0026"
description: "SessionResidue becomes a capture-produced artifact type for what a session reveals about the estate's own functioning; the handback packet does not replace it."
tags: [adr, decision]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
verified: { by: human:T, at: 2026-08-31T00:00:00Z }
---

# ADR 0026: Session residue as a type

**Status:** accepted · **Date:** 2026-08-31 · **Source:** T's ruling, this session; `load-bearing-updates-plan.md` Phase 6 step 2

## Context

Seven `*-residue.md` artifacts had accumulated across ideas 0001 and 0004 with
no governing law — four on the estate's own record, three from Estate View's
build, deploy, and link-preview stretches. Every one was filed as `type: Spark`,
`produced-by: capture`.

The pattern is genuinely valuable and the filing was genuinely wrong. A `Spark`
is *"a raw capture, minimal processing, maximal fidelity to the original
thought."* A residue is a structured inventory of six to nine things that went
sideways during a working session — a rule improvised because none existed, a
verb that has never run, a seam carrying load nobody assigned it. Calling that a
raw thought strains the definition past usefulness, and once a type means two
unlike things it stops doing the work types exist to do.

Nor does it fit anywhere else. It is not `Findings` — nothing outside the walls
was consulted. It is not an `Appraisal` — it judges no artifact. It belongs to
no record's subject matter, which is why these artifacts are filed on the record
the *observations* concern (idea 0001, the estate's own) rather than the record
that happened to be open.

The plan raised the honest alternative: Phase 1's handback packet also captures
open questions and tensions, so perhaps residue was a workaround for the missing
audience seam and could now be folded.

## Decision

**`SessionResidue` becomes an artifact type in `system/TYPES.md`, produced by
`capture`.** T's ruling.

Its three properties are stated with the type, because each is a way the pattern
could quietly degrade:

1. **Filed where the observations belong** — normally idea 0001 — not on the
   record the session was nominally about.
2. **Self-criticism is the payload.** A residue reporting only what worked has
   failed. The value is concentrated in what was improvised, what was skipped,
   and what has never run.
3. **Produced by `capture`, performed by The Gardener** — the office that
   receives what arrives. No new verb, and the roster stays at 13.

## Why not fold it into the handback packet

This was the live alternative and it fails on a fact, not a preference.

A **handback packet reports on the verb's own work, from inside a dispatch.** A
**residue reports on the machinery, from outside any one verb.** They observe
different objects, and the difference is not academic: **the sessions that
generated the richest residue are the ones where no verb ran at all.** Idea
0004's three residues came from a build, a deploy, and a debugging investigation
— there was no dispatch, so there could have been no packet. Folding would have
declared a replacement that could not have caught three of the seven cases it
was replacing.

The strongest residue item on record makes the point precisely: *"a build
session whose central work has no verb the estate knows."* A mechanism that only
fires when a verb runs is structurally unable to notice that.

## Rejected alternatives

**Bless it, but bind it to its own verb.** Honest about residue not being a raw
thought, and rejected on scope: this round locked the roster at 13 and added
exactly one verb (`graft`). `capture`'s discipline — fidelity over polish,
record what happened rather than a flattering reading — is the right discipline
for residue, and the type carries what is specific to it.

**Leave it unruled.** Rejected: seven artifacts filed under a type that does not
describe them is drift, and the estate's whole claim is that the record stays
honest.

## Consequences

- `system/TYPES.md` gains the `SessionResidue` row and a section stating the
  three properties, the type's boundaries against `Spark` and `Findings`, and
  why the handback packet does not replace it.
- `.claude/skills/capture/SKILL.md` and `.claude/agents/gardener.md` state that
  `capture` produces two types, and when each applies.
- `templates/artifact.md` lists the type.
- **The existing seven are not retyped.** Artifacts are immutable
  (`system/TYPES.md`) — that law does not bend for a tidiness improvement, and
  bending it here would be the most expensive possible way to make the record
  neat. They remain `type: Spark`, correctly readable as residue from their
  filenames and summaries. The type applies from the next residue forward, on
  the same principle `exports/README.md` applies to the two existing exports
  (ADR 0025).
- The artifact type count moves from ten to eleven. The verb count is unchanged.
- No verb ran. Steward structural session.
