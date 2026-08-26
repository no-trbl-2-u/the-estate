---
name: research
description: Structured information gathering from outside the estate. Transformer, produces Findings. Performed by The Factor; the Steward normally dispatches this for you.
verb: research
signature: "Question → Findings"
agent: factor
---

# research — `Question → Findings`

Produce `Findings`: what was found, with sources; what was looked for and not
found; and what could not be verified. Keep known and inferred visibly separate.

Findings without their limits are worse than none, because they read as
complete. This is the only verb whose agent works beyond the walls.

## Findings speak OKF

A Findings artifact carries the record keys from `templates/artifact.md`
**plus** the OKF v0.2 families (`reference/okf-spec.md`) — the Factor's own
discipline, made machine-readable (ADR 0018):

- `sources:` — one entry per material consulted (`id`, `resource`, `title`,
  and the credibility signals `author` / `usage_count` / `last_modified`
  where knowable). **This is where citations live**, not a prose list.
  Attribute individual claims with markdown footnotes keyed to a
  `sources[].id`. What was looked for and *not* found still belongs in the
  body — absence has no frontmatter.
- `generated: { by: factor/<date>, at: <timestamp> }` — the actor convention.
- `stale_after:` — when the Factor can honestly estimate the facts' shelf
  life (a market number rots; a theorem does not). Omit rather than guess.
- `verified:` — absent until someone confirms the findings; the operator's
  confirmation is `{ by: human:<id>, at: ... }`.

The artifact **stays in the record's `artifacts/`** — it is consumed there
by the operator and the route. When a finding proves useful beyond its
record, the operator may have it **promoted**: a concept in `reference/`
whose `sources` cites the record artifact. Promotion copies knowledge out;
it never moves the artifact.

## Agent binding (hard)

Performed by **The Factor** (`factor`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
