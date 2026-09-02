// The visual vocabulary, verbatim from the approved design.
// Shape carries the type; colour only carries the family.

export interface Glyph {
  accent: string
  gfill: string
  gborder: string
  gradius: string
  gclip: string
}

export const TYPE: Record<string, Glyph> = {
  Spark: { accent: '#33423E', gfill: '#33423E', gborder: 'none', gradius: '50%', gclip: 'none' },
  Framing: { accent: '#2E6A63', gfill: '#2E6A63', gborder: 'none', gradius: '0', gclip: 'none' },
  Horizon: { accent: '#2E6A63', gfill: '#2E6A63', gborder: 'none', gradius: '12px 12px 0 0', gclip: 'none' },
  Trajectory: { accent: '#2E6A63', gfill: '#2E6A63', gborder: 'none', gradius: '0', gclip: 'polygon(50% 0,100% 100%,0 100%)' },
  Phase: { accent: '#5E9B93', gfill: '#5E9B93', gborder: 'none', gradius: '0', gclip: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' },
  Findings: { accent: '#5E6E69', gfill: 'transparent', gborder: '2px solid #5E6E69', gradius: '50%', gclip: 'none' },
  Appraisal: { accent: '#5E6E69', gfill: '#5E6E69', gborder: 'none', gradius: '0', gclip: 'polygon(50% 100%,100% 0,0 0)' },
  Decision: { accent: '#5E6E69', gfill: '#5E6E69', gborder: 'none', gradius: '0', gclip: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' },
  Brief: { accent: '#8A6A1F', gfill: 'transparent', gborder: '2px dashed #8A6A1F', gradius: '2px', gclip: 'none' },
  Seed: { accent: '#8A6A1F', gfill: 'transparent', gborder: '3px solid #8A6A1F', gradius: '50%', gclip: 'none' },
}

export const TYPE_ORDER = ['Spark', 'Findings', 'Framing', 'Horizon', 'Trajectory', 'Phase', 'Appraisal', 'Decision', 'Brief', 'Seed']

// Grounds census band colours (colour carries the family)
export const BANDC: Record<string, string> = {
  Spark: '#33423E',
  Findings: '#8E948C',
  Framing: '#2E6A63',
  Horizon: '#3F7D76',
  Trajectory: '#5E9B93',
  Phase: '#8FBDB6',
  Seed: '#8A6A1F',
}

// Glyph rationale per type — design copy about the mark itself, not the data.
export const TYPE_GLYPH_NOTES: Record<string, string> = {
  Spark: 'A filled dot — nothing derived it.',
  Framing: 'The square: the ground you build on.',
  Horizon: 'A dome on a line.',
  Trajectory: 'Broad at the base, one point.',
  Phase: 'A diamond, because it subdivides.',
  Findings: 'Hollow with a rim — the only type that rots on a date.',
  Appraisal: 'The inverted triangle: weight brought to a point.',
  Decision: 'A diamond sealed.',
  Brief: 'Dashed square — the early exit.',
  Seed: 'A ring: the only thing that leaves.',
}

export const VIEW_GLYPHS: Record<string, Omit<Glyph, 'accent'>> = {
  grounds: {
    gfill: '#5E6E69',
    gborder: 'none',
    gradius: '0',
    gclip: 'polygon(0 40%,25% 40%,25% 100%,0 100%,0 40%,37% 40%,37% 15%,62% 15%,62% 100%,37% 100%,37% 40%,75% 40%,75% 55%,100% 55%,100% 100%,75% 100%)',
  },
  household: { gfill: '#5E6E69', gborder: 'none', gradius: '50%', gclip: 'none' },
  types: { gfill: '#5E6E69', gborder: 'none', gradius: '0', gclip: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' },
  survey: { gfill: 'transparent', gborder: '1.4px dashed #87938C', gradius: '1px', gclip: 'none' },
  relates: { gfill: 'transparent', gborder: '1.4px dashed #87938C', gradius: '50%', gclip: 'none' },
  exports: { gfill: 'transparent', gborder: '3px solid #8A6A1F', gradius: '50%', gclip: 'none' },
  how: { gfill: '#5E6E69', gborder: 'none', gradius: '0', gclip: 'polygon(12% 0,100% 50%,12% 100%)' },
  settings: { gfill: 'transparent', gborder: '1.4px solid #5E6E69', gradius: '50%', gclip: 'none' },
}

export const C = {
  page: '#DFE0D8',
  panelBg: '#F3F4EE',
  contentBg: '#EAEBE4',
  sidebarBg: '#E3E4DB',
  dampBg: '#D7D8CF',
  border: '#C8CCC0',
  borderLt: '#DDDFD5',
  ink: '#16211F',
  inkMid: '#33423E',
  inkSoft: '#5E6E69',
  inkFaint: '#87938C',
  gold: '#8A6A1F',
  goldMid: '#C9A94E',
  goldBg: '#F6F0E0',
  red: '#8E3B2B',
  teal: '#2E6A63',
} as const

export const MONO_FONT = "'JetBrains Mono',monospace"
export const SERIF = 'Newsreader,serif'
export const DISPLAY = "'Young Serif',serif"

export const SEAL_BG = 'radial-gradient(circle at 34% 28%,#9C3F31,#6E271E)'
