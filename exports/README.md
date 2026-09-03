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

## The `build-plan` payload

Under `contract: build-plan` (ADR 0029) the payload is not optional — it is
the deliverable. Its shape is fixed by `system/TYPES.md` and checked by the
validator: `README.md`, `spec.md`, `nexus.adopt.json`, `plan/bearings.md`,
`plan/steps/01_build_plan.md`, `plan/phases/phase_1_bootstrap.md`. The
skeleton is `templates/payload-build-plan/`; the Sower fills it by hand.
Whether the loop is included is the Seed's `target:` (`nexus | none`),
asked of T. For `nexus`, the payload's README names a kit tag of
`no-trbl-2-u/idea-Nexus` and one `npx … adopt` command fetches it around
the payload (ADR 0030) — the kit never lives in this repository, and none
of its source is left in the recipient's.

## A Seed behind its record

An export is **sealed** by the state whose `outputs:` names it — the close of
the session that exported it. (Not `origin:`, which names the state the Sower
*read*, and is one behind by construction.) When the record moves past the
seal, the Seed is **stale** and the validator says so until the record
reconciles:
a new export whose `supersedes:` names the old one, a `graft`, or a
`Decision` whose `reconciles:` names it. The old file is never touched.

## The departure lounge is empty

The two exports that predated the payload convention —
`0003-starvu-agency-site-seed.md` and `0004-estate-ui-seed.md` — left with the
clean slate of 2026-09-03 (ADR 0032), along with every record. Both are
preserved whole at tag `ideas-archive-2026-09-03`; neither was ever edited.

The conventions above apply to every export from here forward, with no
grandfathered exceptions left in the lounge.
