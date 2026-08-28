---
id: idea-0004/artifacts/0012-build-session-residue.md
type: Spark
shape: prose
lenses: []
produced-by: capture
inputs: []
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [frame, decide, envision]
summary: "Six residue items from the v1 build session: a v2 vision (login, AI chat, databased artifacts) that steered the v1 stack decision while recorded nowhere in the estate, Cloudflare chosen as its platform on capabilities the session did not yet actually hold, T's verbatim-adjacent claim that the flow should create artifacts at any step rather than only the idea-to-seed rail, the refiner-verb supersession rule discovered under load in derive.ts, the design-import mechanics learned the hard way, and the honestly-named gaps — the deviation from the sealed Seed still owed a Decision from a Chancellor who has never run, and a build session whose central work has no verb the estate knows."
---

# Build session — residue

*Provenance: captured verbatim-faithful from the session of 2026-08-28, T
operating — the session that built Estate View v1 into `/ui` and filed
`0011-ui-v1-phases.md` immediately before this artifact. This capture sits
beside that Phase, not on top of it: 0011 is the survey of the ground taken;
these are the observations that fell out of taking it. Filed at T's direct
instruction. I have not tidied, merged, or re-ranked the items.*

---

## The six items

### 1. A v2 vision steered a v1 decision, and the vision is recorded nowhere.

T revealed a v2 vision for Estate View that no artifact in the estate holds:
user login, an AI chat interface, databased artifacts. Every existing artifact
— Horizon, Seed, the Settings copy in the shipped viewer itself — says the
opposite: read-only by construction, no writer, self-contained. The v1 stack
decision (Vite + React + TS SPA in `/ui` instead of the Seed's
`docs/estate-view/` zero-dep HTML) was made *because* of that unrecorded
vision. The gap lived in T's head, and T noticed it himself mid-session: *"a
point of failure might be somewhere since you didn't know."*

### 2. Cloudflare is the v2 platform, chosen on access the session did not yet have.

After discussion T chose Cloudflare: Workers static assets for the SPA, D1 for
databased artifacts, Workers AI / AI Gateway for chat, Cloudflare Access for
single-operator login — zero auth code. Wrangler scaffolding went into v1 at
T's instruction. But no Cloudflare MCP was connected and wrangler was not
installed at session start — the session's claim of "full access to my
Cloudflare" was aspiration, not fact, at the time it was made.

### 3. T stated a structural intent about the estate itself.

Verbatim-adjacent: *"I want the flow to be adaptable in order to create
artifacts at any step/phase of the idea"* — not only the strict idea → seed
rail. He said this while asking for the ui-v1-phases file, acknowledging it
"doesn't perfectly fit the exact workflow." This is a claim about the estate's
law, not just about idea-0004, and it is Spark-worthy on its own.

### 4. Supersession must be derived only through refiner verbs.

A derivation discovery made during the build, now load-bearing in
`ui/src/lib/derive.ts`: a same-type single-input rule alone falsely marks
research runs — Findings citing Findings — as superseded. Restricting
supersession to the refiner verbs (challenge, explore, distill) fixes it, and
the approved design's hand-marked demo data confirmed the refiner rule on
every case.

### 5. Design-import mechanics, learned by doing.

claude.ai/design projects are readable from Claude Code via the DesignSync
tool after `/design-consent` — *not* `/design-login`, which is unavailable
outside interactive terminals. The design's `support.js` is the dc-runtime
harness, not design content. And the prototype's demo data turned out to be
hand-derived from the real records, which made the live-data implementation a
faithful substitution rather than a rebuild.

### 6. Left open, named honestly.

The deviation from the sealed Seed deserves a Decision — and the Chancellor
has never run, on any record. The estate has no recorded artifact for the v2
vision (item 1 is its first trace). And while this build session performed no
estate verbs itself — it dispatched `phase` and `capture` properly — the UI
build work at its center has no verb in the registry at all: "build" is not a
verb the estate knows.

---

*Captured by The Gardener, 2026-08-28. The items are preserved as they
arrived; where they point at gaps, the pointing is the session's, not mine.*
