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

## One entrypoint

**The operator invokes the Steward and nothing else.** Verbs are not
user-facing commands; they live in `system/verbs/` as agent-owned documents,
deliberately outside `.claude/skills/` so that no verb appears as a slash
command. The Steward decides which verb runs, dispatches it to the agent that
owns it, or connects the operator to an agent they ask for by name.

An agent may own several verbs. A verb has exactly one agent.
