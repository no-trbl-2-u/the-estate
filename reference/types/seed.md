---
type: Artifact Type
title: "Seed"
description: "The terminal export: horizon plus trajectory, thin on implementation, clean."
tags: [type]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: types
    resource: ../../system/TYPES.md
    title: "The Type System"
  - id: template
    resource: ../../templates/seed.md
    title: "Seed template"
---

# Seed

The point of the whole system. Under the default **`standard`** contract a
Seed typechecks only when **all five** components are present:

1. **Horizon** — the six-month vision, elaborated.
2. **Trajectory** — the rough path toward it.
3. **Next concrete move** — startable Monday for a project; the case to
   test first for a conjecture; the scene to write first for a premise.
4. **At least one refusal** — a named thing this will *not* become.
5. **Provenance stamp** — one line, `origin: idea-NNNN @ state/NNNN`; the
   only thing that travels backward.

Anything less is a [Brief](./brief.md). Seeds leave **clean** — no session
logs, no rejected framings, no baggage — and are sized for their
`audience:`. The wording is deliberately domain-neutral: a business, a
conjecture, and a narrative premise are served by the same contract.

# Nameable contracts

`standard` is domain-neutral in wording but not in **structure**: it
assumes the recipient wants a vision and a path. A record may name a
domain contract in `contract:` — a vocabulary, not a closed enum, as
[shapes](../shapes.md) already are.

Three things are **contract-invariant**: what the recipient can *do* next,
at least one **refusal**, and the **provenance stamp**. They are what make
a Seed a Seed rather than a document, and a named contract that drops one
has left the type.

# The payload

A Seed may **carry the droppable result**, not only describe it. The
`payload:` field holds the relative path to a sibling directory —
`exports/NNNN-slug-payload/`, same record id and slug as the document —
holding the thing pasted into a repo, handed to an agent, or opened by a
partner.

Optional, and its absence is a **classifier, never a gate**: a Seed with
`payload: absent` exports fine and says so on the tin, naming in one line
what the record would need to build one — which is routing information.
A **broken** payload is a recorded [falsifier](../falsifiers.md); an
absent one is not, because absence is honest.

* Produced by `seed`
* Leaves the estate via `exports/`; template at `templates/seed.md`
* Classifiers travel with the export: `horizon` · `trajectory` ·
  `challenged` · `payload`
