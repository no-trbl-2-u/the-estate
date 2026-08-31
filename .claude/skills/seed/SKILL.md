---
name: seed
description: Assemble the terminal export - Horizon + Trajectory (+ Phases) → Seed. Performed by The Sower; the Steward normally dispatches this for you.
verb: seed
signature: "Horizon + Trajectory (+ [Phase]) → Seed"
agent: sower
mode: batch
---

# seed — `Horizon + Trajectory (+ [Phase]) → Seed`

Assemble the export from `templates/seed.md`. Under the default `standard`
contract a Seed typechecks only when all five components are present (see
`system/TYPES.md`): Horizon, Trajectory, first actionable step, at least one
refusal, and the provenance stamp (`origin: idea-NNNN @ state/NNNN`).

If a component is missing, say exactly which and name the skill that produces
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

Assembly now asks one more question, and it is the one that decides whether the
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
  **routing information**: the gap names the verb that would fill it, and the
  Steward reads it as such. It is not an apology and not a failure.

**Nothing is gated on the payload.** A Seed without one exports perfectly well
and says so on the tin — grade, never gate, as with every other classifier.

Do not ship a payload the recipient cannot actually drop in. An unrunnable
payload, or one referencing assets that are not there, is a **recorded Seed
falsifier** (`system/FALSIFIERS.md`) and is worse than no payload at all,
because absence is honest and a broken payload is not.

## Agent binding (hard)

Performed by **The Sower** (`sower`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
