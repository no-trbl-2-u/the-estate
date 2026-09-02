# Bearings — {Project}

> Standing context for every command invocation. Read this alongside the
> relevant skill file (`skills/<name>.md`) and the matching phase brief.
> If anything here changes, update in the same commit.
>
> Rendered from the Seed (`origin: idea-NNNN @ state/NNNN`). The kit's own
> `templates/plan/bearings.md` is the full form; this file keeps its
> headings and fills only what the Seed decided. Sections the Seed did not
> reach say so, rather than guessing.

## What we're building

`spec.md` at the repo root is the product spec — the Seed's Horizon,
refusals and acceptance criteria. Read once at session start. The TL;DR:

> {one line, from the Horizon — same text as `<PROJECT_TAGLINE>` in
> `nexus.adopt.json`}

{Two to four sentences: audience, core feature, voice. From the Horizon,
rendered, not paraphrased.}

**Live at:** {URL, or `[needs-user-call]` until the garden's deploy step
lands}

## Surface

**Surface:** `{site | service | library | cli | hybrid}`

{One line saying which part of the Seed fixes this.}

## Auth (for Surface: site / hybrid)

**Auth:** `{none | test-user | session-cookie | ...}` — {or: "not reached
by the Seed; `none` until a Phase needs otherwise"}

## Stack (locked — do not re-litigate)

Decided in the estate. Revisit only if a phase genuinely cannot ship
without changing one of these — and then `/re-seed`, not a quiet edit.

| Layer | Choice | Why |
|---|---|---|
| Repo | {…} | {…} |
| Framework | {…} | {…} |
| Language | {…} | {…} |
| Styling | {…} | {…} |
| Content | {…} | {…} |
| Structured data | {gh-as-db / hybrid-with-managed-postgres / pure-db / saas-cms / none} | {…} |
| Test (unit) | {…} | {…} |
| Test (e2e) | {…} | {…} |
| Pkg mgr | {…} | {…} |
| Hosting | {…} | {…} |

{Rows the Seed left open: write `[needs-user-call]` in the Choice column
and name, in Why, what the agent prepares up to the choice. The garden's
Stack step resolves these.}

## Decisions standing for the autonomous loop

(These exist so the loop never asks the user.)

**From the Seed's refusals** — walls, not preferences. `/seed-check`
quotes them; the loop does not reinterpret them:

- **{Refusal}.** {Its argument, one line.}

**Routine calls the Seed made** — stated so the loop does not re-open
them:

- **{Call}:** {decision}

**Loop defaults** — {fill from the kit's template as the Seed's domain
requires; omit rows that do not apply}:

- **Empty state copy template:** `"{…}"`
- **Error state:** {…}
- **Comments / community / login:** {decision — usually "out of scope"}

## Hard rules

(Mirrors `agents.md` Standing Rules. Update there first; this echoes.)

1. **Commit and push as a single atomic act.**
2. **No `Co-Authored-By:` trailers, no emojis.**
3. **No `--no-verify`, no force-push, no destructive resets.**
4. **The verify gate is non-negotiable.**
5. **Tests alongside code.**
6. **Never commit secrets.**
7. **Never edit `spec.md`.** Drift goes back through `/re-seed`.
8. {Seed-specific rules, if any.}

## Verify gate (hermetic, mandatory) + deploy gate

### Pre-commit: `{pkg mgr} verify`

```
{the composition the garden wires — typecheck, unit, build, e2e}
```

Each leg is a hard gate. The garden's done-condition is that this gate is
green on an empty project before any feature exists.

### Post-push: `{pkg mgr} deploy:check`

Polls {hosting provider} for the deploy at HEAD. Exits 0 ready, 1 error,
2 timeout, 3 config/auth. Implementation: `scripts/deploy-check.mjs`
(copied by adopt); provider block enabled for {provider}.

**Red deploy = blocked tick.**

## Useful commands

```
{pkg mgr} verify
{pkg mgr} deploy:check
node scripts/pulse.mjs        # offline: queue / build-plan / candidate counts
```
