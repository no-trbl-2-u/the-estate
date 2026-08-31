---
id: idea-NNNN/artifacts/NNNN-seed.md
type: Seed
produced-by: seed
inputs: []
date: YYYY-MM-DD
origin: "idea-NNNN @ state/NNNN"   # provenance stamp — the ONLY thing that travels backward
contract: standard          # vocabulary, not a closed enum. A named contract must still
                            # state a next move, a refusal, and the provenance stamp
payload: ""                 # relative path to the droppable result, e.g. NNNN-slug-payload/
                            # empty = payload: absent. Optional; a classifier, never a gate
classifiers:
  horizon: unfalsified      # falsifiable | unfalsified — the label travels with the export
  trajectory: abstract      # actionable | abstract
  challenged: false
  payload: absent           # present | absent
audience: ""                # who receives this seed (a coding agent, a person, a business)
---

# Seed: {title}

## Horizon
<!-- The elaborated six-month vision. What does this look like when it's working? -->

**What would make this wrong:**
<!-- The falsifier. Required for classifier horizon: falsifiable. -->

## Trajectory
<!-- The rough path. Thin on implementation, but it terminates in a startable step. -->

## First actionable step
<!-- Something the recipient could start Monday. Required to typecheck as a Seed. -->

## Refusals
<!-- At least one named thing this project will NOT become. -->

## Acceptance criteria
<!-- Concrete, checkable, with action items. Abstract criteria are a recorded Seed falsifier. -->

## Payload
<!-- What is in `exports/NNNN-slug-payload/` and how the recipient drops it in.
     List what the directory contains, and state in one line what dropping it
     actually means here: paste this directory into the repo root, hand this
     prompt to the agent, open this deck.

     If there is no payload, say so and name in ONE LINE what the record would
     need in order to build one. That sentence is routing information - the gap
     names the verb that would fill it. Absence is a classifier, never a gate:
     a Seed without a payload exports fine and says so on the tin. -->
