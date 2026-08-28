import type { EstateData } from '../lib/types'
import { numWord, typeCounts } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE, TYPE_GLYPH_NOTES, TYPE_ORDER } from '../lib/theme'
import { GlyphMark } from './bits'

// verb · agent line per type, from the registry's signatures
const TYPE_BY: Record<string, string> = {
  Spark: 'capture · The Gardener',
  Framing: 'frame · The Gardener',
  Horizon: 'envision · The Architect',
  Trajectory: 'chart · The Surveyor',
  Phase: 'phase · The Surveyor',
  Findings: 'research · The Factor',
  Appraisal: 'review · compare · The Assayer',
  Decision: 'decide · The Chancellor',
  Brief: 'seed · The Sower — early exit',
  Seed: 'seed · The Sower — terminal',
}

export function TypesView({ data, onSelect }: { data: EstateData; onSelect: (name: string) => void }) {
  const counts = typeCounts(data.records)
  const unused = TYPE_ORDER.filter((t) => !counts[t]).length
  return (
    <div style={{ padding: '22px 24px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(322px,1fr))',
          gap: 1,
          background: C.border,
          border: `1px solid ${C.border}`,
          maxWidth: 1000,
        }}
      >
        {TYPE_ORDER.map((name) => {
          const t = TYPE[name]
          const c = counts[name] ?? 0
          const note = `${TYPE_GLYPH_NOTES[name]}${c ? `  ${c} in the estate` : '  Empty drawer.'}`
          return (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className="hov-border"
              style={{
                background: name === 'Seed' ? C.goldBg : c ? C.panelBg : '#EFF0E9',
                padding: '13px 15px',
                display: 'flex',
                gap: 13,
                alignItems: 'flex-start',
                cursor: 'pointer',
                textAlign: 'left',
                border: '1px solid transparent',
              }}
            >
              <GlyphMark
                g={c ? t : { gfill: 'transparent', gborder: '2px dashed #A9B0A5', gradius: t.gradius, gclip: t.gclip }}
                size={22}
                style={{ marginTop: 3 }}
              />
              <div>
                <div style={{ font: `400 15px/1.15 ${DISPLAY}`, color: c ? C.ink : C.inkSoft }}>{name}</div>
                <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: c ? C.inkSoft : C.inkFaint, marginTop: 3 }}>{TYPE_BY[name]}</div>
                <div style={{ font: `400 12px/1.5 ${SERIF}`, color: c ? C.inkSoft : C.inkFaint, marginTop: 5 }}>{note}</div>
              </div>
            </button>
          )
        })}
      </div>
      <div style={{ maxWidth: 1000, marginTop: 16, font: `400 13px/1.6 ${SERIF}`, color: C.inkSoft, fontStyle: 'italic' }}>
        Ten shapes, four colours: shape carries the type, colour only carries the family. At ten nodes wide the eye reads silhouette before hue —
        and the {numWord(unused)} unused types are drawn dashed rather than hidden, because an empty drawer is information.
      </div>
    </div>
  )
}
