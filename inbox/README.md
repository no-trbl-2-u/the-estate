---
type: Guide
title: "The Inbox"
description: "Where a stray thought lands before the ceremony: what a slip is, how it is named, and the law that slips are stamped, never deleted."
tags: [inbox, intake]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
---

# The Inbox

The estate's front step. A thought lands here in under a minute, and the
ceremony that turns it into a record happens later, in its own session.

This root inbox is the home of the **unscoped** slip — the stray thought,
pre-project by nature. A project has a front step of its own:
`projects/NNNN-slug/inbox/`, where `/onboard` parks supplied material as
slips under the same law, plus a `source:` field naming where each piece
came from (ADR 0034). Everything below applies to both.

This exists because the ceremony is real and the ceremony is the problem. A new
idea normally costs a record shell, a `capture`, a state snapshot,
and a close — correct, and far too much to spend on a thought that arrived
between two other things. The alternative to a slip is not a tidier record; it
is **the thought never entering the estate at all**. Deferred ceremony, not
deleted ceremony: nothing here is cheapened, it is postponed.

## What a slip is

A **slip** is the operator's words, written down, and nothing else.

It is a **boundary input**, not an artifact (`system/TYPES.md`). It has no
record, no lineage, no classifiers, no `inputs:` chain, and it is not the
product of any verb. It is `Text` that has been made durable while it waits for
a verb to consume it. This is the whole reason `jot` can be clerical (ADR
0023): the writer seam governs artifacts, and a slip is not one.

## Naming

```
inbox/YYYYMMDD-HHMM-slug.md
```

The timestamp is the identity — slips are ordered by arrival and nothing else.
The slug is a few words lifted from the thought itself, not a classification of
it; a slip that has been categorised on the way in has already had the
processing done to it that `jot` exists to defer.

## Frontmatter

```yaml
---
jotted: 2026-08-31T14:22:00Z   # when it arrived
status: pending                # pending | processed
became: ""                     # idea-NNNN | idea-NNNN (merged) | discarded: <reason>
---
```

`became:` is empty while `status: pending`. On processing it names exactly what
happened, including when nothing did — `discarded: duplicate of idea-0003`
is a complete and honest value.

## Slips are stamped, never deleted

Processing a slip **stamps it**: `status: processed`, `became:` filled in. It
does not remove the file, and neither does discarding it. This is the estate's
preservation law applied at the boundary (`AGENTS.md`, *Lineage and clean
state*): retiring preserves the record whole, and a slip the operator decided
against is a record of a decision.

The inbox therefore grows without bound, and that is correct. It is an arrival
log, not a queue that must be drained to zero.

## Processing

Not a verb — a normal Steward session over the shelf of pending slips. The
Steward surfaces the count and ages at greeting; per slip it proposes one of:

- **A new record** — shell plus an inline `capture` in The Gardener's voice,
  with the Spark written **from the slip verbatim**. The slip's own words are
  the boundary input, which is what makes the deferral lossless.
- **A merge** into an existing record.
- **A discard, with a reason.**

New records are a boundary (ADR 0028): the Steward proposes per slip and
waits. A batch of slips is a batch of proposals.
