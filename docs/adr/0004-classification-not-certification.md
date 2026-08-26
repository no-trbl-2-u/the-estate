---
type: Decision Record
title: "ADR 0004"
description: "Classification, not certification."
tags: [adr, decision]
generated: { by: claude-code/2026-08-25, at: 2026-08-25T00:00:00Z }
verified: { by: human:T, at: 2026-08-25T00:00:00Z }
---

# ADR 0004: Classification, not certification

**Status:** accepted · **Date:** 2026-08-25 · **Source:** interview Q6

## Context
Types check presence, not quality, and a Horizon is the easiest place in the
system to fool oneself with fluent prose. Options considered: no gate,
adversarial gate (challenge as a precondition of export), structural proxy.
T chose the structural proxy: "keep artifacts properly classified... without
blocking a user who doesn't want to spend an hour hearing about why their
idea sucks."

## Decision
Quality is **recorded structurally, never gated**. Classifiers live in
artifact frontmatter (`horizon: falsifiable|unfalsified`,
`challenged: true|false`, `trajectory: actionable|abstract`) and the labels
travel with every export. An unfalsified Seed exports freely — it just says so
on the tin. The structural test works because you cannot write a falsifier for
a wish.

## Consequences
- `challenge` sets classifiers but blocks nothing; pushback is invocable,
  never mandatory.
- The Steward's route derivation reads classifiers as gaps ("untested horizon
  → suggest `challenge`"), which is grading doing the work gating would have.
