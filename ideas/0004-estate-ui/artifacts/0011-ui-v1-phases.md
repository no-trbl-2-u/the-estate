---
id: idea-0004/artifacts/0011-ui-v1-phases.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs: [ideas/0004-estate-ui/artifacts/0004-trajectory.md, ideas/0004-estate-ui/artifacts/0010-horizon-explored.md]
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [review, challenge, decide]
summary: "The definitive v1 inventory and remaining-phase breakdown for the shipped Estate View, written after the fact and honest about it: at T's explicit instruction the build fast-tracked past the sealed Seed's letter (docs/estate-view/, no framework) into /ui as a Vite + React + TS SPA, because the far horizon 0010 recorded — login, AI chat, databased artifacts — makes a componentized app the version that scales, and the seam held where it matters: the zero-dependency generator and the pure derivation spine in src/lib/derive.ts are the Phase-1 graph rules made real, framework-free, and portable to v2's API unchanged. Shipped: the generator with a real snapshot stamp, refiner-verb supersession with research-runs-as-lineage, desktop (sidebar shelf, two-rail travel map with steering seam and the wall, reading panel with version-chain tabs and shelf-life bars), mobile (shelf screen, map turned ninety degrees, bottom sheet), seven derived estate views, one interactive setting, keyboard navigation, and assets-only wrangler scaffolding. In flight this session: map pan/zoom, the sidebar drawer toggle, and drill-in panels for estate-view entities. Remaining, sequenced with startable/waits-on honesty: the polish and accessibility pass, regeneration ergonomics, the deploy walk behind Cloudflare Access, and the record-keeping catch-up — this deviation deserves a Decision, the Chancellor has not run, and this artifact names that gap without deciding it."
---

# The v1 phases — surveyed from the ground already taken

I am The Surveyor. My previous Phases in this record were written before the
ground was walked; this one is written from on top of it, and it says so.
T fast-tracked a v1 build of Estate View into `/ui` — Vite + React +
TypeScript, deviating from the sealed Seed's letter (`docs/estate-view/`, no
framework, one committed HTML file) **at T's explicit instruction**, because
the far horizon this record already holds
(`ideas/0004-estate-ui/artifacts/0010-horizon-explored.md`) — login, per-user
projects, an in-window AI chat, databased artifacts — makes a componentized
SPA the version that scales, and building the throwaway twice was the cost T
declined to pay. The build implements the approved claude.ai/design prototype,
desktop and mobile both, every pixel derived from the real records.

A word on the seam before the inventory, because 0010's F8 ("the platform
pulls the near build off course") is armed and this is exactly its subject:
the stack changed, but the *architecture the Seed actually cared about*
survived the change. The generator is still zero-dependency Node walking real
files; the graph derivation is still pure, framework-free, and testable in
isolation — `src/lib/derive.ts` imports no DOM and no React, which is the
Phase-1 spine wearing a new address. What transfers to v2 transfers because it
was right for the viewer first. Whether that reading stands is a `challenge`
away, and this artifact's classifiers invite it.

---

## Shipped in v1 — the inventory, stated as shipped

### The generator (`ui/scripts/generate.mjs`)

Zero-dependency Node. Walks `ideas/`, `exports/`, and `ideas/SURVEY.md`,
parses the narrow frontmatter subset actually in use, resolves every verb to
its bound agent through `system/registry.md`, and emits
`ui/src/data/estate.json` — parsing only, no layout, no judgment. The
snapshot stamp is real generation time: `generated <time>` is when the script
last ran, and honesty about the snapshot's age is a feature, not chrome.
Derived data, regenerated at will, never edited.

### The derivation spine (`ui/src/lib/derive.ts`)

Pure functions over the data contract, no DOM, no React. Version chains
supersede **only through refiner verbs** — challenge, explore, distill — so a
research run reads as lineage, not rewrite; tip-finding follows; classifiers
are worn as labels, never gates: `challenged: true`, `falsifiable`,
`actionable`, and post-export detection all render as what they are. The
wall (the Seed standing outside the record), the rungs (state tied to
artifact), and the steering seams (the hatched gap between every pair of
states) are all computed here, exactly the vocabulary the Trajectory's leg 3
named.

### Desktop

- **Sidebar shelf** — record cards carrying appetite bars (including the
  honest placeholder dashes where appetite was never set), seed wax for the
  exported record, the status dot, and tempo counts.
- **The travel map** — two rails, the seam band between them, clickable
  steering hatches, the compass rose, the scale bar. The thing T actually
  asked for, drawn from derivations, never hand-drawn.
- **The reading panel** — frontmatter made legible: type badge, agent seal
  chip (verb resolved through the registry), classifier pills, version-chain
  tabs, a shelf-life bar for Findings carrying `stale_after:`, the inputs
  walk-back, the recorded-by state link, and `potential-next-steps` rendered
  as inert text — advice, never affordance, per the dispatch-surface refusal.

### Mobile

The shelf as its own screen with an estate-views footer rail; the travel map
turned ninety degrees — state chips in the left gutter, the seam as a
vertical stripe, supersede elbows, grouped runs labeled as runs ("THE PHASE
RUN"); the reading panel as a bottom sheet.

### The seven estate views

Grounds, Household, Types, Survey, Relates, Exports, Settings — all derived
from real data, empty layers honest in the glossary's words where nothing has
run.

### Settings

Estate root, generated-at, records covered, read-only mode stated as what it
is, and the rungs toggle — the one interactive setting in v1.

### Keyboard and deploy scaffolding

`esc` closes the panel; arrow keys walk a version chain. `wrangler.jsonc` is
assets-only; `npm run deploy` builds and publishes. The scaffolding exists;
the walk has not been taken (see the remaining phases).

---

## In flight — this same session

Not yet shipped, being added now; listed so the inventory is honest about
where the edge of "done" sits today:

1. **Map navigation.** Click-drag panning and scroll-wheel zoom on desktop;
   one-finger pan and pinch zoom on mobile; a zoom-controls overlay with
   reset.
2. **The drawer toggle.** A header control to collapse and expand the left
   sidebar.
3. **Drill-in panels for estate-view entities.** An office in the Household,
   a type in the Types grid, an export in the departure lounge — each opening
   a reading panel with derived detail and jump links into the records.

---

## Remaining v1 phases

Sequenced as my Phases always are: outcome, what done looks like, what each
waits on.

### Phase A — The polish and accessibility pass

Outcome: the shipped surfaces hold up under real use — focus order and
keyboard reachability across the panel and the map, contrast on the seam and
the pills, touch targets on mobile, the small visual debts a fast-track
accumulates. **Done looks like:** T uses the viewer for a real session on
both form factors and nothing snags. **Waits on:** the in-flight items
landing, since polish applied under a moving surface is polish applied twice.
The Trajectory's warning stands guard here: the named failure mode of this
whole record is a long polish tail, so this phase is a *pass*, bounded, not a
residency.

### Phase B — Regeneration ergonomics

Outcome: a freshness story that fits the SPA. `npm run dev` already
regenerates on start; the open question is the steady-state story — a watch
mode, or a deliberate re-run habit, or nothing beyond the stamp. **Done looks
like:** T never opens a stale view without the stamp telling him so, and
refreshing costs one action. **Waits on:** nothing — startable now.
Falsifier 3 (the staleness banner wins) reads its evidence off this phase's
surface, and the local-server reversal 0010 noted as possibly arriving "by
T's own hand" has, in the dev-server form, partly arrived; the phase should
say so plainly when it closes.

### Phase C — The deploy walk

Outcome: the viewer reachable off the machine it was built on. `wrangler
login` once, first publish via `npm run deploy`, and a **Cloudflare Access
gate** in front of it — the viewer is a read-only window on T's private
estate, and it does not go on the open internet ungated. **Done looks like:**
T opens the deployed URL from another device, passes the gate, and sees the
same estate with the same honest stamp. **Waits on:** Phase A far enough that
what deploys is worth showing, and T's Cloudflare account at the console —
this phase has a step only T can take, and it says so rather than pretending
the walk is scriptable end to end.

### Phase D — The record-keeping catch-up

Outcome: the record made whole about what happened. The deviation from the
sealed Seed's letter — `/ui` instead of `docs/estate-view/`, a framework
instead of none, at T's instruction, for the far horizon's sake — **deserves
a Decision artifact, and The Chancellor has not run.** I name that as an open
decision and decide nothing: `decide` is not my verb, and classifying the gap
honestly while leaving the call to T and the Chancellor is exactly the
classify-never-gate discipline the viewer itself renders. The same phase
should let the Steward's state say plainly which prior Phases (0005–0009)
were overtaken rather than executed, so lineage reads true. **Done looks
like:** a Decision exists with this deviation as its subject, and no reader
of this record has to reconstruct from git what the frontmatter should have
told them. **Waits on:** nothing but dispatch — startable the next session
the Steward opens.

---

## On writing a Phase after the Seed

This artifact is itself the pattern T has named as intended: **the workflow
stays adaptable — artifacts may be created at any step of an idea's travel,
not only on the strict idea→seed rail.** The estate permits it and this
record has already done it once: 0010 folded a six-month vision into a sealed
Horizon the day after export. A Phase written after the build it phases is
unusual surveying — mapping ground by walking it — but the alternative is a
record that pretends the route ran as charted, and a record that flatters its
own plan is worth less than one that tells you where the plan was overtaken.
The inventory above is the honest survey; Phase D is where the record's
formal instruments catch up to it.
