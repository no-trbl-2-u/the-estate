# 01 — Build plan

origin: idea-NNNN @ state/NNNN

> Style guardrails for every phase below. Always ship unit tests
> alongside code — never "add tests later". Small focused files in
> folders. Run `/seed-check` before any step a phase brief did not name.

## Status (at-a-glance)

`/march`, `/ship-a-phase`, and (transitively) `/loop` read this block to
find the next phase. Status vocabulary: `[ ]` pending → `[x]` shipped
(with commit hash); `[skipped]` (set only via `/oversight`);
`[blocked: <reason> <date>]` (set by `ship-a-phase` on a phase-shaped
failure — `/march` skips it, `/oversight` unblocks it); `[-]`
partial-with-carry-overs. Tick in this file in the same commit that ships
the phase.

<!-- Rendered from the estate's Phase artifacts. Keep each Phase's outcome,
     done-condition, dependencies and cost; drop the prose argument — it
     lives in the record. The garden is always Phase 1. The estate's
     [HUMAN ATTENTION] tag is rendered as [needs-user-call]. -->

**The garden (phase 1):**
- [ ] Phase 1 — The garden (stack, env manifest, verify gate, deploy
      target, seed skills; done = one tick on nothing)

**{Group name, from the Seed's Trajectory} (phases 2–{N}):**
- [ ] Phase 2 — {Name}
- [ ] Phase 3 — {Name}

**{Next group} (phases {N+1}–{M}):**
- [ ] Phase {N+1} — {Name}

> **After phase {M}:** the loop transitions to `/iterate` — gaps, audits,
> link rot. `/march` makes that transition automatic.

---

## Per-phase scope

Each row above corresponds to one phase. The detailed brief lives at
`plan/phases/phase_<N>_<topic>.md`. Only the garden's brief ships with
the payload; if a later brief is missing when the loop reaches its phase,
`/plan-a-phase` generates one from the scope below and `spec.md`.

### Phase 1 — The garden

Makes the loop able to run. Nothing here is a feature. Detailed brief:
`phase_1_bootstrap.md`. Done when `/ship-a-phase` on a trivial slice goes
green end to end: verified, deployed, reported.

### Phase 2 — {Name}

**Done when:** {the Phase's "done looks like", verbatim}
**Waits on:** Phase 1{, …}
**Cost:** {as the Phase states it}

{Two to five lines of scope. Mark any step no agent can do
`[needs-user-call]` and say what the agent does up to the line.}

### Phase 3 — {Name}

**Done when:**
**Waits on:**
**Cost:**

{…}

---

## Carry-overs / known gaps (update as phases ship)

(Empty until phases ship. Add `[-]` rows for partial-but-shipped phases
with linked notes here.)

## Phase log (commit hashes)

(Empty until phase 1 ships. One line per shipped phase:
`phase <N> — <commit hash> — <one-line summary>`.)
