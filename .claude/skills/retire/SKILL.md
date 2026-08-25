---
name: retire
description: Close a record with a terminal state and a reason. Transition; preservation, never deletion. Performed by The Keeper; the Steward normally dispatches this for you.
verb: retire
signature: "Idea → Idea"
agent: keeper
---

# retire — `Idea → Idea`

Set `status: retired` with an explicit reason. The record is preserved whole.

Retirement is not deletion and not the end: reviving is branching from any
recorded state, and the original is never altered — because nothing in this
system is ever altered.

## Agent binding (hard)

Performed by **The Keeper** (`keeper`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
