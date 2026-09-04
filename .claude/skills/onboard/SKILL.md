---
name: onboard
description: Bring a mature outside project into the estate as a project with no ideas yet. Writes the project shell and parks supplied material verbatim as slips on the project's own inbox/ - no artifacts, no records, no verbs run. A Steward clerical duty, not a bound verb; the funnel is deferred, never skipped.
verb: onboard
signature: "(Text, [Material]) → (Project, [Slip])"
voice: "The Steward"
run: inline
---

# onboard — `(Text, [Material]) → (Project, [Slip])`

Take the project in. Park the material. Stop.

An outside project — a v6, a running codebase, a folder of PRDs — has no
door into the funnel that does not lie about it: `capture` would type it a
raw Spark, and admitting it "at Horizon-shape" would mint an artifact whose
producing verb never ran. `onboard` refuses both (ADR 0034). It builds the
**container** and lands the **material**, whole and unedited, where the
ordinary verbs can reach it. The first record still starts with `capture`;
what changes is that every verb after it is transcription-priced, because
the answers are already on the front step.

## What you ask

Only what the filesystem cannot say, and only T can (`templates/project.md`):

- **Title**, and the **Origin words verbatim** — where this project came
  from and what state it arrived in. Never edited afterward.
- **Appetite** (0–3, hand-set heat; displayed, consumed by no metric —
  ADR 0033 defers scoring).
- **`target:`** — *"include the Nexus worker loop?"* — the once-per-project
  answer to the Sower's question (ADR 0033). `nexus | none`.
- **Standing refusals**, if T has them. An empty Refusals section is honest;
  an invented one is not.

Batch the questions; this is one exchange, not an interview.

## What you do

1. **Allocate the next project id** — max across `projects/` plus one — and
   create `projects/NNNN-slug/` from `templates/project.md`, Origin verbatim.
2. **Park each supplied piece** as one slip in
   `projects/NNNN-slug/inbox/YYYYMMDD-HHMM-slug.md` — the material in the
   body, **verbatim**, with the slip frontmatter plus its source:

   ```yaml
   ---
   jotted: <ISO-8601 timestamp>
   status: pending
   became: ""
   source: ""      # where this came from: a path, a URL, "pasted", "spoken"
   ---
   ```

   The slug is a few words lifted from the material itself, not a
   classification of it.
3. **Regenerate the views**: `node scripts/generate-project-index.mjs`
   (the index's Front step section is how the material stays visible) and
   `node scripts/validate-estate.mjs` to confirm the estate is still green.
4. **Confirm, and name the road in one breath**: the project exists with no
   ideas yet; N slips wait on its front step; when T opens the first record,
   `capture` or `research` consumes them — supplied documents are sources,
   and `Findings` is their type (ADR 0018). Then stop.

## What you do not do

**Zero interpretation.** Do not summarize, tidy, excerpt, reorder, or
"clean up" the material. Fidelity is the requirement — jot's discipline
(ADR 0023), with more to lose.

**Zero records, zero artifacts, zero verbs.** A project with no ideas yet is
the deliverable, not a defect. Creating the first record is a boundary and a
later session's business; running `research` over the slips is a commission
T gives, not one you take.

**Zero automation.** Park what T hands you. Do not walk the codebase, fetch
URLs, or inventory the repository into slips — a richer ingest that *reads*
the project is `research`, once a record exists to file Findings on
(ADR 0034).

## Performed by the Steward — clerical, not bound

Like `jot`, this looks like a verb and is not (ADR 0023, ADR 0034): it
produces a container and boundary inputs, no artifact, so the hard-binding
law does not reach it and nothing of any office's voice belongs in the
material. The moment a slip is read *for* something, that is a verb, and it
runs as itself in its own voice.
