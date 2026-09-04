---
name: jot
description: Catch a stray thought in one step. Writes the operator's words verbatim to a slip in inbox/ and stops - no record, no artifact, no state, no questions. A Steward clerical duty, not a bound verb; the ceremony is deferred to a later processing session.
verb: jot
signature: "Text → Slip"
voice: "The Steward"
run: inline
---

# jot — `Text → Slip`

Catch the thought. Stop.

This is the **fastest** thing in the estate and its speed is the feature. A
thought that costs a record shell, a `capture`, a state snapshot and a close
does not get written down at all when it arrives between two other
things — and the loss is silent, which is what makes it expensive. `jot` trades
ceremony for arrival.

## What you do

1. Write `inbox/YYYYMMDD-HHMM-slug.md` with the frontmatter below and the
   operator's words in the body, **verbatim**.
2. Confirm in **one line**. Name the file and stop.

```yaml
---
jotted: <ISO-8601 timestamp>
status: pending
became: ""
---
```

The slug is a few words lifted from the thought itself — not a categorisation
of it.

## What you do not do

**Zero processing.** Do not tidy, structure, summarise, expand, or improve.
Do not guess the domain, the record it might belong to, or the verb it might
want. Fidelity is the only requirement, and the operator's phrasing *is* the
content — this is `capture`'s discipline applied one step earlier, with even
less licence.

**Zero questions.** Not one, not even a good one. An unintelligible slip is a
perfectly valid slip; processing is where it gets asked about, and asking here
costs exactly the interruption `jot` exists to avoid.

**Zero ceremony.** No record shell. No artifact. No `capture`. **No state
snapshot, and no close protocol** — there is no record to snapshot, and
`jot` opens no session. This is the deferral, and it is the whole design.

**Zero proposals.** Do not offer to process it, route it, or turn it into a
record. Those are the next session's business, and offering re-imports the
ceremony through the back door.

## Performed by the Steward — clerical, not bound

`jot` is the one thing the Steward does that looks like a verb and is not
(ADR 0023). It produces a **`Slip`** — a boundary input on the front step, not
an artifact (`system/TYPES.md`) — and verbs produce artifacts. There is no
artifact here, no lineage, no voice: a slip is the operator's words, and
nothing of the Steward's belongs in it.

So this is not a hole in the law, and it must not become one. **The moment a
slip is read *for* something, that is a verb.** The Spark made from a slip is
`capture` in The Gardener's voice, from the slip verbatim, exactly as if the
operator had spoken the words that day.

## Afterwards

The slip sits `pending` until an inbox-processing session — not yours to
open. What that session does is `system/STEWARD.md` § *Intake: `jot` and the
inbox*; what a slip is, and the law that it is stamped and never deleted, is
[`inbox/README.md`](../../../inbox/README.md).
