---
id: idea-0002/artifacts/0019-phase-8-unlisted-deploy.md
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
potential-next-steps: [decide, distill]
summary: "Phase 8, the unlisted deploy with the real text: the private-input mechanism decided, the two YAML files supplied by T, the deploy of the real build to the unlisted URL, and the proof that the public repository holds none of it. Two human-attention steps: supplying the files or secret, and confirming the URL is shared with no one. Done when the real game is served unlisted and text-guard is green."
---

# Phase 8 — Unlisted deploy, the real text

The Surveyor. The Trajectory's eighth leg. The pipeline went up in the
garden with the fixture; this Phase is the moment the author's words
enter a build, and only a build.

**Outcome.** The unlisted URL serves the real game; the public
repository never contained a line of the text.

**Waits on.** Phase 0 (the pipeline and URL); Phase 1 (the converted
files); Phase 6 (the oracle file). Content: after Phases 5 and 6 for a
playable deploy; the mechanism can land earlier.

**When.** Mechanism in September or October; the real content in
December.

## Steps

8.1 **The mechanism.** `decide`, agent-performable, between: a local
build on T's machine that deploys the built site; or the two YAML files
held as a pipeline secret the build reads. Criteria: the text never in
the repository or its history, never in a log, not readable by a
collaborator, and the build reproducible by T alone. Recorded as a
Decision in the estate or in the target's bearings.

8.2 **Supplying the input.** `**[HUMAN ATTENTION]**` — the files are
the author's text in T's possession, and the secret is T's account's.
The agent prepares the converter's output path, the secret's name and
the one command; T runs the converter over the reference file and
places the result where 8.1 says.

8.3 **The real build.** `verify` with the private paths set; the built
site's JSON validated; `text-guard` asserting the tracked tree is
clean; deploy; `deploy:check` green; the deployed page shows Prompt 1's
first entry verbatim.

8.4 **Unlisted, confirmed.** `**[HUMAN ATTENTION]**` — the agent asserts
`noindex`, no sitemap and no inbound link from anything it controls; T
confirms the URL is in no message, page or profile of theirs. The
Horizon's own question — whether an unlisted URL counts as private use
— is Phase 10's to answer; this Phase does not wait on it.

## Done when

The unlisted URL serves the real Prompts and oracles; `text-guard` is
green on every commit; the repository's history contains no author
text (a one-time scan over all blobs, recorded).

## Cost

One loop tick and one sitting of T's.

## Left open inside this Phase

- Unlisted deploy against "permission first": live, carried to
  Phase 10.
