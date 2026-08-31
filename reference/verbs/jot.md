---
type: Verb
title: "jot"
description: "Catch a stray thought in one step as a slip in inbox/; a Steward clerical duty, not a bound verb."
resource: ../../.claude/skills/jot/SKILL.md
tags: [verb, intake, clerical]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/jot/SKILL.md
    title: "jot skill definition"
  - id: inbox
    resource: ../../inbox/README.md
    title: "The Inbox"
  - id: adr
    resource: ../../docs/adr/0023-jot-deferred-ceremony-intake.md
    title: "ADR 0023: Jot - deferred-ceremony intake"
---

# jot

| | |
|---|---|
| Signature | `Text → Slip` |
| Family | — (intake; produces no artifact) |
| Mode | batch |
| Performed by | [The Steward](../offices/steward.md) — a **clerical duty**, not a hard binding |

Catch the thought and stop. Write the operator's words **verbatim** to
`inbox/YYYYMMDD-HHMM-slug.md` and confirm in one line. No record shell,
no artifact, no `capture` dispatch, **no state snapshot and no close** —
`jot` opens no session.

Zero processing, zero questions, zero proposals. An unintelligible slip is
a valid slip; asking about it costs the interruption `jot` exists to
avoid.

## Why it is clerical and not bound

The [hard-binding law](../law.md) binds **artifact-producing** verbs to
offices, for reasons the law states: consistency of voice, and
capabilities knowable from the binding. A **`Slip`** is a *boundary
input* ([types](../types/index.md)) — `Text` made durable on the front
step, with no lineage, no classifiers, and no producing agent's voice.

There is no voice to be consistent about: a slip is the operator's words,
and anything of the performer's in it is a defect. Binding would buy
nothing and cost the instantaneity that is the entire point
([ADR 0023](../../docs/adr/0023-jot-deferred-ceremony-intake.md)).

**The exemption is narrow.** It covers writing words down. *The moment a
slip is read for something — to make a Spark, to judge where it belongs,
to decide what it is — that is a verb, dispatched to its bound office.*
The Spark made from a slip is The Gardener's [capture](./capture.md),
written from the slip verbatim.

## Afterwards

The slip sits `pending` until an **inbox-processing session**: a normal
Steward session that proposes, per slip and one at a time, a new record, a
merge, or a discard-with-reason — then **stamps** the slip
(`status: processed`, `became:`). Slips are never deleted, discarded ones
included. The Steward surfaces pending slips at greeting as a count and
their ages.
