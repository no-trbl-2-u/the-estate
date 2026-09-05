---
id: idea-0002/artifacts/0010-layout-decision-rpg-windows.md
type: Decision
shape: prose
lenses: []
produced-by: decide
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/state/0008.md
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0009-rivers-and-lakes-web-edition-horizon-dialogue.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [phase, seed, challenge]
summary: "T chose RPG Windows from ten dialogue-first layouts: console-RPG blue windows with white double borders, a ▶ cursor, monospace; dialogue log left, command window right on a laptop, stacked on a phone; six sheet tabs as a top menu row. Nine alternatives rejected and named. Reopened only by the first finished game showing the monospace prose or the pastiche failing the writing."
---

# Decision: the layout is RPG Windows

The Chancellor, recording what T decided on seeing ten dialogue-first
layouts rendered at laptop and phone width with a working beat walk.

T's words: **"RPG window is the clear winner. Lock that in."**

## What was decided

The play surface of Rivers and Lakes, web edition, is **RPG Windows**:

- **Identity.** A classic console role-playing game: deep blue windows
  on a darker blue ground, white double borders with a small radius,
  monospace type, yellow for the speaker and the selected item, a ▶
  cursor marking the selection.
- **Structure, laptop.** A top menu row carries the six sheet tabs
  (Game · Story · People · Things · Self · Arts) with counts, the
  selected one marked ▶. Beneath it a one-line HUD window: Xiake name,
  Prompt and entry position, Legend slots, Tags checked, the dice. The
  Game screen is two windows side by side: the **dialogue log** on the
  left, where beats accumulate and past beats dim; the **command
  window** on the right, where the current beat's input or choices sit
  as a vertical menu with the ▶ cursor, and the Next action is a
  full-width button.
- **Structure, phone.** The same windows stacked: menu row, HUD,
  dialogue log, command window.
- **Sheet screens.** Each tab replaces the Game screen's two windows
  with one window per section of that tab, in the same blue-and-white
  frame; headings in yellow.
- **Beats.** As the Horizon states: the entry whole and verbatim first,
  labelled as the book's words; each question alone; each mechanical
  instruction as a menu choice with the obvious option pre-selected;
  the Story last; then the dice. Every beat after the first is
  labelled as the site's reading. A one-line explanation of a trait
  appears the first time a beat touches it.

The specification below is the mockup's own stylesheet for this
design, kept here so that nothing depends on the temporary file T
holds. It is a reference, not the build's code.

```css
.rpg{--bg:#0a1a4a;--win:#102a6b;--fg:#fff;--yel:#ffd966;
  background:linear-gradient(180deg,#071238,#0a1a4a 60%,#0b2058);color:var(--fg);
  font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-size:14px;line-height:1.5;
  display:grid;grid-template-rows:auto auto 1fr;grid-template-areas:"tabs" "hud" "screen";gap:10px;padding:12px}
.rpg .window{background:var(--win);border:4px double var(--fg);border-radius:6px;padding:12px 14px}
.rpg .tabbar{grid-area:tabs;display:flex;gap:14px;justify-content:center}
.rpg .tabbar [aria-selected="true"]{color:var(--yel)}
.rpg .tabbar [aria-selected="true"]::before{content:"▶ "}
.rpg .hud{grid-area:hud;font-size:12px}
.rpg .game{grid-area:screen;display:grid;grid-template-columns:1fr 340px;gap:10px;align-items:start}
.rpg .log .beat.past{opacity:.6}
.rpg .log .beat .who{color:var(--yel)}
.rpg .command .choices{display:flex;flex-direction:column}
.rpg .command .choices button{border:0;text-align:left;padding:6px 8px}
.rpg .command .choices button[aria-pressed="true"]{color:var(--yel)}
.rpg .command .choices button[aria-pressed="true"]::before{content:"▶ "}
.rpg .command .next{border:2px solid var(--fg);width:100%}
.rpg .command .next::before{content:"▶ "}
@container (max-width:520px){.rpg .game{grid-template-columns:1fr}.rpg .tabbar{flex-wrap:wrap;gap:6px}}
```

## What was rejected

Nine layouts, each seen at both widths with the same beats:

1. **Visual Novel** — ink-wash landscape, dialogue box in the lower third.
2. **Messenger** — chat bubbles, chips, bottom navigation.
3. **Scroll Reader** — paper manuscript, vertical tab rail.
4. **Card Stack** — one beat per card, floating dock.
5. **Terminal Dialogue** — book> and you> lines, F-key tabs.
6. **Stage** — the beat alone on a framed stage, vermilion seal.
7. **Handheld** — LCD screen, soft buttons, bezel menu.
8. **Storybook** — ink plate left, text right, bookmark tabs.
9. **Focus** — the beat and its input alone, centred.

And, from the round before the redirect, all ten sheet-centred layouts,
rejected as a class: "Imagine 20 prompts in, this sheet would be huge."

## Why

T did not state a reason beyond "the clear winner". The Chancellor
records what the choice is consistent with, marked as inference:

- The Framing's problem is "the book, playable, for anyone" and T asked
  for something that "plays more like a video game". RPG Windows is the
  one layout whose identity *is* a video game's, literally: the command
  window makes every mechanical instruction a menu choice, which is the
  advisory engine's "propose, flag, never refuse" made visible.
  Confidence 70.
- It keeps the dialogue log in view beside the command window on a
  laptop, so past beats can be re-read without losing the current one,
  which Card Stack, Stage, Focus and Visual Novel give up. Confidence 60.

## What would reopen it

- **The first finished game shows monospace prose is wrong for writing
  passages.** The mockup carried its own risk line: "pastiche; monospace
  prose; wide on phones." If the Journaling mode's passages read badly
  in the command window's type, the identity stays and the prose face
  changes; if the two-window structure itself fights the writing, the
  decision reopens.
- **The pastiche fails the "book" falsifier.** If a player finishing a
  game cannot tell the book's words from the site's reading because the
  RPG frame swallows the labels, the labelling is redesigned first and
  the layout second.
- **T's word**, at any time.

## Tensions

**Resolved.** The layout is no longer the first human-attention item on
the Trajectory's fifth leg; it is decided. The Advocate's "advisory
friction versus the falsifier" tension has its answer in the command
window: a choice is one cursor move and one press.

**Left alive.** A dialogue interface against "nothing added" (the beats
are still a projection the book does not print). The Quick Game mode in
a dialogue, and going back a beat, remain open and are now to be
designed inside this layout. Whether the tab names are final.

## Filed for the route

`phase` may now decompose the fifth leg against a fixed layout. The
mockup file T holds is not in the estate; the stylesheet above and the
Horizon's beat description are what a stranger builds from.
