---
id: idea-0003/artifacts/0025-phase-12-native-builds.md
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
summary: "Expo Application Services builds for iOS and Android internal tracks, with the accounts, the fees and the Mac as T's; the web release stays the fallback distribution if any account is missing."
---

# Phase 12 — Native builds

**Outcome.** The app installs from internal tracks on iOS and Android.

**Depends on.** Phase 8; may run in parallel with Phases 10 and 11.

**Steps.**
1. `**[HUMAN ATTENTION]**` Accounts and machine: an Expo account, an
   Apple developer membership, a Google Play console, a Mac for the iOS
   build. The agent writes the EAS configuration and names every
   credential and who supplies it, up to the line.
2. Internal track builds; deploy-check extended to poll EAS.
3. Tests: the Playwright suite unchanged; a smoke run on each track by
   T (`**[HUMAN ATTENTION]**`).

**Done looks like.** A build on each internal track, or the Phase
marked blocked on the named account with the web release as
distribution.

**Cost.** One week of agent work; T's accounts on their own clock.
