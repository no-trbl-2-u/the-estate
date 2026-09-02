---
name: re-seed
description: The build has drifted from the Seed — a refusal was crossed, the Horizon changed shape, or the plan's phases no longer describe the work. Write the field report that goes back to the estate through the provenance stamp.
---

# re-seed

The Seed came from somewhere: the `origin:` line in `spec.md` names an idea
record and the exact state it left from. That line is a return address. When
the work here has stopped matching the Seed, this skill writes the report
that goes back — so the record can re-seed, branch, or record that the road
was abandoned on purpose.

This skill does **not** change the Seed, `spec.md`, or the plan. The estate
never edits an export; it answers with a new one.

## When

- `seed-check` found a refusal that had to be crossed.
- A phase was completed in a way the plan did not describe, and the next
  phases no longer fit.
- The Horizon's falsifier fired, or something showed it was aimed wrong.
- The operator says the project has become a different project.

## Do

Write `RE-SEED.md` at the repository root (append if it exists, dated):

```
# Field report — {date}

origin: idea-NNNN @ state/NNNN            ← copy from spec.md, unchanged

## What drifted
{One paragraph. Which refusal, which phase, which part of the Horizon.}

## What was built instead
{Plainly. Stack, shape, what runs where. No justification yet.}

## Why
{The reason the drift happened — a constraint the Seed did not know,
 a refusal that was wrong, a better road found. Honest, not defensive.}

## What the record should do
{One of: re-seed from the current state · graft this as a new idea ·
 record the road as abandoned. Your recommendation and one line why.}
```

Then tell the operator the report exists and stop. The operator carries it
to the estate, where it enters as a capture on the record the stamp names.

## Do not

- Do not rewrite `spec.md` to match what was built. That is how a stale Seed
  becomes an invisible one.
- Do not wait until the drift is large. A report at the first crossed
  refusal costs a paragraph; a report after six phases costs a re-plan.
