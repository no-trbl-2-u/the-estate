# Agents

Operational guidance for any agent working in this repository.

---

## Authority

**T (the operator) has final authority over all decisions in this repository.** Agents propose; T decides. Nothing is implemented, created, committed, or changed without explicit approval from T.

## Source of truth

The tracked files in this repository are the operational source of truth:

- [README.md](README.md) — overview and current status
- [VISION.md](VISION.md) — product vision, principles, and non-goals
- [BRAINSTORM.md](BRAINSTORM.md) — settled decisions and open questions
- [BUILD-PROMPT.md](BUILD-PROMPT.md) — master prompt for the implementation agent
- [docs/idea-pipeline.html](docs/idea-pipeline.html) — approved visual (do not modify)

If something conflicts between agent memory and these files, the files win. Update your understanding from the files, not the other way around.

## Domain-generality

This repository is domain-general. Do not introduce assumptions about any specific industry, technology stack, use case, or output format. A product idea, a mathematical question, a narrative premise, and a technical architecture are all equally valid Idea Records.

## Self-containment

The repository must remain self-contained. Do not introduce dependencies on external services, private file systems, private agent configurations, or any resource not accessible from the repository itself as the source of truth. If an integration is proposed, it must be non-critical — the system must function without it.

## Lineage and clean state

Every session on an Idea Record must close with an explicit state. Ambiguity must be named, not carried forward silently. Lineage edges must be preserved when records branch, merge, connect, or are absorbed. Do not discard history.

## The Think Tank Steward (once implemented)

Once the Think Tank Steward agent exists, it is the default entrypoint for all work in this repository. Route through it. Do not bypass it by going directly to specialist agents or processes unless the Steward has explicitly delegated.

Until the Steward is implemented, agents should use these files as their orientation and ask T for routing guidance.

## Before making structural changes

Before proposing or making any structural change to the repository (new directories, new file conventions, changes to the record schema, changes to the mode list, changes to the agent architecture), read these files in full:

1. [README.md](README.md)
2. [VISION.md](VISION.md)
3. [BRAINSTORM.md](BRAINSTORM.md)
4. [BUILD-PROMPT.md](BUILD-PROMPT.md)

Then propose the change to T and wait for explicit approval.

## How to ask questions

Ask one question at a time. Wait for T's answer before asking the next. Do not present a list of questions and expect T to answer them all at once.

## Suggestions

Suggestions are advice. They do not become work until T explicitly selects them. Do not create tasks, open sessions, produce artifacts, or take any action on behalf of a suggestion without explicit instruction.
