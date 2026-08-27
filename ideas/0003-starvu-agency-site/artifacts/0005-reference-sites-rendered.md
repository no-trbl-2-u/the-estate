---
id: idea-0003/artifacts/0005-reference-sites-rendered.md
type: Findings
shape: prose
lenses: []
produced-by: research
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0004-reference-sites-visual-findings.md
  - ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [frame, challenge, explore]
summary: "The browser arrived. All three sites rendered — AT Agency for the first time in four passes — and their palettes and typography were read from computed style. Eros is the dark/neon one (#050505 + #EC1194 + film grain). Foxy is the light editorial one (#FFFFFF + #0D1129 + Playfair Display). AT Agency is black + electric blue tech-SaaS. My standing inference about Foxy is half-overturned: its surface is the most expensive of the three, its quantity is the least. Screenshots still failed, so no photograph was seen."
status: draft
generated: { by: factor/2026-08-27, at: 2026-08-27T00:00:00Z }
stale_after: 2026-11-27T00:00:00Z
sources:
  - id: prior-visual
    resource: ideas/0003-starvu-agency-site/artifacts/0004-reference-sites-visual-findings.md
    title: "Reference sites, second pass — the browser was absent"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: north-star
    resource: ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
    title: "The North Star (T's declaration)"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-rendered
    resource: https://foxy-studios.com/
    title: "Foxy Studios — homepage, rendered; computed style read at 1280x720 and 375x812"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-rendered
    resource: https://agency-eros.com/
    title: "Eros Agency — homepage, rendered; computed style read at 1440x900 and 375x812"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-rendered
    resource: https://at-agency.co/
    title: "AT Agency — homepage, rendered for the first time; computed style read at 1440x900 and 375x812"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-apply-rendered
    resource: https://at-agency.co/apply
    title: "AT Agency — /apply, rendered"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-blog-rendered
    resource: https://at-agency.co/blog
    title: "AT Agency — /blog, rendered; 9,258 characters of editorial content"
    last_modified: 2026-08-27T00:00:00Z
---

# What the instrument actually turned out to be

The browser arrived. It is not the instrument the handoff packet expected, and
the difference matters enough to state before any finding.

**What worked.** `preview_start` opened the pane. Pages loaded and *executed
their JavaScript*. `get_page_text` and `read_page` returned live DOM.
`javascript_tool` read computed styles — real, post-cascade, post-media-query
values. Clicks by element reference worked. `resize_window` emulated phone
width and the layout responded. **AT Agency rendered for the first time in four
passes.**[^at-rendered]

**What did not.** Every `computer` screenshot failed, four attempts, with the
same error:

> `Screenshot timed out after 5s: the Browser pane is not displayed, so the page is not compositing frames.`

Fronting the tab did not fix it. There is no other rendering surface: I searched
the deferred-tool registry for `claude-in-chrome` and for `computer-use` and both
returned **"No matching deferred tools found."** Only `WebFetch` and `WebSearch`
were deferred.

So the honest description of this pass is: **I measured these pages. I did not
see them.** That is an enormous advance on two text-only passes and it is not
the same thing as looking. Three specific consequences, and I will hold to them
throughout:

1. **No photograph was seen.** I cannot tell you whether Foxy's `freepik__`
   stock reads as generated on screen. That question was asked and it is not
   answered.
2. **Nothing driven by `IntersectionObserver` fired**, because that API needs
   compositing. Foxy's lazy-loaded photography never loaded (11 of 68 images
   resolved, and all eleven were the same logo file).[^foxy-rendered] AT
   Agency's count-up statistics sat at `0+`, `$0M+`, `0/7` — so **AT's claimed
   numbers are still unread**.[^at-rendered]
3. **I counted motion; I did not watch it.** "Four animated elements" is a
   measurement, not an impression.

Everything below marked **Observed** is a computed value read out of a live
rendered document. Everything marked **Inferred** is me reasoning from those
values to how a page would feel. The seam is real and I have kept it visible.

One more limit worth recording: **`https://at-agency.co/?utm_source=feedspot`
was refused** — "navigation to https://at-agency.co was denied or failed." The
bare `https://at-agency.co/` loaded immediately. I did not diagnose why; I note
it because the handoff supplied the utm form and someone may hit the same wall.

---

# Foxy Studios

## Observed

**Palette.** Body background `#FFFFFF`. Body text `rgb(26, 26, 26)`. The
structural dark is `rgb(13, 17, 41)` — `#0D1129`, a very deep desaturated navy —
used on 73 elements as a background and 441 as a text colour. Third surface is
`#F5F5F5`, then `#FAFAFA`. Sections alternate white / `#F5F5F5` / navy down the
page.[^foxy-rendered]

**Typography.** Headings are **Playfair Display**, a high-contrast
transitional serif, on 133 elements. `h1` is 72px / 75.6px line-height, **weight
500**, `letter-spacing: normal`, `text-transform: none`, in `#0D1129`. Section
`h2`s run 40–56px in the same face and weight. Body is **Inter** (2,045
elements). **Bebas Neue** appears on 19 elements only.[^foxy-rendered]

The `h1` reads: *"An OnlyFans agency built by women, for the top 0.1%"* — set in
sentence case, not caps.

**Buttons.** Navy `#0D1129` fill, white text, Inter 600, `border-radius: 100px`
— full pills. The nav CTA is 11.2px uppercase with `1.68px` tracking; the
in-page CTAs are 13.6–16px sentence case, untracked.[^foxy-rendered]

**Saturated colour is present but confined.** Tailwind's default palette shows
up — `rgb(239,68,68)` red, `rgb(34,197,94)` green, `rgb(59,130,246)` blue,
`rgb(139,92,246)` violet, `rgb(236,72,153)` pink. I traced them: they are
comparison-table ticks and crosses, and the dots and header of a mock
"30-Day Performance Report" panel that carries a
`linear-gradient(135deg, #EC1199, #A855F7)`. They are dashboard chrome, not
brand colour.[^foxy-rendered]

**There is gold.** `rgb(212, 162, 76)` and a
`linear-gradient(135deg, #D4AF37, #F4D03F)`. The first is the cookie banner's
accent; the second sits on a badge element.[^foxy-rendered]

**Density.** Seventeen top-level sections. Section padding is generous —
80px to **128px** top and bottom. Total scroll height **16,968px at 1280 wide =
13.2 viewports**. At 375px it becomes 18,143px = **22.3 phone screens**, with no
page-level horizontal overflow (`documentElement.scrollWidth` = 375 exactly).
The `h1` drops 72px → 25.6px on mobile.[^foxy-rendered]

**Press.** The press block (`.x-press-grid`) contains **no logo images** — it is
set as text: outlet name, headline, pull quote. The recovered filename list
contains no press-logo assets at all.[^foxy-rendered]

**Cookie banner.** A 380×177 `position: fixed` card in the lower right, *not*
page-blocking. Text: *"A little cookie? We use one analytics cookie to see which
pages help creators most. No ads, no selling data."* Three controls: a gold
`Accept`, a text-link `Privacy policy`, and a plain `No thanks`. **I clicked
"No thanks."**[^foxy-rendered]

**Not loaded.** 57 of Foxy's 68 `<img>` elements never resolved. The four
`freepik__` files are present in the DOM as `src` attributes, alongside
`closeteamphoto.webp`, `onlyfans-management-agency-team-portrait.webp`, eight
`case-study-*.webp`, and a run of SEO-keyworded creator portraits. **I saw none
of them.**[^foxy-rendered]

## Inferred

White ground, deep-navy structure, a high-contrast serif at 500 weight in
sentence case, Inter for text, full-pill buttons, and no brand-level saturated
colour. **That is the visual vocabulary of a private bank, a law firm, or a
consultancy** — not of an adult-industry site. Of the three references it is by
a wide margin the most restrained surface.

And it is wrapped around seventeen sections and 22 phone screens.

---

# Eros Agency

## Observed

**Palette.** Body background `rgb(5, 5, 5)` — near-black, not pure black. The
dominant accent is `rgb(236, 17, 148)` = **`#EC1194`, a hot magenta**, on 33
text elements and 10 backgrounds plus many alpha variants. Secondary accent
`rgb(245, 184, 46)` = `#F5B82E`, an amber-gold. Also `rgb(255, 0, 100)`,
`rgb(217, 36, 120)`, `rgb(225, 70, 142)`.[^eros-rendered]

The gradients are the tell:

- `linear-gradient(0deg, #EC1194 20%, #F5B82E)` — magenta into amber
- `linear-gradient(135deg, #D92478, #FF4D94)`
- `linear-gradient(#C53C7F, #A30E67)` — the primary CTA
- `linear-gradient(90deg, transparent, #EC1194 18%, #F1B3.., ...)` — a rule or sweep

**The hero is a photographic composite.** A 1440×900 element (`.xh-section`)
stacks, in order: a `url()` background photograph at `cover`, a flat
`rgba(0,0,0,0.36)` scrim, and a `linear-gradient(rgba(255,255,255,0) 31%,
#000 96%)` fade-to-black at the bottom. Over it sits a sibling `.xh-grain` layer
— an inline SVG `feTurbulence` noise texture tiled at **200px × 200px**. A
second noise layer, `.ag-bg-noise`, appears 10,093px down the
page.[^eros-rendered]

**Typography.** Headings are **Lexend**, weight 500–600, **`text-transform:
uppercase`**. The visible hero headline is **80px** white Lexend 600 uppercase:
*"YOU CREATE, WE HANDLE EVERYTHING ELSE."* Section headings are 68px (desktop)
uppercase white. Body inherits `Arial, Helvetica Neue, Helvetica` on 467
elements — the Webflow default — with a webfont literally named
`"Afacad (custome)"` on 286.[^eros-rendered]

**The `h1` is not the headline.** Foxy's `h1` is its headline; Eros's `h1` is
**8px, uppercase, `#E1468E` pink, letter-spacing 0.8px**, reading *"ONLYFANS
MANAGEMENT AGENCY FOR ADULT CREATOR GROWTH."* That is an SEO string set as a
kicker above the real display type.[^eros-rendered]

**Buttons.** `border-radius: 999px` pills. Primary is the magenta gradient,
white Lexend 14px: *"GET YOUR FREE GROWTH PLAN →"*. Secondary is
`rgba(255,255,255,0.08)` translucent white: *"WATCH OUR TESTIMONIAL
VIDEOS."*[^eros-rendered]

**Density.** 15,103px at 1440×900 = **17.1 viewports**; 16,650px at 375 =
**20.5 phone screens**; no horizontal overflow. Section heights are extreme —
TESTIMONIALS 4,027px, OUR VALUES 4,793px, WHAT WE DO 3,765px. Section padding is
only 60px, far tighter than Foxy's 96–128px. Hero headline drops 80px → 32px on
mobile.[^eros-rendered]

**The two human photographs do not render.** The images the second pass
recovered from the manifest — alt `"A woman wearing a black bikini"` and
`"Girl in sunlight"` — measure **0 × 0 at 1440 wide and 0 × 0 at 375 wide**.
`display` is `block`/`inline-block` and `visibility` is `visible`; they are
simply collapsed to nothing. **They never appear at either width.** The visible
photography on this page is the hero background, which is a CSS background image
and carries no alt text.[^eros-rendered]

## Inferred

Near-black ground, hot magenta as the brand colour, magenta-to-amber gradients,
all-caps display type, a black scrim over a photograph, and a film-grain
overlay. **This is the dark/neon register.** It is executed with real craft — a
tiled turbulence-noise layer over a scrimmed hero is a deliberate cinematic move
that no template supplies by default — but craft does not move it out of the
category. If "dark, neon, sleazy" names anything in this set, it names this.

The 60px section padding against 4,000px section heights says something too:
this page is not airy. It is a long dark scroll with tightly-packed content in
very tall blocks.

---

# AT Agency — seen at last

Three passes returned an empty shell. It rendered on the first attempt here.

## Observed

**Palette.** Body background `rgb(0, 0, 0)` — pure black. Body text
`rgb(235, 240, 244)`, an off-white. Sections alternate `#000000` with
`rgb(6, 6, 15)`. The single accent is **electric blue**: `rgb(77, 184, 255)` =
`#4DB8FF` and `rgb(77, 175, 255)`. Muted text is `rgb(123, 142, 163)` and
`rgb(82, 100, 119)` — cool slate greys.[^at-rendered]

There is **no second accent hue anywhere on the page.** The only other saturated
value is `rgb(37, 211, 102)` — WhatsApp green, one icon.

**Glow is a design element, not an accident:**

- Four `radial-gradient(closest-side, rgba(77,184,255, 0.047–0.114), transparent 72%)` ambient washes
- The logo carries `filter: brightness(1.06) drop-shadow(rgba(77,184,255,0.6) 0 0 20px)` — a literal 20px blue halo
- The CTA is `linear-gradient(135deg, #1260B0, #2D8FFF 40%, #1A72D4, #0E56A8)`, `border-radius: 10px`

The site also uses `oklab()` colour values, which places the build in the last
year or two of CSS practice.[^at-rendered]

**Typography.** Display face is **Montserrat at weight 800**. The `h1` is
**96px / 103.68px line-height with `letter-spacing: -4.8px`** — that is −5%,
aggressive negative tracking. Section headings are 48–72px Montserrat 800 at
−0.96px to −3.6px. Body is Inter. Only two families on the entire
page.[^at-rendered]

**Section headings are authored in capitals**, not `text-transform`d, and every
one of them carries the keyword:[^at-rendered]

> WHY CREATORS CHOOSE OUR ONLYFANS AGENCY · ONLYFANS MANAGEMENT SERVICES ·
> CALCULATE YOUR POTENTIAL EARNINGS · RESULTS THAT SPEAK FOR THEMSELVES ·
> RESULTS FROM OUR OFM AGENCY · ONLYFANS CREATOR TESTIMONIALS · LEADING
> ONLYFANS MANAGEMENT AGENCY · PREMIUM ONLYFANS MANAGEMENT · ONLYFANS AGENCY FAQ

**Density — and this is the sharpest structural finding in the set.** Thirteen
sections, padding 64–112px. Total **11,956px at 1440×900 = 13.3 viewports**, and
at 375px **10,890px = 13.4 phone screens**. Against Foxy's 22.3 and Eros's 20.5,
**AT Agency is roughly 60% the length of either.** Its rendered body text is
short: the `innerText` of the whole homepage before scroll-reveal was 901
characters.[^at-rendered]

**The press logos appear to have been scraped.** The "As Seen In" strip carries
XBIZ, LA Weekly, AVN, FHM and Feedspot, all rendered under `filter:
grayscale(1)`. Their filenames are:[^at-rendered]

```
imageye___-_imgi_2_xbiz-logo-white_1778406010...
imageye___-_imgi_3_laweekly-logo-white_177840...
imageye___-_imgi_4_avn-logo-white_17784060106...
imageye___-_imgi_5_fhm_1778406010677-dm4cvBdy...
```

**Observed** is the filename prefix. **Inferred, and I mark the line:** "Imageye"
is a browser extension for bulk-downloading every image on a page, and
`imageye___-_imgi_N_` is the shape of the filename it emits. A filename carrying
a scraper's naming convention is strong evidence the asset was lifted off some
other page and re-uploaded rather than supplied by a media kit. I did not verify
the extension's output format independently, and a filename is not proof of
provenance.

**Urgency furniture.** *"ONLY 2 CREATOR SPOTS AVAILABLE THIS MONTH"* in the
hero; *"Only 2 creator spots available this month"* again at the
foot.[^at-rendered]

**`/apply`.** Same black-and-blue. `h2` "Apply to Work With Us" at 48px
Montserrat 700. **1.4 viewports — a single screen.** Ten fields: name, email,
phone, country, Instagram, OnlyFans handle, revenue band, goal, message, plus
one hidden text input named `_b8x2k` (a spam honeypot). Reassurance line: *"Takes
less than 2 minutes · 100% confidential · No commitment."* **I entered nothing
and submitted nothing.**[^at-apply-rendered]

**`/blog`.** Reached — 9,258 characters. A real editorial index with a category
filter (ALL / AGENCY / MARKETING / GROWTH / REVENUE / RETENTION / BRANDING /
BUSINESS), read-times, and dated posts. The two most recent are **August 24 and
August 22, 2026** — three and five days before this pass. This is an actively
published content-marketing operation.[^at-blog-rendered]

## Inferred

Pure black, one electric-blue accent, radial glows, a haloed logo, and
Montserrat 800 at −5% tracking. **This is the dark tech-SaaS / AI-startup
landing-page register** — the visual dialect of a developer tool or a crypto
product, applied to an adult-industry agency. It is dark and it is glow-lit, but
it is not *sleazy*: there is no pink, no magenta, no skin in the chrome, and no
photograph of a person anywhere I could measure.

It is also the most *disciplined* page of the three: two typefaces, one accent
hue, and a third of the scroll length its competitors carry.

---

# The three judgments

## 1. Expensive, dark/neon/sleazy, or neither?

| | Register | Verdict |
|---|---|---|
| **Foxy Studios** | White + `#0D1129` navy + Playfair Display serif + Inter + pill buttons | **Split.** Expensive *surface*, over-explaining *structure*. |
| **Eros** | `#050505` + `#EC1194` magenta + amber gradients + film grain + all-caps | **Dark/neon.** Squarely. Well-made, but the thing named. |
| **AT Agency** | `#000000` + `#4DB8FF` electric blue + glow + Montserrat 800 | **Dark, but not sleazy.** Tech, not neon. |

**On my standing inference about Foxy, I said I would confirm, correct, or
overturn. I am doing all three, and here is exactly which.**

I inferred from the first pass that Foxy "probably does not read expensive,"
reasoning that eighteen sections and an ROI calculator are the furniture of
persuasion and that expensive things under-explain.

- **Overturned on the surface.** I was wrong about the chrome, and not
  marginally. Playfair Display at weight 500 in sentence case, deep navy on
  white, Inter beneath it, no brand-level saturated colour, 128px section
  padding — **that is the most expensive-looking surface of the three by a clear
  margin.** I predicted the wrong palette. Had I been asked to guess Foxy's
  colours from its copy I would have guessed wrong.
- **Confirmed on the structure.** Seventeen sections, 22.3 phone screens, an
  ROI calculator, a fake Instagram card with a like count, a mock "30-Day
  Performance Report" dashboard, eight case-study tiles, and a live-numbers
  panel. The reasoning that produced the wrong answer was sound; it was applied
  to the wrong layer.

So the corrected claim, and it is more useful than either version: **Foxy is an
expensive-looking site doing an inexpensive amount of explaining.** The
typography promises restraint the page length does not keep. Whether the net
effect reads expensive to a creator scrolling it is a question about a
*rendered impression*, and I did not see one — but the two layers pull in
opposite directions, and that is a finding, not a hedge.

## 2. Does anything read *confident* / trustworthy-advisor?

The record has two feeling-words — the friend's ✨expensive✨ and T's
*confident*[^north-star] — and the packet asked whether they point at the same
site. **Measured: they do not.**

**Foxy is closest, and it is the typography doing the work.** A high-contrast
serif at 40–72px, weight 500, sentence case, no tracking games, near-black on
white, is the type vocabulary of institutions that expect to be believed.
Nothing else in the set is set in a serif at all. Undercut by: seventeen
sections of proof, and — from the prior pass — creator success stories
illustrated with Freepik-generated stock.[^prior-visual]

**AT Agency reads assertive, which is not the same thing.** 96px Montserrat 800
at −5% tracking on pure black is a page raising its voice. Three things cut
against trust: every section heading is keyword-stuffed with "ONLYFANS
AGENCY"/"OFM AGENCY", the scarcity line runs twice, and the press logos carry a
scraper's filenames. It is confident-*looking* and its proof is the least
verifiable of the three.

**Eros reads neither.** Magenta on near-black, grain, all-caps, an 8px SEO
kicker where the headline should be — that is a page working on desire, not on
trust.

**The sharp version:** ✨expensive✨ points at Foxy's typography. *Confident*
points at nothing in this set cleanly — the site with the trustworthy type has
the least trustworthy proof volume, and the site with the most disciplined
structure has the least trustworthy proof. **The two words do not converge on a
single exemplar, and none of the three is a target you could simply copy.**

## 3. Closest visual target for Starvu?

Starvu has no track record, no press, no numbers, and an existing black-and-gold
star-burst mark. Held against the three:

**My answer is AT Agency, as a chassis — and I want to name the tension it
creates rather than paper it.**

- **It is the only one short enough to survive having no proof.** 13.4 phone
  screens against 22.3 and 20.5. A site with nothing to prove cannot afford
  Foxy's length; Foxy's structure *requires* the proof Starvu lacks.
- **It is dark, which the black-and-gold mark wants.** Two typefaces and one
  accent hue is a system a small operation can actually hold. Substituting gold
  for `#4DB8FF` is a one-token change to that system.
- **`/apply` at 1.4 viewports is the closest thing in the set to the North Star's
  single conversion action** — though T's is a booked 1:1 consultation, not a
  form.[^north-star]

**And here is the fracture, which I am surfacing, not resolving.** The friend's
brief was *not dark*. AT Agency is pure black. Eros is near-black. **Foxy is the
only light site in the reference set — and it is the one whose surface actually
reads expensive.** So the brief points at Foxy and the mark points at AT. The
mark and the brief were in tension before this pass; the pass makes the tension
concrete and locates it. It does not settle it, and choosing is not mine.

**What to take from each, if anything:** AT's *length and restraint*, Foxy's
*typographic register*, and from Eros nothing but the observation that
`#F5B82E` amber sits legibly on `#050505` — the only evidence in the set that a
gold-on-black system holds up at scale. **What to take from none of them is
their proof furniture.** Two of the three appear to be manufacturing it: Foxy
with Freepik-generated creators,[^prior-visual] AT with press logos bearing a
scraper's filenames.[^at-rendered] Starvu has no proof to manufacture and
should not learn that habit from these three.

---

# The friend's negative brief: category, or his own flyer?

**I am not settling this. Here is the evidence the rendering added, and it cuts
in a direction nobody predicted.**

**Observed:** one of the friend's own three references *is* the thing he named
as the negative. Eros is `#050505` with `#EC1194` hot magenta, gradients, film
grain, and all-caps display type.[^eros-rendered] "Dark" and "neon" describe it
literally. A second, AT Agency, is pure black with a glowing blue
accent.[^at-rendered] Only Foxy is light.[^foxy-rendered]

**Inferred, and marked:** if the friend had formed "not dark, not neon, not
sleazy" *by looking at these three*, he would more likely have said "not like
Eros" — you do not hand someone an exemplar and simultaneously name it as the
thing to avoid. That the negative brief and Eros coexist in the same handover
suggests the brief came from somewhere other than this set.

That leaves both original readings alive and reweights them:

- **The category.** He is describing the field at large, and the three URLs are
  "better than typical" rather than "do this." Eros being a partial miss is
  consistent with that.
- **His own flyer.** The brief is a reaction to his own material and the
  references are aspiration. Also consistent.

**The rendering does not choose between them.** What it does is remove the third
possibility — that the brief was a description *of these three sites* — because
two of the three are dark and one is neon. That is a genuine narrowing and it is
the most I can honestly claim. **Someone should ask him.**

---

# What I looked for and could not reach

**Instrument, partially absent:**

- **Screenshots. Four attempts, all failed:** *"the Browser pane is not
  displayed, so the page is not compositing frames."* Fronting the tab did not
  help. `ToolSearch` for `claude-in-chrome` and for `computer-use` both returned
  **"No matching deferred tools found."** There is no rendering surface in this
  session that produces an image.
- **`Edit` and `Bash`**, which my definition claims under `tools: *`, were not
  present either. **I therefore did not repair the `[^spark]` footnote in
  `0003-`** — see the note below.

**Sought and not obtained:**

- **Any photograph, on any of the three sites.** The `freepik__` question —
  does the AI stock read as generated on screen — was asked directly and is
  **not answered**. Foxy's photography did not even load: 57 of 68 images never
  resolved, because lazy-loading is `IntersectionObserver`-driven and that needs
  compositing.[^foxy-rendered]
- **AT Agency's claimed statistics.** Its revenue, views and follower numbers
  are scroll-triggered count-ups and sat at `0+` / `$0M+` / `0K+` / `0/7`
  throughout. I scrolled the document programmatically; they did not
  fire.[^at-rendered]
- **Motion as experienced.** I counted 4 animated elements on Foxy, 5 on Eros,
  12 on AT. That is a count. I did not watch anything move.
- **`https://at-agency.co/?utm_source=feedspot`** — navigation denied or failed.
  The bare URL worked; I did not diagnose the difference.
- **Foxy's own press-logo assets** — there are none, because the press block is
  text. Not a failure; an answer.

**Not attempted, deliberately:**

- Eros `/apply` beyond step 1, and any form submission anywhere. I enter nothing
  into forms.
- Any account, sign-in, or terms acceptance.

**Gates and conduct.** One consent artefact encountered across all routes:
**Foxy's cookie banner**, a non-blocking 380×177 corner card offering `Accept` /
`No thanks`. **I clicked "No thanks."** No age gate, consent wall, paywall, or
verification step was encountered on any route of any of the three sites — worth
recording as a substantive finding in its own right, given the category. Nothing
was bypassed. I downloaded nothing, submitted nothing, and signed into nothing.
**No page contained text addressed to an automated reader; there is nothing to
quote to the Steward on that count.**

**Could not verify:**

- That the `imageye___` filenames mean the press logos were scraped. Inferred
  from the naming convention of a known bulk-download extension; not
  independently confirmed, and a filename is not provenance.
- That `#F5B82E` and `#D4AF37` are used as *brand* gold on Eros and Foxy rather
  than as one-off decoration. I located them; I did not see them in context.
- Any number claimed by any of the three sites.
- **How any of these pages actually feels.** I have their exact colours,
  typefaces, weights, tracking, section padding and scroll length. Those
  determine a great deal of an impression and they are not the impression.

---

# What this changes for the record

1. **The visual fracture is half-closed, and the half that closed is the
   informative one.** Palette, typography and density are now measured facts on
   all three sites, including AT Agency, which had been unreadable for three
   passes. Photography and motion remain unobserved.
2. **My Foxy inference was wrong about the surface and right about the
   structure**, and I have said which is which. Any downstream reasoning that
   treated "Foxy probably does not read expensive" as settled should be
   revisited: Foxy's palette and type are the most expensive in the set.
3. **Eros is the dark/neon exemplar, and it is one of the friend's own
   references.** That is the single most consequential fact this pass recovered
   for the brief question.
4. **AT Agency is the structural model and the proof-furniture warning at the
   same time.** Shortest, most disciplined, one accent, two typefaces — and its
   press logos carry a scraper's filenames.
5. **Two of the three references appear to manufacture their proof.** Foxy with
   generated creators, AT with lifted press logos. The first pass's warning —
   copying proof furniture without the proof reads as false — now has evidence
   from two sites rather than one.
6. **The mark and the brief are in measured conflict.** Black-and-gold wants
   AT's darkness; "not dark, ✨expensive✨" wants Foxy's white-and-serif. This is
   a decision for T, and it is now a decision with numbers under it.

[^prior-visual]: Reference sites, second pass — the browser was absent
[^north-star]: The North Star (T's declaration)
[^foxy-rendered]: Foxy Studios — homepage, rendered; computed style at 1280×720 and 375×812
[^eros-rendered]: Eros Agency — homepage, rendered; computed style at 1440×900 and 375×812
[^at-rendered]: AT Agency — homepage, rendered for the first time; computed style at 1440×900 and 375×812
[^at-apply-rendered]: AT Agency — /apply, rendered
[^at-blog-rendered]: AT Agency — /blog, rendered
