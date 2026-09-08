---
id: idea-0002/artifacts/0013-phase-2-stack-and-skeleton.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0008-rivers-and-lakes-web-edition-trajectory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [distill]
summary: "Phase 2, what the second leg keeps after the garden took the stack, the skeleton and the pipeline: the code discipline as checks (no classes, every function documented lowest-up, immutability), the data build wired into verify, the module layout for engine, data, UI and share, and the removal of the garden's trivial slice. No human-attention steps. Done when a fixture-backed empty game screen builds, tests, deploys and passes the discipline lints."
---

# Phase 2 — Stack and skeleton, the remainder

The Surveyor. The Trajectory's second leg was written before the target
was known. With `target: nexus`, the garden (Phase 0) takes the stack
decision, the repository, the pipeline and the unlisted deploy. What
the leg still owes is the discipline T holds and the shape of the
source tree the later Phases fill.

**Outcome.** A repository whose structure and lints make T's standing
constraints mechanical, with the data build in the gate.

**Waits on.** Phase 0; Phase 1 for the data build.

**When.** September, immediately after the garden.

## Steps

2.1 **Discipline as checks.** Lint rules in `verify`: no `class`
declarations; no mutation of function parameters or module state
(readonly types, frozen fixtures in tests); every exported function
carries a documentation comment naming what it takes, what it returns,
and which rule or entry it implements (`R49`, `37.second`). A file
missing a comment fails the gate. The comment is the documentation
"from the lowest abstraction upward"; a generated index of them is the
documentation at the top.

2.2 **Module layout.** Four roots and their contracts, each a folder of
small files: `data/` (schema, converter, build step; Phase 1), `engine/`
(pure functions over the sheet; Phases 3 and 4), `ui/` (the RPG Windows
frame and the beats; Phase 5), `share/` (payload projection and
renderer; Phase 7). `ui/` imports `engine/`; `engine/` imports nothing
but `data/` types. A dependency lint enforces the direction.

2.3 **The data build in the gate.** Phase 1's YAML-to-JSON step and the
schema validation run as the first leg of `verify`; the site imports the
built JSON, never the YAML.

2.4 **The empty game screen.** Replace the garden's trivial slice with
the RPG Windows frame rendering the fixture: the tab row with six tabs
at zero counts, the HUD line reading *no Xiake*, an empty dialogue log,
a command window whose only item is *Begin*. No beat runs yet.

2.5 **Unlisted by construction.** `robots` disallow, `noindex` header,
no sitemap, no link from anywhere, asserted by an e2e check against the
deployed URL.

## Done when

`verify` is green with the discipline lints on; the empty game screen
is deployed at the unlisted URL; the garden's placeholder is gone.

## Cost

One loop tick.

## Left open inside this Phase

- Nothing. If the stack Decision chose no e2e runner, 2.5 becomes a
  unit check over the built headers.
