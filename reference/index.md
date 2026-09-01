---
okf_version: "0.2"
---

# Start here

* [The Estate](the-estate.md) - what this repository is, its map, and its clock
* [Open Knowledge Format v0.2](okf-spec.md) - the vendored spec this bundle conforms to
* [Why OKF Exists, and Where It Stops](okf-rationale.md) - the format's purpose, its consumers, and the scope boundary

# The law and the model

The governing law lives in [`system/LAW.md`](../system/LAW.md) and the verb
table in the generated [`system/registry.md`](../system/registry.md) — one
authoritative home per fact (ADR 0028); this bundle describes and never
governs. The mirrored law, verbs, and offices documents were retired by ADRs
0027–0028 (git history is the archive).

* [The Record Model](record-model.md) - immutable state, artifact versioning, branching, derived lineage
* [Portfolio Scoring](scoring.md) - reachability x appetite; notice more, not finish more
* [Lenses](lenses.md) - six optional angles
* [Output Shapes](shapes.md) - the reader's dimension, an open vocabulary
* [Playbooks](playbooks.md) - worked compositions: spark-to-seed, merge, split
* [Falsifiers](falsifiers.md) - what would prove this wrong, and by when

# The vocabulary

* [Artifact Types](types/) - the eleven typed values and the seven families
