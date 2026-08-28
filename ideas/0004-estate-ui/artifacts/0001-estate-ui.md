---
id: idea-0004/artifacts/0001-estate-ui.md
type: Spark
shape: prose
lenses: []
produced-by: capture
inputs: [ideas/0004-estate-ui/idea.md]
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [frame, explore]
summary: "T wants a UI for the estate itself — a visual map of how an idea travels, with clean jumps between projects and the ideas/sub-ideas within — arriving alongside a fresh glossary that already flags two of its words as things the repo does not yet have."
---

# A UI for the estate

## The thought, as it arrived

T, 2026-08-28:

> Okay, here's where things get interesting ... I want a UI for this repo!
> I'm a visual learner and I want to see the map of how the idea is
> traveling, I want to be able to cleanly jump between projects and then
> ideas/sub-ideas within. I think what's most important to start is to define
> a few words in a glossary (ie. verb = SKILL, Project = top-level project,
> Idea = idea within a project, sub-idea = idea within the idea / potential
> branch, etc). Let's first create the glossary, then let's create an idea to
> discuss what the frontend for this application will look like

## The words worth keeping whole

**"here's where things get interesting"** — T marks this as a turn. The three
records before this one are the estate examining itself, the estate's law, and
a site for a friend. This is the first idea about *looking at* the estate
rather than working in it.

**"I'm a visual learner"** — the reason given is personal, not architectural.
The UI is not justified by throughput or tooling gaps; it is justified by how
T's own understanding works. That is the energy source of this record and any
framing that forgets it is framing a different idea.

**"the map of how the idea is traveling"** — travel, present tense, ongoing.
Not a snapshot of where an idea *is* but the path it is taking. What T wants
to see is motion.

**"cleanly jump between projects and then ideas/sub-ideas within"** — two
motions, nested: across the portfolio, then down inside a record. "Cleanly" is
the adverb doing the work — the jumping is already possible by opening files;
what is being asked for is that it stop costing anything.

**"Project ... Idea ... sub-idea"** — T's own three-level vocabulary,
proposed in the same breath as the request to define it. T suspected the words
needed pinning down before the UI could be discussed, and asked for the
glossary *first*. That ordering was T's, and it was right.

## What already happened

The first half of the message is done. `docs/GLOSSARY.md` exists — written by
the Steward, same session, at T's instruction. This record is the second half:
"then let's create an idea to discuss what the frontend for this application
will look like."

The glossary did what T asked and something more: mapping T's UI words onto
the canon, it found that two of them land on nothing.

- **"Project"** maps to Idea Record — but the estate has no grouping level
  above records. The portfolio is flat. If the UI needs folders-of-projects,
  that is a structural change, T's decision.
- **"sub-idea"** maps to two real things, neither of which is a child record:
  a version branch in the derived lineage, or a separate record joined by
  `relates`. A true idea-nested-inside-an-idea does not exist. If the UI
  needs one, that is a record-schema change, T's decision.

This record inherits both gaps as open questions. They are not blockers — the
glossary also confirms that the map T wants is "entirely derivable from
frontmatter today," lineage chains plus state sequence plus `relates` edges.
The data for the drawing exists. What T's three words name that the repo does
not yet have is the *hierarchy*, not the *graph*.

## What this UI would sit over

Named as inventory, not design: the record trail the map would draw is
`ideas/` — each record's `idea.md`, its artifacts with their `inputs:` chains,
its immutable `state/` sequence, and the hand-authored `relates` edges between
records. A UI for the estate is a reader of exactly that surface.

The estate's own record, idea-0001, is the obvious neighbor — this is an idea
*about* the thing idea-0001 examines. The edge is not drawn here; `relate`
belongs to The Cartographer and has not run.

## The tension, left standing

The record names it and it stays unresolved: idea-0001's Framing established
that the estate's steering layer — handoff packets, route derivations, the
Steward's dispatching — produces no artifacts. The lineage graph covers only
the addressable half. So the map T asks for, "how the idea is traveling,"
can show every place the idea stopped but not what steered it between stops.
T's ask and that finding are going to meet, and which one bends is not a
rendering choice.

## The energy of it

The exclamation point is T's, and the whole message runs on it. This is the
first idea T has opened purely for T — not for a friend, not to test the
machinery, but because T wants to *see* the thing that has been built. The
glossary-first instinct in the same message shows the want is patient: eager
enough for an exclamation point, disciplined enough to define terms before
sketching screens.
