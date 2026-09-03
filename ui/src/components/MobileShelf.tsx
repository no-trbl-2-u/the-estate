import type { EstateData, IdeaRecord, ViewKey } from '../lib/types'
import { ago, nonTerminalCount, pad } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'
import { Plate } from './bits'

function AppetiteBig({ r }: { r: IdeaRecord }) {
  return (
    <div>
      <div style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.18em', color: C.inkFaint, marginBottom: 5 }}>APPETITE</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 16 }}>
        {[0, 1, 2].map((i) =>
          r.placeholder ? (
            <span key={i} style={{ width: 7, height: 16, border: `1px dashed ${i === 0 ? '#A97B6E' : C.border}` }} />
          ) : (
            <span
              key={i}
              style={{ width: 7, height: 16, background: i < r.appetite ? C.gold : 'transparent', border: `1px solid ${i < r.appetite ? '#6E5418' : C.border}` }}
            />
          ),
        )}
      </div>
      <div style={{ font: `400 8px/1 ${MONO_FONT}`, color: r.placeholder ? C.red : C.inkMid, marginTop: 5, fontStyle: r.placeholder ? 'italic' : undefined }}>
        {r.appetite} · {r.placeholder ? 'placeholder' : 'hand-set'}
      </div>
    </div>
  )
}

export function MobileShelf({
  data,
  openRecord,
  openView,
}: {
  data: EstateData
  openRecord: (id: string) => void
  openView: (v: ViewKey) => void
}) {
  const footViews: { k: ViewKey; name: string; dashed?: boolean }[] = [
    { k: 'grounds', name: 'The Grounds' },
    { k: 'household', name: 'The Household' },
    { k: 'types', name: 'The Types' },
    { k: 'survey', name: 'Survey', dashed: true },
    { k: 'relates', name: 'Relates', dashed: true },
    { k: 'exports', name: 'Exports' },
    { k: 'how', name: 'How it works' },
    { k: 'settings', name: 'Settings' },
  ]
  return (
    <div style={{ height: '100%', background: C.contentBg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 'none', padding: '18px 18px 13px', background: C.panelBg, borderBottom: `1px solid ${C.border}`, borderTop: `2px solid ${C.goldMid}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
          <Plate text="ESTATE VIEW" />
          <span style={{ font: `400 9px/1.4 ${MONO_FONT}`, color: C.inkFaint, textAlign: 'right' }}>
            generated
            <br />
            {data.generatedAt}
          </span>
        </div>
        <div style={{ font: `400 9.5px/1 ${MONO_FONT}`, color: C.inkSoft, marginTop: 11 }}>covers {data.records.length} records · read-only</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {data.records.map((r) => {
          const head = r.states.length ? r.states[r.states.length - 1].n : 0
          const na = nonTerminalCount(r)
          return (
            <button
              key={r.id}
              onClick={() => openRecord(r.id)}
              className="hov-border"
              style={{
                background: C.panelBg,
                border: `1px solid ${C.border}`,
                borderLeft: r.seed ? `3px solid ${C.gold}` : `1px solid ${C.border}`,
                borderRadius: 2,
                padding: '13px 14px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <Plate text={r.id} small />
                {r.seed ? (
                  <div
                    style={{
                      width: 50,
                      height: 21,
                      borderRadius: 2,
                      background: 'radial-gradient(circle at 35% 30%,#9C3F31,#6E271E)',
                      border: '1px solid #5A1F17',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: `rotate(${r.id.charCodeAt(3) % 2 ? 1 : -1}deg)`,
                    }}
                  >
                    <span style={{ font: `600 7.5px/1 ${MONO_FONT}`, letterSpacing: '.14em', color: '#F0DCC8' }}>SEEDED</span>
                  </div>
                ) : (
                  <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.12em', color: C.inkFaint, border: `1px dashed ${C.border}`, borderRadius: 2, padding: '4px 6px' }}>
                    NO EXPORT
                  </span>
                )}
              </div>
              <div style={{ font: `400 20px/1.2 ${DISPLAY}`, color: C.ink, margin: '9px 0 8px', textWrap: 'pretty' }}>{r.title}</div>
              {na === 0 && (
                <div
                  style={{
                    background: C.contentBg,
                    border: `1px solid ${C.borderLt}`,
                    borderRadius: 2,
                    padding: '8px 10px',
                    font: `400 12.5px/1.45 ${SERIF}`,
                    color: C.inkSoft,
                    fontStyle: 'italic',
                    marginBottom: 10,
                  }}
                >
                  {r.states.length === 1 ? 'One state, no artifacts.' : `${r.states.length} states, no artifacts.`} The record exists so it is not
                  forgotten.
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: 12,
                  borderTop: `1px dashed ${C.borderLt}`,
                  paddingTop: 10,
                }}
              >
                <AppetiteBig r={r} />
                <div style={{ textAlign: 'right' }}>
                  <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.inkMid }}>
                    {na} artifact{na === 1 ? '' : 's'} · {r.states.length} state{r.states.length === 1 ? '' : 's'}
                  </div>
                  <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.inkSoft }}>
                    state/{pad(head)} · {ago(r.headDate, data.generatedAt)}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div
        style={{
          flex: 'none',
          background: C.dampBg,
          borderTop: `1px solid ${C.border}`,
          boxShadow: 'inset 0 2px 4px -2px rgba(22,33,31,.18)',
          padding: '11px 0 18px',
        }}
      >
        <div style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.2em', color: '#7C877F', padding: '0 16px 9px' }}>THE ESTATE ITSELF</div>
        <div style={{ display: 'flex', gap: 7, padding: '0 16px', overflowX: 'auto' }}>
          {footViews.map((v) => (
            <button
              key={v.k}
              onClick={() => openView(v.k)}
              style={{
                flex: 'none',
                font: `400 11px/1 ${SERIF}`,
                color: v.dashed ? C.inkSoft : C.inkMid,
                background: v.dashed ? 'transparent' : '#E6E7DE',
                border: v.dashed ? `1px dashed ${C.border}` : `1px solid ${C.border}`,
                borderRadius: 2,
                padding: '8px 11px',
                cursor: 'pointer',
              }}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
