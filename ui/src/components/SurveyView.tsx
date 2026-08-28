import type { CSSProperties } from 'react'
import type { EstateData } from '../lib/types'
import { C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'

const mono: CSSProperties = { fontFamily: 'JetBrains Mono,monospace', fontSize: '.82em' }

export function SurveyView({ data }: { data: EstateData }) {
  const s = data.survey
  const empty = !s || s.covers.length === 0
  return (
    <div style={{ padding: '22px 24px' }}>
      <div
        style={{
          maxWidth: 640,
          border: `1px dashed ${C.border}`,
          background: 'repeating-linear-gradient(0deg,transparent 0 25px,#E6E7E0 25px 26px)',
          padding: '26px 28px',
        }}
      >
        {empty ? (
          <>
            <div style={{ font: `400 26px/1.2 ${DISPLAY}`, color: C.inkMid }}>No survey on file.</div>
            <div style={{ font: `400 15px/1.6 ${SERIF}`, color: C.inkSoft, marginTop: 12, maxWidth: '52ch' }}>
              <span style={mono}>ideas/SURVEY.md</span> exists and declares itself ungenerated: <span style={mono}>status: {s?.status ?? 'draft'}</span>,{' '}
              <span style={mono}>covers: []</span>. An empty <span style={mono}>covers:</span> means never generated — and because it would record each
              record’s exact state-head, staleness will be detectable the moment it is.
            </div>
            <div style={{ font: `400 10px/1.6 ${MONO_FONT}`, color: C.gold, marginTop: 16, borderTop: `1px dashed ${C.border}`, paddingTop: 12 }}>
              ask The Steward to survey the grounds · or invoke /survey
            </div>
            <div style={{ font: `400 12px/1.5 ${SERIF}`, color: C.inkFaint, marginTop: 8, fontStyle: 'italic' }}>The Cartographer, unbothered.</div>
          </>
        ) : (
          <>
            <div style={{ font: `400 26px/1.2 ${DISPLAY}`, color: C.inkMid }}>Survey on file.</div>
            <div style={{ font: `400 15px/1.6 ${SERIF}`, color: C.inkSoft, marginTop: 12, maxWidth: '52ch' }}>
              <span style={mono}>ideas/SURVEY.md</span> · <span style={mono}>status: {s.status}</span> · covers {s.covers.length} record
              {s.covers.length === 1 ? '' : 's'}:
            </div>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
              {s.covers.map((c, i) => (
                <span key={i} style={{ font: `400 10px/1.5 ${MONO_FONT}`, color: C.inkMid }}>
                  {String(c)}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
