---
type: Decision Record
title: "ADR 0015"
description: "Audit fixes \u2014 the seam extended, the Spark restored, the algebra reconciled."
tags: [adr, decision]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
verified: { by: human:T, at: 2026-08-26T00:00:00Z }
---

# ADR 0015: Audit fixes — the seam extended, the Spark restored, the algebra reconciled

**Status:** accepted · **Date:** 2026-08-26 · **Source:** `AUDIT-REPORT.md` (external audit per `AUDIT-PROMPT.md`), fixes approved by T

## Context

An outside session audited the built system against `AUDIT-PROMPT.md` and
reported fifteen confirmed defects and two suspicions (`AUDIT-REPORT.md`,
findings F-1…F-17). T approved fixing all of them. This ADR records the
resolutions; the report holds the full reasoning.

## Decisions

**1. The Spark is produced by `capture`, always (F-1).** The Steward creates
only the record *shell* (directory, `idea.md` with verbatim Origin,
`state/0000.md`) and then dispatches `capture` to The Gardener, who writes the
record's first artifact (`type: Spark`). Recording the origin is not
`capture`; `frame` typechecks against the Spark, never the shell.

**2. The Advocate can write (F-2, F-17).** Its `tools:` now include Write —
the writer seam requires the attack to land in the Advocate's own voice, and
a read-only artifact-writer was a contradiction, not a safety posture. Its
description no longer forbids the direct audiences the Steward is told to
grant.

**3. `CLAUDE.md` added (F-3).** Standing identity depended on the harness
loading `AGENTS.md`, which at least one real environment does not do. A
one-page `CLAUDE.md` now delivers the pointer and the identity block to
harnesses that read it instead.

**4. The seam covers `idea.md`, and dialogue crosses it through the Steward
(F-4, F-7).** Two additions to `system/LAW.md`: *record frontmatter is state*
(`status:`, `state-head:`, `relates:`, `appetite:` have one writer — the
Steward; `relate`, `incubate`, `retire` now return their edge/status/reason
for the Steward to write), and *a dispatched agent has no operator channel*
(an agent needing input returns the question instead of an artifact; the
Steward relays and re-dispatches). `capture`, `challenge`, and `decide` were
reworded to match.

**5. The close protocol updates `state-head:` (F-5).** An explicit step in
both Steward documents — the survey's staleness detection reads that pointer,
and a lagging pointer made stale look fresh.

**6. Reachability is chain-fraction; appetite defaults to 1 (F-6).**
Reachability is now the fraction of the *remaining typed chain* to Seed-shape
that the best next verb completes — a raw Spark scores 1/5, never 0. Appetite
0 means deliberately cold, never merely unset.

**7. The verb algebra is reconciled (F-8, F-12, F-15).** Two families added
honestly to `system/TYPES.md`: **aggregator** (`[a] → b`, `compare`) and
**edge author** (`(Idea, Idea) → relates`, `relate` — a family of exactly
one). `Brief` is produced by `seed`. The playbook composition uses the
left-to-right pipeline arrow `▸`, which typechecks.

**8. Boundary and state inputs are named (F-9).** `Text` and `Question` are
boundary inputs; `Tensions` lives in the head snapshot and **state paths are
legal `inputs:` targets**, so Decisions chain. Gap derivation now reads
tensions and open questions, not just Seed components — `decide`, `research`,
and `compare` are reachable by routing, not only by name.

**9. Branching is specified (F-10).** `ideas/README.md` now states the exact
mechanics: Steward-performed, next global id, Origin copied verbatim plus a
branch line, `state/0000.md` with the sole cross-record `previous:` form,
`parent` derived from any cross-record `previous:`.

**10. Artifacts are immutable; refiners write versions (F-11).** New file,
next artifact number, `inputs:` names the predecessor; the current version is
the tip of the chain. `challenge` writes its revision as a new version.

**11. Shapes are a vocabulary, not a closed enum (F-16).**
`harness-architecture` and `prototype-design` left the table — they were the
operator's home domain in a domain-general system. New shapes are named in
frontmatter when an audience needs them.

**12. Merge and split are playbooks, not verbs.** The audit's Parts 2–3 found
no missing verbs or offices: cross-record `inputs:` plus `retire` *is* merge;
`explore` plus per-child `capture` *is* split. `playbooks/merge.md` and
`playbooks/split.md` record the recipes. No taxonomy grew.

**13. Untouched:** `state/0000.md` of `idea-0001` keeps its pre-reconciliation
frontmatter (`session-skill:`) — it is immutable and that is the point (F-14);
the discrepancy is noted here instead. The Dreamer remains unbuilt per the
report's verdict: the capability exists as the split playbook's composition;
revisit as `germinate` (The Gardener, `Framing → [Spark]`, children born
`incubating`, cap 3) only after the falsifier passes *and* the manual
composition has been performed by hand three or more times.

## Consequences

- Every confirmed defect in `AUDIT-REPORT.md` is resolved or explicitly
  accepted; the two suspicions are resolved in T's favor of generality.
- `docs/architecture.html` was rewritten to match the reconciled system (and
  to elaborate types and state-over-time; it had taught a different algebra
  in three places).
- Zero verbs, zero agents, zero types were added. The falsifier clock still
  runs to **2026-09-25**, and none of this is evidence of use outside the
  repo — the tank still holds one record.
