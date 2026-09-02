// Authored content for the How It Works walkthrough.
// This is the one view NOT derived from estate.json: it teaches the system on
// a worked example ("Tidewatch", a mobile roguelike) that is not a record in
// ideas/. Every verb name, voice, signature, run mode, file path, contract
// field and command below is real per system/, the registry, and ADRs 0029–30.

export type Run = 'inline' | 'fresh-eyes' | 'quarantine' | 'clerical'

export interface ChatTurn {
  who: 'T' | 'S' | 'V' | 'sys'
  /** V turns carry the voice name in `as` */
  as?: string
  text: string
}

export interface VerbDemo {
  verb: string
  voice: string
  mark: string // seal initials
  family: string
  sig: string
  run: Run
  boundary?: string // if invoking crosses a boundary, what waits for T's word
  produces: string | null // artifact type for the glyph, null for transitions/edges
  script: ChatTurn[]
  result: string // what lands in the record, one line
  note: string // the law/insight this verb teaches
}

export const RUN_LABEL: Record<Run, string> = {
  inline: 'inline — performed in this session, in the voice',
  'fresh-eyes': 'fresh-eyes — dispatched: this session’s context is a liability',
  quarantine: 'quarantine — dispatched: the inputs stay out of this window',
  clerical: 'clerical — a Steward duty, not a bound verb',
}

export const VERBS: VerbDemo[] = [
  {
    verb: 'jot',
    voice: 'The Steward',
    mark: 'St',
    family: 'Clerical duty',
    sig: 'Text → Slip',
    run: 'clerical',
    produces: null,
    script: [
      { who: 'T', text: 'jot: crabs should get bolder when the beam is off them' },
      { who: 'S', text: 'Slipped to inbox/, verbatim. No record, no artifact, no questions — the ceremony is deferred until you want it.' },
    ],
    result: 'inbox/ gains a slip — pre-record, pre-artifact, stamped when processed',
    note: 'The moment a slip is read for something, that is a verb. Until then it just waits, word for word.',
  },
  {
    verb: 'capture',
    voice: 'The Gardener',
    mark: 'Ga',
    family: 'Transformer',
    sig: 'Text → Spark',
    run: 'inline',
    boundary: 'creating a new record waits for T’s word',
    produces: 'Spark',
    script: [
      { who: 'T', text: 'new idea — a mobile game where the tide IS the enemy. you defend a shrinking rock, one thumb, short runs.' },
      { who: 'V', as: 'The Gardener', text: 'That’s a capture. Writing it down exactly as it arrived — contradictions, lowercase, all of it. Shall I open the record?' },
      { who: 'T', text: 'yes' },
    ],
    result: 'ideas/0005-tidewatch/ opens · artifacts/0001-spark.md, verbatim',
    note: 'No scoring, no cleanup, no premature judgment. Origin is preserved forever, unedited.',
  },
  {
    verb: 'frame',
    voice: 'The Gardener',
    mark: 'Ga',
    family: 'Transformer',
    sig: 'Spark → Framing',
    run: 'inline',
    produces: 'Framing',
    script: [
      { who: 'T', text: 'help me pin down what tidewatch actually is' },
      { who: 'V', as: 'The Gardener', text: 'That’s a frame. Separating the problem from the one solution you woke up with, the goal from the mechanism — and marking which constraints are only assumptions.' },
    ],
    result: '0002-framing.md · problem / goal / mechanism / assumptions, each its own thing',
    note: 'Problem ≠ solution. Goal ≠ mechanism. A constraint may only be an assumption — and gets labelled as one.',
  },
  {
    verb: 'envision',
    voice: 'The Architect',
    mark: 'Ar',
    family: 'Transformer',
    sig: 'Framing → Horizon',
    run: 'inline',
    produces: 'Horizon',
    script: [
      { who: 'T', text: 'what does this look like in six months, working?' },
      { who: 'V', as: 'The Architect', text: 'That’s an envision. Not a spec — a destination: live on both stores, ~40 lantern relics, 3–6 minute sessions. And the falsifier: if median sessions land under 90 seconds, the shrinking rock reads as frustrating, not tense.' },
    ],
    result: '0003-horizon.md · classifier: horizon: falsifiable',
    note: 'The Horizon is what most ideas never get — the thing month-three decisions can aim at.',
  },
  {
    verb: 'chart',
    voice: 'The Surveyor',
    mark: 'Su',
    family: 'Transformer',
    sig: 'Horizon → Trajectory',
    run: 'inline',
    produces: 'Trajectory',
    script: [
      { who: 'T', text: 'how would we even get there?' },
      { who: 'V', as: 'The Surveyor', text: 'That’s a chart. The rough path — thin on implementation on purpose. It ends at something you could start Monday: grey-box the rock and the beam, no art, and time how long it stays fun.' },
    ],
    result: '0004-trajectory.md · classifier: trajectory: actionable',
    note: 'A Trajectory must terminate in something startable, or it types as abstract — and says so on the tin.',
  },
  {
    verb: 'phase',
    voice: 'The Surveyor',
    mark: 'Su',
    family: 'Decomposer',
    sig: 'Trajectory → [Phase]',
    run: 'inline',
    produces: 'Phase',
    script: [
      { who: 'T', text: 'break the road into steps a loop could tick' },
      { who: 'V', as: 'The Surveyor', text: 'That’s a phase. Six of them, each with a done-condition and a cost. The garden goes first — make the loop able to run before any feature exists. The App Store step gets tagged [HUMAN ATTENTION]: credentials are yours, the rest is agent-performable.' },
    ],
    result: '0005-phases.md · six Phases, garden first, human steps tagged',
    note: 'Every phase carries proof of done. The tag is a claim that the rest of the step needs no human.',
  },
  {
    verb: 'explore',
    voice: 'The Forager',
    mark: 'Fo',
    family: 'Refiner',
    sig: 'a → a',
    run: 'inline',
    produces: 'Framing',
    script: [
      { who: 'T', text: 'wander the framing — what else could the tide-pressure be?' },
      { who: 'V', as: 'The Forager', text: 'That’s an explore. Variants without a winner: fog instead of water, a heat mechanic, the rock that grows back… I write a new version of the Framing — never an edit — and the tip of the chain moves.' },
    ],
    result: '0006-framing.md supersedes 0002 · the version chain grows, nothing is lost',
    note: 'Refiners never edit. Handoffs always mean the tip; every prior version stays reachable.',
  },
  {
    verb: 'distill',
    voice: 'The Distiller',
    mark: 'Di',
    family: 'Refiner',
    sig: 'a → a',
    run: 'inline',
    produces: 'Horizon',
    script: [
      { who: 'T', text: 'the horizon has gotten baggy. compress it.' },
      { who: 'V', as: 'The Distiller', text: 'That’s a distill. Finding what survives compression: one sentence, the governing tension, the load-bearing three features. Ornament falls away; action stays optional.' },
    ],
    result: 'a sharper Horizon at the tip of its chain',
    note: 'Compression without false certainty — the point is what survives, not what gets decided.',
  },
  {
    verb: 'challenge',
    voice: 'The Advocate',
    mark: 'Ad',
    family: 'Refiner',
    sig: 'a → a',
    run: 'fresh-eyes',
    boundary: 'a dispatch waits for T’s word',
    produces: 'Horizon',
    script: [
      { who: 'T', text: 'find holes in the horizon' },
      { who: 'S', text: 'That calls for a challenge from The Advocate — this session shaped the Horizon, so self-review bias lives in my context. It goes to fresh eyes. Dispatch?' },
      { who: 'T', text: 'go' },
      { who: 'sys', text: 'handback packet · 2 verdicts · falsifier holds · sets challenged: true' },
    ],
    result: 'an attacked Horizon at the tip · classifier: challenged: true',
    note: 'A clean context attacks what the incumbent session cannot see. That is why it is never run inline.',
  },
  {
    verb: 'research',
    voice: 'The Factor',
    mark: 'Fa',
    family: 'Transformer',
    sig: 'Question → Findings',
    run: 'quarantine',
    boundary: 'a dispatch waits for T’s word',
    produces: 'Findings',
    script: [
      { who: 'T', text: 'what’s actually out there for one-thumb roguelikes on mobile?' },
      { who: 'S', text: 'That’s a research — The Factor works quarantined, so the web bulk and untrusted content never enter this window. Dispatch?' },
      { who: 'T', text: 'go' },
      { who: 'sys', text: 'handback packet · Findings with sources, credibility marks, stale_after: 2027-03' },
    ],
    result: '0007-findings.md · speaks OKF — the one type that rots on a date',
    note: 'External knowledge has a shelf life the other types don’t. Findings carry theirs on the tin.',
  },
  {
    verb: 'compare',
    voice: 'The Assayer',
    mark: 'As',
    family: 'Aggregator',
    sig: '[a] → Appraisal',
    run: 'inline',
    produces: 'Appraisal',
    script: [
      { who: 'T', text: 'weigh Godot against Unity for this' },
      { who: 'V', as: 'The Assayer', text: 'That’s a compare, against stated criteria: build size, one-thumb input latency, store friction, your appetite for C#. Weighed, not chosen — the choosing is the Chancellor’s.' },
    ],
    result: '0008-appraisal.md · two options weighed against named criteria',
    note: 'Dispatched fresh-eyes instead when this session shaped the options being weighed.',
  },
  {
    verb: 'review',
    voice: 'The Assayer',
    mark: 'As',
    family: 'Transformer',
    sig: 'a → Appraisal',
    run: 'inline',
    produces: 'Appraisal',
    script: [
      { who: 'T', text: 'is the trajectory any good?' },
      { who: 'V', as: 'The Assayer', text: 'That’s a review — on its own terms: does it terminate in something startable, does each leg earn its place, is the thin-ness deliberate or lazy?' },
    ],
    result: 'an Appraisal of one artifact, on its own terms',
    note: 'Like compare: fresh-eyes when the session being asked also wrote the thing being judged.',
  },
  {
    verb: 'decide',
    voice: 'The Chancellor',
    mark: 'Ch',
    family: 'Transformer',
    sig: '→ Decision',
    run: 'inline',
    produces: 'Decision',
    script: [
      { who: 'T', text: 'lock the engine: Godot' },
      { who: 'V', as: 'The Chancellor', text: 'That’s a decide. Recording what won, what was rejected, and why — sealed. The loop downstream will read this as a standing decision, not a suggestion to re-litigate.' },
    ],
    result: '0009-decision.md · decided, rejected, and the why — sealed',
    note: 'An explicit recorded choice is the only kind the system acts on. Suggestions are never assignments.',
  },
  {
    verb: 'relate',
    voice: 'The Cartographer',
    mark: 'Ca',
    family: 'Edge author',
    sig: 'Idea ↔ Idea',
    run: 'inline',
    produces: null,
    script: [
      { who: 'T', text: 'tidewatch rhymes with the old storm-glass idea somehow' },
      { who: 'V', as: 'The Cartographer', text: 'That’s a relate — the one hand-authored edge, because it came out of a head and no machinery could have drawn it. Recorded on both records.' },
    ],
    result: 'relates: idea-0002 ↔ idea-0005 · queryable from either side',
    note: 'Everything else about the graph is derived from inputs/outputs chains. This edge alone is authored.',
  },
  {
    verb: 'survey',
    voice: 'The Cartographer',
    mark: 'Ca',
    family: 'Reader',
    sig: 'portfolio → SURVEY.md',
    run: 'quarantine',
    boundary: 'a dispatch waits for T’s word',
    produces: null,
    script: [
      { who: 'T', text: 'what deserves my attention next?' },
      { who: 'S', text: 'That’s a survey — the whole-portfolio read stays out of this window. The Cartographer walks the grounds and writes the sitemap. Dispatch?' },
      { who: 'T', text: 'go' },
      { who: 'sys', text: 'ideas/SURVEY.md · ranked by reachability × appetite · 1 convergent notice: idea-0002 may be the missing piece of idea-0005' },
    ],
    result: 'a ranked shortlist with reasons — and the notices worth more than the ranking',
    note: 'The score optimizes for noticing, not finishing — raw ideas are never buried under nearly-done ones.',
  },
  {
    verb: 'incubate',
    voice: 'The Keeper',
    mark: 'Ke',
    family: 'Transition',
    sig: 'status, not content',
    run: 'inline',
    produces: null,
    script: [
      { who: 'T', text: 'park tidewatch until I have a real device to test on' },
      { who: 'V', as: 'The Keeper', text: 'That’s an incubate. Asleep with a wake condition — "a test device arrives" — so the sleep is deliberate, not drift. It will surface again when the condition is met or you call for it.' },
    ],
    result: 'status: incubating · wake condition recorded',
    note: 'No action is a valid state. Parking with a named wake condition is the opposite of losing the idea.',
  },
  {
    verb: 'retire',
    voice: 'The Keeper',
    mark: 'Ke',
    family: 'Transition',
    sig: 'status, not content',
    run: 'inline',
    produces: null,
    script: [
      { who: 'T', text: 'the endless-runner variant is dead. close it.' },
      { who: 'V', as: 'The Keeper', text: 'That’s a retire — a terminal state with a reason, preserved whole. Nothing is deleted; a retired record can still be grafted from, related to, or revived from any snapshot.' },
    ],
    result: 'status: retired · the record survives complete',
    note: 'Preservation, never deletion. Dead ideas keep their value as graft stock and connective tissue.',
  },
  {
    verb: 'graft',
    voice: 'The Gardener',
    mark: 'Ga',
    family: 'Transformer',
    sig: '(Idea @ state-N, Direction) → Idea',
    run: 'inline',
    boundary: 'creating a new record waits for T’s word',
    produces: 'Spark',
    script: [
      { who: 'T', text: 'branch tidewatch from before the meta layer — what if two keepers, co-op?' },
      { who: 'V', as: 'The Gardener', text: 'That’s a graft, from state/0002. The new record inherits that snapshot’s tips — not today’s — and carries your words as its Direction, verbatim. The original is untouched. Open idea-0006?' },
      { who: 'T', text: 'yes' },
    ],
    result: 'ideas/0006-tidewatch-crewed/ · Direction verbatim · relates edges written both ways',
    note: 'Branching is starting a new chain from an older snapshot. A graft without a Direction is just a copy.',
  },
  {
    verb: 'seed',
    voice: 'The Sower',
    mark: 'So',
    family: 'Aggregator',
    sig: 'Horizon + Trajectory (+ Phases) → Seed',
    run: 'inline',
    boundary: 'an export leaves the estate — waits for T’s word',
    produces: 'Seed',
    script: [
      { who: 'T', text: 'ship it out' },
      { who: 'V', as: 'The Sower', text: 'That’s a seed, under contract: build-plan. One question first, since this is buildable software: include the Nexus worker loop?' },
      { who: 'T', text: 'yes — target: nexus' },
      { who: 'sys', text: 'exports/0005-tidewatch-seed.md + 0005-tidewatch-payload/ · sealed by state/0003' },
    ],
    result: 'Horizon + Trajectory + first step + refusal + provenance — and a droppable payload',
    note: 'A Seed leaves clean. One line travels backward: the provenance stamp, the return address for field reports.',
  },
]

// ---------- chapter 1: the journey beats ----------

export interface JourneyBeat {
  verb: string
  voice: string
  type: string
  title: string
  lede: string
  law: string
  docPath: string
  /** excerpt rendered in the artifact card */
  excerpt: { kind: 'quote' | 'rows' | 'mono'; body: string | [string, string][] }
  classifiers?: string[]
  seal?: string
}

export const JOURNEY: JourneyBeat[] = [
  {
    verb: 'capture',
    voice: 'The Gardener',
    type: 'Spark',
    title: 'It starts as noise.',
    lede:
      'A thought arrives at 2am — lowercase, half-contradictory, no plan attached. The Gardener writes it down exactly as it arrived. The record now exists, and the original force of the thought will survive everything that happens next.',
    law: 'Origin is verbatim, never edited. The system does not demand that an idea already be coherent.',
    docPath: 'ideas/0005-tidewatch/artifacts/0001-spark.md',
    excerpt: {
      kind: 'quote',
      body: '"can’t stop thinking about a mobile game where the tide IS the enemy — you’re stuck defending a shrinking rock and the water just… doesn’t stop. one thumb, short runs, something you’d play waiting for a bus."',
    },
  },
  {
    verb: 'frame',
    voice: 'The Gardener',
    type: 'Framing',
    title: 'Then it gets named apart.',
    lede:
      'Most ideas die tangled: the problem fused to one solution, the goal fused to one mechanism. Framing separates them — and marks which "constraints" are really just assumptions. Nothing is decided yet. The idea is simply made addressable.',
    law: 'Problem ≠ solution. Goal ≠ mechanism. A constraint may only be an assumption — and it gets labelled as one.',
    docPath: 'ideas/0005-tidewatch/artifacts/0002-framing.md',
    excerpt: {
      kind: 'rows',
      body: [
        ['PROBLEM', 'Mobile bullet-heavens reskin the same static arena; none use an ever-encroaching environmental threat as the core pressure.'],
        ['GOAL', 'A 3–6 minute run that gets more claustrophobic every second — not just more crowded.'],
        ['MECHANISM', 'Shrinking playable rock + rotating lighthouse-beam auto-attack + crab swarms timed to a tide clock.'],
        ['ASSUMPTION', 'One-thumb control is enough depth if the shrinking arena does the pressure — flagged, not asserted.'],
      ],
    },
    seal: 'THE STEWARD SEALS state/0001 — A DELTA, NEVER A COPY',
  },
  {
    verb: 'envision',
    voice: 'The Architect',
    type: 'Horizon',
    title: 'Six months out, working.',
    lede:
      'This is the part most ideas never get: not a spec, a destination. What Tidewatch looks like when it is working — so every local decision in month three has something to aim at. And it names its falsifier: the one observation that would prove the premise wrong.',
    law: 'Grade, never gate. A Horizon that names its falsifier and one that doesn’t are different types, not good and bad — the label travels with the export.',
    docPath: 'ideas/0005-tidewatch/artifacts/0003-horizon.md',
    excerpt: {
      kind: 'quote',
      body: 'Six months out, Tidewatch is a polished one-thumb roguelike live on iOS and Android: ~40 unlockable lantern relics, a fortify-the-lighthouse layer between runs, a weekly seeded storm-tide challenge. No pay-to-win — cosmetics and one non-power continue are the entire monetization surface.\n\nWhat would make this wrong: median session under 90 seconds — the shrinking rock reading as frustrating, not tense.',
    },
    classifiers: ['horizon: falsifiable', 'challenged: true'],
  },
  {
    verb: 'chart',
    voice: 'The Surveyor',
    type: 'Trajectory',
    title: 'A rough path, on purpose.',
    lede:
      'The Surveyor stakes the route from here to the Horizon — deliberately thin on implementation. Detail this early is a liability; what matters is that the path terminates in something startable on Monday. Prove the loop is fun before a single sprite exists.',
    law: 'A Trajectory must terminate in something actionable, or it types as abstract — and says so on the tin.',
    docPath: 'ideas/0005-tidewatch/artifacts/0004-trajectory.md',
    excerpt: {
      kind: 'mono',
      body: '1 · grey-box the loop — no art. is the shrinking rock fun?\n2 · juice — beam sway, hit-stop, tide-surge shake\n3 · meta layer — salvage → fortify the lighthouse\n4 · content — relics, crab variants, storm seeds\n5 · soft launch — TestFlight + session telemetry',
    },
    classifiers: ['trajectory: actionable'],
  },
  {
    verb: 'phase',
    voice: 'The Surveyor',
    type: 'Phase',
    title: 'The path becomes provable units.',
    lede:
      'Each waypoint decomposes into a phase with a done-condition and a cost — the shape a worker loop can tick through without asking questions. Steps only a human can perform get tagged now. And Phase 1 is always the garden: make the loop able to run, before any feature exists.',
    law: 'Every phase carries proof of done. [HUMAN ATTENTION] claims the rest of the step is agent-performable.',
    docPath: 'ideas/0005-tidewatch/artifacts/0005-phases.md',
    excerpt: {
      kind: 'mono',
      body: 'P1 · the garden — done: one loop tick on nothing        ~1 day\nP2 · core loop — done: grey-box fun at 3 min            ~1 wk\nP3 · feel — done: a stranger replays unprompted          ~1 wk\nP4 · meta layer — done: the retention loop closes        ~1 wk\nP5 · content — relics, variants, storm seeds             ~2 wk\nP6 · soft launch  [HUMAN ATTENTION] Apple account        ~1 wk',
    },
    seal: 'THE STEWARD SEALS state/0002',
  },
  {
    verb: 'seed',
    voice: 'The Sower',
    type: 'Seed',
    title: 'Everything that leaves, in one file.',
    lede:
      'The Sower assembles the terminal export from five ingredients — Horizon, Trajectory, a first actionable step, at least one named refusal, the provenance stamp — and nothing else. Because Tidewatch is buildable software, the Sower asks exactly one question: include the Nexus worker loop?',
    law: 'A Seed leaves clean. One line travels backward — the provenance stamp — and it is the return address for any future field report.',
    docPath: 'exports/0005-tidewatch-seed.md',
    excerpt: {
      kind: 'mono',
      body: 'type: Seed\norigin: "idea-0005 @ state/0003"\ncontract: build-plan\ntarget: nexus\npayload: 0005-tidewatch-payload/\n\nRefusal: no battle pass, no energy timer, no mechanic\nthat monetizes patience over skill.\n\nFirst step: grey-box the rock and the beam; time how\nlong it stays fun with zero art.',
    },
    classifiers: ['horizon: falsifiable', 'trajectory: actionable', 'payload: present'],
    seal: 'SEALED BY state/0003 — THE STATE WHOSE outputs: NAMES IT',
  },
]

// ---------- chapter 5: nexus ----------

export type TermLine = { kind: 'cmd' | 'out' | 'ok' | 'warn'; text: string }

export const TERM_SCRIPT: TermLine[] = [
  { kind: 'cmd', text: 'mkdir tidewatch && cd tidewatch && git init' },
  { kind: 'out', text: 'Initialized empty Git repository in ~/dev/tidewatch/.git/' },
  { kind: 'cmd', text: 'cp -r ~/estate/exports/0005-tidewatch-payload/* .' },
  { kind: 'cmd', text: 'npx --yes github:no-trbl-2-u/idea-Nexus#v0.2-estate adopt --commit' },
  { kind: 'out', text: 'adopt · kit v0.2-estate → copying around 6 existing files' },
  { kind: 'ok', text: '  kept: 6 (payload files, never overwritten)' },
  { kind: 'ok', text: '  copied: skills, commands, scripts, plan templates' },
  { kind: 'ok', text: '  resolved: 6 placeholders from nexus.adopt.json' },
  { kind: 'warn', text: '  [needs-user-call] ×2 → plan/AUDIT.md  (hosting URL, repo slug)' },
  { kind: 'ok', text: '  committed: "chore: adopt idea-Nexus v0.2-estate"' },
  { kind: 'out', text: 'The loop is on. Next: paste the onboarding prompt.' },
]

export const ONBOARD: ChatTurn[] = [
  { who: 'T', text: '“TL;DR — I have a Seed payload.”  (the one-paragraph prompt from the kit’s README, pasted at the repo root)' },
  { who: 'V', as: 'the agent, at the repo root', text: 'Reading spec.md and plan/bearings.md… the stack is locked, the refusals are standing law. Two audit rows to clear: hosting URL and repo slug — those are yours.' },
  { who: 'T', text: 'cloudflare, repo is no-trbl-2-u/tidewatch' },
  { who: 'sys', text: 'plan/AUDIT.md cleared · bearings updated in the same commit · onboarding stops here, as designed' },
]

export const LOOP_PHASES: { label: string; hash: string }[] = [
  { label: 'Phase 1 — The garden · one tick on nothing', hash: 'a41c9f2' },
  { label: 'Phase 2 — Core loop · grey-box fun at 3 min', hash: '7d03b6e' },
  { label: 'Phase 3 — Feel · the juice pass', hash: 'f2c881a' },
  { label: 'Phase 4 — Meta layer · retention closes', hash: '3b9e04d' },
]

export const RETURN_PATH = {
  seedCheck:
    '/seed-check — before any step a phase brief did not name, the loop re-reads spec.md and quotes the refusals back. The Seed’s walls hold without the estate in the room.',
  reSeed:
    '/re-seed — when a phase truly cannot ship without changing a locked decision, the loop files a field report instead of quietly editing. The report travels to the return address:',
  origin: 'origin: idea-0005 @ state/0003',
  closing:
    'Back in the estate, that report is just new input — a capture, a challenge, maybe a re-export whose supersedes: names the old Seed. The circle closes without either system reaching into the other.',
}
