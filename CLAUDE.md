# CLAUDE.md

@AGENTS.md

Claude Code reads `CLAUDE.md`, not `AGENTS.md`. The import above expands into
context at session start, so the orientation arrives as *loaded text* rather
than an errand. `AGENTS.md` is the single source of truth: do not duplicate it
here, do not rename it, and do not add OKF frontmatter to either file — a
memory file is injected, not catalogued
([ADR 0019](docs/adr/0019-claude-md-imports-agents-md.md)).

Spawned agents load neither file. The law reaches them because every
dispatched skill reads [system/LAW.md](system/LAW.md) directly; that seam is
deliberate (`system/LAW.md`, *Where the law lives*).
