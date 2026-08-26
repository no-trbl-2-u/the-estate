---
type: Reference
title: "Lenses"
description: "The six optional, additive angles that bias a verb without changing its operation."
tags: [lenses]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Lenses

A lens biases the **angle** of a verb without changing its operation. Mode,
lens, and output shape are three independent dimensions and must not be
conflated: the verb decides what cognitive work happens, the lens decides from
what angle, the shape decides how the result is rendered.

Lenses are **optional and additive**. A session may apply zero, one, or several.
Passed to the agent in the handoff packet.

| Lens | Bias |
|---|---|
| `technical` | Feasibility, mechanism, what actually has to be built or proven |
| `commercial` | Who pays, what it costs, why it survives contact with a market |
| `user` | The person on the other end — their situation, not their demographics |
| `adversarial` | How it fails, who attacks it, what breaks under load |
| `long-term` | Second-order effects, what this looks like after the novelty burns off |
| `ethical` | Who bears the downside, what it would be wrong to build |

## Why six and not sixteen

`VISION.md` originally listed sixteen. The **no giant taxonomy** non-goal wins:
a lens only earns a place if it changes the output enough to be worth naming.
These six span the axes that actually pull against each other. Adding one is a
row here plus nothing else — lenses need no agent and no binding, because they
modify a verb rather than performing work.
