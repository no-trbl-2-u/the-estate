---
type: Decision Record
title: "ADR 0029"
description: "The build-plan contract: a Seed may leave as a loop-ready payload with a garden phase in front; a Seed behind its record owes a reconciliation; the target loop is forked, pinned, and never vendored."
tags: [adr, decision]
generated: { by: claude-code/2026-09-01, at: 2026-09-01T18:00:00Z }
---

# ADR 0029: The `build-plan` contract and Seed reconciliation

**Status:** accepted · **Date:** 2026-09-01 · **Source:** T's direction of
2026-09-01 ("do all of it"), following the estate-ui Seed inspection

## Context

Two findings arrived in the same session.

**The estate-ui Seed is stale.** `exports/0004-estate-ui-seed.md` carries
`origin: idea-0004 @ state/0003`. The record's head is `state/0010`. Between
the two, the project was built — as a Vite/React SPA in `ui/`, deployed on
Cloudflare Workers, public at a custom domain — which is not the
zero-dependency single-file viewer the Seed specifies, and which violates one
of the Seed's own refusals (*"any hosted anything"*). The record's newest
Trajectory (`0015`) says so in its own voice and names "the Seed deviation"
as an owed decision. Nothing in the law noticed. A Seed's provenance stamp
was described from ADR 0002 onward as "the return address for any future
field report," and in a year of law nothing ever used the address.

**T wants the Seed to be more than a document.** The picture: the Seed, plus
its decomposition into phases, plus adoption of an implementation loop —
[nexus](https://github.com/daretodave/nexus), which T already runs on
Axiomancer — so that the thing leaving the estate can *ship itself*. And the
first phases should be **scaffolding**: stack, environment, test harness,
Seed-specific skills — "set up the garden so the march loop can just go."

The tension is domain-generality (`AGENTS.md`, `VISION.md`). Nexus needs a
deployable, testable software project: a `spec.md`, a hermetic verify gate,
a hosted target it can poll. A novel and a friend's business need none of
that. The estate must gain the seam without learning the stack.

Two seams already existed and were unused: ADR 0025's **nameable contracts**
("a vocabulary, not a closed enum") and its **payload directory** ("the
droppable form"). This ADR fills them rather than adding new machinery.

## Decisions

**1. The `build-plan` contract.** A Seed may declare `contract: build-plan`.
Its components are the `standard` five, plus **`[Phase]` is mandatory**
(the record has run `phase`), plus **a payload of a declared shape**, plus a
`target:` naming the loop the payload is rendered for. The first and only
target is `nexus`. The contract is the *only* place in the estate that knows
a target's file conventions; `templates/seed.md`, the `seed` verb, and the
`phase` verb stay domain-general and gain only the rule that a contract may
ask more of them. A record that does not name the contract is untouched.

**2. Phase 0 — the garden.** Under `build-plan`, `phase` always emits a
**Phase 0** ahead of the route, whose done-condition is fixed by the
contract: **the loop completes one tick on nothing** — a trivial slice is
shipped, verified, deployed and reported. For `nexus` that means the stack
is decided (in the estate via `decide` where decidable now; otherwise
carried as a `[HUMAN ATTENTION]` item), the environment manifest names every
variable and who supplies it (values are always human), the verify gate is
wired and green on an empty project, the deploy target answers, and the
Seed-specific skills are installed. The human-attention tag (ADR 0020)
survives into the plan unchanged: nexus parks tagged items in its own queue
for `/oversight`, and the estate's job is to make that pile **accurate**,
not to prevent it.

**3. The payload shape and its template.** A `build-plan` payload contains:

```
README.md                      how to drop it in, incl. the pinned clone of the target
spec.md                        the target's anchor: Horizon, refusals, acceptance, provenance
plan/steps/01_build_plan.md    Phase 0 + Phases 1..n, with status and human-attention tags
skills/seed-check.md           "does this change break a refusal / move toward the Horizon?"
skills/re-seed.md              "the plan has drifted — report back through origin:"
```

`templates/payload-build-plan/` holds the skeleton. The Sower fills it by
hand. **No generator is written until a payload has been assembled by hand
twice** — the estate's named failure mode is that building it is more fun
than using it, and a payload renderer is exactly the kind of thing that is
more fun to build.

**4. The target is forked and pinned, never vendored.** Nexus is forked to
`no-trbl-2-u/idea-Nexus` (forked 2026-09-01) so the estate depends on a copy T controls, and the
payload's `README.md` clones it **as a sibling at a pinned tag**. It is not
copied into this repository: a software-only toolkit inside a
domain-general repo would have to ship with every payload, and every
non-software Seed would carry it as dead weight. The fork exists so nexus
*can* be changed; no change is expected to start, since nexus already reads
`spec.md` and `plan/steps/`.

**5. A Seed behind its record owes a reconciliation.** When a Seed's
`origin:` state is behind its record's `state-head:`, the record owes one of
three moves, and `scripts/validate-estate.mjs` warns until one is recorded:

- **re-seed** — export again from the current state; the new Seed names
  the old in `supersedes:`. Exports are immutable, so the pointer is
  forward-only: the old Seed is never edited.
- **graft** — the deviation was a new idea; branch it (ADR 0024).
- **decide-abandon** — the road was left deliberately; a `Decision`
  artifact names the Seed in `reconciles:` and says why.

The warning silences on a later export with `supersedes:`, or an artifact
with `reconciles:`, naming the stale Seed. **The return path is now real:**
`skills/re-seed.md` in the payload tells the outside how to report drift,
and a report arrives as `capture` (`Text → Spark`) on the record, through
the provenance stamp — which is what the stamp was always for. Estate-ui is
the first record to owe this, and its answer is a re-seed under `build-plan`.

## Why: what this buys and what it costs

**Bought.** The Seed becomes a delivery instead of an essay: drop the
payload, clone the target, run one tick. The estate contributes the two
things an autonomous loop cannot make for itself — a Horizon with refusals
to check drift against, and phases that already know which steps need a
human. The garden phase moves the weekend of scaffolding *before* the
loop starts, where it is cheap, instead of inside it, where every missing
token stalls a tick. And the provenance stamp finally closes a loop: a Seed
can now be found stale, and the record can answer.

**Paid.** *A second Seed on estate-ui and starvu:* both records will show the
stale warning until reconciled, and re-seeding is real work; that is the
cost of the check being honest rather than the cost of the check. *Contract
weight:* `build-plan` asks more of a record (`phase` must have run) — but
only of records that name it. *Hand assembly:* the first payloads are
written by hand, which is slower than a script and is the point. *An
external dependency, pinned:* the target lives outside the estate, so a
payload's usefulness depends on a fork the estate does not contain — the
self-containment rule is kept by making the integration non-critical: the
Seed document and the plan are complete without nexus; nexus is what runs
them.

**Residual risk.** The garden's done-condition ("one tick on nothing") is
checked by running the loop, not by the validator — it is guidance until a
target exposes a check the estate can call. Named as such.

## Rejected alternatives

**A new decomposition prompt that consumes the Seed.** Rejected: `phase`
already decomposes, nexus's `ship-a-phase` already slices, and a third
decomposer would be the only one without the human-attention tag.

**Vendor nexus into the estate.** Rejected (decision 4): domain-generality
and payload weight. A fork under T's org gives ownership without residence.

**A `reconcile` verb.** Rejected: the three outcomes are `seed`, `graft`,
and `decide`, which exist. What was missing was the *trigger* (the
validator) and the *pointer* (`supersedes:` / `reconciles:`), not a verb.

**Edit the stale Seed with `superseded-by:`.** Rejected: exports are
immutable (`exports/README.md`). The pointer runs forward from the new
export, exactly as state snapshots do.

**Write the payload generator now.** Rejected: twice by hand first.

## Consequences

- `system/TYPES.md`: the `build-plan` contract, the garden phase, the
  `supersedes:` / `reconciles:` fields, and the reconciliation rule.
- `system/LAW.md`: a *return path* provision; the checked-invariants list
  gains the export checks.
- `.claude/skills/seed/SKILL.md`: the `build-plan` section and the
  reconciliation duty. `.claude/skills/phase/SKILL.md`: Phase 0.
- `templates/seed.md`: `target:` and `supersedes:` fields.
  `templates/payload-build-plan/` created.
- `scripts/validate-estate.mjs`: parses `exports/`, warns on a Seed behind
  its record, errors on a `build-plan` payload missing its declared files.
- `exports/README.md`, `system/FALSIFIERS.md`, `docs/GLOSSARY.md` updated.
- Owed on records, not structure: estate-ui and starvu each show the stale
  warning; estate-ui's reconciliation is the first `build-plan` export.
- ADR 0025 is **extended**, not superseded; ADR 0002's "return address" is
  finally given a mechanism.
