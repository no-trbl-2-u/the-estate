# Build plan — {Project}

origin: idea-NNNN @ state/NNNN

<!-- One section per Phase, rendered from the estate's Phase artifacts.
     Keep the outcome, the done-condition, the dependencies, the cost, and
     every [HUMAN ATTENTION] tag verbatim. Drop the prose argument — it
     lives in the record. Status is the loop's to update. -->

## Phase 0 — The garden

**Status:** pending
**Done when:** the loop completes one tick on nothing — a trivial slice is
shipped, verified, deployed, and reported.
**Waits on:** nothing.

<!-- The garden makes the loop able to run. Nothing here is a feature. -->

- [ ] **Stack.** {Decided in the estate: …} — or —
      **[HUMAN ATTENTION]** choose {the undecided part}; the agent prepares
      the comparison up to the choice.
- [ ] **Environment manifest.** `ENV.md` naming every variable, its purpose,
      and who supplies it. **[HUMAN ATTENTION]** supply the values.
- [ ] **Verify gate.** typecheck → unit → build → e2e wired and green on an
      empty project.
- [ ] **Deploy target.** {Provider} project exists and answers; deploy-check
      can poll it. **[HUMAN ATTENTION]** account, billing, domain.
- [ ] **Seed skills.** `skills/seed-check.md` and `skills/re-seed.md`
      registered; {any Horizon-specific skill} written.
- [ ] **One tick.** `/ship-a-phase` on a trivial slice goes green end to end.

## Phase 1 — {Name}

**Status:** pending
**Done when:** {the Phase's "done looks like", verbatim}
**Waits on:** Phase 0{, …}
**Cost:** {as the Phase states it}

- [ ] {Step}
- [ ] **[HUMAN ATTENTION]** {Step no agent can do; what the agent does up to the line}

## Phase 2 — {Name}

**Status:** pending
**Done when:**
**Waits on:**
**Cost:**

- [ ] …
