import type { EstateData, ViewKey } from '../lib/types'
import { agentCounts, typeCounts } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE_ORDER, VIEW_GLYPHS } from '../lib/theme'
import { GlyphMark } from './bits'

export function MobileEstate({ data, openView, back }: { data: EstateData; openView: (v: ViewKey) => void; back: () => void }) {
  const called = Object.keys(agentCounts(data.records)).length + 1
  const nTypes = Object.keys(typeCounts(data.records)).length
  const nExports = data.records.filter((r) => r.seed).length
  const nEdges = data.records.reduce((s, r) => s + r.relates.length, 0)
  const rows: { k: ViewKey; name: string; tag: string; tagColor: string; dashed?: boolean }[] = [
    { k: 'grounds', name: 'The Grounds', tag: String(data.records.length), tagColor: C.inkFaint },
    { k: 'household', name: 'The Household', tag: `${called} / ${data.agents.length}`, tagColor: C.inkFaint },
    { k: 'types', name: 'The Types', tag: `${nTypes} / ${TYPE_ORDER.length}`, tagColor: C.inkFaint },
    { k: 'survey', name: 'Survey', tag: data.survey && data.survey.covers.length ? 'on file' : 'none on file', tagColor: C.red, dashed: true },
    { k: 'relates', name: 'Relates', tag: `${nEdges} edges`, tagColor: C.inkFaint, dashed: true },
    { k: 'exports', name: 'Exports', tag: String(nExports), tagColor: C.gold },
    { k: 'how', name: 'How it works', tag: 'walkthrough', tagColor: C.gold },
    { k: 'settings', name: 'Settings', tag: '', tagColor: C.inkFaint },
  ]
  return (
    <div style={{ height: '100%', background: C.dampBg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 'none', padding: '16px 16px 12px', background: '#E1E2D9', borderBottom: `1px solid ${C.border}`, borderTop: `2px solid ${C.goldMid}` }}>
        <button onClick={back} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10, cursor: 'pointer' }}>
          <span style={{ font: `400 12px/1 ${MONO_FONT}`, color: C.gold }}>‹</span>
          <span style={{ font: `400 9.5px/1 ${MONO_FONT}`, color: C.gold }}>the shelf</span>
        </button>
        <div style={{ font: `400 20px/1.15 ${DISPLAY}`, color: C.ink }}>The estate itself</div>
        <div style={{ font: `400 9px/1.4 ${MONO_FONT}`, color: '#7C877F', marginTop: 5 }}>views of the whole estate, not of a record</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 20px', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {rows.map((v) => (
          <button
            key={v.k}
            onClick={() => openView(v.k)}
            className="hov-bg"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              padding: '11px 10px',
              background: v.dashed ? 'transparent' : '#E1E2D9',
              borderRadius: 2,
              cursor: 'pointer',
              width: '100%',
            }}
          >
            <GlyphMark g={VIEW_GLYPHS[v.k]} size={13} />
            <span style={{ font: `400 13.5px/1 ${SERIF}`, color: v.dashed ? C.inkSoft : C.ink, flex: 1, textAlign: 'left' }}>{v.name}</span>
            <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: v.tagColor }}>{v.tag}</span>
          </button>
        ))}
        <div style={{ font: `400 11.5px/1.5 ${SERIF}`, color: '#7C877F', fontStyle: 'italic', margin: '12px 4px 0', paddingTop: 10, borderTop: `1px solid ${C.border}` }}>
          Views of the whole estate, not of a record — so they sit apart, not inside the list.
        </div>
      </div>
    </div>
  )
}
