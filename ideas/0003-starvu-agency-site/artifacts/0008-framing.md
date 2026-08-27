---
id: idea-0003/artifacts/0008-framing.md
type: Framing
shape: prose
lenses: []
produced-by: frame
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0001-starvu-agency-site.md
  - ideas/0003-starvu-agency-site/artifacts/0002-north-star.md
  - ideas/0003-starvu-agency-site/artifacts/0006-reference-sites-functionality.md
  - ideas/0003-starvu-agency-site/artifacts/0007-foxy-book-a-call.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [decide, envision, challenge, chart]
summary: "The ground under the Starvu site: two horizons that must not collapse into each other — a long-term web presence for the business, and an immediate landing page whose whole job is to carry a creator from arrival to a booked 1:1. The problem underneath is a proof floor: Starvu must earn a stranger's professional trust on day one with zero track record, in a category whose trust furniture is substantially manufactured, using a mark that points at the register its own brief rejects. Names what is in and out of scope for each horizon, the four constraint sets (T's, the friend's, the category's, compliance), eight assumptions the record is running on, the three live decisions the record has surfaced and not taken, and the largest unnamed hole: nothing anywhere says how a creator arrives."
---

# The ground under the Starvu site

I captured both Sparks on this record, so I know what arrived and in whose
voice. Five Findings have landed since, and The Factor's closing line is the
right summary of where we are: *what remains on this record is decisions, not
research.* This artifact does not take those decisions. It draws the ground
they will be taken on, so that whoever takes them — and whoever designs, and
whoever sequences — is standing somewhere.

I am going to be careful about one thing throughout. T asked for a long-term
roadmap **and** for a landing page he can have very soon, and he is creating
the repository as he asks. Those are two horizons and they have different
answers to almost every question below. The failure mode this framing exists
to prevent is answering one of them and thinking you answered both.

---

## Two horizons, and the seam between them

**The far horizon** is the web presence of a talent-management business over
its life: everything Starvu will eventually need on the internet in order to
find creators, qualify them, sign them, serve them, and be found by the next
one. That is a portfolio of capabilities, and the reference set is a map of
what such a portfolio looks like when it is four years old.

**The near horizon** is one page. T named its job in a single sentence: *a
landing page with a way to contact him and schedule a time to chat about
becoming one of his clients.* He wants it soon. The repo exists as of this
sentence being written.

The relationship between them is not "small version of the big thing." It is
this: **the near horizon is the far horizon's first step, and it is the only
step that must stand alone.** A landing page with a booking on it is a complete
business instrument by itself — a creator can arrive, be convinced, and book,
with nothing else ever built. Every later capability in the far horizon is an
addition to a working machine, not a completion of an unfinished one.

That is the seam, and I want it stated as a constraint rather than a nicety:
**nothing in the near horizon may be a stub that only makes sense once
something later exists.** The record has a vivid warning about exactly this
failure. Foxy ships a chat input with no chat behind it. Eros ships a login
stack titled "Copy of Template" that nothing links to. Both are the same
mistake — an affordance that promises a capability the business does not have.
Starvu, with no track record at all, can afford that mistake least of anyone in
the set.

---

## Who this is for

**The visitor is an adult film creator.** T named her in the North Star, and it
is a different phrase from the flyer's "models" and the opening Spark's
"OnlyFans models, etc." I left that unreconciled in the Spark and I leave it
unreconciled here — but for framing purposes the population is one population,
and three things about it are load-bearing:

- **She is a professional evaluating a vendor.** This is not a consumer
  purchase. She is being asked to hand a share of her income and her operational
  life to someone. The reference set treats her that way: all three qualify on
  revenue before they will talk.
- **She has almost certainly been pitched before, and quite possibly burned.**
  Foxy's blog programme is built on head terms like *how to switch agencies* and
  *is an agency worth it*. Eros diagnoses her by pain. The category's own
  content tells you what its audience is thinking about.
- **She can verify things.** She is native to the platforms, she knows what
  stock photography looks like, and she has seen the other agencies' sites. Two
  of the three references appear to manufacture their proof — AI stock, scraped
  press logos. **A site that borrows the proof furniture without the proof is
  making a claim to a reader equipped to check it.**

**The second reader is the friend, and his partner.** They supplied
✨expensive✨. They will see this site before any creator does, and their
reaction is a real gate whether or not anyone has designed for it. This matters
because the friend's aesthetic sign-off and the creator's conversion are not the
same test and could point different directions.

**The builder is T**, alone, for a friend, on a personal horizon, with the
repository opened today. His constraints are real constraints on the idea, and
I list them below rather than pretending the work is unconstrained.

**There is also a party who has not been consulted at all and whose business
this is.** See *Dependencies on people*.

---

## The job the site does

T's North Star draws four beats and flags the last: **arrive → feel confident →
learn the services → book the 1:1.**

The category draws a longer path: **apply → qualify → free call → sign.** The
flyer Starvu already has is pure recruitment and lives at the front of that
path; the North Star's booking is the third beat of it. These are not competing
funnels — they are consecutive, and the record should stop treating them as a
fork. What is genuinely unsettled is smaller and sharper: **what the site's
terminal state is.** A booked consultation is not a signature. Whether the site
exists to fill a calendar and let a conversation do the closing, or to
pre-qualify hard enough that the conversation is a formality, is a live
question about the shape of the whole thing.

One structural fact from the research governs the near horizon more than any
other: **only Foxy exposes a calendar at all.** Eros and AT collect contact
details and schedule by hand. T's terminal action is the category's outlier —
and it is the outlier in the direction T has already chosen. That is not a
problem. It means the near horizon's central mechanism has exactly one
precedent in the reference set, that precedent has been measured down to the
CSS, and it has a known defect on phones (a 24px-radius `overflow: hidden`
wrapper amputating 17px off the right edge of the booking UI at 375px). The
choice that makes Foxy's page look expensive is the same choice that breaks its
only job on a phone. Whatever gets built here inherits that lesson for free.

---

## The problem underneath

Strip the aesthetics away and the idea is standing on one thing.

**Starvu has to be trusted with a stranger's income on the day it launches,
with nothing to point at.** No creators managed. No years in business. No
press. No numbers. The smallest honest claim anywhere in the reference set is
AT's — *4+ years, 12+ creators managed*, stated on the hero — and Starvu cannot
make even that one. It is below the floor of the category's most modest
competitor.

Everything else on this record is a consequence of that fact.

- It is why the category's proof furniture is a trap rather than a template.
  Testimonials with figures, logo walls, "8,000,000,000 organic views," a
  dashboard labelled LIVE that makes zero network calls, social-proof toasts
  announcing that Sarah from Miami just applied — every one of these is
  available to copy and none of them is available to *mean*. The reference set
  will teach a builder how to look established. Looking established is precisely
  the thing Starvu cannot afford to fake to an audience that can check.
- It is why the feeling-words matter operationally rather than decoratively.
  When you have no evidence, the surface **is** the evidence. "Feel confident"
  is not an aesthetic preference on this record; it is the substitute for a
  track record, and it has a way to fail.
- It is why brevity is interesting rather than merely cheap. The Factor's
  finding on Foxy's `/contact` — the same company at one quarter the length,
  every expensive surface kept, all the explaining discarded — is a finding
  about what a site can decline to say. A business with nothing to prove has
  less to say by nature. That may be an advantage rather than a deficit, and
  AT's 13.4 phone screens against Eros's 20.5 and Foxy's 22.3 says the category
  tolerates short.

**So the problem, in one sentence:** *build a first web presence that earns a
professional stranger's confidence without any of the evidence the category
uses to earn it, and without borrowing the counterfeit evidence the category
substitutes.*

The second problem, underneath the first and smaller: **the only brand asset
that exists points at the register the brief rejects.** Black-and-gold,
star-burst, heavy italic condensed, sports-broadcast. The brief says not dark,
not neon, not sleazy, ✨expensive✨ — and points at Foxy, which is white, navy,
and serif. The two halves of the friend's own input point at different
references in his own list. Nothing can be designed until someone decides which
half wins, and that decision is not mine.

---

## Scope

### The idea's outer boundary

**In:** everything Starvu puts on the internet under its own control — pages,
forms, booking, copy, visual register, the mark's application, the compliance
surface, and eventually whatever tooling creators or the operator touch.

**Out, and these are out at every horizon:**

- **The business itself.** Pricing, the revenue split, what the Talent
  Management Agreement says, who the friend hires, how chatting is staffed, how
  content protection is actually performed. The site can *state* these; it
  cannot *decide* them, and this record must not start deciding them by
  implication. Where a page needs a number the business has not set, that is a
  blocked page, not a design problem.
- **Off-site acquisition as a channel to be operated.** SEO programmes, paid
  ads, referral commissions, and social distribution are all visible in the
  reference set and all belong to the far horizon at the earliest. But see
  *The hole* below — the *question* of arrival is in scope even though the
  channel work is not.
- **Legal advice.** The flyer's compliance furniture is a fact to be carried,
  not a matter for anyone here to rule on.
- **The friend's own decisions.** Two of them are named as dependencies below.

### The near horizon's boundary

T bounded this one himself, and I am going to hold him to his own words rather
than invent a scope: **a landing page, a way to contact, a way to schedule a
chat about becoming a client.** Measured against the North Star, its four beats
are the entire test. Anything that does not serve *arrive → feel confident →
learn the services → book* is outside the near horizon — not rejected, just
later.

That places these outside it, all of them present in the reference set and none
of them serving those four beats: a blog, a portal or login of any kind, a
pricing page, case studies, a referral programme, a lead magnet, an
invitation-only tier, a careers funnel. Two items sit genuinely on the line and
I am naming them as on the line rather than ruling: **an earnings calculator**
(category-standard furniture, two of three have one, an afternoon to build,
and it is arithmetic over invented constants) and **a services page as a route**
(only Foxy has one; the others keep services as an anchor). Whether either
belongs to the near horizon is a design call, and design is The Architect's.

The compliance surface is the one thing I will argue is **in** the near horizon
rather than on the line, and the argument is factual: the flyer already carries
18+/ID verification, per-partner verification for couples, earnings-not-typical
language, explicit non-affiliation with OnlyFans/Fenix, and terms deferred to a
Talent Management Agreement. **Someone thought about this before the website
existed.** Zero of the three references carry any of it — no age gate, no
consent wall, no verification step on any route of any site across five passes.
A site that carries less compliance language than the flyer that feeds it is a
site that got *less* careful as it got more public. That is a scope statement,
not a design.

---

## Constraints that are real

**T's.** Solo builder. "Very soon" is his own words for the near horizon and
the appetite frontmatter is still a placeholder, so the real budget is unstated.
The repository is being created now, which means a stack choice is imminent and
is being made outside this record. No agency budget is anywhere in evidence:
photography, video, and design labour are T's own or they do not happen. And
one soft constraint worth naming because it changes how failure feels — this is
a favour for a friend, so the cost of a wrong turn is social as well as
technical.

**The friend's.** He owns the business, the brand, the services, and the sign-
off. He supplied a negative brief ("not super dark, neon lights and sleazy"), a
feeling ("✨expensive✨", relayed from his partner), a mark that contradicts it,
three reference URLs of which one is squarely the register he rejected, a
services list that ends in "etc.", and one sentence of finished voice: **"You
make the content. We run the business around it."** That sentence is already
written and is the best copy on the record. He has not been asked the two
questions below.

**The category's.** Established by five Findings and not up for debate:
qualification on revenue before conversation, on all three. A second qualifier
beyond revenue, on all three. WhatsApp as the conversational channel, on all
three — nobody runs a chat vendor. An earnings calculator on two of three. FAQ
on all three. Scarcity device on all three. And the absences: zero working
creator portals, one published price in the whole set, no age gate anywhere,
and content protection appearing exactly once — as a dropdown option on an
application form. **Nobody in this category sells content protection. T names it
as a core service.** That is either the opportunity on this record or a hint
that the thing is hard to sell; the record cannot tell which yet.

**Compliance and platform.** The flyer's furniture, listed above, is the floor —
it exists, it was authored deliberately, and it constrains what the site may
claim (earnings especially) and whom it may accept. Starvu LLC is a
Pennsylvania entity, which puts a real jurisdiction under the terms. The
category's own practice offers no cover here: the references are the wrong place
to look for what is required, because they do none of it.

---

## What the record is assuming

Each of these is currently unexamined and each would change the shape of the
work if it turned out false. They are stated so they can be attacked.

1. **That the creator arrives at all.** See below; this is the big one.
2. **That the friend can convert a booked call.** The site's job ends at the
   booking. If the call does not close, a better page makes the failure faster,
   not smaller.
3. **That the named services are deliverable today.** Chatting, advising,
   content protection, etc. A site that names a service creates an obligation,
   and content protection is the one nobody else is willing to name.
4. **That "expensive" and "confident" describe a reachable single target.** The
   record now has a candidate resolution for this but has not tested it.
5. **That the three reference URLs still represent what the friend wants.** They
   were supplied before anyone had looked at them. One of them turned out to be
   the register he named as the negative.
6. **That the flyer's funnel and the North Star's funnel are consecutive rather
   than competing.** I have asserted this above; it is a reading, not a fact.
7. **That the visitor is one population.** "Models," "OnlyFans models, etc.,"
   and "adult film creators" are three phrasings and the record has treated them
   as one audience. Solo creators and couples are explicitly both in the flyer.
8. **That a booking is the right terminal action for a business with no
   reputation.** Foxy — with 6,000+ claimed applications behind it — can afford
   an ungated calendar. Whether an unknown can is untested.

---

## The hole nothing on this record covers

**Nothing anywhere says how a creator gets to the site.**

The North Star opens with "adult film creators visit the site" and treats
arrival as given. Every reference in the set treats it as the hard part: Foxy
runs ~115 blog posts and an explicit AI-crawler acquisition strategy, AT is the
only one visibly buying traffic and built a referral programme with real
attribution to avoid having to, Eros gestures at nine posts. The flyer has a QR
placeholder on it, which is the only distribution mechanism anywhere in Starvu's
own material — and it points at a piece of paper someone must already be
holding.

I am not proposing a channel; that is out of scope and it is not my office. I
am naming that **the near horizon's page has no named traffic source**, and
that a landing page converts but does not acquire. If the answer is "the friend
sends the link to people he is already talking to," that is a perfectly good
answer and it changes what the page has to do — a page for warm traffic and a
page for cold traffic are different pages. **Nobody has said which this is, and
it is cheap to ask.**

---

## The three live decisions

The record has surfaced these and taken none of them. They are decisions —
they await a choice, not an answer — and `decide` is The Chancellor's. I set
out what each one is actually choosing between and what hangs on it.

**1. Which feeling leads — ✨expensive✨ or *confident*?**
The friend supplied one, relayed from his partner; T supplied the other. The
record spent two sessions with these apart, and The Factor's study of Foxy's
`/contact` produced the first evidence that they may be one target: that page
keeps every expensive surface and discards all the explaining, and the expensive
feeling gets *stronger*. The candidate resolution on the record is **brevity is
not the enemy of confidence; over-explaining is.** It is marked, correctly, as
measurement reasoning about a feeling that nobody has seen — screenshots failed
on every attempt across three sessions. What hangs on it: essentially every
downstream surface decision, plus how much page there is.

**2. Gate the calendar behind a qualifying form, or leave it bare?**
The category gates it — Eros and AT collect and schedule by hand. Foxy, the most
established, leaves it ungated and bookable before any field is entered, with
the form's success modal handing off *to* the calendar rather than replacing it.
T's North Star wants the booking. What hangs on it: lead quality against lead
volume, and — given assumption 8 — whether an unknown agency can afford an open
calendar at all. Note that Foxy runs both entrances on one page and calls it
"Two Ways to Get Started," so the choice may not be binary.

**3. Inherit the supplied mark, or set a new visual register?**
The friend's brief points at Foxy: white, navy, Playfair. His own flyer points
at AT: black, a single accent, 13.4 phone screens. **The two halves of his own
input pull at different references.** This is the record's oldest tension, it
has been sharpened twice and resolved never, and it cannot be dissolved by
research — one of them has to give. What hangs on it: the mark's future, and
whether the "roughly 80% of the effect is configuration, not craft" finding is
even applicable (it is a description of Foxy's system, and it transfers only if
the Foxy half wins).

---

## Dependencies on people

These belong to conversations, not to dispatches, and no agent should attempt
either.

**Was the friend's negative brief aimed at the category, or at his own flyer?**
It has been the cheapest unanswered question on the record for three sessions.
Eros — one of his own three references — *is* the dark/neon register he named as
the negative, which kills the reading that the brief described the whole set and
leaves both interpretations alive. Decision 3 is largely waiting on this.

**Would the friend state the same North Star?**
The North Star is the first material on this record that came *from* T rather
than *through* him. It names the audience, the feeling, three services, and a
single terminal action. Nobody has asked the man whose business it is whether he
agrees with any of it. Both questions have the same addressee and one
conversation answers both.

---

## What must be true for this to work

Gathered from the above, because a framing that lists constraints without
stating the success conditions has only done half the job.

- A creator who has never heard of Starvu is willing to put a time on a
  stranger's calendar on the strength of one page. **Nothing on this record
  establishes that this is achievable without proof.** It is the load-bearing
  bet.
- Confidence can be produced by surface and restraint rather than by evidence —
  or, failing that, some honest proof exists that nobody has found yet. The
  friend himself is the only proof asset currently in inventory: a real named
  person with a real Pennsylvania company, one sentence of good voice, and
  compliance furniture nobody else in the set bothered with.
- The friend can convert the calls the page books.
- Every service the site names is real.
- The friend and T agree on the register, the feeling, and the goal — or one of
  them is explicitly deciding for both, knowingly.
- Someone can get creators to the page.

---

## Where this framing stops

I have not designed anything, proposed a visual direction, sequenced anything,
or written the roadmap. `envision` is The Architect's; `chart` and `phase` are
The Surveyor's; the three decisions above are The Chancellor's; the two
questions are T's to carry to his friend.

What I claim to have done is smaller: **the near horizon and the far horizon
are now separable and their relationship is stated; the problem underneath both
is named as a proof floor rather than an aesthetic; the boundaries are drawn;
the assumptions are exposed; and the hole where the traffic source should be is
marked as a hole rather than left as a silence.**

A stranger could pick this record up now and work on it without meeting T.
