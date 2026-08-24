# think-tank

A general-purpose AI-assisted brainstorming repository for capturing, developing, and tracking ideas across their full life cycle.

## What it is

think-tank is a structured workspace where ideas are first-class, durable objects — not ephemeral chat logs. An idea can be captured, framed, explored, challenged, connected to other ideas, distilled into an artifact, incubated, or retired. Each session advances the idea and leaves an explicit, queryable trail of how it got there.

The organizing model is a **graph of thought**: ideas are nodes, sessions are transformations, and edges encode lineage — branching, merging, connecting, absorbing. The repository is the authoritative record.

## What it is not

- Not a task tracker or project manager (no mandatory action plans).
- Not a document generator (no forced PRD or spec output).
- Not a chat interface or ephemeral scratch pad.
- Not specific to any domain, team, or technology.

## Graph-of-thought model

Each **Idea Record** is a durable node in the graph. It holds:

- The original prompt and context that created it
- A log of sessions (transformations) applied to it
- Current state (active, incubating, retired, merged, etc.)
- Lineage edges to parent, child, sibling, and related records
- Optional artifacts produced along the way

Sessions apply one **mode** (e.g. `explore`, `challenge`, `distill`) and optionally one or more **lenses** (e.g. `technical`, `ethical`, `commercial`). The mode determines what kind of cognitive work happens; the lens biases the angle. The output may be an artifact, updated thinking, or nothing beyond the session log itself. All are valid.

## Status

**Vision / bootstrap stage.** The conceptual model and design intent are documented here. No harness, CLI, or agent infrastructure exists yet. See [BUILD-PROMPT.md](BUILD-PROMPT.md) for the master prompt that will guide an implementation agent.

## Files

| File | Purpose |
|------|---------|
| [VISION.md](VISION.md) | Full product vision, principles, non-goals, success criteria |
| [BRAINSTORM.md](BRAINSTORM.md) | Running log of established decisions and open questions |
| [BUILD-PROMPT.md](BUILD-PROMPT.md) | Master prompt for the implementation agent |
| [AGENTS.md](AGENTS.md) | Operational guidance for agents working in this repo |
| [docs/idea-pipeline.html](docs/idea-pipeline.html) | Approved visual of the idea pipeline (do not modify) |
