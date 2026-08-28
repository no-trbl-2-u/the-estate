import type { CSSProperties } from 'react'
import type { EstateData } from '../lib/types'
import { C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'

const mono: CSSProperties = { fontFamily: 'JetBrains Mono,monospace', fontSize: '.82em' }

export function RelatesView({ data }: { data: EstateData }) {
  const edges = data.records.flatMap((r) => r.relates.map((to) => ({ from: r.id, to })))
  return (
    <div style={{ padding: '22px 24px' }}>
      <div style={{ maxWidth: 640, border: `1px dashed ${C.border}`, padding: '26px 28px', background: C.panelBg }}>
        <div style={{ font: `400 26px/1.2 ${DISPLAY}`, color: C.inkMid }}>{edges.length ? `${edges.length} edge${edges.length === 1 ? '' : 's'} drawn.` : 'No edges drawn yet.'}</div>
        <div style={{ font: `400 15px/1.6 ${SERIF}`, color: C.inkSoft, marginTop: 12, maxWidth: '52ch' }}>
          Every other edge in this tool is derived from <span style={mono}>inputs:</span> and <span style={mono}>previous:</span>. <b>relates</b> is
          the one no machinery can make, which is why it is the most valuable — and why its absence cannot be papered over.
        </div>
        {edges.length > 0 && (
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {edges.map((e, i) => (
              <div key={i} style={{ font: `400 11px/1.5 ${MONO_FONT}`, color: C.inkMid }}>
                idea-{e.from} ↔ {e.to}
              </div>
            ))}
          </div>
        )}
        {data.relatesMentions.length > 0 && (
          <div style={{ marginTop: 18, borderTop: `1px dashed ${C.border}`, paddingTop: 14 }}>
            <div style={{ font: `400 8px/1 ${MONO_FONT}`, letterSpacing: '.14em', color: C.red, marginBottom: 10 }}>
              NAMED IN THE RECORDS, NOT DRAWN
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {data.relatesMentions.map((m, i) => (
                <div key={i} style={{ font: `400 11px/1.5 ${MONO_FONT}`, color: C.inkSoft }}>
                  idea-{m.from} → idea-{m.to} &nbsp;
                  <span style={{ fontFamily: 'Newsreader,serif', fontStyle: 'italic', fontSize: '1.2em', color: C.inkMid }}>“{m.quote}”</span>
                </div>
              ))}
            </div>
            <div style={{ font: `400 12px/1.5 ${SERIF}`, color: C.inkFaint, marginTop: 12, fontStyle: 'italic' }}>
              All are comments in <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.86em', fontStyle: 'normal' }}>idea.md</span>.
              Quotations, not edges.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
