---
type: Decision Record
title: "ADR 0027"
description: "Verbs run inline in their own voice; the agent layer retires; dispatch is reserved for fresh eyes and quarantine."
tags: [adr, decision]
generated: { by: claude-code/2026-09-01, at: 2026-09-01T00:00:00Z }
---

# ADR 0027: Inline verbs and the dispatch exceptions

**Status:** proposed — awaiting T's ratification · **Date:** 2026-09-01 ·
**Source:** the dispatch-cost audit and law audit of 2026-09-01; T's direction
in session

## Context

ADR 0021 argued audience mode on quality grounds and never priced it. The
2026-09-01 session priced it. Three dispatches — a residue pass, a `capture`,
and an `explore` — cost roughly **81k subagent tokens**, plus the Steward's
packets and the read-back of results into its context. The Forager's opening
turn alone cost ~23k end to end (packet, cold start, hand-back) against an
estimated ~3k for the same analysis performed inline, because the recon was
already in the Steward's window. Roughly **8x**, front-loaded per agent: the
cold start — reading `LAW.md`, the skill, the record, and re-doing recon the
Steward had already done — is the bulk of it, and it recurs for every fresh
dispatch in every session.

`AGENTS.md` made the tax mandatory ("Do this even when doing it yourself would
be trivially easy"), and the audience provision multiplied it, because
conversation means repeated round trips through a spawned context.

The same session also produced the counter-evidence, and this ADR does not
suppress it: the dispatched residue pass **found a defect the Steward's own
inline sweep had missed** and corrected a stale claim the Steward was carrying.
Isolation is not worthless. It is worth something *specific*, in *specific
places* — and the law as written charged for it everywhere.

## Decisions

**1. Verbs run inline by default, each in its own voice.** The main session
performs the verb directly. Every verb's `SKILL.md` opens with its voice —
"You are The ⟨Name⟩…" — so the Estate's household survives as *voices*, not as
a roster of spawned agents. Several verbs may share a voice, exactly as several
verbs shared an office. Law 1 is amended accordingly (a voice, an office, a
name — carried by the verb's skill); Law 2 is untouched; Law 3's hard binding
survives only as declaration: each verb states its voice and its tools in
frontmatter, so capability remains knowable from the skill alone.

**2. The agent layer retires.** `.claude/agents/*` is removed (git history is
the archive); `reference/offices/` leaves the reference bundle; the registry's
agent table is replaced by the voices carried in the verbs table. The
batch/audience distinction retires with it — an inline verb converses with the
operator natively, which is what audience mode existed to simulate.

**3. `run:` replaces `mode:` in every verb's frontmatter.** Three values, each
naming the *reason* dispatch survives, so future erosion is visible at the
point of temptation:

- **`inline`** — the default. Twelve verbs: `capture`, `frame`, `graft`,
  `envision`, `chart`, `phase`, `explore`, `distill`, `decide`, `relate`,
  `incubate`, `retire`, `seed`.
- **`fresh-eyes`** — dispatched because the session's accumulated context is a
  *liability*: self-review bias is the one failure a voice preamble cannot fix,
  since the bias lives in the context, not the prose. `challenge` always.
  `review` and `compare` conditionally: dispatched when this session produced
  or materially shaped what is being appraised, inline otherwise.
- **`quarantine`** — dispatched because the verb's *inputs* must not enter the
  main window: bulk, and untrusted content. `research` always — web fetches
  are large, and web content is where prompt injection arrives; better it
  lands in a context that can only return findings than in the session that
  writes all state. `survey` for scale — the whole-portfolio read stays out of
  the window and a file path comes back.

A dispatched verb runs the *same* skill text in a spawned context — same
voice, same instructions. The handback packet (ADR 0021) survives for
dispatched verbs only.

**4. The fidelity rules generalize; the writer seam narrows to what it
protected.** Artifact first, conversation folded in verbatim where it matters,
the transcript never duplicated into state — these now bind inline verbs
exactly as they bound audiences. The Steward still writes all state and the
session close. Inline, the seam is a *document* discipline (artifacts carry
fidelity in the verb's voice; state carries the session view); for dispatched
verbs it remains the literal two-writer seam.

**5. Nothing else moves.** The front door, proposal-only invocation (ADR 0022,
with "run" read for "dispatch"), the three dimensions, grade-never-gate, `jot`,
immutable state, derived lineage — all untouched by this ADR.

## Why: what this buys and what it costs

**Bought.** The per-dispatch cold start disappears for the common case —
thirteen of seventeen verbs stop paying ~20k to wake a context that mostly
re-reads what the session already knows. The four conversational verbs get the
operator's live words natively; ADR 0021's central problem does not get a
better mechanism, it *dissolves*. Packet-writing and read-back duplication go
with it. And one layer of files replaces three: the persona lives where the
verb lives.

**Paid, and paid knowingly.** Context isolation for the inline verbs is gone —
every inline verb inherits the session's accumulated framing, prior
conclusions, and whatever bias sits in the window. "Same verb, two contexts,
two results" resolves permanently to *this session's* context. Consistency of
result now rests on the skill text alone, not on context separation. And the
structural claim that the Steward never performs a verb is not weakened but
abandoned: the Steward now performs almost all of them, in the verb's voice,
and the law says so plainly instead of pretending otherwise.

**Kept where evidence says it pays.** The one demonstrated win for isolation
this system has recorded — a dispatched pass catching what the incumbent
context could not see — is exactly the case `fresh-eyes` preserves. The one
case where economics *favor* dispatch — inputs larger and less trustworthy
than the machinery around them — is exactly what `quarantine` preserves. The
exceptions are not sentiment for the old law; each is a priced answer to a
named failure mode.

**Residual risk.** The binding was always law obeyed, not law compiled, and
that does not change: under cost pressure a future session could quietly run
`challenge` inline and produce a flattering attack. The mitigation is that the
`run:` value *is* the reason — deleting `fresh-eyes` from `challenge` is a
legible act of law-making, not a silent drift.

## Rejected alternatives

**Keep full dispatch and optimize the cold start** (trim the wake-up reading,
lean on living-instance reuse). Rejected: it shrinks the tax but keeps it on
all seventeen verbs, and the quality argument for isolating the twelve inline
verbs was never established — 0021 asserted dispatch quality in general and
priced nothing.

**Retire dispatch entirely.** Rejected: it discards isolation in the two
places the record shows it paying — self-review bias and input quarantine —
to simplify a table by five rows.

**Keep the agent files but run them inline.** Rejected as pure duplication:
two files per verb saying the same thing, with drift guaranteed.

## Consequences

- `system/LAW.md` is rewritten: "The main session is The Steward" (the
  never-perform rule) and "Why hard, not soft" are repealed; the mode and
  audience sections are replaced by the `run:` provision; "Batch verbs stay
  alive for the answer" narrows to dispatched verbs; "Where the law lives"
  drops its now-false rationale — inline verbs receive the law through the
  session, and the two quarantine/fresh-eyes skills still read it directly.
- `AGENTS.md` replaces "Never perform a bound verb yourself" with the inline
  provision and the exception table.
- Every verb's `SKILL.md` gains its voice opening and a `run:` field;
  `mode:` is removed.
- `.claude/agents/*` is removed; `reference/offices/` leaves the bundle;
  `system/registry.md` drops the agent table and its verbs table's **Mode**
  column becomes **Run**; `VISION.md`'s household table becomes a table of
  voices; `docs/GLOSSARY.md` replaces **Audience**/**Mode** with **Run**,
  **Fresh eyes**, **Quarantine**.
- Supersessions, recorded here because ADRs are immutable: **0012 in part**
  (hard binding as a dispatch law; the declaration half survives), **0013 in
  part** (the roster; the seam's fidelity half survives and generalizes),
  **0021 in large part** (mode, audiences, and the introduction ceremony; the
  handback packet and artifact-first rule survive for dispatched verbs).
  0011 was already superseded by 0012.
- No verb ran. This is a structural proposal drafted at T's direction;
  implementation follows T's ratification, not this document.
