---
type: Guide
title: "Exports"
description: "The departure lounge: where Seeds and Briefs land on their way out."
tags: [exports]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
---

# Exports

The departure lounge. When a Seed (or early-exit Brief) leaves for a real
project, its final export copy lands here first: `exports/NNNN-slug-seed.md`.

Seeds leave **clean** — no session logs, no rejected framings, no graveyard.
The one line that travels backward is the provenance stamp
(`origin: idea-NNNN @ state/NNNN`), which is the return address for any future
field report. Classifier labels (`horizon: unfalsified`, etc.) travel with the
export; nothing is gated on them.

## The payload directory

A Seed may carry the **droppable result** as well as describing it. The payload
is a **sibling directory** named from the same record id and slug:

```
exports/NNNN-slug-seed.md        the document
exports/NNNN-slug-payload/       the droppable result
```

The Seed's `payload:` frontmatter holds the relative path; the classifier
`payload: present | absent` states whether there is one. **A payload directory
belongs to its Seed** — same id, same slug, no exceptions. That naming *is* the
link: `exports/` is a flat departure lounge with no index, and a directory whose
name does not match its Seed is an orphan the moment anyone forgets which is
which.

Sibling rather than nested, because the document must stay a single file that
can be read, pasted, or mailed on its own — and because a payload is often
handed over *without* the Seed, straight into a repo.

The payload is **optional and never gated**. A Seed without one exports fine and
says so on the tin; its Payload section names in one line what the record would
need to build one, which is routing information rather than an apology. A
payload the recipient cannot actually drop in is a recorded Seed falsifier
(`system/FALSIFIERS.md`) — an unrunnable payload is worse than an absent one,
because absence is honest.

## The two existing exports are immutable

[`0003-starvu-agency-site-seed.md`](0003-starvu-agency-site-seed.md) and
[`0004-estate-ui-seed.md`](0004-estate-ui-seed.md) predate this convention and
are **not edited** — nothing in this repository is ever altered. They carry no
`contract:`, no `payload:`, and no payload classifier; read them as
`contract: standard, payload: absent`, which is what they are. The convention
applies **from the next export forward**.
