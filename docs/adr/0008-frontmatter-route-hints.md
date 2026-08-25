# ADR 0008: Every artifact carries frontmatter with route hints

**Status:** accepted · **Date:** 2026-08-25 · **Source:** T's note, interview Q7 turn

## Context
T: "Each artifact should have its own frontmatter to help the agent determine
which artifacts from the current idea are relevant to pull into the context...
Inside of that frontmatter could (should?) contain
`potential-next-steps: [SKILL-A, ...]`."

## Decision
Every artifact uses `templates/artifact.md` frontmatter: `type`,
`produced-by`, `inputs` (the derived-lineage chain), `classifiers`, a one-line
`summary` for cheap context selection, and `potential-next-steps` naming the
skills that could come next. The intelligence lives in the data: the Steward
derives routes largely by **following edges the artifacts themselves declare**,
not by reasoning from scratch.

## Consequences
- Skills are responsible for writing honest hints on their outputs; a skill
  that omits them degrades routing, not correctness.
- T referenced an "OpenAI OKF" documentation format as the model for this
  frontmatter; that reference could not be confidently identified and is an
  **open question for T** — the current format is a placeholder shape, cheap
  to migrate since frontmatter is data.
