---
type: Policy
title: "The Three-Part Law"
description: "Agents are persons, verbs are verbs, bindings are hard - plus the writer seam and the audience provision."
resource: ../system/LAW.md
tags: [law, governance]
generated: { by: claude-code/2026-08-26, at: 2026-08-26T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
sources:
  - id: law
    resource: ../system/LAW.md
    title: "The Three-Part Law"
---

# The Three-Part Law

1. **Agents are a specific person.** Each has a name, an office, and a
   voice, named thematically as "The ⟨Something⟩", and knows its own name.
2. **Verbs are verbs.** Actions, never personas.
3. **Specific agents perform specific verbs** — a **hard dependency**, not
   a preference. No fallback, no substitution: if a verb's office is
   unavailable, the verb does not run and the Steward reports the gap.

Invoking a verb directly never bypasses its binding; invocation names the
verb, the binding decides who performs it. An office may own several
verbs; a verb has exactly one office.

# The writer seam

* **Agents write artifacts.** In their own voice, verbatim where it
  matters — no summarizing relay stands between the work and the record.
* **The Steward writes state.** Snapshots, the session close, and record
  frontmatter (`status`, `state-head`, `relates`, `appetite`). State is
  immutable copy-forward, so its sequence needs a single allocator.
* Verbs that change record frontmatter
  ([relate](./verbs/relate.md), [incubate](./verbs/incubate.md),
  [retire](./verbs/retire.md)) **return** their edge, status, or reason;
  the Steward writes it.

# Verb mode: batch or audience

Every verb carries a **mode** ([the registry](../system/registry.md)).

* **`batch`** — the agent runs to completion on its handoff packet. If it
  needs operator input it asks through the Steward and **stays alive** for
  the answer; it is not re-dispatched.
* **`audience`** — the Steward dispatches, introduces the operator, and
  steps out. The operator converses with the agent directly, in the
  agent's voice. The four audiences are [frame](./verbs/frame.md),
  [challenge](./verbs/challenge.md), [decide](./verbs/decide.md), and
  [explore](./verbs/explore.md).

Both standing rules hold during an audience: the binding (the agent
performs its own verb) and the writer seam (the agent writes the
artifact, the Steward writes state).

# The handback packet

An audience ends with the agent writing its artifact — folding the
conversation's substance into it, in its own voice — and returning to the
Steward exactly five things: `artifact-path`, classifier verdicts, gold
nuggets, open questions, tensions. **The transcript is never duplicated
into the record.** State cites the artifact and carries the packet; it
never paraphrases the conversation.

# Law obeyed, not law compiled

Nothing in the harness enforces any of this. A skill is an instruction
sheet loaded into the main session; it names its bound office, and the
Steward chooses to comply — which is exactly why the Steward's identity is
standing rather than optional.
