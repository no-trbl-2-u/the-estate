---
id: idea-0003/artifacts/0003-reference-sites-findings.md
type: Findings
shape: prose
lenses: []
produced-by: research
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0001-starvu-agency-site.md
  - ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [frame, challenge, explore]
summary: "The three reference sites, observed 2026-08-27: all three run an apply-to-qualify funnel whose prize is a free strategy call, none shows an age gate or a non-affiliation statement, and the visual register question cannot be answered from text alone — no rendered pixels were seen."
status: draft
generated: { by: factor/2026-08-27, at: 2026-08-27T00:00:00Z }
stale_after: 2026-11-27T00:00:00Z
sources:
  - id: foxy-home
    resource: https://foxy-studios.com/
    title: "Foxy Studios — homepage"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-services
    resource: https://foxy-studios.com/services
    title: "Foxy Studios — Services"
    last_modified: 2026-08-27T00:00:00Z
  - id: foxy-contact
    resource: https://foxy-studios.com/contact
    title: "Foxy Studios — Contact / Apply"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-home
    resource: https://www.agency-eros.com/?utm_source=1
    title: "Eros Agency — homepage (URL as supplied by T, utm retained)"
    last_modified: 2026-08-27T00:00:00Z
  - id: eros-apply
    resource: https://www.agency-eros.com/apply
    title: "Eros Agency — Apply"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-home
    resource: https://at-agency.co/
    title: "AT Agency — homepage (client-rendered; only <title> retrievable)"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-sitemap
    resource: https://at-agency.co/sitemap.xml
    title: "AT Agency — sitemap.xml (39 URLs)"
    last_modified: 2026-08-27T00:00:00Z
  - id: at-robots
    resource: https://at-agency.co/robots.txt
    title: "AT Agency — robots.txt"
    last_modified: 2026-08-27T00:00:00Z
  - id: dolphin-review
    resource: https://dolphin-anty.com/blog/en/best-onlyfans-agencies/
    title: "Best OnlyFans Management Agencies: 2026 Expert Review (third-party directory, marketing content)"
    author: "org:dolphin-anty"
    last_modified: 2026-08-08T00:00:00Z
---

# The three reference sites, observed

Retrieved **2026-08-27**. Everything below is what I actually loaded on that
date; a live marketing site rots, and this artifact carries a `stale_after` of
three months for that reason.

## How I looked, and what that means for what I can claim

I reached these sites through HTML-to-text retrieval. **I did not see a
rendered page.** No screenshots, no JavaScript execution, no computed styles.
That constraint is not incidental — it lands squarely on the question T most
wants answered, and I flag it here rather than burying it in a caveat at the
end. Stylesheets, hex codes, CSS custom properties, and `font-family`
declarations were stripped by the converter on all three sites and I recovered
none of them.

I dropped `?utm_source=1` from the Eros URL for the deeper pages and kept it on
the homepage fetch; I fetched AT Agency both with and without
`?utm_source=feedspot` and got identical results. Neither parameter changed
anything I could observe.

I entered no data into any form, submitted nothing, and passed no gate. I found
no gate to pass.

---

## Foxy Studios — foxy-studios.com

**Reached in full.** The richest of the three by a wide margin.

### Structure

Primary nav, in order: Home, Services, About, Blog, Free Guide (`/frameworks`),
Press, Careers, Contact, and a **Book a Call** item that opens a Calendly
widget.[^foxy-home] The footer adds Results, FAQ, Privacy Policy, Terms of
Service, a sister brand (Muse Agency, Switzerland), and three SEO landing pages
including "Best OnlyFans Agencies 2026" and "Agency Fees & the 55/45
Split".[^foxy-home]

The homepage runs to roughly **eighteen sections**. In order: hero → three
headline stats → services overview → leadership → an "Other Agencies vs Foxy
Studios" comparison table → press quotes → creator earnings stats → a
**projected-earnings calculator** → audience demographics → video case studies →
social proof → expandable service detail → live impact numbers → a four-step
method → detailed case studies → published pricing → FAQ → final CTA →
newsletter signup.[^foxy-home]

That is a long-scroll, proof-stacked conversion page. It is not a boutique
three-section site.

### Voice and copy

The hero: *"An OnlyFans agency built by women, for the top 0.1%"* — with "top
0.1%" set in italic. The subhead: *"We take on 6 new creators per quarter. 94%
retention. Built by a team of experts in Switzerland. Apply for the Summer 2026
intake — 4 spots remaining."*[^foxy-home]

It addresses the **creator**, exclusively. Not brands, not fans. It leads with
**scarcity and money together** — six spots, 94% retention, and immediately
after, "$14M+ Generated".[^foxy-home] The closing section is *"Ready to Build
Your Empire?"* with *"With 6000+ applications and only 0.4% accepted, we focus
on quality over quantity."*[^foxy-home]

The founder's quote is the emotional center: *"I started Foxy Studios because I
was tired of watching talented women get exploited by an industry that didn't
understand them..."*[^foxy-home] Press pull-quote from The Mirror: *"At Foxy,
the model is the CEO. They're in charge..."*[^foxy-home]

So the register is **money + safety + control**, in that order of loudness.

### Services, in their words

Six, each with its own one-liner:[^foxy-home]

1. **24/7 Communications Management** — "We handle all subscriber conversations"
2. **Growth & Marketing** — "Instagram, TikTok, X & YouTube strategies"
3. **Content Strategy** — "Professional shoots & content planning"
4. **Fan Army Building** — "Community management & superfan nurturing"
5. **1:1 CEO Coaching** — "Monthly sessions with our founder"
6. **Revenue Diversification** — "Newsletters, shops & platform monetization"

The services page reframes them as Management, PR & Media, Social Media,
TikTok & YouTube Strategy, Product Shop, and 1:1 Strategy.[^foxy-services]

**Note for the record:** four of Starvu's named services map cleanly here.
"Chatting" is Foxy's *24/7 Communications Management*; "advising" is *1:1 CEO
Coaching*. **Content protection has no counterpart on any of the three sites.**
See the absences section.

### Route to conversion

Two doorways, and this is the important structural fact. `/contact` is titled
*"Apply to Foxy Studios"* and headlined **"Two Ways to Get Started"**: an
application form and a Calendly booking, side by side.[^foxy-contact]

The application form asks: First Name*, Last Name*, Email*, Instagram*,
WhatsApp Number*, **Monthly Earnings*** (a dropdown from "Just starting"
through "$100,000+"), OnlyFans Link, and "Tell us about your goals*".[^foxy-contact]

Button labels across the site, verbatim: "Book a Call", "Start Your Journey →",
"Apply Now →", "Join the Right Side →", "Get Your Free Strategy Call", "Book
your call →", "Book My Free Call", "Secure My Spot →", "Book a Strategy Call
→", "Message on WhatsApp".[^foxy-home][^foxy-contact]

**Steps to conversion: one.** "Book a Call" sits in the persistent top nav and
opens Calendly directly. A visitor can convert without scrolling.

### Trust and compliance furniture

Dense. Named leadership with a team photograph — **Joy (CEO & Founder), Jay
(COO), Lena (CMO)**, Switzerland, "Foxy Studios since 2021".[^foxy-home] Press
placements named: The Mirror, Vocal Media, Supercreator, Kurier, The Express,
New York Post, Scottish Sun, AOL.[^foxy-home] Creator testimonials by first
name only with social handles (Summer, Amir, Roo, Abigail, Juan, Maya,
Noelle).[^foxy-home] Eight video case studies with dollar figures.

Numbers claimed: $14M+ generated, 94% retention, 3+ years average partnership,
100+ team members, 8B+ organic views/year, 0.4% acceptance from 6000+
applications, $30K–$100K monthly earnings for top creators.[^foxy-home]

**Published pricing** — *"Simple, transparent pricing / A published rate that
rewards scale. No hidden fees, no surprises"*, "Flat 45% agency fee — you always
keep 55%", with an improved-split elite tier above $50K/month.[^foxy-home][^foxy-services]

Legal: Privacy Policy, Terms of Service, "© 2026 Foxy Studios · All rights
reserved."[^foxy-home]

**No age gate. No 18+ interstitial. No non-affiliation statement.** I looked
for all three and found none.[^foxy-home]

### Imagery

People, throughout, and identifiably real. The leadership photograph is
captioned by name.[^foxy-home] Creator imagery is editorial-portrait in
framing, judging by filenames the markup exposes:
`onlyfans-creator-rockstar-couch-portrait.webp`,
`best-onlyfans-agency-elite-creator-portrait.webp`,
`onlyfans-management-agency-team-portrait.webp`, plus case-study images
described as car, equestrian, and denim settings.[^foxy-home] Alt text is
present and descriptive: "Creator lifestyle", "Creator portrait", "Success
story".

I saw no explicit or nude imagery, and no NSFW content warning.

---

## Eros Agency — agency-eros.com

**Reached in full.** Smaller and tighter than Foxy.

### Structure

Nav, in order: **Home, Case studies, Career, Blog, Apply.**[^eros-home] Five
items. No Services page, no About page, no team page.

Homepage sections in order: hero → a revenue promise → "Where top Creators
become top earners" → management pitch → "Personalized Strategies. / Unmatched
Results" → testimonials → "The Strategy / what we do" → "The Difference / What
sets eros Apart" → "The Reallity / Challenges for Creators" *(the typo is
theirs)* → "What we stand for / our values" → FAQ.[^eros-home]

Eleven sections. Roughly half of Foxy's length.

### Voice and copy

Hero: *"OnlyFans Management Agency for Adult Creator Growth"* over **"You
Create, We Handle Everything Else."**[^eros-home]

**That is Starvu's flyer line, near-verbatim.** The flyer already carries "You
make the content. We run the business around it."[^spark] Same sentence, same
division of labour, independently arrived at by a peer. The record should know
that its best existing line is a category convention rather than a
differentiator.

Second beat: *"Your fans won't notice the difference. Your revenue will."*
Third: *"Where top Creators become top earners."*[^eros-home]

Addressed to the **creator**, exclusively. Leads with **revenue**, then pivots
hard to **discretion**. The values section names six: Excellence, Adaptability,
Collaboration, **Confidentiality** ("Your privacy is paramount"), Respect,
Integrity.[^eros-home] The FAQ asks *"How Do You Manage Privacy and Discretion
for High-Profile Stars?"* and *"How Can Your Agency Elevate an Already
Successful Brand?"*[^eros-home]

Eros is positioned at the **already-successful** creator. Foxy says top 0.1%;
Eros says high-profile stars. Neither is courting the beginner.

### Services, in their words

Profile optimization; content optimization; feed management; engagement
management; sales management; account management across OnlyFans and Fansly;
marketing across TikTok, Instagram, Pornhub, XVideos; fan communication and
private message management; data analytics and strategy
optimization.[^eros-home]

Note that Eros names the adult tube platforms — **Pornhub, XVideos** — by name.
Foxy names only mainstream social. That is a real divergence in how close each
site stands to the industry it serves.

### Route to conversion

Hero CTAs: **"Get Your Free Growth Plan →"** and "Watch Our Testimonial
Videos".[^eros-home] The repeated CTA down the page is **"Apply for a Free
Growth Strategy Call"**, appearing in the testimonials, strategy, values, and
FAQ sections.[^eros-home]

`/apply` is a **three-step qualifying form**, headlined *"Your Roadmap to the
Top 0.1% Creators"* with *"Apply now for your free strategy session. We'll
identify exactly how to double your revenue in the next 90 days."*[^eros-apply]

Step 1 asks, in order: Current Monthly Revenue on OnlyFans (multiple choice);
Your Current Biggest Challenge (multiple choice); Name / Stage Name; Primary
Social Platform; Phone Number / WhatsApp. Buttons: "Submit Application", "Go
Back", "APPLY NOW". Reassurance text beside the form: **"100% Private &
Confidential"**. A section below reads **"No Sales Scripts. Just Strategy."**
and lists the call's agenda: Account Audit, Traffic & Conversion Check, Scaling
Strategy, Q&A Session.[^eros-apply]

I did not fill in or submit any field. I saw step 1 of 3; **steps 2 and 3 I did
not see** and cannot report.

**Steps to conversion: two.** Homepage CTA → apply form. No calendar is exposed
before the form.

### Trust and compliance furniture

Thinner than Foxy's, and deliberately so. Three named testimonials with
tenure — **Mindi (12+ years)**: *"They've really been a blessing in my life."*
**Carmen (15+ years)**: *"It was night and day compared to what I had before."*
**Eva (10+ years)**: *"I saw a massive impact within the first
week."*[^eros-home]

Numbers: "+15 Trusted by top creators", "10+ years avg. experience", an
unspecified average revenue increase within 60 days, floating proof chips
"▲ PPV Sale +$84" and "★ Viral Post, $4.2k in 24h", and a claim of "400%
increase in revenue within the first three months" in the FAQ.[^eros-home]

Footer: Home, casestudies, apply, career, BLOG, privacy policy, an Instagram
link (@eros.agency.official), "© 2026 Eros Agency".[^eros-home]

**No named team. No physical address. No company registration. No terms of
service link in the footer. No age gate. No 18+ statement. No non-affiliation
statement.** I looked for each.[^eros-home] The anonymity is consistent with
the discretion pitch, but it is also a genuine absence of accountability
furniture.

### Imagery

**People, and bodies.** The homepage carries a photograph described as a woman
in a black bikini, and a second of a woman in sunlight, alongside a "Discover
Eros" video thumbnail and abstract branded icons.[^eros-home] No alt text was
exposed. This is the one of the three where the retrievable evidence shows the
creator's *body* rather than her portrait.

---

## AT Agency — at-agency.co

**Not reached.** This is the largest gap in this artifact and I want it stated
before anything else.

### What happened

Three fetch attempts against `https://at-agency.co/?utm_source=feedspot`
returned `read ECONNRESET`; `https://www.at-agency.co/` returned "Socket is
closed". `https://at-agency.co/` and `https://at-agency.co/apply` and a blog
article URL each returned **only the document title** —
*"AT Agency | Top OnlyFans Management Agency"* — and no body, nav, headline,
button, or footer content whatsoever.[^at-home]

The site is up. `sitemap.xml` and `robots.txt` both served
cleanly.[^at-sitemap][^at-robots] The homepage is **client-rendered**: the HTML
shell contains no content, and every route returns the same shell. Reading it
requires executing JavaScript, which my retrieval does not do.

**This was not an age gate.** I encountered no age gate, no consent wall, and
no verification step on any of the three sites, and I attempted to bypass
nothing.

### What I could establish anyway

The sitemap lists **39 URLs**, and their shape is the finding:[^at-sitemap]

- `/`
- `/apply`
- `/blog`
- `/creator-referral`
- `/privacy-policy`
- `/terms-of-service`
- **33 blog posts**, all long-tail SEO ("how-to-promote-onlyfans-on-tiktok",
  "is-an-onlyfans-agency-worth-it", "best-onlyfans-agencies-in-2026",
  "how-chatting-increases-onlyfans-revenue", "why-your-onlyfans-isnt-growing").

There is **no services page, no about page, no team page, no case-studies page,
and no contact page**. Six real routes and a content farm. The whole site is a
single marketing page plus an application, fed by SEO.

`robots.txt` explicitly welcomes AI retrieval agents — GPTBot, Claude,
Perplexity, Google, Bing, plus a wildcard `Allow: /` — and disallows exactly
three paths: `/admin`, `/api`, and **`/chatting-test`**.[^at-robots] That last
one is a chatter-recruitment or chatter-assessment route, which corroborates
that chatting is an operated service here rather than a claim.

`/creator-referral` indicates a referral-commission program for introducing
creators — a fourth funnel none of the others expose.

### Secondhand, and marked as such

A third-party agency directory updated 2026-08-08 describes AT Agency as
offering "OnlyFans account management, Social media growth strategies, Fan
engagement and retention, Content positioning and branding, Revenue
optimization, Traffic generation across multiple platforms, Personalized
creator growth plans, Audience conversion optimization", emphasizing
"sustainable growth instead of short-term promotion tactics".[^dolphin-review]

**Treat this as weak.** It is a directory whose business model is agency
listings; the prose reads like supplied copy, not observation. It is not the
site, and I did not verify a word of it against the site. It should not be used
to answer the visual-register question at all.

---

## The three questions

### 1. Do any of these read "✨expensive✨" rather than "dark, neon, sleazy"?

**I cannot answer this from observation, and I am not going to pretend
otherwise.** I saw no rendered pixels, recovered no palette, and recovered no
typography from any of the three. The single most important question in the
handoff is the one my instrument could not measure. Whoever answers it needs
eyes on a browser or a set of screenshots.

What I *can* say, and where the line falls:

**Observed.** None of the three uses the vocabulary of the register the friend
is steering away from. There is no "sexy", no "naughty", no club or nightlife
language, no neon or glow imagery named in any alt text or filename I saw. Foxy
leads with a named female leadership team, mainstream press logos (New York
Post, The Mirror, AOL), published pricing, and a comparison table.[^foxy-home]
Eros leads with confidentiality, "high-profile stars", and a values
list.[^eros-home] Foxy's creator imagery is portrait-framed under filenames like
"elite-creator-portrait"; Eros's homepage imagery includes a bikini
photograph.[^foxy-home][^eros-home]

**Inferred, and only inferred.** The genre these two sites belong to, judged by
structure and copy alone, is the **B2B conversion landing page** — stat bars,
comparison tables, an ROI calculator, case studies, published pricing, FAQ,
newsletter. That is the visual grammar of a SaaS or consultancy site, not a
nightclub. It is far more likely to read as *credible* than as *sleazy*.

**Whether it reads as ✨expensive✨ is a different and harder question, and my
honest inference is that Foxy at least probably does not.** Eighteen sections,
an earnings calculator, "4 spots remaining", "$480,000 more per year", and a
comparison table with ❌ and ✓ marks are the furniture of *persuasion*, not of
*expense*. Expensive things are typically quiet, sparse, and confident enough to
under-explain. Foxy is loud, dense, and explains everything twice. It is
optimized to convert, and the two goals are in tension.

Eros, being half the length, anonymous, discretion-forward, and organized around
six abstract values, is the more plausible candidate for the ✨expensive✨
register of the two I could read.

**This inference rests on structure and copy density, not on anything visual.
It is the weakest claim in this artifact and should be checked before it is
built on.** If the record wants the visual question answered, someone must
open the three URLs in a browser and look.

There is one thing worth naming for the fracture the record is already
carrying: **the negative brief may be a false alarm.** The friend is steering
away from "dark, neon lights and sleazy" — but if his own references are
conversion-optimized marketing pages rather than nightclub aesthetics, then
what he was reacting against is not what he pointed at. The references and the
negative brief may be describing the same target, in which case the fracture is
not between them but between both of them and the **black-and-gold star-burst
flyer**, which is the only artifact on this record that actually is dark and
loud.

### 2. What is the dominant conversion pattern?

**Neither. It is one funnel that is both, and the sequence is fixed.**

All three route to `/apply` or an application form.[^foxy-contact][^eros-apply][^at-sitemap]
But on the two I could read, **what the application buys is a call, not a
signing.** Eros: "Apply now for your **free strategy session**".[^eros-apply]
Foxy: "Get Your Free Strategy Call", "Book My Free Call".[^foxy-home][^foxy-contact]

The application is not the conversion. It is the **qualifier** on the
consultation. And it qualifies on money: both application forms lead with a
current-monthly-revenue field.[^foxy-contact][^eros-apply] Foxy's runs from
"Just starting" to "$100,000+"; Eros's is the very first question asked.

So the category pattern, stated plainly:

> **apply → qualify (on revenue) → free strategy call → sign.**

This **dissolves the record's recruit-versus-sell tension rather than deciding
it.** The flyer's apply/sign funnel and T's North Star booking are not two
competing funnels — in this category they are consecutive beats of one funnel,
and every peer runs it that way. The open question is no longer "which one" but
**"is the application before the calendar, or is the calendar bare?"**

On that, the peers split. **Foxy exposes both doors** — "Two Ways to Get
Started", a Calendly in the persistent nav reachable in one click without
scrolling, alongside the form.[^foxy-contact] **Eros exposes only the form**; no
calendar appears before it.[^eros-home][^eros-apply] AT Agency, from its
sitemap, has no booking route at all.[^at-sitemap]

Two of three gate the calendar behind an application. Only the largest and most
established lets a stranger book directly. That is a live design decision for
Starvu, and it has a defensible answer in either direction.

### 3. Is there an observable house style?

**One shared category convention, three different levels of investment. T is
right that they are one "type of site" — but only structurally.**

Shared by all three, observed:

- Creator-addressed, exclusively. Not one of them speaks to brands, fans, or
  advertisers.
- An `/apply` route as the conversion spine.
- A blog, in every case SEO-shaped.
- Revenue framed as the headline benefit, with dollar figures on the homepage.
- "Top" positioning — Foxy "top 0.1%", Eros "top Creators become top earners"
  and "Top 0.1% Creators", AT Agency's own title "Top OnlyFans Management
  Agency".[^foxy-home][^eros-home][^eros-apply][^at-home]
- Testimonials by first name only.
- The division-of-labour promise — Foxy "so you can focus on creating while we
  handle everything else", Eros "You Create, We Handle Everything
  Else".[^foxy-services][^eros-home]
- WhatsApp as a contact channel.[^foxy-home][^eros-apply]

Where they diverge, sharply:

| | Foxy Studios | Eros Agency | AT Agency |
|---|---|---|---|
| Homepage length | ~18 sections | 11 sections | unobserved |
| Real routes | ~14 | 6 | 6 |
| Team | named, photographed | anonymous | unobserved |
| Pricing | published (55/45) | not stated | unobserved |
| Press | 8 outlets named | none | unobserved |
| Booking | Calendly in nav | form only | no booking route |
| Legal | Privacy + Terms | Privacy only | Privacy + Terms |
| Lead emotion | money, then safety | discretion |unobserved |
| Blog posts | present | present | 33 |

Foxy is a mature company's site. Eros is a boutique's. AT Agency is an SEO
funnel with a landing page attached. **Starvu, as a brand-new Pennsylvania LLC,
resembles the third in maturity and the second in ambition — and T should know
that the site he is pointing at hardest (Foxy) is backed by five years, 100+
staff, and eight press placements that Starvu cannot yet borrow.** Copying its
proof furniture without its proof would read as false, which is the fastest way
to lose the "feel confident" beat in the North Star.

---

## What I looked for and did not find

This section is the point of the artifact. Read it before using anything above.

**Could not reach at all:**

- **AT Agency's entire rendered site** — homepage, `/apply`, `/blog`,
  `/creator-referral`. Client-rendered; my retrieval executes no JavaScript. I
  have its route list and its robots policy and nothing else.[^at-home][^at-sitemap]
- Eros `/apply` **steps 2 and 3**. I saw step 1 of 3 and did not submit.[^eros-apply]
- Foxy's Calendly contents — the widget's available slots, call length, and
  intake questions.[^foxy-contact]
- Foxy's `/about`, `/press`, `/careers`, `/faq`, `/frameworks`, `/blog`;
  Eros's `/case-studies`, `/career`, `/blog`, `/privacy-policy`. Not fetched —
  a scope decision, not a block.

**Looked for on all three and found on none:**

- **An age gate, an 18+ interstitial, or any consent wall.** None of the three
  presented one. This surprised me and it bears directly on the record's open
  question about whether the flyer's compliance furniture constrains the site:
  the peers carry *less* compliance furniture than Starvu's flyer already does.
- **A non-affiliation statement** regarding OnlyFans or Fenix. Starvu's flyer
  has one; none of these three sites does, on the pages I read.
- **Earnings-not-typical disclaimers.** Foxy publishes "$30K–$100K monthly" and
  a "+$480,000 more per year" calculator with no visible qualifier;[^foxy-home]
  Eros claims "400% increase" with none.[^eros-home] Starvu's flyer already
  qualifies its "$15K–$30K". The record's compliance instinct is *ahead* of its
  references, not behind them.
- **Content protection, DMCA, leak takedown, or piracy monitoring as a named
  service.** T's North Star names "content protection" as one of three Starvu
  services. **Not one of the three references offers it under any name I could
  find.** Either it is genuinely differentiating, or it is a service this
  category places elsewhere — I cannot tell which from three sites, and this is
  worth a targeted follow-up.
- Any company registration number, physical address, or legal entity name.
  Foxy names Switzerland; Eros names nothing.[^foxy-home][^eros-home]

**Could not verify:**

- **Every number on every one of these sites.** "$14M+", "94% retention", "8B+
  views", "400% increase", "+15 creators", "100+ team members" — these are
  unaudited self-published marketing claims and I checked none of them against
  any independent source. They are evidence of *what peers claim*, which is all
  the record needs them for. They are not evidence of anything true.
- Whether Foxy's press placements are editorial or paid. Several named outlets
  run sponsored-content programs; I did not open the articles.
- Whether the Foxy testimonial creators exist.
- Whether AT Agency's third-party description resembles its actual
  site.[^dolphin-review]
- **Anything at all about colour, type, motion, spacing, or density as
  rendered.** Stated once more, because the record's open fracture is a visual
  one and this artifact does not close it.

## What this changes for the record

Stated as consequences, for the Steward and T to weigh — I am not deciding
anything.

1. **The recruit-versus-sell tension has an evidenced resolution available**:
   the category runs apply-then-call as one funnel. The remaining question is
   narrower — gate the calendar or not.
2. **The visual fracture is untouched**, and now demonstrably needs a human
   with a browser. It is still the cheapest large gap, and it is still open.
3. **"You make the content. We run the business around it." is not
   differentiating.** A direct competitor's hero says nearly the same words.
4. **Content protection may be Starvu's one genuine differentiator**, and no
   reference site claims it.
5. **Starvu's compliance furniture exceeds its references'.** That is either a
   liability to trim or an asset to lead with — and given a North Star that
   asks a creator to *feel confident*, an honest guess is that it is the second.

[^foxy-home]: Foxy Studios — homepage
[^foxy-services]: Foxy Studios — Services
[^foxy-contact]: Foxy Studios — Contact / Apply
[^eros-home]: Eros Agency — homepage
[^eros-apply]: Eros Agency — Apply
[^at-home]: AT Agency — homepage
[^at-sitemap]: AT Agency — sitemap.xml
[^at-robots]: AT Agency — robots.txt
[^dolphin-review]: Best OnlyFans Management Agencies: 2026 Expert Review
[^spark]: idea-0003/artifacts/0001-starvu-agency-site.md
