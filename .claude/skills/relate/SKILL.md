---
name: relate
description: Draw the one hand-authored edge - this idea relates to that idea. Performed by The Cartographer; the Steward normally dispatches this for you.
verb: relate
signature: "(Idea, Idea) → relates"
agent: cartographer
---

# relate — `(Idea, Idea) → relates`

Record a `relates` edge between two Idea Records. This is the **only
hand-authored edge** in the system — every other lineage relation is derived
from composition chains — and the most valuable, because no skill can produce
it: it comes out of a head.

Record frontmatter is state, and state has one writer (`system/LAW.md`), so
the work splits along the seam:

1. **The Cartographer names the edge and, above all, the why** — the why is
   the payload — and returns both to the Steward. If the connection suggests
   more (a merge, an absorption, a shared Seed), it names that as an open
   question for the operator. Suggest; never act.
2. **The Steward writes it**: each record's id into the other's `relates:`
   list in `idea.md`, and each record's state copied forward carrying the
   Cartographer's why, verbatim.

The Steward closes per protocol on whichever record the session was opened
against; the other record's new snapshot notes the session it came from.

## Agent binding (hard)

Performed by **The Cartographer** (`cartographer`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
