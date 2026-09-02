# {Project} — build-plan payload

Exported from The Estate under `contract: build-plan`, `target: nexus`.
Provenance: `origin: idea-NNNN @ state/NNNN` (also in `spec.md`).

This directory is the **droppable form** of the Seed. It contains what the
loop reads and nothing else. The loop itself is not here.

## Drop it in

1. Make the repository. Empty is fine; existing is fine.
   ```
   mkdir {project} && cd {project} && git init
   ```
2. Copy this directory's contents to the repository root. You should now have
   `spec.md`, `plan/steps/01_build_plan.md`, and `skills/`.
3. Clone the target **as a sibling**, at the pinned tag:
   ```
   git clone --branch {tag} https://github.com/no-trbl-2-u/idea-Nexus ../nexus
   ```
4. Open Claude Code in the repository and paste `../nexus/prompts/adopt.md`.
   Adoption overlays `plan/`, `skills/`, `.claude/`, and `scripts/` around
   what is already here; it does not touch `spec.md` or the plan. If the
   adopt step does not register the two skills in `skills/`, copy each to
   `.claude/skills/<name>/SKILL.md`.
5. Run `/ship-a-phase`. The plan's first phase is **Phase 0 — the garden**;
   its done-condition is *one tick on nothing*. Do not skip it, and do not
   let a feature into it.

## What is here

| File | What it is |
|---|---|
| `spec.md` | The Seed's Horizon, refusals, acceptance criteria, and provenance — the loop's anchor |
| `plan/steps/01_build_plan.md` | Phase 0 and the route, with status and `[HUMAN ATTENTION]` tags |
| `skills/seed-check.md` | Ask before a pivot: does this break a refusal, or move toward the Horizon? |
| `skills/re-seed.md` | When the plan has drifted from the Seed: how to report back |

## Human attention

Steps tagged `[HUMAN ATTENTION]` are work no agent can do — credentials,
payments, consent, judgment calls reserved for the operator. The loop parks
them; clear them in `/oversight`. The tag is a claim that the rest of the
step *is* agent-performable — an untagged step that stalls is a bug in the
plan, worth a `re-seed` report.
