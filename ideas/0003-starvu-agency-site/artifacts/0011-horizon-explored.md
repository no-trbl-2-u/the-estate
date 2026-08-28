---
id: idea-0003/artifacts/0011-horizon-explored.md
type: Horizon
shape: prose
lenses: []
produced-by: explore
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0010-horizon.md
date: 2026-08-27
classifiers:
  challenged: false
  horizon: falsifiable
potential-next-steps: [decide, challenge, chart, research]
summary: "The answer to T's three-surface question is uneven on purpose: internal tooling is where almost all the value is and the honesty test does not bind it at all; visitor-facing AI is almost entirely refused and gets one narrow exception; and the creator portal is earned much earlier than 0010 said, because 0010 sorted it by category evidence rather than by its own test. The exploration's central find is that 'portal' names two different objects that share a word — a login link on a public page with nothing behind it is Eros's exact defect and stays refused forever, while a client portal holding a signed creator's own agreement, her verification status, her weekly numbers and her takedown log is a DISCLOSURE INSTRUMENT with an audience of one, and it becomes honest the day the second creator signs. The resolution that satisfies both 0010 and T at once: the portal is real, and the public site never links to it. Fifteen internal candidates are developed, of which two cost an afternoon each and change what the page can honestly say — a call-notes capture that funds the real FAQ and the sharpest inherited falsifier, and a claims ledger that makes the no-stub audit a build step rather than a habit. Six hazards bite hard and one of them is new to the record and structural: mainstream model providers prohibit adult sexual content generation, so the chat-drafting tool everyone reaches for first is not an afternoon, it is a different infrastructure decision — and OnlyFans's automation ban lands on the creator's account, not Starvu's, which makes it a fiduciary question rather than a compliance one. Five new falsifiers, the sharpest being the tooling bet: hand the friend the notes capture for two weeks, and if it is empty at week two, build nothing else internal."
---

# The Starvu page, six months in — and the machinery behind it

I am The Forager. The Architect drew one object and drew it well, and I am not
here to redraw it. `0010` stands: the six-month page, the assertion/disclosure
sort, twelve day-one features, six with named triggers, seven refused, the
calculator ruling, the warm/cold branch, nine falsifiers. All of it is carried
forward and none of it is annexed.

What I am here to do is grow a dimension into it that the drawing did not have.
T asked a three-part question — what could he *build*, in the repo, for the
friend, for the site, for the creators — and the three parts are genuinely
different objects with genuinely different rules. The temptation is to answer
them as one question about "AI features." They are not one question. One of them
is barely governed by `0010`'s honesty test at all; one of them is governed by it
so tightly that the answer is nearly *no*; and the third one turns out to be a
place where `0010` applied its own test to the wrong object and reached a
conclusion I think is wrong.

So: three surfaces, developed separately, and then put back together.

---

## The asymmetry, stated before anything else

`0010`'s sort — **assertion machines** need a business behind them to be true;
**disclosure instruments** need only a fact in front of them — is the record's
best idea and I use it throughout. But it is a test about *claims made to
strangers*, and that means it applies to the three surfaces with wildly
different force.

| Surface | Who sees it | Does the honesty test bind? |
|---|---|---|
| **1. Internal tooling** | the friend, his managers | **No.** A tool that makes no claim to anybody cannot be an assertion machine. A broken internal tool is a bad Tuesday, not a lie. |
| **2. AI on the marketing page** | a stranger, pre-signing | **Maximally.** This is the tightest-bound surface on the record, and an AI widget here is the closest possible thing to Foxy's dead chat input. |
| **3. Creator tooling behind a login** | a signed creator, post-agreement | **Differently.** She is not a stranger being persuaded; she is a counterparty checking that a thing she was promised is happening. Showing her that is *disclosure*, not assertion. |

Read that table and the shape of the answer is already visible. Almost all the
value is in surfaces 1 and 3. Surface 2 is where the instinct goes first and it
is the one place the answer is mostly *no*.

There is a second asymmetry worth naming, because it changes the ranking at the
end. **Surface 1 tools manufacture the facts that surfaces 2 and 3 are built out
of.** `0010`'s "real once one cheap thing exists" tier has six rows, and four of
them are blocked on *somebody writing something down*: Starvu's own numbers, the
real FAQ, the median response time, a service described from a real week. An
internal tool that makes the writing-down automatic is not a side quest. It is
the supply line to the page.

That is the sentence I would hand T if he only read one: **build the tools that
produce facts, because this page is made of facts.**

---

## Surface 1 — internal tooling, where the honesty test does not reach

The method here is not "what AI capabilities exist." It is: read the flyer as a
list of jobs, and ask who is doing each one by hand on a Tuesday.

The flyer promises promotion, chatting, scheduling, brand deals, 24/7 support,
weekly team meetings, creator-set schedules, runway and brand opportunities, a
verification standard, a written agreement, and a 90-day exit. Every one of those
is somebody's afternoon. Here are the candidates that came out of that reading.

### 1.1 The call-notes capture

**What it does.** After every consultation call, the friend dictates or types
two minutes of notes into one place. A small script splits them into three files:
questions the creator asked (in her words), what he answered, and her answer to
*what made you book?* Over ten calls it becomes the FAQ; over twenty it becomes
the evidence that settles `0010`'s sharpest falsifier.

**Who touches it.** The friend, alone, for ninety seconds after each call.

**What has to be true.** That he will do it. That is the whole dependency, and it
is not a technical one.

**Cost.** An afternoon, and most of that afternoon is making it frictionless
enough that he actually uses it — a phone shortcut, a WhatsApp message to
himself, a Telegram bot, anything with a lower activation energy than opening a
laptop. The AI part is trivial and genuinely useful: cluster twenty raw notes
into the eight questions that keep recurring, and draft the FAQ in his phrasing
rather than in marketing's.

**Species.** Neither. Internal. But it is the **highest-leverage object in this
entire exploration**, because `0010` already depends on it twice and has no
mechanism for it. Falsifier 5 — *what made you book?* — is described as costing
"one sentence per call." Sentences that cost nothing still do not get written.
This is the thing that makes the Architect's own falsifier operable.

**Hazard.** Recording. If this becomes a *recorded* call rather than notes after
one, Pennsylvania's wiretap statute is all-party consent for oral communications
— unlike the one-party rule in most states. I am not giving legal advice and this
should be checked with counsel, but the safe build is notes-after, not
recording-during, and that also happens to be cheaper. If he ever does want
transcripts, the consent line goes in the booking confirmation, which `0010`
already ships.

### 1.2 The claims ledger, and the no-stub audit as a build step

**What it does.** Every factual claim on the site lives as a row in a
`claims.yml` alongside the page — the claim, its source, who can verify it, and
the date it was last verified. The build reads that file. A claim past its
staleness window fails CI, or renders with a visible "last verified" date, or
both.

**Who touches it.** T at build time; the friend when something changes.

**What has to be true.** Nothing. This is buildable today with an empty site.

**Cost.** An afternoon.

**Species.** Internal at build time — and then, if T chooses, **a disclosure
instrument of an unusually pure kind.** A page where each number carries the date
it was last checked is telling the visitor something true about itself that no
site in the reference set tells her. Foxy's "LIVE" pill claims freshness it does
not have. A "verified 12 August" stamp claims freshness it *does* have, and is
falsifiable on its face.

This is the tool I most want on the record, because it converts `0010`'s
falsifier 8 — *at month six, walk the page and check nothing has drifted out of
true* — from a discipline that depends on memory into a thing the build refuses
to ship without. The Architect wrote that falsifier knowing it was a habit. This
makes it a mechanism.

### 1.3 The content-protection / takedown assistant

**What it does.** Two versions, and the gap between them is large.

*Manual-assist (weekend).* The friend pastes a URL where a creator's content has
been reposted. The tool identifies the host and its designated DMCA agent,
drafts a compliant notice with the required statutory elements, logs the notice,
and reminds him to check in seven days. Everything is one human click from
sending.

*Monitoring (a month, and probably a purchase instead).* Scheduled reverse-image
and handle search against the known leak aggregators, triaged into a queue.

**Who touches it.** The friend or a manager; the log becomes a creator-facing
artifact later.

**What has to be true.** That content protection is a service Starvu actually
performs. `0009` amendment to assumption 3 is pointed directly at this: under
verifiability-as-ground, *a service the friend cannot yet deliver is a hole in
the only proof strategy available.* Right now the record does not know whether he
performs it.

**Cost.** Weekend for manual-assist. The monitoring half is where a build-versus-
buy call lives — there is a real commercial category here (the Rulta/BranditScan
tier), and a one-man agency buying one and reselling the log is a completely
respectable answer that costs a subscription instead of a month.

**Species.** Internal — and it produces the **best disclosure asset available to
this business.** `0006` is unambiguous: content protection appears in the entire
reference set exactly once, as a dropdown option on AT's application form.
*Nobody sells it. Nobody explains it.* A page that says "last month we filed 34
notices and 29 came down, median four days" is making a small, true, checkable
claim in a category where nobody makes any claim at all. That is `0010`'s "own
numbers" unlock with a second, better number in it.

### 1.4 The weekly numbers pack

**What it does.** Per creator, per week: her platform figures assembled into one
page, last week's delta, and three questions worth raising at the meeting. The
flyer promises weekly team meetings; something has to be *in* them.

**Who touches it.** The friend prepares; the creator receives it in the meeting.
Later, it is the portal's first recurring payload (see §3).

**What has to be true.** That the numbers land somewhere consistent. There is no
public OnlyFans API to speak of, so realistically this begins as a CSV export or
a screenshot and a manual paste, and the tool's job is formatting and narration
rather than acquisition. That is fine. Formatting and narration is most of the
work.

**Cost.** A weekend for the useful version.

**Species.** Internal, with a hard constraint attached — see §4.3. **The tool may
display numbers. It may never project them.** The moment a model writes "you're
on pace for $12k next month" and she screenshots it, Starvu has made a written
earnings representation to a client. That is the calculator refusal from `0010`,
generalised: the Architect refused the generator on the marketing page; the same
refusal has to travel through the door into the portal, and it is *easier* to
violate there because the audience is friendly and the number feels like a
courtesy.

### 1.5 The response-time meter

**What it does.** Measures how long Starvu actually takes to answer a creator's
message, and reports the median.

**Who touches it.** The friend; then the page.

**What has to be true.** That support runs somewhere exportable. WhatsApp and
Telegram both export threads; the meter is a parser and a median.

**Cost.** An afternoon, once the export exists.

**Species.** Internal, manufacturing a disclosure asset that `0010` already put
on the page — *"the actual median time it took him to answer a message last
month."* The Architect listed that number as a day-one-plus-one-month feature
without noticing that nothing on the record produces it. This produces it.

**And it is the honest form of "24/7 support,"** which is the flyer's most
exposed line. Every agency claims it. One agency can publish what it actually
was.

### 1.6 Support triage — the honest version of always-on

**What it does.** An incoming creator message is classified: urgent (account
locked, content leaked, a fan threat, a payment failure) versus everything else.
Urgent wakes the human. Everything else gets a truthful acknowledgement — *seen,
a human is replying, typical time at this hour is X* — where X comes from 1.5 and
is a real measurement, not a promise.

**Who touches it.** A signed creator, and the friend.

**Cost.** A weekend, if the messaging channel has webhooks.

**Species.** This is the one place on surface 1 where the honesty test *does*
bite, because the creator sees it. And it passes, narrowly and only in this
shape: **it discloses the expected wait rather than pretending to answer.** An
auto-responder that answers the question is an assertion machine wearing a
helpful face. An auto-responder that says *I am not a person, here is when the
person arrives, and here is what that number has actually been* is a disclosure
instrument in a message thread.

The line is exact and worth keeping: **the bot may report, never resolve.**

### 1.7 The onboarding and verification tracker

**What it does.** Per creator: ID verified (yes/no/when), platform verification
confirmed, both partners done if a couple, TMA sent, TMA signed and which
version, payout details on file, 90-day trial clock started and its end date.

**Who touches it.** The friend.

**What has to be true.** That he is willing to keep records. He should be; the
flyer's whole eligibility standard is a records claim.

**Cost.** A weekend, with almost no AI in it — and the low AI content is the
point. This is a compliance ledger, and a compliance ledger you cannot audit is
worse than a spreadsheet.

**Species.** Internal, and it carries the single sharpest hazard in this
document, which gets its own section (§4.1). Short form: **build the tracker,
never build the vault.** The tracker records *that* verification passed and when.
It must never contain a photograph of a driver's licence.

### 1.8 The agreement lifecycle

**What it does.** Versions the Talent Management Agreement, records who signed
which version on what date, and diffs versions so the friend knows what changed.

**Cost.** An afternoon on top of 1.7, or zero if he uses an e-signature vendor,
which he probably should.

**Species.** Internal. Becomes a disclosure asset in an oblique way that I like:
if the TMA goes on the public page (`0010` feature 2), then the *published*
version needs to be the version people are actually signing, and something has to
keep those in sync. Otherwise the page's best feature quietly drifts out of true
— exactly falsifier 8, aimed at the one document the whole spine rests on.

### 1.9 Promotion — the caption and posting assistant

**What it does.** For a promotion post (Reddit is the realistic engine for this
industry; X and TikTok adjacent), generate caption variants, check them against
the target subreddit's posted rules, and schedule.

**Who touches it.** Whoever runs promotion — the friend now, a manager later.

**Cost.** A weekend for drafting-and-checking; longer if it posts on its own,
and posting on its own is where platform rules start to matter.

**Species.** Internal. **Hazards, moderate but real:** the model-provider content
policy problem (§4.4) applies to captions for adult content and may bite here
before it bites anywhere else; and automated posting is a rules question per
platform rather than one global answer.

### 1.10 Brand deals and runway opportunities

**What it does.** A pipeline: inbound offers triaged and summarised, outbound
pitches drafted against a creator's actual stats, deliverables and deadlines
tracked.

**What has to be true.** That there is a flow of brand deals. Today there almost
certainly is not — the flyer promises the *opportunity*, and a promise of
opportunity is `0010`'s "real once one cheap thing exists" pattern with the thing
being *one deal actually done*.

**Cost.** Deferred. A weekend when it is real; premature now.

**Species.** Internal. Filed as a later candidate rather than a first build, and
this is the one place I am comfortable saying *not yet* about an internal tool —
not on honesty grounds, but because there is nothing for it to process.

### 1.11 The chatter assessment

**What it does.** A scored assessment for hiring chatters, and a style guide per
creator that a new chatter is trained against.

**Where this came from.** `0006`, and `0010` did not use it: AT Agency has a
`/chatting-test` route with a lazy-loaded `ChattingPage` chunk, disallowed in
`robots.txt`. Foxy hires "German-speaking Chatters" through a Calendly link with
the role pre-filled. **Chatting is an operated function with a hiring pipeline
behind it at both of the working businesses in the set.** If Starvu grows past
the friend, it grows here first.

**Cost.** A weekend.

**Species.** Internal, with a **strong** disclosure asset hiding in it: *"every
person who speaks in your DMs passed an assessment, and here is what it tests."*
Nobody in the reference set says one word to a creator about who is in her
messages. That is a claim Starvu could make that is both true and unmatched — and
see §4.5, because the honest version of it is bigger than a recruiting detail.

### 1.12 The chat drafting assistant — developed, and flagged

This is the tool everybody reaches for first, and it is the one I would build
last. Not on moral grounds; on grounds that it is three hazards stacked and it is
not the afternoon it looks like.

**What it does, in its most defensible form.** Not a bot. A **snippet library
plus tone matcher**: per-creator voice notes, approved phrasings, boundaries she
has set in writing, and a retrieval surface that puts the right approved snippet
in front of a human chatter who then types. The human is always the sender.

**What has to be true.** Three things, and the record knows the answer to none of
them:

1. That OnlyFans's terms tolerate whatever touches the account. Third-party
   automation of messaging is broadly prohibited across the platform tier, and
   the enforcement lands on **the creator's account, not Starvu's.** That
   converts a compliance question into a **fiduciary** one: the downside of this
   tool is borne by the person who trusted you. That is a different argument from
   "we might get in trouble," and it is much harder to wave away.
2. That the model provider permits it. See §4.4. This is the constraint that
   changes the cost estimate by an order of magnitude and I do not think T has
   priced it.
3. That the creator has agreed, in writing, to who may speak as her and by what
   means. See §4.5.

**Cost.** Weekend for a snippet library with no model in it at all. Unknown and
substantially larger for anything that generates, because of (2).

**Species.** Internal — but the *fact of it* has a disclosure consequence
(§4.5) that is more valuable than the tool.

**The distinction to keep, in four words: drafts versus sends.** A tool that puts
words in front of a human is a productivity tool. A tool that puts words in front
of a fan is a different product, in a different regulatory position, with a
different consent structure, and it should not be reached by sliding a setting.

### 1.13 Three small ones, grouped

- **Calendar honesty.** `0010`'s only honest scarcity device is *few slots
  because there are few.* Something has to keep that true when he is travelling,
  ill, or overbooked — the failure mode is `0009`'s no-show hazard, and it is
  mechanical. An afternoon of buffer rules and blackout sync.
- **Link tagging and the attribution rollup.** `0010` features 10 and 11 produce
  data; nothing on the record reads it. Fifteen minutes to emit, an afternoon to
  summarise. This is what actually settles warm-versus-cold.
- **The internal screener.** The public eligibility check (`0010` feature 4) run
  over an inbound lead, so the friend sees before the call whether she clears
  admission. Trivial once feature 4 exists; it is the same rules engine pointed
  the other way.

### 1.14 What I explicitly did not develop

An AI that talks to fans as a creator, unsupervised. An AI that generates
content. Anything that touches the creator's platform credentials. The first is
1.12 with the guardrail removed; the second is a different business; the third is
the thing that makes a breach unbounded.

---

## Surface 2 — AI on the marketing page, where the answer is nearly no

`0010` refused "chat input of any kind" and named WhatsApp as the permanent
answer. I was asked to develop the space rather than police it, so I went looking
for a visitor-facing AI surface that is genuinely a disclosure instrument. I
found exactly one, and I found a reason to refuse the obvious one that is
*stronger* than the reason `0010` gave.

### 2.1 Why an AI chat is worse than Foxy's dead chat, not better

`0010`'s argument against a chat input is the no-stub argument: Foxy ships
`faq-chat-send` with no script behind it anywhere on the site, and an affordance
that promises a capability the business lacks is the record's most vivid warning.

An AI chat widget appears to solve that. It has something behind it. It works.

That is the problem. **Foxy's chat input lies by doing nothing. An AI chat input
would lie by doing something.**

Consider what a visitor asks a chat box on this specific page. *What's the split?
Can I leave? What happens to my ID? Do I have to do calls? What if my partner
won't verify? What could I make?* Every one of those is a question about the
terms of a written agreement, an admission policy, or an earnings expectation.
Every plausible answer is a representation by a Pennsylvania LLC to a prospective
counterparty, generated at scale, unreviewed, at 2am, with no transcript
discipline and no human in it. The last of those questions — *what could I make?*
— is the exact question `0010` refused to let a slider answer. A chat box answers
it in prose, per visitor, and prose is worse than a slider because it sounds like
a person promising.

The failure mode is not a dead widget. It is a **live widget that confabulates a
term.** And the asymmetry `0009` established applies at full force: Foxy can
absorb one bad answer; a business with a handful of creators, in an industry
where creators talk to each other, cannot.

**Refused, and I am strengthening rather than softening `0010` here.** The reason
is upgraded from *stub* to *unreviewed representation*, which also closes a door
`0010` left ajar: a *working* chat would have satisfied the no-stub rule as
literally written.

### 2.2 The one exception — the clause finder

Here is the surface I would defend.

**What it does.** The Talent Management Agreement is on the page (`0010` feature
2). A visitor types a question — *how do I get out?* — and the page **scrolls to
and highlights the actual clause**, quoted verbatim, with its heading. It
generates no answer. It performs retrieval and nothing else.

**Why it is a disclosure instrument and not an assertion machine.** Apply
`0010`'s test literally. It claims nothing the visitor cannot see; it shows her
something that already exists and lets her check it. The fact is in front of her
— it is *on the page*, in the document, in Starvu's own words, already vetted by
whoever wrote the agreement. The model is a **navigation aid over published
text**, and the text is the authority.

**And here is the test that proves it.** Remove the AI. Replace it with keyword
search over clause headings. **The feature still works, just worse.** That is the
signature of a disclosure instrument: the substance is the fact, and the machine
is only how fast you get to it. Remove the AI from a chat widget and you have
Foxy's corpse.

**Who touches it.** A visitor, pre-signing.

**Cost.** An afternoon, and the v1 has no model in it at all — clause headings,
a search box, a scroll-and-highlight. The model is a later upgrade to recall.

**What has to be true.** That the agreement is published, which is gated on the
friend, which is `0010` falsifier 6 and the cheapest open question on the record.

**Design constraints, non-negotiable if it ships.** It never paraphrases. It
never answers a question the document does not answer — it says *the agreement
does not address that; ask him on the call*, which is both true and a better
conversion than an invented answer. It never touches money, earnings, or
eligibility outside the published rules.

**Its most valuable output is its failures.** Log the queries it could not
resolve. That log is a list of the things creators want to know and the agreement
does not say — which is worth more to the friend's lawyer than the feature is
worth to the page.

### 2.3 Translation, split in two

Genuinely useful and genuinely honest: the reference set is international (AT
runs a sixteen-country select, Eros recruits German-speaking chatters), and
nobody translates anything. Machine translation of the marketing prose is cheap
and makes the page reachable.

**But it must not touch the agreement.** Translating marketing copy is
convenience. Translating a contract produces a second contract, and the two
disagree the moment the model picks a synonym. Publish the agreement in one
language and say which one governs.

That split — **translate the pitch, never the terms** — is the general form of
the whole surface-2 answer.

### 2.4 Refused, briefly, with reasons

- **AI-personalised copy by traffic source.** An assertion machine that also
  breaks the claims ledger (§1.2), because a page that says different things to
  different people cannot be audited for drift.
- **An AI-augmented eligibility check.** `0010` feature 4 is *arithmetic over a
  published policy*, and that is precisely why it is honest — it is auditable and
  it always gives the same answer. A model over the same rules is strictly worse:
  same output, unauditable.
- **An AI "which agency is right for you" comparator.** A machine that generates
  competitor comparisons, unsupervised, in a category where two of three
  references manufacture their proof. No.
- **AI-generated imagery, anywhere.** Foxy runs `freepik__` stock and `0010`'s
  single most uncopyable asset is *real faces with permission*. Generating images
  spends the one advantage that is expensive to fake.

### 2.5 The reframe I would actually hand T

**The right place for AI on the marketing site is the repository, not the page.**

T is a working software engineer building a site under a discipline — every
feature made of something already true, no affordance without a machine behind
it, nothing drifted out of true. That discipline has a build-time shape: copy
variants against the flyer's actual sentences, alt text, contrast and
accessibility passes, the mobile-overflow class of bug that amputated Foxy's
booking UI at 375px, and the claims-ledger check from §1.2 run as a review step
before every deploy.

None of it is visible to a visitor. All of it makes the visible thing better.
That is the honest answer to *"AI in the website itself"*: **yes, in the build;
essentially no, in the page.**

---

## Surface 3 — the login, and the word that names two objects

This is where I disagree with `0010`, and I want to be precise about the shape of
the disagreement, because the Architect was right about something and then
applied it to the wrong object.

### 3.1 What `0010` said, and the evidence it said it from

The *not yet* tier: **"Creator portal, login, account — zero of three references
have a working one and the only one that exists is an unstyled platform default
nobody linked. Far horizon at the earliest."** And in the refusals: *"Not a
product. No portal, no login, no dashboard, no account."*

The evidence is `0006` and it is accurate. Foxy 404s on `/login`, `/portal`,
`/dashboard`, `/client`. AT is a SPA whose catch-all makes those paths *look*
like they resolve, and they do not. Eros has six live Webflow Memberships routes,
all titled **"Copy of Template,"** unstyled, unlinked, switched on and never
touched.

But look at what that evidence is evidence *of*. Every one of those is a **login
on a marketing site with nobody behind the door.** Eros's is the purest case: it
came free with a template, it promises an account to a stranger, and there is no
account. That is an assertion machine with a password field on it, and it should
be refused forever.

**A client portal is not that object.** It shares a word with it. The people
behind the door signed an agreement. There is no claim being made to a stranger,
because a stranger cannot get in.

### 3.2 The move: apply `0010`'s own test to the right object

Take the Architect's test at face value and run it on a portal holding a signed
creator's own agreement, her verification status, her weekly numbers, and her
takedown log.

*Does it claim something the visitor cannot see?* No — every item is a thing that
already exists, that she is a party to, and that she would otherwise have to ask
for by text.

*Does it need a business behind it to be true?* It needs exactly one thing: that
those four items exist. And they do, the day she signs.

**It is a disclosure instrument with an audience of one.** It is `0010`'s own
central move, pointed through the door. The page discloses Starvu to a stranger;
the portal discloses Starvu's performance to the person paying for it. Same
species. Same generator. *Built out of something already true, so the no-stub
rule cannot be violated by construction.*

`0010` sorted the portal by looking at the category. It should have sorted it by
running its own test. I think that is the exploration's central find, and it is
the answer to T's instinct: **his instinct is right, and `0010`'s reasoning
does not actually contradict it once the two objects are separated.**

### 3.3 The resolution that satisfies both

There is a version that keeps every word of `0010`'s refusal true and still
gives T the portal.

> **The portal is real, and the public site never links to it.**

No `/login` in the nav. No account affordance offered to a stranger. The portal
lives at a URL a creator is *given* when she signs, or behind a magic link sent
to the address on her agreement. A visitor to the marketing page encounters no
promise of an account, because there is no promise being made to her.

That satisfies `0010`'s no-stub rule exactly — the refused thing is the *offer*
of an account to someone who cannot have one — while letting the thing behind the
door be real. Eros's failure was not having a login. It was **linking one from a
sitemap with nothing behind it.**

**One consequence to name honestly rather than smuggle.** `0010`'s refusal list
says *"Not a product."* Under this reading that refusal needs amending: **the
page is not a product; the business may grow one behind a door.** I am not
overturning the Architect's refusal — refusals are load-bearing and this one
protects the page. I am marking it as a live tension for The Chancellor, because
the two artifacts now say different things and silence between them would be
worse than the disagreement.

### 3.4 What would earn it, concretely, and how early

The wrong trigger is *the business is older*. That is not falsifiable and not
actionable. Here is a trigger that is:

> **The login is earned the week a recurring deliverable becomes annoying to
> send by hand.**

Unpack that. Everything in §3.5 can be delivered as a WhatsApp message with an
attachment. With one creator, WhatsApp wins outright — it is faster, she is
already there, and a portal is a worse WhatsApp. The economics flip on two axes
at once: **more than one recipient**, and **a thing that arrives every week
rather than once.**

So the concrete trigger is: **the second signed creator, plus one deliverable
that repeats.** The weekly numbers pack (§1.4) or the takedown log (§1.3) each
qualify on their own. Given that the flyer *already promises weekly meetings*,
the repeating deliverable is not speculative — it is contractual.

**How early is that, plausibly?** If the friend is bundling a few existing
freelance creators into the company now, and the weekly meeting is a promise he
is already keeping, the trigger could land in **month two or three.** That is not
"far horizon at the earliest." It sits comfortably in `0010`'s middle tier —
*real once one cheap thing exists* — and I would move it there, with the trigger
written as an event and not a date, exactly as that tier requires.

### 3.5 What is behind the door, in the order it becomes real

| # | Item | Real when | Species | Cost |
|---|---|---|---|---|
| 1 | **Her signed agreement**, the version she signed, dated | the day she signs | disclosure | afternoon |
| 2 | **Her verification status** — verified ✓, when, by which vendor; both partners if a couple | the day she onboards | disclosure | afternoon (on §1.7) |
| 3 | **Her 90-day trial clock** — started, ends, and the clause that lets her walk | the day she signs | disclosure | an hour |
| 4 | **Her weekly numbers pack** | week one of management | disclosure | weekend (§1.4) |
| 5 | **Her takedown log** — found, filed, removed, when | once §1.3 runs | disclosure | on top of §1.3 |
| 6 | **Her content calendar and approvals** | once scheduling is operated | mechanism | weekend |
| 7 | **Who is on her account** — which chatters, which assessment they passed, what boundaries are on file | once §1.11 and §4.5 exist | disclosure, and the strongest one | weekend |
| 8 | Chat transcripts or summaries | later, and cautiously | hazardous | — |

Items 1, 2 and 3 are worth pausing on. **They are already true on day one of a
signed relationship, and they cost an afternoon.** They are also, exactly, what a
creator in this industry is most anxious about: *what did I sign, is my ID
handled properly, and can I actually leave?* Those are the flyer's three most
distinctive promises, and the portal is where they stop being promises and become
receipts.

Item 7 is the sleeper. Nobody in this industry tells a creator who is in her
messages. A portal that names them is disclosure of a kind the category has never
attempted.

### 3.6 What the portal costs, and where the cost actually is

If T is a working engineer, the build is a weekend: auth, a row-level-security
policy, a storage bucket with signed URLs, six read-only views. That is not the
cost.

**The cost is that the portal is the first thing in this business that can
leak** — and see §4.2, because in this industry a leak is not a data-protection
incident, it is a safety incident. A marketing page that 500s is embarrassing. A
portal that discloses a stage name against a legal name is the worst thing this
business could do to the people who trusted it.

Which produces a design rule rather than a warning:

> **Build the portal so that a total breach discloses as little as possible.**

No legal names in it (the verification vendor holds identity; the portal stores
`verified: true` and a date). No identity documents in it, ever. Earnings
displayed from a store she can already see rather than warehoused. Magic-link
auth so there is no password to reuse. Signed, expiring URLs on every file. Short
retention on anything she does not need.

Under those constraints the weekend build is defensible. Without them it is not,
and the honest thing to say is that **the constraint is the design** — the same
way `0010`'s no-stub rule turned out to be a generator rather than a budget.

---

## The hazards that genuinely bite

Six, named where they bite, with what they change rather than a lecture.

### 4.1 Identity documents — the one hard rule

The flyer promises government photo ID and platform verification, per partner for
couples. Something already collects those. **Nothing T builds should ever store
them.**

The build: a verification vendor holds the document and returns a pass/fail plus
a timestamp; Starvu's systems store only the result. That is a weekend cheaper
than doing it properly in-house and roughly infinitely safer.

**The operational half matters as much as the technical half:** IDs must not
arrive over WhatsApp either. A photograph of a driver's licence sent to the
friend's phone lives in that phone's cloud backup indefinitely, outside anything
T builds, past any retention policy, and it is the highest-value target in the
business. If the current process is "text me a photo of your ID," changing that
is worth more than any tool in this document.

**And it converts directly into a disclosure asset** — the best one I found:
*"We use ⟨vendor⟩. Starvu never holds your ID."* No site in the reference set
mentions verification at all. That sentence answers a fear the category does not
acknowledge exists.

### 4.2 Doxxing — the threat model this business actually has

Ordinary web apps threat-model against fraud and spam. This one threat-models
against **a hostile party trying to link a stage name to a legal identity**,
because the consequence is not financial, it is physical.

That changes concrete decisions: what goes in analytics, what goes in logs, what
third-party scripts touch pages a signed creator visits, whether creator names
appear in URLs, what is in an email subject line, what a support tool retains.
None of it is expensive if decided at the start. All of it is expensive to
retrofit.

It is also the reason `0010`'s creator-photograph unlock deserves a note it did
not get: publishing a real face is *irreversible*, and permission granted in
month two may be regretted in month twelve. Whatever mechanism publishes those
photographs should have an unpublish path that works in an hour, and the
permission should be specific and revocable in writing. The asset is genuinely
the most valuable thing on the page. It is also the only one with a person's
safety attached.

### 4.3 Earnings figures — the calculator refusal, generalised

`0010` refused the earnings calculator on the marketing page. **The same refusal
has to travel through the login**, and it is easier to violate on the other side
because the audience is friendly and a projection feels like a service.

The rule that generalises cleanly: **display, never project.** A tool may show
her what happened. It must not tell her what will happen. The instant a model
writes a forward-looking figure into something she can screenshot, Starvu has
made a written earnings representation to a client — and the flyer already
carries not-typical language, which means somebody at Starvu understood this
exposure before there was a website.

Corollary: **no LLM should be the thing that computes a number.** Let arithmetic
compute; let the model narrate what arithmetic produced. That is also just better
engineering.

### 4.4 Model-provider content policy — the constraint the record did not know about

This one is new to the record and it is structural, so I want it stated plainly
rather than in passing.

**Mainstream commercial model APIs prohibit generating adult sexual content.**
That is a term of service on the *supplier* side, entirely separate from
OnlyFans's rules and from anything in Pennsylvania.

The consequence is a fork that lands on exactly one candidate. Tools that touch
*business* text — call notes, FAQ clustering, DMCA notices, meeting narration,
brand-deal summaries, the clause finder — are ordinary business use and fine.
Tools that generate *the creator's* material — fan DMs (§1.12), promotional
captions with explicit content (§1.9) — are not, on a mainstream provider.

**So the chat-drafting assistant is not an afternoon.** It is an infrastructure
decision: a permissive provider, or self-hosted open weights, with the operating
cost, the evaluation work, and the maintenance that implies. That moves it from
*a weekend* to *a project*, and it moves it in a way that I do not think was
priced. If T builds nothing else from this document, knowing this before starting
1.12 is worth the read.

**The clean consequence, and it is a good one:** the business-facing tools are
unblocked and the creator-content-facing tools are gated. That ordering happens
to be identical to the ordering I would recommend on value grounds anyway. The
constraint and the strategy agree.

### 4.5 "Chatting" — the disclosure nobody in the category makes

Chatting has a specific meaning here: somebody who is not the creator messages
fans in the creator's voice. Every agency in this set sells it. Two of the three
visibly recruit for it. **None of them says a word about it to anybody.**

There are two consent questions and they point in different directions.

**The creator's consent is the one Starvu can act on, and it is an
opportunity.** She should know, in the agreement she signs, who may speak as her,
by what means, with what boundaries, and whether any tool drafts on their behalf.
That belongs in the TMA — a clause naming who may speak as you and what they may
not say. It costs a paragraph. And it converts into the disclosure asset I keep
circling: **"Our agreement names exactly who can speak as you, and what they
cannot say."** That is a sentence no competitor can currently say, about a
practice all of them perform. It is the same move `0010` made with the agreement
itself, applied to the industry's least-discussed practice, and I think it is the
strongest unclaimed position on the record.

**The fan's side is not Starvu's to solve** and I am not going to pretend a
website can. What it does mean is that a tool which *scales* the practice is not
neutral — volume changes the character of a thing even when the practice is
unchanged. That is a reason to keep the human as the sender (§1.12), and it is a
reason a *fully* automated fan-facing bot is a different product that should
require a deliberate decision rather than a config flag.

### 4.6 Platform automation, and who pays for it

Restating §1.12 point 1 because it is the load-bearing version: **the ban lands on
her account.** An agency that gets a creator's account restricted has destroyed
the thing it was hired to grow, and the creator carries the loss. That is not a
compliance calculation. It is the reason to be conservative here even where the
rules are ambiguous — and the rules are ambiguous, which is exactly when "who
pays if I am wrong?" is the right question.

---

## What to build first

Ranked. The ordering rule, stated so it can be argued with: **order by facts
produced per hour of T's time, then by hazard avoided.** This page is made of
facts and it currently has no supply line.

| # | Build | Cost | Why here |
|---|---|---|---|
| 0 | **Choose the verification vendor before any ID touches anything** | hours; a decision, not a build | Not a feature. It is the one thing that is expensive to reverse and free to get right now. If IDs are currently arriving by WhatsApp, this outranks everything. |
| 1 | **Call-notes capture** (§1.1) | afternoon | Highest leverage on the record. Funds `0010`'s real FAQ, funds Starvu's own numbers, and makes the Architect's sharpest falsifier — *what made you book?* — actually operable instead of merely cheap. |
| 2 | **Claims ledger + staleness check** (§1.2) | afternoon | Converts falsifier 8 from a habit into a build step, and is itself the purest disclosure instrument in this document. |
| 3 | **Weekly numbers pack** (§1.4) | weekend | Produces the "own numbers" unlock `0010` names but has no mechanism for, keeps a promise already on the flyer, and creates the portal's first recurring payload. |
| 4 | **Takedown assistant, manual-assist** (§1.3) | weekend (or buy the monitoring) | Turns the one service nobody in the category explains into a service with a log behind it. Largest disclosure upside per hour. Also answers `0009`'s live doubt about whether the named services are delivered. |
| 5 | **The thin portal, unlinked** (§3.3, items 1–3) | weekend | Only after 3 and 4 give it something to hold. Agreement, verification status, trial clock. Never linked from the public page. |
| 6 | **Response-time meter** (§1.5) | afternoon | Cheap, but it needs an exportable channel first, and it is only worth the number once there is a month of it. |
| 7 | **Clause finder** (§2.2) | afternoon, no model in v1 | Gated on the friend publishing the agreement, which is the record's cheapest open question. |
| — | **Chat drafting** (§1.12) | not an afternoon — see §4.4 | Last. Possibly never in the *send* direction. Build the snippet library with no model in it before deciding anything larger. |

Two notes on the ordering.

**Items 1 and 2 cost an afternoon each and change what the page can honestly
say.** Everything below them costs a weekend and changes what the business can
do. That is the whole reason they are first — not because they are exciting, but
because they are the cheapest things on the list that move the artifact `0010`
actually cares about.

**Item 0 is not a build and it is not optional.** It is the only item here where
delay has a cost that compounds.

---

## What this changes in `0010`, said out loud

Four changes and one addition. I am naming them explicitly so the two artifacts
do not disagree in silence.

**1. The *not yet* tier's portal row splits in two.**

- *Public login / account offered to a visitor* — **stays refused, permanently.**
  This is Eros's "Copy of Template" and it is an assertion machine with a password
  field.
- *Client portal for signed creators, unlinked from the public site* — **moves to
  "real once one cheap thing exists."** Trigger: **the second signed creator plus
  one recurring deliverable.** Reason: under `0010`'s own test it is a disclosure
  instrument, not an assertion machine; the Architect sorted it by category
  evidence rather than by the test. Plausibly month two or three, not far horizon.

**2. The refusal *"Not a product. No portal, no login, no dashboard, no
account"* needs amending to *"the page is not a product."*** The business may
grow one behind a door. I am flagging this as a live tension for The Chancellor
rather than editing a refusal that is not mine.

**3. "Any live dashboard or metrics surface" gains its condition.** `0010`
already wrote it — *"If a creator-facing product ever exists. Not on this
page."* Surface 3 is that product. The Architect's own escape clause is the door
I walked through, and the "not on this page" half is untouched: none of it is
public, none of it is a `LIVE` pill over static markup, and every figure in it is
the creator's own.

**4. A new row on the *not yet* tier, for a new reason.** **AI chat of any kind,
refused because it would work** — a live confabulation machine issuing
unreviewed representations about an agreement, a split, and an earnings
expectation. `0010` refused chat as a stub; a working chat satisfies the no-stub
rule as literally written and is worse. The refusal now covers both.

**And one addition to the *real once one cheap thing exists* tier:** a
**content-protection log with real numbers** — notices filed, removals achieved,
median time to removal — blocked on §1.3 running for one month. `0010` listed
content protection as a service named in the present tense; this makes it the only
*evidenced* content protection in the reference set.

---

## What would make this wrong

`0010`'s nine falsifiers are inherited unchanged, including the disclosure bet,
the friend-publishes bet, the photographs bet, the no-stub audit, and the
Architect's falsifier on his own calculator refusal. Five more, aimed at what I
added.

**10. The tooling bet — the sharpest, and the cheapest to run.** Every tool in
surface 1 assumes the friend will change his Tuesday. Test: hand him the
call-notes capture and nothing else. **If it is empty at week two, build nothing
else internal** — and that is not a failure of the idea, it is a finding worth
more than the rest of this document, because it says the operation runs in his
head and tooling is the wrong intervention.

**11. The portal bet.** If signed creators log in once and never return within
thirty days, the portal is a worse WhatsApp and the trigger in §3.4 was wrong.
Measure second visits. The correct revision is not a better portal; it is
**delivery over WhatsApp with the portal as an archive nobody has to visit.**

**12. The takedown bet.** If the first month of content-protection work produces
zero true positives, then either the tool is wrong or the service is not being
performed — and the second is `0009`'s live doubt about assumption 3, landing on
the one service the category leaves unclaimed. Either answer is worth the
weekend.

**13. The clause-finder bet, which fails usefully.** If nobody uses it, that cost
an afternoon and the log is still worth reading. But **if visitors repeatedly ask
things the agreement does not answer, the finding is about the agreement, not the
feature.** This is the only item here whose failure mode produces more value than
its success.

**14. The surface-2 bet.** I claim there is essentially no honest visitor-facing
AI besides retrieval over published text. The disconfirming observation: if
creators come off calls saying they wanted to ask something at 2am and had
nobody, then the conversational need is real and the answer is still not a
confabulating widget — it is **WhatsApp with §1.6's honest triage in front of
it**, which discloses the wait instead of inventing an answer. I would rather
name that revision now than defend the refusal later.

Classification: **`horizon: falsifiable`**, carried forward honestly. Items 10
through 14 each name an observation a one-person business can actually make, and
three of them cost a fortnight of ordinary operating.

---

## What this will not become

`0010`'s refusals stand, with the one amendment in §5.2 marked as a tension
rather than resolved. Mine, added:

- **No tool that sends as a creator without a human in the loop.** Drafts, never
  sends. The line is not reachable by a config flag.
- **No system of T's that stores an identity document.** Ever, anywhere, in any
  surface. Vendor-held, pass/fail, timestamp.
- **No model that computes a number.** Arithmetic computes; the model may narrate
  what arithmetic produced. And nothing projects forward, on either side of the
  login.
- **No public affordance offering an account to a stranger.** The portal is given
  to people who signed, at a URL nobody advertises.
- **Not an AI product.** This is a talent-management business with tooling in it.
  The tools exist to produce facts and save the friend's afternoons; the day one
  of them becomes the thing being sold, this is a different company and the whole
  record is aimed at the wrong target.

---

## Where this exploration stops

I have taken none of the three live decisions — register, gating, and the mark
remain The Chancellor's, and nothing above touches them. I have sequenced
nothing; the ranked list in §5 is a ranking, not a Trajectory, and `chart` and
`phase` are The Surveyor's. I have not resolved the portal question, only argued
that `0010` decided it against the wrong object and moved it into a tier where it
carries a trigger rather than a date. I have not verified what any platform's
terms of service currently say, and §4.4 and §4.6 both describe constraints that
someone should confirm against the current documents before a line of the
relevant code is written — **`research` is the honest next verb for that pair,
and it is the only genuinely checkable unknown I opened.**

What I claim to have done: **the three surfaces are separated and answered
unevenly, which is the honest shape of the answer** — internal tooling is
unbound by the honesty test and is where the value is; visitor-facing AI is
refused with one narrow, defensible exception whose signature is that it survives
the AI being removed; and the login is earned much earlier than `0010` said, for
a reason `0010` supplied and did not apply. Fifteen internal candidates are
developed with costs, dependencies and species. Six hazards are named where they
bite, one of them — the model-provider content constraint — new to the record and
large enough to re-price the tool everyone reaches for first. Five falsifiers are
added, and the cheapest of them is two weeks long: give the man a notebook and
see whether he writes in it.
