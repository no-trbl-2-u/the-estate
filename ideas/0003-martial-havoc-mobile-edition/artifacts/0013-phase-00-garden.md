---
id: idea-0003/artifacts/0013-phase-00-garden.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0003-martial-havoc-mobile-edition/artifacts/0012-martial-havoc-mobile-edition-trajectory.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [seed]
summary: "The loop completes one tick on nothing: npm workspaces (engine, content, app) on Expo with TypeScript, Vitest and Playwright wired into a green verify gate on an empty project, a placeholder web build deployed to Cloudflare Workers static assets and pollable, an environment manifest with values as needs-user-call. No feature."
---

# Phase 0 — The garden

**Outcome.** The loop can run. A trivial web slice ships through the
full path: verified, deployed, reported.

**Depends on.** Nothing. The repository is `no-trbl-2-u/martial-havoc`,
which holds the two source PDFs; the payload lands at its root.

**Steps.**
1. **Stack, locked by T.** npm workspaces with three packages: `engine`
   (pure TypeScript, no React, dice injected), `content` (data files),
   `app` (Expo, React Native, web target enabled). TypeScript strict.
   Vitest for unit tests; Playwright against the exported web build.
   Pin versions in the brief.
2. **Environment manifest.** `.env.example` naming every variable:
   Cloudflare account id and API token for deploy-check, the Workers
   project name. Values are `**[HUMAN ATTENTION]**`: T supplies them;
   the agent names each and where it is used. T's word: Cloudflare, and
   only its environment variables are to be obtained now.
3. **Verify gate.** `npm run verify` = typecheck, Vitest, Expo web
   export, Playwright smoke on the export. Green on the empty project.
4. **Deploy target.** A Cloudflare Workers static-assets project serving
   the web export; `scripts/deploy-check.mjs` polls it. Account and
   project creation are `**[HUMAN ATTENTION]**`; the agent writes the
   Wrangler config and the pipeline up to the line.
5. **Seed skills.** `seed-check` and `re-seed` arrive with the kit. No
   Seed-specific skill is named; the three labels are a verify leg
   (Phase 2), not a skill.
6. **One tick on nothing.** A placeholder page reading the project name
   and licence line, exported, deployed, deploy-check green.

**Done looks like.** `npm run verify` and `npm run deploy:check` both
green at HEAD on a repository with no engine code; the Status block's
Phase 1 row ticked with a commit hash.

**Cost.** One weekend, T's accounts permitting.
