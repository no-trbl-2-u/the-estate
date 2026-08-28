---
id: idea-0003/artifacts/0014-phase-2-ship-v1-instrumented.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0012-trajectory.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [decide, challenge, seed]
summary: "Delivers the live page — the twelve day-one features minus whatever Phase 1 struck out, the careers tab brought under the no-stub rule, and fifteen minutes of instrumentation that is the denominator for everything the record will later claim to know — and it starts when the v1 design returns from flight, which for most of its content is already. Two publication answers from Phase 1 gate features 1 and 2 and nothing else gates anything. Cost: weeks, and it is the only Phase on the route measured in weeks. Done looks like a page where every affordance has a machine behind it, the per-channel tags emit, and 'How did you hear about Starvu?' is asked of creators on a form that no applicant ever sees. Decisions 1, 2 and 3 all bite here and nowhere else on the route; the careers tab lands here as a second funnel that must share the disclosure furniture and must not share the instrumentation, because a shared attribution field puts two populations into the one field Checkpoint C reads."
---

# Phase 2 — Ship v1, instrumented

The page goes live in this Phase. It is the only Phase whose cost is weeks
rather than afternoons, and it is the Phase where the most valuable single item
is the easiest to cut.

---

## What this Phase delivers

**The twelve day-one features from `0010`**, minus whatever Phase 1 struck out —
each one built out of something already true, so the no-stub rule cannot be
violated by construction. I do not restate them; `0010`'s inventory is the
specification and it stands.

Plus two things `0010` did not have.

### 1. Fifteen minutes that are not a feature

**Per-channel link tags** (feature 11) and **"How did you hear about Starvu?"**
(feature 10). They are not features. They are **the denominator.**

Without them, Checkpoint C at Phase 7 has nothing to read, the warm-versus-cold
branch never settles, and the record carries an unsettled fork into months four
to six — which is precisely the failure `0009` §4 diagnosed as *unfalsifiable by
construction*. Under launch pressure this is the first thing that gets cut,
because it is invisible and because it serves nobody who is looking at the page.

**Do not ship v1 without it.** It is the strongest single instruction on this
route and the decomposition did not soften it. If the page ships and this did
not, Phases 4 through 7 are being run blind and the honest thing is to say so on
the record rather than to read the numbers anyway.

### 2. The careers tab, brought under the rule

**Arriving from T, 2026-08-27, not through `capture`:** the site now has a
careers tab where people can sign up to work for the company. It is a fact about
the near horizon, and this Phase is where it becomes governed.

The Horizon is built around **one visitor with one job** — a creator arrives and
books fifteen minutes. A careers tab puts a second person, with a different job,
on the same instrument. The decomposition's answer is a seam, not a wall.

**What the two funnels may share.** All of the disclosure furniture, and they
should: the identity block, Starvu LLC and the jurisdiction, the registration,
the named human, the compliance surface, the non-affiliation line. An applicant
evaluating an employer wants the same three things a creator wants — that the
entity is real, that a person is answerable, and that the terms exist. The
verifiability ground is **audience-neutral**, and that is a genuine economy: the
careers tab costs almost nothing because the expensive part of the page already
serves it.

**What the two funnels must not share, and this is load-bearing:**

| Must not share | Why |
|---|---|
| **The "How did you hear about Starvu?" field** | Checkpoint C reads that field to settle warm versus cold **for creators**. Applicants answering into the same field put a second population into the one instrument the record has. It is not a contaminated signal that can be cleaned later — it is a signal that cannot be un-mixed. If the careers surface asks the question at all, it asks it into a **separate store**. |
| **The link tags' namespace** | Same reason, one layer down. A job post shared in a chatter community and a creator DM must not increment the same counter. One prefix per funnel, decided now, costs nothing. |
| **The booking calendar** | The creator call is fifteen minutes with the friend against true scarcity — *few slots because there are few* — and it is the page's terminal action. An applicant consuming one of those slots is consuming the scarce thing. Foxy's answer is the cheap correct one: **a second Calendly event type, one link per role, role pre-filled** (`0006`), and no ATS at all. |
| **The eligibility standard** | 18+, government photo ID, platform verification, per-partner for couples is Starvu's **creator admission policy**. It is not a hiring policy and must not read as one. |
| **The split table and any earnings language** | Those describe what a creator keeps. Reused on a careers surface they describe compensation, which is a different claim with a different exposure. |

**The gate on shipping it.** Question 6 of Phase 1: *who reads that inbox, and
within what window?* If there is a named reader and a stated window, the tab
ships and the window goes on the page — *we reply to applications within X days*
— which is the same disclosure move the whole page makes, pointed at a second
audience, and nobody in the reference set makes it. If there is no reader, the
tab does not ship in its current form. **The replacement is one line and one
link:** *we hire through referrals — write to ⟨channel⟩.* That is honest, it
costs nothing, and it does not promise a machine that does not exist.

**Applicant data is worker data.** Three rules, and they cost nothing at build
time and are expensive to retrofit, which is `0011` §4.2's whole point:

- **No identity document, ever, at any stage of application.** `0011` §4.1's rule
  generalises without amendment. Right to work is verified at hire, by whoever
  handles payroll, not by a form on a marketing site.
- **The doxxing threat model extends to applicants.** A person applying to a
  chatter role in this industry has discretion needs of their own. No names in
  URLs, no names in email subject lines, no third-party analytics on the
  submission path.
- **Short retention on applications that go nowhere.** Decided now, in a line,
  not discovered at month twelve.

---

## What starts it

**The v1 design returning from flight.** For most of this Phase's content that
has already happened — the design prompt has gone to T and is in progress. This
is the Phase T is already standing in.

## What it is waiting on

**Phase 1's questions 1 and 2, for features 1 and 2 only.** Nothing else on this
Phase waits on anything. The page can be built while the friend is thinking.

And **question 6, for the careers tab specifically** — a smaller gate on a
smaller surface, but the same kind.

## Cost

**Weeks.** The only multi-week Phase on the route.

The careers tab's marginal cost inside that is **an afternoon**, because the
expensive furniture is already being built for the creator funnel and the
funnel-separation rules above are decisions rather than work.

## Done looks like

- The page is live.
- **Every interactive affordance on it has a machine behind it.** Walk it once
  with `0009` §6 in hand: a form that goes somewhere a human reads, a calendar
  with real availability, no chat input, no portal link, no account offered to a
  stranger.
- The link tags emit and the attribution field is required, and **the applicant
  path writes to neither.**
- **N exists and predates this moment.**
- The careers tab either states a response window or does not exist.

### One free thing to do while building, which is not a build

Keep a plain list of every factual claim the page makes, as the page is written
— the claim, its source, who can verify it. **Do not build anything to read it.**
The reader is Phase 3's claims ledger. Writing the list while the claims are
being authored costs zero minutes; reconstructing it in Phase 3 from a finished
page is an afternoon of archaeology, and archaeology is where claims get missed.
This is the decomposition's cheapest find and it is available only during this
Phase.

The careers tab contributes a row to that list on day one: **"we are hiring for
⟨roles⟩"** is a claim like any other, verified by *the roles are open and the
inbox is read*, and it goes stale the day the last role is filled.

---

## Where the standing decisions bite

**All three, and only here on the whole route.**

- **Decision 1 (which feeling leads)** and **decision 3 (inherit the mark or a
  new register)** are content-neutral by the Architect's ruling, which holds.
  **One consequence the record had not named:** if the flyer's register wins, the
  `$15K–$30K` band probably rides the hero, which makes the earnings-not-typical
  disclaimer *mandatory* rather than optional — and that puts a **permanent row
  in the claims ledger** to be carried and re-verified for six months. A visual
  decision acquiring a maintenance obligation. It is small. It is also the sort
  of thing discovered at Checkpoint E by an audit rather than at Phase 2 by
  choosing.
- **Decision 2 (gate the calendar or leave it bare)** bites here on what gets
  built, and again at Checkpoint C on what can be read. The route-grounds
  argument I offered in the Trajectory stands and I do not take the decision: **a
  gate lengthens the fuse on Checkpoint C**, because fewer bookings per visitor
  means twenty bookings take longer, and it biases the answers toward people
  willing to clear a gate — a different population from the one the branch is
  about. If the decision goes *gated*, feature 4 is the gate. If *bare*, the same
  component sits after the booking and loses nothing.

**The portal tension does not bite here.** Nothing in this Phase links to,
mentions, or prepares an account.

---

## What this Phase is not

- **Not the place to start growing the page.** Everything on `0010`'s middle tier
  has a trigger and none of the triggers have fired. Photographs, own numbers,
  the real FAQ, the split — all Phase 5.
- **Not a second product.** The careers tab is a tab. It is not a careers *site*,
  it does not get a blog, and it does not get a chatter assessment yet — the
  assessment is a real object (`0011` §1.11, and AT's robots-disallowed
  `/chatting-test` is the category's evidence for it) but it is Phase 5's
  conditional, gated on there being applicants to assess.
- **Not shippable without the fifteen minutes.** Stated twice on purpose.
