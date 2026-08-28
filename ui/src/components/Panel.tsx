import type { CSSProperties, ReactNode } from 'react'
import type { Artifact, EstateData, IdeaRecord, Selection, StateSnap } from '../lib/types'
import { art, chainPredecessors, daysTo, isSuperseded, pad, successorOf, tipOf } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE } from '../lib/theme'
import { AgentSeal, GlyphMark, MonoLabel, Pill } from './bits'

interface Row {
  t: string
  color: string
  onClick?: () => void
}
interface Block {
  label: string
  rows: Row[]
  note?: string
}

function classifierPills(a: Artifact): ReactNode[] {
  const pills: ReactNode[] = []
  for (const [k, v] of Object.entries(a.classifiers)) {
    const t = `${k}: ${v}`
    pills.push(<Pill key={k} text={t} hot={v === true || (typeof v === 'string' && v !== 'false')} />)
  }
  pills.push(<Pill key="shape" text={`shape: ${a.shape}`} />)
  if (a.lenses.length === 0) pills.push(<Pill key="lenses" text="lenses: []" />)
  else pills.push(<Pill key="lenses" text={`lenses: ${a.lenses.join(', ')}`} />)
  return pills
}

export function Panel({
  data,
  rec,
  sel,
  setSel,
  close,
  mobile,
}: {
  data: EstateData
  rec: IdeaRecord
  sel: Selection
  setSel: (s: Selection) => void
  close: () => void
  mobile?: boolean
}) {
  const a = sel.kind === 'artifact' ? art(rec, sel.id) : undefined
  const s = sel.kind === 'state' ? rec.states.find((x) => x.n === sel.id) : undefined
  if (!a && !s) return null

  const body = a ? <ArtifactBody data={data} rec={rec} a={a} setSel={setSel} /> : <StateBody rec={rec} s={s!} setSel={setSel} />
  const head = a ? <ArtifactHead rec={rec} a={a} close={close} /> : <StateHead s={s!} rec={rec} close={close} />
  const chain = a ? <ChainTabs rec={rec} a={a} setSel={setSel} /> : null
  const foot = a
    ? 'esc to close · ← → walk the version chain'
    : `state · one of ${rec.states.length} · esc to close`

  const shell: CSSProperties = mobile
    ? {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '76%',
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
      {head}
      {chain}
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
        {mobile && a ? 'tap the grabber to close · tabs walk the version chain' : foot}
      </div>
    </div>
  )
}

function HeadShell({
  badgeColor,
  badge,
  glyph,
  path,
  title,
  meta,
  pills,
  asRecorded,
  close,
}: {
  badgeColor: string
  badge: string
  glyph: ReactNode
  path: string
  title: string
  meta: ReactNode
  pills: ReactNode
  asRecorded: string
  close: () => void
}) {
  return (
    <div style={{ flex: 'none', borderTop: `2px solid ${C.goldMid}`, padding: '14px 18px 13px', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: `1px solid ${badgeColor}`, borderRadius: 2, padding: '3px 8px' }}>
          {glyph}
          <span style={{ font: `600 9px/1 ${MONO_FONT}`, letterSpacing: '.16em', color: badgeColor }}>{badge}</span>
        </span>
        <button onClick={close} className="hov-ink" style={{ font: `400 15px/1 ${MONO_FONT}`, color: C.inkFaint, cursor: 'pointer', padding: '0 3px' }}>
          ×
        </button>
      </div>
      <div style={{ font: `400 8.5px/1.5 ${MONO_FONT}`, color: C.inkFaint, overflowWrap: 'anywhere' }}>{path}</div>
      <div style={{ font: `400 21px/1.2 ${DISPLAY}`, color: C.ink, margin: '10px 0 12px', textWrap: 'pretty' }}>{title}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>{meta}</div>
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 11 }}>{pills}</div>
      <div style={{ font: `400 10px/1.5 ${SERIF}`, color: C.inkFaint, fontStyle: 'italic', marginTop: 8 }}>{asRecorded}</div>
    </div>
  )
}

function AgentChip({ mono, label }: { mono: string; label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        background: C.contentBg,
        border: `1px solid ${C.borderLt}`,
        borderRadius: 2,
        padding: '3px 9px 3px 4px',
      }}
    >
      <AgentSeal mono={mono} size={19} />
      <span style={{ font: `400 10px/1 ${MONO_FONT}`, color: C.inkMid }}>{label}</span>
    </span>
  )
}

function ArtifactHead({ rec, a, close }: { rec: IdeaRecord; a: Artifact; close: () => void }) {
  const t = TYPE[a.type] ?? TYPE.Spark
  return (
    <HeadShell
      badgeColor={t.accent}
      badge={a.type.toUpperCase()}
      glyph={<GlyphMark g={t} size={10} />}
      path={a.terminal ? a.file : `idea-${rec.id}/artifacts/${a.file}`}
      title={a.title}
      meta={
        <>
          <AgentChip mono={a.mono} label={`${a.verb} · ${a.agent}`} />
          <span style={{ font: `400 9.5px/1 ${MONO_FONT}`, color: C.inkSoft }}>{a.date}</span>
        </>
      }
      pills={classifierPills(a)}
      asRecorded="Shown as recorded. Nothing computed, nothing graded."
      close={close}
    />
  )
}

function StateHead({ s, rec, close }: { s: StateSnap; rec: IdeaRecord; close: () => void }) {
  return (
    <HeadShell
      badgeColor={C.gold}
      badge="STATE"
      glyph={<span style={{ width: 10, height: 10, border: `2px solid ${C.gold}`, borderRadius: 2, display: 'inline-block' }} />}
      path={`idea-${rec.id}/state/${pad(s.n)}.md`}
      title={`State ${pad(s.n)}`}
      meta={
        <>
          <AgentChip mono="St" label="the Steward’s hand — no agent writes state" />
          <span style={{ font: `400 9.5px/1 ${MONO_FONT}`, color: C.inkSoft }}>{s.date}</span>
        </>
      }
      pills={
        <>
          <Pill text={`session-verb: ${s.verb || 'none'}`} hot={!!s.verb} />
          {s.skill && <Pill text="session-skill" />}
          <Pill text="shape: prose" />
          <Pill text={s.n === 0 ? 'previous: —' : `previous: ${pad(s.n - 1)}`} />
        </>
      }
      asRecorded="Immutable. Copied forward from the snapshot before it; never edited."
      close={close}
    />
  )
}

function ChainTabs({ rec, a, setSel }: { rec: IdeaRecord; a: Artifact; setSel: (s: Selection) => void }) {
  const preds = chainPredecessors(rec, a)
  const succ = successorOf(rec, a)
  if (!preds.length && !succ) return null
  const walk: Artifact[] = []
  if (succ) walk.push(succ)
  walk.push(a)
  walk.push(...preds)
  return (
    <div
      style={{
        flex: 'none',
        padding: '5px 18px 0',
        borderBottom: `1px solid ${C.border}`,
        background: C.contentBg,
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {walk.map((x) => {
        const here = x.n === a.n
        const sup = isSuperseded(rec, x)
        return (
          <button
            key={String(x.n)}
            onClick={() => setSel({ kind: 'artifact', id: x.n })}
            style={{ padding: '8px 10px 7px', borderBottom: `2px solid ${here ? C.gold : 'transparent'}`, opacity: here ? 1 : 0.7, cursor: 'pointer' }}
          >
            <div style={{ font: `600 9.5px/1 ${MONO_FONT}`, color: sup ? C.red : C.ink, textDecoration: sup ? 'line-through' : 'none' }}>
              {pad(x.n)}
              {here ? ' · HERE' : ''}
            </div>
            <div style={{ font: `400 8.5px/1 ${MONO_FONT}`, color: C.inkSoft, marginTop: 4 }}>{x.verb}</div>
          </button>
        )
      })}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', font: `400 8.5px/1 ${MONO_FONT}`, color: C.inkFaint }}>
        version chain · {walk.length} deep
      </div>
    </div>
  )
}

function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b) => (
        <div key={b.label} style={{ marginTop: 14, paddingTop: 11, borderTop: `1px dashed ${C.border}` }}>
          <MonoLabel style={{ letterSpacing: '.14em', marginBottom: 7 }}>{b.label}</MonoLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {b.rows.map((row, i) =>
              row.onClick ? (
                <button
                  key={i}
                  onClick={row.onClick}
                  className="hov-ink"
                  style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: row.color, cursor: 'pointer', overflowWrap: 'anywhere' }}
                >
                  {row.t}
                </button>
              ) : (
                <span key={i} style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: row.color, overflowWrap: 'anywhere' }}>
                  {row.t}
                </span>
              ),
            )}
          </div>
          {b.note && <div style={{ font: `400 12px/1.5 ${SERIF}`, color: C.inkSoft, fontStyle: 'italic', marginTop: 7 }}>{b.note}</div>}
        </div>
      ))}
    </>
  )
}

function ShelfLife({ a, rec, nowISO }: { a: Artifact; rec: IdeaRecord; nowISO: string }) {
  if (!a.stale) return null
  const left = daysTo(a.stale, nowISO)
  const total = Math.max(1, Math.round((Date.parse(a.stale + 'T00:00:00Z') - Date.parse((a.date || rec.created) + 'T00:00:00Z')) / 86400000))
  const spent = Math.max(2, Math.min(98, Math.round(((total - left) / total) * 100)))
  return (
    <div style={{ margin: '0 0 15px', paddingBottom: 14, borderBottom: `1px dashed ${C.border}` }}>
      <MonoLabel style={{ letterSpacing: '.18em', marginBottom: 9 }}>SHELF LIFE</MonoLabel>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <div style={{ flex: 1, height: 9, background: C.borderLt, border: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${spent}%`, background: C.gold }} />
          <div
            style={{
              position: 'absolute',
              left: `${spent}%`,
              top: 0,
              bottom: 0,
              right: 0,
              background: 'repeating-linear-gradient(45deg,#C9A94E 0 1px,transparent 1px 5px)',
            }}
          />
        </div>
        <span style={{ font: `600 11.5px/1 ${MONO_FONT}`, color: left >= 0 ? C.inkMid : C.red, whiteSpace: 'nowrap' }}>
          {left >= 0 ? `${left} days left` : `went stale ${-left} days ago`}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkSoft }}>gathered {a.date}</span>
        <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.gold }}>stale_after {a.stale}</span>
      </div>
    </div>
  )
}

function ArtifactBody({ data, rec, a, setSel }: { data: EstateData; rec: IdeaRecord; a: Artifact; setSel: (s: Selection) => void }) {
  const st = rec.states.find((x) => x.out.includes(a.n))
  const blocks: Block[] = []
  if (a.inputs.length)
    blocks.push({
      label: 'INPUTS — WALK BACK',
      rows: a.inputs.map((n) => {
        const x = art(rec, n)
        const sup = x ? isSuperseded(rec, x) : false
        return {
          t: (x ? x.file : String(n)) + (sup ? '  · superseded' : ''),
          color: sup ? C.red : C.gold,
          onClick: x ? () => setSel({ kind: 'artifact', id: n }) : undefined,
        }
      }),
    })
  else
    blocks.push({
      label: 'INPUTS',
      rows: [{ t: '[] — none', color: C.inkFaint }],
      note: 'A boundary input: words from outside the system, not an artifact already in it.',
    })
  if (st)
    blocks.push({
      label: 'RECORDED BY',
      rows: [
        {
          t: `state/${pad(st.n)}.md — session-verb: ${st.verb || 'none'}`,
          color: C.gold,
          onClick: () => setSel({ kind: 'state', id: st.n }),
        },
      ],
    })
  if (a.nextSteps.length)
    blocks.push({
      label: 'POTENTIAL NEXT STEPS — INERT',
      rows: [{ t: a.nextSteps.join(' · '), color: C.inkSoft }],
      note: 'Suggestions on the record. They become work only when T selects them.',
    })
  if (a.terminal && a.origin)
    blocks.push({
      label: 'PROVENANCE',
      rows: [{ t: `origin: ${a.origin} — the only thing that travels backward`, color: C.gold }],
    })

  const tip = tipOf(rec, a)
  return (
    <>
      <ShelfLife a={a} rec={rec} nowISO={data.generatedAt.replace(' ', 'T') + ':00Z'} />
      {a.classifiers['challenged'] === true && (
        <div
          style={{
            font: `400 12.5px/1.55 ${SERIF}`,
            color: C.inkSoft,
            fontStyle: 'italic',
            margin: '0 0 13px',
            borderLeft: `2px solid ${C.goldMid}`,
            paddingLeft: 10,
          }}
        >
          An attack survived is information T paid for.
        </div>
      )}
      <MonoLabel style={{ letterSpacing: '.18em', margin: '0 0 7px' }}>{a.summary ? 'SUMMARY — AS RECORDED' : 'THIS ARTIFACT'}</MonoLabel>
      <div style={{ font: `400 14px/1.6 ${SERIF}`, color: C.ink }}>{a.summary ?? a.excerpt}</div>
      {tip?.postExport && (
        <div style={{ font: `400 14px/1.6 ${SERIF}`, color: C.inkMid, marginTop: 12 }}>
          Written after the Seed shipped — the tip of this chain is newer than the export that quotes its predecessor.
        </div>
      )}
      <BlockList blocks={blocks} />
    </>
  )
}

function StateBody({ rec, s, setSel }: { rec: IdeaRecord; s: StateSnap; setSel: (sel: Selection) => void }) {
  const blocks: Block[] = []
  if (s.steer)
    blocks.push({
      label: 'WROTE OUTSIDE THE RECORD — NO ARTIFACT',
      rows: s.steer.map((f) => ({ t: f, color: C.gold })),
      note: 'This is the hatched band under the rails. Steering that left no typed artifact, disclosed rather than hidden.',
    })
  if (s.out.length)
    blocks.push({
      label: 'RECORDED',
      rows: s.out.map((n) => {
        const x = art(rec, n)
        return { t: x ? x.file : String(n), color: C.gold, onClick: x ? () => setSel({ kind: 'artifact', id: n }) : undefined }
      }),
    })
  else if (!s.steer) blocks.push({ label: 'RECORDED', rows: [{ t: 'nothing — no artifact this session', color: C.inkFaint }] })
  return (
    <>
      <MonoLabel style={{ letterSpacing: '.18em', margin: '0 0 7px' }}>ESTABLISHED</MonoLabel>
      <div style={{ font: `400 14px/1.6 ${SERIF}`, color: C.ink, whiteSpace: 'pre-line' }}>{s.est}</div>
      {s.skill && (
        <div style={{ font: `400 12px/1.5 ${SERIF}`, color: C.inkSoft, fontStyle: 'italic', marginTop: 10 }}>session-skill: {s.skill}</div>
      )}
      <BlockList blocks={blocks} />
    </>
  )
}
