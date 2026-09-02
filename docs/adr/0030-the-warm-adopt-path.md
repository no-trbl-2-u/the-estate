---
type: Decision Record
title: "ADR 0030"
description: "The warm adopt path: a build-plan payload is nexus-native and one adopt command fetches the kit around it, leaving no source behind; target: is the switch for whether a loop is included, asked of T."
tags: [adr, decision]
generated: { by: claude-code/2026-09-02, at: 2026-09-02T05:00:00Z }
---

# ADR 0030: The warm adopt path

**Status:** accepted · **Date:** 2026-09-02 · **Source:** T's direction of
2026-09-01 ("yes to all of that, but … add another tag … or ask the user")

## Context

ADR 0029 shipped a `build-plan` payload in the estate's own shape —
`spec.md`, a build plan in estate prose, two skills — and told the recipient
to clone the kit beside the repo and paste its cold-start adoption prompt.
That prompt exists for a repo with a spec and nothing else: an agent reads
~150 KB of kit documentation and *infers* the stack, hosting, and project
identity. A payload from the estate arrives with every one of those
decisions already made. Running inference over decided facts is the
expensive part of adoption, and it is waste.

T also named two frictions: a sibling clone is a second repository to
carry, and the kit's source has no business living on in the product.
And a third, once the mechanics were settled: not every buildable idea
wants a worker loop at all.

## Decision

1. **The payload is nexus-native.** `templates/payload-build-plan/` now has
   the kit's own file shape — `nexus.adopt.json`, `plan/bearings.md`, the
   Status-block `plan/steps/01_build_plan.md`, `plan/phases/phase_1_bootstrap.md`
   — so the loop reads it without translation. The garden is the estate's
   Phase 0 and the payload's Phase 1, because that is the slot the loop
   reads first. `[HUMAN ATTENTION]` renders as `[needs-user-call]`: the
   payload is target-specific by definition, so it speaks the target's
   language. The validator's declared-file list follows.
2. **One command adopts; nothing is cloned beside; nothing is left behind.**
   The fork gained `scripts/adopt.mjs` (kit tag `v0.2-estate`), a
   deterministic overlay: copy the kit around what exists, **never
   overwrite** (report *kept*), sweep the eight placeholders from the
   manifest over copied files only, generate command pointers for payload
   skills, file every unresolved token as `[needs-user-call]`. It runs as
   `npx --yes github:no-trbl-2-u/idea-Nexus#<tag> adopt`; npm's cache is the
   only place the kit's source lands. The payload names the tag it was
   rendered for.
3. **`seed-check` and `re-seed` live in the kit,** not the payload. They
   are generic to any exported spec with Refusals and a Horizon; every
   adopted repo gets them, whatever produced its spec.
4. **`target:` is the switch.** No new field. `target: nexus` includes the
   loop; `target: none` exports the plan as a plain document. The Sower
   asks T once, plainly — *"Include the Nexus worker loop?"* — when the
   idea is buildable software and the record has not already said. One
   home per fact: the value that names the loop is the value that decides
   whether there is one.

## Alternatives considered

**A new `include-nexus:` boolean.** Rejected: it would duplicate `target:`
and could disagree with it.

**Embed the kit's source in the payload, delete after adoption.**
Rejected: `exports/` is permanent and domain-general; 1.2 MB of loop
tooling in it is exactly what ADR 0029 refused. The npm cache is the right
transient home.

**Keep the estate-shaped payload and teach the kit to translate.**
Rejected: the translation would live in the kit forever for one producer;
rendering to the target's shape at export is the contract's stated job.

## Consequences

- Fork: `scripts/adopt.mjs`, `package.json` bin, `templates/skills/{seed-check,re-seed}.md`,
  `prompts/adopt-from-seed.md`; tag `v0.2-estate`.
- `templates/payload-build-plan/`: restructured; `skills/` dropped.
- `scripts/validate-estate.mjs`: `BUILD_PLAN_FILES` is the new shape.
- `.claude/skills/seed/SKILL.md`: the `target:` question and the render
  rules. `.claude/skills/phase/SKILL.md`: the garden no longer names the
  two kit skills.
- `system/TYPES.md`, `system/LAW.md`, `exports/README.md`,
  `docs/GLOSSARY.md`, `templates/seed.md` updated.
- ADR 0029 decision 4 ("cloned as a sibling") is **amended** by decision 2
  here; its other decisions stand.
