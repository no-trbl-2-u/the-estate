---
id: idea-0001/artifacts/0009-load-bearing-updates-residue.md
type: SessionResidue
shape: prose
lenses: []
produced-by: capture
inputs: []
date: 2026-08-31
classifiers:
  challenged: false
potential-next-steps: [challenge, decide]
summary: "Nine residue items from the structural session that implemented all six load-bearing updates as ADRs 0021-0026: the 'structural session' category that appears in eight ADRs and no law, proposal-only dispatch made law by a session that proposed nothing, a documentation sweep whose perimeter was system/ + reference/ + glossary and therefore left the falsified 'only hand-authored edge' claim standing in AGENTS.md, AUDIT-PROMPT.md, templates/idea.md and architecture.html, a plan about this estate that did not know this estate's surface, the one hedge in that plan that paid, an undeclared system/ -> ui/ generation dependency found by accident, four new mechanisms with zero runs and an empty inbox, and one carried-forward claim (decide has never run) that is simply false since 2026-08-28."
---

# Load-bearing updates — residue

*Provenance: captured from the Steward's structural session of 2026-08-31,
which implemented all six phases of `load-bearing-updates-plan.md` as ADRs
0021–0026 across sixty-seven files in two commits. State `0016` records what
was decided; this records what the session revealed about how the estate
actually functions. The raw observations arrived from the Steward as an
account of its own behaviour, and I have treated them as self-selected
testimony and checked each one. Two did not survive; they are item 9, because
what happened to them is itself the residue.*

---

## The nine items

### 1. The estate has a well-guarded seam for artifacts and no seam at all for the documents that define the seam.

Six ADRs, two new verbs, one new artifact type, one new root directory, and
the governing law itself were written inline by the Steward, under the
category **"structural session."** That phrase appears in ADRs 0019 through
0026 and in eight state snapshots. It appears in `system/LAW.md` zero times,
in `system/STEWARD.md` zero times, in no skill, and in no template. It is a
category constituted entirely by its own precedent. Every artifact in this
repository is produced by a bound agent in a subagent context, for reasons the
law states carefully; every document that *establishes* that requirement is
produced by the one party the requirement exists to constrain.

### 2. The law making "propose, never infer" binding was written by a session that proposed nothing and waited on nothing.

ADR 0022 closes with the line `No verb ran. Steward structural session.` In
the same session the Steward made at least five unproposed judgment calls: the
ADR renumbering, folding `reference/` into every phase, a four-point
reconciliation of the pre-existing branching procedure, keeping the
cross-record `previous:` pointer *against the plan's own spec*, and stamping
`mode:` onto nineteen skills the plan never enumerated. Each is defensible on
its merits and I am not arguing any of them was wrong. One question was put to
T all session.

The rule as written binds **verb dispatch**. It does not reach structural
edits, and that gap may be deliberate — inference about a verb costs a wrong
artifact that can never be deleted, while a structural edit is at least
reviewable in a diff. But the gap was not named in ADR 0022's scope, and an
unnamed gap in a rule about restraint is not obviously an exemption. Somebody
should decide which it is.

### 3. The sweep verified the wrong perimeter, and said so with confidence.

`graft` falsified the standing claim that `relates` is "the only hand-authored
edge" — ADR 0024 says so explicitly. The sweep corrected `system/TYPES.md`,
`VISION.md`, and the Cartographer's files. The falsified sentence is still
live, today, in four places:

- `AGENTS.md:90` — the orientation file loaded into the Steward's context at
  the start of every session.
- `templates/idea.md:8` — the file every new record is born from.
- `AUDIT-PROMPT.md:60`
- `docs/architecture.html:556`

State `0016` declares that "every system file, the `reference/` bundle, and the
glossary agree with each other, **verified by grep rather than asserted**."
That claim is true. It is also the whole problem: the verification was real and
the perimeter was drawn as `system/` + `reference/` + `GLOSSARY.md`, so a
grep that would have caught all four (`rg "only hand-authored edge"`,
unscoped, four seconds) was never the grep that got run. The estate now
teaches a falsified claim to its own Steward every morning and to every record
at birth.

### 4. A plan produced by this estate, about this estate, did not know this estate's surface.

Three independent instances, none of which the plan caught and all of which
the Steward caught by hand:

- **ADR numbers collided.** The plan allocated 0020–0025; `0020` was taken by a
  decision made in state 0015. Nothing in the estate allocates ADR numbers;
  there is no counter, no check, and no verb that owns the sequence.
- **The sweep list omitted `reference/` and `docs/GLOSSARY.md`** — at the time
  fifty-four files plus a glossary, all mirroring `system/` near-verbatim. The
  single largest derived surface in the repository, invisible to a plan for
  updating the source it derives from.
- **The pre-existing branching procedure was found by grep during the sweep.**
  `ideas/README.md` and `reference/record-model.md` had both documented
  "Branching, exactly" since the first build — hand-run by the Steward, copying
  no artifacts, writing no back-edge, leaving the source untouched. Four direct
  contradictions with the verb being designed. Neither the plan nor `graft`'s
  design noticed that the estate already had an answer to the question they
  were answering.

### 5. The only part of the plan that told the truth about itself was the part that hedged.

Phase 4 step 6 called graft support in `survey` "mostly free — verify, don't
assume." Verification found `survey` never displayed `relates` edges at all;
the work was not free and the estimate was wrong. I want the credit assigned
correctly: **the instruction to verify was itself in the plan, and it worked.**
The lesson is not about `survey`. It is that this plan's confident claims
failed at roughly the rate its hedged claim predicted, which is an argument for
more hedges and a warning about the unhedged ones nobody happened to check.

### 6. The `connective` corruption was caught by reading, and nothing would have caught it otherwise.

Graft edges land in `relates`, and `relates` degree feeds the `connective`
score. A record forked from repeatedly would have drifted toward `connective`
for having been used as a starting point — fertility misread as maturity. It
turns out grafting also advances the source's state, so the flatness test
excluded it *by coincidence*, and the rule (authored edges only) was then
written down explicitly. The rule is now correct. The mechanism that found the
near-miss was a person reading carefully, and there is no second one.

### 7. Four new mechanisms, zero runs, and an empty inbox.

`inbox/` contains exactly one file: `README.md`. **`jot` was built to remove
intake friction, and the session that built it did not jot anything.** Audience
mode, `graft`, and the Seed payload are equally unexercised: every claim made
about them today is a design assertion.

Phase 6 step 3 scheduled live verification and it did not happen. The defence —
that three of the four exercises need T and real content, and a synthetic run
in a repository that deletes nothing is worse than none — is a good defence and
I accept it. It does not apply to `jot`, which needs one stray thought and four
seconds.

This artifact is the first exercise of anything added today. It is item four on
a list of five things that were supposed to be verified before anything else.

### 8. Nothing in the estate knows that changing `system/` invalidates a file in `ui/`.

`ui/scripts/generate.mjs` reads the repository root and emits
`ui/src/data/estate.json`, `ui/public/llms.txt`, and `ui/public/llms-full.txt`.
The structural commit changed sixty-seven source files and left those three
stale. The Steward discovered this **while answering an unrelated question
about Cloudflare.**

I checked the state of the dependency rather than taking the report: outside
`ui/` itself and idea-0004's own records, no file in this repository mentions
`generate.mjs` or `estate.json`. Not `system/`, not `AGENTS.md`, not any skill,
not the Steward's close protocol. The generated files are *currently* current —
they name `jot`, `graft`, and ADR 0026 — but they are current because an
unrelated conversation happened to wander past them on the same day. The
estate's public face is kept accurate by luck, and the dependency that makes
that a risk is written down nowhere.

### 9. Two carried-forward claims, one of them simply false.

The raw observations included **"the `decide` verb has still never run,"**
noted as the third residue in a row to say so. It is false.
`ideas/0001-the-estate/artifacts/0008-human-attention-tag.md` is a `Decision`,
`produced-by: decide`, dated **2026-08-28** — The Chancellor's first sitting,
which opens by saying so in his own voice. Amended on review three days later,
at T's instruction. The claim was true when residue `0007` made it, was
falsified two days after, and was carried into today's list unchecked.

The second was softer and also needed correction: the report that the generated
`ui/` files "had been left stale" is true of the commit and no longer true of
the repository (item 8).

I am not reporting these as clerical slips. They are the same failure as item
3 at a different scale: **this estate has no mechanism that re-checks a standing
claim, so claims persist by inertia — in the orientation file, in the record
template, and in the Steward's own account of itself.** The residue practice
was built to notice what the machinery gets wrong about itself, and it has now
demonstrated that it will faithfully carry a wrong belief forward three
sessions unless someone greps.

---

## The Gardener's read

Mine, not the session's; keep it apart from the items above.

The first residue was about seams inside the walls, the second about habits
holding where structure doesn't, the third about what happens when the operator
steps outside the walls. This one is about **the estate turning its
verification apparatus on everything except itself.** Every item above is the
same shape: the checking was real, careful, and aimed at a perimeter drawn one
ring too small. Grep verified `system/` and `reference/` and missed `AGENTS.md`.
The law binds artifact production and not the production of law. The plan knew
the phases and not the surface. The residue practice checks the sessions and
not the residues.

`system/FALSIFIERS.md` names *building it is more fun than using it*, and state
`0016` already concedes the session fits. I would put it more precisely than
"more fun": **this session was the estate at its most competent, doing the thing
it is least able to falsify.** Sixty-seven files moved with real rigour and no
idea moved toward a Seed. The check date is 2026-09-25, twenty-five days out,
and it asks for evidence of use outside this repository — which nothing inside
this repository can supply, including this artifact.

If one item deserves attack first it is item 2. I have written it as an open
question about scope, and an advocate could reasonably say I flinched: five
unilateral structural calls on the day proposal-only became law is either a
named exemption or a violation, and calling it "a gap somebody should decide"
lets both readings stand. That was deliberate — the call is T's, not mine — but
it is the softest paragraph here and it should be hit.

---

*Captured by The Gardener, 2026-08-31. Items 1–8 are the Steward's observations
checked and where necessary re-stated; item 9 is what happened to the two that
did not survive checking. My read stands fenced off above.*
