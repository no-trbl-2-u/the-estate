# The Three-Part Law

Locked by T, 2026-08-25. This governs every future addition to the system.

1. **Agents are a specific person.** Each has a name, an office, and a voice.
   Named thematically, in the form "The ⟨Something⟩". An agent knows its own
   name: its definition opens "You are The ⟨Name⟩."
2. **Verbs are verbs.** `capture`, `frame`, `challenge`, `seed` — actions, never
   personas. A verb is never named "The ⟨Something⟩."
3. **Specific agents perform specific verbs.** The binding is a **hard
   dependency**, not a preference: a verb is performed by its bound agent and
   by no one else. If that agent is unavailable, the verb does not run — the
   Steward reports the gap rather than substituting.

## Why hard, not soft

Consistency of voice and result: the same verb performed by the same person
every time. And forward-compatibility — when agents are granted specific tools,
a verb's capabilities become knowable from its binding alone. A soft fallback
would silently produce a differently-capable result under the same name.

## One front door, not one door

**The Steward is the front door, not a gate.** The operator is expected to
arrive by greeting the Steward, who knows the portfolio, proposes what to do,
and dispatches. But every verb remains directly invocable for an operator who
already knows what they want.

The goal is **no memorization required**, not manual invocation forbidden.

Invoking a verb directly does not bypass its binding: `/challenge` still runs
as The Advocate. Invocation names the verb; the binding decides who performs
it, always.

An agent may own several verbs. A verb has exactly one agent.

## Who writes what

The single most important operational rule, and the one that keeps the record
consistent:

- **Agents write artifacts.** An agent's output is its own — its voice, its
  findings, verbatim where it matters. No summarizing relay stands between the
  work and the record.
- **The Steward writes state.** `state/` snapshots and the session close belong
  to the Steward alone. State is immutable copy-forward, so its sequence needs
  a single allocator; and the close protocol ("what was established, what is
  still open, the honest current state") requires the whole-session view that
  only the Steward has.

Agents return findings to the Steward; the Steward narrates the session. Where
fidelity matters the artifact carries it; where perspective matters the state
carries it.

## Where the law lives

This file is the single source of truth, and **every agent reads it directly**.
It deliberately does not live in `AGENTS.md`: that file loads into the main
session, but a spawned agent runs on its own definition and never sees it — so
law placed there would be invisible to exactly the population it binds.
`AGENTS.md` points here; agent definitions open by reading here.
