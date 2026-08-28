---
id: idea-0003/artifacts/0018-phase-6-the-portal-spur.md
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
summary: "Delivers a client portal holding a signed creator's own agreement, her verification status, her 90-day clock and her weekly numbers — a disclosure instrument with an audience of one — and it starts on the second signed creator plus one deliverable that repeats, which could plausibly be month two or three rather than a far horizon. This Phase is a spur and not trunk: if it never happens, nothing else on the route changes, because the public page never links to it in any branch. Cost: one weekend for the portal and one weekend for the weekly numbers pack that gives the door something to hold, and the numbers pack is in the class Checkpoint A can kill because it asks the friend for records. The Chancellor's 0010-versus-0011 tension lands here and only here, and it must be resolved before the weekend is spent rather than before Phase 5, because the breach-minimising design rules — no legal names, no documents, no warehoused earnings, magic-link auth, expiring URLs — are the design and do not retrofit onto a built portal. Its own checkpoint: if signed creators log in once and never return within thirty days, the portal is a worse WhatsApp and the re-route is delivery over WhatsApp with the portal demoted to an archive nobody has to visit."
---

# Phase 6 — The portal, on a spur

Everything else on this route is trunk. This is not.

**If this Phase never happens, nothing else on the route changes.** The weekly
numbers pack stays a WhatsApp attachment, the takedown log stays a message, and
the page is unaffected because the page never linked to it in any branch. That
property is what makes it safe to defer and safe to delete, and it is why it sits
here rather than earlier despite its trigger possibly firing earlier.

---

## What this Phase delivers

Behind a door nobody advertises, in the order the items become real:

| # | Item | Real when | Cost |
|---|---|---|---|
| 1 | **Her signed agreement**, the version she signed, dated | the day she signs | afternoon |
| 2 | **Her verification status** — verified, when, which vendor; both partners if a couple | the day she onboards | afternoon, on the Phase 4 tracker |
| 3 | **Her 90-day trial clock** — started, ends, and the clause that lets her walk | the day she signs | an hour |
| 4 | **Her weekly numbers pack** | week one of management | weekend |
| 5 | **Her takedown log** — found, filed, removed, when | once Phase 4's tool runs | on top of Phase 4 |

Items 1, 2 and 3 are **already true on day one of a signed relationship and cost
an afternoon between them.** They are also, exactly, what a creator in this
industry is most anxious about: *what did I sign, is my ID handled properly, and
can I actually leave?* Those are the flyer's three most distinctive promises, and
this is where they stop being promises and become receipts.

**Item 4 is a prerequisite as much as a payload.** The weekly numbers pack is
what gives the door something to hold that recurs — and the door is only earned
by something that recurs. It is a weekend, and it is in the class Checkpoint A
can kill, because it asks the friend to assemble numbers on a schedule.

**Item 6 from `0011` §3.5 — who is on her account** — is the strongest disclosure
in the whole set and it is **not in this Phase**, because it depends on a chatter
existing and on the clause naming who may speak as her. **Arriving from T, the
careers tab makes the first half of that dependency plausible much sooner than
the record assumed.** The ordering constraint from Phase 5 governs: the clause
precedes the hire, and the disclosure follows both. When all three exist, this
item is an afternoon and it is worth more than the rest of the door.

---

## The design rules, which are the design

> **Build the portal so that a total breach discloses as little as possible.**

- **No legal names in it.** The verification vendor holds identity; the portal
  stores `verified: true` and a date.
- **No identity documents in it. Ever.**
- **Earnings displayed from a store she can already see**, never warehoused.
- **Magic-link auth**, so there is no password to reuse.
- **Signed, expiring URLs** on every file.
- **Short retention** on anything she does not need.

And the two refusals that travel through the door with everything else:

- **Display, never project.** The moment a model writes *you're on pace for $12k
  next month* into something she can screenshot, Starvu has made a written
  earnings representation to a client. That is `0010`'s calculator refusal
  generalised, and it is *easier* to violate on this side because the audience is
  friendly and the number feels like a courtesy.
- **No model computes a number.** Arithmetic computes; the model may narrate what
  arithmetic produced.

In this industry the threat model is not fraud or spam. It is **a hostile party
trying to link a stage name to a legal identity**, and the consequence is
physical rather than financial. That is why the constraint list above is the
design and not a hardening pass. **None of it is expensive at the start. All of
it is expensive to retrofit.**

---

## What starts it

**The second signed creator, plus one deliverable that repeats.** Not a date.

The economics flip on two axes at once — more than one recipient, and a thing
that arrives every week rather than once. With one creator, WhatsApp wins
outright: it is faster, she is already there, and a portal is a worse WhatsApp.
Given that the flyer already promises weekly meetings, the repeating deliverable
is not speculative; it is contractual. **Plausibly month two or three.**

## What it is waiting on

1. **The Phase 4 verification tracker**, for item 2.
2. **The weekly numbers pack**, for item 4 — itself downstream of Checkpoint A.
3. **The Chancellor**, for whether this Phase exists at all. See below.
4. **The design rules above, decided before the first row is written.**

## Cost

**Two weekends** — one for the numbers pack, one for the portal itself. The build
is auth, a row-level-security policy, a storage bucket with signed URLs, and five
read-only views.

**That is not where the cost is.** The cost is that this is the first thing in
this business that can leak.

## Done looks like

- A signed creator reaches items 1, 2 and 3 without asking anyone for them.
- **No public affordance anywhere offers an account to a stranger.** No `/login`
  in the nav, no account link, no mention. The URL is *given* when she signs, or
  arrives by magic link at the address on her agreement.
- A deliberate exercise: assume total compromise and list what an attacker now
  knows. If a legal name is on that list, the design rules were not followed.

---

## The checkpoint on the spur — the portal bet

*If signed creators log in once and never return within thirty days, the portal
is a worse WhatsApp and the trigger was wrong.*

Measure second visits. **The re-route is not a better portal.** It is delivery
over WhatsApp, with the portal demoted to an archive nobody has to visit — which
is a perfectly respectable object and costs nothing to keep, because everything
in it is already true.

---

## Where a standing decision changes this Phase

**The `0010`-versus-`0011` tension lands here and only here.** `0010` refuses:
*"Not a product. No portal, no login, no dashboard, no account."* `0011` argues
the refusal was applied to the wrong object — that a public login with nobody
behind the door is Eros's *"Copy of Template"* and stays refused forever, while a
client portal for signed creators is a disclosure instrument by `0010`'s own
test — and proposes the resolution both artifacts can live with: **the portal is
real, and the public site never links to it.** `0011` marked this as a live
tension for The Chancellor rather than editing a refusal that was not its own.

**I take no position and the route does not need me to.**

- **If the refusal is upheld whole:** this Phase is deleted. Nothing else on the
  route is touched. The page is unaffected because it never linked here.
- **If it is amended to the page-only form:** this Phase runs as written.

**Timing, and it is the only thing I will insist on:** do not force this decision
early, and do not spend the weekend without it. The breach-minimising rules are
not additions to a built portal — they are the reason the build is a weekend at
all.

---

## What this Phase is not

- **Not linked from the page.** In any branch, in any month.
- **Not a dashboard.** `0010`'s refusal of any *live* metrics surface is intact:
  none of this is public, none of it is a `LIVE` pill over static markup, and
  every figure in it is the creator's own.
- **Not chat transcripts.** `0011` §3.5 item 8 is filed as hazardous and stays
  filed.
- **Not a reason to delay Phase 5.** If the trigger fires during the harvest, the
  harvest does not pause. This is a spur.
