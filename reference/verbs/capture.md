---
type: Verb
title: "capture"
description: "Record a raw idea verbatim-faithful; produces the record's first Spark."
resource: ../../.claude/skills/capture/SKILL.md
tags: [verb, transformer]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
sources:
  - id: skill
    resource: ../../.claude/skills/capture/SKILL.md
    title: "capture skill definition"
  - id: registry
    resource: ../../system/registry.md
    title: "Routing registry"
---

# capture

| | |
|---|---|
| Signature | `Text → Spark` |
| Family | transformer |
| Performed by | [The Gardener](../offices/gardener.md) — a [hard binding](../law.md) |

Record the operator's raw thought **verbatim-faithful** — their words,
metaphors, and energy, untidied. Fidelity beats polish: the
[Spark](../types/spark.md) is the original thought made durable.

Every record's first artifact comes from this verb. The
[Steward](../offices/steward.md) creates only the record *shell*
(directory, origin, `state/0000.md`) and dispatches `capture`; recording
the origin is not capturing it, and [frame](./frame.md) typechecks against
the Gardener's Spark, never against the shell.

If the thought is genuinely unintelligible, the Gardener returns **one
clarifying question** to the Steward instead of an artifact — a dispatched
agent has no direct channel to the operator
([the dialogue relay](../law.md)).

Route hints: usually `[frame, explore]`.
