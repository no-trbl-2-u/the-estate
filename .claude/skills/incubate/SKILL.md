---
name: incubate
description: Park a record deliberately, with a reason and a wake condition. Transition, changes status not content. Performed by The Keeper; the Steward normally dispatches this for you.
verb: incubate
signature: "Idea → Idea"
agent: keeper
---

# incubate — `Idea → Idea`

Set `status: incubating`. Record **why** it is being parked and **what would
wake it** — a date, a condition, a dependency. An incubated record with no wake
condition is an abandoned one wearing a nicer word.

Nothing is deleted and nothing is lost; the record remains fully retrievable and
resumable at any moment.

## Agent binding (hard)

Performed by **The Keeper** (`keeper`) and by no one else. If that agent is
unavailable the verb does not run; the Steward reports the gap.
