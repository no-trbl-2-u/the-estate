---
type: Reference
title: "Why OKF Exists, and Where It Stops"
description: "The Open Knowledge Format's stated purpose, intended artifacts, and intended consumers, summarized from Google Cloud's announcement — and the scope boundary the estate derives from it."
resource: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
tags: [okf, rationale, scope]
generated: { by: claude-code/2026-08-27, at: 2026-08-27T00:00:00Z }
sources:
  - id: announcement
    resource: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
    title: "How the Open Knowledge Format can improve data sharing, Google Cloud blog"
  - id: spec
    resource: ./okf-spec.md
    title: "Open Knowledge Format v0.2 (vendored)"
  - id: adr0019
    resource: ../docs/adr/0019-claude-md-imports-agents-md.md
    title: "ADR 0019 — memory files carry no OKF frontmatter"
---

# Why OKF Exists, and Where It Stops

The [vendored spec](okf-spec.md) says *what* OKF is. This concept records
*what it is for* — and, for the estate's purposes, **where it stops**.
Summarized from Google Cloud's announcement.[^1]

## What it is for

OKF formalizes the *LLM-wiki pattern* into a portable, interoperable
format: a vendor-neutral, agent- and human-friendly standard for the
metadata, context, and curated knowledge that AI systems need. Three
properties are load-bearing.

* **No infrastructure.** Markdown files. No SDK, no runtime, no schema
  registry, no central authority.
* **Portable and interoperable.** Readable by humans, parseable by
  agents. Knowledge produced by one system is consumable by any
  compatible tool without translation — *producer/consumer independence*.
* **Version-control friendly.** It lives alongside code, in git.

## What it represents: concepts

An OKF bundle is a directory of markdown files, each describing a
**concept**. The announcement's examples: tables and datasets, metrics
and KPIs, playbooks and runbooks, APIs, and any internal knowledge
domain.

```
sales/
├── index.md
├── datasets/
│   ├── index.md
│   └── orders_db.md
├── tables/
│   ├── index.md
│   ├── orders.md
│   └── customers.md
└── metrics/
    ├── index.md
    └── weekly_active_users.md
```

Each document is YAML frontmatter (structured, queryable — `type`
required, alongside `title`, `description`, `resource`, `tags`) plus a
markdown body (flexible, human-readable). Documents cross-link with
ordinary markdown links; **file paths form each concept's identity**, and
the links form a graph.

## Who consumes it

AI agents and foundation models needing context; metadata catalogs and
data-governance tools; search tools indexing knowledge; visualizers and
knowledge-management platforms; and humans reading documentation.

Every one of those consumers **browses the bundle** — arriving at a
concept by path, by link, or by index. That is the fact the boundary
below turns on.

## Where it stops — the estate's reading

This section is the estate's inference, not the announcement's claim.

If a document is not a concept, has no bundle, and is reached by none of
those consumers, OKF's frontmatter buys it nothing. The test is **how the
document is read**:

| How it is read | Example here | Frontmatter |
|---|---|---|
| Opened, linked, catalogued | everything in `reference/` | **Yes** — it is what makes the concept queryable |
| Injected verbatim into a context window | `CLAUDE.md`, `AGENTS.md` | **No** — nothing catalogues it; the metadata is pure cost |
| Consumed by the estate's own machinery | `idea.md`, `state/`, `artifacts/` | Its own schema ([record model](record-model.md)) |
| Generating other files | `templates/` | No — stamping a form corrupts what it produces |

[ADR 0019](../docs/adr/0019-claude-md-imports-agents-md.md) applies the
first two rows and amends
[ADR 0017](../docs/adr/0017-okf-documentation.md) decision 3
accordingly. The last two rows were already excluded by ADR 0017
decision 4.

## What this concept does not settle

* **The announcement is not the spec.** It lists `timestamp` among the
  frontmatter fields; the [vendored v0.2 spec](okf-spec.md) this bundle
  conforms to uses the actor convention (`generated:` / `verified:`) and
  `stale_after:`. **Where they differ, the vendored spec governs**, and
  where the vendored spec and `system/` differ, `system/` wins
  ([ADR 0017](../docs/adr/0017-okf-documentation.md) decision 2).
* **No `stale_after:` is set.** This summary tracks OKF v0.2, and the
  format will move — but by no schedule anyone here can honestly
  estimate, and the estate sets that field only when the shelf life is
  estimable ([ADR 0018](../docs/adr/0018-findings-speak-okf.md)). Treat
  it as stale the moment the vendored spec is revised.
* **Whether the record templates migrate to OKF fields** remains
  ADR 0017's open decision-5 question. The "is this a concept in a
  bundle?" test above bears on it, but does not answer it: that is a
  schema change, and T's to make.

[^1]: [How the Open Knowledge Format can improve data sharing](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing), Google Cloud blog. Summarized, not mirrored — unlike [okf-spec.md](okf-spec.md), which is vendored verbatim under Apache-2.0.
