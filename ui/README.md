# Estate View — v1

A read-only visual browser for the estate, implementing the approved design
(`Estate View Prototype.dc.html` + the mobile frames from claude.ai/design).
Live data: every pixel is derived from the real records in `../ideas/`,
`../exports/`, and `../system/registry.md` — nothing is hand-written into the UI.

## Architecture

The durable seam is the **data contract** (`src/lib/types.ts`):

- `scripts/generate.mjs` — zero-dependency Node script. Walks the estate,
  parses the narrow frontmatter subset actually in use, and emits
  `src/data/estate.json`. Parsing only — no layout, no judgment.
- `src/lib/derive.ts` — pure graph derivation: version chains (refiner verbs
  supersede; research runs do not), tip-finding, the wall, rungs, steering
  seams, map layout. No DOM, no React.
- `src/components/` — the thin render layer: desktop (sidebar / travel map /
  reading panel) and mobile (shelf / map turned ninety degrees / bottom sheet).

One deliberate exception to "every pixel is derived": `src/components/how/`
(the **How it works** tab) is authored walkthrough content — an animated tour
of the pipeline on a worked example that is not a record. It reads nothing
from `estate.json` and says so in its header.

In v2 the same contract shapes are served from a database API; the generator
becomes an importer and nothing above the seam changes.

## Commands

```
npm run dev      # regenerate data + Vite dev server
npm run build    # regenerate + typecheck + production build to dist/
npm run deploy   # build + wrangler deploy (Cloudflare Workers static assets)
```

`wrangler.jsonc` is assets-only for v1. Run `wrangler login` once before the
first deploy. v2 adds a `main` Worker (API), D1, and AI Gateway to the same file.

## Notes

- The snapshot stamp is real: `generated <time>` is when generate.mjs last ran.
  Honesty about the snapshot's age is a feature, not chrome.
- Keyboard: `esc` closes the reading panel; `←`/`→` walk a version chain.
- `src/data/estate.json` is derived data — regenerate at will, never edit.
