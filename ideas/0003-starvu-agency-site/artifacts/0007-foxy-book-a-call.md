---
id: idea-0003/artifacts/0007-foxy-book-a-call.md
type: Findings
shape: prose
lenses: []
produced-by: research
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0006-reference-sites-functionality.md
  - ideas/0003-starvu-agency-site/artifacts/0005-reference-sites-rendered.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [decide, chart, challenge]
summary: "Foxy's booking page taken apart as an experience. /book-a-call is a 404 — the nav label points at /contact. The page is 5 sections and 5.94 desktop screens against the homepage's 17 and 22.3: the same company choosing brevity, which is the finding. The 'fancy' is four cheap choices — italic Playfair Display at weight 500 for every display line, a four-colour palette with a single accent, exactly two shadow tokens, and a uniform 6rem section rhythm. The calendar is a stock Calendly embed themed by one query parameter and one 24px-radius overflow-hidden wrapper; there is no custom UI. There are no scroll reveals and no entrance animation anywhere. The only custom easing on the page is spent on the post-submit success modal. On mobile that same rounded wrapper clips 17px off the right edge of the calendar. Reduced-motion covers one floating button and nothing else."
status: draft
generated: { by: factor/2026-08-27, at: 2026-08-27T00:00:00Z }
stale_after: 2026-09-30T00:00:00Z
sources:
  - id: prior-fn
    resource: ideas/0003-starvu-agency-site/artifacts/0006-reference-sites-functionality.md
    title: "Reference sites — functional inventory"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: prior-rendered
    resource: ideas/0003-starvu-agency-site/artifacts/0005-reference-sites-rendered.md
    title: "Reference sites, rendered — palette, typography, density"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-404
    resource: https://foxy-studios.com/book-a-call
    title: "Foxy Studios — /book-a-call; HTTP 404 confirmed by same-origin fetch, 404 page styling read live"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-contact-live
    resource: https://foxy-studios.com/contact
    title: "Foxy Studios — /contact; section geometry, computed styles, CSS custom properties, keyframes, form fields and Calendly embed read live at 1280px and 375px"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-css
    resource: https://foxy-studios.com/contact
    title: "Foxy Studios — /contact; full CSSOM walk over 5 stylesheets (38,859 chars of readable rules), design tokens, transitions, keyframes, media queries"
    last_modified: 2026-08-27T00:00:00Z
  - id: calendly-embed
    resource: https://calendly.com/foxystudios/welcome-to-your-new-agency-clone
    title: "Calendly event embedded in Foxy /contact — read only as an iframe URL and its parameters from the Foxy-origin DOM; the widget's interior was never opened"
    last_modified: 2026-08-27T00:00:00Z
---

# Foxy's booking page, taken apart

## The instrument, first

**Screenshots failed again** — a third consecutive session, same error: the
Browser pane is not compositing frames. Everything below is **measured, not
seen**: computed styles, the CSSOM, DOM geometry, and viewport emulation all
worked and are reliable. I have not looked at this page. Where a claim depends
on appearance rather than measurement I mark it as inference.

Two knock-ons follow from not compositing. All five images on the page are
`loading="lazy"` and all five report `naturalWidth: 0` — **they never loaded**,
so I cannot say anything about the photography. And I could not observe hover
or focus states occurring; I read their CSS rules instead, which tells me what
would happen but not how it feels.

Nothing was booked, submitted, filled, or clicked. Consent was already
`denied` in `localStorage` from a prior pass and no banner appeared.

---

## What T actually pointed at

**`foxy-studios.com/book-a-call` does not exist.** A same-origin `fetch` returns
a hard **HTTP 404**, no redirect.[^foxy-404] The URL is a reasonable guess at
what the site calls the action: the persistent nav carries a button labelled
**"BOOK A CALL"**, and it points at **`/contact`**.[^prior-fn] That is the page
this artifact is about.

The 404 itself is not nothing — it is a designed page, navy ground, Playfair
Display 36px, one sentence ("This page wandered off"), one CTA back home, 727px
tall.[^foxy-404] But it is a stub, and it is almost certainly not what T saw.
**If T did land on it and still said "fancy shmancy," that is worth knowing and
I could not have known it** — the Steward should check which page he had open.

---

## The economy, which is the headline

The record's standing claim is that Foxy is *"an expensive-looking site doing an
inexpensive amount of explaining."*[^prior-rendered] The homepage is **17
sections and 22.3 phone screens**. This page is:

| | `/contact` | Foxy homepage |
|---|---|---|
| Sections | **5** | 17 |
| Height, desktop (1280×720) | 5,012px | — |
| Phone screens (844px unit, desktop measure) | **5.94** | 22.3 |
| Phone screens (real 375×812 render) | **8.11** | — |
| Images | **5** | 68 |
| Tabbable elements | 44 | — |

[^foxy-contact-live]

**Same company, one quarter of the page.** That contrast is the finding the
packet went looking for, and it holds.

The five sections, in order, with their ground colour — the alternation is
deliberate and is doing real work:

1. **Hero** — `#0D1129` navy. 648px. Split grid, copy left, photo right.
2. **"Two Ways to Get Started"** — `#F5F5F5` cream. 916px. Two option cards.
3. **The calendar** — `#FFFFFF` white. 1,044px. `id="book-call"`.
4. **"Apply Now"** form — `#0D1129` navy. 949px.
5. **"Common Questions"** — `#FFFFFF` white. 722px. Four Q&As.

Navy → cream → white → navy → white. Nothing is ever two grounds in a row, and
the two navy bands bracket the calendar so the white calendar section is the
brightest thing on the page.

### What is on it besides the calendar

Reassurance copy in a left rail beside the calendar ("15 minutes", "we'll spend
15 minutes mapping your goals"), a three-item feature strip (**Personalized
Strategy / No Pressure / Quick & Easy**), a WhatsApp fallback ("Can't find a
time that works?"), one pull-quote with an attribution line ("Verified Results ·
Based on 2024 creator data"), a seven-field form, and four FAQs.[^foxy-contact-live]

### What they chose to omit

No testimonials carousel. No logo wall. No pricing. No case studies. No video.
No ROI calculator. No mock dashboard. No social-proof toasts. **No host bio and
no photo of who you will be talking to** — the team photo is used as a card
image in section 2, not as "here is your host." No countdown timer, no
chat widget on this page. The FAQ is **not an accordion**: all four answers are
rendered open, so there is no disclosure JavaScript and no click between the
visitor and the answer.

That last one is the most under-appreciated choice on the page.

---

## The visual system, reproducible

The site publishes its entire design system as CSS custom properties. A builder
can copy this verbatim.[^foxy-css]

```css
--white:#ffffff;  --off-white:#fafafa;  --cream:#f5f5f5;  --light-gray:#e9ecef;
--navy:#0d1129;   --navy-dark:#080b1a;  --navy-light:#1a2744;
--neon-blue:#00d4ff;  --neon-blue-glow:rgba(0,212,255,.3);
--text-dark:#1a1a2e;  --text-muted:#6b7280;  --text-light:#9ca3af;
--success:#22c55e;
--font-display:'Playfair Display',serif;
--font-body:'Inter',sans-serif;
--font-accent:'Montserrat',sans-serif;
--shadow-soft:0 4px 20px rgba(0,0,0,.08);
--shadow-medium:0 10px 40px rgba(0,0,0,.12);
--transition-fast:150ms ease;
--transition-base:300ms ease;
```

**That is the whole system. Twenty tokens.** Two shadows. Two durations. One
accent colour.

### Colour, as actually used

Across 184 rendered elements the counted usage is: text `#1A1A2E` (100
elements), `#0D1129` (23), muted `#6B7280` (18), white (13). Backgrounds: white
(19), `#F5F5F5` (9), navy (6).[^foxy-contact-live]

Then the accents, and the counts are the point:

- **`#00D4FF` neon blue — 3 elements.** Reserved almost entirely for *numbers*
  (`.hero-stat-value`) and for the interactive state: every hover and the form
  focus ring turn neon blue. It is the "something is happening" colour and it
  is used nowhere else.
- **`#FF6B6B` coral — 2 elements.** The "LIMITED SPOTS AVAILABLE" badge dot and
  its glow.
- **`#25D366` — 1 element.** WhatsApp's own brand green, used once, correctly.
- **Gold — twice, and inconsistently.** `#D4A24C` as a 1px border on the
  tertiary WhatsApp button, written as `var(--gold, #D4A24C)` — **`--gold` is
  never defined**, so the fallback is always what renders. A *different* gold,
  `#C9A961`, drives the nav hover underline and the `cohortPulse` keyframe.

**The restraint is the finding.** Four accent instances on a whole page, three
of them functional rather than decorative.

### Type — the single biggest lever

Three families, and each has exactly one job:

| Role | Family | Spec |
|---|---|---|
| Display | **Playfair Display** | **weight 500, `font-style: italic`** |
| Body | Inter | 400 / 600, 16px, line-height 1.6 |
| Accent (buttons, nav, eyebrows) | Montserrat | 600, 12.8–13.6px, `letter-spacing` 0.05em |

**Every display element on the site is italic Playfair at weight 500.** I found
seventeen selectors setting `font-style: italic` and they are the complete list
of display surfaces: `.hero h1`, `.hero-stat-value`, `.options-header h2`,
`.option-content h3`, `.calendly-info h2`, `.form-header h2`, `.faq-header h2`,
`.testimonial-quote`, `.stat-number`, `.result-value`, `.countdown-value`,
`.footer-tagline`, `.success-modal-title` and its inner `<em>`, and
more.[^foxy-css] There is no roman serif heading anywhere on `/contact`. Not
one. And there is no bold serif either — **500, never 700.**

The desktop ramp: h1 **64px** (4rem, italic, 500, line-height 1.1, white on
navy), h2 44px / 40px / 36px / 28px, h3 24px. Body 16px. Buttons 13.6px.
Eyebrows 11.2–12px uppercase with 1.12–1.2px tracking.

Note the inversion that does most of the work: **display type is enormous and
light; interactive type is tiny and wide-tracked.** A 64px heading sits above a
13.6px button. The button is small text floating in 17.6px × 40px of padding.
That ratio — big quiet serif, small confident sans — is the luxury-retail
formula, and Foxy runs it without deviation.

### Space

**Every content section is `padding: 6rem 0` — 96px, identical, all four.**[^foxy-contact-live]
The hero is the only exception (`padding: 0`, because its own `.hero-content`
carries `8rem 4rem 4rem`).

The gap scale is a clean ramp: `0.5 / 0.75 / 1 / 1.5 / 2 / 2.5 / 3 / 4rem`.
Container widths: 1200px page, **1100px for the calendar row**, 1000px for the
options grid.

That uniform 96px is a large part of why the page reads calm. There is no
section that gets more air because someone thought it was important.

### Shape and shadow

Radii in use: `10px` (form fields, submit button), `12px` (small info tiles),
`16px` (FAQ cards, mobile stat block), `20px` (success modal), **`24px`** (option
cards, the calendar wrapper), `50%` (dots), and **`100px`** — full pills, on
every button except the form submit.

Shadows, in the entire rendered page, are **two values**:

- `0 4px 20px rgba(0,0,0,.08)` — resting state on cards
- `0 10px 40px rgba(0,0,0,.12)` — hover state, and the calendar wrapper

Large blur, tiny opacity, **zero spread, no second inset layer, never a border
and a shadow on the same element.** A cheaper page reaches for
`0 2px 4px rgba(0,0,0,.25)` and gets a hard grey edge. This is the difference,
and it is one line of CSS.

Gradients: **two on the page**, both nearly invisible —
`linear-gradient(135deg, rgba(255,100,100,.2), rgba(255,50,50,.1))` on the spots
badge, and `linear-gradient(to right, #0d1129 0%, transparent 30%)` bleeding the
navy hero ground into the left edge of the hero photograph.

Borders: `2px solid #E9ECEF` on the eight form fields, and a `1px solid
rgba(255,255,255,.1)` hairline above the hero stats. Dividers are hairlines at
10% white, never boxes.

---

## Motion

The complete inventory, from the CSSOM.[^foxy-css]

**Transitions.** One token does almost everything: `transition: all
var(--transition-base)` appears **12 times**, where `--transition-base` is
`300ms ease`. Plus `--transition-fast: 150ms ease`. Plain `ease` — **the
everyday motion on this page uses no custom curve at all.**

**Hover vocabulary**, and it is rigidly consistent:

- Buttons: `translateY(-2px)` or `-3px`, background → `--neon-blue`, text →
  navy, plus a neon glow `0 8px 25px` / `0 10px 30px` / `0 15px 40px
  rgba(0,212,255,.3)`
- Cards (`.option-card`, and testimonial cards): **`translateY(-8px)`** +
  `--shadow-soft` → `--shadow-medium`
- FAQ items: `translateY(-2px)` + `--shadow-soft` (from no shadow)
- Card images: `transform: scale(1.05)` on parent hover, inside
  `overflow: hidden`
- Nav links: an `::after` underline animating `width: 0 → 100%`, plus a
  `#C9A961` gold bottom-border colour

Two lift depths — 2px for controls, 8px for cards — and nothing else. That
discipline is doing as much as the palette.

**Entrance animations: there are none.** No `.reveal` / `.fade-in` / `.in-view`
rules exist, no `IntersectionObserver` appears in any inline script, and no
element on `/contact` animates on scroll.[^foxy-css] The page simply *is* there
when you arrive. Given that my prior pass found the homepage stuffed with
scripted theatre — a fake-live dashboard, hardcoded social-proof
toasts[^prior-fn] — **its booking page having zero scroll choreography is a
deliberate register change, not an oversight.**

**Custom easing appears exactly twice on the page, and both are in the same
component.** The two `cubic-bezier` values in 38,859 characters of readable CSS
are:

```
cubic-bezier(0.2, 0.8, 0.2, 1)   /* successSlide  — 0.45s              */
cubic-bezier(0.4, 0, 0.2, 1)     /* successCircle — 0.7s, 0.15s delay  */
```

They belong to the **post-submit success modal**, and nothing else uses them.
The full choreography, which is the most crafted moment on the site:

| Step | Timing | What |
|---|---|---|
| Backdrop | `successFade` 0.35s ease-out | fade in |
| Card | `successSlide` 0.45s `cubic-bezier(.2,.8,.2,1)` | `translateY(24px) scale(.96)` → `translateY(0) scale(1)`, opacity 0→1 |
| Check circle | `successCircle` 0.7s `cubic-bezier(.4,0,.2,1)`, **0.15s delay** | SVG `stroke-dashoffset` → 0 (the ring draws itself) |
| Check mark | `successCheck` 0.45s ease-out, **0.7s delay** | `stroke-dashoffset` → 0 (the tick draws after the ring closes) |

A staggered, hand-timed, self-drawing SVG confirmation on a `#F8F6F0` **warm
bone** card — not white, the only warm surface on an otherwise pure
white-and-navy page — with `box-shadow: 0 20px 80px rgba(0,0,0,.5)`, radius
20px, and a title in italic Playfair 2.3rem reading *"You're **in the room.**"*
with the emphasis in a nested `<em>`.[^foxy-contact-live]

**They spent their entire motion budget on the payoff.** That is the single
most instructive decision on this page.

The three remaining keyframes are ambient loops: `urgencyPulse` (2s, the coral
spots badge), `cohortPulse` (2s, gold), and `blink` (1s). All are infinite
`box-shadow` pulses on small badges — the one piece of pressure furniture that
survived onto this page.

---

## The calendar

**It is a stock Calendly inline embed. There is no custom UI whatsoever.**[^foxy-contact-live]

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/foxystudios/welcome-to-your-new-agency-clone
               ?hide_gdpr_banner=1&primary_color=0d1129"
     style="position:relative;-webkit-overflow-scrolling:touch;
            min-width:320px;height:650px;">
```

The rendered iframe resolves to `…?embed_domain=foxy-studios.com&embed_type=Inline&hide_gdpr_banner=1&primary_color=0d1129`,
`title="Select a Date & Time - Calendly"`.

**The entire theming is two query parameters**: `primary_color=0d1129` (Foxy's
navy, so Calendly's buttons and selected states match) and `hide_gdpr_banner=1`.
That is it. Calendly's own type, spacing, and layout are untouched — this is an
embed wearing exactly one item of Foxy's clothing.

Everything that makes it look bespoke is in the **wrapper**, and it is four
declarations:

```css
.calendly-embed {
  background: var(--white);
  border-radius: 24px;
  box-shadow: var(--shadow-medium);   /* 0 10px 40px rgba(0,0,0,.12) */
  overflow: hidden;
  min-height: 650px;
}
.calendly-container {
  display: grid;
  grid-template-columns: 400px 1fr;   /* reassurance rail | calendar */
  gap: 3rem;
  align-items: start;
  max-width: 1100px;
  margin: 0 auto;
}
```

**`border-radius: 24px` plus `overflow: hidden` is the whole trick.** It crops
Calendly's square white panel into a soft rounded card, and the large-blur
low-opacity shadow lifts it off the white ground. Two properties turn a
third-party widget into something that looks commissioned.

The left rail beside it is `.calendly-info`: an **italic Playfair 2.25rem**
heading ("Apply for the Summer 2026 Cohort"), a muted paragraph at line-height
1.7, and three `.calendly-feature` tiles — `#F5F5F5` ground, `border-radius:
12px`, a 40px white rounded-square icon well holding an emoji (🎯 💬 ⚡), a
0.9rem/600 label and a 0.8rem muted line. Below it a WhatsApp escape hatch on
`#F8FAFC` with a `1px solid #E2E8F0` border.

### The booking flow — **the limit of what I can honestly say**

The iframe is cross-origin. **I did not open the widget, select a date, or
select a time**, because a Calendly slot selection fires a request. **I have
therefore seen only the outside of this component.**

What I can state: the iframe title is `Select a Date & Time`, which is
Calendly's standard first step; the surrounding copy says **15 minutes**, video
call; and the panel is given a fixed **650px** height. What Calendly's standard
flow does next — a month grid, then a slot list in a detected timezone, then a
name/email details step — is general knowledge about the product, **not
something I observed here**. I cannot tell you which questions Foxy added to the
details step, what is required versus optional inside the widget, how the
timezone selector is presented, whether availability is dense or sparse, or what
its confirmation screen says. **All of that is untested and would need a
deliberate decision to interact.**

One detail visible from the outside is worth recording: the event slug is
**`welcome-to-your-new-agency-clone`**. The word *clone* is Calendly's own
suffix for a duplicated event. Somebody copied an existing event type and never
renamed the slug — and the URL is public in the page source.

### The form, for contrast

The second entrance is a Netlify form (`method="POST"`, `name="application"`,
with `form-name` and a `bot-field` honeypot).[^foxy-contact-live] Seven visible
fields, six required:

| Field | Type | Required |
|---|---|---|
| First Name | text | ✓ |
| Last Name | text | ✓ |
| Email | email | ✓ |
| Instagram | text | ✓ |
| WhatsApp Number | tel (`autocomplete="tel"`) | ✓ |
| Monthly Earnings | select, 8 bands `$0` → `$100,000+` | ✓ |
| OnlyFans Link | url | — |
| Tell us about your goals | textarea | ✓ |

Plus two hidden attribution fields, `lead_source` and `lead_landing`, matching a
`foxy-attrib` localStorage record (`{"src":"direct","landing":"/","ts":"..."}`)
— first-party attribution, no vendor.

Fields are white on the navy section, `2px solid #E9ECEF`, `border-radius:
10px`, `padding: 14.4px 16px`. Focus is `outline: none` replaced by
`border-color: #00D4FF` and `box-shadow: 0 0 0 3px rgba(0,212,255,.3)` — a
proper 3px ring, not a removed one. The submit button is the only **non-pill**
button on the page: `border-radius: 10px`, navy, `SECURE MY SPOT →` in
Montserrat 600 uppercase. Squaring the submit to match the fields it sits under
is a small, correct decision.

---

## Mobile (375 × 812, reloaded)

| | value |
|---|---|
| Document height | 6,584px |
| **Phone screens** | **8.11** |
| Horizontal page overflow | **0px** |
| Tap targets under 44px | 1 (an inline text link, 43px) |
| Input font size | **16px** (up from 15.2px desktop) |

[^foxy-contact-live]

What changes, and most of it is right:

- **The hero photograph is `display: none`.** Dropped entirely, not scaled.
- The h1 collapses 64px → 24px, via a stack of three competing rules ending in
  `@media (max-width:375px){ h1{ font-size:1.5rem !important } }`. Two
  `!important`s and a `clamp()` fighting each other — **this is patch-on-patch,
  and it is the clearest evidence on the page that mobile was fixed reactively
  rather than designed.** 24px is arguably too quiet for a hero.
- Inputs go **15.2px → 16px**, which is the deliberate fix that stops iOS
  zooming the viewport on field focus. Someone knew that.
- Hero stats regroup into a `rgba(255,255,255,.05)` rounded block rather than a
  bordered row.
- The calendar grid collapses `400px 1fr` → `1fr`, reassurance rail above,
  calendar below.

### And a real defect

**The calendar is clipped on mobile.**[^foxy-contact-live] Measured at 375px:

```
.calendly-embed        left 36 → right 339   width 303   overflow:hidden, radius 24px
.calendly-inline-widget left 36 → right 356   width 320   (min-width:320px, inline style)
iframe                  left 36 → right 356   width 320
                                    clipped: 17px
scrollWidth 320 > clientWidth 303
```

Calendly's own embed snippet hardcodes `min-width: 320px`. The page's container
at a 375px viewport is 303px. The wrapper's `overflow: hidden` — the very
property that makes the 24px radius crop the widget into a beautiful card —
**silently amputates 17px off the right edge of the booking UI.** There is no
page-level horizontal scrollbar precisely because the card swallows it, so the
symptom is invisible to a casual check. At a 320px viewport it would be worse.

**The choice that makes this page look expensive is the same choice that breaks
its only job on a phone.** I did not open the widget, so I cannot say what falls
in those 17px — plausibly the last column of the date grid, or the right edge of
the timezone control. That is untested and should be.

---

## Accessibility and polish

**Good:**
- `lang="en"`, clean heading order — one h1, h2s and h3s properly nested, no
  skipped levels.[^foxy-contact-live]
- All five images carry meaningful `alt` text, including a named one ("The Foxy
  Studios team — Joy, Jay and Len").
- Form fields have real `<label>` elements; `outline: none` is replaced by a
  visible 3px focus ring, not left bare.
- The success modal is the best-built component on the page:
  `role="dialog"`, `aria-labelledby`, `aria-hidden` toggling, a backdrop with
  `data-modal-close`, and a close button with `aria-label="Close"`. The
  decorative SVG is correctly `aria-hidden`.
- The FAQ needs no keyboard interaction because it is not an accordion.

**Weak:**
- **No skip link** — 0 rules, nothing in the DOM. With a fixed 92px header and
  44 tabbable elements, that is a real omission.
- **`:focus-visible` is used exactly once on the whole page**, and on the
  floating WhatsApp button. Every other button and link relies on the browser
  default against custom backgrounds.
- **Zero ARIA in `<main>`** outside the modal — no landmarks, no labelled
  regions.
- **`prefers-reduced-motion` covers one element.** The single block is:
  ```css
  @media (prefers-reduced-motion: reduce) {
    #foxy-wa { transition: opacity .3s; }
    #foxy-wa.on { transform: none; }
  }
  ```
  It handles the floating WhatsApp button and **nothing else** — not the two
  infinite pulse loops, not the success modal's four-stage animation, not a
  single hover transform. Written for one widget, never generalised to a policy.

The pattern is consistent: **the polish is real where somebody's attention
landed, and absent where it did not.**

---

## What I could not test

Named plainly, because findings without limits read as complete.

- **Appearance.** Screenshots failed. I have not seen this page. Every claim
  above is measurement.
- **The photography.** All five images are lazy and none loaded. The
  `freepik__` question from the record remains open here too — I cannot even
  confirm whether these five are AI stock, though `closeteamphoto.webp` and
  `apply-hero-cropped.webp` are not `freepik__`-prefixed, unlike the homepage's.
- **The inside of the Calendly widget** — every step after "Select a Date &
  Time", every field, every requirement, timezone handling, availability
  density, the confirmation screen. Deliberately untouched.
- **What the 17px clip actually eats.** Needs the widget open at 375px.
- **The success modal in motion.** I read its keyframes; I did not trigger it,
  and I will not, because triggering it means submitting the form.
- **Hover and focus as experienced.** Read from CSS, never observed firing.
- **Whether T saw `/contact` or the 404.** Only T can answer that.

---

## Inference — what makes this read "fancy shmancy"

**Everything in this section is inferred from measurement, not observed.** It is
my judgement about which measured choices produce the effect, and it is the part
of this artifact most likely to be wrong.

In rank order, the three or four choices doing the most work:

**1. Italic Playfair Display at weight 500, everywhere, for everything display.**
This is not close. A serif display face is the ordinary luxury move; setting it
**italic and at 500 rather than 700** is the choice that separates expensive from
merely serif. Bold serif reads as a newspaper; light italic serif reads as an
invitation. Foxy applies it to seventeen selectors without a single exception —
headings, statistics, quotes, the footer tagline, the modal title. **The
consistency is as load-bearing as the choice.** If T reproduces one thing, it is
this.

**2. Subtraction — the palette, the two shadows, and the absent animation.**
Four accent instances on an entire page. Exactly two shadow values, both large-
blur and near-transparent. Two lift depths. Two transition durations. **No
scroll reveals at all.** A lesser page in this category has a gradient headline,
three shadow weights, five accent colours, and something fading up on every
scroll. What is *not* here is more of the effect than what is. The nearest
comparison is in the record's own file: Foxy's *homepage* has the fake dashboard
and the social-proof toasts,[^prior-fn] and this page has none of them. Same
company, and the booking page is where they stopped performing.

**3. The 96px rhythm and the alternating ground.** Four sections, identical
`6rem 0`, and no ground colour ever repeated back-to-back. Uniform spacing is
cheap to implement and enormously expensive-looking, because irregular vertical
rhythm is the single most reliable tell of an amateur page. Nothing here is
begging for attention by being taller.

**4. The button inversion, and the 24px/overflow-hidden card.** Tiny wide-tracked
Montserrat labels inside very large pill padding; and a third-party widget
cropped into a soft-shadowed rounded card. Both are one-line effects with
outsized returns.

Honourable mention, because it is where the actual craft is: **the success
modal.** The custom easing, the staggered self-drawing SVG check, the warm bone
card, the italic *"You're in the room."* That is the only genuinely
hand-animated thing on the page, and they saved it for the moment after the
visitor commits. **Most sites spend that budget on the hero, where it flatters
nobody.**

### Cheap craft versus real time — the distinction T needs

**Reproducible cheaply — effectively a config file (hours, not days):**

- The token block. Twenty custom properties, copyable verbatim.
- Italic Playfair 500 as the display voice. One `@font-face` import and a rule.
- Two shadows, two durations, two hover lift depths.
- Uniform `6rem 0` sections and alternating grounds.
- Pill buttons with small wide-tracked labels and fat padding.
- **The entire calendar treatment** — a Calendly embed, one `primary_color`
  parameter, a `24px` radius, `overflow: hidden`, and one shadow. This is the
  cheapest expensive thing on the page and Starvu should take it directly.
- 16px mobile inputs. Free, and most people miss it.

**Costs real time:**

- The success modal choreography — four staged animations, two hand-tuned
  beziers, an SVG built for `stroke-dashoffset` drawing, plus dialog semantics.
  A day's work done well, and easy to do badly.
- Photography that carries a split hero. This page leans on one large image and
  a gradient bleed; a weak photo collapses the effect and no CSS saves it. **This
  is the line item Starvu cannot copy for free**, and the record already
  suspects Foxy's own is AI stock.[^prior-rendered]
- Genuine responsive design rather than the `!important` patching this page
  actually shipped — which, note, they did *not* pay for.

**The honest summary: roughly 80% of what T is reacting to is
configuration, not craft.** The palette discipline, the italic serif, the
spacing rhythm, and the calendar card are all cheap. What is expensive is the
photograph and the one animated moment — and Foxy skimped on the first.

---

## Where this bears on the record

The record's live tension is **✨expensive✨ versus *confident***, held apart
because the homepage evidence pointed two different ways.[^prior-rendered]

**This page is evidence that they are not in conflict, and it is the first such
evidence in the record.** The homepage was expensive-looking and over-explaining
— 17 sections, 22.3 screens, a calculator, a fake dashboard. The booking page
keeps every one of the expensive surfaces (the same tokens, the same italic
serif, the same two shadows, the same 96px rhythm) and **discards the
explaining**: 5 sections, no testimonials, no logos, no pricing, no calculator,
no toasts, no scroll theatre, and an FAQ that answers rather than teases.

So the standing claim needs an amendment. *"An expensive-looking site doing an
inexpensive amount of explaining"* was measured on the homepage and it holds
there. But **the same company, on the page that actually has to convert, chose
brevity** — and the expensive feeling did not weaken when the explaining was
removed. It got stronger, because the restraint and the palette are the same
gesture.

**That is a decision-grade finding for T**: expensive and confident are not two
targets on this evidence. They are the same target, and the homepage is simply
the place where Foxy failed to hold it.

One caution against over-reading it: I have not seen either page. The comparison
is between two sets of measurements, and "reads as confident" is exactly the
kind of claim measurement is worst at.

---

[^foxy-404]: `https://foxy-studios.com/book-a-call` — HTTP 404 confirmed by same-origin `fetch(..., {redirect:'manual'})`, no redirect; 404 page computed styles read live.
[^foxy-contact-live]: `https://foxy-studios.com/contact` — section geometry, computed styles, form fields, images, Calendly wrapper and iframe rects, measured at 1280×720 and again at 375×812 after reload.
[^foxy-css]: `https://foxy-studios.com/contact` — full CSSOM walk across 5 stylesheets (38,859 characters of readable rules; the Google Fonts and Calendly widget sheets are cross-origin and were not readable). Custom properties, transitions, keyframes, hover/focus rules, media queries.
[^prior-fn]: `ideas/0003-starvu-agency-site/artifacts/0006-reference-sites-functionality.md`
[^prior-rendered]: `ideas/0003-starvu-agency-site/artifacts/0005-reference-sites-rendered.md`
