# Phase 1 — The garden

> Agent-facing brief. Concise, opinionated, decisive. Ship without asking;
> document judgment calls in the commit body. This is the first phase —
> there is no shipped sibling to copy from, and there is no feature in it.
> A garden that grows a feature is not a garden.

## Scope

Make the loop able to run. Five things, in order, then one tick on
nothing:

1. **Stack.** {Decided in the estate — name it, and pin versions below.}
   {Or: `[needs-user-call]` for the undecided part; the agent prepares the
   comparison up to the choice and files it in `plan/AUDIT.md`.}
2. **Environment manifest.** `.env.example` (copied by adopt) extended
   with every variable this project needs: name, purpose, who supplies
   it. `[needs-user-call]` to supply the values — never commit them.
3. **Verify gate.** `{pkg mgr} verify` wired as `plan/bearings.md`
   states it and green on the empty project.
4. **Deploy target.** {Provider} project exists and answers;
   `scripts/deploy-check.mjs` can poll it. `[needs-user-call]` for the
   account, billing, and domain.
5. **Seed skills.** `/seed-check` and `/re-seed` present (the kit ships
   them). {Any Horizon-specific skill named by the Seed: write it to
   `skills/<name>.md`; adopt already generated the pointer if it shipped
   in the payload.}

Then: one trivial slice — a placeholder page, a health endpoint, a
`--version` flag, whatever the Surface makes smallest — shipped through
the full path.

## Outputs

```
{project init files for the stack}
.env.example                 extended
{verify composition files}   package scripts, test config, e2e config
{deploy config}              provider file, if the provider needs one
skills/{seed-specific}.md    if the Seed named any
```

## Stack pins (versions)

{Specific versions. Bump if a stable major has shipped at runtime;
document in the commit body.}

## Verify gate

```
{pkg mgr} verify
```

Green on an empty project is the point of this phase, not a side effect.

## Deploy gate

```
{pkg mgr} deploy:check
```

## Decisions made upfront — DO NOT ASK

- {From `plan/bearings.md`'s "Decisions standing" — restate the ones this
  phase touches.}
- The trivial slice is `{…}`; it is deleted or replaced in Phase 2, not
  kept.

A brief that leaves open questions is a brief that fails its job. The
`[needs-user-call]` rows above are the only ones permitted, and each says
what the agent does up to the line.

## Git

One commit per numbered item, verb `chore:` or `feat:` per
`plan/bearings.md`'s vocabulary; the trivial slice is its own commit.
Commit and push as a single atomic act.

## DoD

Flip Phase 1's `[ ]` → `[x]` in `plan/steps/01_build_plan.md`, append
the commit hash, add a line to "Phase log". Commit:

```
git add plan/steps/01_build_plan.md
git commit -m "plan: phase 1 shipped — the garden"
git push origin {default branch}
```

## Confirm deploy

`{pkg mgr} deploy:check` green at HEAD. That, plus the ticked row, is
"one tick on nothing".

## Follow-ups (out of scope this phase)

- Everything in Phase 2 onward. If the trivial slice tempts a feature,
  that is the temptation the garden exists to refuse.
