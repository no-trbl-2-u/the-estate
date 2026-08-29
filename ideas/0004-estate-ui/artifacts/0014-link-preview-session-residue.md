---
id: idea-0004/artifacts/0014-link-preview-session-residue.md
type: Spark
shape: prose
lenses: []
produced-by: capture
inputs: []
date: 2026-08-29
classifiers:
  challenged: false
potential-next-steps: [decide, frame]
summary: "Six residue items from the link-preview stretch that followed the deploy: the reported defect did not exist — idea-estate.com served a complete Open Graph card throughout, confirmed from an external fetcher outside the sandbox — while three successive diagnoses (stale scraper cache, missing tags, Apple-specific strictness) were each asserted with more confidence than the evidence carried; the measurement blind spot that mattered, an egress proxy terminating TLS so every direct observation described the proxy's framing rather than Cloudflare's and produced two false leads (absent Content-Length, ignored Range requests); the SPA not-found fallback that returns index.html with 200 for any missing asset, so a missing file is indistinguishable from a present one without checking Content-Type; the deploy token lacking Workers Routes permission, which fails `wrangler deploy` at route reconciliation *after* the assets have already shipped, so a failed deploy is still a deploy; the four genuine but unrelated defects the investigation turned up and fixed; and the unresolved original question, still waiting on a second device."
---

# Link-preview session — residue

*Provenance: captured from the link-preview investigation of 2026-08-29, T
operating, continuing directly from `0013-deploy-session-residue.md`. Filed at
T's direct instruction. Written by the Steward rather than dispatched to The
Gardener: agent dispatch is disabled in this session's configuration, so the
capture ran inline. That is a deviation from the estate's own rule that agents
write artifacts, and it is recorded here rather than hidden. I have not tidied
or re-ranked the items.*

---

## The six items

### 1. The reported defect did not exist.

T reported that texting `idea-estate.com` produced no title, description, or
image. Every subsequent check found the site serving a complete and valid
`summary_large_image` card: title, description, `og:url`, `og:image` with
width, height and alt, the Twitter block, canonical, and JSON-LD — over both
HTTP and HTTPS, on apex and `www`, to every scraper user-agent tried including
`Applebot` and the combined `facebookexternalhit/1.1 Facebot Twitterbot/1.0`
string Apple sends. An external fetcher (microlink), running on its own
servers with no involvement from this network, pulled the full card including
the 1200×630 PNG. The investigation never found a fault in the page.

### 2. Three diagnoses, each asserted past its evidence.

The stretch produced three successive explanations, and the first two were
stated to T with more confidence than they had earned:

- **Stale scraper cache.** The custom domain went live at 18:21 and the
  metadata deployed at 18:28; a link shared in that seven-minute window would
  be scraped bare and cached. Plausible, and presented as near-settled. It was
  not.
- **A cache-busting query string would prove it.** `?v=2` was offered as the
  decisive test. It is not decisive: iOS caches a failed `LinkPresentation`
  fetch in a way that a changed query string does not reliably bypass. When
  the test failed, it was treated as refuting the cache theory, which it did
  not do either. The test was wrong in both directions.
- **Apple-specific strictness.** Superseded by item 3.

The pattern worth keeping is not any one wrong guess — it is that each was
delivered as a conclusion rather than a hypothesis, and the correction had to
come from T reporting failure a second and third time.

### 3. The blind spot that mattered: the proxy was the observer.

Every direct measurement in this stretch ran through the sandbox's egress
proxy, which terminates TLS. An `openssl s_client` probe returned a
certificate issued by `O = Anthropic, CN = Egress Gateway SDS Issuing CA`, not
Cloudflare's — meaning every "verified live" claim made before that point
described what the proxy returned, not what Cloudflare serves. Two findings
that had been flagged as prime suspects turned out to be artifacts of this:
responses appeared to carry no `Content-Length`, and a `Range` request for the
first kilobyte of `og.png` returned all 109,324 bytes with `200` instead of
`206`. The external fetcher's report of the image's exact byte size is decent
evidence `Content-Length` is present in reality. **The instrument was inside
the system it was measuring, and nothing surfaced that until it was checked
directly.**

### 4. The SPA fallback makes a missing asset look like a present one.

`ui/wrangler.jsonc` sets `not_found_handling: "single-page-application"`, so
any unknown path returns `index.html` with `200`. During this stretch
`/apple-touch-icon.png` returned `200` while the file did not exist on the
server — the status code said success and the body was HTML. Verifying an
asset deployed requires checking `Content-Type` or byte size, never the status
code alone. This will mislead again.

### 5. A failed deploy is still a deploy.

The Cloudflare API token in the environment lacks Workers Routes permission.
`wrangler deploy` uploads assets first and reconciles routes second, so it
exited with `Authentication error [code: 10000]` *after* the new assets had
already shipped. The deploy was reported as blocked and was in fact live; that
was only discovered by re-checking the site. Two consequences worth keeping:
the token needs Workers Routes edit permission for `wrangler deploy` to
complete cleanly, and a wrangler error does not mean nothing changed.

### 6. Four real defects, found by accident, all unrelated to the complaint.

The investigation fixed nothing that caused the reported symptom, but did turn
up genuine faults while looking: `apple-touch-icon` pointed at the 1200×630 OG
screenshot, which iOS squashes into a square tile (replaced with a real 180×180
opaque PNG rendered from `favicon.svg`); `Content-Type` carried no charset,
leaving the em-dash in the title and description to a parser's guess (now
declared in a `_headers` rule); `og:image:secure_url`, `og:image:type`,
`og:locale` and `twitter:image:alt` were absent; and `site.webmanifest` offered
no raster icon for Android launchers. Shipped as PRs #15 and #16, both live.

---

## The question still open

Why a blue-bubble iMessage containing nothing but the bare URL renders no
card. Every server-side explanation has been eliminated from every vantage
point available here. The untested variable is the sending device — iOS
caches a failed preview fetch locally — and the pending experiment is to send
the same link from a second phone that has never opened the domain. If it
previews there, the fault is the local cache and a reboot clears it. If it
does not, the cause is something no vantage point in this session could see.

---

*Captured 2026-08-29. Items 2 and 3 are about the investigation rather than the
site; they are kept because the stretch's most durable finding is a way of
being wrong, not a defect in the estate.*
