# Vision

## Mission

think-tank exists to make ideas durable, explorable, and connectable — without forcing them toward any particular output. An idea that sits in incubation for six months and then becomes a one-line connection to a different idea has succeeded. An idea that evolves into a full architecture document has also succeeded. The system does not judge by artifact production.

## Problem being solved

Current AI-assisted thinking is ephemeral. Sessions start fresh, context is lost, and the same territory gets re-explored because there is no record of prior work. When ideas do produce artifacts, those artifacts float free of the reasoning that produced them. Branches are forgotten. Dead ends are re-walked. Connections between ideas go unnoticed.

think-tank makes the graph of thought a first-class, persistent object.

## Core principles

**Ideas are the primary object.** The durable Idea Record — not a document, spec, or task — is what the system manages. Artifacts are optional outputs of records, not the purpose of records.

**Clean state between sessions.** Every session closes with an explicit state declaration. The next session inherits a clear starting point, not accumulated ambiguity.

**Lineage is non-negotiable.** How an idea got where it is matters as much as where it is. Edges — parent, branch, merge, absorb, relate — are first-class data.

**Suggestions are not assignments.** The system may propose next steps. It does not act on them without explicit selection by the operator.

**Domain-general.** The repository imposes no domain, language, or industry assumptions. A product idea, a mathematical conjecture, a narrative premise, and a technical architecture are all valid Idea Records.

**Self-contained.** The repository is the source of truth. Nothing critical lives only in an external service, private file system, or agent memory.

## Intended experience

The operator arrives with something — a rough thought, a half-formed question, a concrete problem. They open a session, pick a mode, and work. The system guides without directing. At the end of the session, the operator sees a clear summary of what was established, what remains open, and the explicit question: *What would you like to do next with this idea?*

The operator can continue, branch, connect, produce an artifact, incubate, retire, or do nothing. All are valid. Nothing happens automatically.

Over time, the graph grows. The operator can retrieve any idea, resume from its last known state, see how it relates to others, and branch from any recorded session state. The branch records the exact historical session snapshot used as its origin and does not alter the original. An idea retired two years ago can be revived as a branch under the same law.

## The graph model in detail

### Nodes: Idea Records

Each Idea Record contains:

- **Identity** — unique ID, title, creation timestamp
- **Origin** — the prompt or context that initiated it
- **Session log** — ordered list of sessions applied to this record
- **Tensions** — unresolved conflicts, competing framings, and open questions
- **Current state** — one of: `active`, `incubating`, `retired`, `merged`, `branched` (provisional state names)
- **Lineage edges** — typed connections to related records
- **Artifacts** — optional produced documents, structures, or outputs

### Edges (lineage types)

| Edge type | Meaning |
|-----------|---------|
| `parent` | This record branched from another |
| `branch` | A child record forked from this one |
| `merge` | Two streams combined into this record |
| `absorbed` | This record was subsumed into another |
| `relates` | Loose conceptual connection, non-hierarchical |
| `incubated-from` | Revived from a retired or dormant state |

Edge vocabulary is provisional and expected to evolve through the 10-question interview in [BUILD-PROMPT.md](BUILD-PROMPT.md).

### Sessions as transformations

A session is a discrete work unit applied to one or more Idea Records. It has:

- A **mode** (what cognitive operation to perform)
- Optional **lenses** (which perspective(s) to apply)
- An **output type** (what, if anything, is produced)
- A **closing state** (explicit summary and next-question)

Sessions can take one record as input and produce a branch (one-to-many), take two records and produce a merge (many-to-one), or simply advance the record in place.

## Session modes (current list, not exhaustive)

`capture` — record a raw idea with minimal processing  
`frame` — define the problem, question, or opportunity space  
`explore` — open-ended development without commitment  
`interrogate` — surface assumptions, ask hard questions  
`research` — structured information gathering  
`connect` — explicitly link this record to another  
`distill` — condense accumulated thinking into a sharper form  
`challenge` — adversarial pressure-test  
`compare` — evaluate two or more approaches or ideas  
`decide` — drive toward an explicit, recorded decision  
`specify` — produce a formal or semi-formal specification  
`architect` — design a system or structural solution  
`phase` — break a direction into concrete, sequenced phases  
`experiment` — design a test, prototype, or trial  
`review` — evaluate an existing artifact or decision  
`incubate` — intentionally park the idea for future return  
`retire` — close the idea with a terminal state  

This list is provisional. Modes may be renamed, split, or combined through implementation design.

## Lenses (optional perspective filters)

Lenses are not modes — they bias the angle of a session without changing its operation. Examples:

`user` · `technical` · `creative` · `commercial` · `operational` · `security` · `ethical` · `accessibility` · `competitive` · `narrative` · `psychological` · `organizational` · `legal` · `minimalist` · `long-term` · `adversarial`

Lenses are additive and optional. A session may apply zero, one, or several.

## Output types

Output types describe the artifact (if any) a session produces. They are not mandatory. Valid outputs include:

- PRD (product requirements document)
- Concise molecular phases (sequenced work breakdown)
- Full AI harness architecture
- Research brief
- Decision record
- Prototype or experiment design
- Unresolved thinking (the session log itself is the output)
- No artifact (session advances the record without producing a document)

The session mode does not dictate the output type. An `explore` session may produce a PRD; a `specify` session may produce nothing but a clearer understanding of what is unknown.

## Clean-state doctrine

Every session must close with:

1. A summary of what was established
2. An explicit current state for the Idea Record
3. Open questions that remain unresolved
4. The exact user-facing question: **"What would you like to do next with this idea?"**

Sessions do not trail off. Ambiguity is named, not silently carried forward.

## Non-goals

- **No forced PRD.** The system does not assume an idea is headed toward a product.
- **No mandatory action plan.** Exploration without commitment is a valid end state.
- **No output-type siloing.** Mode does not determine output.
- **No opaque autonomous task creation.** Suggestions do not become work without explicit selection.
- **No giant taxonomy.** Mode and lens lists will be kept to a usable size.
- **No external dependencies as single source of truth.** The repository must be self-contained.
- **No domain lock-in.** The system is not specialized for software, products, creative writing, or any other domain.

## Success criteria

- An operator can open any Idea Record and immediately understand its current state, its history, and what was last open.
- A new session can be started from any prior state without re-explaining the idea from scratch.
- Two ideas can be explicitly connected, and that connection is queryable.
- An idea can be retired, revived, and branched without altering the original.
- A session can end with no artifact and no action, and that is treated as a valid outcome.
- The system never creates tasks, assignments, or work items without explicit operator selection.
