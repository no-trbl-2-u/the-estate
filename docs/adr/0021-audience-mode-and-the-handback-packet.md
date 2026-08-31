---
type: Decision Record
title: "ADR 0021"
description: "Verbs carry a mode; four run as audiences; the handback packet replaces the dialogue relay."
tags: [adr, decision]
generated: { by: claude-code/2026-08-31, at: 2026-08-31T00:00:00Z }
verified: { by: human:T, at: 2026-08-31T00:00:00Z }
---

# ADR 0021: Audience mode and the handback packet

**Status:** accepted · **Date:** 2026-08-31 · **Source:** architecture review of 2026-08-31, decisions 1 and 2 of the locked set; `load-bearing-updates-plan.md` Phase 1

## Context

ADR 0015 established the **dialogue relay**: a dispatched agent has no channel
to the operator, so a verb needing operator input returns *the question instead
of an artifact*, and the Steward re-dispatches with the answer in the packet.
That rule was written against a harness assumption that no longer holds. A
dispatched subagent is not a one-shot function call — it stays alive, and the
main session can send it a further message with its context intact.

The relay was costly in two distinct ways, worth separating because they have
different fixes.

**The cheap cost: re-dispatch discards context.** A batch agent that needed one
fact had to die and be reborn from a packet. Everything it had established —
the reading it had done, the attack it had half-built — was thrown away to
learn one thing. Pure waste, and the living-instance continuation fixes it
outright.

**The expensive cost: four verbs are conversations, and the relay forbade
conversation.** `frame`, `challenge`, `decide`, and `explore` are not
information-processing tasks whose inputs are all in the record. They are verbs
whose quality is a function of the operator's live words. A `challenge` where
the operator cannot defend the artifact files attacks that were already
answered. A `decide` where the Chancellor cannot ask for the operator's word
must either infer the decision from the record — the Chancellor exceeding its
authority — or record everything as open. `frame` needs the operator to push
back on a candidate framing. `explore` is the verb most damaged by being
performed *at* someone: the branch the operator would chase is unguessable from
a packet.

The obvious fix — let the Steward carry the conversation — is the one thing the
estate cannot do. The Steward conversing on an agent's behalf *is* performing
the verb, in a context where `AGENTS.md` is loaded, which is precisely the
failure `system/LAW.md` names.

## Decisions

**1. Verbs carry a mode: `batch` or `audience`.** Recorded in
`system/registry.md` as a first-class column, defined in `system/LAW.md`, and
stated in each skill's frontmatter as `mode:`. Mode says *how* a verb is run.
It says nothing about *who* runs it, and it is not a second axis of authority —
the binding is untouched.

**2. Four verbs are audiences: `frame`, `challenge`, `decide`, `explore`.** The
Steward dispatches, introduces the operator to the agent in a line or two, and
**steps out**. The operator converses with the agent directly, in the agent's
own voice. The audience ends on the operator's word or on the agent's judgment
that the verb is complete. All thirteen other verbs stay `batch`.

The selection rule is not "which verbs are pleasant to talk to" — it is **which
verbs' quality depends on words that are not yet in the record**. `envision`,
`chart`, and `phase` elaborate what a record already holds; they lose nothing
by running batch. `capture` is deliberately excluded even though it takes
operator text: its input is the operator's words *as already spoken*, and
conversation during capture is how a Spark gets tidied into something the
operator did not actually think. The Gardener therefore owns one audience verb
(`frame`) and one batch verb (`capture`) — proof that mode is a property of the
verb, not of the office.

**3. The Steward may listen during an audience; it does not speak unless
addressed.** It does not summarize, redirect, or answer on the agent's behalf.
This is what keeps decision 2 from quietly re-creating the problem it solves.

**4. The handback packet, defined once in `system/LAW.md`.** When an audience
ends, the agent **writes its artifact first** — folding the conversation's
substance into it, its own voice, verbatim where it matters — and then returns
exactly five things: `artifact-path`, classifier verdicts, gold nuggets, open
questions, tensions.

**The transcript is never duplicated into the record.** This is the
load-bearing half of the decision. The alternative — dumping the conversation
into state — would make every audience session bloat the record with material
that is neither artifact nor perspective, and would re-create the lossy relay
in the one place it does most damage: the Steward summarizing a conversation it
was not part of. The artifact carries the fidelity; the state carries the
Steward's whole-session view; the conversation is the means, not the output.

**5. Re-dispatch-to-ask is obsolete for batch verbs.** A batch agent that needs
operator input asks through the Steward and stays alive for the answer. The
operator's channel to a batch agent still runs *through* the Steward — only an
audience puts them in direct conversation. `capture` and `decide` carried the
old wording and are updated.

## Rejected alternatives

**The Steward relays a live conversation turn by turn.** Rejected: the Steward
would be choosing what to pass on in both directions, which is the verb being
performed by the router. It also fails the reason the writer seam exists — the
thinking would reach the record through a summarizer.

**Every verb becomes an audience.** Rejected: it would make each batch verb's
completion depend on operator availability, converting a foundry into a chat
interface. `VISION.md` names "not a chat interface" a non-goal, and thirteen
verbs genuinely have everything they need in the packet.

**Keep the relay and merely allow follow-up messages.** Rejected as
insufficient: it fixes the context-discarding waste (the cheap cost) and leaves
the four conversational verbs exactly as impaired as before.

## Consequences

- `system/LAW.md` loses the *"Dialogue crosses the seam through the Steward"*
  section and gains three: verb mode, the handback packet, and the
  living-instance rule for batch verbs. Since every agent reads `LAW.md`
  directly, the new provision reaches the whole population without any agent
  file changing — the four agent definitions gain audience conduct as
  *conduct*, not as law.
- The registry's verbs table has a **Mode** column, and every verb skill states
  `mode:` in frontmatter. Batch is stated explicitly rather than left as an
  implicit default, so no skill's mode is a matter of inference.
- A state snapshot closing an audience session **cites the artifact and carries
  the packet**. A snapshot that paraphrases an audience is now a recorded
  defect, checkable by reading it.
- The `reference/` bundle (`law.md`, `index.md`, `offices/steward.md`,
  `verbs/capture.md`) and `docs/GLOSSARY.md` are updated in step. The
  glossary's **Dialogue relay** row is replaced by three: **Mode**,
  **Audience**, **Handback packet**.
- ADR 0015's dialogue-relay decision is **superseded in part**: the relay as a
  mechanism for asking questions is gone; the principle it protected — that no
  summarizer stands between an agent's thinking and the record — is not merely
  preserved but strengthened, since an audience now lands verbatim in the
  agent's own artifact. ADRs are immutable, so 0015 is not edited; the
  supersession is recorded here and in the index.
- The plan called this ADR 0020; that number was already taken by
  `0020-human-attention-tag.md`, so this round's ADRs are 0021–0026.
- No verb ran. This was a Steward structural session, as ADRs 0015–0020 were.
