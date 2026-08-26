> **Historical record.** This log captured the design sessions that produced
> the 10-question interview brief. The interview has since been conducted and
> the system built; several decisions below were superseded by it. The current
> law is [system/LAW.md](system/LAW.md), the current intent is
> [VISION.md](VISION.md), and every superseding decision is recorded in
> [docs/adr/](docs/adr/). Preserved unedited — this is lineage, and lineage is
> never discarded.
>
> **Superseded here:** the memory-first framing (now extraction-first, ADR
> 0001); six hand-authored edge types (now derived, `relates` alone authored,
> ADR 0005); seventeen modes and sixteen lenses (now seventeen verbs and six
> lenses); "mode/lens/output type" (now verb/lens/**shape**, with type set by
> the verb, ADR 0014).
>
> **Named `think-tank` throughout.** The project was renamed **The Estate**
> on 2026-08-26 (ADR 0016). Every occurrence below is left as written —
> this is lineage, and lineage is never discarded.

---

# Brainstorm Log

This file is a faithful running log of what has been established through collaborative design sessions between T (the operator) and the Judge (the design collaborator). It distinguishes settled decisions from provisional names and unresolved choices.

---

## Settled decisions

### The primary object is the durable Idea Record

The fundamental unit is not a document, task, or chat session — it is the **Idea Record**: a persistent, queryable node that survives across sessions, agents, and time. Records are the thing being managed. Artifacts (PRDs, specs, research briefs, etc.) are optional outputs of records, not the purpose of the system.

### What an Idea Record contains

An Idea Record preserves:

- The original **prompt and context** that initiated the idea
- A **session log**: an ordered history of cognitive work applied to the record
- **Tensions**: unresolved conflicts, competing framings, and open questions
- **Current state**: an explicit, human-readable declaration of where the idea stands
- **Lineage**: typed edges connecting it to parent ideas, branches, merges, absorbed streams, and related records
- **Optional artifacts**: any produced documents, structures, or designs

This is the conceptual content of an Idea Record. The exact schema and which fields are structurally required remain open design questions for the 10-question interview.

### Sessions as inputs and outputs (stream continuity)

A session's output can become the input to a later session. This creates **idea streams** — chains of sessions advancing a record over time. Streams can:

- **Branch**: one record forks into two independent records
- **Merge**: two records combine into one
- **Split**: a session separates concerns that were conflated
- **Absorb**: a record is subsumed into another; it remains preserved, while its exact terminal disposition is a schema decision
- **Relate**: a non-hierarchical connection is drawn between two records
- **Incubate**: a stream is intentionally paused for future return
- **Retire**: a stream is closed with a terminal state

All of these produce lineage edges. The graph grows organically.

### Mode / lens / output type are distinct dimensions

These three dimensions must not be conflated:

| Dimension | What it controls | Examples |
|-----------|-----------------|---------|
| **Mode** | The cognitive operation | `explore`, `challenge`, `decide` |
| **Lens** | The perspective bias | `technical`, `ethical`, `adversarial` |
| **Output type** | The artifact produced (if any) | PRD, decision record, none |

Mode does not determine output type. Lens does not determine mode. All three are independently chosen per session.

### Current session modes

These are the current recommended core modes. Their functions are established; exact names, aliases, splits, and combinations remain provisional until implementation design:

| Mode | Operation |
|------|-----------|
| `capture` | Record a raw idea with minimal processing |
| `frame` | Define the problem, question, or opportunity |
| `explore` | Open-ended development without commitment |
| `interrogate` | Surface assumptions, ask hard questions |
| `research` | Structured information gathering |
| `connect` | Explicitly link this record to another |
| `distill` | Condense accumulated thinking into a sharper form |
| `challenge` | Adversarial pressure-test |
| `compare` | Evaluate two or more approaches or ideas |
| `decide` | Drive toward an explicit, recorded decision |
| `specify` | Produce a formal or semi-formal specification |
| `architect` | Design a system or structural solution |
| `phase` | Break a direction into concrete, sequenced phases |
| `experiment` | Design a test, prototype, or trial |
| `review` | Evaluate an existing artifact or decision |
| `incubate` | Intentionally park the idea for future return |
| `retire` | Close the idea with a terminal state |

### Available lenses (optional, combinable)

Lenses bias the angle of a session. They are additive and never mandatory.

`user` · `technical` · `creative` · `commercial` · `operational` · `security` · `ethical` · `accessibility` · `competitive` · `narrative` · `psychological` · `organizational` · `legal` · `minimalist` · `long-term` · `adversarial`

### Output types (not exhaustive)

- PRD (product requirements document)
- Concise molecular phases (sequenced work breakdown)
- Full AI harness architecture
- Research brief
- Decision record
- Prototype or experiment design
- Unresolved thinking (the session log itself is the artifact)
- No artifact (a valid and explicit outcome)

### Every session closes with explicit state and the next-question

A session must not trail off. Every session closes with:

1. A summary of what was established in this session
2. An explicit current state for the Idea Record
3. Open questions that remain unresolved
4. The exact user-facing question: **"What would you like to do next with this idea?"**

Valid answers the operator may give:
- Continue in the current mode
- Switch to a different mode
- Branch this record
- Connect it to another stream
- Produce a specific artifact
- Incubate the idea
- Retire the idea
- Do nothing (leave the record as-is)

All answers are valid. The system does not push toward any particular response.

### Suggestions are advice, not assignments

When the system (or any agent) suggests a next step, that suggestion is informational. It does not create a task, queue work, or trigger anything. Only explicit operator selection causes action.

### `connect` is a first-class operation

Graph lineage is central to the system. Connecting two Idea Records is a first-class mode, not an afterthought or metadata tag. It produces a typed edge in the lineage graph and may warrant its own session log entry describing why the connection was drawn.

### A central repo-aware agent is required

There must be one **central agent** (provisionally named the **Think Tank Steward**) that knows the repository deeply and serves as the stable entrypoint. This agent:

- Maintains a current mental model of records, conventions, capabilities, session modes, artifacts, agents, skills, and processes
- Determines whether to act directly or route to a specialist
- Creates explicit handoff packets when routing
- Detects capability gaps and surfaces them rather than silently filling them with guesswork
- Does not pretend to be every specialist itself

This is not a cosmetic router. It is the entity that makes the system navigable across arbitrarily many records and a growing set of specialist agents.

---

## Provisional names (may change through implementation design)

- **Think Tank Steward** — the central routing agent (name is a placeholder)
- State vocabulary (`active`, `incubating`, `retired`, `merged`, `branched`) — names are working labels
- Edge type names (`parent`, `branch`, `merge`, `absorbed`, `relates`, `incubated-from`) — working labels
- The schema format for Idea Records — not yet designed
- Whether modes are enforced as a closed enum or open strings — not yet decided

---

## Open questions

- **Schema format**: How are Idea Records stored? Markdown with frontmatter? JSON? A hybrid? What fields are required vs. optional?
- **Record identity**: How are IDs generated and maintained across forks and merges?
- **Retrieval**: How does the operator find a specific record or explore the graph? Full-text search? Mode/tag filtering? Visual graph browsing?
- **Steward freshness**: How does the Steward keep its mental model current as records accumulate? Eager indexing? On-demand read? Cached summaries?
- **Artifact co-location**: Are artifacts stored inside the record's directory, alongside it, or in a separate artifacts tree?
- **State machine formalism**: Should state transitions be enforced by the harness, or is current state advisory/descriptive?
- **Conflict resolution**: If two sessions on the same record run concurrently (e.g., two branches of the same session), how are conflicts handled?
- **Mode extensibility**: Is the mode list a closed vocabulary enforced by the system, or can operators define custom modes?
- **Lens extensibility**: Same question for lenses.
- **First implementation scope**: What is the smallest coherent subset of the model that can be built and used meaningfully?
- **Repository layout**: How are records, session logs, artifacts, and the lineage index organized in the file system?

---

## What has not been decided

- Any implementation technology (language, framework, agent SDK, file format)
- Whether the harness is a CLI, a set of Claude skills, a standalone agent, or a combination
- Specific agent architecture beyond the Steward requirement
- Whether specialist agents are pre-populated or added on demand
- Indexing and search strategy
- Any external integration (no external dependencies have been approved)
