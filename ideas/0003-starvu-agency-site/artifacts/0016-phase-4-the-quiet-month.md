---
id: idea-0003/artifacts/0016-phase-4-the-quiet-month.md
type: Phase
shape: phases
lenses: []
produced-by: phase
inputs:
  - ideas/0003-starvu-agency-site/artifacts/0012-trajectory.md
date: 2026-08-27
classifiers:
  challenged: false
potential-next-steps: [challenge, seed]
summary: "Delivers two weekend builds — the manual-assist takedown assistant and the onboarding-and-verification tracker — and, more importantly, delivers a month of elapsed operating in which the page does not change at all, and it starts the moment Checkpoint A resolves. The correct amount of visible page progress in this Phase is zero, and that is the single hardest thing about it: a phased plan is exactly where a quiet month gets accidentally filled with page work, and filling it delivers four of the six middle-tier features a month late because the fuses were never left to burn. Cost: two weekends inside a month of nothing. Two checkpoints close it — Checkpoint B, one month of takedown work, which can remove content protection from the services block and therefore shrink the page; and Checkpoint F, arriving from T with the careers tab, which asks whether anyone answered the applications and can shrink the page the same way. Checkpoint A governs whether the tracker gets built at all, because the tracker asks the friend for records and is therefore in the class the tooling bet can kill."
---

# Phase 4 — The quiet month

This is the Phase a naive roadmap gets wrong, and it is the Phase most likely to
be quietly deleted by whoever reads this plan in a hurry.

**The page does not change. That is not stagnation. It is fuse burn.**

Four of the six features on `0010`'s middle tier are waiting on facts that do not
exist yet and cannot be hurried. They need a tool built, and then they need
*time passing with the tool running*. A month filled with page work is a month in
which those four features are delivered a month late, because the fuses were
never given the time.

---

## What this Phase delivers

### The builds — two weekends

**1. The takedown assistant, manual-assist.** The friend pastes a URL where a
creator's content has been reposted. The tool identifies the host and its
designated DMCA agent, drafts a compliant notice with the required statutory
elements, logs it, and reminds him in seven days. Everything is one human click
from sending.

*Gated on Phase 1 question 4.* If content protection is not a service he
performs, this build does not happen and Checkpoint B does not run.

*Build versus buy is live here and I do not take it.* The monitoring half —
scheduled reverse-image and handle search — is a month of work or a subscription
to an existing vendor, and a one-man agency buying one and reselling the log is a
completely respectable answer. **Manual-assist first either way**, because
manual-assist is what produces the log, and the log is the asset.

**2. The onboarding and verification tracker.** Per creator: ID verified and
when, platform verification confirmed, both partners if a couple, TMA sent, TMA
signed and which version, payout details on file, the 90-day clock started and
its end date.

**Build the tracker, never the vault.** It records *that* verification passed and
when. It must never contain a photograph of a driver's licence — the vendor
chosen in Phase 1 holds the document and returns pass/fail plus a timestamp. This
is `0011` §4.1's one hard rule and it is not negotiable at any point on this
route.

*Gated on Checkpoint A*, because this tool asks the friend to keep records, which
puts it squarely in the class the tooling bet can kill.

Its fuse is **one onboarding**. It is a precondition for *creators managed* on
the page (Phase 5) and for portal items 1–3 (Phase 6).

### The elapsed time — one month, and it is the deliverable

Calls happen. Notes accumulate. The meter counts. The ledger holds. Applications
arrive in the careers inbox and somebody answers them.

At the end of the month there are four facts that did not exist at the start:
a median response time, a takedown count, at least one completed onboarding, and
roughly ten calls' worth of real questions. **Those four facts are what Phase 5
publishes.** Nothing else on this route can manufacture them.

---

## What starts it

**Checkpoint A resolving** — the tooling bet, at the end of Phase 3.

If Checkpoint A passed, both builds proceed. If it fired, build 2 does not happen
at all, build 1 does (it watches rather than asks), and the fallback from
Checkpoint A's second half is installed instead of the tracker.

## What it is waiting on

- Build 1: Phase 1's service answer.
- Build 2: Checkpoint A, and the verification vendor chosen in Phase 1.
- The month: nothing. It waits on nobody, which is exactly why it is so easy to
  fill with something.

## Cost

**Two weekends of build inside a month of elapsed time.** The month is the
expensive part and it costs nobody anything, which is the property that makes
people spend it.

## Done looks like

- A month has passed since the meter started.
- The meter has a **median** and it is a real number, not an estimate.
- At least one onboarding has gone through the tracker end to end, or Checkpoint
  A killed the tracker and the record says so.
- The takedown log has a count in it — including, legitimately, zero.
- **The page is byte-for-byte what it was at the end of Phase 2**, except for
  `last verified` dates advancing.

That last line is the test of this Phase. If the page changed, ask what fuse got
shortened to pay for it.

---

## CHECKPOINT B — one month of takedown work. The takedown bet.

*Zero true positives in month one means either the tool is wrong or the service
is not performed.*

**The re-route.** The first answer is a build problem and cheap. The second
answer removes **content protection from the services block on the page** — a
day-one feature governed by *every service the site names is real* — and it is
`0009`'s assumption 3 landing on the record's largest unclaimed opportunity. It
also removes the takedown log from Phase 5's harvest and from portal item 5.

**This checkpoint can shrink the page, and a checkpoint that can only add is not
a checkpoint.** Preserve that. The instinct on the day will be to keep the
services row and try harder at the tool; the honest move is to delete the row and
record why.

---

## CHECKPOINT F — one month of the careers tab. The inbox bet.

**Arriving from T, 2026-08-27, not through `capture`.** The careers tab exists,
which means a fuse is already lit that nobody on this route has been watching.

*If applications arrived in month one and nobody answered them, the tab is an
affordance promising a capability the business does not have.*

That is `0009` §6's rule verbatim, and the failure is worse here than it looks.
The creator funnel's failure mode is a stranger who does not book. **The careers
funnel's failure mode is a person who applied and was ignored** — aimed at
exactly the labour pool Starvu will need if it grows past the friend, in a small
industry where people talk to each other. `0009` §3's asymmetry argument applies
without modification: the exposure is not detection probability, it is blast
radius.

**The re-route, and it can shrink the page.** Either name a reader and publish
the response window, or **take the tab down** and replace it with one line and a
channel: *we hire through referrals — write to ⟨X⟩.* Both are honest. Leaving an
unread form up is the only dishonest option, and it is the default one.

**What this checkpoint also reads, for free.** How many applied, for which roles,
and from where. That is a fact about the business Phase 5 may be able to use, and
it cost nothing to acquire because the tab was already there.

---

## Where a standing decision changes this Phase

**None of the three bite.** The portal tension does not bite either, but it
becomes *worth raising* toward the end of this Phase: Phase 6's trigger can fire
as early as month two or three, and the breach-minimising design rules are not
additions to a built portal. Do not force the decision early. Do have it before
Phase 6's weekend is spent.

---

## What this Phase is not

- **Not a gap to be filled.** No new sections, no redesign, no "while we wait."
  If T has an afternoon spare in this month, the honest uses are: the `research`
  on platform and model-provider terms that runs beside the route, or the
  one-hour unpublish path that Phase 5 requires as a gate — build it now, while
  everything is calm, because by definition you need it on the day nothing is.
- **Not the monitoring half of the takedown tool.** Manual-assist first, always.
- **Not a vault.** Restated because it is the one rule on this route whose
  violation is somebody else's safety.
