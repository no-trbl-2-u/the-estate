# CLAUDE.md

@AGENTS.md

## Why this file exists

Claude Code reads `CLAUDE.md`, not `AGENTS.md`. The import above is expanded
into context at session start, so the orientation arrives as *loaded text*
rather than as an instruction to go and read something. `AGENTS.md` remains the
single source of truth; this file adds nothing to it.

Do not duplicate the orientation here, do not rename `AGENTS.md`, and do not
add OKF frontmatter to either file: a memory file is injected, not catalogued,
so the metadata costs tokens every session and buys nothing. See
[ADR 0019](docs/adr/0019-claude-md-imports-agents-md.md).

## What this file does not reach

Spawned agents do not load `CLAUDE.md` any more than they load `AGENTS.md`:
a subagent runs on its own definition. The law reaches them because every agent
definition opens by reading [system/LAW.md](system/LAW.md) directly. That seam
is deliberate (`system/LAW.md`, *Where the law lives*) and this import does not
change it.
