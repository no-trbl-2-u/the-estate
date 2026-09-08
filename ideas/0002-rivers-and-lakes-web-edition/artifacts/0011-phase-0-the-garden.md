---
id: idea-0002/artifacts/0011-phase-0-the-garden.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0008-rivers-and-lakes-web-edition-trajectory.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0007-rivers-and-lakes-web-edition-horizon.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [decide, seed, distill]
summary: "Phase 0, the garden, for target nexus: the site repository, the stack sealed by decide, an environment manifest naming the private text inputs and the hosting secret, a verify gate green on an empty project, an unlisted deploy target that answers, two Seed-specific skills named. Done when the loop completes one tick on nothing. Three human-attention steps: repository ownership, secret values, hosting account."
---

# Phase 0 — The garden

The Surveyor. This Phase precedes the route because T said the Seed is
headed for the nexus loop (`contract: build-plan`, `target: nexus`). Its
done-condition is fixed by the contract, not chosen here: **the loop
completes one tick on nothing** — a trivial slice shipped, verified,
deployed, reported. Nothing in it is a feature. It absorbs the first
half of the Trajectory's second leg (stack, skeleton, pipeline); Phase 2
keeps the rest.

**Outcome.** A repository in which `verify` and `deploy:check` are green
before any rule of the game exists.

**Waits on.** Nothing. T's word to create the repository.

**When.** The first weekend after the Seed leaves; before 2026-09-25,
because the estate's falsifier counts a Seed *used*, and the first tick
is the use.

## Steps

0.1 **Stack.** `decide` in the estate, agent-performable — T released the
choice. Criteria, all from the record: a static site with no runtime
service; pure functions over immutable state, no classes; a type system
that makes the sheet's shape checkable; a test runner that runs the
engine over a fixture; a build that turns YAML into validated JSON and
fails when the private input is missing; a hosting provider with an
unlisted URL, `noindex` headers, and a pollable deploy status. The
Decision names framework, language, styling, unit and e2e runners,
package manager and host, with a version pin for each. If the Decision
is not sealed before export, the payload carries this row untagged and
the loop weighs it first.

0.2 **Repository.** `**[HUMAN ATTENTION]**` — a repository under T's
account is account ownership. The agent prepares everything up to the
line: the payload directory rendered by `seed`, the adopt command, the
first commit's contents. T creates the repository and runs the adopt
command; nothing else in this step is T's hands.

0.3 **Environment manifest.** `.env.example` extended with every variable,
each with name, purpose, and who supplies it:

| Variable | Purpose | Supplier |
|---|---|---|
| `RL_PROMPTS_PATH` | path to the private Prompt YAML at build time | T |
| `RL_ORACLES_PATH` | path to the private oracle YAML at build time | T |
| hosting token | deploy from the pipeline | T |
| `RL_SITE_URL` | the unlisted URL `deploy:check` polls | T, once 0.5 lands |

`**[HUMAN ATTENTION]**` on supplying the values; values are always
human. Before the real files exist, both paths point at the fixture so
the garden can build. The build's rule from Phase 1 is stated here as a
placeholder: a missing private input fails the build; the fixture is
opted into by name, never by default.

0.4 **Verify gate.** `verify` = typecheck, unit, build, e2e, in that
order, each a hard gate, green on the empty project. The e2e leg opens
the placeholder page and finds the RPG Windows frame; nothing more.

0.5 **Deploy target.** A project at the chosen host, answering at an
unlisted URL with `noindex` and no sitemap. `**[HUMAN ATTENTION]**` on
the account, its billing and the token: the agent writes the provider
config and the deploy-check block, T owns the account. Done when
`deploy:check` exits 0 at HEAD.

0.6 **Seed-specific skills.** Two, implied by the Horizon; the Sower
writes them, this Phase names them. `seed-check` and `re-seed` are not
named here: the kit ships them.

- **`text-guard`** — asserts that no line of the author's text is in the
  public tree: greps the tracked files for any five-word window from the
  fixture's *placeholder* text's counterpart in the private file, fails
  on a hit; asserts the build fails with the private input absent. Runs
  in `verify`.
- **`entry-check`** — given an entry id, scaffolds its test from the
  operations table (Phase 4) and reports which of the entry's imperative
  sentences no operation covers. The transcription leg's tool.

0.7 **The trivial slice.** One page in the RPG Windows frame (the
Decision's stylesheet), reading the fixture's constants (`prompt_range`,
`legends.slots`) into the HUD line and nothing else. Shipped through the
full path: commit, verify, deploy, deploy-check, the build-plan row
ticked. Deleted or replaced in Phase 2, never kept.

## Done when

`verify` and `deploy:check` are both green at a HEAD whose Phase 1 row
in the target's build plan reads `[x]` with a commit hash. One tick on
nothing.

## Cost

One weekend of T's attention at the three tagged steps; the rest is one
loop tick. The stack Decision is one estate session before export.

## Left open inside this Phase

- Whether the private text inputs reach the pipeline as files on T's
  machine (local build, artifact deploy) or as a secret the pipeline
  reads. Phase 8 decides; the garden only needs the fixture.
- Whether the e2e runner is worth its weight for a static site with no
  server. The stack Decision answers; if it says no, the gate is three
  legs and `verify` says so.
