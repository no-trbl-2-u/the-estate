import type { IdeaRecord, Selection } from '../lib/types'
import { buildMobileItems, isSuperseded, nonTerminalCount, pad, tipOf } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE } from '../lib/theme'
import { GlyphMark, Plate } from './bits'
import { PanZoom } from './PanZoom'

function StateChip({ n, isHead, onClick }: { n: number; isHead: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={`state/${pad(n)}.md`}
      className="hov-border"
      style={{
        width: 44,
        height: 24,
        background: isHead ? C.goldBg : C.contentBg,
        border: `1px solid ${isHead ? C.gold : C.border}`,
        borderLeft: `2px solid ${C.gold}`,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flex: 'none',
      }}
    >
      <span style={{ font: `400 8.5px/1 ${MONO_FONT}`, color: isHead ? C.ink : C.inkMid }}>{pad(n)}</span>
    </button>
  )
}

const Tie = () => <span style={{ width: 37, height: 0, borderTop: `1px dashed ${C.gold}`, opacity: 0.5, flex: 'none' }} />

export function MobileMap({
  rec,
  sel,
  setSel,
  back,
}: {
  rec: IdeaRecord
  sel: Selection | null
  setSel: (s: Selection) => void
  back: () => void
}) {
  const items = buildMobileItems(rec)
  const headN = rec.states.length ? rec.states[rec.states.length - 1].n : 0
  const na = nonTerminalCount(rec)

  return (
    <div style={{ height: '100%', background: C.contentBg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 'none', padding: '14px 16px 11px', background: C.panelBg, borderBottom: `1px solid ${C.border}`, borderTop: `2px solid ${C.goldMid}` }}>
        <button onClick={back} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9, cursor: 'pointer' }}>
          <span style={{ font: `400 12px/1 ${MONO_FONT}`, color: C.gold }}>‹</span>
          <span style={{ font: `400 9.5px/1 ${MONO_FONT}`, color: C.gold, letterSpacing: '.06em' }}>the shelf</span>
        </button>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{ marginTop: 3 }}>
            <Plate text={rec.id} small />
          </span>
          <div>
            <div style={{ font: `400 18px/1.15 ${DISPLAY}`, color: C.ink }}>{rec.title}</div>
            <div style={{ font: `400 9px/1.4 ${MONO_FONT}`, color: C.inkSoft, marginTop: 4 }}>
              {na} artifact{na === 1 ? '' : 's'} · {rec.states.length} state{rec.states.length === 1 ? '' : 's'}
              {rec.seed ? ' · seeded' : ''}
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 'none', display: 'flex', background: '#EFF0E9', borderBottom: `1px solid ${C.borderLt}`, padding: '7px 16px', gap: 14, alignItems: 'center' }}>
        <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.14em', color: C.inkFaint, width: 54 }}>STATE</span>
        <span style={{ width: 14, height: 11, background: 'repeating-linear-gradient(45deg,#8A6A1F 0 1px,transparent 1px 6px)', opacity: 0.5 }} />
        <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.14em', color: C.inkFaint, flex: 1 }}>ARTIFACT · LINEAGE ↓</span>
      </div>

      <PanZoom style={{ flex: 1 }} contentWidth="100%" initial={{ x: 0, y: 0, s: 1 }}>
        {/* the seam, turned: a vertical hatched stripe between the tracks */}
        <div
          style={{
            position: 'absolute',
            left: 70,
            top: 0,
            bottom: 0,
            width: 15,
            background: 'repeating-linear-gradient(45deg,#8A6A1F 0 1.3px,transparent 1.3px 7px)',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 24 }}>
          {items.map((item, idx) => {
            if (item.kind === 'steer') {
              return (
                <button
                  key={`st${item.s.n}`}
                  onClick={() => setSel({ kind: 'state', id: item.s.n })}
                  style={{ margin: '4px 14px 6px', background: C.goldBg, border: `1px solid ${C.goldMid}`, borderRadius: 2, padding: '8px 10px', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 16, height: 12, flex: 'none', background: 'repeating-linear-gradient(45deg,#8A6A1F 0 1.2px,transparent 1.2px 6px)', opacity: 0.6 }} />
                    <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.14em', color: C.gold }}>STEERING — NO ARTIFACT</span>
                    <span style={{ marginLeft: 'auto', font: `400 11px/1 ${MONO_FONT}`, color: C.gold }}>›</span>
                  </div>
                  <div style={{ font: `400 11.5px/1.5 ${SERIF}`, color: C.inkSoft, marginTop: 6 }}>
                    State {pad(item.s.n)} wrote{' '}
                    {(item.s.steer ?? []).map((f, i) => (
                      <span key={i}>
                        <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.86em' }}>{f}</span>
                        {i < (item.s.steer ?? []).length - 1 ? ' · ' : ''}
                      </span>
                    ))}{' '}
                    — outside the record, disclosed rather than hidden.
                  </div>
                </button>
              )
            }
            if (item.kind === 'group') {
              return (
                <div key={`g${idx}`} style={{ display: 'flex', alignItems: 'stretch', padding: '0 14px', minHeight: 90 }}>
                  <div style={{ width: 44, flex: 'none', display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 4 }}>
                    {item.stateNs.map((n) => (
                      <StateChip key={n} n={n} isHead={n === headN} onClick={() => setSel({ kind: 'state', id: n })} />
                    ))}
                  </div>
                  <span style={{ width: 37, flex: 'none', display: 'flex', alignItems: 'center' }}>
                    <Tie />
                  </span>
                  <div style={{ flex: 1, background: C.panelBg, border: `1px solid ${C.border}`, borderLeft: `2px solid ${C.inkSoft}`, borderRadius: 2, padding: '9px 10px', margin: '4px 0' }}>
                    <div style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.12em', color: C.inkFaint, marginBottom: 7 }}>{item.label}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {item.artifacts.map((a) => {
                        const t = TYPE[a.type] ?? TYPE.Spark
                        return (
                          <button
                            key={String(a.n)}
                            onClick={() => setSel({ kind: 'artifact', id: a.n })}
                            className="hov-ink"
                            style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer' }}
                          >
                            <GlyphMark g={t} size={11} />
                            <span style={{ font: `400 10px/1.3 ${MONO_FONT}`, color: C.inkMid, textAlign: 'left' }}>
                              {pad(a.n)} {a.type} · {a.title.length > 30 ? a.title.slice(0, 30) + '…' : a.title}
                            </span>
                            {a.stale && <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, color: C.gold }}>{a.stale.slice(5)}</span>}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }
            const a = item.a
            const t = TYPE[a.type] ?? TYPE.Spark
            const sup = isSuperseded(rec, a)
            const tip = tipOf(rec, a)
            const on = sel?.kind === 'artifact' && sel.id === a.n
            return (
              <div key={String(a.n)}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px', minHeight: 52 }}>
                  {item.stateNs.length ? (
                    <StateChip n={item.stateNs[0]} isHead={item.stateNs[0] === headN} onClick={() => setSel({ kind: 'state', id: item.stateNs[0] })} />
                  ) : (
                    <span style={{ width: 44, flex: 'none' }} />
                  )}
                  <Tie />
                  <button
                    onClick={() => setSel({ kind: 'artifact', id: a.n })}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      background: a.terminal || on || tip ? C.goldBg : C.panelBg,
                      border: on || tip || a.terminal ? `1.6px solid ${C.gold}` : `1px solid ${C.border}`,
                      borderTop: `2px solid ${t.accent}`,
                      borderRadius: 2,
                      padding: '7px 9px',
                      opacity: sup ? 0.6 : 1,
                      position: 'relative',
                      cursor: 'pointer',
                      margin: '4px 0',
                    }}
                  >
                    <GlyphMark g={t} size={13} />
                    <span style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                      <span style={{ display: 'block', font: `400 7.5px/1.3 ${MONO_FONT}`, color: C.inkSoft, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {pad(a.n)} · {a.agent} · {a.verb}
                      </span>
                      <span style={{ display: 'block', font: `400 12.5px/1.2 ${DISPLAY}`, color: C.ink }}>{a.type}</span>
                    </span>
                    {tip && (
                      <span style={{ font: `400 7px/1.3 ${MONO_FONT}`, color: C.gold, textAlign: 'right', flex: 'none' }}>
                        TIP
                        <br />
                        {tip.label === 'tip' ? '' : tip.label.split(' · ')[0]}
                      </span>
                    )}
                    {sup && <span style={{ position: 'absolute', left: 6, right: 6, top: 20, height: 1.4, background: C.red }} />}
                    {sup && (
                      <span style={{ position: 'absolute', right: 9, top: 6, font: `italic 400 9px/1 ${SERIF}`, color: C.red }}>superseded</span>
                    )}
                  </button>
                </div>
                {item.supersedeElbow && (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px 0 42px', height: 20 }}>
                    <span style={{ width: 12, height: 12, borderLeft: `1.3px dashed ${C.red}`, borderBottom: `1.3px dashed ${C.red}`, flex: 'none', marginLeft: 20 }} />
                    <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, color: C.red, marginLeft: 6 }}>{item.supersedeElbow}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </PanZoom>

      <div
        style={{
          flex: 'none',
          background: C.panelBg,
          borderTop: `1px solid ${C.border}`,
          padding: '9px 16px 14px',
          display: 'flex',
          gap: 14,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, font: `400 9px/1 ${MONO_FONT}`, color: C.inkMid }}>
          <span style={{ width: 14, height: 0, borderTop: '1.1px solid #9AA39B' }} />
          inputs
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, font: `400 9px/1 ${MONO_FONT}`, color: C.red }}>
          <span style={{ width: 14, height: 0, borderTop: `1.2px dashed ${C.red}` }} />
          supersedes
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, font: `400 9px/1 ${MONO_FONT}`, color: C.gold }}>
          <span style={{ width: 14, height: 0, borderTop: `1px dashed ${C.gold}` }} />
          rung
        </span>
      </div>
    </div>
  )
}
