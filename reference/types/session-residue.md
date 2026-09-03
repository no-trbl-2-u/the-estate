---
type: Artifact Type
title: "SessionResidue"
description: "What a session revealed about the estate's own functioning, observed while doing something else."
tags: [type]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
sources:
  - id: types
    resource: ../../system/TYPES.md
    title: "The Type System"
  - id: adr
    resource: ../../docs/adr/0026-session-residue-as-a-type.md
    title: "ADR 0026: Session residue as a type"
---

# SessionResidue

Some sessions produce their most valuable output as a **side effect**. A build
stretch, a deploy, a first full arc through the verbs: the record advances,
and separately the session reveals how the estate is actually behaving — a
rule improvised because none existed, a verb that has never run, a seam
carrying load nobody assigned it.

Three properties, each a way the pattern could quietly degrade:

1. **Filed where the observations belong** — normally idea 0001, the estate's
   own record — *not* the record that happened to be open. A residue is not
   about that idea.
2. **Self-criticism is the payload.** A residue reporting only what worked has
   failed. The value is in what was improvised, skipped, or never run.
   `challenge` on a residue is the natural next step,
   and has already happened once.
3. **Produced by `capture`**, performed by
   **The Gardener** — the voice that receives what
   arrives. Fidelity over polish, as always.

## Boundaries

Not a [Spark](./spark.md): a Spark is a raw thought minimally processed, and a
residue is a structured inventory of six to nine things that went sideways.
Not [Findings](./findings.md): nothing outside the walls was consulted. Not an
[Appraisal](./appraisal.md): it judges no artifact.

## Why the handback packet does not replace it

A handback packet ([the law](../../system/LAW.md)) reports on the **verb's own work**,
from inside a dispatch. A residue reports on the **machinery**, from outside
any one verb — and the sessions that generate the richest residue are exactly
those where **no verb ran**. The two observe different things and coexist.
