# Architecture Decision Records

Major decisions made while building this workspace, in order. Each records the
context, the decision, and what it costs. Interview references are to the
10-question vision interview between T and the design agent (2026-08-25),
conducted per Requirement A of `BUILD-PROMPT.md`.

| ADR | Decision |
|---|---|
| [0001](0001-extraction-first.md) | think-tank is an idea foundry, not a memory system |
| [0002](0002-seed-terminal-type.md) | The Seed is the terminal type: horizon + trajectory, clean export, provenance stamp |
| [0003](0003-typed-skills.md) | Skills are typed composed functions in three families |
| [0004](0004-classification-not-certification.md) | Quality is classified structurally, never certified or gated |
| [0005](0005-immutable-state-derived-lineage.md) | State is immutable copy-forward; lineage is derived; `relates` is the only authored edge |
| [0006](0006-steward-as-router.md) | The Steward routes by Seed-gap and pushes back only by suggesting a skill |
| [0007](0007-portfolio-scoring.md) | Portfolio scoring optimizes for noticing, ranked by reachability, drift displayed not scored |
| [0008](0008-frontmatter-route-hints.md) | Every artifact carries frontmatter with `potential-next-steps` route hints |
| [0009](0009-first-build-scope.md) | First build: Steward + ten molecular skills, no specialists, no sync |
| [0010](0010-process-and-protected-files.md) | Build authorized directly from the confirmed interview; protected files left untouched |
