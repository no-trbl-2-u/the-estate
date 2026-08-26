> **Historical record.** This brief was written to hand to an implementation
> agent. Requirement A — the 10-question adaptive interview — was conducted on
> 2026-08-25, its synthesis confirmed, and the system built. Requirement B (one
> central Steward) is satisfied and strengthened. Preserved unedited as the
> origin document.
>
> The deliverables list below was answered by [docs/adr/](docs/adr/) plus
> `system/`. Its provisional vocabularies were superseded during the interview:
> the edge table is now derived lineage (ADR 0005), and the "no large fleet of
> specialists" guardrail was overtaken by the hard-binding law, which requires
> an agent per verb (ADR 0013). The current law is
> [system/LAW.md](system/LAW.md); the current intent is [VISION.md](VISION.md).
>
> **Named `think-tank` throughout.** The project was renamed **The Estate**
> on 2026-08-26 (ADR 0016). Every occurrence below is left as written —
> this is lineage, and lineage is never discarded.

---

# Build Prompt

This is a standalone master prompt to give to an implementation agent in a fresh conversation. It fully explains what is to be designed and eventually built. The agent receiving this prompt has no prior context from the design sessions that produced it.

---

## To the implementation agent

You are being asked to design and eventually build **think-tank**: a general-purpose AI-assisted brainstorming repository. This document is your complete briefing. Read it in full before doing anything else.

**Two requirements are inviolable and must be respected before any other work:**

> **A. Before proposing architecture or editing any implementation files, conduct an adaptive interview of exactly 10 clarifying questions. Ask one question at a time. Wait for the operator's answer before forming the next question. Let each answer shape what you ask next. Do not dump all ten questions at once. After question 10, write a synthesis of what you understood, and obtain explicit confirmation of your interpretation before proceeding to any design or implementation work.**

> **B. The resulting system must have exactly one central project/repository expert agent — provisionally called the Think Tank Steward — that understands the repository through and through, serves as the stable entrypoint for all work, and routes intelligently to specialists. This agent is not a simple dispatcher. It maintains a live mental model of the repository and does not pretend to be every specialist itself.**

Everything else in this document is required context for the interview and the subsequent design.

---

## Mission and motivation

Ideas are valuable and fragile. Current AI-assisted thinking is ephemeral: sessions start fresh, context evaporates, and the same territory is re-explored because there is no durable record of prior work. When ideas do produce artifacts, those artifacts float free of the reasoning behind them. Branches are forgotten. Dead ends are re-walked. Connections between ideas go unnoticed.

think-tank exists to make ideas durable, explorable, and connectable — without forcing them toward any particular output. The repository is the authoritative record. Sessions advance ideas and leave an explicit, queryable trail. The human operator retains full authority over what happens next.

---

## Required conceptual model

You must understand and preserve these concepts exactly. They are settled design decisions, not proposals.

### Idea Record

The primary object is the **Idea Record** — a durable, persistent node. It is not a document, task, or chat log. An Idea Record contains:

- **Identity**: unique ID, title, creation timestamp
- **Origin**: the prompt or context that initiated it
- **Session log**: ordered history of sessions applied to this record
- **Tensions**: unresolved conflicts, competing framings, open questions
- **Current state**: an explicit human-readable state declaration
- **Lineage edges**: typed connections to related records (see below)
- **Optional artifacts**: any produced documents, structures, or designs

This list defines the conceptual content of an Idea Record. Do not freeze the storage schema or required/optional field rules before the interview; those remain design questions.

### Sessions

A **session** is a discrete work unit applied to one or more Idea Records. Every session has:

- A **mode** (what cognitive operation to perform)
- Optional **lenses** (which perspective(s) to apply)
- An **output type** (what artifact, if any, is produced)
- A **closing state**: explicit summary, current record state, open questions, and the user-facing question: *"What would you like to do next with this idea?"*

Sessions do not trail off. Every session closes with the exact question above.

### Inputs, transformations, outputs

A session's output can become the input to a later session. This creates idea streams — chains advancing a record over time.

### Edges and lineage

Lineage edges are typed. Working vocabulary (names provisional):

| Edge type | Meaning |
|-----------|---------|
| `parent` | This record branched from another |
| `branch` | A child record forked from this one |
| `merge` | Two streams combined into this record |
| `split` | One stream separated into multiple records |
| `absorbed` | This record was subsumed into another |
| `relates` | Non-hierarchical conceptual connection |
| `incubated-from` | Revived from a retired or dormant state |

### Clean state

Every session closes with: (1) summary of what was established, (2) explicit current state of the record, (3) open questions, and (4) the next-question. No session may end ambiguously. The next session inherits a clear starting point.

### The mode / lens / output separation

These three dimensions are independent:

- **Mode**: the cognitive operation (`explore`, `challenge`, `decide`, etc.)
- **Lens**: optional perspective bias (`technical`, `ethical`, `adversarial`, etc.)
- **Output type**: the artifact produced, if any (PRD, decision record, none, etc.)

Mode does not determine output. A session's output type is chosen independently.

### Session modes (current recommended core vocabulary)

`capture` · `frame` · `explore` · `interrogate` · `research` · `connect` · `distill` · `challenge` · `compare` · `decide` · `specify` · `architect` · `phase` · `experiment` · `review` · `incubate` · `retire`

Their functions are established. Exact names, aliases, splits, and combinations remain design questions for the interview.

### Lenses (optional, combinable)

`user` · `technical` · `creative` · `commercial` · `operational` · `security` · `ethical` · `accessibility` · `competitive` · `narrative` · `psychological` · `organizational` · `legal` · `minimalist` · `long-term` · `adversarial`

### Lawful zero-action outcomes

A session may end with no artifact and no action. The record's session log is updated and the clean-state close is written. That is a valid and complete outcome. The system must never pressure the operator toward artifact production.

### Fork / merge / recombine behavior

- **Branch**: a session on record A produces record B. The operator may branch from A's current state or any recorded historical session state. B records the exact source snapshot and a `parent` edge; A is not altered.
- **Merge**: a session takes records A and B as joint input and produces record C, which carries `merge` edges to both. A and B are not deleted; their states are updated only if the operator explicitly chooses to update them.
- **Split**: a session on record A separates conflated concerns into records B and C (or more). Every result records the exact source snapshot and a `split` edge; A is preserved.
- **Absorb**: record B is folded into record A and an `absorbed` lineage edge is recorded. B remains preserved. Whether its disposition is represented as `retired` with reason `absorbed` or as a dedicated state is an interview and schema decision, not a fact to assume.
- **Connect**: the `connect` mode draws a `relates` edge between two records. It is a first-class mode, not a metadata tag.
- **Incubate**: a record transitions to `incubating` state. It is retrievable and resumable at any time.
- **Retire**: a record transitions to a terminal `retired` state. It is preserved in the graph, not deleted.

---

## The Think Tank Steward

The Steward is the non-negotiable center of the system. It must exist before any other specialist agent is built.

### Responsibilities

- **Context indexing**: maintains a current mental model of all Idea Records, their states, lineage, session history, and artifacts. Must know whether its index is fresh or stale and surface that uncertainty honestly.
- **Routing**: determines whether to act directly (for simple queries, state reads, or mode selection) or route to a specialist agent, skill, or process.
- **Handoff packets**: when routing, produces an explicit, self-contained handoff packet for the specialist — the specialist should not need to re-read the entire record history to get started.
- **Gap detection**: when a needed capability does not exist, the Steward surfaces the gap to the operator rather than inventing a poor substitute.
- **Stable entrypoint**: the Steward's interface does not change as new specialists are added. The operator always starts with the Steward.
- **Non-impersonation**: the Steward does not perform work that belongs to a specialist. It routes and coordinates; it does not pretend.

### Routing contract

When the Steward routes work to a specialist, it must:

1. Identify the target agent/skill/process by name
2. Explain what it is routing and why
3. Produce a handoff packet (current record state, relevant context, the mode/lens/output requested)
4. Await the specialist's output before updating the record

### Freshness expectations

The Steward's mental model must include a freshness indicator. It must not answer questions about the current state of a record from stale memory. When uncertain, it reads the record. The implementation must define how and when the index is refreshed.

---

## Specialist extensibility

The Steward routes to specialists. Specialists should be added on demand, not pre-populated speculatively. The system must define a **routing registry**: a structured list of available agents, skills, and processes, with their modes, capabilities, and handoff expectations. The Steward consults the registry when routing.

New specialists can be added to the registry without changing the Steward's interface. The operator adds a specialist; the Steward learns to route to it.

Do not design a large fleet of specialists upfront. The first build should have the Steward and the minimum set of capabilities needed to demonstrate the core loop (capture → explore → close with clean state → retrieve → continue).

---

## Retrieval and continuation

The operator must be able to:

- Find a specific Idea Record by title, ID, or keyword
- Browse records by state (active, incubating, retired, etc.)
- See the lineage graph (at minimum: a record's parents, children, and related records)
- Resume from a record's last session without re-explaining the idea
- Open any prior session and read its closing state

The retrieval design is an open question to be resolved in the interview.

---

## Human authority

The operator is always in control. The system's obligations:

- Suggestions (next steps, mode recommendations, connections to draw) are informational only
- No task, assignment, or work item is created without explicit operator selection
- No session is opened, closed, or advanced without operator initiation
- No artifact is produced without operator request

The system may ask clarifying questions. It asks one at a time.

---

## Desired deliverables after the 10-question interview

After the interview and synthesis confirmation, the implementation agent should produce:

1. **Proposed information architecture** — how Idea Records, sessions, artifacts, lineage, and the index are structured
2. **Schema definitions** — field-level specification for each record type, with required vs. optional fields clearly marked
3. **State transition diagram** — all valid record states and the events that trigger transitions between them
4. **Repository layout** — the file and directory structure for records, artifacts, the lineage index, agent configuration, and templates
5. **Central Steward specification** — detailed design of the Steward's interface, internal model, routing logic, and freshness strategy
6. **Routing registry format** — the schema and initial entries for the registry the Steward consults
7. **Session templates** — one template per mode (or a parameterized template), including required fields and the close-state format
8. **Validation strategy** — how the system ensures records are well-formed, states are valid, and lineage is consistent
9. **Smallest coherent first implementation** — the minimum build that demonstrates the core loop end-to-end
10. **Phased build plan** — a sequenced plan for adding capabilities beyond the first implementation, with explicit dependencies between phases

---

## Guardrails and non-goals

The implementation must not:

- Force a PRD, spec, or any artifact as the output of any session mode
- Force an action plan as the output of any session
- Silo behavior by output type (mode ≠ output)
- Create tasks or assignments without explicit operator selection
- Build or assume a large pre-populated taxonomy of modes, lenses, or specialists
- Depend on external services, private file systems, or private agent harnesses as the source of truth
- Produce opaque autonomous behavior the operator cannot inspect or reverse

The repository must be self-contained. Everything needed to understand and operate the system lives in tracked repository files.

---

## Verification and acceptance criteria

Before the first implementation phase is considered complete:

- An operator can run a full session (capture → explore → close with clean state) on a new idea and retrieve it in a subsequent session with full context
- The Steward can route a `connect` operation between two records and the resulting edge is queryable
- Branching from a historical session state preserves that exact origin without altering the source record
- Merge, split, and absorption operations preserve every source record and produce queryable lineage
- An artifact or session result can be selected as input to a later session without copying away its provenance
- A record can be incubated and resumed without loss of context
- A retired record can be revived through an explicit, queryable lineage transition
- A session can close with no artifact and no action; the record's log reflects this as a valid outcome
- No task or assignment is created at any point without explicit operator selection
- The Steward's index freshness is reported honestly when queried
- Exactly one Steward is the stable entrypoint, and its routing contract is verified independently for an agent, a skill, and a process

---

## Stop point

Use two explicit approval boundaries:

1. After completing the 10-question interview, write a synthesis and ask the operator to confirm or correct your interpretation. Do not produce the design package until that interpretation is confirmed.
2. After confirmation, produce the proposed design package (items 1–10 above), but do not edit implementation files. Present the package, explain the major choices and unresolved trade-offs, and **stop for the operator's approval before implementation begins**.

Both boundaries are mandatory. Interview answers authorize design work only after confirmation; an approved design authorizes implementation. Do not collapse these into one step.

---

## Context files in this repository

Before the interview, read these files (in this order):

1. [README.md](README.md) — overview and orientation
2. [VISION.md](VISION.md) — full product vision and principles
3. [BRAINSTORM.md](BRAINSTORM.md) — settled decisions and open questions
4. [AGENTS.md](AGENTS.md) — operational guidance for agents in this repo
5. [docs/idea-pipeline.html](docs/idea-pipeline.html) — approved visual of the idea pipeline (do not modify)

Do not modify any of these files as part of implementation work without explicit operator approval.
