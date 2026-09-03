---
type: Decision Record
title: "ADR 0034"
description: "/onboard is clerical intake for the mature project: it writes a project shell and parks supplied material as slips on the project's own front step — no artifacts, no records, no verbs, no mid-funnel entry."
tags: [adr, decision]
generated: { by: claude-code/2026-09-03, at: 2026-09-03T00:00:00Z }
---

# ADR 0034: `/onboard` — clerical intake for the mature project

**Status:** accepted · **Date:** 2026-09-03 · **Source:** T's direction, stated
in session ("a skill called '/onboard' or '/adopt' that takes a v6 version of
an idea and onboards it into idea-estate as a project with no ideas yet")

## Context

ADR 0033 built the container — a project directory with its own `ideas/` and
`exports/` — and deliberately deferred the interesting decision: how a
project that is "already on v6" *enters*. Its PRDs, references, and running
codebase exist; its Framing and Horizon are latent in material the operator
already has; and the estate's only doors were a `capture` that types
everything as a raw Spark and a return path (ADR 0029) that requires a
provenance stamp the outside project never had.

The wiped record `idea-0002-operator-supplied-material` (archive tag
`ideas-archive-2026-09-03`) was opened to settle exactly this, and held two
readings in tension: *(A)* any outside material entering is `research`;
*(B)* the verb is a **commission**, not a **channel**. This ADR settles it:
both were half right. Material needs a **channel** — a place to land whole,
untyped, unedited — and the channel already exists: the slip (ADR 0023).
What is done *with* the material afterward is a **commission** for the
ordinary verbs, each of which becomes transcription-priced when the answer
is already written down.

The temptation this ADR exists to refuse is mid-funnel entry: admitting a
mature project "at Horizon-shape" because writing a Framing for it feels
like ceremony. A Horizon is produced by `envision` or it is not a Horizon —
the type system's one load-bearing rule is that artifacts are produced by
their verbs, and a shortcut here unbuilds it quietly.

## Decisions

**1. `/onboard` is clerical, not a bound verb — the `jot` precedent.**
Signature `(Text, [Material]) → (Project, [Slip])`, performed in the
Steward's voice, `run: inline`. `Text` is the operator's origin words;
`Material` is operator-supplied documents — both boundary inputs, on the
left edge only. It produces **no artifact** — a project shell is a
container and a slip is pre-artifact — so the hard-binding law does not
reach it (ADR 0023), and no office is bound. The moment onboarded material
is read *for* something, that is a verb, and it runs as itself.

**2. No mid-funnel entry — the funnel is run, cheaply.** Onboarding creates
**a project with no ideas yet**. The first record still starts with
`capture`; a Framing is still written by `frame`; a Horizon by `envision`.
What changes is the price: each verb reads the parked material and
*transcribes* what the project already knows instead of discovering it.
Reachability then ranks the record honestly — few steps remain and each
completes a large fraction — with no special entry rule to maintain.
`research` over the material is the natural first commission: supplied
PRDs are sources, and `Findings` is the type for gathered information
with its sources (ADR 0018).

**3. Material parks on the project's own front step:**
`projects/NNNN-slug/inbox/`, one slip per supplied piece, the operator's
material **verbatim** — jot's fidelity discipline, with even more to lose.
Slip format is unchanged (`jotted:`, `status:`, `became:`) plus one field
for onboarded material:

```yaml
source: ""    # where this came from: a path, a URL, "pasted", "spoken"
```

This **amends the exclusivity in ADR 0033's inbox clause, not the clause**:
the root `inbox/` remains the home of the stray thought, which is
pre-project by nature. Material that arrives *with* its project is not
pre-project, and scope is location (ADR 0033) — putting it at the root
with a `project:` pointer would be the two-homes defect that ADR refused.

**4. What onboard asks, and what it never does.** It asks T for the
project's identity — title, the Origin words verbatim, appetite, `target:`
(the once-per-project answer to the Sower's question, ADR 0033), and
standing refusals if T has them. It confirms what landed, names the road
ahead in one breath (pending slips, consumed by `capture` or `research`
when T opens the first record), and stops. It never summarizes, tidies, or
excerpts the material; never creates a record; never runs a verb; never
proposes a route beyond that one breath — the deferral is the design,
exactly as at the root inbox.

**5. Checked and shown, not declared.** The validator applies the slip
checks to every project's `inbox/` exactly as at the root. The generated
`INDEX.md` gains a **Front step** section — each slip with its status,
source, and what it became. The UI carries the pending count on the
project's band. An onboarded project is legible as "material waiting"
rather than mistaken for an empty one.

## Rejected alternatives

**A typed `onboard` verb producing artifacts** (`Material → Findings`, or a
`Horizon` directly). Every artifact lives on a record; onboard runs before
any record exists. It would be the one verb producing neither an artifact
nor a status transition — a hole in the law wearing a binding.

**Mid-funnel entry at Horizon-shape.** Refused above; recording it as
rejected here so the next reader does not reopen it from scratch. The cost
it avoids is one transcription-priced session; the cost it incurs is the
first artifact whose producing verb never ran.

**An untyped `material/` directory.** A pile inside the walls. The slip
already is the estate's typed name for "operator words made durable while
they wait for a verb" — inventing a second, untyped parking place would
strand the material outside the processing discipline (stamped, never
deleted) that slips already carry.

**Root inbox with a `project:` field.** Two homes for scope. Rejected by
the same rule as ADR 0033 decision 2.

**Naming it `/adopt`.** T offered both names; `adopt` already means
something here — the warm adopt path is how a *Seed's recipient* takes the
kit in (ADR 0030). One word, one meaning; the inbound door is `onboard`.

## Consequences

- `.claude/skills/onboard/SKILL.md` is new, with jot-pattern frontmatter;
  `system/registry.md` regenerated (the registry is a view, ADR 0028).
- `scripts/validate-estate.mjs`: slip checks run over every tree's inbox.
- `scripts/generate-project-index.mjs`: the Front step section.
- The UI's `ProjectInfo` gains `pendingMaterial`; the Grounds band and
  shelf group header show it when non-zero.
- `projects/README.md`, `inbox/README.md`, `system/TYPES.md`, and
  `docs/GLOSSARY.md` updated; `AGENTS.md`'s boundary now names project
  creation beside record creation.
- ADR 0033's "inbox stays at the root" is amended as stated in decision 3;
  its ADR text stands unedited, per the law.
- What this deliberately does not build: automation that walks a codebase
  or fetches URLs into slips. Onboard parks what T hands it; a richer
  ingest that *reads* the project is a commission for `research` once a
  record exists to file Findings on.
