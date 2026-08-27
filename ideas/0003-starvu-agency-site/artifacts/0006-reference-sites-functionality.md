---
id: idea-0003/artifacts/0006-reference-sites-functionality.md
type: Findings
shape: prose
lenses: []
produced-by: research
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0005-reference-sites-rendered.md
  - ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [chart, frame, challenge]
summary: "A functional inventory of the three reference sites, gathered for a builder. All three run an earnings calculator or none-of-the-above (two of three do — the packet's premise that Foxy alone has one is wrong). Foxy is a static Netlify site with zero fetch() on its homepage, a Calendly exposed before any form, a lead-magnet second funnel, and a fake-live dashboard plus hardcoded social-proof toasts; its 'Ask us anything' chat input has no JavaScript behind it at all. Eros is Webflow with a three-step quiz form, no calendar anywhere, and an unused Webflow Memberships login stack sitting unlinked in its sitemap. AT is a React SPA with a real backend (/api/apply, /api/track), a referral program with session-tracked attribution, and the smallest claimed numbers in the set (4+ years, 12+ creators). No age gate on any route of any site."
status: draft
generated: { by: factor/2026-08-27, at: 2026-08-27T00:00:00Z }
stale_after: 2026-11-27T00:00:00Z
sources:
  - id: prior-rendered
    resource: ideas/0003-starvu-agency-site/artifacts/0005-reference-sites-rendered.md
    title: "Reference sites, rendered — palette, typography, density"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: north-star
    resource: ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
    title: "The North Star (T's declaration)"
    author: factor/2026-08-27
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-home
    resource: https://foxy-studios.com/
    title: "Foxy Studios — homepage; DOM, inline script source, and element inventory read live"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-contact
    resource: https://foxy-studios.com/contact
    title: "Foxy Studios — /contact; application form fields and inline Calendly embed read live"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-frameworks
    resource: https://foxy-studios.com/frameworks
    title: "Foxy Studios — /frameworks; email-only lead-magnet form"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-sitemap
    resource: https://foxy-studios.com/sitemap.xml
    title: "Foxy Studios — sitemap.xml, 133 URLs"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-robots
    resource: https://foxy-studios.com/robots.txt
    title: "Foxy Studios — robots.txt, AI-crawler allowlist"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-routes
    resource: https://foxy-studios.com/concierge
    title: "Foxy Studios — /concierge, /services, /careers, /faq, and 404 probes for /login /portal /dashboard /client /pricing"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-home
    resource: https://www.agency-eros.com/?utm_source=1
    title: "Eros Agency — homepage; script inventory, Vimeo/Embedly testimonial embeds, FAQ accordions"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-apply
    resource: https://www.agency-eros.com/apply
    title: "Eros Agency — /apply; all three quiz steps read from the DOM without clicking"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-sitemap
    resource: https://www.agency-eros.com/sitemap.xml
    title: "Eros Agency — sitemap.xml, 23 URLs including Webflow Memberships routes"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-auth
    resource: https://www.agency-eros.com/log-in
    title: "Eros Agency — /log-in, /sign-up, /user-account, /access-denied; unstyled Webflow Memberships defaults"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-career
    resource: https://www.agency-eros.com/career
    title: "Eros Agency — /career; staff application form fields"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-components
    resource: https://www.agency-eros.com/components
    title: "Eros Agency — /components; residual template boilerplate"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-home
    resource: https://at-agency.co/
    title: "AT Agency — homepage; revenue estimator controls, script inventory, section mount state"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-apply
    resource: https://at-agency.co/apply
    title: "AT Agency — /apply; nine-field single-step form"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-referral
    resource: https://at-agency.co/creator-referral
    title: "AT Agency — /creator-referral; partner program and its form"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-bundle
    resource: https://at-agency.co/assets/index-CHlFk0pP.js
    title: "AT Agency — application bundle source; route table, FAQ copy, statistics, testimonials, submit handler"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-sitemap
    resource: https://at-agency.co/sitemap.xml
    title: "AT Agency — sitemap.xml, 39 URLs (6 routes + 33 blog posts)"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-robots
    resource: https://at-agency.co/robots.txt
    title: "AT Agency — robots.txt; /admin, /api, /chatting-test disallowed"
    last_modified: 2026-08-27T00:00:00Z
---

# The instrument, once, and then not again

The Steward opened the Browser pane and told me to try a screenshot early. I
did. It failed with the same error as last time — the pane is not compositing
frames — and I did not spend the session fighting it. **I measured these pages
again; I did not see them.**

For this dispatch that costs less than it did last time, because functionality
lives in the DOM and in source, and both were fully readable. It costs
something in exactly one place, and I want it named before anything else:
**AT Agency's `#about`, `#services`, `#results`, `#faq` and `#cta` sections
render zero characters of text** without compositing, because they are
mounted by an intersection observer that never fires.[^at-home] Scrolling
programmatically did not wake them. So for AT I did something I want flagged
rather than buried: **I read those sections out of the JavaScript bundle
instead.**[^at-bundle] That is reading the source of a public asset, and it
is reliable about *what the site contains* — but it is not a rendered
observation, and everywhere I use it below I say so.

Two other honesty notes before the inventory.

**I submitted nothing.** No form was filled, no button that changes server
state was clicked, no account was created, nothing was downloaded. Eros's
three-step quiz was read out of hidden DOM containers rather than by clicking
through it, precisely because clicking a choice card writes a value into a
hidden input and I would rather read the box than put something in it.

**One probe run is void and I have discarded it.** Partway through the Foxy
pass the tab drifted to `calendly.com` and a batch of route probes resolved
against Calendly's origin instead of Foxy's. I noticed, re-ran them against
the correct origin, and none of the Calendly results appear anywhere in this
artifact.

---

# Foxy Studios — the static site that behaves like an app

## Routes

`sitemap.xml` lists **133 URLs**.[^foxy-sitemap] The shape of it:

| Group | Count | Notes |
|---|---|---|
| Blog posts | ~115 | `/blog/<slug>`, heavily SEO-keyworded |
| Marketing pages | 8 | `/`, `/services`, `/about`, `/contact`, `/faq`, `/press`, `/careers`, `/frameworks` |
| Service sub-pages | 6 | `/service-management`, `-pr`, `-shop`, `-social`, `-strategy`, `-tiktok` |
| SEO landers | 2 | `/onlyfans-management-agency`, `/best-onlyfans-agencies-2026/` |
| Legal | 2 | `/privacy-policy`, `/terms-of-service` |
| Unlinked tier page | 1 | `/concierge` |

`/concierge` is worth a builder's attention: a **top-tier "by invitation"
service page** that is in the sitemap but not in the nav, headed for the top
0.05%.[^foxy-routes] It is a price-anchor page reachable only by someone who
was sent the link.

`/login`, `/portal`, `/dashboard`, `/client` and `/pricing` all return a real
**404**.[^foxy-routes] There is no client portal and no pricing route —
pricing is a homepage section instead.

## Interactive functionality

This is the densest site of the three by a wide margin. Seventeen sections,
and the interactive ids in the document read like an app's:[^foxy-home]

**The ROI calculator** (`#revenue-slider`, `.calculator-section`). One range
input, `min=0 max=800000 step=5000`, default `$50,000`. Output: current
revenue, projected revenue, extra per month, extra per year, plus a growth
percentage. Three tabs above it — Overview / Earnings / Audience.

*Real or theatre?* **Real arithmetic over invented constants.** It is a
client-side lookup table with no server call, and the source carries its own
confession in a comment: the tiers are described as *"realistic and
believable."*[^foxy-home] The multipliers descend as revenue rises — 2.75× at
or below $10k, down to 1.4× above $500k. **Build difficulty: an afternoon.**
It is a slider, a lookup table, and six DOM writes.

**The mock dashboard** (`#live-dashboard`, labelled "LIVE DASHBOARD" with a
"Live" pill). Key metrics, per-platform reach figures, a "Recent Achievements"
feed with relative timestamps — "Just now", "1m ago", "2m ago" — and a
six-month growth ladder from $20K to $130K.[^foxy-home]

*Real or theatre?* **Entirely static markup.** The whole homepage makes
**zero `fetch()` calls** — I checked the full inline script corpus, all 63,686
characters of it.[^foxy-home] Nothing labelled "Live" on that page is live.
**Build difficulty: it is a styled table.** The cost is design, not
engineering.

**The comparison table.** Seven rows, ❌ against ✓, Other Agencies against
Foxy Studios — contracts, partnership terms, team, boundaries.[^foxy-home]
Static markup. Trivial to build; the work is writing the rows.

**The FAQ-as-chat component.** Styled as an Instagram DM thread — avatar,
handle, "Active now", a back chevron — with the questions and answers as
message bubbles, and at the bottom a text input placeheld *"Ask us
anything..."* and a send button.[^foxy-home]

*Real or theatre?* **Theatre, and completely so.** The strings `faq-chat-input-field`
and `faq-chat-send` appear in the page markup and **in no script on the
site**.[^foxy-home] The input is not disabled, has no `name`, belongs to no
form, and has no handler. A visitor can type into it and press send and
nothing whatsoever will happen. This is the single most useful thing I found
for a builder, because it is a live agency shipping a **chat affordance with
no chat behind it** — and it tells you what the category thinks the
affordance is worth.

**Social-proof toasts** (`#notificationToast`). A popup announcing that
someone just applied, booked, or was accepted. The array is
hardcoded — Sarah/Miami, Jessica/Los Angeles, Emma/New York, with fixed
"2 minutes ago" strings.[^foxy-home] It caps at **three showings per
session** and a dismissal is remembered in `sessionStorage`. That restraint is
itself a design decision worth copying or refusing deliberately.

**Also present:** a video lightbox (`#videoLightbox`) for case-study clips; a
screenshot modal that renders proof images **with a repeated "FOXY STUDIOS"
watermark overlay** generated in JS;[^foxy-home] three separate carousels
(case studies, Instagram posts, tweets); a four-step process stepper; muted
autoplaying hero video loops; a tabbed about-block; and a persistent WhatsApp
button (`#foxy-wa`).

**Cookie consent.** A 380×177 fixed card, not page-blocking, three controls
(gold Accept / Privacy policy / No thanks), backed by
`localStorage['foxy-consent']` and a `consent.js`.[^foxy-home] **I clicked "No
thanks"** as I did last pass. One analytics cookie, declared as such.

## The conversion path, as a machine

Foxy runs **three parallel entrances that all appear on one page**, `/contact`,
under the heading "Two Ways to Get Started" (it is actually three).[^foxy-contact]

1. **Calendly, inline and ungated.** A full `calendly-inline-widget` iframe,
   650px tall, themed to the brand navy (`primary_color=0d1129`,
   `hide_gdpr_banner=1`), for a **15-minute discovery call**. It is also in
   the persistent nav on every page as "BOOK A CALL". **Nothing is asked
   before it.** A visitor can land and book without giving the site a single
   field.
2. **The application form.** Nine visible fields, **seven required**: First
   Name\*, Last Name\*, Email\*, Instagram\*, WhatsApp Number\*, Monthly
   Earnings\* (an 8-band select from "Just starting" to "$100,000+"), OnlyFans
   Link (optional), Tell us about your goals\* (textarea, required).
3. **WhatsApp**, with a **pre-filled message** — the link carries
   `?text=Hi!%20I'm%20interested%20in%20applying%20as%20a%20model` — pitched
   as *"Answer a few quick questions in chat — takes 2 minutes."*[^foxy-contact]

**What the visitor gets back:** the form POSTs form-encoded to `/` — the
**Netlify Forms** convention, corroborated by the hidden `form-name` field and
the `bot-field` honeypot labelled "Don't fill this out" — then shows a success
modal whose call to action is **the Calendly link**.[^foxy-contact] So the form
does not end the funnel; it hands off to the calendar. On failure it tells the
visitor to email `hello@foxy-studios.com`.

Two hidden fields, `lead_source` and `lead_landing`, ride along on every
submission.[^foxy-contact] That is first-party attribution, and it is on the
lead-magnet form too.

**The second funnel: `/frameworks`.** A genuine lead magnet — a ten-page PDF of
"five concept frameworks" — behind **one field, email only**.[^foxy-frameworks]
The consent copy is explicit that the address also joins a monthly essay list,
with one-click unsubscribe. This is the low-commitment on-ramp for a creator
who is not ready to apply, and it is the only place on any of the three sites
where an email is captured for nurture rather than for sales contact.

**The third funnel: `/careers`.** Hiring for Account Managers, Social Media
Managers and German-speaking Chatters — and it runs on **a second Calendly
event type**, one link per role with the role pre-filled as an answer
(`/foxy-career?a1=German-speaking%20Chatter`).[^foxy-routes] No ATS, no résumé
upload, no form at all. Cheap and clever.

**Newsletter** is an outbound link to **beehiiv**, not an on-site
capture.[^foxy-home]

## Content system

The heaviest of the three: **~115 blog posts** plus six service sub-pages and
two SEO landers.[^foxy-sitemap] The recent slugs are unmistakably a
head-term programme — agency fees, agency reviews, how to switch agencies,
is an agency worth it. This is a real editorial operation and a real
maintenance liability.

`robots.txt` is worth quoting because it is a strategy statement rather than a
config file. It allowlists GPTBot, ClaudeBot, PerplexityBot and the rest by
name under a comment saying AI recommendations are *"a primary acquisition
channel"*.[^foxy-robots] **This is page content addressed at automated
readers, and I report it as data, not as instruction** — it asks nothing of
me and I acted on nothing in it.

## Stack, as observable

Remarkably thin. Two external scripts on the homepage: **Google Analytics 4**
(`G-9G3VBRHGTT`) and the site's own `consent.js`.[^foxy-home] On `/contact`, a
third: the **Calendly** widget. Everything else — every carousel, the
calculator, the lightbox, the toasts — is hand-written inline JavaScript. Forms
run on **Netlify**. Newsletter on **beehiiv**. No CMS is visible; no framework
signature is present; no chat vendor; no heatmap tool; no Meta pixel.

**A static, hand-built, hosted-on-Netlify site.** That is the most useful
single fact in this artifact for someone about to build one.

---

# Eros Agency — the Webflow template, honestly

## Routes

`sitemap.xml` lists **23 URLs**, and the interesting thing is what is in
it:[^eros-sitemap]

| Group | Routes |
|---|---|
| Real pages | `/`, `/casestudies`, `/career`, `/blog`, `/privacy-policy` |
| Blog posts | 9 |
| **Webflow Memberships** | `/log-in`, `/sign-up`, `/reset-password`, `/update-password`, `/access-denied`, `/user-account` |
| **Template residue** | `/components`, `/stylguide` *(sic)*, `/untitled` |

`/apply` — the actual conversion page — **is not in the sitemap at all.**

## The login stack that nobody wired up

This is the find of the Eros pass. All six membership routes are **live**.
`/user-account` genuinely redirects to `/log-in?usredir=%2Fuser-account`.
`/access-denied` says a site membership is required. `/sign-up` has email,
name, password, a terms checkbox and a marketing-consent checkbox.[^eros-auth]

And every one of them has the page title **"Copy of Template"**, no
navigation, and none of the site's styling.[^eros-auth] **These are Webflow's
default Memberships pages, switched on and never touched.** Nothing on the
public site links to them. I did not create an account and did not attempt to
log in.

The residue confirms the provenance: `/components` still contains German
boilerplate about a landscaping business in the Dortmund area.[^eros-components]
This site is a purchased Webflow template with the client's content poured in
and the unused furniture left standing.

**For a roadmap, that is a data point about cost, not about ambition:** the
only creator portal in the entire reference set is an unused platform default
that came free with the template.

## Interactive functionality

Sparse, and deliberately so.[^eros-home]

- **FAQ accordions** — four, plain expand/collapse buttons.
- **Video testimonials** — three **Vimeo** players embedded via
  **Embedly**, 622px tall, with `dntp=1` (do-not-track) set. This is the only
  site in the set using hosted video for testimonials.
- **Scroll animation** — GSAP + ScrollTrigger, loaded from a CDN.
- **A floating WhatsApp button**, fixed bottom-right, 56px, in WhatsApp green
  (`#25D366`) — and the same button appears even on the orphaned login pages.
- **No calculator. No comparison table. No dashboard. No tables at all. No
  forms on the homepage.**

## The conversion path, as a machine

**One entrance, three steps, no calendar anywhere.**[^eros-apply]

`/apply` presents a "Growth Audit" quiz with a `STEP 1 / 3` badge. The visible
UI is choice cards; underneath is a single Webflow form
(`#wf-form-application`) with **five hidden text inputs** — `Revenue`, `Pain`,
`Name`, `Social`, `Phone` — that the cards write into.

- **Step 1 — Revenue.** Four cards: New/Starting Out, $1k–$5k, $5k–$20k, $20k+,
  each with a label (Ready to Launch, First Wins, Growth Phase, Scaling Phase).
- **Step 2 — Pain.** Four cards, each tagged with a diagnosis: Drowning in DMs
  *(Time Issue)*, Revenue Plateau *(Growth Issue)*, Need New Fans *(Traffic
  Issue)*, Fans Don't Spend *(Sales Issue)*.
- **Step 3 — Identity.** Name / Stage Name; Primary Social Platform (a picker
  across Instagram, TikTok, X and Reddit that swaps the handle placeholder —
  `u/username` for Reddit); Phone / WhatsApp with a full country-code dropdown
  and **`libphonenumber-js` validation loaded from jsDelivr**.

**What the visitor gets back:** an inline `#success-view` reading "Application
Received" and promising contact **to schedule your call**.[^eros-apply] So the
calendar is not gated behind the form — **there is no calendar.** Scheduling
happens by human follow-up on a channel the form just collected.

Alongside the quiz, the page pre-sells the call with a four-item agenda
(Account Audit, Traffic & Conversion Check, Scaling Strategy, Q&A) and a
"No Sales Scripts. Just Strategy." reassurance block.[^eros-apply]

**Second funnel: `/career`**, with a real form — name, email, **telegram**,
phone, a role select, a message, and a `website` honeypot.[^eros-career]
Telegram as the recruiting channel is a category detail worth noting.

## Content system

**Nine blog posts.**[^eros-sitemap] A gesture at a content system rather than
an operation. Plus a `/casestudies` collection page. Webflow CMS collections
make both cheap to add and cheap to leave alone, which is visibly what
happened.

## Stack, as observable

The most third-party-dependent of the three.[^eros-home]

- **Webflow** (hosting, CMS, Memberships), confirmed by
  `cdn.prod.website-files.com` and the Webflow runtime.
- **Two GA4 properties** at once — `G-CF2RNRJCR6` and `G-PBHMPKFTH4`.
- **`analytics.projectunfair.com/script.js`** — a self-hosted analytics
  script on a third-party domain. I did not identify the vendor.
- **GSAP 3.12.5 + ScrollTrigger** from cdnjs; **jQuery 3.5.1**.
- **Adobe Typekit** (`use.typekit.net`) plus Google's `webfont.js`.
- **Vimeo via Embedly**; **libphonenumber-js** via jsDelivr.
- **`webflow-websitespeedy12.b-cdn.net`** — a third-party Webflow performance
  optimiser serving three rewritten script bundles.

---

# AT Agency — the only one with a back end

## Routes

`sitemap.xml` lists **39 URLs: six routes and 33 blog posts.**[^at-sitemap]
The bundle's router table lists **ten**, and the four extra ones
matter:[^at-bundle]

`/`, `/apply`, `/blog`, `/blog/:slug`, `/creator-referral`, **`/thank-you`**,
`/privacy-policy`, `/terms-of-service`, **`/admin`**, **`/chatting-test`**.

`/admin`, `/api` and `/chatting-test` are **disallowed in
robots.txt**.[^at-robots] **I did not visit them.** The bundle also reveals a
lazy-loaded `ChattingPage` chunk, which corroborates last pass's inference that
`/chatting-test` is a chatter assessment — chatting is an operated function
here, with a hiring pipeline behind it, not just a claim on a services list.

A caution for anyone reading route probes: **AT is a single-page app with a
catch-all**, so `/login`, `/portal`, `/dashboard`, `/pricing`, `/services` and
`/contact` all return HTTP 200 — serving the same `index.html`.[^at-sitemap]
They are **not** real routes. Foxy, by contrast, returns honest 404s. I nearly
recorded six routes that do not exist.

## Interactive functionality

**The revenue estimator** (`#estimator`, "CALCULATE YOUR POTENTIAL EARNINGS").
Three controls: an Activity Level toggle (Low / Medium / High) and **two range
sliders** — OnlyFans Subscribers `0–1000`, Monthly Revenue Per Fan `$10–$100`
step 5. Output: a single projected monthly figure, with the disclaimer
*"Estimates based on average results from managed creators. Individual results
vary."*[^at-home]

**This corrects the handoff packet.** Foxy is not alone in having an earnings
calculator — **two of the three references have one**, with different input
models (Foxy: one slider, current revenue → multiplier. AT: three inputs,
subscribers × ARPU × activity). An earnings calculator is **category-standard
furniture**, not a differentiator.

**Testimonials** are three hardcoded creator cards — name, flag, "Top 0.8%"
rank, quote, and a monthly figure ($38k / $82k / $124k) — read from the
bundle, not seen rendered.[^at-bundle]

**Statistics.** Last pass left these unread because the count-up animation sat
at `0+`.[^prior-rendered] From the bundle, the real values are **"4+ Years Experience", "24/7
Creator Support", "12+ Creators Managed."**[^at-bundle] That answers a question
the record has been carrying — and it is a genuinely notable answer. Against
Foxy's "6,000+ applications / 8,000,000,000 organic views" and Eros's
positioning, **AT claims the smallest numbers in the set by an order of
magnitude, and says so on the hero.** Twelve creators. Four years.

**Also present:** FAQ accordions (six questions, read from the
bundle);[^at-bundle] an "As Seen In" logo ticker with gradient edge masks;
framer-motion scroll animation throughout; a WhatsApp link in the nav. **No
calendar. No comparison table. No dashboard. No chat widget. No video. No
cookie banner observed** — despite running a Google Ads conversion tag.

## The conversion path, as a machine

**One entrance, one step, and it is the shortest funnel in the set.**

`/apply` is a bare focused page — no site nav, one link back to `/` — with
**nine fields, seven required**:[^at-apply] Full Name\*, Email\*, Phone\*,
Country\* (a 16-option select), Instagram Username\*, OnlyFans Username
(optional), Current Monthly Revenue\* (6 bands), Main Goal\*, Message
(optional). Plus a honeypot named `_b8x2k`. Validation is in React, not in
HTML attributes.

Two details a builder will want:

**"Content protection" is one of the eight Main Goal options.**[^at-apply]
It sits alongside Grow my audience, Increase my revenue, Full account
management. That is one of the three services T named in the North
Star[^north-star] appearing as a *qualifying field* on a competitor's
application — the site asking which service brought you.

**And the submit path is real infrastructure.** It POSTs JSON to
**`/api/apply`**, carrying the form plus a `sessionId` and a `refCode` pulled
from `sessionStorage['at-ref-code']`, fires `fbq('track','Lead')` if a Meta
pixel is present, and routes the visitor to `/thank-you`.[^at-bundle] There is
also an `/api/track` endpoint. **AT is the only one of the three with a server
it wrote itself.**

**What the visitor gets back:** a thank-you page. **No calendar, at any
point.** Like Eros, AT collects the contact and schedules by hand.

**The second funnel: `/creator-referral`** — and nobody else has anything like
it.[^at-referral] A partner program paying **5% referral commission**, pitched
at people with creators in their network, with an explicit privacy promise
("without revealing who they are until you're ready"). Its own form: name,
email, contact handle, social handle, country, two selects, four toggle
buttons, and a message. The `refCode` in `sessionStorage` is the other half of
this machine — **AT built attribution for it**, which means it is operated,
not decorative.

## Content system

**33 blog posts**,[^at-sitemap] bundled as a static `posts-*.js` chunk[^at-bundle]
— compiled into the app, not served from a CMS. Cheap to host, and every new
post is a redeploy. The slugs are the same head-term programme as Foxy's, at a
third the volume.

## Stack, as observable

- **React + React Router + framer-motion + TanStack Query**, built with
  **Vite**, styled with **Tailwind**.[^at-home][^at-bundle]
- **A custom backend** — `/api/apply`, `/api/track`.
- **Google Ads conversion tag** `AW-18158256133`, firing a
  `viewthroughconversion` beacon on load.[^at-home] Note: **an Ads tag, not a
  GA4 property** — AT is the only one of the three visibly buying traffic.
- **A guarded Meta Pixel `Lead` event** in the submit handler.[^at-bundle]
- No CMS, no booking vendor, no chat vendor, no consent vendor.

---

# Across the three

## Page types

| Page type | Foxy | Eros | AT |
|---|:--:|:--:|:--:|
| Homepage long-scroll | ✓ (17 sections) | ✓ | ✓ (single-page + anchors) |
| Dedicated apply page | ✓ `/contact` | ✓ `/apply` | ✓ `/apply` |
| Blog | ✓ ~115 | ✓ 9 | ✓ 33 |
| Case studies | homepage section | ✓ `/casestudies` | homepage section |
| Careers / hiring | ✓ | ✓ | *(`/chatting-test`, not visited)* |
| Services page | ✓ + 6 sub-pages | — | anchor only |
| About page | ✓ | — | anchor only |
| Press page | ✓ | — | — |
| Standalone FAQ page | ✓ | — | anchor only |
| Lead magnet | ✓ `/frameworks` | — | — |
| Invitation-only tier page | ✓ `/concierge` | — | — |
| Referral / partner program | — | — | ✓ `/creator-referral` |
| Login / account | — | ✓ *(unused default)* | — |
| Legal | ✓ ✓ | ✓ | ✓ ✓ |
| Pricing page | — *(homepage section)* | — | — |

**On all three:** a homepage, an apply route, a blog, case-study material, and
legal pages. **On one only:** the lead magnet, the concierge tier, the press
page, the referral program, the login stack.

## Interactive elements

| Element | Foxy | Eros | AT |
|---|:--:|:--:|:--:|
| Earnings calculator | ✓ 1 slider | — | ✓ 2 sliders + toggle |
| Comparison table | ✓ 7 rows | — | — |
| Mock dashboard | ✓ *(static)* | — | — |
| FAQ accordion | ✓ *(as chat UI)* | ✓ | ✓ |
| Chat input | ✓ **non-functional** | — | — |
| Live chat vendor | — | — | — |
| WhatsApp handoff | ✓ *(pre-filled)* | ✓ *(float, pre-filled)* | ✓ |
| Telegram | — | ✓ *(hiring only)* | — |
| Calendar embed | ✓ **inline, ungated** | — | — |
| Video testimonials | ✓ *(self-hosted + lightbox)* | ✓ *(Vimeo/Embedly)* | — |
| Carousels | ✓ ×3 | — | ticker |
| Social-proof toasts | ✓ *(hardcoded)* | — | — |
| Newsletter capture | ✓ *(offsite, beehiiv)* | — | — |
| Cookie consent | ✓ | — | — |
| Scroll animation | ✓ | ✓ GSAP | ✓ framer-motion |

## The funnel as a machine

| | Foxy | Eros | AT |
|---|---|---|---|
| Steps to convert | 1 (calendar) or 1 (form) | 3 | 1 |
| Fields required | 7 | 5 across 3 steps | 7 of 9 |
| Where the calendar sits | **before the form, and after it** | absent | absent |
| Qualifies on revenue | ✓ 8 bands | ✓ 4 bands | ✓ 6 bands |
| Qualifies on pain/goal | goals textarea | ✓ 4 diagnosed options | ✓ 8-option select |
| Contact channel demanded | email + IG + **WhatsApp** | phone/WhatsApp | email + phone + IG |
| What the visitor gets back | success modal → **Calendly** | "Application Received" | `/thank-you` |
| Backend | Netlify Forms | Webflow Forms | **own `/api/apply`** |
| Spam control | honeypot | honeypot | honeypot |
| Attribution | hidden `lead_source` / `lead_landing` | — | `sessionId` + `refCode` |

**All three qualify on money before they will talk.** That was established last
pass; what is new is that **all three also qualify on a second axis** — Foxy on
stated goals, Eros on a named pain, AT on a chosen service — and that **only
Foxy exposes a calendar at all.** The category's dominant pattern is
*collect, then schedule by hand*; Foxy's ungated Calendly is the outlier, and
it is the outlier in the direction of T's North Star.[^north-star]

## Conspicuously absent from all three

- **A client or creator portal.** Zero of three have a working one. Foxy 404s
  on every auth path and merely *mentions* a "Foxy App" in FAQ
  copy;[^foxy-contact][^foxy-routes] Eros has the Webflow default switched on
  and unlinked;[^eros-auth] AT has none. **Nobody in this set logs a creator
  in.**
- **A pricing page.** Only Foxy publishes a number at all (55/45), and it does
  so in a homepage section — `/pricing` is a 404.[^foxy-routes] Eros and AT
  publish nothing.
- **A services page as a route.** Only Foxy has one. Eros and AT keep services
  as an anchor on the long-scroll.
- **A live chat widget.** None of the three runs Intercom, Crisp, Tawk,
  Drift or anything comparable. **All three route conversational intent to
  WhatsApp instead.** Foxy fakes the affordance rather than buying one.
- **An age gate, consent wall, or verification step.** None, on any route of
  any site, on any of five passes. Given the industry that is the single most
  consistent negative finding in the whole record.
- **A cookie/consent mechanism** on two of three — Eros and AT collect
  analytics (and AT runs an Ads tag) with no consent UI observed.
- **Content protection as a page.** T names it as a core service;[^north-star]
  in the reference set it appears **only as a dropdown option on AT's
  application form**.[^at-apply] Nobody sells it. Nobody explains it.
- **Search, a glossary, a resource library, a pricing calculator for the
  agency's own fee, or any tool a creator would return to.** Every interactive
  element in this set is a one-time persuasion device, not a utility.

---

# The one judgment: functionality tiers

**This section is inference.** Everything above is observation; what follows is
me sorting it for a builder. I am not sequencing it, not estimating it, and not
designing Starvu's site — `chart` and `phase` belong to The Surveyor and this
is deliberately unordered.

**Tier 1 — what a v1 must have for the apply → qualify → call funnel to run at
all.** Every one of these is present on all three references, and the funnel
does not function without it.

| Capability | Evidence it is load-bearing |
|---|---|
| A long-scroll homepage stating the offer | all three |
| A dedicated apply route | all three |
| An application form capturing name, email, one social handle, one direct channel | all three |
| **A revenue-band qualifier** | all three, always leading |
| A form backend + spam honeypot | all three (Netlify / Webflow / own API) |
| A post-submit confirmation state | all three |
| A named next step in the confirmation | all three |
| Privacy policy and terms | all three |
| **A booking mechanism** — the North Star's terminal action[^north-star] | Foxy only, but T's stated goal requires it |

That last row is the tier's only inference-heavy entry: the category does not
require a calendar, but **T's North Star does**, so for Starvu it is v1 and not
optional. The cheapest form of it is what Foxy did — an inline Calendly, themed,
ungated.

**Tier 2 — category-standard: expected, and their absence would read as
thin.**

| Capability | Present on |
|---|---|
| **An earnings calculator** | 2 of 3 |
| FAQ accordion | 3 of 3 |
| A second qualifier beyond revenue (pain or goal) | 3 of 3 |
| Testimonials with named creators and figures | 3 of 3 |
| Case-study material | 3 of 3 |
| A WhatsApp handoff | 3 of 3 |
| Scroll-reveal animation | 3 of 3 |
| A scarcity device ("only N spots") | 3 of 3 |
| A blog with head-term SEO posts | 3 of 3 |
| Analytics | 3 of 3 |

I moved the calculator into Tier 2 on the strength of finding AT's, against the
packet's premise. Note that both calculators are **client-side arithmetic over
invented constants** — Tier 2 by expectation, Tier 1 by build cost.

**Tier 3 — above category: present on one site only, and each one is a
deliberate bet.**

| Capability | Who | What it buys |
|---|---|---|
| **A lead magnet with email-only capture** | Foxy | an on-ramp for creators not ready to apply — the only nurture path in the set |
| **An ungated inline calendar** | Foxy | removes every step between arrival and the booking |
| A comparison table against unnamed rivals | Foxy | reframes the choice |
| A mock "live" dashboard | Foxy | shows the product without having one |
| Watermarked proof screenshots | Foxy | makes screenshots feel like assets |
| Rate-limited social-proof toasts | Foxy | urgency with restraint |
| An invitation-only tier page | Foxy | price anchor, reachable by link only |
| **A referral program with real attribution** | AT | a distribution channel that is not paid ads |
| A diagnosed-pain quiz | Eros | qualifies on problem, not just money |
| Phone validation + platform-aware handle capture | Eros | lead quality |
| Video testimonials on hosted video | Eros | the most expensive proof in the set |
| First-party lead-source attribution | Foxy, AT | knowing which page earned the lead |

**Tier 4 — what nobody has, which is where the opportunities are.** A working
creator portal. A published price. A content-protection *explanation* rather
than a dropdown option. A tool a creator would come back to. Any consent
mechanism worth the name on two of the three.

I make no claim about which of these Starvu should want. Some absences are
absences because the thing is not worth building.

---

# What I could not reach, and what I could not test

**Could not see.** Screenshots failed on every attempt, again. Nothing in this
artifact is a claim about appearance. Motion is counted from library
signatures, never watched.

**Read from source rather than rendered.** AT Agency's about, services,
results, FAQ, CTA and testimonial content, its statistics, and its route
table all come from the JavaScript bundle because those sections never mounted
without compositing.[^at-bundle] I believe them, and they are not rendered
observations.

**Deliberately not visited.** `/admin`, `/api` and `/chatting-test` on AT —
disallowed in robots.txt.[^at-robots] The `ChattingPage` chunk exists and I
inferred its purpose from the chunk name and the disallow rule; I did not open
it.

**Could not test without submitting, and therefore did not:**

- **What any form actually does on success.** I read Foxy's handler, Eros's
  success view and AT's submit function from source. I never saw one complete.
- **Whether Foxy's Calendly has real availability** — call length, slots, and
  whether booking demands more fields inside the widget. I read the embed's
  parameters, not its contents.
- **Whether Eros's step 2 and step 3 validate as I expect.** I read them from
  hidden containers rather than clicking through, because clicking a choice
  card writes into a hidden input.
- **Whether AT's `/api/apply` is live.** Its existence is in the source; its
  behaviour is untested.
- **Whether Foxy's `/frameworks` PDF actually arrives.** I entered no email.
- **Whether the AI-crawler allowlist in Foxy's robots.txt reflects a working
  channel.** It states an intent; I cannot observe the result.

**The outside of the box, explicitly.** Three findings here are shells whose
insides I did not open: the Calendly widget, the `/api/apply` endpoint, and
Eros's membership stack. Each one I can describe from the outside with
confidence and cannot describe from the inside at all.

**Still open from prior passes and untouched here.** Whether Foxy's
`freepik__` stock reads as generated on screen — that needs pixels and pixels
did not come. And a note the record should keep: **the funnel-mechanics
picture is now complete enough that the remaining questions on this idea are
decisions, not research.**

[^prior-rendered]: Reference sites, rendered — palette, typography, density
[^north-star]: The North Star (T's declaration)
[^foxy-home]: Foxy Studios — homepage; DOM, inline script source, element inventory
[^foxy-contact]: Foxy Studios — /contact; form fields and inline Calendly embed
[^foxy-frameworks]: Foxy Studios — /frameworks; email-only lead-magnet form
[^foxy-sitemap]: Foxy Studios — sitemap.xml, 133 URLs
[^foxy-robots]: Foxy Studios — robots.txt, AI-crawler allowlist
[^foxy-routes]: Foxy Studios — /concierge, /services, /careers, /faq, and 404 probes
[^eros-home]: Eros Agency — homepage; scripts, Vimeo embeds, FAQ accordions
[^eros-apply]: Eros Agency — /apply; all three quiz steps read from the DOM
[^eros-sitemap]: Eros Agency — sitemap.xml, 23 URLs
[^eros-auth]: Eros Agency — /log-in, /sign-up, /user-account, /access-denied
[^eros-career]: Eros Agency — /career; staff application form
[^eros-components]: Eros Agency — /components; residual template boilerplate
[^at-home]: AT Agency — homepage; estimator controls, scripts, section mount state
[^at-apply]: AT Agency — /apply; nine-field single-step form
[^at-referral]: AT Agency — /creator-referral; partner program and form
[^at-bundle]: AT Agency — application bundle source; routes, copy, statistics, submit handler
[^at-sitemap]: AT Agency — sitemap.xml, 39 URLs
[^at-robots]: AT Agency — robots.txt; /admin, /api, /chatting-test disallowed
