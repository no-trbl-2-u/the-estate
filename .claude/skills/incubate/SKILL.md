---
name: incubate
description: Park a record deliberately, with a reason and a wake condition. Transition, changes status not content. Performed by The Keeper; the Steward normally dispatches this for you.
verb: incubate
signature: "Idea → Idea"
agent: keeper
---

# incubate — `Idea → Idea`

Decide the parking: **why** it is being parked and **what would wake it** — a
date, a condition, a dependency. An incubated record with no wake condition is
an abandoned one wearing a nicer word.

Return the reason and the wake condition to the Steward, who writes
`status: incubating` in `idea.md` and carries both into the state snapshot —
record frontmatter is state, and state has one writer (`system/LAW.md`).

Nothing is deleted and nothing is lost; the record remains fully retrievable and
resumable at any moment.

## Agent binding (hard)

Performed by **The Keeper** (`keeper`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
