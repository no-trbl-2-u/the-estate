# Portfolio Scoring

The tank is a portfolio, not a workbench. The score exists to answer
"what should I work on next?" with **zero reasoning** — it is computed from
structure, never from an LLM's judgment of quality.

## Decided orientation

**Optimize for noticing, not finishing.** (T, locked, interview Q9.)
The operator starts things easily; the system's leverage is in what the
operator cannot do alone — holding the whole tank in mind at once.

## Signals

| Signal | Computation | Role |
|---|---|---|
| **Reachability** | Of the Seed components this record is missing, how many would the single best next verb fill? Higher = one session moves it a lot. | Primary rank. Favors early, high-leverage ideas over nearly-done ones, so raw Sparks are not permanently outranked. |
| **Appetite** | Hand-set heat (`appetite:` in record frontmatter, 0–3). The one input no metric can compute. | Multiplier. |
| **Staleness at the threshold** | Days a record has sat within one verb of Seed-shape. | Surfaced as a call-out, not a rank: "this has been one session from a Seed for four months." |
| **Convergent notices** | Candidate `relates` edges, duplicate-idea suspicions, dead-Spark-fits-live-record matches. | Surfaced above the ranking. The highest-value output of a portfolio pass. |
| **Drift** | Distance between current framing and the original Spark. | **Display only, never scored.** Drift usually means the idea is working; a record that never moved from capture is more often the dead one. |

## What the score must never do

- Rank "closest to done" first by default — that builds a finishing machine
  and buries raw ideas by tidiness.
- Convert a suggestion into work. The Steward shows the shelf and may point;
  the operator picks.
