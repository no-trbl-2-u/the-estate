---
id: idea-0002/artifacts/0018-phase-7-share.md
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
potential-next-steps: [distill, challenge]
summary: "Phase 7, share: the Legends-and-Songs projection, compression into the URL fragment under a stated cap, the warning screen before a link exists, the read-only renderer with the content warning as a banner, and a test that no author's text is in the payload. No human-attention steps. Done when a link round-trips on a phone and the cap refuses with its message."
---

# Phase 7 — Share

The Surveyor. The Trajectory's seventh leg. Nothing is stored anywhere;
the link is the whole payload.

**Outcome.** A finished Xiake's Legends and Songs readable by anyone
holding the link, and nothing else.

**Waits on.** Phase 3 (the model); Phase 5 (the entry point at the
ending and on the Story tab).

**When.** December.

## Steps

7.1 **The projection.** `sharePayload(sheet) → { name, legends, songs }`
with struck Legends kept struck; no Tags, Resources, Characters, Scars,
journal, ledger, roll log; and no Prompt text, asserted by a test
against the private build.

7.2 **Encoding.** Compress, then base64url into the fragment, never the
query, so no server ever sees it. The cap in bytes stated on the screen
and in the refusal message; the size chosen from the longest fixture
game plus margin and recorded in the readings register as a site rule,
not a book rule.

7.3 **The warning screen.** Before any link exists: this cannot be
unpublished; anyone with it can read and alter it; nothing of the book
is in it. One menu item to make the link, one to go back.

7.4 **The read-only renderer.** The same RPG Windows frame, Story tab
only, the book's content warning as a banner above the first Song, no
command window, no way to start a game from it beyond a link to the
site's front.

7.5 **Tests.** Round-trip through encode and decode; the cap refuses;
the payload contains no field outside 7.1; the renderer shows no
control.

## Done when

A share link from the fixture game opens on a phone and renders; a
payload over the cap is refused with the message; the payload test
passes against the private build.

## Cost

One or two loop ticks.

## Left open inside this Phase

- "Nothing stored" against unrevocable publication stays a tension;
  7.3 is its mitigation, not its answer.
