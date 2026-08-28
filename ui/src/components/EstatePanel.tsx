import type { CSSProperties, ReactNode } from 'react'
import type { Artifact, ArtifactN, EstateData, IdeaRecord } from '../lib/types'
import { pad, totalStates } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE, TYPE_GLYPH_NOTES } from '../lib/theme'
import { AgentSeal, GlyphMark, MonoLabel, Pill } from './bits'

export type EstateSel =
  | { kind: 'office'; id: string }
  | { kind: 'type'; id: string }
  | { kind: 'export'; id: string }

function found(data: EstateData, pred: (a: Artifact, r: IdeaRecord) => boolean): { r: IdeaRecord; a: Artifact }[] {
  const out: { r: IdeaRecord; a: Artifact }[] = []
  for (const r of data.records) for (const a of r.artifacts) if (pred(a, r)) out.push({ r, a })
  return out
}

function ArtifactRows({
  rows,
  jump,
}: {
  rows: { r: IdeaRecord; a: Artifact }[]
  jump: (recId: string, n: ArtifactN) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {rows.map(({ r, a }) => (
        <button
          key={`${r.id}-${a.n}`}
          onClick={() => jump(r.id, a.n)}
          className="hov-ink"
          style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.gold, cursor: 'pointer', textAlign: 'left', overflowWrap: 'anywhere' }}
        >
          idea-{r.id} · {pad(a.n)} {a.type} — {a.title}
        </button>
      ))}
      {rows.length === 0 && <span style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.inkFaint }}>none in the estate</span>}
    </div>
  )
}

export function EstatePanel({
  data,
  sel,
  close,
  jump,
  mobile,
}: {
  data: EstateData
  sel: EstateSel
  close: () => void
  jump: (recId: string, n: ArtifactN) => void
  mobile?: boolean
}) {
  let badge = ''
  let accent: string = C.inkSoft
  let glyph: ReactNode = null
  let title = ''
  let sub: ReactNode = null
  let body: ReactNode = null

  if (sel.kind === 'office') {
    const agent = data.agents.find((x) => x.name === sel.id)
    if (!agent) return null
    const isSteward = agent.name === 'The Steward'
    const rows = found(data, (a) => a.agent === agent.name)
    const active = rows.length > 0 || isSteward
    badge = 'OFFICE'
    accent = active ? C.red : C.inkFaint
    glyph = <AgentSeal mono={agent.mono} size={12} active={active} />
    title = agent.name
    sub = (
      <>
        {agent.verbs.map((v) => (
          <Pill key={v} text={v} hot={active} />
        ))}
      </>
    )
    body = (
      <>
        <MonoLabel style={{ letterSpacing: '.18em', margin: '0 0 7px' }}>{isSteward ? 'THE OFFICE' : 'CALLED'}</MonoLabel>
        <div style={{ font: `400 14px/1.6 ${SERIF}`, color: C.ink }}>
          {isSteward
            ? `The front door. Greets, orients, derives routes, dispatches, and writes all state — ${totalStates(data.records)} snapshots across ${data.records.length} records. Performs no bound verb.`
            : rows.length
              ? `${rows.length} artifact${rows.length === 1 ? '' : 's'} across ${new Set(rows.map((x) => x.r.id)).size} record${new Set(rows.map((x) => x.r.id)).size === 1 ? '' : 's'}.`
              : 'Never called anywhere in the estate. That is not a fault — it is the shape of what has been asked for so far.'}
        </div>
        {isSteward ? (
          <div style={{ marginTop: 14, paddingTop: 11, borderTop: `1px dashed ${C.border}` }}>
            <MonoLabel style={{ letterSpacing: '.14em', marginBottom: 7 }}>STATE SNAPSHOTS BY RECORD</MonoLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {data.records.map((r) => (
                <span key={r.id} style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.inkSoft }}>
                  idea-{r.id} — {r.states.length} state{r.states.length === 1 ? '' : 's'}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 14, paddingTop: 11, borderTop: `1px dashed ${C.border}` }}>
            <MonoLabel style={{ letterSpacing: '.14em', marginBottom: 7 }}>ON THE RECORD — JUMP IN</MonoLabel>
            <ArtifactRows rows={rows} jump={jump} />
          </div>
        )}
      </>
    )
  } else if (sel.kind === 'type') {
    const t = TYPE[sel.id]
    if (!t) return null
    const rows = found(data, (a) => a.type === sel.id)
    badge = sel.id.toUpperCase()
    accent = t.accent
    glyph = <GlyphMark g={rows.length ? t : { gfill: 'transparent', gborder: '2px dashed #A9B0A5', gradius: t.gradius, gclip: t.gclip }} size={11} />
    title = sel.id
    sub = (
      <>
        <Pill text={`${rows.length} in the estate`} hot={rows.length > 0} />
        {rows.length === 0 && <Pill text="empty drawer" />}
      </>
    )
    body = (
      <>
        <MonoLabel style={{ letterSpacing: '.18em', margin: '0 0 7px' }}>THE MARK</MonoLabel>
        <div style={{ font: `400 14px/1.6 ${SERIF}`, color: C.ink }}>{TYPE_GLYPH_NOTES[sel.id]}</div>
        <div style={{ marginTop: 14, paddingTop: 11, borderTop: `1px dashed ${C.border}` }}>
          <MonoLabel style={{ letterSpacing: '.14em', marginBottom: 7 }}>EVERY ONE IN THE ESTATE — JUMP IN</MonoLabel>
          <ArtifactRows rows={rows} jump={jump} />
        </div>
        {rows.length === 0 && (
          <div style={{ font: `400 12px/1.5 ${SERIF}`, color: C.inkSoft, fontStyle: 'italic', marginTop: 10 }}>
            An empty drawer is information.
          </div>
        )}
      </>
    )
  } else {
    const r = data.records.find((x) => x.id === sel.id)
    if (!r || !r.seed) return null
    const seedArt = r.artifacts.find((a) => a.terminal)
    badge = 'SEED'
    accent = C.gold
    glyph = <span style={{ width: 10, height: 10, borderRadius: '50%', border: `2.4px solid ${C.gold}`, display: 'inline-block' }} />
    title = seedArt?.title ?? r.title
    sub = (
      <>
        <Pill text={`origin: ${r.seedOrigin}`} hot />
        <Pill text="terminal" />
      </>
    )
    body = (
      <>
        <div style={{ font: `400 8.5px/1.5 ${MONO_FONT}`, color: C.gold, marginBottom: 10, overflowWrap: 'anywhere' }}>{r.seed}</div>
        <MonoLabel style={{ letterSpacing: '.18em', margin: '0 0 7px' }}>WHAT LEFT THE WALLS</MonoLabel>
        <div style={{ font: `400 14px/1.6 ${SERIF}`, color: C.ink }}>{seedArt?.excerpt}</div>
        <div style={{ marginTop: 14, paddingTop: 11, borderTop: `1px dashed ${C.border}` }}>
          <MonoLabel style={{ letterSpacing: '.14em', marginBottom: 7 }}>ASSEMBLED FROM</MonoLabel>
          <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.inkSoft }}>
            {seedArt?.inputs.length ?? 0} artifacts of idea-{r.id}
          </div>
          {seedArt && (
            <button
              onClick={() => jump(r.id, seedArt.n)}
              className="hov-ink"
              style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.gold, cursor: 'pointer', marginTop: 6, display: 'block' }}
            >
              open it on the travel map →
            </button>
          )}
        </div>
        <div style={{ font: `400 12px/1.5 ${SERIF}`, color: C.inkSoft, fontStyle: 'italic', marginTop: 12 }}>
          The provenance stamp is the only thing that travels backward.
        </div>
      </>
    )
  }

  const shell: CSSProperties = mobile
    ? {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '68%',
        background: C.panelBg,
        borderTop: `2px solid ${C.goldMid}`,
        boxShadow: '0 -10px 24px -14px rgba(22,33,31,.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 20,
      }
    : {
        width: 380,
        flex: 'none',
        background: C.panelBg,
        borderLeft: `1px solid ${C.border}`,
        boxShadow: 'inset 6px 0 12px -8px rgba(22,33,31,.28)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }

  return (
    <div style={shell} className={mobile ? 'mobile-sheet' : undefined}>
      {mobile && (
        <div style={{ flex: 'none', display: 'flex', justifyContent: 'center', padding: '8px 0 2px' }} onClick={close}>
          <span style={{ width: 38, height: 4, borderRadius: 3, background: C.border }} />
        </div>
      )}
      <div style={{ flex: 'none', borderTop: mobile ? 'none' : `2px solid ${C.goldMid}`, padding: '14px 18px 13px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: `1px solid ${accent}`, borderRadius: 2, padding: '3px 8px' }}>
            {glyph}
            <span style={{ font: `600 9px/1 ${MONO_FONT}`, letterSpacing: '.16em', color: accent }}>{badge}</span>
          </span>
          <button onClick={close} className="hov-ink" style={{ font: `400 15px/1 ${MONO_FONT}`, color: C.inkFaint, cursor: 'pointer', padding: '0 3px' }}>
            ×
          </button>
        </div>
        <div style={{ font: `400 21px/1.2 ${DISPLAY}`, color: C.ink, margin: '0 0 12px', textWrap: 'pretty' }}>{title}</div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>{sub}</div>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '15px 18px',
          background: 'repeating-linear-gradient(0deg,transparent 0 24px,#EDEEE7 24px 25px)',
        }}
      >
        {body}
      </div>
      <div
        style={{
          flex: 'none',
          borderTop: `1px solid ${C.border}`,
          background: C.contentBg,
          padding: mobile ? '9px 18px 28px' : '9px 18px',
          font: `400 9px/1.4 ${MONO_FONT}`,
          color: C.inkFaint,
        }}
      >
        derived from the records · esc to close
      </div>
    </div>
  )
}
