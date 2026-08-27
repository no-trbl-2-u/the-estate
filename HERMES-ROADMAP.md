---
type: Guide
title: "Hermes/Judge Roadmap — SomberSoft Operating Control Plane"
description: "A discussion roadmap for evolving Hermes and its Judge into a persistent, event-driven, durable operating control plane for SomberSoft. All items are proposed or under discussion; none are authorized for implementation."
tags: [hermes, judge, roadmap, control-plane, sombersoft]
generated: { by: claude-code/2026-08-27, at: 2026-08-27T14:40:01Z }
status: discussion
authority: T
---

# Hermes/Judge Roadmap
## SomberSoft Persistent Operating Control Plane

**All items in this document are `proposed` or `discussion`. None are approved
or authorized for implementation. T has authorized documenting the roadmap, not
executing it.**

---

## Purpose

This guide describes the evolution of Hermes and its Judge from a capable
request-driven and clock-driven assistant into something more: a persistent,
event-driven, durable operating control plane for SomberSoft. It is a working
document for a structured conversation between T and the Judge, not a project
plan ready to execute.

The north-star loop:

> **External event → Judge understands consequence → durable queue item → right
> agent or skill or Claude Code process → independent verification → canonical
> repository state updated → reusable lesson captured → T receives a verdict or
> an approval request.**

Every roadmap item is in service of that loop or is enabling work required before
that loop can run reliably.

---

## Baseline Snapshot

**This snapshot describes the state of Hermes at the time of audit. It will age.
Treat it as a starting point for discussion, not a current-state claim.**

*Audited: 2026-08-27T14:40:01Z — active profile: `default` — commands: `hermes status --all`, `hermes tools list`, `hermes profile list`, `hermes webhook list`, `hermes insights --days 30`, `hermes doctor`, `hermes kanban stats`*

| Dimension | State |
|---|---|
| Hermes version | 0.18.2 |
| Config schema | v29 installed; v33 available |
| Sessions (30 days) | 204 |
| Tool calls (30 days) | 10,452 |
| Subagent sessions (30 days) | 107 |
| Cron sessions (30 days) | 90 |
| Active cron jobs | 6 |
| Webhooks | Disabled |
| Kanban | Initialized, empty |
| Context Engine | Disabled |
| Messaging channel | Telegram (active) |
| Anthropic API | Configured (credential health not certified by this roadmap) |
| Runtime local filesystem authority | Broad (sudo disabled; assessed and constrained in item 13) |
| OpenAI Codex OAuth | Configured |
| Other LLM providers | Mostly absent |
| Web search | Working |
| Extraction backend | None configured; clean extraction non-functional |
| Computer-use toolset | Selected; runtime requirements not satisfied |
| Image-generation toolset | Selected; runtime requirements not satisfied |
| `gh` CLI | Working |
| GitHub MCP | Working |
| `GITHUB_TOKEN` in Hermes env | Not present (Hermes reports absence) |

Rolling 30-day numbers (sessions, tool calls, subagent sessions, cron sessions) begin drifting immediately from the snapshot date above.

The gap between where Hermes is and where it needs to go is not a capability gap
in the technology. It is a configuration, integration, and architecture gap. T
already uses Hermes heavily and effectively. What is missing is the
**event-driven, durable, closed-loop** layer that lets the Judge act as an
operating system rather than a command interpreter.

Claude Code remains the preferred deep repo-local implementation worker. The
Judge's role is to decide when to invoke it, brief it correctly, monitor it,
independently verify its work, integrate that work into canonical repository
state, preserve cross-project state, and report to T. Claude is a worker. The
Judge is the control plane.

---

## The Thirteen Items

Items are numbered in discussion order. Each has the same structure:

- **Purpose** — why this item exists in one sentence
- **Description** — what it is, in plain language
- **Why Hermes, not Claude Code alone** — the control-plane argument
- **Proposed loop / behavior**
- **Prerequisites**
- **Authority boundary** — what the Judge may and may not do
- **Proof of success**
- **Risks**
- **Status**

---

### 1. Event-Driven Ingress

**Status: `proposed`**

**Purpose.** Give the Judge ears — authenticated inbound events from GitHub and
later other systems that wake it without T having to ask.

**Description.** Right now the Judge responds to what T sends it. This item adds
the ability for external events — a GitHub push, a new PR, a CI failure, a new
issue, a security alert, a release tag — to arrive at the Judge and be classified
before T sees them. The Judge does not act on them automatically. It classifies
them into one of five dispositions: `ignore`, `report` (Telegram summary),
`queue` (create a Kanban task pending T's review), `execute` (run within a
pre-authorized narrow policy), or `ask` (interrupt T with a question). The
default disposition for any new event class is `report`, not `execute`.

**Why Hermes, not Claude Code alone.** Claude Code can participate in event
automation when another system invokes it, but it is not itself the persistent
listener and cross-project router. A control plane needs to be always-on,
to correlate events across time and projects, and to make routing decisions
before handing work to Claude. Claude Code is the worker at the end of the
route.

**Proposed loop / behavior.**
```
GitHub event → Hermes webhook receiver
  → authenticate (HMAC signature + timestamp, replay window ≤ 5 min)
  → deduplicate (delivery ID or content hash, idempotency store with TTL)
  → classify (event type × project × current state → disposition)
  → if queue: create Kanban task with provenance
  → if report: Telegram summary to T
  → if ask: Telegram question to T, await response
  → if execute: run within pre-authorized narrow policy only
  → if ignore: write audit log, take no further action
```

**Prerequisites.**
- Item 13 (infrastructure hardening) — specifically webhook security and the
  `GITHUB_TOKEN` gap
- GitHub App or webhook secret configured, verified, and approved by T
- No public endpoint without T's explicit approval; if a public endpoint is
  required, T must review and approve the network path
- A durable queue (item 2) is recommended for events that become work but is not
  a blocking prerequisite for ingress itself — ingress can land and classify
  events before the queue exists in full

**Authority boundary.** The Judge may classify and report events without
approval. It may create visible company-level informational or triage Kanban
entries without approval; it may not create an Estate task, session, or artifact
without T's explicit selection and routing through the Steward. It may **not** push code,
merge PRs, close issues, trigger deployments, or take any public or consequential
action on an event without either an explicit pre-authorized policy or an
in-session approval from T.

**Proof of success.** A GitHub push to a monitored repo arrives, the Judge
classifies it within 60 seconds, and T receives a Telegram summary. No false
actions occur. A duplicate delivery is correctly silenced.

**Risks.** A misconfigured webhook can expose a public endpoint or leak repository
content. An overly broad `execute` policy can take consequential action without T's
awareness. Replay attacks on an unauthenticated endpoint can trigger spurious
work. Rate limits on inbound events can create a backlog that looks like silence.

---

### 2. Durable Kanban Work Queue

**Status: `proposed`**

**Purpose.** Make every piece of work visible, traceable, and retryable — so
nothing is silently lost and nothing runs without a record.

**Description.** Events, approved requests, and manually created items all
become Kanban tasks with a standard schema. A task carries: what it is (title,
description), why it exists (provenance — which event or request created it),
which repo and at which SHA, any constraints (budget, time, scope), who owns it,
what acceptance evidence is required, how many retries are permitted, which tasks
it depends on, and its current status. The queue is the durable coordination record; Hermes session memory is not. Completion evidence, decisions, and accepted task records must be committed to canonical repository files or GitHub issues; queue entries link to that durable repository proof. A queue entry is visible coordination — it is not itself the canonical artifact.

**Why Hermes, not Claude Code alone.** Claude Code can read a queue when one is
provided, but queue custody, retries, cross-session provenance, and coordination
among in-flight workers belong outside any one worker session. The queue is the
persistence layer that makes the control plane coherent across time and projects.

**Proposed loop / behavior.**
```
Input (event, request, manual) → validate schema
  → assign task ID
  → write provenance (source, reason, repo, SHA, requester)
  → set status: pending_review or pre-authorized
  → if pre-authorized: route to item 4 (Claude Code command layer)
  → if pending_review: Telegram notification to T with one-tap approve/defer/reject
  → on completion: write acceptance evidence to task record
  → on failure: retry up to limit, then escalate to T
```

A task in the queue is not permission to act. A task labeled `pending_review`
sits until T explicitly approves it. A pre-authorization must be narrowly scoped
and explicitly granted by T in advance.

**Prerequisites.** Hermes Kanban must be confirmed working (it is initialized but currently empty). Item 2 works manually without item 1 (event ingress); automatic event sourcing requires item 1 but is not blocking. Item 3 (Judge routing contract) enables automatic routing decisions but is not required to start a manual queue.

**Authority boundary.** The Judge may create company-level informational and triage queue entries without approval. An Estate task, session, or artifact requires explicit T selection and routing through the Estate Steward — queue visibility is not authorization. The Judge may not execute a task that requires dangerous, public, production, or costly work without explicit approval, regardless of queue status.

**Proof of success.** A manually created task progresses from `pending_review`
to `approved` to `in_progress` to `done`, with provenance and acceptance evidence
recorded at each step. A failed task retries and escalates correctly. No task
disappears silently.

**Risks.** A queue that grows without being drained becomes noise. Poorly scoped
acceptance evidence makes it impossible to determine when a task is actually done.
Task proliferation from a high-volume event source can overwhelm T with
notifications.

---

### 3. The Judge as SomberSoft Control Plane

**Status: `discussion`**

**Purpose.** Give SomberSoft one cross-project front door that understands
company doctrine, current project state, and how to route work to the right
worker.

**Description.** Right now the Judge knows what T tells it in a session. This
item gives it maintained context: which projects exist, what their current states
are, what SomberSoft's doctrine and principles are, and which agents and skills
are available. When an event or request arrives, the Judge decides: which project
is affected, which worker is appropriate (Claude Code with a particular skill,
OpenAI Codex, a Hermes cron, a manual step), what brief that worker needs, and
what verification is required afterward. It detects when it lacks context and asks
rather than guessing.

**Relation to The Estate Steward.** These are two different things operating at
two different scopes. The Estate Steward (this repository's `steward` skill) is
the front door for work *inside* think-tank/The Estate. It governs idea records,
dispatches bound verbs to their agents, and writes state. The Judge is
*company-wide* — it sees all SomberSoft projects, not just The Estate, and it
routes at the level of repos and outcomes rather than idea records and artifact
types. They compose rather than compete: a Telegram capture might arrive at the
Judge, which routes it to The Estate's Steward, which dispatches the `capture`
verb to The Gardener. The Judge does not bypass The Estate's law; it integrates
with it through its front door.

**Process boundary.** The Judge remains outside The Estate repository context.
Every request that would mutate The Estate—including implementation,
integration, artifacts, or state—enters through the Steward. The Steward applies
`system/LAW.md`, chooses the lawful route, dispatches bound verbs where
applicable, and remains the sole writer of Estate state.

**Why Hermes, not Claude Code alone.** A single Claude Code invocation is usually scoped to one repository but can inspect several when briefed to do so. It does not maintain durable cross-project state between sessions, and each invocation closes independently. The control-plane role requires persistent awareness across all SomberSoft repos, durable state between sessions, and routing logic that is not specific to any one project.

**Proposed loop / behavior.**
```
Request or event arrives at Judge
  → identify affected project(s) and current state
  → consult SomberSoft doctrine (maintained reference)
  → choose worker: Claude Code / Codex / skill / cron / manual
  → construct handoff packet (project context, relevant doctrine, task spec, constraints)
  → dispatch to worker
  → monitor for completion
  → independently verify (item 6)
  → report to T
```

**Prerequisites.** Items 1 and 2 enable structured input but are not required to define the routing and classification contract — item 3's minimal contract can be specified before ingress or queue exist. A maintained cross-project state reference that the Judge can read (not just session memory). SomberSoft doctrine captured in a durable form the Judge can access.

**Authority boundary.** The Judge may route and brief workers. It may not make
SomberSoft strategic decisions, approve its own consequential actions, or act as
T's proxy in contexts requiring T's judgment.

**Proof of success.** A new task arrives for a different SomberSoft project. The
Judge correctly identifies the project, chooses the right worker, constructs a
brief that the worker can act on without asking clarifying questions, and reports
the outcome to T with an honest account of what verification was done.

**Risks.** Stale cross-project state causes misrouting. Doctrine drift (the
Judge's reference diverges from T's current thinking) causes systematically
wrong decisions. The Judge may mistake routing confidence for authorization
confidence.

---

### 4. Claude Code Command Layer

**Status: `proposed`**

**Purpose.** Make Claude Code a first-class, supervised worker the Judge can
invoke, brief, monitor, and never blindly trust.

**Description.** When a task requires deep repo work — implementing a feature,
refactoring, writing tests, updating documentation — the Judge invokes Claude
Code. It selects the appropriate model: Sonnet is the default. Opus requires explicit T approval or an established cost/risk policy — the Judge does not unilaterally declare work high-stakes to justify an Opus invocation. It provides a structured brief: what to
do, what not to do, relevant doctrine, repo state, and any constraints. It
monitors for hangs. It inspects the resulting diff rather than trusting the
completion message. It never marks a task done based solely on Claude's
self-report.

Claude is a worker. The Judge is the control plane. That distinction is not
courtesy — it is structural. A worker that reports its own completion without
independent verification is a worker the control plane cannot trust. The
verification court (item 6) handles the checking; this item handles the
invocation and monitoring.

**Isolated worktrees.** When multiple concurrent edits are required — for example,
two tasks touching different files in the same repo — each Claude Code invocation
runs in an isolated git worktree. This prevents silent conflicts and makes the
diff boundary explicit.

**Why Hermes, not Claude Code alone.** A Claude Code invocation should not be
asked to authorize, supervise, and independently verify that same invocation.
The control plane provides the outer loop: brief,
invoke, monitor, inspect, verify, integrate.

**Proposed loop / behavior.**
```
Task approved for execution
  → Judge selects model (Sonnet default; Opus only with T approval or cost/risk policy)
  → Judge creates isolated worktree if concurrent edit risk exists
  → Judge constructs brief: task spec, repo state, relevant doctrine, constraints
  → Judge invokes Claude Code with brief
  → Judge monitors: detects hang (timeout + no progress), detects refusal, detects confusion
  → Claude Code completes: returns diff + completion message
  → Judge inspects diff (does it match the task spec? does it introduce unintended changes?)
  → route to verification court (item 6)
  → on verified pass: merge worktree, update canonical state
  → on verification fail: report to T with diff and verifier findings
```

**Prerequisites.** Items 2 and 3 for task input. A minimal independent verification contract is needed; the full verification court (item 6) is built in Wave 3 but item 4 can proceed with a minimal review stub. A mechanism for Hermes to launch and monitor a Claude Code process.

**Authority boundary.** The Judge may invoke Claude Code for approved tasks. It
may not merge a diff into a main branch without verification. It may not approve
its own output or Claude Code's output. It may not invoke Claude Code for
unapproved tasks, public actions, or consequential decisions.

**Proof of success.** An approved task is briefed, executed by Claude Code,
inspected, verified by a separate context, and integrated — with T receiving an
honest account of what was done, what was checked, and what remains open.

**Risks.** A hanging Claude Code session blocks the queue without an alert.
An overly brief handoff packet produces a Claude session that asks questions or
makes wrong assumptions. A diff inspection that is too shallow misses unintended
changes. Worktree management errors leave stale branches.

---

### 5. Standing Goals and Outcome Custody

**Status: `discussion`**

**Purpose.** Let T assign outcomes — not tasks — and have the Judge retain and
pursue them across multiple events and sessions.

**Description.** T sometimes wants ongoing behavior: keep main green, shepherd
this phase to verified completion, watch this dependency for security advisories.
Today, that requires T to re-state the goal each session. This item gives the
Judge the ability to hold a goal durable, watch for relevant events, take
permitted actions toward it, and report exceptions — without T having to re-brief
it.

Standing goals are not open mandates. Every goal must have: a stated outcome, a
budget (token and/or calendar), explicit bounds on what actions are permitted, a
stop condition, and an expiry. A goal that does not terminate is not a standing
goal — it is unsupervised autonomy.

**Why Hermes, not Claude Code alone.** Claude Code can retain repo instructions
and be invoked by automation, but it does not by itself provide company-wide
goal custody, event correlation, budgets, expiry, and Telegram exception
reporting. Those belong to the persistent control plane.

**Proposed loop / behavior.**
```
T assigns standing goal: {outcome, permitted-actions, budget, bounds, stop-condition, expiry}
  → Judge writes goal to durable store
  → on relevant event or trigger:
    → Judge checks goal: is this event relevant? does it require action? is action within bounds?
    → if within bounds: take permitted action, write audit log, report to T
    → if outside bounds: ask T before acting
    → if stop condition met: close goal, report outcome to T
    → if budget exhausted: halt, report to T
    → if expiry reached: close goal (even if incomplete), report to T
```

**Prerequisites.** Item 2 (durable queue) for goal storage. Item 1 (event
ingress) for trigger waking. Item 3 (Judge as control plane) for determining
whether an event is relevant to a goal.

**Authority boundary.** The Judge may take actions explicitly listed as permitted
in the goal definition. It may not expand the permitted action set without T's
explicit instruction. It may not interpret a goal's silence as permission.

**Proof of success.** T assigns a standing goal. The Judge correctly wakes on
a relevant event, takes a permitted action, and reports it. When the stop
condition is met, the goal closes cleanly. When the budget is exhausted, the
Judge halts and reports rather than continuing.

**Risks.** A vaguely stated goal becomes a blank check. An expiry or budget that
is too generous enables long-running unsupervised behavior. A goal that is never
reviewed accumulates stale permitted-action sets. The most dangerous failure is a
goal that appears bounded but is not.

---

### 6. Independent Verification Court

**Status: `proposed`**

**Purpose.** Ensure that implementation and verification never share the same
context, and that the Judge never treats self-reported completion as evidence.

**Description.** Every significant piece of work requires independent verification. The implementation worker (Claude Code, Codex, or another) does the work in one context. A separate context — a fresh Claude context, a Codex audit, a domain-specific specialist, or a CI run — inspects the result. Independence is context separation, not product identity: the same Claude context is not an independent verifier; a fresh Claude context may be. The Judge
reconciles the findings. A task is not done until the verifier agrees it is done
at the exact same HEAD as the implementation.

The verification court distinguishes between: `evidence` (a CI run, a diff
inspection, a test result — something checkable), `consensus` (multiple verifiers
agree — stronger than one), `unknown` (the verifier could not determine), and
`disagreement` (verifiers conflict). `HOLD` and `unknown` are lawful verdicts.
A task that cannot be verified is not merged — it is escalated to T.

**Typical verification loop for a code change:**
```
Claude Code implements
  → Judge inspects diff (structural: does it match the spec?)
  → Codex (or separate Claude context) audits (semantic: is it correct?)
  → Domain specialist tests (behavioral: does it work?)
  → CI runs on exact HEAD (proof: does it pass?)
  → Judge reconciles: all pass → verified; any fail or unknown → hold
  → Verified: confirm worktree HEAD SHA, then merge to canonical branch
  → Resolve resulting canonical branch SHA (fast-forward preserves SHA;
    merge commit, squash, and rebase do not)
  → Run required verifier and CI gates again on that canonical SHA
  → Record exact-head post-integration evidence; only then declare completion
  → Hold: report to T with the specific failure and the unresolved question
```

**Why Hermes, not Claude Code alone.** The same worker context cannot provide
meaningfully independent verification of its own output. A fresh Claude context
may serve as one verifier; independence comes from context separation and
evidence, not product identity. The control plane provides that outer loop.

**Prerequisites.** Item 3 (Judge as control plane) for reconciliation. CI integration for the proof step. Item 6 can be built and tested with fixture changes before item 4 (Claude Code command layer) is complete; item 4 is not a blocking prerequisite.

**Authority boundary.** The Judge may merge verified work to non-main branches
within a pre-authorized scope. Merging to main, publishing, or deploying always
requires either a pre-authorized narrow policy or explicit T approval.

**Proof of success.** An implementation that contains a deliberate bug is caught
by the verifier before reaching main. A task with a passing CI run but a failing
semantic audit is correctly held. A task with a genuine unknown is escalated to T
rather than resolved arbitrarily.

**Risks.** A verification loop that is too cheap produces false confidence. A
verification loop that is too expensive blocks all throughput. A verifier that
shares context with the implementer is not independent. `CI passes` conflated
with `correct` is the most common failure.

---

### 7. Think Tank Idea Refinery

**Status: `discussion`**

**Purpose.** Connect Hermes inbound channels (Telegram and others) to The Estate
idea pipeline without bypassing The Estate's law.

**Description.** When T sends a message with explicit capture intent — a recognized command or syntax — the Judge routes it into The Estate's Steward for proper processing. A message that looks like an idea is not itself authorization to create a Spark. The Judge either requires explicit syntax or asks T one confirmation question before routing to the Steward and Gardener. Ambiguous Telegram messages are not auto-captured. The Steward dispatches the appropriate bound verb (typically `capture` → The Gardener), the verb runs as the bound agent, state is written, and the session closes with "What would you like to do next with this idea?"

Where applicable — particularly for ideas with a clear opportunity or problem
statement — the Judge may propose the 10-question vision interview. It does not
run it automatically. A suggestion is not an assignment.

**What this is not.** The Judge does not bypass The Estate's law. It does not
perform bound verbs itself. It does not auto-advance an idea through the pipeline
without explicit operator selection at each step. It does not treat a Telegram
message as an implicit instruction to build something.

**Relation to The Estate.** The Estate governs its own law. The Judge integrates
with The Estate by routing to its front door (the Steward), not by substituting
for it. The Steward routes, the bound agents perform verbs, the Steward writes
state. That chain is preserved end-to-end.

**Why Hermes, not Claude Code alone.** Hermes provides the always-on Telegram
listener. Claude Code does not maintain a persistent inbound channel. The Judge
is the bridge between external capture and The Estate's structured pipeline.

**Proposed loop / behavior.**
```
Telegram message arrives
  → Judge classifies: explicit capture, probable idea (ambiguous), task request, question, or other
  → if explicit capture (recognized command or syntax): route to Estate Steward → Gardener performs `capture`
  → if probable idea (ambiguous): ask T one confirmation question — do not auto-route
  → if confirmed: route to Estate Steward → Gardener performs `capture`
  → state written, lineage recorded
  → Judge reports back to T: "Captured as [record ID]. What would you like to do next?"
  → no further action without explicit T instruction
```

**Prerequisites.** Telegram capture can use the existing gateway and does not
depend on item 1. Additional external capture sources may require event ingress.
The Judge-to-Steward integration must be built and verified. The Estate's
repo-local agent and skill layer exists, but this inbound integration does not.

**Authority boundary.** The Judge may route an inbound message to The Estate's
Steward. It may not create idea records, write state, or advance records through
the pipeline on its own. Those actions belong to The Estate's agents.

**Proof of success.** A Telegram message containing a raw idea results in a
properly structured Spark in The Estate, with lineage and provenance recorded,
and T receiving a confirmation with "What would you like to do next?"

**Risks.** An overeager classification treats every message as an idea capture
and floods The Estate with noise. A misrouting creates idea records without T's
intent. The Judge performing a bound verb itself (bypassing the Steward) violates
The Estate's law.

---

### 8. Cross-Project Consequence Detection

**Status: `discussion`**

**Purpose.** Surface when a change in one SomberSoft project has consequences
for another, before those consequences are silent.

**Description.** A change to SomberSoft's game mechanics affects the rulebook.
A change to the knowledge base affects The Estate's Idea Records that reference
it. A new skill in think-tank may overlap with a skill in another project. A
shared doctrine update propagates to every project that references it. The Judge
watches for these cross-project relationships and surfaces proposed consequences
as queue items for T's review — never as silent cross-repo mutations.

This is a read-and-propose capability, not a write-and-execute capability.

**Why Hermes, not Claude Code alone.** Claude Code can inspect several repos when
briefed to do so, but one invocation has no maintained company-wide consequence
map. Detecting consequence reliably requires durable cross-project state owned
by the control plane.

**Proposed loop / behavior.**
```
Change lands in repo A (via event ingress)
  → Judge inspects change: what does it affect?
  → Judge checks cross-project reference map: which other repos reference this?
  → Judge identifies proposed consequences: repo B needs update, Idea Record X needs review
  → Judge creates queue items: "Proposed consequence: [description]" — status pending_review
  → T reviews and approves, defers, or rejects each consequence
  → no cross-repo mutation without approval
```

**Prerequisites.** Item 1 (event ingress). Item 2 (durable queue). A maintained
cross-project reference map — this does not currently exist and must be built
incrementally.

**Authority boundary.** The Judge may read across repos and propose consequences.
It may not write to any repo or create, modify, or close any artifact without T's
approval.

**Proof of success.** A doctrine change in one repo produces a set of proposed
consequences in the queue. T reviews each one. None is applied silently.

**Risks.** An overly sensitive consequence detector produces queue noise that T
stops reviewing. An incomplete reference map produces false confidence that no
cross-project consequences exist. Cross-repo write permission, once granted, is
easily misapplied.

---

### 9. External Intelligence and Observability

**Status: `discussion`**

**Purpose.** Give the Judge monitored awareness of the outside world — not a
digest, but a signal when something changes.

**Description.** The Judge monitors: relevant research and publications, competitor
activity, player and community feedback, security advisories affecting dependencies,
Cloudflare and deployment health, analytics trends, and app store reviews. It does
not emit generic digests. It emits signals when a threshold is crossed or a
change is detected: a new CVE affecting a dependency, a deploy health alert, a
review trend shift. Signal thresholds are defined by T and reviewed periodically.

All access is read-only initially. No integration that writes to an external system is introduced here.

**Company monitoring vs Estate research.** The Judge may monitor external signals on behalf of SomberSoft. When monitoring surfaces information that warrants formal research — producing Estate Findings or changing an Idea Record — that work routes through the Estate Steward to The Factor, The Estate's bound research agent. Company monitoring signals and Estate Findings are distinct artifacts on separate tracks; the Judge does not directly produce Estate Findings.

**Why Hermes, not Claude Code alone.** Claude Code can analyze monitoring data
when invoked, but persistent watchers, threshold state, deduplication, and
Telegram delivery belong to the control plane.

**Proposed loop / behavior.**
```
Scheduled or event-driven check
  → Judge reads external source (web search, API, feed)
  → evaluate against defined threshold or change condition
  → if threshold crossed: Telegram alert to T with source, finding, and recommended action
  → if no threshold crossed: write to audit log, no alert
  → never: generate a generic summary just because it's Tuesday
```

**Prerequisites.** Item 1 (event ingress) for external trigger integration.
Configured extraction backend (currently absent — see item 13). T-defined
thresholds before any monitor is activated.

**Authority boundary.** Read-only. The Judge may not post, reply, subscribe, or
otherwise take action in any external system without explicit T approval.

**Proof of success.** A monitored dependency receives a new CVE. The Judge detects
it, sends a Telegram alert with the CVE ID, the affected dependency, and a
proposed queue item for T's review. No generic summaries appear.

**Risks.** Alert spam causes T to tune out real signals. An external source that
changes frequently causes noise. Write access, if later granted, is misapplied to
external community spaces.

---

### 10. Public Artifact and Release Communication Loop

**Status: `discussion`**

**Purpose.** Connect verified work to public communication — with T's approval
always in the path.

**Description.** After verified work is integrated, the Judge gathers evidence
(diff, CI results, verification record) and drafts public communication artifacts:
devlogs, mechanic breakdowns, case studies, playtest reports, screenshots or clip
descriptions. These drafts are delivered to T for review and approval before
anything is published. T may edit, reject, or approve. The Judge publishes only
after explicit approval.

The phrase "unless a future narrowly scoped policy says otherwise" is here
deliberately: T may, in the future, authorize specific narrow publication actions
(e.g., posting a changelog to a specific location). That policy must be explicit,
narrow, and approved by T. It does not exist today.

**Why Hermes, not Claude Code alone.** Claude Code can draft the artifact. The
control plane gathers evidence across sessions, holds the approval boundary,
and owns channel-specific delivery.

**Proposed loop / behavior.**
```
Verified work integrated
  → Judge gathers evidence: what was done, what was verified, what it means
  → Judge drafts communication artifact: devlog, breakdown, report, etc.
  → Judge delivers draft to T via Telegram or Kanban with "Approve to publish?"
  → T reviews draft
  → if approved: Judge publishes to specified channel
  → if rejected or revised: draft updated, re-submitted
  → if no approval: draft remains in queue indefinitely
```

**Prerequisites.** Item 6 (verification court) — communication follows verified
work. Publishing channel access configured and approved by T.

**Authority boundary.** The Judge may draft communication artifacts without
approval. It may not publish to any public or external channel without explicit
T approval on each artifact or an explicitly granted narrow publication policy.

**Proof of success.** A shipped feature produces a draft devlog in T's queue.
T approves it. The Judge publishes it. No draft is published without T's
explicit approval.

**Risks.** A draft published without approval causes reputational or competitive
harm. A poorly drafted communication artifact reflects badly on SomberSoft even
before publication.

---

### 11. Continuous Learning and Skill Extraction

**Status: `discussion`**

**Purpose.** Turn repeated or difficult work into maintained skills and doctrine,
rather than re-discovering the same knowledge each session.

**Description.** After a difficult task is completed — or when the Judge notices
it has answered the same question or followed the same procedure multiple times —
it proposes a skill extraction: a maintained, structured procedure that can be
reused in future sessions. These proposed extractions go to T for review.
Approved extractions are written as skills into the appropriate repo (think-tank,
or another SomberSoft repo as appropriate).

The Judge also watches for corrections: when T corrects a procedure or an output,
the Judge proposes updating the relevant skill or doctrine record. Stale skills —
those that have not been used or reviewed in a long time, or that conflict with
current practice — are flagged for T's attention.

**What this is not.** This is not session memory. Transient task state is not
saved as a skill. A skill is a maintained, repo-committed procedure for reusable
work, not a cache of what happened in one session.

**Why Hermes, not Claude Code alone.** Claude Code can author skills and retain
repo instructions. Hermes is better placed to notice repeated procedures and
corrections across Claude, Codex, cron, Telegram, and specialist sessions.

**Proposed loop / behavior.**
```
Task completed (or correction received)
  → Judge evaluates: is this a reusable procedure? has this been done before?
  → if extraction warranted: draft skill as proposed artifact
  → create queue item: "Proposed skill extraction: [title]" — pending_review
  → T reviews: approve, revise, or reject
  → if approved: write skill to appropriate repo, commit
  → if correction: propose update to existing skill → same review path
  → periodically: flag skills unused for N sessions as potentially stale
```

**Prerequisites.** Item 3 (Judge as control plane) for cross-session awareness.
Item 2 (durable queue) for the review pathway. Access to the target repo for
writing committed skills.

**Authority boundary.** The Judge may propose extractions and flag staleness. It
may not commit skill files without T's approval.

**Proof of success.** A procedure used three times in different sessions is
proposed as a skill. T reviews and approves it. A later session uses the skill
instead of rediscovering the procedure.

**Risks.** A skill extracted from a one-off situation becomes a misleading
canonical procedure. A stale skill becomes harder to find and remove than the
problem it solves. Over-extraction produces a library no one reads.

---

### 12. Scoped Permission and Integration Expansion

**Status: `discussion`**

**Purpose.** Expand Hermes's capabilities deliberately, with least privilege,
revocability, and an explicit cost-and-alternative disclosure for any paid
service.

**Description.** This item is a permission framework, not a shopping list. Each
integration is independent and justified by a specific approved loop; GitHub
access is not a prerequisite for extraction, nor extraction for observability.
Within any integration, read access comes before write access. Free or cheaper
alternatives are always identified before a paid service is proposed. Every
capability token is tied to a specific loop, not to a general purpose.

**Recommended adoption order (not a prerequisite chain):**

1. **GitHub webhook/App** — scoped read-only webhook to a specific repo,
   then a GitHub App with explicit permissions per repo. No broad repo access.
2. **Extraction backend** — configure one extraction provider (Exa, Tavily,
   Firecrawl, or Parallel). Evaluate free tier first. Cost disclosed before
   approval.
3. **Read-only observability** — Cloudflare read-only API key, analytics
   read-only, app review feeds. No write access to any observability system.
4. **Provider redundancy** — a second LLM provider for fallback or specialized
   tasks. Only after primary is stable and a specific use case justifies it.
5. **Email access** — read-only first; send-on-approval later; only after a
   specific loop requiring email is approved.
6. **Community/social access** — read-only monitoring; no posting without a
   separately approved narrow publication policy.
7. **Deployment/publishing access** — only after items 1–6 are stable and a
   specific verified loop requires it.

**Explicit rejections.** The following are not on the ladder at any height,
without a new explicit T-approved policy:
- Blanket production keys (any environment)
- New blanket elevation, unrestricted remote access, or broad production authority (the runtime's existing local filesystem authority is assessed and constrained in item 13, not granted here)
- Autonomous spending authority
- Public publishing without per-artifact or per-policy approval
- Access to any system not tied to a specific approved loop

**Why Hermes, not Claude Code alone.** Claude Code can use credentials exposed to
its process, but credential scope, approval, rotation, and revocation should be
governed by the persistent control plane rather than any worker.

**Prerequisites.** Each integration requires a named loop, a least-privilege
scope, a revocation path, and T's approval. Integrations do not depend on one
another unless their specific loop creates a real technical dependency.

**Authority boundary.** T approves each integration individually. The Judge
proposes; T decides. No integration is self-authorizing.

**Proof of success.** Each new integration is: scoped to a specific loop, tested
read-only before write, documented with what it accesses and why, and revocable
without disrupting other integrations.

**Risks.** A credential granted for one loop is reused for another. A paid
service accumulates cost without a corresponding reviewed outcome. A broad API
key granted "for convenience" becomes the attack surface.

---

### 13. Hermes Infrastructure Hardening

**Status: `proposed`**

**Purpose.** Close the gap between the current Hermes installation and a baseline
reliable enough to build on.

**Description.** This is enabling work. It does not advance the north-star loop
directly, but without it, everything built on top is fragile. The current state
(v29 config schema while v33 is available, disabled toolsets that report as
enabled, absent extraction backend, missing `GITHUB_TOKEN`) means the foundation
has known gaps. Hardening closes them before new capability is added.

**Proposed actions:**
- **Config migration (v29 → v33):** Back up the current v29 config before any
  migration. Review the v29 → v33 diff and identify any breaking changes or new
  fields requiring T's input. Migrate only after review and explicit T approval.
- **Extraction backend:** Configure one extraction provider (see item 12 ladder).
  Web search works; clean extraction does not. Pick a provider, disclose cost,
  configure with T's approval.
- **Falsely enabled toolsets:** Computer-use and image-generation are selected but
  their runtime requirements are not satisfied. Either satisfy the requirements
  (with T's approval and cost disclosure) or explicitly disable them to prevent
  confusion.
- **Context Engine assessment:** Currently disabled. Evaluate what enabling it
  would provide and cost before proposing to T.
- **Cron health review:** 6 active cron jobs, 90 cron sessions in 30 days. Review
  each: is it still needed? is it within its intended scope? is it producing noise?
- **Webhook security:** No webhook configuration currently. Before item 1 can
  proceed, webhook signature verification, replay defense, and the inbound network
  path must be designed and approved.
- **Backup and rollback verification:** Confirm that a Hermes config backup exists,
  that it can be restored, and that the rollback path is documented.
- **Runtime privilege assessment:** The runtime currently has broad local filesystem authority despite sudo being disabled. Assess the actual privilege surface, document it, and constrain it where practical without breaking approved integrations.
- **Toolchain advisories:** Review any pending Hermes advisories or update notices.
- **Periodic doctor check:** Establish a lightweight monthly (or configurable)
  self-check: schema version, toolset health, cron status, backup age, API key
  validity.
- **`GITHUB_TOKEN` resolution:** Either provide a scoped `GITHUB_TOKEN` to Hermes's
  environment (after T's approval and scope review) or formally document that this
  gap is intentional.

**Why Hermes, not Claude Code alone.** Claude Code can edit configuration when
explicitly invoked, but Hermes runtime health, backups, migrations, and rollback
need control-plane ownership and independent verification.

**Prerequisites.** T's time and explicit approval at each step. A current backup
before any migration.

**Authority boundary.** The Judge proposes each hardening step. T approves each
one individually. No migration or integration change proceeds without approval.

**Proof of success.** After hardening: config is on the latest reviewed/supported schema at execution time (v33 is the dated baseline comparison), the extraction backend returns clean results, falsely enabled toolsets are either working or explicitly disabled, cron jobs are reviewed and intentional, and a doctor check can be run and returns no surprises.

**Risks.** A v29 → v33 migration with breaking changes disrupts existing cron
jobs or integrations. Enabling a toolset with unmet runtime requirements silently
degrades reliability. Skipping hardening and building on top of the current state
produces failures that are harder to diagnose later.

---

## Staged Implementation Sequence

**A big-bang build is not recommended.** The following sequence is proposed, not
approved. It is structured so that each phase produces something useful
independently, and failure in any phase does not compromise completed phases.

### Implementation Waves

| Wave | Focus | Items | Output |
|---|---|---|---|
| **Wave 0** | Audit and hardening | 13 | Stable, known-good Hermes baseline |
| **Wave 1** | Routing contract + manual queue | 3, 2 | Judge has a classification contract; work can be queued and reviewed manually without automated ingress |
| **Wave 2** | Authenticated ingress + Claude Code | 1, 4 | External events land in the durable queue; Claude Code is briefed, monitored, and diff-inspected |
| **Wave 3** | Verification | 6 | Implementation and verification are separate; verdicts are honest |
| **Wave 4** | Think Tank + cross-project | 7, 5, 8, 11 | Telegram ideas enter The Estate via explicit intent; standing goals are possible; cross-project consequences are surfaced |
| **Wave 5** | External intelligence + public artifacts | 9, 10, 12 | Monitored external signals; approved public communication; permission ladder ascended deliberately |

### Incremental Pilot Target

The pilot is the target built incrementally across Waves 1–3, not a prerequisite to run before Wave 0. After Wave 3 is stable, a single, private, end-to-end loop around think-tank validates the full stack:

```
GitHub push to think-tank
  → Judge classifies event (Wave 2: item 1)
  → creates Kanban task (pending_review) (Wave 1: item 2)
  → T approves via Telegram
  → Judge invokes Claude Code with brief (Wave 2: item 4)
  → Separate context verifies diff (Wave 3: item 6)
  → Judge reports result and any open questions to T via Telegram
```

If the push triggers work inside The Estate, that work routes through the Estate Steward before Claude Code is briefed; the Judge does not mutate Estate state directly.

No wave begins until the previous wave is stable and T has explicitly authorized
the next one.

Item 12 is a policy applied whenever any wave needs a new capability; it is shown
in Wave 5 because that is where the broadest external permissions are expected.
The narrow extraction credential needed during Wave 0 is still governed by item
12 and may be approved independently.

---

## Permission Ladder

| Level | Capability | Gating condition |
|---|---|---|
| **Read-only** | Read repos, read events, read external sources (web search) | Default; no additional approval required |
| **Bounded write (internal)** | Create Kanban tasks, write skill files, commit to non-main branches in worktrees | Per-task explicit approval or pre-authorized narrow policy |
| **Bounded write (external)** | Post to Telegram (already active), write to approved repos | Existing Telegram channel; other channels require explicit approval |
| **Approval-gated consequential** | Merge to main, publish publicly, spend budget, trigger deployments | Explicit per-action T approval or an explicitly granted narrow policy |
| **Standing policy** | Narrow autonomous action within defined bounds | T-authored policy with bounds, budget, stop condition, and expiry |

Nothing moves up this ladder without T's explicit authorization. A capability
granted at one level does not imply authorization at the next.

---

## Global Guardrails

These apply to every item in this roadmap, without exception:

1. **T has final authority.** Every proposal, draft, and consequence is for T's
   review. Nothing consequential is done without T's approval or an explicitly
   granted narrow policy.
2. **No invisible task creation.** Every task in the queue is visible to T in
   Telegram or Kanban. Nothing enters the queue silently.
3. **No public action without approval.** Publishing, posting, deploying, or any
   action visible to anyone outside SomberSoft requires explicit T approval or an
   explicitly granted policy.
4. **No production action without approval.** Any action touching a production
   environment requires explicit T approval, regardless of other authorizations.
5. **No costly action without disclosure.** Any action that incurs cost (API spend,
   paid service call, resource provisioning) requires prior cost disclosure and
   approval.
6. **No secret-bearing action without review.** Any action that creates, transmits,
   or uses secrets (API keys, tokens, credentials) is reviewed before execution.
7. **Repository files are canonical.** The Judge's memory, session logs, and
   Kanban state supplement the repository but do not replace it. Committed files
   in the relevant repo are the source of truth for any information that must
   survive a session reset.
8. **Exact-head verification.** Confirm the worktree HEAD SHA before integration begins. After integration, resolve the resulting canonical branch SHA. Fast-forward merge may preserve SHA; merge commit, squash, and rebase do not. Run the required verifier and CI gates on that canonical SHA and record their exact-head evidence. A diff introduced after verification invalidates the verdict. The SHA alone is identity, not proof; completion requires post-integration evidence bound to it.
9. **Honest unknown.** If the Judge cannot determine whether something is correct,
   safe, or within its authority, the answer is `unknown`. Unknown is escalated
   to T, never resolved by assumption.
10. **Event idempotency.** An event received twice produces the same outcome as
    an event received once. Duplicate delivery IDs and content hashes are checked
    and deduplicated before any action is taken.
11. **Audit trail.** Every action the Judge takes is logged with: what it did,
    why, which input triggered it, and what the result was. Logs are not deleted.
12. **No blanket tokens.** Every credential or API key is scoped to a specific
    integration and loop. Broad tokens are not accepted.
13. **Scoped worktrees.** Concurrent Claude Code invocations use isolated git
    worktrees. Stale worktrees are cleaned up on a schedule.
14. **No alert spam.** External intelligence and observability systems emit alerts
    only when a defined threshold is crossed. Generic digests and low-signal
    summaries are not emitted.
15. **The Estate's law is preserved.** The Judge integrates with The Estate through its Steward. It does not bypass The Estate's agent-verb bindings, write idea state directly, or perform bound verbs itself. Every request that would mutate The Estate — including implementation or integration work, not only idea capture — enters through the Estate Steward. The Steward applies system/LAW.md, dispatches bound verbs to their agents, and remains sole writer of Estate state.

---

## Global Definition of Done

The Hermes/Judge operating control plane is complete when:

- [ ] An external event (GitHub push, PR, CI failure) reaches the Judge, is
      classified correctly, lands in the durable queue, and produces a Telegram
      notification to T — without T initiating the session.
- [ ] An approved task is briefed, executed by Claude Code in an isolated
      worktree, independently verified by a separate context, and integrated into
      the canonical repository — with T receiving an honest account of what was
      done and what was verified.
- [ ] A Telegram idea capture from T enters The Estate, produces a properly
      structured Spark with lineage and provenance, and closes with "What would
      you like to do next with this idea?" — without T having to explain The
      Estate's law to the Judge.
- [ ] A cross-project consequence is detected, proposed as a queue item, and
      reviewed by T — without silent cross-repo mutation.
- [ ] A standing goal assigned by T is retained across sessions, pursued within
      its stated bounds, and closed cleanly when its stop condition is met.
- [ ] The Judge has never taken a public, production, costly, or secret-bearing
      action without explicit T approval or an explicitly granted narrow policy.
- [ ] Every action the Judge has taken is in the audit log.
- [ ] The config schema is current, toolsets are either working or explicitly
      disabled, and a doctor check returns no surprises.

---

## Discussion Protocol

**Two status axes.** Item headings carry proposal maturity: `proposed` (initial proposal, not yet in active discussion) or `discussion` (actively being shaped with T). The decision ledger carries T's discussion disposition: items begin `undiscussed` and move to `adopt`, `revise`, `defer`, or `reject` only after T explicitly states a disposition. These axes are independent — a `discussion`-status item remains `undiscussed` in the ledger until T states a disposition.

T and the Judge will discuss the numbered items one at a time, in order, unless T chooses a different order.

**Each discussion follows this structure:**

1. **Brief summary** — what the item is, in two or three sentences
2. **Explain it like I'm five** — the core idea without jargon
3. **Pros** — the strongest arguments for adopting it
4. **Cons** — the strongest arguments against, or the risks if poorly implemented
5. **Recommendation** — what the Judge recommends, and why
6. **T's disposition** — T states one of: `adopt`, `revise`, `defer`, or `reject`

T's disposition is recorded in this document only after T explicitly states it.
The Judge does not infer disposition from enthusiasm or silence. A discussion that
ends without an explicit disposition remains `undiscussed` until T returns to it.

---

## Decision Ledger

| # | Item | Disposition | Decision date | Conditions / rationale | Follow-up reference |
|---|---|---|---|---|---|
| 1 | Event-Driven Ingress | `undiscussed` | — | — | — |
| 2 | Durable Kanban Work Queue | `undiscussed` | — | — | — |
| 3 | The Judge as SomberSoft Control Plane | `undiscussed` | — | — | — |
| 4 | Claude Code Command Layer | `undiscussed` | — | — | — |
| 5 | Standing Goals and Outcome Custody | `undiscussed` | — | — | — |
| 6 | Independent Verification Court | `undiscussed` | — | — | — |
| 7 | Think Tank Idea Refinery | `undiscussed` | — | — | — |
| 8 | Cross-Project Consequence Detection | `undiscussed` | — | — | — |
| 9 | External Intelligence and Observability | `undiscussed` | — | — | — |
| 10 | Public Artifact and Release Communication Loop | `undiscussed` | — | — | — |
| 11 | Continuous Learning and Skill Extraction | `undiscussed` | — | — | — |
| 12 | Scoped Permission and Integration Expansion | `undiscussed` | — | — | — |
| 13 | Hermes Infrastructure Hardening | `undiscussed` | — | — | — |

*Dispositions are recorded here after T explicitly states them in discussion.
`undiscussed` is the correct status until then — not assumed from silence.*
