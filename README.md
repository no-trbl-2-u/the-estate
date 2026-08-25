# think-tank

An AI-assisted idea foundry. Ideas enter loose and leave as **Seeds** — an
elaborated six-month vision plus a rough path — ready to be built somewhere
else.

## What it is

think-tank is a structured workspace where ideas are first-class, durable
objects rather than chat logs. An idea is captured, framed, envisioned,
attacked, connected to other ideas, and eventually **extracted** as a Seed that
carries out to a real project. Every session advances the idea and leaves an
explicit, queryable trail.

State is **immutable**: each session copies the last snapshot forward. Time
travel is opening an older file; branching is copying forward from one, and the
original is never altered because nothing is ever altered.

## What it is not

- Not a task tracker (no mandatory action plans).
- Not a document generator (no forced PRD).
- Not a chat interface or scratch pad.
- Not specific to any domain, team, or technology.

## How you use it

Greet **The Steward** — the front door. It knows the portfolio, offers a
shortlist rather than a wall of records, and proposes the verb that fits what
you said, naming the agent who performs it and the runner-up. Verbs are also
directly invocable: the goal is that nothing must be *memorized*, not that
invocation is forbidden.

```
/steward          the front door — start here
/survey           what deserves attention next
/challenge        have The Advocate find the holes
```

## The law

Three rules govern every addition ([system/LAW.md](system/LAW.md)):

1. **Agents are a specific person** — named, self-aware, thematic to The Estate.
2. **Verbs are verbs** — never personas.
3. **Specific agents perform specific verbs**, as a hard dependency. No
   fallback, no substitution. If a verb's agent is unavailable, the verb does
   not run and the Steward reports the gap.

Two rules follow: **agents write artifacts, the Steward writes state**; and
**grade, never gate** — quality is classified structurally, never enforced.

## The estate

| Agent | Verbs |
|---|---|
| The Steward | — (front door; writes all state) |
| The Gardener | `capture`, `frame` |
| The Architect | `envision` |
| The Surveyor | `chart`, `phase` |
| The Forager | `explore` |
| The Distiller | `distill` |
| The Advocate | `challenge` |
| The Factor | `research` |
| The Assayer | `compare`, `review` |
| The Chancellor | `decide` |
| The Cartographer | `relate`, `survey` |
| The Keeper | `incubate`, `retire` |
| The Sower | `seed` |

## Files

| Path | Purpose |
|---|---|
| [VISION.md](VISION.md) | Product vision, principles, non-goals, success criteria |
| [system/LAW.md](system/LAW.md) | The governing law. Every agent reads it directly |
| [system/TYPES.md](system/TYPES.md) | Verb families, artifact types, the Seed contract, output shapes |
| [system/LENSES.md](system/LENSES.md) | The six lenses |
| [system/SCORING.md](system/SCORING.md) | Portfolio scoring: notice more, not finish more |
| [system/STEWARD.md](system/STEWARD.md) | Full Steward specification |
| [system/registry.md](system/registry.md) | Routing registry: verbs, agents, bindings |
| [system/FALSIFIERS.md](system/FALSIFIERS.md) | What would prove this wrong, and by when |
| [ideas/](ideas/) | The records. `ideas/SURVEY.md` is the sitemap |
| [exports/](exports/) | The departure lounge for Seeds |
| [docs/adr/](docs/adr/) | Every major decision, in order |
| [BRAINSTORM.md](BRAINSTORM.md) | Historical design log |
| [BUILD-PROMPT.md](BUILD-PROMPT.md) | Historical build brief |
| [AGENTS.md](AGENTS.md) | Orientation for agents in this repo |
