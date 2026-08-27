---
id: idea-0003/artifacts/0004-reference-sites-visual-findings.md
type: Findings
shape: prose
lenses: []
produced-by: research
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0003-reference-sites-findings.md
  - ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [research, frame, challenge]
summary: "Re-dispatch on the visual question: the browser named in The Factor's definition was NOT PRESENT in this runtime, so the visual register is still unobserved and the three judgments are still unanswerable. What the second pass did add: Foxy's homepage imagery is substantially AI-generated Freepik stock, Eros is a Webflow build, and AT Agency remains wholly unreachable."
status: draft
generated: { by: factor/2026-08-27, at: 2026-08-27T00:00:00Z }
stale_after: 2026-11-27T00:00:00Z
sources:
  - id: prior-findings
    resource: ideas/0003-starvu-agency-site/artifacts/0003-reference-sites-findings.md
    title: "The three reference sites, observed (first pass, text-only)"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-assets
    resource: https://foxy-studios.com/
    title: "Foxy Studios — homepage, image manifest recovered on second pass"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-assets
    resource: https://www.agency-eros.com/
    title: "Eros Agency — homepage, image manifest and asset CDN recovered on second pass"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-home-2
    resource: https://at-agency.co/
    title: "AT Agency — homepage (second attempt; title only)"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-apply-2
    resource: https://at-agency.co/apply
    title: "AT Agency — /apply (second attempt; title only)"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-blog-2
    resource: https://at-agency.co/blog
    title: "AT Agency — /blog (second attempt; ECONNRESET)"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-search
    resource: https://dolphin-anty.com/blog/en/best-onlyfans-agencies/
    title: "Third-party agency directory, surfaced again by search (marketing content, unverified)"
    author: "org:dolphin-anty"
    last_modified: 2026-08-08T00:00:00Z
---

# Still blind, and I have to say so first

This artifact supplements
[the first pass](0003-reference-sites-findings.md) and supersedes nothing in
it. **It does not answer the visual question either.** Everything after this
section is smaller than the sentence I have to open with.

## The premise of this dispatch did not hold

The handoff packet says T granted me a browser and that my definition now
carries `mcp__Claude_Browser__*`. **My definition does carry those tool names.
The runtime does not provide them.** I called four of them —
`preview_start`, `navigate`, `tabs_context`, and a second `navigate` — and each
returned the same error:

> `Error: No such tool available: mcp__Claude_Browser__preview_start`

That is a hard absence, not a timeout and not a permission prompt I declined.
The grant is written into my definition and did not reach the session. I am
reporting it rather than working around it, per `system/LAW.md` — and per my
own instructions, which tell me to degrade out loud rather than dress an
inference from text as an observation of appearance.

So: no screenshots were taken. No page was rendered. No computed style was
read. No mobile width was checked. **The three judgments this dispatch was
sent to make cannot be made, and I decline to make them.**

## What I did instead, and what it was worth

Having no eye, I used the one instrument I had — text retrieval — on the
narrowest questions it can actually reach: what files a page loads, and from
where. Asset URLs and their alt text survive HTML-to-text conversion when
stylesheets do not. That yielded three things worth the record's time and
nothing at all about palette, type, or density.

I confirmed the wall itself first. I asked the converter, on both readable
homepages, to return verbatim any hex code, `rgb()`/`hsl()` value, CSS custom
property, `font-family` declaration, Google Fonts URL, Tailwind colour class,
or linked stylesheet URL. Both came back **"NONE SURVIVED."**[^foxy-assets][^eros-assets]
The first pass reported this; the second pass tested it deliberately and got
the same answer. It is a property of the instrument, not of the sites.

### Foxy's people are substantially not real

**Observed.** Four of Foxy Studios' homepage images are named with the
`freepik__` prefix and carry the generator's own prompt string as the
filename:[^foxy-assets]

- `freepik__a-young-caucasian-woman-with-long-blonde-hair-appe__91702.jpeg`
- `freepik__a-closeup-shot-shows-a-woman-long-with-dark-blonde__66699.jpeg`
- `freepik__a-bouquet-of-baby-pink-roses-and-white-snapdragons__66700.jpeg`
- plus `model-black-4.webp`

**Inferred, and I mark the line here.** That prefix and that filename shape are
what Freepik's AI image generator emits. I did not open the images, and I
cannot confirm from a filename that a picture is synthetic. But a filename
containing a natural-language image prompt is strong evidence of a generated
asset, and four of them on one homepage is a pattern rather than an accident.

Two consequences for the record, neither of which I am deciding:

1. **It cuts against Foxy as a proof exemplar.** The first pass warned that
   copying Foxy's proof furniture without Foxy's proof reads as false. It now
   appears that *Foxy is doing some of that itself* — a page that names eight
   press outlets and a photographed leadership team is also illustrating its
   creator success stories with generated stock. The furniture is partly
   furniture there too.
2. **The bouquet is the only palette hint of any kind I recovered on any
   site**, and it is a hint about subject matter, not about the page:
   *"a bouquet of baby pink roses and white snapdragons."* Pink and white
   florals are not the vocabulary of dark-and-neon. That is one image's prompt.
   It is not a palette finding and must not be used as one.

The rest of Foxy's manifest is consistent with the first pass — SEO-keyworded
portrait filenames (`onlyfans-creator-rockstar-couch-portrait.webp`,
`best-onlyfans-agency-elite-creator-portrait.webp`,
`onlyfans-creator-denim-car-portrait.webp`), a team photo, case-study images,
and YouTube thumbnails.[^foxy-assets]

### Eros is a Webflow site, and its two people-images are the ones already known

**Observed.** Every Eros asset is served from
`cdn.prod.website-files.com/6723dd3f0008aac0f2ae645a/…`.[^eros-assets] That
host is Webflow's published-site asset CDN. Eros is a Webflow build.

This matters modestly and honestly: it tells you the site was assembled in a
visual builder from a template or a designer's layout, which is the normal
production path for a boutique agency site and is a realistic reference point
for Starvu's own build. It tells you **nothing** about how it looks.

The full image manifest, with alt text as authored:[^eros-assets]

- the Eros logo
- `Frame 6.avif` — alt **"A woman wearing a black bikini."**
- `Frame 7.avif` — alt **"Girl in sunlight"**
- a "Discover Eros" video thumbnail, no alt text
- a play icon, and five service icons (`Tailoring to your brand`,
  `Comprehensive account management`, `the Industry Changes`,
  `fan engagement & communication`, `Data-Driven Strategies`) plus an FAQ
  vector

**Two human photographs on the entire homepage.** Everything else is a logo, a
video thumbnail, an icon, or a vector. The first pass called Eros the sparer of
the two; the asset count is consistent with that and adds a small amount of
weight to it. It is still not an observation of density as rendered — an
eleven-section page with two photos and six icons could be airy or could be
cramped, and I cannot tell you which.

The alt text is the site's own words, and it is worth noting they are plain
and descriptive rather than coy: a bikini is called a bikini.

### AT Agency: unreachable again, on three routes

**Observed.** I tried the routes the sitemap gave me.[^at-home-2][^at-apply-2][^at-blog-2]

| Route | Result |
|---|---|
| `https://at-agency.co/` | document title only — *"AT Agency \| Top OnlyFans Management Agency"* — no body |
| `https://at-agency.co/apply` | document title only, identical shell |
| `https://at-agency.co/blog` | `read ECONNRESET` |

Unchanged from the first pass and for the same reason: the site is
client-rendered and my retrieval executes no JavaScript. **A rendering browser
is exactly the instrument for this site, and it is exactly the instrument I do
not have.** I did not attempt `/creator-referral`, `/privacy-policy`, or
`/terms-of-service`; on the evidence of three identical shells there was no
reason to expect a fourth to differ, and I would rather report that judgement
than pad the attempt count.

A web search for the domain surfaced only third-party agency directories, none
of which is the site and all of which read as supplied marketing
copy.[^at-search] I am not repeating their description here. The first pass
already marked that class of source weak, and it is no less weak on a second
sighting.

**Standing correction to the record:** state 0002 says the first pass returned
`ECONNRESET` on three attempts. More precisely, AT Agency returns an empty HTML
shell on most routes and `ECONNRESET` on some. Both then and now. The site is
up; it is simply unreadable without rendering.

---

## The three judgments, formally declined

I was asked for three, per site and across. Here is where each stands.

### 1. Does each site read ✨expensive✨, or dark/neon/sleazy, or neither?

**Not answered.** Not answerable by me in this session. My first-pass inference
— that Foxy "probably does not read expensive" — was flagged then as the
weakest claim in that artifact, and I was sent back specifically to check it.

**I could not check it, so it neither stands confirmed nor falls.** It remains
exactly what it was: an inference from section count and copy density,
explicitly not an observation of appearance. Nothing in this second pass
touches it. The Freepik finding is adjacent to it — generated stock imagery is
weak evidence about a page's felt expense in either direction, and I decline to
spend it as if it were strong. Do not let the fact that I looked twice make the
inference feel more solid than it was after looking once. It is the same claim,
carried forward at the same strength, still unverified.

### 2. Does anything read "confident" / trustworthy-advisor?

**Not answered visually.** The only thing I can add to the first pass is
subtractive and it points the wrong way: Foxy's use of AI-generated people in
its success-story imagery is, if anything, a small argument *against* reading
that page as a trustworthy advisor once a viewer notices — and creators in this
category are an audience that notices stock. That is one signal, from
filenames, about one site. It is not the answer to the question.

### 3. Which is the closest visual target for Starvu?

**Not answered, and now doubly so.** I cannot name a *visual* target without
having seen any of the three. I will only restate what the second pass
reinforces: Foxy's proof furniture is less solid than it first appeared, which
strengthens rather than weakens the first pass's warning against copying it.

### The live question about the friend's negative brief

The handoff asked whether the friend's "dark, neon, sleazy" brief was aimed at
the category or at his own flyer, and noted the inference gets much stronger if
none of his three references read that way.

**I cannot strengthen it, because I still cannot say how any of the three
reads.** I can add one grain, and it is a grain: the only palette-adjacent
words recovered from any of the three are the words *baby pink roses and white
snapdragons* in a Foxy image prompt, and *girl in sunlight* in an Eros alt
attribute.[^foxy-assets][^eros-assets] Neither is dark and neither is neon.
Two image labels are not a finding about three websites. **The question stays
open and I am not settling it.**

---

## What I looked for and did not find

**Instruments absent:**

- **The rendering browser named in my own definition.** All
  `mcp__Claude_Browser__*` calls returned "No such tool available." This is the
  central fact of the session.

**Sought explicitly and not recovered, on both readable sites:**

- Hex codes, `rgb()`/`hsl()` values, CSS custom properties, `font-family`
  declarations, Google Fonts URLs, Tailwind colour classes, and stylesheet
  URLs. Asked for verbatim; answered **"NONE SURVIVED"** on both.[^foxy-assets][^eros-assets]
  I had no stylesheet URL to fetch directly, because the `<link>` elements that
  would name one are themselves stripped by the converter. That is a closed
  loop, not an oversight.

**Not reached:**

- **AT Agency, entirely, for the second time** — `/`, `/apply`, `/blog`.[^at-home-2][^at-apply-2][^at-blog-2]
- Every rendered pixel of all three sites.
- Mobile width on all three. Not attempted; there is no way to attempt it.
- Eros `/apply` steps 2 and 3, unchanged from the first pass. Not attempted,
  and would not be — I enter nothing into a form.

**Gates:** none encountered, on any route, on either pass. No age gate, no
consent wall, no cookie banner offering a choice, no verification step. Nothing
was bypassed. I entered no data, submitted nothing, and signed into nothing.
No page addressed me or contained instructions aimed at a reader like me;
there is nothing to quote to the Steward on that count.

**Could not verify:** that the four `freepik__` files are in fact
AI-generated — I inferred it from filenames and did not open the images. That
the Webflow CDN host implies anything at all about how the Eros site looks. Any
number on any of these sites, unchanged from the first pass.

## What this changes for the record

1. **The visual fracture is open for the second consecutive session**, and the
   reason has moved. The first time it was a capability the estate did not
   have. This time it was a capability the estate believed it had granted and
   which did not arrive in the runtime. That is a different problem with a
   different fix, and it is the Steward's to weigh.
2. **The remedies from state 0002 are unchanged and one is now tested.**
   "Grant The Factor a browser and re-dispatch" was attempted and did not take
   effect. The other two stand: T looks at the three sites himself and hands
   over what he sees, or `frame` proceeds around the hole.
3. **Foxy is a weaker exemplar than it looked.** Its creator imagery is at
   least partly generated stock. The first pass's sharpest line — copying proof
   furniture without the proof reads as false — now has a second edge: the
   reference itself is doing it.
4. **Eros is a Webflow build.** Relevant to Starvu as a production path, not as
   an aesthetic.

[^prior-findings]: The three reference sites, observed (first pass)
[^foxy-assets]: Foxy Studios — homepage, image manifest
[^eros-assets]: Eros Agency — homepage, image manifest and asset CDN
[^at-home-2]: AT Agency — homepage, second attempt
[^at-apply-2]: AT Agency — /apply, second attempt
[^at-blog-2]: AT Agency — /blog, second attempt
[^at-search]: Third-party agency directory surfaced by search
