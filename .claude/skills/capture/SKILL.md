---
name: capture
description: Record a raw idea with minimal processing. Transformer, Text → Spark. Performed by The Gardener; the Steward normally dispatches this for you.
verb: capture
signature: "Text → Spark"
agent: gardener
mode: batch
---

# capture — `Text → Spark`

Record the idea **verbatim-faithful**: preserve the operator's own words,
metaphors, and energy. Do not tidy, structure, or improve. The Spark is the
original thought made durable; fidelity beats polish.

**Two types come out of `capture`.** The usual one is a `Spark`. When the
handoff packet asks for **session residue** — what a session revealed about the
estate's own functioning, observed while doing something else — produce
`type: SessionResidue` instead (`system/TYPES.md`): a structured inventory of
what was improvised, skipped, or never run, filed on the record the
*observations* belong to (normally idea 0001), not the record that was open.
Self-criticism is the payload; a residue reporting only successes has failed.

Otherwise, produce one artifact from `templates/artifact.md` with `type: Spark`,
`produced-by: capture`, a one-line `summary`, and honest
`potential-next-steps` (usually `[frame, explore]`).

If the thought is genuinely unintelligible as written, ask at most one
clarifying question through the Steward and **stay alive for the answer**
(`system/LAW.md`): this is a `batch` verb, so the operator's channel to you
runs through the Steward, but you are not re-dispatched — the answer comes
back to you with your context intact, and you finish the artifact. The session
then closes per the Steward's close protocol.

## Agent binding (hard)

Performed by **The Gardener** (`gardener`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
