import { useMemo } from 'react'
import type { IdeaRecord, Selection } from '../lib/types'
import { NODE_W, buildMap, pad } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE } from '../lib/theme'
import { GlyphMark } from './bits'
import { PanZoom } from './PanZoom'

const EDGE_STYLE = {
  input: { stroke: '#9AA39B', w: 1.1, dash: 'none', op: 1 },
  version: { stroke: C.red, w: 1.3, dash: '4 3', op: 1 },
  terminal: { stroke: C.goldMid, w: 1.1, dash: 'none', op: 1 },
  rung: { stroke: C.gold, w: 0.9, dash: '2 3', op: 0.5 },
  'wall-return': { stroke: C.gold, w: 1.1, dash: '5 4', op: 0.9 },
} as const

export function TravelMap({
  rec,
  sel,
  setSel,
  showRungs,
}: {
  rec: IdeaRecord
  sel: Selection | null
  setSel: (s: Selection) => void
  showRungs: boolean
}) {
  const map = useMemo(() => buildMap(rec, showRungs), [rec, showRungs])

  return (
    <PanZoom style={{ flex: 1 }} initial={{ x: 20, y: 18, s: 1 }}>
      <div style={{ position: 'relative', width: map.w, height: map.h }}>
        {/* the seam band */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: map.seamTop,
            width: map.w,
            height: 48,
            background: '#E5E6DE',
            borderTop: `1px dashed ${C.border}`,
            borderBottom: `1px dashed ${C.border}`,
          }}
        />
        {/* steering hatches */}
        {map.hatches.map((h) => (
          <div
            key={`h${h.s.n}`}
            onClick={() => setSel({ kind: 'state', id: h.s.n })}
            title={`steering — no artifact: ${(h.s.steer ?? []).join(' · ')}`}
            className="hov-op"
            style={{
              position: 'absolute',
              left: h.x,
              top: map.seamTop + 1,
              width: h.w,
              height: 46,
              background: 'repeating-linear-gradient(45deg,#8A6A1F 0 1.3px,transparent 1.3px 7px)',
              opacity: 0.4,
              cursor: 'pointer',
            }}
          />
        ))}

        {/* lineage edges and state rungs */}
        <svg
          style={{ position: 'absolute', left: 0, top: 0, width: map.w, height: map.h, overflow: 'visible', pointerEvents: 'none' }}
          viewBox={`0 0 ${map.w} ${map.h}`}
          aria-label="lineage edges and state rungs"
        >
          {map.edges.map((e, i) => {
            const st = EDGE_STYLE[e.kind]
            return (
              <path
                key={i}
                d={e.d}
                fill="none"
                stroke={st.stroke}
                strokeWidth={st.w}
                strokeDasharray={st.dash === 'none' ? undefined : st.dash}
                opacity={e.longRange ? 0.5 : st.op}
              />
            )
          })}
        </svg>

        {/* labels */}
        {map.labels.map((l, i) => {
          const fonts: Record<string, { font: string; color: string; ls: string }> = {
            superseded: { font: `italic 400 9px/1 ${SERIF}`, color: C.red, ls: '0' },
            tip: { font: `400 7px/1.3 ${MONO_FONT}`, color: C.gold, ls: '.06em' },
            track: { font: `400 8px/1 ${MONO_FONT}`, color: C.inkFaint, ls: '.18em' },
            wall: { font: `400 7.5px/1 ${MONO_FONT}`, color: C.gold, ls: '.14em' },
            'steer-head': { font: `400 7.5px/1.5 ${MONO_FONT}`, color: C.gold, ls: '.14em' },
            'steer-note': { font: `italic 400 9.5px/1.4 ${SERIF}`, color: C.inkFaint, ls: '0' },
          }
          const f = fonts[l.kind]
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: l.x,
                top: l.y,
                width: l.w,
                font: f.font,
                color: f.color,
                letterSpacing: f.ls,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {l.text}
            </div>
          )
        })}

        {/* the wall */}
        {map.wallX !== null && (
          <div style={{ position: 'absolute', left: map.wallX, top: 0, width: 0, height: map.wallH, borderLeft: `1.2px dashed ${C.gold}` }} />
        )}

        {/* artifact nodes */}
        {map.nodes.map((n) => {
          const t = TYPE[n.a.type] ?? TYPE.Spark
          const on = sel?.kind === 'artifact' && sel.id === n.a.n
          return (
            <button
              key={`a${n.a.n}`}
              onClick={() => setSel({ kind: 'artifact', id: n.a.n })}
              title={`${n.a.file} — ${n.a.title}`}
              aria-label={`artifact ${pad(n.a.n)} ${n.a.type} — ${n.a.title}`}
              className="hov-border"
              style={{
                position: 'absolute',
                left: n.x,
                top: n.y,
                width: NODE_W,
                height: 34,
                background: n.a.terminal || on ? C.goldBg : C.panelBg,
                border: `1px solid ${on || n.tip || n.a.terminal ? C.gold : C.border}`,
                borderTop: `2px solid ${t.accent}`,
                borderRadius: 2,
                opacity: n.sup ? 0.6 : 1,
                cursor: 'pointer',
                boxShadow: '0 1px 2px rgba(22,33,31,.07)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '0 6px',
              }}
            >
              <GlyphMark g={t} size={12} />
              <span style={{ minWidth: 0, display: 'block' }}>
                <span
                  style={{
                    display: 'block',
                    font: `400 7px/1.3 ${MONO_FONT}`,
                    color: C.inkSoft,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {pad(n.a.n)} · {n.a.agent.replace('The ', '')}
                </span>
                <span style={{ display: 'block', font: `400 10px/1.2 ${DISPLAY}`, color: C.ink, whiteSpace: 'nowrap' }}>{n.a.type}</span>
              </span>
              {n.sup && <span style={{ position: 'absolute', left: 4, right: 4, top: 17, height: 1.3, background: C.red }} />}
            </button>
          )
        })}

        {/* state nodes */}
        {map.states.map((st) => {
          const on = sel?.kind === 'state' && sel.id === st.s.n
          const pitch = map.states.length > 1 ? map.states[1].x - map.states[0].x : 86
          return (
            <span key={`s${st.s.n}`}>
              <button
                onClick={() => setSel({ kind: 'state', id: st.s.n })}
                title={`state/${pad(st.s.n)}.md · ${st.s.date}${st.s.verb ? ` · ${st.s.verb}` : ''}`}
                aria-label={`state ${pad(st.s.n)}${st.s.verb ? ` · ${st.s.verb}` : ''}`}
                className="hov-border"
                style={{
                  position: 'absolute',
                  left: st.x,
                  top: st.y,
                  width: 46,
                  height: 26,
                  background: on || st.isHead ? C.goldBg : C.contentBg,
                  border: `1px solid ${on || st.isHead ? C.gold : C.border}`,
                  borderLeft: `2px solid ${C.gold}`,
                  borderRadius: 2,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkMid }}>{pad(st.s.n)}</span>
              </button>
              <div
                style={{
                  position: 'absolute',
                  left: Math.round(st.x + 23 - (pitch - 8) / 2),
                  top: st.y + 32,
                  width: Math.round(pitch - 8),
                  textAlign: 'center',
                  font: `400 7.5px/1.2 ${MONO_FONT}`,
                  color: st.s.verb === 'challenge' ? C.red : st.s.verb ? C.inkSoft : C.inkFaint,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {st.s.verb || '— no verb'}
              </div>
            </span>
          )
        })}
      </div>
    </PanZoom>
  )
}
