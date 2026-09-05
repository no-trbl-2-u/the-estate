---
id: idea-0003
title: "Martial Havoc, mobile edition"
created: 2026-09-05
state-head: state/0010.md
status: active
appetite: 2
relates: [idea-0002]
---

# Martial Havoc, mobile edition

## Origin

<!-- The prompt or context that initiated this idea, verbatim. Never edited. -->

Arrived 2026-09-05 as "bring the rulebook into idea estate, then pass the
prompt to `/start`" — "the prompt" being the text T asked for one turn
earlier ("Look at the files inside Martial Havoc and write me a prompt I can
pass to /start to start the idea to create a 'Martial Havoc' mobile game (so
full mechanics will need to be implemented) where the first adventure is
'The 5 treasures' (the other pdf)"), drafted from the two PDFs in
`no-trbl-2-u/martial-havoc` and adopted by T as their own words. With the
same word T had the rulebook and the adventure copied into this record's
`sources/`. The prompt, verbatim:

> New idea. Root `ideas/`, no project. You have my word to create the record and to run `capture` inline from the words below, verbatim.
>
> Title: Martial Havoc, mobile edition
>
> ## The idea
>
> I want to build a mobile game version of Martial Havoc, the rule-light d6-only solo wuxia RPG by Gianluca Monaco (a hack of Heroic Havoc, Ruolatori Solitari). The phone is the Master's sheet, the dice, the oracle and the Game Master. The full mechanics are implemented: character creation, actions, combat, multiple combat, escape, healing, experience and advancement, exploration, market, oracle, encounters, opponents, treasures. The first adventure shipped is "The 5 Treasures": Flat-top mountain, the Lotus Flower cave, Senior King Gold Horn and Junior King Silver Horn, five magic treasures.
>
> ## Source of truth
>
> Repo `no-trbl-2-u/martial-havoc`, two files:
>
> - `MH_Full_Itchio.pdf`, 94 pages, the rulebook. Printed sections: Introduction 3, Master creation 5, Actions 22, Combat 23, Multiple Combat 30, Escape 30, Healing 31, Experience and Advancement 34, Adventures 36, Exploration 42, Market 52, Oracle 58, Encounters 66, Opponents 70, Filmography 80, Appendix A open system 81, Appendix B Cinematic Journey (three-act structure) 81, Appendix C eight pre-generated Masters 91 (images only, no extractable text), License 93.
> - `The 5 treasures.pdf`, 2 pages, the adventure: premise, per-area event table, eight areas each with description, encounter table and hint, nine opponent stat blocks with loot, the five treasures and their effects, a cave map (image only).
>
> Those files are the rules. Where my summary below and the files disagree, the files win.
>
> Both files are Creative Commons Attribution-ShareAlike 4.0. Writing by Gianluca Monaco; cover and chapter art by Cristian Cammarata; adventure icons by limofeus, cave map by watabou.
>
> ## The rules the game must enforce (my reading of the rulebook)
>
> - A Master has SKILL (1d6+6), ENDURANCE (2d6+12), LUCK (1d6+6), a name and age, one Martial Art, Martial Proficiencies, optional Techniques and Rituals, equipment, XP. ENDURANCE at zero means death or unconsciousness.
> - Eighteen Martial Arts on a d66 table, each with its own Proficiencies (three each; Wu Xing Quan has the five animals, Cult of the Great Immortals has four). Proficiency points to spend equal SKILL; no Proficiency above 4 at creation. Fighting or acting without the matching Proficiency is allowed with no bonus.
> - Training: at creation, each SKILL point sacrificed permanently buys 4 resource points for Techniques and Rituals, without reducing the Proficiency pool. Thirty-six Techniques and thirty-six Rituals on d66 tables, each with a cost of 1 to 4. Techniques are immediate and usable in combat; Rituals need preparation. Using one costs that many ENDURANCE.
> - Starting kit: common clothing, a weapon, a Health Elixir or a Market item under 20 GP, gold by social status (1d6: Vagabond 1, Poor 1d6-1, Middle Class 3d6, Rich 5d6+6, Noble 10d6).
> - SKILL check: 2d6 at or under SKILL plus relevant Proficiency. LUCK check: 2d6 at or under LUCK, and LUCK drops by 1 after every LUCK check regardless of outcome.
> - Combat round: both sides roll Attack Strength = 2d6 + Proficiency + SKILL. Higher side wins. If the opponent wins, the Master loses the difference from ENDURANCE. If the Master wins, choose one: deal the difference, use a Technique, change or recover a weapon, or create an Opening. Combat ends on a Final Blow, ENDURANCE at zero on either side, or an Unexpected Event.
> - Opening then Final Blow: roll 2d6, doubles land. A landed Final Blow offers a new Technique: roll against LUCK, fail loses 1 LUCK, success assigns a value 1 to 4 and a name from the d66 Action, Attribute, Animal table.
> - A tie in Attack Strength is an Unexpected Event: 2d6 table from adverse divine intervention (2) to favorable divine intervention (12), with reinforcements on 7 and the fight resuming on 6 and 8. Combat phase ends. Deities on a d66 table. Optional Minions rule: ENDURANCE 1, one removed per hit.
> - Opponents never spend ENDURANCE for Techniques or Rituals; their Proficiency value adds to their Attack Strength. Spirits and ghosts are immune to ordinary weapons and blows.
> - Multiple combat: SKILL reduced by the number of opponents. An opponent's ATTACK value is how many of them attack at once. Area Proficiencies (Double Strike) spread the same damage across enemies.
> - Escape: without a Technique or stratagem, take a last blow of 2 ENDURANCE. One Dishonor Point per escape that took damage.
> - Healing: SKILL restored 1 by spiritual regeneration, fully by a night's rest. ENDURANCE restored 4 by a healing Technique, spiritual regeneration, a meal or a Health Elixir, fully by a week's rest. LUCK restored 1 by a Spirituality check at a Temple with incense.
> - Advancement: at the end of each adventure score Mission Success, Use of equipment and environment, Combat spectacularity, Lateral thinking, each 1 to 3, minus Dishonor Points. XP costs depend on the SKILL band (6 or less, 7 to 9, 10 to 12): Proficiency 6/8/10, SKILL 8/10/12, ENDURANCE 4/4/4, LUCK 10/8/6, Training 10/8/6. SKILL and LUCK cap at 12; Proficiencies may exceed 4 after creation. Unspent XP carries over.
> - Thirty-six adventure hooks on a d66 table.
> - Exploration: region generated by throwing d6 onto a map (Location, Landmark, Resources, Risk, Event columns), route type 2d6, road features 1d6 (inn, rope bridge, guard post), monastery generation (Location, Function, Openings, Atmosphere, Event), an Event roll on every move or new scene, encounter resolution through the Oracle.
> - Cities: Gambling House (bet resolved by 2d6 + LUCK against the Dealer's 2d6 + SKILL, no LUCK loss, a fight if you cannot pay), Temple, Central District, Market, City Walls, Hutong, Chaguan (Concentration check, then 2d6 doubles to win, failed check costs 1 ENDURANCE), a services price list and a d66 city-encounter table (connection and trait).
> - Market: 1 GP is 10 SP; common items, weapons, expedition equipment, armor. Weapons and armor never touch the dice; a missing weapon forfeits the armed Proficiency bonus; expedition items gate actions (no rope, no climbing).
> - Oracle: a 1d6 table with rows for closed question, outcome, NPC reaction, creature reaction, encounter outcome, enemy type, number of enemies, enemy attack, door, object amount, value. Inspirations: Action and Theme d66 tables. Sparks: six d66 word tables.
> - Encounters: 2d6 across five columns (Urban, Non-urban, Water, Supernatural, Monastery). Treasure: 1d6 against the opponent's ENDURANCE band (up to 16, 17 to 19, 20 or more). Special Items: 2d6 table of eleven items.
> - Opponents: forty-five stat blocks of SKILL, ENDURANCE, ATTACK and two Proficiencies.
> - Appendix B, Cinematic Journey: an optional three-act frame for a 90-minute adventure. Guidance, not law: ignore dice that would lower tension toward a plot point.
>
> ## The first adventure the game must ship (my reading of The 5 Treasures)
>
> - On entering any area roll 1d6: 1 Ambush, 2 to 3 Encounter, 4 to 5 Safe exploration, 6 Hint. Ambush and Encounter roll on the area's own encounter table.
> - Eight areas: Flat-top mountain, Cave entrance (gate painted 蓮花洞), Attendants room, Dining Hall, Storage room, Women quarter, Kitchen, Chieftain quarter. Each carries a description, an encounter table and a hint revealed only on a Hint result or when the Master learns of the area. The Private Quarters are locked; the key drops from the Dexterous Ghost or the Skillful Beast.
> - Nine opponents with SKILL/ENDURANCE/ATTACK, special skills with values, and loot: Devil servant 5/7/1, Dexterous Ghost 7/8/1, Junior King Silver Horn 9/15/1, Monk 4/5/1, Ogre 6/13/3, Old Vixen 8/5/1, Senior King Golden Horn 9/18/4, Skillful Beast 7/13/5, Woodgatherer 5/8/5.
> - Five treasures with effects: gold and red gourd (open swallows the sky, day to night), Dazzling Golden Cord (spell ties, spell unties, uncuttable), vase of muttonfat jade (call a name, a reply traps them), Plantain Fan (inextinguishable magic fire waves), seven-star sword (indestructible, blocks stronger enemies for free).
> - The Monk in the kitchen pool is a prisoner to be rescued, not an enemy by default. The Old Vixen knows the cord's spells. The Chieftain's papers explain two treasures.
>
> ## Constraints I already hold
>
> - Functional style: pure functions over immutable game state. The rules engine is data in, data out, dice as an injected source so every rule is testable with fixed rolls. The UI is a thin layer over it. No classes.
> - Explicit code comments and documentation for every function, from the lowest abstraction upward.
> - Fully playable offline with no account and no server. Runs without any external service.
> - CC BY-SA 4.0 attribution to Gianluca Monaco and the artists ships inside the game.
>
> ## Open questions I want on the record
>
> 1. Platform and stack. Which mobile targets (iOS, Android, both), and native, React Native, or an installable web app. I have not decided; do not assume from any other project in the estate.
> 2. Scope of "full mechanics" for the first release: the whole rulebook including sandbox exploration, region generation and the thirty-six adventure hooks, or the rulebook's engine with The 5 Treasures as the only playable content and the sandbox later.
> 3. How the game handles what the book leaves to the player's imagination: Oracle interpretation, Technique effects described only in prose, Unexpected Events, Cinematic Journey plot points. Automated narration, player-typed journal, menu choices, or a mix.
> 4. ShareAlike reach. The rules text and tables in the app are clearly derivative and CC BY-SA; does the licence reach the game's source code, and is that acceptable.
> 5. Images: the cave map and the eight pre-generated Masters exist only as images. Extract, redraw, or omit from the first release.
> 6. Should the two PDFs be promoted into the estate's own `reference/`, or stay a `research` source in their repo.
> 7. Relation to idea 0002 (Rivers and Lakes, web edition): a hand-authored `relate` edge, a shared engine, or nothing.
> 8. The Devil servant's loot on a roll of 6 is an icon in the PDF with no text. Needs a reading.
>
> ## Tensions
>
> - A rule-light game that is "intentionally ambiguous to encourage player interpretation" against a mobile game whose code must resolve every ambiguity.
> - An open sandbox (dice-thrown regions, oracles, thirty-six hooks) against a single authored first adventure with fixed areas and tables.
> - The book's advice against ending fights with Techniques, and its "greatest power is to refrain", against a game that must either enforce that or leave it as text.
>
> ## What I want from this session
>
> Create the record, capture this verbatim as the Spark, then propose the route. My expectation: `research` over the two PDFs (a dispatch; I give the word now), producing Findings that inventory every rule, table, Martial Art, Technique, Ritual, opponent, item and adventure area in machine-readable form, with every ambiguity the engine will have to decide listed, then `frame`. Push back if you see a better order.

## Tensions

<!-- Unresolved conflicts and COMPETING FRAMINGS — two live readings pulling
     against each other. Distinct from open questions, which await an answer;
     a tension awaits a choice, and may never be resolved at all. -->

**A rule-light game that is "intentionally ambiguous to encourage player
interpretation" against a mobile game whose code must resolve every
ambiguity.** One reading: the book's gaps are the design, and a game that
fills them has replaced the author's judgment with the programmer's. The
other: a phone cannot shrug; every Technique effect, Oracle reading and
Unexpected Event must resolve to something the engine does.

**An open sandbox against a single authored first adventure.** One reading:
Martial Havoc *is* the dice-thrown regions, the oracles and the thirty-six
hooks, and The 5 Treasures is one evening inside that. The other: a first
release that ships the sandbox ships nothing finished, and the adventure's
fixed areas and tables are the only content a player can actually complete.

**The book's advice against ending fights with Techniques, and "the greatest
power is to refrain", against a game that must either enforce that or leave
it as text.** One reading: enforce it, and the game teaches the style. The
other: it is advice to a solo player about their own fun, and a rule the
engine imposes is no longer advice.
