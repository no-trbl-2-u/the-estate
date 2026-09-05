---
id: idea-0002/artifacts/0002-rules-prompts-oracles-inventory.md
type: Findings
shape: prose
lenses: []
produced-by: research
inputs:
  - ideas/0002-rivers-and-lakes-web-edition/artifacts/0001-rivers-and-lakes-web-edition-spark.md
date: 2026-09-05
classifiers:
  challenged: false
potential-next-steps: [frame]
summary: "Machine-readable inventory of Rivers and Lakes from the three reference files: 64 rules with enforceability, a trait schema, all 222 Prompt entries parsed to operations, 42 oracle tables per language half (84 total), 22 named Tags/Resources, discrepancies against the Spark, and what was looked for and not found (no licence, no record sheet)."
sources:
  - id: rulebook
    resource: no-trbl-2-u/rivers-and-lakes/reference/rivers_and_lakes.pdf
    title: "Rivers and Lakes (rulebook, 136 PDF pages)"
    author: human:wym-lawson
    last_modified: 2025-01-19T07:08:42Z
  - id: oracles
    resource: no-trbl-2-u/rivers-and-lakes/reference/rivers_and_lakes_oracles.pdf
    title: "Rivers and Lakes Oracles (32 PDF pages)"
    author: human:wym-lawson
    last_modified: 2025-01-19T07:10:50Z
  - id: prompts-txt
    resource: no-trbl-2-u/rivers-and-lakes/reference/rivers_and_lakes_prompts.txt
    title: "Rivers and Lakes Prompts (plain text, 222 entries)"
generated: { by: factor/2026-09-05, at: 2026-09-05T01:50:47Z }
---

# Findings: rules, Prompts and oracles of Rivers and Lakes, inventoried

The Factor, back from the reference repository with the three files and
nothing else. The commission: inventory every rule, trait, Prompt shape and
oracle table in machine-readable form, and check the operator's reading of
the rules against the sources.

Throughout, **known** means read directly from a source and cited;
**inferred** is marked `(inferred)` and is the Factor's reading, offered for
the operator to confirm or reject. `author` on the two PDFs is taken from the
credits page ("Game Design, Adaptation, Prompt Writing, Art, Layout — Wym
Lawson"[^rulebook]); `last_modified` is the PDF's own CreationDate metadata,
the only date either file carries. The text file states no author and no
date.

## 0. Method and limits

- The pypdf extraction supplied with the commission was used for the
  rulebook. For the oracles PDF it proved unreliable — pypdf bled table rows
  from other pages into every page — so the oracles were re-extracted with
  PyMuPDF, filtering to on-page text, and the layout of ten oracle pages and
  seven rulebook pages was checked visually from 72 dpi renders. Page
  numbers below are **PDF page numbers**; the book's printed folio is PDF
  page − 3 in the rulebook, and the oracles PDF prints the rulebook's folios
  (its page 2 is printed "103").
- The rulebook's PDF pages 105–136 are text-identical to the oracles PDF
  pages 1–32 (a line diff of the two extractions is empty).[^rulebook][^oracles]
- The text file was compared to the rulebook's Prompt pages mechanically
  (§3.3). Prompt prose is not reproduced here beyond a five-word lead per
  entry; the text file holds the words.
- Nothing outside the three files was consulted. The licence question the
  operator ranks first is therefore still open (§6).

## 1. Document map (known)

| PDF page | Content | Notes |
|---|---|---|
| 1 | Cover: title, author name | image; no text extracted[^rulebook] |
| 2 | Half-title | image; no text |
| 3 | Blank | |
| 4 | Credits: author, thanks, inspirations, "Based on 'Thousand Year Old Vampire' created by Tim Hutchings", tooling, typefaces, romanisation source | no copyright or licence line |
| 5 | Introduction | |
| 6 | "What is needed to play?" — dice, recording medium, oracles, content guidance | |
| 7 | "Your Xiake" — the six traits, check/strike conventions | |
| 8–9 | Legends and Stories | |
| 10 | Songs | |
| 11 | Tags | |
| 12 | Resources | |
| 13 | Characters | |
| 14–15 | Techniques | |
| 16 | Scars | |
| 17–18 | Xiake Creation | |
| 19–20 | Playing the Game; The Game Ends | |
| 21 | Two Styles of Play | |
| 22 | Answering Prompts | |
| 23 | Passage of Time | |
| 24 | Summary (eight numbered points) | |
| 25–95 | Prompts 1–71, one Prompt per page, three entries per page | entries carry no letter labels in the book |
| 96–104 | Prompts 72–80, one entry each, each ending "The game is over." | |
| 105–136 | Oracles, identical to the oracles PDF | |

Oracles PDF: page 1 title "Oracles — Cantonese", pages 2–16 the Cantonese
tables, page 17 title "Oracles — Mandarin", pages 18–32 the same tables in
Mandarin romanisation (§4).[^oracles]

## 2. Rules inventory

Every rule the rulebook states, one row each. **Enforce** is whether a web
rules engine can enforce it mechanically: `yes` (state and a check),
`partly` (a mechanical part plus a judgment the player makes), `narrative`
(guidance only; the engine can at most surface it). All rows are known
unless marked.[^rulebook]

| Rule | Statement | Page | Enforce |
|---|---|---|---|
| R01 | Play needs a ten-sided die (d10) and a six-sided die (d6); any random generator may substitute. | 6 | yes |
| R02 | Any recording medium is acceptable: paper, voice, digital text; the book itself has spaces to write in. | 6 | narrative |
| R03 | Content guidance: death, tragedy, injustice, abuse, self-destructive acts, body alteration, illness, vulnerability, including of children and animals. If a Prompt's topic is uncomfortable the player is free to skip to another Prompt. | 6 | partly (skip is a mechanical move; the trigger is the player's) |
| R04 | A Xiake is represented by six traits: Legends, Tags, Resources, Technique, Characters, Scars. | 7 | yes |
| R05 | Almost every Prompt alters a trait; follow the Prompt's written instructions. | 7 | yes (per-entry operations, §3) |
| R06 | "Check" a trait = a checkmark beside it; "lose" a trait = strike it out with a line. A struck-out trait stays on the sheet and readable: it may be referred back to or restored. | 7 | yes |
| R07 | A Story is a single sentence, third person, describing one key moment; suggested form "[event]; [feeling or action]", optionally extended with an em dash; traits affected by the Prompt should be worked in. | 8 | narrative (the one-Story object is mechanical; its form is not) |
| R08 | A new Story must be created as soon as a Prompt is answered, and added to a Legend — "unless stated otherwise" by the Prompt. | 8, 19 | yes |
| R09 | The game begins with five spaces for Legends; each Legend holds up to three Stories. | 8 | yes |
| R10 | The Stories in a Legend should be connected by theme, subject, trait or emotion. | 8–9 | narrative |
| R11 | A new Story that clearly belongs in an existing Legend joins it; otherwise it opens a new, empty Legend if one is available. | 8–9 | partly (availability is mechanical; fit is the player's call) |
| R12 | When no Legend space is free, the player must strike out an existing Legend and every Story in it (player's choice which) — or move that Legend into a Song instead. | 9–10 | yes |
| R13 | Journal entries may be adjusted freely, but Legends may be modified only when a Prompt explicitly instructs it. | 21 | yes (a write-lock on Legends outside Prompt instructions) |
| R14 | Up to four Songs; each contains one Legend; a Song may be created whenever a Legend needs moving into it. | 10 | yes |
| R15 | Once a Legend is a Song, no new Stories can be added to it. | 10 | yes |
| R16 | Turning a Legend into a Song: mark it (e.g. a music-note symbol) and give the Song a short description (poem, folk song, novella — examples, not a closed list). | 10 | yes (fields) |
| R17 | Tags are reputation traits; a newly created Tag should relate to the Prompt's situation. | 11 | narrative |
| R18 | Checking a Tag means the Xiake accepts that reputation as identity; unchecked Tags are others' assumptions. | 11 | yes (state) / narrative (meaning) |
| R19 | Each Tag may be checked only once. | 11 | yes |
| R20 | Losing a Tag = strike it out. | 11 | yes |
| R21 | Resources are assets or possessions, may be detrimental (a curse, a weak heart), and should make narrative sense for the Prompt. | 12 | narrative |
| R22 | Stationary Resources are possessions or landmarks that cannot be carried away when the Xiake departs the area. | 12 | partly (a flag; only Prompt 54B keys on it — §3) |
| R23 | Losing a Resource = strike it out but leave it readable; a lost Resource may later be recovered. | 12 | yes |
| R24 | Basic weapons and armour are assumed without being recorded; freely invented items and locations may not be used to fulfil the game's mechanical needs. | 12 | partly (only recorded Resources satisfy an instruction) |
| R25 | A Character is a name plus a one-sentence description; descriptions may be extended each time the Character is used. | 13 | yes (fields) |
| R26 | If a Prompt introduces a Character and none is available, create a new one to fit. | 13 | yes |
| R27 | Three Character types: Righteous, Evil, Ordinary; a Prompt may state the type on creation. Ordinary = outside the martial world; Righteous/Evil = inside it. | 13 | yes |
| R28 | Righteous/Evil is reputation and faction, not personality or morality. | 13 | narrative |
| R29 | Characters cannot be killed unless a Prompt says so; when killed, strike out the name. | 13 | yes |
| R30 | Two Technique types: Orthodox and Unorthodox; a Prompt may state which. | 14 | yes |
| R31 | Acquiring an Orthodox Technique requires three filled checkboxes; an Unorthodox one requires one. | 14, 15 | yes |
| R32 | "Check a Technique" = fill one checkbox; when all its boxes are filled the Technique is Acquired. | 15 | yes |
| R33 | Told to check a Technique with none available: create a new Technique and leave it unchecked. | 15 | yes |
| R34 | "Use a Technique" requires an Acquired Technique. If none, an Unacquired Technique may be used, and is lost after the Prompt is answered. The player may also choose not to use one; the Prompt lists the alternative. | 15 | yes |
| R35 | Losing a Technique = strike out its name; narrate how it was lost. | 15 | yes / narrative |
| R36 | A new Technique = a name, a type (Orthodox/Unorthodox) and a brief description. | 15 | yes (fields) |
| R37 | Told to use a Technique with none available: resolve the consequences listed in the Prompt; alternatively, lose an unacquired Technique. | 20 | yes — but see §5, note D: this restates R34 with different wording |
| R38 | The technique oracle tables may be rolled for inspiration. | 15 | narrative |
| R39 | A Scar = a brief description plus one sentence of the story behind it. | 16 | yes (fields) |
| R40 | Setting: Imperial China, a real or a fictional dynasty. | 17 | narrative |
| R41 | Creation step 1: name the Xiake (the oracles may generate a name). | 17 | yes (field) |
| R42 | Creation step 2: imagine the birth; start a Legend with one Story summarising the beginning. | 17 | yes |
| R43 | Creation step 3: three Tags based on birth and physical description; a new Story based on these Tags, describing how they were gained ("the very first reputation"). | 17 | yes |
| R44 | Creation step 4: three Resources. | 17 | yes |
| R45 | Creation step 5: at least three Characters, any mix of types, each named and described. | 17–18 | yes |
| R46 | Creation step 6: three more Stories, each in a separate new Legend, based on the traits. | 18 | yes |
| R47 | Creation end state: three Tags, three Resources, at least three Characters, one Story in each of the five Legends. | 18 | yes |
| R48 | Prompts may be answered in writing, aloud, or in the head; traits are created, lost or altered as instructed. | 19 | narrative |
| R49 | Movement: roll d10 and d6; subtract the d6 from the d10; positive moves forward that many Prompts, negative backward, zero answers the same Prompt again. | 19, 24 | yes |
| R50 | You cannot move backward beyond Prompt 1; a move that would pass it lands on Prompt 1. | 19, 24 | yes |
| R51 | Most Prompts have second and third entries ("other than a selection of Prompts" — 72–80). Landing on a Prompt a second or third time resolves the second or third entry; landing when all entries are answered skips to the next Prompt. | 19, 24 | yes |
| R52 | Substitution: told to check a Tag with no Tag available, lose a Resource instead; unable to lose a Resource, check a Tag instead. Either way narrate the worst outcome. Only Tags and Resources substitute for each other; Techniques, Characters, Legends and Scars may not be traded for them. | 19 | yes / narrative (the "worst outcome") |
| R53 | Required to lose a Tag, Resource or Technique with none left: the Xiake's journey ends; narrate the demise using the Prompt. | 20 | yes |
| R54 | The game ends if you are unable to check or lose a Tag or Resource, or unable to lose a Technique, when required; or when a Prompt says the game has ended. | 20 | yes |
| R55 | Quick Game: answer the Prompts directly within the Legend section of the record. | 21 | partly (a mode; the record shape is the engine's) |
| R56 | Journaling Game: a passage or chapter per Prompt in writing; a Story must still be added for each Prompt. | 21 | partly |
| R57 | Time is loose: a Prompt may cover seconds or years; the Xiake is mortal, so keep age in mind. | 22, 23 | narrative |
| R58 | Combine Prompts into arcs; reuse Characters and Resources; write the first thing that comes to mind; not every Prompt need connect; "You do not need to answer every question in the Prompt." | 22 | narrative |
| R59 | Embrace discomfort, but prioritise well-being: "feel free to modify the Prompt" if a topic causes significant discomfort. | 22 | narrative |
| R60 | Guidance: the first five Prompts answered are the childhood. | 23 | partly (the engine could label them; nothing depends on it) |
| R61 | Summary 1: start counting at Prompt 1 without answering Prompt 1. | 24 | yes |
| R62 | Summary 5–7: first landing resolves the first entry; second and third landings the second and third; a fourth landing skips to the next Prompt. | 24 | yes |
| R63 | Summary 8: check the oracle tables for inspiration. | 24 | narrative |
| R64 | The game runs from the Xiake's birth to their "inevitable end"; the system is Thousand Year Old Vampire's. | 5 | narrative |

Rules the book implies but never states (all **inferred**):

- **I-1. No upper bound is needed.** The book bounds movement below (R50)
  but not above. Prompts 72–80 end the game (R54), so play only ever
  continues from a Prompt ≤ 71; the largest roll is 10 − 1 = +9; 71 + 9 =
  80. The upper bound is unreachable by construction. A fourth landing on
  71 skips to 72, which ends the game (R62).
- **I-2. Skip chains.** R51/R62 say "skip to the next Prompt" and never say
  what happens if the next Prompt is also exhausted. The natural reading is
  to continue skipping forward; the book does not say so.
- **I-3. Visit counting.** "Landing" is what counts a visit (R51), so a
  zero roll (R49) is a fresh landing on the same Prompt and advances its
  entry; a clamp to Prompt 1 (R50) is likewise a landing on Prompt 1. The
  book's example ("stay on Prompt 1") supports but does not state this.
- **I-4. Prompt 1 at the start.** R61 says counting starts at Prompt 1
  without answering it, so a first roll of 0 lands on Prompt 1 and answers
  its first entry; Prompt 1 is otherwise reached only by moving backward.
- **I-5. Acquired is derived**, not stored: Acquired ⇔ filled boxes = the
  type's box count (R31, R32). Prompt 25C's "uncheck all checkboxes" and
  68A's "clear all progress" un-acquire a Technique without striking it.

### Machine-readable constants (known unless marked)

```yaml
dice: { high: d10, low: d6, move: "d10 - d6" }
prompt_range: { first: 1, last: 80 }          # last is inferred from the page count
prompt_entries: { multi: 1-71, entries_each: 3, single: 72-80, entries_each_single: 1 }
lower_bound_prompt: 1                          # R50
start_position: 1                              # R61, not answered
zero_roll: repeat_same_prompt                  # R49
visit_to_entry: { 1: first, 2: second, 3: third, 4: skip_to_next }   # R51, R62
legends: { slots: 5, stories_per_legend: 3 }   # R09
songs: { max: 4, legends_per_song: 1, accepts_new_stories: false }   # R14, R15
tag: { check_limit: 1 }                        # R19
technique_boxes: { Orthodox: 3, Unorthodox: 1 }   # R31
character_types: [Righteous, Evil, Ordinary]   # R27
technique_types: [Orthodox, Unorthodox]        # R30
substitution: { check_tag_none: lose_resource, lose_resource_none: check_tag, others: never }   # R52
game_over: [cannot_check_or_lose_tag, cannot_check_or_lose_resource, cannot_lose_technique, prompt_says_over]   # R54
creation: { tags: 3, resources: 3, characters_min: 3, legends_with_one_story: 5 }   # R47
creation_story_order: [birth, first_reputation_from_tags, trait_story, trait_story, trait_story]   # R42, R43, R46
childhood_prompts: 5                           # R60 guidance
modes: [quick, journaling]                     # R55, R56
```

## 3. Trait schema

Fields a data model needs, derived strictly from the rulebook; `(inferred)`
marks fields the Prompts require but the rules chapter never names. Every
"struck" flag exists because struck traits are kept readable (R06).[^rulebook]

### 3.1 Xiake (record)

| Field | Type | Source |
|---|---|---|
| name | string (oracles may generate it) | R41 |
| legends | Legend[5] | R09 |
| songs | Song[0..4] | R14 |
| tags | Tag[] | R04 |
| resources | Resource[] | R04 |
| techniques | Technique[] | R04 |
| characters | Character[] | R04 |
| scars | Scar[] | R04 |
| alternate_identity | Xiake? — a second full sheet with its own Legends, Stories and three pre-acquired Techniques | Prompt 21A only (inferred as a field; the rules chapter has no such concept)[^prompts-txt] |

### 3.2 Legend, Story, Song

| Entity | Field | Type | Source |
|---|---|---|---|
| Legend | stories | Story[0..3] | R09 |
| Legend | struck | boolean — the whole Legend and its Stories | R12 |
| Legend | song | Song? — set when moved | R14, R16 |
| Story | text | one sentence, third person | R07 |
| Story | prompt_ref | which Prompt entry produced it (inferred; 41B "replaces a Story", 36B "change the previous Story", 44B "extra Story" need it) | — |
| Song | legend | the one Legend it holds | R14 |
| Song | description | short text; kind is free (poem, song, novella are examples) | R16 |
| Song | frozen | no new Stories — derived, always true | R15 |

### 3.3 Tag

| Field | Type | Source |
|---|---|---|
| name | string | R17 |
| checked | boolean; may become true once and never again | R18, R19 |
| struck | boolean (lost) | R20 |
| polarity | positive / negative — (inferred) player-judged; Prompts 19B, 46A, 66B ask for "a positive Tag" / "a negative Tag" | [^prompts-txt] |
| theme | free text — (inferred) Prompts 35B, 59C ask for "all Tags related to love / parenthood"; 71B for "opposites" | [^prompts-txt] |

### 3.4 Resource

| Field | Type | Source |
|---|---|---|
| name | string | R21 |
| struck | boolean; a struck Resource may be recovered (unstruck) | R23 |
| stationary | boolean | R22 |
| detrimental | narrative only; no mechanics key on it | R21 |
| on_person / location | (inferred) Prompts 41A ("didn't keep on your person"), 50C ("on your person"), 54B ("Stationary Resources in the city") need a place | [^prompts-txt] |
| lock | (inferred) Prompt 35A: "Poison of Love" can only be lost when it is the only Resource left | [^prompts-txt] |

### 3.5 Character

| Field | Type | Source |
|---|---|---|
| name | string | R25 |
| description | one sentence, appendable over play (a list of sentences serves) | R25 |
| type | enum Righteous / Evil / Ordinary | R27 |
| struck | boolean = killed; only by Prompt instruction | R29 |
| relationship / role | (inferred) free labels the Prompts select on: family, beloved, friendly, enemy, rival, neutral, disciple, child, caregiver, elderly, royal, leader, follower, "from your village", "in the city" | [^prompts-txt] |
| alive_or_dead selection | struck Characters remain selectable: 16B, 71A "dead or alive"; 22B, 53A unstrike | R06, [^prompts-txt] |
| retype | type can change: 11B, 13C, 16B, 44A/B, 59B, 67B, 7A/44C/67B (into rival/enemy/Evil) | [^prompts-txt] |

### 3.6 Technique

| Field | Type | Source |
|---|---|---|
| name | string | R36 |
| type | enum Orthodox / Unorthodox | R30 |
| description | brief text | R36 |
| boxes | 3 if Orthodox, 1 if Unorthodox | R31 |
| checked | integer 0..boxes | R32 |
| acquired | derived: checked == boxes (I-5) | R31 |
| struck | boolean (lost) | R35 |
| created_order | (inferred) 51A "the first Technique you learned" | [^prompts-txt] |
| strength / kind | (inferred, player-judged) 44C "strongest", 42A "offensive", 70B "healing", 17C "evasion", 31B "require the use of this weapon", 55A "used by the cult" | [^prompts-txt] |
| alignment word | Prompts 28B, 30B say "Evil Technique" / "Righteous Technique"; the rulebook has no such types — see §5 note C | [^prompts-txt] |

### 3.7 Scar

| Field | Type | Source |
|---|---|---|
| description | brief text | R39 |
| story | one sentence | R39 |
| struck | (inferred) Prompt 58B "Scratch off one Scar" — the only removal of a Scar in the game | [^prompts-txt] |

### 3.8 Play state (inferred, from R49–R62)

`current_prompt` (1..80), `visits[prompt]` (0..3), `answered_entries`,
`mode` (quick / journaling), `journal[]` (journaling), `ended`,
`end_reason` (trait-exhaustion / prompt-ending), `roll_log[]`.

## 4. Prompt shape

### 4.1 Verification of the text file against the book (known)

- The text file holds 80 Prompts: 1–71 with three entries each (213) and
  72–80 with one entry each (9) — **222 entries**, no duplicates, no gaps.[^prompts-txt]
- Concatenating each Prompt's entries and comparing with the rulebook page
  (PDF 25–104) after whitespace and ligature normalisation, **all 80
  Prompts match word for word**. The only residual differences: the PDF
  text carries a non-printing control character (U+001B) once per entry
  where the book's entry layout sits, and in some entries the PDF has the
  Greek question mark U+037E where the text file has an ASCII semicolon (21 occurrences across 14 Prompts).
  Neither is a wording difference.[^rulebook][^prompts-txt]
- The letters A/B/C exist **only in the text file**. The book shows no
  labels; entries are distinguished by position and by the rules' "first,
  second and third entry" (R51). The text file is inconsistent in form:
  six entries put a space after the letter (1A, 1B, 1C, 19C, 21B, 32B),
  the other 207 do not; eight entries contain a double space. A parser
  should tolerate both.[^prompts-txt]
- Prompts 72–80 are the only single-entry Prompts and the only ones that
  say "The game is over."[^prompts-txt]

### 4.2 Operation grammar for the table

Operations are the Factor's normalisation of the imperative sentences in
each entry; the conditions inside brackets are the entry's own words.

- **Verbs:** `create` (a new trait; the text says "create", "gain", "take"),
  `check`, `lose` (strike out; the text says "lose", "strike out/off",
  "scratch off", "destroy"), `strike` (a Character killed or removed),
  `use` (a Technique, R34), `acquire` (fill all boxes), `unstrike`,
  `uncheck` (empty the boxes), `retype` (change a Character's or
  Technique's type or role), `replace`, `edit`, `move`, `no-story`
  (overrides R08), `end`.
- **Traits:** `Tag`, `Res`, `Tech`, `Char`, `Scar`, `Legend`, `Song`,
  `Story`. A quoted name is a Tag or Resource the Prompt names verbatim.
  Parentheses narrow the selection: `Char(Ordinary)`, `Tech(Unorthodox)`,
  `Tag(unchecked)`, `Tech(Acquired)`, `Res(Stationary)`, `Char(family)`.
- **Counts:** `2×`; `≤2×` = "up to two"; `≥1×` = "at least one"; `all`.
- **Choice:** ` | ` = the entry's "or" (player chooses one); ` || ` = the
  entry's "Alternatively" (the second branch, usually the failure or
  refusal path); `;` = sequence.
- **Conditions:** `[if none]` = "if none is available / if needed / if
  necessary" (create only when no fitting Character exists, R26);
  `[may]` = optional; `[if …]` = the entry's own condition, decided by the
  player unless it is a sheet test.
- **Ends** = the entry says "The game is over." Every other entry can still
  end the game through R54 when a `check`/`lose` cannot be satisfied.

### 4.3 Entry table (known)[^prompts-txt]

| # | Lead | Operations | Ends |
|---|---|---|---|
| 1A | Characters you considered as family | strike all Char(family); create Char(family) [if none]; create Char [if none]; create Tag "Cursed Star" | no |
| 1B | You learn clues about the | create Char [if none]; create Tag "Revengeful" | no |
| 1C | Someone is coming after you | use Tech, [may] strike Char \|\| lose 2×Res; create Scar | no |
| 2A | A mysterious wandering monk arrived | create Tag | no |
| 2B | Your caretaker takes the prophecy | create Res | no |
| 2C | The wandering monk returned and | create Char [if none]; [may] lose Tag(the prophecy Tag from 2A) | no |
| 3A | The famine ravages your village | check Tag \| lose Res(physical); create Res "Malnourished" | no |
| 3B | As resources dwindle, tension rises | create Tag | no |
| 3C | You have survived the famine | create Char(beloved) [if none]; create Res \| create Tech | no |
| 4A | You have a new younger | create Char(Ordinary) | no |
| 4B | Your sibling shows great potential | check Tag | no |
| 4C | A family member sacrifices themselves | check Tag; create Tag | no |
| 5A | Your caregiver(s) adamantly oppose your | create Char(caregiver) [if none]; create Tag | no |
| 5B | A wandering martial master arrives | create Char(Righteous \| Evil); create Tech | no |
| 5C | The school is trashed and | check Tech | no |
| 6A | You befriend an orphaned child | create Char(Ordinary) | no |
| 6B | You save your friend from | check Tag; create Res; create Scar | no |
| 6C | A renowned Character offers to | create Char [if none]; check Tag; create Tag | no |
| 7A | A Character of similar age | retype Char→rival \| create Char(rival) [if none]; check Tag | no |
| 7B | Your reputation among peers suffers | lose Tag; create Tag | no |
| 7C | Despite the ongoing rumours, a | check Tag | no |
| 8A | When you are out in | check Tag \| lose Res; create Res "Wild Beast" | no |
| 8B | The beast has a special | check Tag | no |
| 8C | A Character is killed because | strike Char; [may] lose Res "Wild Beast"; create Tag "Tainted Keeper" | no |
| 9A | You find a mysterious artifact | create Res | no |
| 9B | A Righteous or Evil Character | create Char(Righteous \| Evil) [if none]; lose Res | no |
| 9C | You stumble upon a lost | strike Char; [may] unstrike Res | no |
| 10A | You help heal an Evil | create Char(Evil) [if none]; create Tech(Unorthodox) | no |
| 10B | You spend most of your | create Char(friendly) [if none]; check Tag; check Tech(Unorthodox) | no |
| 10C | Practicing an Unorthodox technique has | check Tech(Unorthodox); create Scar; create Tag | no |
| 11A | You meet an unassuming Character | create Char(Ordinary); check Tag | no |
| 11B | An Ordinary Character turns out | retype Char(Ordinary→Righteous \| Evil); create Tech | no |
| 11C | You are shunned by others | create Tag | no |
| 12A | People from a faction come | create Res \| create Tech; create Tag "Thief" | no |
| 12B | While travelling, you clash with | create Char(Evil); use Tech, create Tag \|\| check Tag, lose Res, create Scar | no |
| 12C | You and an enemy Character | create Char(enemy) [if none]; check Tech; check Tag | no |
| 13A | A martial artist claims to | create Char(Righteous \| Evil); create Tech(matching the Character's alignment) | no |
| 13B | While you are focusing on | lose Res \| check Tag; check Tech | no |
| 13C | A close Character has changed | retype Char(Evil↔Righteous); lose Tag(unchecked) | no |
| 14A | You join a sect unwillingly | create Tag; create Tech | no |
| 14B | You have great respect towards | create Char(matching the sect's faction); check Tech | no |
| 14C | A friendly Character in your | create Res; create Tag | no |
| 15A | You apply to become a | create Char [if none]; create Tag | no |
| 15B | You are taken in by | create Char [if none]; (use Tech, create Tag \|\| check Tag \| lose Res); create Tech | no |
| 15C | You are tasked with aiding | create Char; check Tech; check Tag | no |
| 16A | An elder residing in a | create Char(Ordinary, elderly) [if none]; check Tag \| lose Res \| use Tech | no |
| 16B | You witness an Ordinary Character | retype Char(Ordinary→an existing Righteous or Evil Char, dead or alive); create Res \| create Tech \| check Tech | no |
| 16C | You stumble upon a secret | use Tech \|\| lose 2×Tag, create Tag "Under Close Surveillance" | no |
| 17A | You lost an important item | lose Res | no |
| 17B | You apprehend a thief who | create Char; check Tag; [may] unstrike Res | no |
| 17C | A Character becomes attached to | create Tech(evasion) | no |
| 18A | You discover stories circulating about | replace Legend; lose Tag(unchecked); create Tag | no |
| 18B | The tales lead to confrontations | check Tag; create Scar | no |
| 18C | You finally confront the individual | create Char [if none]; lose Tag | no |
| 19A | A beloved Character is killed | strike Char(beloved); create Char(Evil); create Tag | no |
| 19B | You come face to face | use Tech, [may] strike Char(Evil, enemy) \|\| check Tech, lose Tag(positive) | no |
| 19C | You uncover the backstory of | check Tag | no |
| 20A | Thanks to your help, a | create ≤2×Char [if none]; lose Res; check Tech | no |
| 20B | You return to visit a | strike Char(friendly); check Tag | no |
| 20C | You come face to face | use Tech, create Scar, check Tag, [may] (strike Char(enemy) \| retype Char(enemy→neutral)) \|\| create 2×Scar, (lose 2×Res \| check 2×Tag) | no |
| 21A | You come into possession of | create Res "Human Face Mask"; create alternate Xiake per Xiake Creation (own Legends and Stories; its Techniques only ones the original would not perform); create 3×Tech, acquire all (usable only as the alternate) | no |
| 21B | A Character has uncovered your | check Tag \| lose Res | no |
| 21C | You meet the person the | [if abandon] lose Res "Human Face Mask", strike alternate identity incl. all its Legends \|\| lose 3×Res, check Tag | no |
| 22A | You uncover dark secrets about | replace Legend; create Tag | no |
| 22B | A long-lost family member resurfaces | create Char(family) \| unstrike Char(family); check Tech; lose Res \| check Tag | no |
| 22C | You find yourself caught in | check Tag | no |
| 23A | A character from an opposite | create Char [if none]; create Tech \| check Tech | no |
| 23B | You find yourself in a | check Tag | no |
| 23C | You are approached by a | create Tag "Traitor" | no |
| 24A | A beloved Character has defected | create Char [if none]; check Tech | no |
| 24B | During a battle between your | check Tech; create Scar | no |
| 24C | You attend a funeral held | strike Char; lose Res | no |
| 25A | Your mentor has chosen you | create Char [if none]; create Tech, acquire | no |
| 25B | You uncover evidence suggesting that | create Char [if none]; create Tag | no |
| 25C | During a critical mission, you | uncheck Tech(all boxes); check Tag | no |
| 26A | You uncover a plot within | check Tag; create Tech \| check Tech | no |
| 26B | During a mission, you uncover | create Res "A Spy's Confession" | no |
| 26C | In the heat of battle | check Tech; lose Res; create Scar | no |
| 27A | A fellow disciple is jealous | create Char [if none]; create Tag; check Tech | no |
| 27B | During a sparring session, you | check Tech; create Tag | no |
| 27C | A fellow disciple decides to | create Res | no |
| 28A | You survive a perilous fall | create Tech | no |
| 28B | The legendary martial art you've | retype Tech(28A)→"Evil"; check Tech; create Tag | no |
| 28C | A martial artist seeks to | use Tech, [may] strike Char, check Tag \|\| lose Tech(the 28A art), create Tag, create Scar | no |
| 29A | A close Character has been | use Tech \|\| check Tag \| lose Res | no |
| 29B | You are captured. Who is | create Char [if none]; use Tech \|\| create Scar, lose Res | no |
| 29C | You find another victim of | (no instruction; questions only — a Story is still due by R08) | no |
| 30A | You've learned an easy way | check Tag; acquire Tech | no |
| 30B | Using shortcuts to learn the | [if Tech(Acquired) is "Righteous"] retype Tech→"Evil" \|\| create Scar | no |
| 30C | Overusing an Evil Technique has | lose Res ("Destroy") | no |
| 31A | You discover a finely crafted | create Res(weapon); check Tag | no |
| 31B | While wielding the weapon, you | acquire ≤2×Tech(requiring the weapon) | no |
| 31C | As you continue to wield | create Tag; lose Tag(checked) | no |
| 32A | A person of great status | create ≤3×Char [if none]; create Res \| create Tag | no |
| 32B | Learning more about each other | lose Tag; create Tag | no |
| 32C | You spend time with a | check Tech; create Tech | no |
| 33A | You stumble upon a wanted | create Tag "Wanted" | no |
| 33B | A group of bounty hunters | lose Res \| check Tech | no |
| 33C | You encounter a stranger who | create Char; [if agree] create Res "Personal Debt", lose Tag "Wanted" | no |
| 34A | A newcomer with a nasty | create Char; check Tech | no |
| 34B | You witness the scarred individual's | [may] (lose all Tech(Unorthodox) \| check every Tech(Unorthodox)) | no |
| 34C | You come across a wanted | [if apprehend] create Res \|\| convert Char(34A)→Res | no |
| 35A | You are poisoned. Whenever you | create Res "Poison of Love" (lock: may be lost only when it is the only Resource left) | no |
| 35B | The only cure for the | [may] lose Res "Poison of Love" by create Tag "Unable to Love"; lose all Tag(love-related) | no |
| 35C | Your beloved, or someone you | check Tag | no |
| 36A | You witness a duel between | [may] strike 2×Char(non-Ordinary, opposing); create 2×Tech; create Res | no |
| 36B | Rumors begin to spread, implicating | create Tag; no-story — edit the previous Story instead | no |
| 36C | The disciples of the deceased | use Tech, check Tag \|\| lose Tag, lose Res | no |
| 37A | You save a friendly Character | check Tag; check Tech | no |
| 37B | You keep the Character hidden | create Res | no |
| 37C | Turns out, your friend did | check Tag | no |
| 38A | A close friend confides in | create Tag | no |
| 38B | A friendly Character is killed | create ≤2×Char [if none]; strike Char(friendly); create Res | no |
| 38C | Despite the circumstances, you've grown | check Tag | no |
| 39A | You receive an invitation to | create Char [if none]; create Tag | no |
| 39B | A past lover or a | [if you help] create Res, check Tag | no |
| 39C | The partner has died by | check Tech; lose Res | no |
| 40A | A beloved Character has asked | create ≤2×Char [if none]; create Res; check Tech | no |
| 40B | The partner confides in you | check Tag | no |
| 40C | The couple breaks up and | check Tag | no |
| 41A | You wake up in a | lose all Res(not on your person) | no |
| 41B | You have uncovered a lost | no-story; the next Prompt's Story replaces a Story in an existing Legend | no |
| 41C | The stories of your past | edit Song(replace all nouns) \| edit Legend(oldest) [if no Song] | no |
| 42A | You kill a family from | check Tag; check Tech(offensive) | no |
| 42B | You are haunted by the | create Tag "Haunted" | no |
| 42C | You are confronted by a | create Char [if none]; use Tech, check Tag, [may] strike Char \|\| lose Tag, lose 2×Res | no |
| 43A | You've killed your enemy. Strike | strike Char; create Char(child); check Tag | no |
| 43B | As the child grows, they | check Tech(existing) | no |
| 43C | The child has been turned | check Tag \| check Tech | no |
| 44A | You've taken in a disciple | retype Char(→your own alignment); create Char [if none]; check Tech | no |
| 44B | You've taken in another disciple | retype Char(→your own alignment); create extra Story | no |
| 44C | One of your disciples has | retype Char(disciple→enemy); create Scar; lose Tech(Acquired) [if none: lose Tech(strongest)] | no |
| 45A | You have captured and imprisoned | create Char(enemy) [if none]; check Tech; check Tag | no |
| 45B | The captured enemy is rescued | create 2×Char(enemy); lose Tag \| lose Res | no |
| 45C | Your paths cross once more | use Tech, lose Res \|\| check 2×Tag | no |
| 46A | A poet is obsessed with | create Char(Ordinary); edit Legend(negative→heroic); move Legend→Song; lose Tag(negative); create Tag | no |
| 46B | Over time, the exaggerated poems | create Song(extra, exaggerated Stories — not from an existing Legend); create Tag "Popular and Famous" | no |
| 46C | The poems have interfered with | check Tag; lose Res | no |
| 47A | You have protected an important | create Char(Ordinary) [if none]; create Res | no |
| 47B | You are welcomed into the | check Tag; create Res | no |
| 47C | The important and powerful figure | create Char(Ordinary); create Tag | no |
| 48A | You are tasked to assassinate | strike Char(royal) [if any]; create Char(royal guard); create Scar | no |
| 48B | The royal court has turned | check Tag | no |
| 48C | A nationwide search organized by | check Tech; create Tag | no |
| 49A | You win against your old | create Char [if none]; create Res \| create Tech; create Tag | no |
| 49B | You lose against your old | create Char [if none]; lose Res; lose Tag | no |
| 49C | You are prohibited from participating | check Tag | no |
| 50A | At the annual martial arts | create Char(Righteous, the Wulin leader); check Tech | no |
| 50B | The current leader of Wulin | check Tag; create Scar | no |
| 50C | You witness the current leader | [may] retype Char(leader→enemy); check Tag; lose Res(on your person) | no |
| 51A | An old enemy organizes a | lose Tech(Acquired) [if none: lose Tech(first learned)] | no |
| 51B | You are lured into a | lose Res(valuable) | no |
| 51C | A rival challenges you to | use Tech, check Tag, create Res \|\| lose 2×Tag, lose Res | no |
| 52A | The peasants in a nearby | check Tech; create Res | no |
| 52B | The government has sent officials | create Tag | no |
| 52C | All the peasants have been | lose Tag | no |
| 53A | A Character you thought dead | unstrike Char | no |
| 53B | You staged your death as | check Tag | no |
| 53C | While your scheme proves to | lose Res; lose Tag | no |
| 54A | The city is being invaded | check Tag | no |
| 54B | The city has fallen. The | strike ≥1×Char(in the city); lose all Res(Stationary, in the city) | no |
| 54C | The city manages to fight | create 2×Res; create Tag | no |
| 55A | A cult forms around your | create Char(first follower); create Tech(the cult's); create Tag(from a Legend); create Res "Loyal Cult" | no |
| 55B | As the cult expands, authorities | create Char(follower); check Tech; check Tag | no |
| 55C | Ultimately, the cult is dissolved | create Tag; lose Tag; lose Res "Loyal Cult" | no |
| 56A | The leader of Wulin (martial | strike Char(leader) [if any]; create Char(Righteous, new leader) \| appoint existing; [may] create ≤3×Char; create Res \| create Tag | no |
| 56B | The current leader of Wulin | create Char(friendly) [if none]; check Tag | no |
| 56C | You learn that the same | check Tag \| lose Res | no |
| 57A | The heir of a sect | check Tech | no |
| 57B | An heir of a sect | check Tag | no |
| 57C | You are appointed as the | create Res; check Tag | no |
| 58A | You've been kicked out of | lose all Tech; create 3×Scar | no |
| 58B | An enemy takes you in | create Char(enemy) [if none]; lose 1×Scar; create 2×Tech | no |
| 58C | Someone from your old sect | create Res | no |
| 59A | You have a child. Create | create Char(Ordinary, child) | no |
| 59B | You begin training your child | retype Char(child→your own alignment); create Tech \| check Tech; create Tag | no |
| 59C | Your child is in danger | use Tech, check Tag, [may] strike Char(enemy) \|\| lose all Tag(parenthood), create Tag "Distraught Parent" | no |
| 60A | A living character from your | check Tag | no |
| 60B | A person from your past | check Tag \| lose Res | no |
| 60C | You make a pledge to | create Tag | no |
| 61A | You and a beloved character | create Char(beloved) [if none]; create Res | no |
| 61B | You stumble into a rival | create Char(rival) [if none]; check Tag | no |
| 61C | When you are attending a | create Char(child) [if none]; lose Res \| check Tag | no |
| 62A | You've begun wearing a mask | create Tag | no |
| 62B | While wearing a mask, you | check Tag | no |
| 62C | Your identity is revealed. Is | create Tag | no |
| 63A | You've nursed a giant, mythical | lose Res; check Tech | no |
| 63B | The beast turns out to | create Res(the weapon) | no |
| 63C | The beast fights alongside you | use Tech, check Tag, create Res "Loyal Companion" \|\| lose Res | no |
| 64A | You are tasked with delivering | create Res(the artifact) | no |
| 64B | You are ambushed by a | use Tech, check Tag \|\| lose Res | no |
| 64C | Finally, you arrived at your | [if deliver] check Tag \|\| create Res, lose Res(the artifact) | no |
| 65A | A long-lost scroll containing a | [if join] create Tech, check Tag | no |
| 65B | During the pursuit, several prominent | strike ≥1×Char(non-Ordinary); check Tag; check Tech | no |
| 65C | Turns out, the technique recorded | [if Tech gained at 65A] lose that Tech, create Scar \|\| create Tag | no |
| 66A | You are accused of stealing | check Tech; create Tag "Technique Plagiarist" | no |
| 66B | Despite your efforts to prove | lose Tag(positive) | no |
| 66C | A disciple of the sect | [if accept] use Tech, check Tag \|\| create Tag "Coward" | no |
| 67A | Your trusted disciple has betrayed | create Char [if none]; create Tag | no |
| 67B | Over time, your once-promising disciple | retype Char(disciple→Evil) \| create Char(Evil); check Tag | no |
| 67C | Your disciple meets their end | strike Char(disciple); check Tech; check Tag | no |
| 68A | You experience great pain, losing | uncheck Tech(Acquired; "clear all progress") | no |
| 68B | The pain does not stop | lose Tech(Acquired); create Res "Unbearable Pain" | no |
| 68C | You committed something despicable during | create Tag \| create Res; [may, later] lose Res "Unbearable Pain" when the act is repeated | no |
| 69A | A beloved Character falls ill | (no instruction; questions only — a Story is still due by R08) | no |
| 69B | There is only one of | create Char [if none]; [if refuse] retype Char→enemy, lose Res, check Tag \|\| create Tag, strike Char(beloved) | no |
| 69C | A few close companions of | check Tag | no |
| 70A | You return to your home | strike all Char(living, from your village); create Tag; create Res | no |
| 70B | You arrive at another village | create Char; use Tech(healing) \| lose Res | no |
| 70C | Turns out the individual who | use Tech, [may] strike Char, check Tag \|\| create Scar, check Tag, lose Res | no |
| 71A | Practicing a certain Technique has | edit Char(swap the descriptions of 3, dead or alive); check Tech | no |
| 71B | Your personality and morals are | replace 2×Tag(checked) with their opposites; check Tech | no |
| 71C | Your memories and mental state | select 1×Char(struck) (narrative); create Tag | no |
| 72 | You battled against your old | end | **yes** |
| 73 | You leave jianghu forever, living | end | **yes** |
| 74 | Martial arts have been outlawed | end | **yes** |
| 75 | You are poisoned by an | end (references Res "Poison of Love" narratively) | **yes** |
| 76 | You died in a battle | end | **yes** |
| 77 | After a long life, you | end | **yes** |
| 78 | You died protecting a young | end (narratively passes a Res or Tech to the child) | **yes** |
| 79 | You've gone completely mad after | end | **yes** |
| 80 | You disappeared after falling down | end | **yes** |

### 4.4 Named Tags and Resources (known)[^prompts-txt]

```yaml
named_tags:      # 13
  - { name: "Cursed Star", created: 1A }
  - { name: "Revengeful", created: 1B }
  - { name: "Tainted Keeper", created: 8C }
  - { name: "Thief", created: 12A }
  - { name: "Under Close Surveillance", created: 16C }
  - { name: "Traitor", created: 23C }
  - { name: "Wanted", created: 33A, lost: 33C }
  - { name: "Unable to Love", created: 35B }
  - { name: "Haunted", created: 42B }
  - { name: "Popular and Famous", created: 46B }
  - { name: "Distraught Parent", created: 59C }
  - { name: "Technique Plagiarist", created: 66A }
  - { name: "Coward", created: 66C }
named_resources: # 9
  - { name: "Malnourished", created: 3A }
  - { name: "Wild Beast", created: 8A, lost: 8C }
  - { name: "Human Face Mask", created: 21A, lost: 21C }
  - { name: "A Spy's Confession", created: 26B }
  - { name: "Poison of Love", created: 35A, lost: 35B, referenced: 75, lock: only-when-last-resource }
  - { name: "Personal Debt", created: 33C }
  - { name: "Loyal Cult", created: 55A, lost: 55C }
  - { name: "Unbearable Pain", created: 68B, lost: 68C }
  - { name: "Loyal Companion", created: 63C }
```

### 4.5 Frequency of operations (known; counted over the 222 entries)[^prompts-txt]

"Check a Tag" appears in 54 entries; "Check a Technique" in 25; "Lose a
Resource" in 14; "Use a Technique" in 19; "Alternatively" (a second branch)
in 19; conditional creation ("if none / if needed / if necessary / if
applicable") in 43; "Strike off / out" or "Scratch off" in 15; "Acquire" in
9; "Unstrike" in 1; "Uncheck" in 1; "Stationary" in 1 (54B); "Scar" in 17;
"Legend" in 8; "Song" in 3; "Story" in 3. The word "Orthodox" (capitalised)
never appears in the Prompts; "Unorthodox" appears in 4 entries, "Evil
Technique" in 3 and "Righteous Technique" in 1 (§5, note C).

### 4.6 Operations the Prompts demand that the rules chapter never defines (known; the list is the Factor's)

An engine written from pages 5–24 alone would be unable to execute these:

- **Unstrike** a Character (22B, 53A) or a Resource (9C, 17B) — the rules
  only promise that struck traits "may be restored" (R06, R23).
- **Retype** a Character (11B, 13C, 16B, 44A, 44B, 59B, 67B) and merge an
  Ordinary Character into an existing struck or living one (16B).
- **Convert** a Character into a Resource (34C).
- **Uncheck / clear** a Technique's boxes (25C, 68A); **acquire** outright
  (25A, 30A, 31B, 21A); lose "the strongest" or "the first learned" (44C,
  51A) — needs an order and a player judgment.
- **Remove a Scar** (58B).
- **Replace or edit a Legend** (18A, 22A, 46A), edit a Song's nouns (41C),
  move a Legend to a Song by instruction (46A), create a Song with no
  parent Legend (46B).
- **Story overrides**: no new Story and edit the previous one (36B); no
  Story now and the next Prompt's Story replaces one in an existing Legend
  (41B); an extra Story (44B).
- **Whole-sheet operations**: an alternate identity with its own Legends
  and three pre-acquired Techniques (21A, 21C); lose all Techniques (58A);
  lose all Resources not on the person (41A); lose all Stationary
  Resources in a place (54B); strike all Characters of a place or family
  (1A, 70A).
- **Locks and deferred effects**: "Poison of Love" lost only when it is
  the last Resource (35A); "Unbearable Pain" may be lost on a later
  repetition of an act (68C).
- **Player-judged selectors** the engine cannot evaluate: positive /
  negative Tag, love- or parenthood-related Tag, "opposites" of Tags (71B),
  beloved / friendly / enemy / rival Character, offensive / healing
  Technique, a Resource "on your person" or "in the city".

## 5. Discrepancies between the Spark's rules summary and the sources

The Spark's summary is largely faithful. Every point was checked; these are
the differences, from material to cosmetic.[^rulebook][^oracles][^prompts-txt]

- **A. The oracles PDF is described as one set of Cantonese tables; it is two parallel sets.** Pages 1–16 are Cantonese, pages 17–32 repeat every table in Mandarin romanisation (same characters, same structure). The Spark's list also omits the Weapon table, the six weapon-naming component tables, the Technique-type table and the five technique-naming component tables, the creature prefix/suffix tables, sect description, landscape feature, seasons/natures and the suffix table (§6).
- **B. "Every answered Prompt creates one Story."** The rulebook qualifies this: "Unless stated otherwise" (R08). Prompts 36B and 41B say not to record a Story; 44B adds an extra one. The engine's default must be overridable per entry.
- **C. Technique types.** The Spark and the rulebook say Orthodox / Unorthodox (R30). The Prompts never use "Orthodox"; 28B and 30B speak of a "Righteous Technique" and turning a Technique into an "Evil Technique". The book does not say these are the same two types. Reading them as Orthodox/Unorthodox is inferred.
- **D. Using a Technique with none Acquired.** The Spark follows page 15 (use an Unacquired one, lose it after). Page 20 restates the case differently: resolve the Prompt's listed consequences, "alternatively, you may lose an unacquired Technique" — the second reading drops the "use" and keeps only the loss. The two pages are not contradictory but are not identical; an engine must pick one reading (or offer both).
- **E. Xiake creation.** The Spark lists "a birth Story … one Story in each of the five Legends". The book's sequence has a distinct second Story written from the three Tags ("the very first reputation", R43) and then three Stories from traits (R46). The end state the Spark gives is correct; the order and the Tag-Story step are missing.
- **F. Entry letters.** The Spark says "entries A/B/C". The book has no letters; A/B/C are the text file's labels (§4.1). Cosmetic, but a site that shows letters shows something the book does not.
- **G. Characters "struck out only when a Prompt kills them".** True for killing (R29), but Prompts also strike for non-death reasons — 21C strikes an alternate identity, 71C selects an already-struck Character — and unstrike (22B, 53A). "Struck" and "dead" should not be the same field.
- **H. "The player may skip a Prompt."** The book's wording is narrower and wider at once: skip "if there are topics that are uncomfortable" (R03), and separately "feel free to modify the Prompt" (R59). No general skip is granted, and modification is.
- **I. Rulebook page map.** "PDF pages 5–24 are the rules; Prompts start at PDF page 25" is correct. The Spark does not mention that pages 105–136 are the oracles again (the oracles PDF is an extract) or that pages 1–4 are cover, half-title, blank and credits.
- **J. Content warnings.** The Spark says "death, abuse, self-harm"; the book says "self destructive acts, having body alterations, being ill, or being in vulnerable positions" and names children and animals as possible victims. Close paraphrase; the book's list is longer.
- Everything else in the Spark's summary — six traits plus Songs, five Legends of three Stories, four Songs, Tag check-once and strike, Stationary and recoverable Resources, Character fields and types, Technique fields and box counts, Scars, struck traits kept readable, three Tags / three Resources / ≥3 Characters, d10 − d6 with zero repeating and clamping at 1, first/second/third entry then skip, Tag↔Resource substitution only, the two game-over conditions, Quick and Journaling modes, loose time and the childhood guidance, the 213 + 9 entry count — **matches the sources**.

## 6. Oracle inventory

Every table in the oracles PDF. Pages are oracles-PDF pages; the same page
in the rulebook is +104. The Mandarin half (pages 18–32) mirrors the
Cantonese half (2–16) table for table with identical dice, entry counts and
prose, differing only in romanisation; it is listed once with both page
numbers. **Kind**: `lookup` = roll and read one entry; `composition` = the
book gives a procedure combining several tables. Contents are not copied.[^oracles]

| Pages (Cant. / Mand.) | Table | Roll | Entries | Kind | Notes |
|---|---|---|---|---|---|
| 1 / 17 | Section title "Oracles — Cantonese / Mandarin" | — | — | — | not a table |
| 2 / 18 | Surnames | d100 | 100 (romanisation + Chinese character; some rows give several spellings) | lookup | prose: surname precedes given name; a Cantonese surname implies a Cantonese given name |
| 3–5 / 19–21 | Given Names (1–32, 33–66, 67–100) | d100 per column | 3 columns × 100 = 300 (Given Name A, Given Name B, Given Name (Two Characters)) | composition | combine any A + B, repeat a character, or take column C; prose on generation naming (p4) and given names carrying another surname (p5) |
| 6 / 22 | Ordinary Character Role | d100 in bands of 3 (1–3 … 95–97), 98–100 "Roll Twice" | 33 roles + reroll | lookup | English + Chinese |
| 7 / 23 | Location Name | d10 | 10 | lookup | village, town, city, country/kingdom, island, forest/woods, mountain, river, lake, sea |
| 8 / 24 | Plant | d10 | 10 | lookup | location-naming component |
| 8 / 24 | Color | d10 | 10 | lookup | |
| 8 / 24 | Direction | d10 | 10 | lookup | |
| 8 / 24 | Descriptor | d10 | 10 | lookup | |
| 8 / 24 | Nature | d10 | 10 | lookup | |
| 8 / 24 | Location composition | — | — | composition | procedure: roll Location Name, then one or two of the five component tables |
| 9 / 25 | Naming Custom (sect) | d6 | 6 | composition entry point | each result points to one of the six numbered tables below |
| 9 / 25 | Suffix (Cantonese) | d10 | 10 | lookup | organisation type (school, gang, cult, palace…); prose on what each suffix implies; the Mandarin page keeps the heading "(Cantonese)" |
| 10 / 26 | 1. Item — Prefix + Item | d10 + d10 | 10 + 10 | composition | |
| 10 / 26 | 2. Creature — Prefix + Suffix + Animal | d10 + d10 + d10 | 10 + 10 + 10 | composition | choose either a prefix or a suffix around the animal |
| 11 / 27 | 3. Sect Description — Prefix + Noun | d10 + d10 | 10 + 10 | composition | |
| 11 / 27 | 4. Landscape Feature — Prefix + Feature | d10 + d10 | 10 + 10 | composition | may also name the sect after a location |
| 12 / 28 | 5. Seasons and Natures — Noun + Verb + Descriptor | d10 + d10 + d10 | 10 + 10 + 10 | composition | choose either a verb or a descriptor with the noun |
| 12 / 28 | 6. Sect's Technique — Prefix + Technique | d10 + d10 | 10 + 10 | composition | |
| 13 / 29 | Weapon | d100 in bands: 1–10, 11–20, 21–30, 31–40, then 41–45 … 96–100 (5 wide) | 16 | lookup | prose on weapon naming; no rule for names |
| 14 / 30 | Material | d10 | 10 | lookup | weapon-naming components (the group has no heading of its own) |
| 14 / 30 | Color | d10 | 10 | lookup | identical to the page 8 Color table |
| 14 / 30 | Animal | d10 | 10 | lookup | differs from page 10's Animal table |
| 14 / 30 | Descriptor | d10 | 10 | lookup | differs from page 8's Descriptor |
| 14 / 30 | Verb | d10 | 10 | lookup | |
| 14 / 30 | Noun | d10 | 10 | lookup | |
| 15 / 31 | Technique (type) | d100 in bands: 1–10, 11–20, 21–30, 31–40, 41–51, 52–58, 59–65, 66–72, 73–79, 80–86, 87–93, 94–100 | 12 | lookup | internal skill, sword, saber, spear, staff, hidden weapon, whip, fist, palm, finger, claw, leg; prose on internal vs external |
| 16 / 32 | Style | d10 | 10 | lookup | technique-naming components |
| 16 / 32 | Descriptor | d10 | 10 | lookup | a third Descriptor table |
| 16 / 32 | Verb | d10, two unnumbered columns | 20 | lookup | how the second column is rolled is not stated (§8) |
| 16 / 32 | Body Parts | d10 | 10 | lookup | |
| 16 / 32 | Noun | d10 | 10 | lookup | a second Noun table |
| 16 / 32 | Technique composition | — | — | composition | procedure: roll or choose the Technique type (p15), then roll 1–3 of the five tables and combine; Verb + Body Parts recommended together |

Tally (the Factor's count): **42 rolled tables per half, 84 in the
document**, plus 5 composition procedures per half. Dice used: d100 (5
tables per half: surnames, given names ×3 columns counted as one table with
three rolls, roles, weapon, technique type), d6 (1), d10 (all others). Every
d10 table has exactly 10 entries; no table has an uneven band except the
Ordinary Character Role's 85–88 (four wide where the others are three) and
the Technique table's uneven bands, both as printed.

## 7. Looked for and not found

Each item names what was searched and how.

- **Licence, copyright or permission terms.** Searched the full extracted
  text of both PDFs and the text file for: `copyright`, `©`, `licen`,
  `all rights`, `creative commons`, `permission`, `ISBN`, `itch`,
  `drivethru`, `www.`, `http`, `@`. No hits except the word "Switch" inside
  Prompt 71A. Checked the PDF metadata: Title, Author, Subject and Keywords
  are all empty; Creator/Producer "Scribus 1.6.1"; CreationDate
  2025-01-19. Rendered and looked at PDF pages 1–4 (cover, half-title,
  blank, credits) and the final page (136, the last oracle table — there is
  no back cover). The only attribution anywhere is the credits page: the
  author's roles, thanks, the inspiring authors, and "Based on 'Thousand
  Year Old Vampire' created by Tim Hutchings".[^rulebook][^oracles][^prompts-txt]
  **Nothing in the three files states terms of use for the Prompts, the
  oracles, or the system.** The operator's first open question stays open
  and is not answerable from these sources.
- **A character or record sheet.** Searched the rulebook text for
  `sheet`, `record`, `spaces provided`; the hits are page 6 ("record your
  Xiake's character sheet", "write in this book in the spaces provided")
  and page 7 ("keep the struck out trait on the character sheet"). Checked
  every page's word count for an image-only page that could be a sheet:
  only pages 1–3 and the oracle title page have under ten words, and all
  four were rendered and viewed — cover, half-title, blank, section title.
  **The rulebook contains no record-sheet page and no layout to copy.**
  The "spaces provided" are, from the rendered Prompt 1 page, the white
  space between the three entries on each Prompt page.[^rulebook]
- **A table of contents, index, edition or version number, publication
  date, or print/PDF distinction.** None in the text of either PDF; the
  only dates are the PDF CreationDate stamps (two minutes apart, both
  2025-01-19).[^rulebook][^oracles]
- **Rules the Spark or an engine would want that the book does not state:**
  an upper movement bound (I-1 shows none is needed); what to do when a
  skip lands on another exhausted Prompt (I-2); whether a zero roll or a
  clamp counts as a landing (I-3); whether "Evil / Righteous Technique"
  means Unorthodox / Orthodox (§5 C); what "opposite" of a Tag means (71B);
  how a Song "with exaggerated stories" that has no parent Legend counts
  against the four-Song limit (46B); whether an alternate identity's
  Legends count against the five slots (21A). Searched pages 5–24 and the
  summary for each; none is addressed.
- **Any statement of the number of Prompts (80).** The rules never say how
  many Prompts there are; the count is read off the pages.

## 8. Could not be verified

- **The U+001B control characters** in the rulebook's Prompt pages (three
  per page for 1–71, one for 72–80) sit where the book's entry layout
  begins. Whether they encode a glyph, a marker or nothing is not
  determinable from text; the rendered Prompt 1 page shows no visible
  marker, only spacing.
- **The Verb table on oracle pages 16/32** prints two columns of ten under
  one set of numbers 1–10. Whether it is meant as d10-then-choose-a-column
  or as twenty entries is not stated. The Verb/Descriptor pair on page 12
  is the same layout, but there the prose says "choose either a Verb or a
  Descriptor"; page 16 has no such line.
- **Oracle table typography.** Several cells carry evident typos or
  unusual romanisations ("beautifull", "youthl", "Fei New", "Yuen Mo …
  snaker"); they are reported here only so that a transcription is not
  "corrected" silently — no content was copied.
- **Illustrations** were not inventoried; nothing suggests any carries
  rules text (all rules text extracts cleanly), but this was not proven
  page by page beyond the seven pages rendered.
- **The Mandarin half** was verified structurally (headings, dice bands,
  entry counts and prose match the Cantonese half line for line once
  romanisation is set aside) but its romanisations were not proof-read.
- **Author attribution** for the text file is inferred from the two PDFs;
  the file itself carries only the heading "Rivers and Lakes Prompts".

[^rulebook]: Rivers and Lakes rulebook, `reference/rivers_and_lakes.pdf`, 136 PDF pages (Wym Lawson; Scribus 1.6.1; CreationDate 2025-01-19).
[^oracles]: Rivers and Lakes Oracles, `reference/rivers_and_lakes_oracles.pdf`, 32 PDF pages, identical to rulebook pages 105–136.
[^prompts-txt]: Rivers and Lakes Prompts, `reference/rivers_and_lakes_prompts.txt`, 222 entries, verified word for word against rulebook pages 25–104.
