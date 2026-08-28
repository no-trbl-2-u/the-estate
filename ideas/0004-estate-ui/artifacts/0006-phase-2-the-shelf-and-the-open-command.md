---
id: idea-0004/artifacts/0006-phase-2-the-shelf-and-the-open-command.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs: [ideas/0004-estate-ui/artifacts/0004-trajectory.md]
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [seed, challenge, distill]
summary: "Delivers the first openable viewer: the generator grows its render step and emits docs/estate-view/index.html — one self-contained file, embedded JSON island — showing the portfolio shelf (four cards with status, recency, tempo, counts, the exported badge with origin stamp, the appetite-unset pattern strip, inputs-derived inbound-citation counts), the survey panel in its honest empty state, the generated-at and covers: stamp always visible, and the one-line open command that regenerates then launches the browser. Triggered by Phase 1's assertions going green; cost one weekend. This Phase ends with T opening the viewer on real data — falsifier 1's clock starts here, and that is the checkpoint: if the shelf's five-second answers are not faster than the file tree on first real use, the route pauses before the map is built, because Framing assumption 2 (read-only is enough) is showing its face early and cheaply."
---

# Phase 2 — The shelf and the open command

I am The Surveyor. This Phase exists to make the route reach *being opened* in
two legs. Everything in it renders derivations Phase 1 already proved.

## What this Phase delivers

1. **The render step.** `generate.mjs` gains an HTML emitter: one
   self-contained `docs/estate-view/index.html`, embedded JSON data island, no
   external fetches, openable over `file://`. Committed like `SURVEY.md` —
   derived data, deletable without loss.
2. **The shelf.** Four cards on a flat shelf — flat because the portfolio is
   flat: id, glossary-canonical title and status, state-head recency dot,
   tempo strip from state dates (idea-0003's one-day nineteen-artifact sprint
   must show as a spike), artifact/state counts, the **exported** glyph with
   `@ state/0011` on the Starvu card, inbound-citation counts (idea-0001
   honestly zero, per the Trajectory's finding), and the estate-wide
   **appetite-unset strip** — four identical placeholder dials with the
   template's own comment surfaced.
3. **The honest empty layers.** The survey panel stating in the glossary's
   words that `SURVEY.md` has never been generated, naming `survey` and The
   Cartographer as the remedy; the `relates` layer present and empty, saying
   `relate` has never run. Rendering logic for the *filled* states is written
   now (covers-vs-heads staleness comparison included) so that one Cartographer
   session lights the panel with no code change.
4. **The stamp.** Generated-at time and `covers:` snapshot at the top of the
   shelf, always visible — falsifier 3's evidence surface.
5. **The open command.** `docs/estate-view/view.ps1` (with a `view.cmd` shim):
   regenerate, then open. One invocation, freshness collapsed into opening.

**Done looks like:** T types the command on a Saturday afternoon, the browser
opens, and the four facts the Horizon promised arrive in five seconds — what
moved last and how fast, who exported, appetite never set, survey never run —
with zero file-opens.

## Trigger, dependencies, cost

- **Trigger:** Phase 1's fixture assertions green.
- **Waits on:** nothing else. No map, no panel, no library decision beyond
  hand-written HTML/CSS/JS in the emitter.
- **Cost:** one weekend. The card layout is deliberately plain — this is the
  surface that gets measured, not the surface that gets admired.

## The checkpoint, and falsifier 1's clock

This Phase ends with **the first real open**, and from that moment falsifier 1
is live: five consecutive record-sessions in which T orients by files instead
of the viewer, and the record stops rather than iterates. The Phase-local
checkpoint is smaller and earlier: on first use, is the shelf faster than the
tree at its own four questions? If plainly not, **pause before Phase 3** — the
map is the expensive leg, and Framing assumption 2 (a viewer that cannot act
is still worth opening) should be interrogated at shelf price, not at map
price. The re-route on a failed reading is a return to T with the evidence,
not a feature added to compensate.

## Where a Framing assumption bites

Assumption 3 (in-repo static suffices) takes its first practical test: the
self-contained file must open over `file://` with everything embedded. If
anything in the shelf turns out to want a fetch, the build-time call is doing
its job — the want is refused, embedded, or recorded as early evidence for
falsifier 3's reversal path. Assumption 6 (viewer size) is enforced by the
weekend budget: a shelf that wants a second weekend is a shelf being polished
for strangers who do not exist.

## What this Phase refuses

The record map (Phase 3's), any write affordance, any button on
`potential-next-steps`, and any scoring computation — the panel renders the
survey's numbers or their absence; one computation, one owner.
