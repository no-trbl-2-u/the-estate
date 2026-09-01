---
state: NNNN                 # monotonically increasing; NEVER edit a prior state
previous: state/NNNN-1.md   # the snapshot before this one (omit for 0000, EXCEPT on a
                            # graft, whose 0000 carries the cross-record form
                            # idea-NNNN/state/000K.md - the sole place it crosses records)
date: YYYY-MM-DD
session-verb: ""            # the verb invocation that produced this state
lenses: []                  # lenses applied this session (optional, additive)
shape: prose                # output shape requested (see system/TYPES.md)
inputs: []                  # artifact paths consumed
outputs: []                 # artifact paths produced
---

# State NNNN

<!-- A snapshot is a DELTA plus the live sets (ADR 0028): record this
     session, not a copy of the prior snapshot's content. History lives in
     the previous: chain and in git. -->

## Established
<!-- What THIS SESSION settled. Delta only — do not carry prior content forward. -->

## Decisions
<!-- Meaningful choices made THIS SESSION, with the why. Old states are documentation. -->

## Gold nuggets
<!-- Phrases, insights, or fragments from THIS SESSION worth keeping verbatim. -->

## Tensions
<!-- THE LIVE SET, in full: competing framings still pulling against each
     other, however old. Not questions awaiting answers — choices not yet
     made, and perhaps never to be. Drop a tension only when a Decision
     resolved it. -->

## Open questions
<!-- THE LIVE SET, in full: ambiguity is named here, never carried silently.
     Drop a question only when it was answered — and say where. -->

## Current state declaration
<!-- One honest paragraph: where this idea stands right now. The next session
     resumes from this paragraph — it must stand alone. -->

> What would you like to do next with this idea?
