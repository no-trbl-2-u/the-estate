---
id: idea-0004/artifacts/0013-deploy-session-residue.md
type: Spark
shape: prose
lenses: []
produced-by: capture
inputs: []
date: 2026-08-28
classifiers:
  challenged: false
potential-next-steps: [decide, frame]
summary: "Five residue items from the deploy-and-publish stretch that answered state 0006's open deploy walk: Estate View live at idea-estate.com on Cloudflare Workers with DNS and TLS provisioned automatically and ~5-second deploys, the wrangler OAuth failure mode (Chrome auto-retrying a dead localhost error tab delivers stale state — park the tab on a neutral URL first), the discovery that the build law's plain-text derivation proof is exactly what AI-readiness means in 2026 (llms.txt, llms-full.txt, sitemap, crawler-welcoming robots.txt, a real screenshot OG card), the undecided tension that the whole estate — including idea-0003's friend's-business details — is now public and machine-ingestable with Cloudflare Access as the zero-code gate, and the honest note that client rendering leaves the HTML source empty of map content, SSR being an unasked-for v2 decision."
---

# Deploy session — residue

*Provenance: captured verbatim-faithful from the deploy-and-publish stretch of
2026-08-28, T operating — the same day as, and continuing from,
`0012-build-session-residue.md`. State 0006 closed with the deploy walk named
as an open question; this stretch answered it. Filed at T's direct
instruction. I have not tidied, merged, or re-ranked the items, and I do not
repeat 0012's.*

---

## The five items

### 1. The deploy walk landed, all of it.

Estate View is live at https://idea-estate.com (and www), deployed to
Cloudflare Workers static assets. T bought idea-estate.com through Cloudflare
mid-session; adding custom-domain routes to `ui/wrangler.jsonc` made
Cloudflare provision DNS records and TLS certificates automatically on deploy
— no manual DNS work existed to do. Deploys take ~5 seconds via
`npm run deploy`. The workers.dev URL was implicitly disabled the moment
explicit routes existed; the domain is now the single canonical URL.

### 2. The wrangler OAuth walk was the hard part; keep the failure mode.

`wrangler login` under automation failed three times with "invalid returned
state" because Chrome auto-retries a dead `localhost:8976` error tab the
instant the next login server starts listening, delivering a stale OAuth state
that kills the server before the real authorization arrives. The fix: park the
browser tab on a neutral URL before starting each login attempt. (One failure
was also a plain misclick that hit Cancel — the page shifted between
screenshots.)

### 3. A discovery that closes a loop: the build law is the AI-readiness spec.

The estate's own build law — "the derivation is proven as plain text first" —
turned out to be exactly what AI-readiness means in 2026. The generator now
emits `/llms.txt` and `/llms-full.txt` (the entire estate as plain text, every
artifact summary and state narration) on every build, plus `sitemap.xml`;
`robots.txt` explicitly welcomes AI crawlers. Leg 1's text verification mode
is now a published, public artifact of the site itself. The OG card is a real
1200x630 screenshot of the travel map, captured from the live site by
headless Chrome.

### 4. The sharpest open tension: the estate is public and invites ingestion.

Named twice to T this stretch, not yet decided: the entire estate is now
PUBLIC and actively invites machine ingestion — including idea-0003, the
Starvu record, which carries a friend's business details, reference-site
teardowns, and verbatim operator messages. `/llms-full.txt` serves all of it
as text to anyone. The zero-code gate is Cloudflare Access (also the natural
first step of the recorded v2 login vision). This is a decide-shaped item
now, not a note.

### 5. A smaller honesty: the HTML source carries no map.

The app is client-rendered, so the HTML source carries no map content;
crawler coverage is via metadata, a noscript fallback, and the text editions.
Server-side rendering is a v2-sized decision nobody has asked for yet.

---

*Captured by The Gardener, 2026-08-28. The items are preserved as they
arrived; where item 4 presses for a decision, the pressing is the session's,
and the deciding is T's.*
