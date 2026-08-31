---
type: Decision Record
title: "ADR 0025"
description: "A Seed may carry a payload directory that is the droppable result; the five components become the default standard contract, and domain contracts are nameable."
tags: [adr, decision]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
verified: { by: human:T, at: 2026-08-31T00:00:00Z }
---

# ADR 0025: Seed payload and nameable Seed contracts

**Status:** accepted · **Date:** 2026-08-31 · **Source:** architecture review of 2026-08-31, decision 4 of the locked set and D3; `load-bearing-updates-plan.md` Phase 5

## Context

Two limits on the Seed surfaced in the same review, and they turn out to be the
same limit seen from two sides.

**A Seed describes a thing; it is never the thing.** The five components produce
an excellent brief and stop there. The recipient — a friend starting a business,
a coding agent, T in a new repo — reads it and then does the work of turning a
description into a starting point. That last step is real work, it is done
outside the estate, and it is exactly where the value leaks. The project
falsifier (`system/FALSIFIERS.md`) is *"no evidence of using this outside this
repo"* by 2026-09-25, and a handoff that still requires assembly at the far end
is the friction that falsifier is measuring.

**The five components are structurally opinionated.** `system/TYPES.md` takes
care to make the *wording* domain-neutral — a Seed must serve a business, a
conjecture, and a narrative premise equally. But the *structure* assumes the
recipient wants a vision and a path. Some recipients do not. A dataset handoff,
a proof obligation, a character bible, a design system: each has a shape its
recipient expects, and forcing it through five components it does not have is
how an export becomes a ritual instead of a delivery.

Both are the same failure: the Seed's form is fixed while the recipient's needs
are not.

## Decisions

**1. The five components become the `standard` contract, and contracts are
nameable.** A record may name a domain contract in the Seed's `contract:`
frontmatter. This is the same **vocabulary-not-closed-enum** move already made
for shapes (ADR 0014), and it is made for the same reason: the recurring
domain-neutral case belongs in the file, and domain-specific cases belong to
sessions. A Seed with no `contract:` is `standard`.

**2. Three things are contract-invariant.** Any named contract must still state
**what the recipient can do next**, **at least one refusal**, and **the
provenance stamp**.

These three and not others, because each is what makes a Seed a Seed rather than
a document. The next move is the difference between an export and an essay. The
refusal is the only thing that gives an export edges — without it, a Seed is
compatible with anything and therefore constrains nothing. The stamp is the sole
return path in a system with no index. A named contract that drops one has not
customised the type; it has left it.

**3. New frontmatter field `payload:` — a relative path to a payload
directory.** The payload *is* the droppable result: the files pasted into a
repo, the prompt handed to an agent, the deck given to a partner.

**4. Layout: sibling directory per export** (D3's recommendation, accepted).

```
exports/NNNN-slug-seed.md        the document
exports/NNNN-slug-payload/       the droppable result
```

Sibling rather than nested, because the document must remain a single file that
can be read, pasted, or mailed on its own — and because a payload is frequently
handed over *without* the Seed, straight into a repo. The naming rule (same
record id, same slug) is load-bearing: `exports/` is a flat departure lounge
with no index, so the name is the only thing binding a payload to its Seed.

**5. `payload: present | absent` is a classifier, not a gate.** A new row in the
classification table, behaving exactly as the others do: a Seed without a payload
exports perfectly well and says so on the tin. Grade, never gate — the estate's
oldest rule (ADR 0004), and there was never a reason to make this field the
first exception.

**6. An absent payload names its gap in one line, and that line is routing
information.** The Sower states what the record would need in order to build one.
The Steward reads that as a route: the gap names the verb that would fill it.
This converts what could have been an apology into the most useful sentence in
the export.

**7. A broken payload is a recorded Seed falsifier; an absent one is not.** The
asymmetry is the decision. `payload: absent` is honest, labelled, and costs the
recipient nothing. A payload that does not run, or that references assets not in
the directory, spends the recipient's trust *before* they discover the problem —
the same spirit as the abstract-trajectory falsifier, where the export claims to
hand over something usable and does not.

**8. The two existing exports are not edited.** `0003-starvu-agency-site-seed.md`
and `0004-estate-ui-seed.md` are immutable, like everything else here. They carry
no `contract:` and no `payload:`; `exports/README.md` records that they are to be
read as `contract: standard, payload: absent`, and that the convention applies
from the next export forward.

## Rejected alternatives

**Nest the payload inside a per-export directory**
(`exports/NNNN-slug/{seed.md,payload/}`). Tidier as a tree, and rejected: it
breaks every existing path to the two immutable exports, and it makes the
document a file *inside* something rather than a thing that can be handed over
by itself.

**Make the payload mandatory for Seed to typecheck.** Rejected outright — it is
a gate, and gates are prohibited (ADR 0004). It would also block export for
exactly the records that most need to leave: the ones whose droppable form is
not yet knowable.

**Let a named contract redefine everything, invariants included.** Rejected:
a contract with no floor is not a contract, and `Seed` would stop naming
anything in particular.

## Consequences

- `system/TYPES.md`: the Seed section gains the `standard` contract heading,
  nameable contracts with their three invariants, and the payload; the
  classification table gains a `payload` row.
- `templates/seed.md` gains `contract:`, `payload:`, the `payload` classifier,
  and a **Payload** section that also tells the author what to write when there
  is none.
- `exports/README.md` gains the sibling convention, the naming rule and why it
  is load-bearing, and the immutability note on the two existing exports.
- `.claude/skills/seed/SKILL.md` and `.claude/agents/sower.md` gain the contract
  rules and the assembly question — *what is the droppable form of this idea,
  and does the record contain enough to build it?*
- `system/FALSIFIERS.md` gains the broken-payload falsifier, with the
  absent-versus-broken asymmetry stated.
- **A cost worth naming:** payload directories put built artifacts in a
  repository that has so far held only records and documents. `exports/` will
  stop being uniformly readable, and nothing here prunes it — the payload of a
  Seed superseded a year later still sits there. That is consistent with the
  preservation law rather than an oversight, but it is a real change in what
  this repository contains.
- Phase 6's live verification deliberately does **not** force a payload run: it
  waits for a record genuinely ready to export. A forced payload would be the
  named failure mode (`system/FALSIFIERS.md`) — elaborating machinery instead of
  using it.
- No verb ran. Steward structural session.
