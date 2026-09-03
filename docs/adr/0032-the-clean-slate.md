---
type: Decision Record
title: "ADR 0032"
description: "T wiped the estate's four Idea Records and both exports to start from a clean slate; the archive is a pushed tag, and one immutable ADR was edited to unlink a target the wipe removed."
tags: [adr, decision]
generated: { by: claude-code/2026-09-03, at: 2026-09-03T14:10:00Z }
---

# ADR 0032: The clean slate

**Status:** accepted · **Date:** 2026-09-03 · **Source:** T's direction, this session

## Context

The estate held four Idea Records — `0001-the-estate` (its own record, 15
states and 9 artifacts, all of them `SessionResidue`), `0002-operator-supplied-material`
(a shell whose `capture` never ran), `0003-starvu-agency-site` (12 states, 19
artifacts, seeded), and `0004-estate-ui` (10 states, 14 artifacts, seeded and
stale) — plus two Seeds in `exports/`.

T asked for a clean slate. The couplings were surfaced first, because three of
them were not obvious:

- `scripts/validate-estate.mjs` **errors** (`origin idea-NNNN has no record`)
  on any export whose record is gone, so the exports could not stay behind.
- The two Seeds were the estate's only **evidence of use outside the
  repository** — the falsifier `system/FALSIFIERS.md` sets for 2026-09-25.
- `idea-0002` was the open seam behind a question T had asked in the same
  session: how an already-mature project ("I'm on v6") enters a system whose
  funnel starts at `Spark`.

T's answer, given those: full wipe anyway.

## Decision

**1. Every record and both exports are removed.** `ideas/` and `exports/`
keep only their `README.md` (and `ideas/SURVEY.md`, which was never
generated and needed no reset). The estate starts empty.

**2. The archive is a pushed annotated tag, not a branch or a stash.**
`ideas-archive-2026-09-03` holds all four records and both Seeds whole, and
is pushed to `origin`, because a local-only tag is a promise the next clone
cannot keep. Recovery is one command:

```
git checkout ideas-archive-2026-09-03 -- ideas/0001-the-estate
```

**3. Nothing is "deleted" in the sense the law forbids.** `AGENTS.md` and
ADR 0005 hold that nothing here is ever deleted and that retiring preserves
a record whole. That rule governs **the Steward working inside the estate**:
it exists so that no verb, and no session, may quietly drop a record the
operator did not ask to lose. It is not a lock on the operator's own
repository. The archive tag is what keeps the rule's *substance* — the
records are still whole, still reachable, and still unedited.

**4. One immutable ADR was edited, narrowly, at T's explicit instruction.**
ADR 0020 carried a markdown link to
`ideas/0001-the-estate/artifacts/0008-human-attention-tag.md`, which the wipe
removed. T asked that the ADRs not be left holding dead links. The edit
**unlinks the path and names the archive tag; not one word of the ADR's prose
changed**, and the citation still resolves — through the tag rather than
through the working tree. This is the whole of the exception, and it is
recorded here rather than performed silently.

Backticked *mentions* of removed paths in ADRs 0016 and 0029 were **left
alone**: they are historical narrative, not links, and they describe what was
true when those decisions were made. An ADR is allowed to describe a past.

## Rejected alternatives

**Keep `idea-0001`** (the estate's own record), so the ADR and glossary
citations keep resolving and the residue trail survives. Rejected by T: a
clean slate means clean.

**Retire all four in place** (`status: retired`), which is the law's own move
and deletes nothing. Rejected for the same reason — a retired record is still
on the shelf.

**Leave the exports and accept a red validator.** Rejected: an invariant the
validator checks is law here (`system/LAW.md`, *Checked, not declared*), and
knowingly shipping it red would make every future run meaningless.

## Consequences

- `ideas/0001-the-estate`, `0002-operator-supplied-material`,
  `0003-starvu-agency-site`, `0004-estate-ui`, and
  `exports/000{3,4}-*-seed.md` are removed; tag `ideas-archive-2026-09-03`
  preserves them and is pushed.
- **The falsifier's evidence now lives only in the tag.** `system/FALSIFIERS.md`
  asks for evidence of use outside this repository by 2026-09-25; the two
  Seeds that were that evidence are no longer in the working tree. The check
  is not thereby passed or failed — but whoever runs it must read the tag,
  and a fresh estate has to earn the evidence again.
- `docs/adr/0020-human-attention-tag.md`: one link unlinked (decision 4).
- `docs/GLOSSARY.md`: four source citations repointed to the archive tag; the
  definitions they support are unchanged.
- `exports/README.md`: the section describing the two grandfathered exports is
  replaced by a note that the lounge is empty and the conventions now apply
  without exception.
- `ideas/README.md`: corrected while in hand — it still described state as
  "copied forward," which ADR 0028 replaced with deltas.
- `scripts/validate-estate.mjs` reports `0 error(s), 0 warning(s) across 0
  record(s)`. The stale-Seed warning that stood since 2026-09-02 is gone with
  the Seed it named, not by reconciliation.
- A repo-wide link scan was run after the wipe. Three living documents were
  repaired: `AGENTS.md` and `README.md` both linked to `BUILD-PROMPT.md`,
  deleted in commit 4daecbd and dead ever since; `reference/log.md` had
  root-relative links (`](/law.md)`) that PR #29's scan missed because it
  only matched `](.`. `load-bearing-updates-plan.md` is **left alone** — it is
  a dated, status-stamped plan for work already implemented, so it is
  historical on the same reasoning as ADRs 0016 and 0029, and its eight dead
  links (five to the retired agent layer, one to the renamed `steward` skill,
  two to the exports this ADR removed) describe what was true on 2026-08-31.
- The next record created will be `ideas/0001-<slug>`: numbering restarts,
  and the ids in the archive tag refer to different records than any future
  `idea-0001`. Anyone reading an ADR older than this one should read its
  `idea-NNNN` references as pointing into the tag.
- No verb ran. This is a structural session, made directly at T's word.
