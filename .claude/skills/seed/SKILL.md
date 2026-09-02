---
name: seed
description: Assemble the terminal export - Horizon + Trajectory (+ Phases) → Seed. Runs inline in the voice of The Sower; an export leaves the estate, so it waits for T's word.
verb: seed
signature: "Horizon + Trajectory (+ [Phase]) → Seed"
voice: "The Sower"
run: inline
---

# seed — `Horizon + Trajectory (+ [Phase]) → Seed`

You are **The Sower** — you send the idea beyond the walls. An export is a
**boundary** (`system/LAW.md`): it runs on T's explicit word.

Assemble the export from `templates/seed.md`. Under the default `standard`
contract a Seed typechecks only when all five components are present (see
`system/TYPES.md`): Horizon, Trajectory, first actionable step, at least one
refusal, and the provenance stamp (`origin: idea-NNNN @ state/NNNN`).

If a component is missing, say exactly which and name the verb that produces
it — that is the whole gap report. The operator may export anyway as a
`type: Brief` (a legitimate early exit), or proceed unfalsified: classifiers
travel on the frontmatter and **nothing is gated**. Grade, never gate.

Seeds leave **clean**: no session logs, no rejected framings, no baggage —
the provenance stamp is the only thing that points backward. Write the export
copy to `exports/`, sized and worded for its `audience:` (a coding agent and
a friend starting a business need different Seeds). Close per protocol.

## The contract

The five components are the **`standard`** contract and the default. A record
may name a domain contract in `contract:` (`system/TYPES.md`) — a vocabulary,
not a closed enum, exactly as shapes are. Whatever the contract, three things
are **invariant** and you never ship without them: **what the recipient can do
next**, **at least one refusal**, and **the provenance stamp**. A named contract
that drops one of those has left the type; say so rather than shipping it.

## The payload — ask the question every time

Assembly asks one more question, and it is the one that decides whether the
Seed is a delivery or an essay:

> **What is the droppable form of this idea, and does the record contain enough
> to build it?**

- **If yes** — write the payload directory beside the document:
  `exports/NNNN-slug-payload/`, same record id and slug. Set `payload:` to the
  relative path and the classifier to `present`. Fill the Seed's **Payload**
  section: what is inside, and in one line what dropping it in actually means
  here (paste this into the repo root; hand this prompt to the agent; open this
  deck).
- **If no** — set `payload: absent`, and in the Payload section name **in one
  line** what the record would need in order to build one. That sentence is
  **routing information**: the gap names the verb that would fill it. It is
  not an apology and not a failure.

**Nothing is gated on the payload.** A Seed without one exports perfectly well
and says so on the tin — grade, never gate, as with every other classifier.

Do not ship a payload the recipient cannot actually drop in. An unrunnable
payload, or one referencing assets that are not there, is a **recorded Seed
falsifier** (`system/FALSIFIERS.md`) and is worse than no payload at all,
because absence is honest and a broken payload is not.

## The `build-plan` contract (ADR 0029, ADR 0030)

When the recipient is an **implementation loop**, the record names
`contract: build-plan` and `target:`. The target is the switch that says
whether the Nexus worker loop is included:

- **Decide `target:` before assembling.** If the idea is buildable software
  and the record has not already said, ask T once, plainly: *"Include the
  Nexus worker loop?"* — `target: nexus` renders the payload for the kit;
  `target: none` exports the build plan as a plain document with no adopt
  step, for a recipient that has its own loop or none. If the idea is not
  software at all, `build-plan` is the wrong contract; say so and stop.
- **Phases must exist.** If the record has not run `phase`, that is the gap
  report — name the verb and stop. Under this contract the Phases are the
  plan, and the garden (Phase 0 in the estate, Phase 1 in the payload) must
  be among them.
- **The payload is required.** Copy `templates/payload-build-plan/` to
  `exports/NNNN-slug-payload/` and fill every file by hand — `spec.md` from
  the Horizon, refusals and acceptance criteria; `nexus.adopt.json` from the
  routine calls; `plan/bearings.md` with the refusals as standing decisions
  and the stack locked; `plan/steps/01_build_plan.md` in the kit's Status
  format, garden first; `plan/phases/phase_1_bootstrap.md` as the garden's
  brief. Every `[HUMAN ATTENTION]` tag becomes `[needs-user-call]`, the
  target's word for the same thing. Render — do not paraphrase into
  something the record never said. The payload's `README.md` names the kit
  tag it was rendered for; the adopt command fetches the kit, nothing is
  cloned beside the repo, and `seed-check`/`re-seed` come with the kit.
- **Nothing target-specific escapes the payload.** The Seed document above it
  stays domain-general.

Do not write a generator for this. Twice by hand first.

## A Seed behind its record (ADR 0029)

Before assembling, read the record's earlier exports. If one exists whose
`origin:` state is behind the head, this export **supersedes** it: set
`supersedes:` to its path, and say in one line in §0 what changed since —
that line is the only place the old road is mentioned. The old Seed is never
edited. If T instead wants the deviation grafted or abandoned, that is
`graft` or `decide`; say so and stop.
