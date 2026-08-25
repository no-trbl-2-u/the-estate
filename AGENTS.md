# Agents

Operational guidance for any agent working in this repository.

---

## Authority

**T (the operator) has final authority over all decisions in this repository.** Agents propose; T decides. Nothing is implemented, created, committed, or changed without explicit approval from T.

## Source of truth

**[system/LAW.md](system/LAW.md) is the governing law.** Read it directly — it
does not reach a spawned agent through this file, because a subagent runs on its
own definition and never loads `AGENTS.md`. Any agent bound to a verb must read
`system/LAW.md` itself.

The operational source of truth, in precedence order:

1. [system/LAW.md](system/LAW.md) — the three-part law, the writer seam, the
   three dimensions
2. [system/](system/) — types and the Seed contract, lenses, scoring, the
   Steward spec, the routing registry, the falsifiers
3. [VISION.md](VISION.md) — intent, principles, non-goals, success criteria
4. [docs/adr/](docs/adr/) — every major decision with its reasoning
5. [README.md](README.md) — orientation

[BRAINSTORM.md](BRAINSTORM.md) and [BUILD-PROMPT.md](BUILD-PROMPT.md) are
**historical records**, preserved unedited. Where they conflict with `system/`,
`system/` wins. [docs/idea-pipeline.html](docs/idea-pipeline.html) is an
approved visual — do not modify.

If something conflicts between agent memory and these files, the files win.

## Domain-generality

This repository is domain-general. Do not introduce assumptions about any specific industry, technology stack, use case, or output format. A product idea, a mathematical question, a narrative premise, and a technical architecture are all equally valid Idea Records.

## Self-containment

The repository must remain self-contained. Do not introduce dependencies on external services, private file systems, private agent configurations, or any resource not accessible from the repository itself as the source of truth. If an integration is proposed, it must be non-critical — the system must function without it.

## Lineage and clean state

Every session on an Idea Record must close with an explicit state. Ambiguity is
named, never carried forward silently.

State is **immutable**: copy the latest snapshot forward and update the copy.
Never edit a prior state. Lineage is therefore **derived** from `inputs:`/
`outputs:` chains — record them faithfully on every artifact, because a missing
link cannot be reconstructed. `relates` is the only hand-authored edge. Nothing
is ever deleted; retiring preserves the record whole.

## The Think Tank Steward

The Steward (`/steward`) is the front door for all work in this repository. It
greets, orients, derives routes, dispatches to the agent who owns each verb, and
**writes all state**. It performs no bound verb itself.

Verbs are directly invocable — the goal is that nothing must be *memorized*, not
that invocation is forbidden — but invoking a verb never bypasses its binding:
`/challenge` runs as The Advocate either way.

**Agents write artifacts; the Steward writes state.** An agent's output belongs
to the agent, in its own voice. `state/` snapshots and the session close belong
to the Steward alone.

## Before making structural changes

Before proposing or making any structural change (new directories, file
conventions, record schema, the verb list, the agent roster), read in full:

1. [system/LAW.md](system/LAW.md)
2. [system/TYPES.md](system/TYPES.md) and [system/registry.md](system/registry.md)
3. [VISION.md](VISION.md)
4. [docs/adr/](docs/adr/) — at minimum the index

Then propose the change to T and wait for explicit approval. Adding a verb means
adding or naming its agent: a verb without a bound agent does not run.

## How to ask questions

Ask one question at a time. Wait for T's answer before asking the next. Do not present a list of questions and expect T to answer them all at once.

## Suggestions

Suggestions are advice. They do not become work until T explicitly selects them. Do not create tasks, open sessions, produce artifacts, or take any action on behalf of a suggestion without explicit instruction.
