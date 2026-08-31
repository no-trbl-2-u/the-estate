---
type: Plan
title: "Load-Bearing Updates Plan"
description: "Phased plan for the six structural changes to the spark → seed flow, locked with T on 2026-08-31."
tags: [plan, architecture]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
status: approved by T, 2026-08-31 — D1–D4 resolved per their recommendations
---

# Load-Bearing Updates Plan

Six structural changes to the spark → seed flow, decided in the architecture
review session of 2026-08-31. This document is the execution plan. It is a
**proposal**: per `AGENTS.md`, no phase runs without T's explicit approval.
Each phase is designed to land as its own reviewable commit set, in order —
later phases assume earlier ones are law.

## The locked decision set

| # | Decision | Choice |
|---|---|---|
| 1 | Dialogue seam | **Audience mode** — Steward introduces, steps out; operator converses with the agent directly; Steward returns for the close |
| 2 | Audience handback | **Artifact + nuggets** — agent writes its own artifact folding in the conversation; returns only a structured packet (classifiers, nuggets, open questions, tensions) |
| 3 | Graft (branching) | **Inherit the tips** of the source snapshot's artifacts; origin stamp on the graft; **`relates` edge written back** to the source |
| 4 | Seed contract | **Default + nameable** — five components stay the default; domain contracts nameable per record; new **payload directory** field pointing at the droppable result |
| 5 | Fast capture | **Defer ceremony** — new `jot` intake; thought lands in an inbox instantly; shell/dispatch/state happen in a later batch session |
| 6 | Steward posture | **Suggest, never invoke on inference** — the Steward proposes the verb and waits for selection, always |
| 7 | Law scope | **LAW.md amendable via ADR** |
| 8 | Roster | **Stays at 13.** No consolidation this round |

## Decisions D1–D4 — **all resolved per recommendation, approved by T 2026-08-31**

- **D1 — Who owns `graft`?** Recommendation: **The Gardener** ("receives what
  arrives and gives it its first shape" — a graft is an arrival whose origin
  happens to be internal). The `relates` back-edge is *returned* to the Steward,
  who writes it — the writer seam already covers this, so no conflict with The
  Cartographer's ownership of `relate`.
- **D2 — Who performs `jot`?** Recommendation: **the Steward, as clerical
  intake, not a bound verb.** An inbox slip is a boundary input (`Text`), not an
  artifact — the law binds artifact-producing verbs to agents, and jot produces
  none. This keeps jot instant (no dispatch) without cracking the hard-binding
  law. Alternative if T prefers strictness: bind to The Gardener and accept one
  dispatch per jot.
- **D3 — Payload layout.** Recommendation: sibling directory per export —
  `exports/NNNN-slug-seed.md` (the document) + `exports/NNNN-slug-payload/`
  (the droppable result), with the Seed's `payload:` frontmatter field holding
  the relative path. Payload optional at export time; its absence is a
  classifier, not a gate.
- **D4 — ADR granularity.** Recommendation: one ADR per phase (0020–0024),
  written *in* the phase it governs, not batched at the end.

---

## Phase 1 — The audience seam

**Goal:** conversational verbs run against a living agent the operator can
actually talk to, without breaking the three-part law or the writer seam.

**ADR 0020 — "Audience mode and the handback packet."** Records: why the relay
law is replaced, why the harness's living-subagent continuation makes re-dispatch
obsolete, the handback contract, and which verbs are audiences.

### Steps

1. **Amend [system/LAW.md](system/LAW.md).** Replace the section *"Dialogue
   crosses the seam through the Steward"* with an **Audience** provision:
   - Verbs have a **mode**: `batch` (dispatch, run to completion, return) or
     `audience` (dispatch, then the Steward introduces the operator and steps
     out; the operator converses with the agent directly; the audience ends on
     the operator's word or the agent's judgment that the verb is complete).
   - During an audience the binding holds (the agent performs its own verb, in
     its own voice) and the writer seam holds (the agent writes the artifact;
     the Steward writes state).
   - **The handback packet**, defined once here: on audience end the agent
     writes its artifact — folding the conversation's substance into it, its
     own voice, verbatim where it matters — and returns to the Steward only:
     `artifact-path`, classifier verdicts, gold nuggets, open questions,
     tensions. The transcript is never duplicated into the record.
   - Batch verbs that need operator input mid-run no longer "return the
     question instead of an artifact" for a full re-dispatch: the agent stays
     alive, the Steward relays the answer to the *same living instance*, and
     work continues with context intact.
2. **Amend [system/registry.md](system/registry.md).** Add a **Mode** column to
   the verbs table: `frame`, `challenge`, `decide`, `explore` → `audience`;
   all others → `batch`.
3. **Amend [system/STEWARD.md](system/STEWARD.md).** Add the audience protocol
   to the dispatch section (introduce → step out → return for close); state
   that the Steward may listen but does not speak during an audience unless
   addressed. While in the file: fix the stale line claiming the steward skill
   is "the only entry in `.claude/skills/`" (there are 18).
4. **Amend [.claude/skills/steward/SKILL.md](.claude/skills/steward/SKILL.md).**
   Dispatch step gains the mode check: batch verbs dispatch as today; audience
   verbs dispatch-and-introduce. Close protocol gains: state cites the
   artifact and carries the handback packet's contents — never a paraphrase of
   the audience.
5. **Amend the four audience skills** —
   [frame](.claude/skills/frame/SKILL.md),
   [challenge](.claude/skills/challenge/SKILL.md),
   [decide](.claude/skills/decide/SKILL.md),
   [explore](.claude/skills/explore/SKILL.md): add `mode: audience` to
   frontmatter; add an **Audience conduct** section (converse; probe; the
   operator's live words are primary input; end by writing the artifact and
   returning the handback packet).
6. **Amend the four bound agents** —
   [.claude/agents/gardener.md](.claude/agents/gardener.md),
   [advocate.md](.claude/agents/advocate.md),
   [chancellor.md](.claude/agents/chancellor.md),
   [forager.md](.claude/agents/forager.md): audience conduct + handback
   contract. (The Gardener's `capture` stays batch; only its `frame` is an
   audience.)
7. **Write [docs/adr/0020](docs/adr/) and update [docs/adr/README.md](docs/adr/README.md).**
8. **Consistency sweep:** grep the repo for `relay`, `re-dispatch`,
   `no channel to the operator` — every statement of the old seam is updated
   or struck. `AGENTS.md` checked for contradictions.

**Done when:** no file describes the relay seam; registry, law, steward, four
skills and four agents all agree; ADR 0020 merged.

---

## Phase 2 — Steward posture: suggest, never invoke

**Goal:** the Steward proposes the verb and waits — "do you want me to jot this
or explore it?" — and only acts on explicit selection. Inference never triggers
dispatch.

**ADR 0021 — "Proposal-only dispatch."** Small ADR; records that the existing
"degrade" rule (act immediately when the operator *names* the verb) survives,
and that everything short of naming gets a proposal + wait.

### Steps

1. **Amend [.claude/skills/steward/SKILL.md](.claude/skills/steward/SKILL.md).**
   The *Proposing the verb* section becomes a hard rule: describe-in-own-words
   → Steward names verb + agent + runner-up → **waits**. Add the negative rule
   explicitly: a described intent is never treated as an invocation. Keep the
   degrade clause: an operator who names the verb is not re-confirmed.
2. **Amend [system/STEWARD.md](system/STEWARD.md)** to match (routing section
   and Authority section).
3. **Check [AGENTS.md](AGENTS.md)** *Suggestions* section — already compatible
   ("suggestions do not become work until T selects them"); add one line
   extending it explicitly to verb dispatch.
4. **ADR 0021; ADR index updated.**

**Done when:** both steward documents state proposal-only dispatch; ADR merged.

---

## Phase 3 — `jot` and the inbox

**Goal:** a stray thought enters the estate in under a minute; the ceremony is
deferred, not deleted.

**ADR 0022 — "Jot: deferred-ceremony intake."** Records D2's resolution and
why an inbox slip is a boundary input rather than an artifact.

### Steps

1. **Create `inbox/` at the root** with a `README.md`: what a slip is, the
   naming convention (`inbox/YYYYMMDD-HHMM-slug.md`), the slip frontmatter
   (`jotted: <timestamp>`, `status: pending | processed`,
   `became: <idea-id | discarded-with-reason>`), and the law that slips are
   never deleted — processing stamps them, it does not remove them.
2. **Define `jot` per D2** (recommendation: Steward-clerical). Add to
   [system/registry.md](system/registry.md) — either as a verb row bound to
   The Gardener (if D2 goes strict) or as a named Steward duty in the agents
   table (if D2 goes clerical). Add the signature `Text → Slip` to
   [system/TYPES.md](system/TYPES.md) under boundary inputs: a `Slip` is
   pre-record, pre-artifact.
3. **Create [.claude/skills/jot/SKILL.md](.claude/skills/)** so `/jot` is
   directly invocable: verbatim capture of the operator's words into a slip,
   zero processing, zero questions, confirmation in one line. No state
   snapshot, no record shell — that is the deferral.
4. **Define the batch session: "process the inbox."** Amend the steward skill
   and `system/STEWARD.md`: on greeting, if `inbox/` has pending slips, say so
   (count + ages). Processing is a normal Steward session over the shelf of
   slips: per slip, propose — new record (shell + dispatched `capture`, the
   Spark written *from the slip verbatim*), merge into an existing record,
   or discard-with-reason (slip stamped, never deleted). Posture rules from
   Phase 2 apply: propose, wait.
5. **Amend [system/LAW.md](system/LAW.md)** with one paragraph: intake precedes
   the record; a slip is not an artifact; jot's performer per D2.
6. **Amend [AGENTS.md](AGENTS.md)** orientation if the verb list it implies
   changes; **ADR 0022; ADR index.**

**Done when:** `/jot` writes a slip in one step; the Steward surfaces pending
slips at greeting; a slip has been walked through processing end-to-end once.

---

## Phase 4 — `graft`: branching made real

**Goal:** the un-built half of the vision. A new record can be started from any
prior snapshot of any record, inheriting the tips, with lineage derivable in
both directions.

**ADR 0023 — "Graft: the branch verb."** Records D1's resolution, tip
semantics, and the back-edge.

### Steps

1. **Define the type.** Amend [system/TYPES.md](system/TYPES.md): new verb
   `graft`, family **transformer**, signature
   `(Idea @ state-N, Direction) → Idea` — `Direction` is a boundary input, the
   operator's words for *why this branch exists* (a graft without a direction
   is just a copy). Define **tip semantics** precisely, reusing the existing
   tip definition: for each artifact type present at the source snapshot, the
   version no successor of the same type supersedes *as of that snapshot* —
   not the record's current tips. Later artifacts on the source must not leak
   backward into the graft.
2. **Define the mechanics** (in TYPES.md + the skill):
   - New record shell `ideas/NNNN-slug/` from
     [templates/idea.md](templates/idea.md); origin section records the
     graft: source id, source snapshot, and the Direction verbatim.
   - Tip artifacts copied in as the graft's starting artifacts, renumbered
     from 0001, each with `inputs:` citing the **source record's original
     artifact path** — cross-record lineage, honestly recorded.
   - `state/0000.md` cites the source snapshot in `inputs:`.
   - The graft's `idea.md` gets `relates: [<source-id>]`; the **source's**
     `idea.md` gets `relates: [<graft-id>]` appended. Both writes are the
     Steward's (record frontmatter is state; the performing agent *returns*
     the edge).
3. **Create [.claude/skills/graft/SKILL.md](.claude/skills/)** bound per D1
   (recommendation: The Gardener), `mode: batch`. Amend the bound agent's
   definition with the graft duty.
4. **Amend [system/registry.md](system/registry.md)** — verb row + owner's row.
5. **Amend [.claude/skills/steward/SKILL.md](.claude/skills/steward/SKILL.md)
   and [system/STEWARD.md](system/STEWARD.md):** route derivation learns the
   trigger ("branch off," "what if we took this a different way," an operator
   pointing at an old snapshot) and proposes `graft` — proposal-only, per
   Phase 2. The close protocol on a graft session closes **both** records'
   states: the graft's 0000 and a copied-forward source state noting the
   graft was taken.
6. **Amend [system/SCORING.md](system/SCORING.md) / survey:** the Cartographer's
   survey learns to show descendants (graft edges are `relates` edges, so this
   is mostly free — verify, don't assume).
7. **ADR 0023; ADR index; [AGENTS.md](AGENTS.md) orientation touch-up.**

**Done when:** a graft taken from a real record (0003 has 13 snapshots to pick
from) produces a routable new record whose gap derivation works immediately,
and both records' lineage reads correctly.

---

## Phase 5 — The Seed payload and nameable contracts

**Goal:** a Seed stops being only a description. It can carry a directory that
*is* the droppable result — and domains that don't fit the five components can
name their own contract.

**ADR 0024 — "Seed payload and nameable Seed contracts."**

### Steps

1. **Amend [system/TYPES.md](system/TYPES.md), Seed section:**
   - The five components become the **default contract**, named
     `standard`. A record may name a domain contract in the Seed's
     `contract:` frontmatter (the same vocabulary-not-closed-enum move shapes
     already made). A named contract must still state: what the recipient can
     *do* next, at least one refusal, and the provenance stamp — those three
     are contract-invariant.
   - New frontmatter field **`payload:`** — relative path to the payload
     directory (per D3: `exports/NNNN-slug-payload/`). The payload is the
     droppable result: the thing pasted into a repo, a prompt, a pitch. New
     classifier row in the classification table:
     `payload: present | absent` — classification, not certification; a
     Seed without a payload exports fine and says so on the tin.
2. **Amend [templates/seed.md](templates/seed.md):** add `contract: standard`
   and `payload: ""` to frontmatter; add a **Payload** section documenting
   what's inside the directory and how to drop it.
3. **Amend [exports/README.md](exports/README.md):** the sibling-directory
   convention (D3), and the rule that a payload directory belongs to its Seed —
   named from the same record id and slug.
4. **Amend [.claude/skills/seed/SKILL.md](.claude/skills/seed/SKILL.md) and
   [.claude/agents/sower.md](.claude/agents/sower.md):** assembly now asks
   "what is the droppable form of this idea, and does the record contain
   enough to build it?" If yes, the Sower writes the payload directory; if
   not, `payload: absent` plus one line in the Seed naming what's missing —
   which is itself routing information for the Steward (the gap suggests the
   verb that would fill it).
5. **Amend [system/FALSIFIERS.md](system/FALSIFIERS.md):** a payload the
   recipient cannot actually drop in (unrunnable, missing referenced assets)
   is a recorded Seed falsifier — same spirit as the abstract-trajectory
   falsifier.
6. **Reconcile the existing two exports:** [exports/0003-starvu-agency-site-seed.md](exports/0003-starvu-agency-site-seed.md)
   and [exports/0004-estate-ui-seed.md](exports/0004-estate-ui-seed.md) are
   immutable — they are **not** edited. The convention applies from the next
   export forward; the README says so.
7. **ADR 0024; ADR index.**

**Done when:** templates, types, exports convention, Sower, and falsifiers all
speak payload; ADR merged.

---

## Phase 6 — Reconciliation, residue ruling, and live verification

**Goal:** the estate agrees with itself everywhere, the residue pattern gets a
lawful home, and every new mechanism is proven once on real ground.

### Steps

1. **Full-consistency sweep.** Grep-driven pass over `system/`, `AGENTS.md`,
   `README.md`, [templates/](templates/), all 20 skills, all agent
   definitions, [docs/adr/README.md](docs/adr/README.md): every count ("17
   verbs"), every seam description, every routing example must reflect
   phases 1–5. `VISION.md` checked; amended only if it contradicts (it is
   intent, not mechanics — expected untouched).
2. **Rule on the residue pattern.** Four-plus `*-residue.md` artifacts exist
   in ideas 0001 and 0004 with no governing law. Propose to T (one question,
   per house rules): bless it — define `SessionResidue` in TYPES.md as a
   capture-produced artifact type for "the conversation itself was the work" —
   or fold it, declaring the post-Phase-1 handback packet its replacement,
   with existing residues grandfathered. Either ruling lands in TYPES.md +
   a short ADR 0025.
3. **Live verification, one exercise per mechanism, in order:**
   a. **Audience:** run `/challenge` as an audience against a real artifact
      (candidate: idea 0003's unchallenged Horizon `0011` — its state 0012
      names this exact gap). Verify: direct conversation happened, artifact
      in the Advocate's voice, state carries packet-not-paraphrase.
   b. **Jot:** jot a real stray thought; verify slip, greeting surfacing,
      then process it through a batch session.
   c. **Graft:** take a real graft T actually wants (not a synthetic test —
      nothing in this repo is deleted, so a throwaway record would live
      forever). Verify tips, renumbering, cross-record `inputs:`, both
      `relates` edges, both state closes.
   d. **Payload:** next natural `seed` run ships one. No forced run — this
      one waits for a record to be ready.
4. **Close the loop on the review itself.** The estate is idea 0001; this
   architecture round is exactly the kind of session its record exists to
   hold. Final step: a state snapshot on 0001 recording what was decided here
   (the Steward writes it, per the law), `state-head` updated.

**Done when:** sweep clean, residue ruled, a–c verified on real ground, idea
0001's record carries this round.

---

## Ordering rationale and risk notes

- **Law before behavior, behavior before new verbs, verbs before contracts.**
  Phase 1 rewrites the seam every later phase's skills are written against;
  Phase 2 is tiny but changes the Steward sentences Phases 3–4 add to.
  Grafting (4) before payload (5) only because 4 completes the stated vision
  and 5 extends it — they are independent and could swap or run parallel.
- **The two biggest regression risks:** (1) Phase 1's sweep missing a relay
  description in one of 20 skills — mitigated by the grep step being explicit;
  (2) graft tip semantics silently meaning *current* tips instead of
  *as-of-snapshot* tips — mitigated by defining it in TYPES.md with the
  leak-backward prohibition stated.
- **What this plan deliberately does not do:** consolidate the roster (locked:
  keep 13), touch the UI (idea 0004 inherits these mechanics; its record gets
  a `relates`-worthy note, nothing more), or run the counterfactual experiment
  (estate-vs-plain-conversation) — that is a study, not a structural change,
  and belongs to idea 0001's own route as a `research`/`review` session after
  these phases land.
