---
name: seed-check
description: Before a pivot, a scope change, or any step the plan did not name — check the change against the Seed's refusals and Horizon in spec.md. Read-only; reports, never blocks.
---

# seed-check

Run this before doing anything the build plan did not already say to do:
a dependency the plan did not name, a feature a critique asked for, a
"while I'm in here." It costs one read and it is the only thing standing
between the loop and a slow drift into a different project.

## Do

1. Read `spec.md` — the **Refusals** and the **Horizon** sections.
2. State the proposed change in one sentence.
3. Answer three questions, each with a yes or no and one line of reasoning:
   - **Does this break a refusal?** Quote the refusal. If yes, stop: a
     refusal is a wall the Seed built on purpose, with its argument beside
     it. Do not make the change; record it as a finding for `/oversight`
     and, if the wall genuinely seems wrong now, run `re-seed`.
   - **Does this move toward the Horizon?** Say which part. If it moves
     sideways — neither toward nor against — it is scope, and scope goes to
     the plan's audit queue, not into the current phase.
   - **Does it change the falsifier's odds?** If the Horizon's "what would
     make this wrong" becomes more or less likely because of this change,
     say so; that is information the operator wants.
4. Report the three answers in the commit body or the phase's notes.

## Do not

- Do not soften a refusal by reinterpreting it. If it reads as a wall, it
  is a wall.
- Do not skip this because the change is small. Small is how drift arrives.
