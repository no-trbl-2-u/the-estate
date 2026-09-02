// The How It Works walkthrough — the one authored view in Estate View.
// Everything else in the app derives from estate.json; this tab instead
// teaches the system on a worked example (Tidewatch) that is not a record.
// Content lives in ./data.ts; this file is choreography and rendering.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE } from '../../lib/theme'
import { AgentSeal, GlyphMark, MonoLabel, Pill } from '../bits'
import type { ChatTurn, JourneyBeat, Run, VerbDemo } from './data'
import { JOURNEY, LOOP_PHASES, ONBOARD, RETURN_PATH, RUN_LABEL, TERM_SCRIPT, VERBS } from './data'

const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms))
const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const RUN_COLOR: Record<Run, string> = {
  inline: C.teal,
  'fresh-eyes': C.red,
  quarantine: C.goldMid,
  clerical: C.inkFaint,
}

function useNarrow() {
  const [n, setN] = useState(() => window.matchMedia('(max-width: 860px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const on = () => setN(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return n
}

/** Adds .hiw-in when scrolled into view (removed on full exit, so reveals replay). */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setInView(true)
          else if (e.intersectionRatio === 0) setInView(false)
        }),
      { threshold: [0, 0.25] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, inView }
}

/** Bumps runId each time the element re-enters the viewport; exposes manual replay. */
function useAutoReplay<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [runId, setRunId] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let visible = false
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting && !visible) {
            visible = true
            setRunId((n) => n + 1)
          } else if (!e.isIntersecting && e.intersectionRatio === 0) visible = false
        }),
      { threshold: [0, 0.3] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, runId, replay: useCallback(() => setRunId((n) => n + 1), []) }
}

/** Typewriter text; instant under reduced motion. */
function Typer({ text, runId, speed = 15, style }: { text: string; runId: number; speed?: number; style?: React.CSSProperties }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!runId) return
    if (REDUCED) {
      setN(text.length)
      return
    }
    setN(0)
    let alive = true
    let i = 0
    const tick = () => {
      if (!alive) return
      i += 1
      setN(i)
      if (i < text.length) window.setTimeout(tick, text[i - 1] === '.' ? speed * 5 : speed)
    }
    const t = window.setTimeout(tick, 250)
    return () => {
      alive = false
      window.clearTimeout(t)
    }
  }, [runId, text, speed])
  const done = n >= text.length
  return (
    <span style={{ whiteSpace: 'pre-wrap', ...style }}>
      {text.slice(0, n)}
      {!done && runId > 0 && <span className="hiw-caret" />}
    </span>
  )
}

// ---------------------------------------------------------------- shared bits

function Kicker({ children, color = C.gold }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <span style={{ width: 24, height: 1, background: color, display: 'inline-block' }} />
      <span style={{ font: `600 9px/1 ${MONO_FONT}`, letterSpacing: '.2em', color, textTransform: 'uppercase' }}>{children}</span>
    </div>
  )
}

function ChapterTitle({ children }: { children: React.ReactNode }) {
  return <div style={{ font: `400 30px/1.1 ${DISPLAY}`, color: C.ink, margin: '10px 0 8px', textWrap: 'balance' }}>{children}</div>
}

function Law({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: '10px 14px',
        borderLeft: `2px solid ${C.goldMid}`,
        background: C.goldBg,
        font: `400 13px/1.55 ${SERIF}`,
        fontStyle: 'italic',
        color: C.inkMid,
        maxWidth: '52ch',
      }}
    >
      <MonoLabel color={C.gold} style={{ marginBottom: 5, fontStyle: 'normal' }}>
        THE LAW BEHIND IT
      </MonoLabel>
      {children}
    </div>
  )
}

function DocCard({ path, children, style }: { path: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, boxShadow: '0 10px 26px rgba(22,33,31,.10)', overflow: 'hidden', ...style }}>
      <div style={{ padding: '7px 12px', background: C.contentBg, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ display: 'flex', gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: C.border, display: 'inline-block' }} />
          ))}
        </span>
        <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkSoft, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{path}</span>
      </div>
      <div style={{ padding: '15px 17px' }}>{children}</div>
    </div>
  )
}

function RunBadge({ run }: { run: Run }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: `500 9px/1 ${MONO_FONT}`, color: RUN_COLOR[run] }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: RUN_COLOR[run], display: 'inline-block' }} />
      {run}
    </span>
  )
}

// ------------------------------------------------------------------ chat replay

function ChatReplay({
  script,
  runId,
  onDone,
  compact,
}: {
  script: ChatTurn[]
  runId: number
  onDone?: () => void
  compact?: boolean
}) {
  const [step, setStep] = useState(0)
  const doneRef = useRef(onDone)
  doneRef.current = onDone
  useEffect(() => {
    if (!runId) return
    if (REDUCED) {
      setStep(script.length)
      doneRef.current?.()
      return
    }
    setStep(0)
    let alive = true
    let i = 0
    const tick = () => {
      if (!alive) return
      i += 1
      setStep(i)
      if (i < script.length) window.setTimeout(tick, script[i].who === 'sys' ? 850 : 1050)
      else doneRef.current?.()
    }
    const t = window.setTimeout(tick, 400)
    return () => {
      alive = false
      window.clearTimeout(t)
    }
  }, [runId, script])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 10 }}>
      {script.slice(0, step).map((turn, i) => {
        if (turn.who === 'sys')
          return (
            <div
              key={i}
              className="hiw-fade"
              style={{
                alignSelf: 'center',
                font: `400 9.5px/1.5 ${MONO_FONT}`,
                color: C.inkSoft,
                border: `1px dashed ${C.border}`,
                borderRadius: 2,
                padding: '6px 11px',
                textAlign: 'center',
                maxWidth: '92%',
              }}
            >
              {turn.text}
            </div>
          )
        const isT = turn.who === 'T'
        const name = isT ? 'T · the operator' : turn.who === 'S' ? 'The Steward' : turn.as ?? 'voice'
        return (
          <div key={i} className="hiw-fade" style={{ alignSelf: isT ? 'flex-end' : 'flex-start', maxWidth: '86%' }}>
            <div style={{ font: `500 8px/1 ${MONO_FONT}`, letterSpacing: '.12em', color: isT ? C.gold : C.inkSoft, margin: `0 4px 4px`, textAlign: isT ? 'right' : 'left', textTransform: 'uppercase' }}>
              {name}
            </div>
            <div
              style={{
                background: isT ? C.goldBg : C.panelBg,
                border: `1px solid ${isT ? C.goldMid : C.border}`,
                borderRadius: 3,
                padding: compact ? '8px 11px' : '9px 13px',
                font: `400 ${compact ? 12.5 : 13.5}px/1.5 ${SERIF}`,
                color: C.ink,
              }}
            >
              {turn.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// -------------------------------------------------------------------- overture

function Overture({ narrow }: { narrow: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section id="hiw-ov" ref={ref} className={inView ? 'hiw-in' : ''} style={{ padding: narrow ? '34px 0 26px' : '52px 0 40px' }}>
      <div className="hiw-rv">
        <Kicker>How it works · a worked walkthrough</Kicker>
      </div>
      <div className="hiw-rv hiw-d1" style={{ font: `400 ${narrow ? 34 : 46}px/1.05 ${DISPLAY}`, color: C.ink, margin: '14px 0 12px', maxWidth: '18ch' }}>
        From a 2am note to a shipping loop.
      </div>
      <div className="hiw-rv hiw-d2" style={{ font: `400 15.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '62ch' }}>
        Ideas enter the estate loose and leave as <b>Seeds</b> — an elaborated six-month vision plus a rough path, carried out to become a real
        project somewhere else. Then one command adopts a worker loop around the Seed, and the loop ships it phase by phase.
      </div>
      <div className="hiw-rv hiw-d3" style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkSoft, maxWidth: '62ch', marginTop: 8 }}>
        Five chapters: the journey of one idea, every verb in the household, branching from an old snapshot, the gate, and the Nexus loop. The
        worked example throughout is <b>Tidewatch</b> — a one-thumb mobile roguelike where the tide is the enemy. It is not a record in{' '}
        <span style={{ font: `400 12px ${MONO_FONT}` }}>ideas/</span>; everything else shown is real.
      </div>
    </section>
  )
}

// -------------------------------------------------------------- ch1: journey

function JourneyExcerpt({ beat }: { beat: JourneyBeat }) {
  const ex = beat.excerpt
  if (ex.kind === 'rows')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {(ex.body as [string, string][]).map(([k, v], i) => (
          <div key={k} className={`hiw-rv hiw-d${i + 2}`} style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: 10, alignItems: 'baseline', padding: '8px 10px', background: C.contentBg, border: `1px solid ${C.borderLt}`, borderRadius: 2 }}>
            <span style={{ font: `600 8.5px/1.5 ${MONO_FONT}`, letterSpacing: '.1em', color: k === 'ASSUMPTION' ? C.red : C.teal }}>{k}</span>
            <span style={{ font: `400 12.5px/1.5 ${SERIF}`, color: C.inkMid }}>{v}</span>
          </div>
        ))}
      </div>
    )
  if (ex.kind === 'mono')
    return <pre style={{ margin: 0, font: `400 11px/1.8 ${MONO_FONT}`, color: C.inkMid, whiteSpace: 'pre-wrap' }}>{ex.body as string}</pre>
  return <div style={{ font: `400 14.5px/1.65 ${SERIF}`, fontStyle: 'italic', color: C.inkMid, whiteSpace: 'pre-wrap' }}>{ex.body as string}</div>
}

function JourneyBeatSec({ beat, i, narrow }: { beat: JourneyBeat; i: number; narrow: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const typer = useAutoReplay<HTMLDivElement>()
  const g = TYPE[beat.type]
  const isSpark = i === 0
  return (
    <section
      id={`hiw-j${i}`}
      ref={ref}
      className={inView ? 'hiw-in' : ''}
      style={{ padding: narrow ? '28px 0' : '46px 0', borderTop: i ? `1px solid ${C.borderLt}` : 'none' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(260px, 5fr) minmax(0, 7fr)', gap: narrow ? 18 : 40, alignItems: 'start' }}>
        <div>
          <div className="hiw-rv">
            <Kicker color={C.teal}>{`beat ${i + 1} · ${beat.verb}`}</Kicker>
          </div>
          <div className="hiw-rv hiw-d1" style={{ font: `400 24px/1.15 ${DISPLAY}`, color: C.ink, margin: '10px 0 8px' }}>
            {beat.title}
          </div>
          <div className="hiw-rv hiw-d2" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <AgentSeal mono={beat.voice.replace('The ', '').slice(0, 2)} size={20} />
            <span style={{ font: `400 10px/1 ${MONO_FONT}`, color: C.inkSoft }}>
              {beat.voice} · writes a {beat.type}
            </span>
          </div>
          <div className="hiw-rv hiw-d3" style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '48ch' }}>{beat.lede}</div>
          <div className="hiw-rv hiw-d4">
            <Law>{beat.law}</Law>
          </div>
          {beat.seal && (
            <div className="hiw-rv hiw-d5" style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
              <span style={{ width: 9, height: 9, borderRadius: 1, background: 'radial-gradient(circle at 35% 30%,#9C3F31,#6E271E)', display: 'inline-block' }} />
              <span style={{ font: `500 8.5px/1.4 ${MONO_FONT}`, letterSpacing: '.08em', color: C.inkSoft }}>{beat.seal}</span>
            </div>
          )}
        </div>
        <div ref={typer.ref} className="hiw-rv hiw-d2">
          <DocCard path={beat.docPath}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 11 }}>
              <GlyphMark g={g} size={16} />
              <span style={{ font: `400 13px/1 ${DISPLAY}`, color: C.ink }}>{beat.type}</span>
              <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkFaint }}>{`${beat.verb} · ${beat.voice}`}</span>
            </div>
            {isSpark ? (
              <div style={{ font: `400 14.5px/1.65 ${SERIF}`, fontStyle: 'italic', color: C.inkMid, minHeight: 90 }}>
                <Typer text={beat.excerpt.body as string} runId={typer.runId} />
              </div>
            ) : (
              <JourneyExcerpt beat={beat} />
            )}
            {beat.classifiers && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {beat.classifiers.map((cl) => (
                  <Pill key={cl} text={cl} colors={{ color: C.teal, bc: '#9FBDB8', bg: '#E9F0EE' }} />
                ))}
              </div>
            )}
          </DocCard>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- ch2: atlas

function AtlasChapter({ narrow }: { narrow: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [sel, setSel] = useState(1) // start on capture
  const [replayId, setReplayId] = useState(1)
  const [chatDone, setChatDone] = useState(false)
  const [touring, setTouring] = useState(false)
  const tourTok = useRef(0)
  const v = VERBS[sel]

  const pick = useCallback((i: number, fromTour = false) => {
    if (!fromTour) {
      tourTok.current += 1
      setTouring(false)
    }
    setSel(i)
    setChatDone(false)
    setReplayId((n) => n + 1)
  }, [])

  const stopTour = useCallback(() => {
    tourTok.current += 1
    setTouring(false)
  }, [])

  const tour = useCallback(async () => {
    const tok = ++tourTok.current
    setTouring(true)
    for (let i = 0; i < VERBS.length; i++) {
      if (tourTok.current !== tok) return
      pick(i, true)
      await wait(REDUCED ? 1400 : VERBS[i].script.length * 1100 + 2300)
    }
    if (tourTok.current === tok) setTouring(false)
  }, [pick])

  const groups = useMemo(() => {
    const out: { voice: string; items: { v: VerbDemo; i: number }[] }[] = []
    VERBS.forEach((vd, i) => {
      const g = out.find((x) => x.voice === vd.voice)
      if (g) g.items.push({ v: vd, i })
      else out.push({ voice: vd.voice, items: [{ v: vd, i }] })
    })
    return out
  }, [])

  return (
    <section id="hiw-atlas" ref={ref} className={inView ? 'hiw-in' : ''} style={{ padding: narrow ? '30px 0' : '48px 0', borderTop: `1px solid ${C.border}` }}>
      <div className="hiw-rv">
        <Kicker>Chapter 2 · the verb atlas</Kicker>
      </div>
      <div className="hiw-rv hiw-d1">
        <ChapterTitle>What it looks like to hit every verb.</ChapterTitle>
      </div>
      <div className="hiw-rv hiw-d2" style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch', marginBottom: 6 }}>
        You never memorize this table — you say what you want in your own words, and the Steward names the verb. Naming is always selection: an
        inline verb is simply performed in its voice; a <b>fresh-eyes</b> or <b>quarantine</b> verb is proposed, and the dispatch waits for your
        word. Click any verb to watch the exchange, or take the tour.
      </div>
      <div className="hiw-rv hiw-d3" style={{ marginBottom: 16 }}>
        <button
          onClick={touring ? stopTour : tour}
          className="hov-border"
          style={{
            background: touring ? C.contentBg : C.goldBg,
            border: `1px solid ${C.goldMid}`,
            borderRadius: 2,
            padding: '7px 13px',
            font: `500 11px/1 ${MONO_FONT}`,
            color: C.gold,
            cursor: 'pointer',
          }}
        >
          {touring ? '■ stop the tour' : '▶ tour all nineteen'}
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '236px minmax(0,1fr)', gap: narrow ? 14 : 18, alignItems: 'start' }}>
        {/* verb list */}
        <div className="hiw-rv hiw-d3" style={{ display: 'flex', flexDirection: narrow ? 'row' : 'column', flexWrap: narrow ? 'wrap' : 'nowrap', gap: narrow ? 4 : 0, maxHeight: narrow ? undefined : 560, overflowY: narrow ? undefined : 'auto', border: `1px solid ${C.border}`, background: C.panelBg, borderRadius: 3, padding: narrow ? 8 : '6px 0' }}>
          {groups.map((g) => (
            <div key={g.voice} style={{ display: narrow ? 'contents' : 'block' }}>
              {!narrow && (
                <MonoLabel style={{ padding: '9px 12px 5px' }}>{g.voice.toUpperCase()}</MonoLabel>
              )}
              {g.items.map(({ v: vd, i }) => {
                const on = i === sel
                return (
                  <button
                    key={vd.verb}
                    onClick={() => pick(i)}
                    className="hov-bg"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      width: narrow ? 'auto' : '100%',
                      padding: narrow ? '6px 10px' : '6px 12px',
                      background: on ? C.goldBg : 'transparent',
                      borderTop: narrow ? `1px solid ${on ? C.goldMid : C.borderLt}` : 'none',
                      borderRight: narrow ? `1px solid ${on ? C.goldMid : C.borderLt}` : 'none',
                      borderBottom: narrow ? `1px solid ${on ? C.goldMid : C.borderLt}` : 'none',
                      borderLeft: narrow ? `1px solid ${on ? C.goldMid : C.borderLt}` : `2px solid ${on ? C.gold : 'transparent'}`,
                      borderRadius: narrow ? 2 : 0,
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: RUN_COLOR[vd.run], display: 'inline-block', flex: 'none' }} />
                    <span style={{ font: `500 11px/1 ${MONO_FONT}`, color: on ? C.gold : C.inkMid, flex: narrow ? 'none' : 1, textAlign: 'left' }}>{vd.verb}</span>
                    {!narrow && <span style={{ font: `400 8px/1 ${MONO_FONT}`, color: C.inkFaint }}>{vd.sig.length > 22 ? '' : vd.sig}</span>}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
        {/* replay stage */}
        <div className="hiw-rv hiw-d4" style={{ background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, boxShadow: '0 10px 26px rgba(22,33,31,.08)' }}>
          <div style={{ padding: '13px 16px', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <AgentSeal mono={v.mark} size={30} />
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, flexWrap: 'wrap' }}>
                <span style={{ font: `400 17px/1 ${DISPLAY}`, color: C.ink }}>{v.verb}</span>
                <span style={{ font: `400 10px/1 ${MONO_FONT}`, color: C.inkSoft }}>{v.voice}</span>
              </div>
              <div style={{ font: `400 9px/1.6 ${MONO_FONT}`, color: C.inkFaint, marginTop: 3 }}>
                {v.family} · {v.sig}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <RunBadge run={v.run} />
              <div style={{ font: `400 8.5px/1.5 ${MONO_FONT}`, color: C.inkFaint, marginTop: 3, maxWidth: 240 }}>{RUN_LABEL[v.run]}</div>
            </div>
          </div>
          <div style={{ padding: '15px 16px', minHeight: narrow ? 230 : 265, display: 'flex', flexDirection: 'column' }}>
            <ChatReplay script={v.script} runId={replayId} onDone={() => setChatDone(true)} />
            {chatDone && (
              <div className="hiw-pop" style={{ marginTop: 'auto', paddingTop: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 13px', background: C.contentBg, border: `1px solid ${C.border}`, borderRadius: 2 }}>
                  {v.produces ? (
                    <GlyphMark g={TYPE[v.produces]} size={15} />
                  ) : (
                    <span style={{ width: 9, height: 9, borderRadius: 1, background: 'radial-gradient(circle at 35% 30%,#9C3F31,#6E271E)', display: 'inline-block', flex: 'none' }} />
                  )}
                  <span style={{ font: `400 11px/1.5 ${MONO_FONT}`, color: C.inkMid }}>{v.result}</span>
                </div>
                {v.boundary && (
                  <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.red, marginTop: 7 }}>boundary · {v.boundary}</div>
                )}
                <div style={{ font: `400 12px/1.55 ${SERIF}`, fontStyle: 'italic', color: C.inkSoft, marginTop: 8 }}>{v.note}</div>
              </div>
            )}
          </div>
          <div style={{ padding: '8px 16px 12px', borderTop: `1px solid ${C.borderLt}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ font: `400 8.5px/1 ${MONO_FONT}`, color: C.inkFaint }}>
              {sel + 1} / {VERBS.length}
            </span>
            <button onClick={() => pick(sel)} className="hov-ink" style={{ font: `400 10px/1 ${MONO_FONT}`, color: C.inkSoft, cursor: 'pointer' }}>
              ↻ replay
            </button>
          </div>
        </div>
      </div>
      <div className="hiw-rv hiw-d5" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 12 }}>
        {(['inline', 'fresh-eyes', 'quarantine', 'clerical'] as Run[]).map((r) => (
          <span key={r} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: `400 9.5px/1 ${MONO_FONT}`, color: C.inkSoft }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: RUN_COLOR[r] }} />
            {r}
          </span>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- ch3: graft

function GraftChapter({ narrow }: { narrow: boolean }) {
  const auto = useAutoReplay<HTMLDivElement>()
  const [gstep, setGstep] = useState(0)
  useEffect(() => {
    if (!auto.runId) return
    if (REDUCED) {
      setGstep(5)
      return
    }
    setGstep(0)
    let alive = true
    const steps = [600, 1100, 2400, 1300, 900]
    let acc = 0
    const timers = steps.map((d, i) => {
      acc += d
      return window.setTimeout(() => alive && setGstep(i + 1), acc)
    })
    return () => {
      alive = false
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [auto.runId])

  const chainDot = (n: number) => {
    const picked = n === 2 && gstep >= 1
    return (
      <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <span
          style={{
            width: picked ? 18 : 13,
            height: picked ? 18 : 13,
            borderRadius: '50%',
            background: picked ? C.goldBg : C.panelBg,
            border: `2px solid ${picked ? C.gold : n === 3 ? C.teal : C.border}`,
            transition: 'all .4s ease',
            boxShadow: picked ? '0 0 0 4px rgba(201,169,78,.25)' : undefined,
          }}
        />
        <span style={{ font: `${picked ? 600 : 400} 8.5px/1 ${MONO_FONT}`, color: picked ? C.gold : n === 3 ? C.teal : C.inkFaint }}>
          {String(n).padStart(4, '0')}
          {n === 3 ? ' · head' : ''}
        </span>
      </div>
    )
  }

  return (
    <section id="hiw-graft" ref={auto.ref} style={{ padding: narrow ? '30px 0' : '48px 0', borderTop: `1px solid ${C.border}` }} className="hiw-in">
      <Kicker>Chapter 3 · branching</Kicker>
      <ChapterTitle>Grafting from an old snapshot.</ChapterTitle>
      <div style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch', marginBottom: 20 }}>
        State is immutable, so time travel is opening an older file — and branching is starting a new chain from one. A <b>graft</b> takes any
        prior snapshot of any record, inherits the artifact tips <i>as of that snapshot</i> (never today’s), and carries your words for why the
        branch exists — the Direction — verbatim into the new record’s origin.
      </div>
      <div style={{ background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, padding: narrow ? '16px 14px' : '22px 24px', boxShadow: '0 10px 26px rgba(22,33,31,.08)' }}>
        {/* source record + chain */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ font: `600 10px/1 ${MONO_FONT}`, color: C.inkSoft }}>idea-0005</span>
          <span style={{ font: `400 14px/1 ${DISPLAY}`, color: C.ink }}>Tidewatch</span>
          <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkFaint }}>state chain — one snapshot per session, never edited</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4, padding: '6px 4px 2px' }}>
          {[0, 1, 2, 3].map((n) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 4, flex: n < 3 ? 1 : 'none', minWidth: 0 }}>
              {chainDot(n)}
              {n < 3 && <span style={{ flex: 1, height: 1, background: C.border, marginBottom: 14, minWidth: 14 }} />}
            </div>
          ))}
        </div>
        {/* direction */}
        {gstep >= 2 && (
          <div className="hiw-fade" style={{ margin: '16px 0 0', padding: '10px 14px', borderLeft: `2px solid ${C.gold}`, background: C.goldBg }}>
            <MonoLabel color={C.gold} style={{ marginBottom: 5 }}>
              DIRECTION — T’S WORDS, REQUIRED, RECORDED VERBATIM
            </MonoLabel>
            <span style={{ font: `400 13.5px/1.5 ${SERIF}`, fontStyle: 'italic', color: C.inkMid }}>
              <Typer text="“branch from before the meta layer — what if two keepers, co-op? same rock, both thumbs accounted for.”" runId={gstep >= 2 ? auto.runId : 0} speed={13} />
            </span>
          </div>
        )}
        {/* new record */}
        {gstep >= 3 && (
          <div className="hiw-pop" style={{ marginTop: 16, display: 'grid', gridTemplateColumns: narrow ? '1fr' : '22px 1fr', gap: 8 }}>
            {!narrow && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ width: 1, flex: 1, background: C.goldMid }} />
                <span style={{ font: `400 11px/1 ${MONO_FONT}`, color: C.gold }}>↘</span>
              </div>
            )}
            <div style={{ background: C.contentBg, border: `1px solid ${C.goldMid}`, borderRadius: 3, padding: '13px 15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ font: `600 10px/1 ${MONO_FONT}`, color: C.gold }}>idea-0006</span>
                <span style={{ font: `400 14px/1 ${DISPLAY}`, color: C.ink }}>Tidewatch, crewed</span>
                <Pill text="status: active" colors={{ color: C.teal, bc: '#9FBDB8', bg: '#E9F0EE' }} />
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
                <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkSoft }}>inherits tips as of state/0002 →</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: `400 9px/1 ${MONO_FONT}`, color: C.inkMid }}>
                  <GlyphMark g={TYPE.Framing} size={9} /> Framing
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: `400 9px/1 ${MONO_FONT}`, color: C.inkMid }}>
                  <GlyphMark g={TYPE.Horizon} size={9} /> Horizon
                </span>
                <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkFaint }}>— not the meta layer; that came later</span>
              </div>
              {gstep >= 4 && (
                <div className="hiw-fade" style={{ marginTop: 10, paddingTop: 9, borderTop: `1px dashed ${C.border}`, font: `400 9.5px/1.7 ${MONO_FONT}`, color: C.inkSoft }}>
                  relates: grafted-from idea-0005 @ state/0002 · written on both records, machine-drawn, derivable
                </div>
              )}
            </div>
          </div>
        )}
        {gstep >= 5 && (
          <div className="hiw-fade" style={{ marginTop: 14, font: `400 12.5px/1.6 ${SERIF}`, fontStyle: 'italic', color: C.inkSoft }}>
            idea-0005 is untouched — a source is advanced by a new snapshot, never edited. The same move revives a retired record: branch from
            any snapshot it ever had.
          </div>
        )}
        <div style={{ marginTop: 12, textAlign: 'right' }}>
          <button onClick={auto.replay} className="hov-ink" style={{ font: `400 10px/1 ${MONO_FONT}`, color: C.inkSoft, cursor: 'pointer' }}>
            ↻ replay the graft
          </button>
        </div>
      </div>
      <Law>Creating a record is a boundary — the graft is proposed, and waits for T’s word. A graft without a Direction is just a copy.</Law>
    </section>
  )
}

// ----------------------------------------------------------------- ch4: gate

function GateChapter({ narrow }: { narrow: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const tree = (rows: [string, string, boolean?][]) => (
    <div style={{ font: `400 10.5px/1.9 ${MONO_FONT}`, color: C.inkMid }}>
      {rows.map(([name, note, glow], i) => (
        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <span style={{ color: glow ? C.gold : undefined, fontWeight: glow ? 600 : 400, whiteSpace: 'pre' }}>{name}</span>
          {note && <span style={{ color: C.inkFaint, fontStyle: 'italic', fontSize: 9.5 }}>{note}</span>}
        </div>
      ))}
    </div>
  )
  return (
    <section id="hiw-gate" ref={ref} className={inView ? 'hiw-in' : ''} style={{ padding: narrow ? '30px 0' : '48px 0', borderTop: `1px solid ${C.border}` }}>
      <div className="hiw-rv">
        <Kicker>Chapter 4 · the gate</Kicker>
      </div>
      <div className="hiw-rv hiw-d1">
        <ChapterTitle>What stays. What travels.</ChapterTitle>
      </div>
      <div className="hiw-rv hiw-d2" style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch', marginBottom: 20 }}>
        The Seed lands in the departure lounge with a sibling <b>payload</b> — the droppable form of the plan, rendered in the target’s own file
        shape. Every decision the estate made travels <i>already made</i>. The expensive part of adoption — inferring stack, hosting, identity —
        never happens, because there is nothing left to infer.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 40px 1fr', gap: narrow ? 12 : 0, alignItems: 'stretch' }}>
        <div className="hiw-rv hiw-d3" style={{ background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, padding: '14px 16px' }}>
          <MonoLabel style={{ marginBottom: 9 }}>THE ESTATE KEEPS</MonoLabel>
          {tree([
            ['ideas/0005-tidewatch/', '', false],
            ['  idea.md', 'origin, verbatim'],
            ['  artifacts/', 'every version, immutable'],
            ['  state/0000‥0003', 'the whole journey'],
          ])}
          <div style={{ font: `400 11.5px/1.6 ${SERIF}`, fontStyle: 'italic', color: C.inkSoft, marginTop: 10 }}>
            Lineage, tensions, rejected framings — all of it stays. None of it travels.
          </div>
        </div>
        <div className="hiw-rv hiw-d4" style={{ display: 'flex', flexDirection: narrow ? 'row' : 'column', alignItems: 'center', justifyContent: 'center', gap: 6, padding: narrow ? '2px 0' : 0 }}>
          <span style={{ flex: 1, width: narrow ? undefined : 1, height: narrow ? 1 : undefined, background: C.border, alignSelf: 'stretch', margin: narrow ? 'auto 0' : '0 auto' }} />
          <GlyphMark g={TYPE.Seed} size={15} />
          <span style={{ flex: 1, width: narrow ? undefined : 1, height: narrow ? 1 : undefined, background: C.border, alignSelf: 'stretch', margin: narrow ? 'auto 0' : '0 auto' }} />
        </div>
        <div className="hiw-rv hiw-d5" style={{ background: C.goldBg, border: `1px solid ${C.goldMid}`, borderRadius: 3, padding: '14px 16px' }}>
          <MonoLabel color={C.gold} style={{ marginBottom: 9 }}>
            THE RECIPIENT GETS
          </MonoLabel>
          {tree([
            ['0005-tidewatch-seed.md', '', true],
            ['0005-tidewatch-payload/', '', true],
            ['  spec.md', 'Horizon · refusals · acceptance'],
            ['  nexus.adopt.json', 'identity, resolved'],
            ['  plan/bearings.md', 'stack locked'],
            ['  plan/steps/01_build_plan.md', 'the Status block'],
            ['  plan/phases/phase_1_bootstrap.md', 'the garden'],
          ])}
        </div>
      </div>
      <div className="hiw-rv hiw-d6">
        <Law>
          Exports are immutable and sealed by the state whose outputs: names them. If the record moves on, the Seed goes stale and owes a
          reconciliation — a re-export, a graft, or a decide-abandon. Never an edit.
        </Law>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- ch5: nexus

function Terminal({ narrow }: { narrow: boolean }) {
  const auto = useAutoReplay<HTMLDivElement>()
  const [lines, setLines] = useState<{ kind: string; text: string; typing?: boolean }[]>([])
  useEffect(() => {
    if (!auto.runId) return
    let alive = true
    setLines([])
    const run = async () => {
      const acc: { kind: string; text: string; typing?: boolean }[] = []
      for (const l of TERM_SCRIPT) {
        if (!alive) return
        if (l.kind === 'cmd' && !REDUCED) {
          acc.push({ kind: 'cmd', text: '', typing: true })
          for (let i = 1; i <= l.text.length; i++) {
            if (!alive) return
            acc[acc.length - 1] = { kind: 'cmd', text: l.text.slice(0, i), typing: i < l.text.length }
            setLines([...acc])
            await wait(8)
          }
          await wait(230)
        } else {
          acc.push({ kind: l.kind, text: l.text })
          setLines([...acc])
          if (!REDUCED) await wait(l.kind === 'cmd' ? 300 : 190)
        }
      }
    }
    run()
    return () => {
      alive = false
    }
  }, [auto.runId])
  const color = (k: string) => (k === 'cmd' ? '#E6E9E1' : k === 'ok' ? '#8FBDB6' : k === 'warn' ? '#C9A94E' : '#87938C')
  return (
    <div ref={auto.ref} style={{ background: '#101512', border: `1px solid #2A312C`, borderRadius: 4, overflow: 'hidden', boxShadow: '0 14px 30px rgba(22,33,31,.25)' }}>
      <div style={{ padding: '7px 12px', background: '#161C18', borderBottom: '1px solid #2A312C', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ display: 'flex', gap: 4 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#39423C', display: 'inline-block' }} />
          ))}
        </span>
        <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: '#87938C' }}>~/dev/tidewatch — zsh</span>
        <button onClick={auto.replay} className="hov-op" style={{ marginLeft: 'auto', font: `400 9px/1 ${MONO_FONT}`, color: '#87938C', cursor: 'pointer' }}>
          ↻ replay
        </button>
      </div>
      <div style={{ padding: '13px 15px', minHeight: narrow ? 200 : 232 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ font: `400 11px/1.75 ${MONO_FONT}`, color: color(l.kind), whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {l.kind === 'cmd' && <span style={{ color: '#8FBDB6', fontWeight: 600 }}>$ </span>}
            {l.text}
            {l.typing && <span className="hiw-caret" style={{ background: '#8FBDB6' }} />}
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneDemo({ stage }: { stage: number }) {
  // stage: 0 none · 2 beam+crabs · 3 juice · 4 hud · 5 relics+tide
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ position: 'relative', width: 186, height: 372, borderRadius: 30, background: '#0B0E0C', border: '1px solid #39423C', boxShadow: '0 18px 44px rgba(22,33,31,.35), inset 0 0 0 4px #161C18', padding: 10 }}>
        <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 62, height: 13, background: '#0B0E0C', borderRadius: '0 0 10px 10px', zIndex: 5 }} />
        <div className={stage === 3 ? 'hiw-quake' : undefined} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 21, overflow: 'hidden', background: 'linear-gradient(180deg,#0B1420 0%,#0D1A26 55%,#0E2030 100%)' }}>
          {[[14, 8], [70, 6], [40, 14], [86, 18], [24, 22]].map(([l, t], i) => (
            <span key={i} style={{ position: 'absolute', left: `${l}%`, top: `${t}%`, width: 2, height: 2, borderRadius: '50%', background: 'rgba(238,240,232,.5)' }} />
          ))}
          <div
            className="hiw-beam"
            style={{
              position: 'absolute',
              left: '50%',
              top: 196,
              width: 400,
              height: 400,
              margin: -200,
              borderRadius: '50%',
              background: `conic-gradient(from 0deg, rgba(201,169,78,${stage >= 3 ? 0.5 : 0.34}) 0deg 24deg, transparent 24deg)`,
              opacity: stage >= 2 ? 1 : 0,
              transition: 'opacity .6s ease',
              filter: stage >= 3 ? 'drop-shadow(0 0 10px rgba(201,169,78,.4))' : undefined,
            }}
          />
          <div style={{ position: 'absolute', left: '50%', bottom: 82, width: 128, height: 42, transform: 'translateX(-50%)', background: 'radial-gradient(ellipse at 50% 30%, #3A423C, #232A25 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: '50%', bottom: 110, width: 19, height: 56, transform: 'translateX(-50%)', background: 'linear-gradient(180deg,#D8DBD2 0 18%,#8E3B2B 18% 40%,#D8DBD2 40% 58%,#8E3B2B 58% 80%,#D8DBD2 80%)', clipPath: 'polygon(22% 0,78% 0,100% 100%,0 100%)' }} />
          <div style={{ position: 'absolute', left: '50%', bottom: 164, width: 11, height: 9, transform: 'translateX(-50%)', background: '#C9A94E', borderRadius: 3, boxShadow: '0 0 12px rgba(201,169,78,.8)' }} />
          {[[26, 102], [64, 96], [46, 90]].map(([l, b], i) => (
            <span key={i} className="hiw-crab" style={{ position: 'absolute', left: `${l}%`, bottom: b, width: 8, height: 5, borderRadius: '50% 50% 30% 30%', background: '#B0563C', opacity: stage >= 2 ? 1 : 0, transition: 'opacity .5s ease', animationDelay: `${i * 0.55}s` }} />
          ))}
          <div style={{ position: 'absolute', left: '-5%', right: '-5%', bottom: 0, height: stage >= 5 ? '31%' : '23%', background: 'linear-gradient(180deg, rgba(94,155,147,.30), rgba(24,66,72,.55))', borderRadius: '40% 46% 0 0 / 12px 15px 0 0', transition: 'height 2s ease' }} />
          <div style={{ position: 'absolute', top: 28, left: 10, right: 10, display: 'flex', justifyContent: 'space-between', font: `600 8px/1 ${MONO_FONT}`, color: '#CFE9E2', opacity: stage >= 4 ? 1 : 0, transition: 'opacity .6s ease', textShadow: '0 1px 3px rgba(0,0,0,.7)' }}>
            <span>⚓ TIDEWATCH</span>
            <span>⚙ 42 salvage</span>
          </div>
          <div style={{ position: 'absolute', bottom: 11, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8, opacity: stage >= 5 ? 1 : 0, transition: 'opacity .6s ease' }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 11, height: 11, background: 'rgba(242,231,180,.85)', clipPath: 'polygon(50% 0,100% 50%,50% 100%,0 50%)', boxShadow: '0 0 7px rgba(242,231,180,.5)' }} />
            ))}
          </div>
        </div>
      </div>
      {stage >= 5 ? (
        <span className="hiw-pop">
          <Pill text="✈ TESTFLIGHT · BUILD 14" colors={{ color: C.teal, bc: '#9FBDB8', bg: '#E9F0EE' }} />
        </span>
      ) : (
        <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkFaint }}>the MVP, materializing phase by phase</span>
      )}
    </div>
  )
}

function LoopDemo({ narrow }: { narrow: boolean }) {
  const auto = useAutoReplay<HTMLDivElement>()
  const [done, setDone] = useState(0)
  const [p5, setP5] = useState(false)
  const [parked, setParked] = useState(false)
  const [stat, setStat] = useState(false)
  useEffect(() => {
    if (!auto.runId) return
    let alive = true
    setDone(0)
    setP5(false)
    setParked(false)
    setStat(false)
    const run = async () => {
      for (let p = 1; p <= 4; p++) {
        await wait(REDUCED ? 60 : p === 1 ? 700 : 1000)
        if (!alive) return
        setDone(p)
      }
      await wait(REDUCED ? 60 : 850)
      if (!alive) return
      setP5(true)
      await wait(REDUCED ? 60 : 700)
      if (!alive) return
      setParked(true)
      await wait(REDUCED ? 60 : 500)
      if (!alive) return
      setStat(true)
    }
    run()
    return () => {
      alive = false
    }
  }, [auto.runId])
  const stage = stat || p5 ? 5 : done >= 2 ? Math.min(done, 4) : done >= 1 ? 1 : 0
  return (
    <div ref={auto.ref} style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'minmax(0,1fr) 220px', gap: narrow ? 18 : 26, alignItems: 'center', justifyItems: narrow ? 'center' : 'stretch' }}>
      <div style={{ background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, width: '100%', boxShadow: '0 10px 26px rgba(22,33,31,.08)' }}>
        <div style={{ padding: '7px 12px', background: C.contentBg, borderBottom: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkSoft }}>plan/steps/01_build_plan.md — Status</span>
          <button onClick={auto.replay} className="hov-ink" style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.inkFaint, cursor: 'pointer' }}>
            ↻ replay
          </button>
        </div>
        <div style={{ padding: '13px 15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {LOOP_PHASES.map((ph, i) => {
              const isDone = done > i
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '18px 1fr auto', gap: 9, alignItems: 'baseline', font: `400 11px/1.5 ${MONO_FONT}`, color: isDone ? C.ink : C.inkFaint, transition: 'color .4s ease' }}>
                  <span style={{ textAlign: 'center', color: isDone ? C.teal : C.inkFaint }}>{isDone ? '✓' : '·'}</span>
                  <span>{ph.label}</span>
                  <span style={{ fontSize: 9, color: C.teal, opacity: isDone ? 0.8 : 0, transition: 'opacity .5s ease' }}>{ph.hash}</span>
                </div>
              )
            })}
            <div style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 9, alignItems: 'baseline', font: `400 11px/1.5 ${MONO_FONT}`, color: p5 ? C.ink : C.inkFaint }}>
              <span className={p5 ? 'hiw-pulse' : undefined} style={{ textAlign: 'center', color: p5 ? C.teal : C.inkFaint }}>{p5 ? '◐' : '·'}</span>
              <span>Phase 5 — Content · relics + storm seeds{p5 ? '  · in progress' : ''}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 9, alignItems: 'baseline', font: `400 11px/1.5 ${MONO_FONT}`, color: parked ? C.gold : C.inkFaint }}>
              <span style={{ textAlign: 'center' }}>{parked ? '!' : '·'}</span>
              <span>Phase 6 — [needs-user-call] Apple Developer account</span>
            </div>
          </div>
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${C.borderLt}`, font: `500 10px/1.7 ${MONO_FONT}`, color: C.teal, opacity: stat ? 1 : 0, transition: 'opacity .7s ease' }}>
            verify ✓ · deploy:check ✓ at HEAD
            <br />
            TestFlight build 14 · median session 4m 10s ↑
          </div>
        </div>
      </div>
      <PhoneDemo stage={stage} />
    </div>
  )
}

function NexusChapter({ narrow }: { narrow: boolean }) {
  const onboard = useAutoReplay<HTMLDivElement>()
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section style={{ padding: narrow ? '30px 0' : '48px 0', borderTop: `1px solid ${C.border}` }}>
      <div id="hiw-term" ref={ref} className={inView ? 'hiw-in' : ''}>
        <div className="hiw-rv">
          <Kicker color={C.teal}>Chapter 5 · beyond the walls</Kicker>
        </div>
        <div className="hiw-rv hiw-d1">
          <ChapterTitle>Drop the payload. Adopt the loop.</ChapterTitle>
        </div>
        <div className="hiw-rv hiw-d2" style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch', marginBottom: 18 }}>
          A fresh repository, the payload at its root, one command. The adopt script copies the loop’s skills, commands and plan files{' '}
          <b>around</b> what exists — it never overwrites — then sweeps the payload’s identity tokens over what it copied. Anything it cannot
          resolve is filed as <span style={{ font: `400 12px ${MONO_FONT}` }}>[needs-user-call]</span>, not guessed. The kit’s source is never
          vendored into the estate and never left in the product: npm’s cache is the only place it lands.
        </div>
        <div className="hiw-rv hiw-d3">
          <Terminal narrow={narrow} />
        </div>
      </div>

      <div id="hiw-onboard" ref={onboard.ref} style={{ marginTop: narrow ? 26 : 40 }}>
        <div style={{ font: `400 20px/1.15 ${DISPLAY}`, color: C.ink, marginBottom: 8 }}>Onboard the agent. Two answers, then it stops.</div>
        <div style={{ font: `400 13px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch', marginBottom: 14 }}>
          Open your agent at the repo root and paste the kit’s one-paragraph prompt. Because every decision arrived already made, onboarding is
          not an interview — it is clearing the two audit rows the adopt script could not resolve, and stopping.
        </div>
        <div style={{ background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, padding: '15px 16px', maxWidth: 720, boxShadow: '0 10px 26px rgba(22,33,31,.08)' }}>
          <ChatReplay script={ONBOARD} runId={onboard.runId} compact />
          <div style={{ marginTop: 10, textAlign: 'right' }}>
            <button onClick={onboard.replay} className="hov-ink" style={{ font: `400 10px/1 ${MONO_FONT}`, color: C.inkFaint, cursor: 'pointer' }}>
              ↻ replay
            </button>
          </div>
        </div>
      </div>

      <div id="hiw-loop" style={{ marginTop: narrow ? 26 : 44 }}>
        <div style={{ font: `400 20px/1.15 ${DISPLAY}`, color: C.ink, marginBottom: 8 }}>Then it ships itself.</div>
        <div style={{ font: `400 13px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch', marginBottom: 16 }}>
          <span style={{ font: `400 12px ${MONO_FONT}` }}>/ship-a-phase</span> reads the Status block and ticks one phase at a time — build,
          verify gate, commit, push, deploy check — then flips the row and records the hash. The garden proves the whole path on nothing before
          any feature exists. When the loop hits something only a human can do, it doesn’t stall and it doesn’t guess: it <b>parks</b>.
        </div>
        <LoopDemo narrow={narrow} />
      </div>

      <div id="hiw-return" style={{ marginTop: narrow ? 26 : 44, maxWidth: 720 }}>
        <div style={{ font: `400 20px/1.15 ${DISPLAY}`, color: C.ink, marginBottom: 10 }}>And the road runs both ways.</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <div style={{ padding: '11px 14px', background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, font: `400 12.5px/1.6 ${SERIF}`, color: C.inkMid }}>
            <span style={{ font: `500 11px ${MONO_FONT}`, color: C.teal }}>/seed-check</span> — {RETURN_PATH.seedCheck.split('— ')[1]}
          </div>
          <div style={{ padding: '11px 14px', background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 3, font: `400 12.5px/1.6 ${SERIF}`, color: C.inkMid }}>
            <span style={{ font: `500 11px ${MONO_FONT}`, color: C.teal }}>/re-seed</span> — {RETURN_PATH.reSeed.split('— ')[1]}
            <div style={{ marginTop: 8 }}>
              <Pill text={RETURN_PATH.origin} hot />
            </div>
          </div>
        </div>
        <div style={{ font: `400 12.5px/1.65 ${SERIF}`, fontStyle: 'italic', color: C.inkSoft, marginTop: 12 }}>{RETURN_PATH.closing}</div>
      </div>
    </section>
  )
}

// --------------------------------------------------------------------- coda

function Coda({ narrow }: { narrow: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section id="hiw-coda" ref={ref} className={inView ? 'hiw-in' : ''} style={{ padding: narrow ? '36px 0 40px' : '60px 0 70px', borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
      <div className="hiw-rv" style={{ display: 'flex', justifyContent: 'center' }}>
        <Kicker>The whole path</Kicker>
      </div>
      <div className="hiw-rv hiw-d1" style={{ font: `400 ${narrow ? 26 : 34}px/1.2 ${DISPLAY}`, color: C.ink, margin: '14px auto 12px', maxWidth: '22ch' }}>
        One idea in. A shipping loop out. Lineage intact.
      </div>
      <div className="hiw-rv hiw-d2" style={{ font: `400 13.5px/1.65 ${SERIF}`, color: C.inkMid, maxWidth: '58ch', margin: '0 auto' }}>
        Nine verbs walked, two systems, one boundary. The estate never pressured the idea toward an artifact — it graded, sealed state, and let
        the operator select every move. The loop never re-litigated a decision — the Seed’s refusals arrived as standing law.
      </div>
      <div className="hiw-rv hiw-d3" style={{ font: `400 11px/1.7 ${SERIF}`, fontStyle: 'italic', color: C.inkFaint, maxWidth: '64ch', margin: '22px auto 0' }}>
        Tidewatch is a worked example authored for this walkthrough — not a record in ideas/. Every verb, voice, signature, run mode, file path,
        contract field and command shown is real, per system/, the registry, and ADRs 0029–0030.
      </div>
    </section>
  )
}

// --------------------------------------------------------------------- shell

const CHAPTERS: { id: string; label: string }[] = [
  { id: 'hiw-ov', label: 'overture' },
  { id: 'hiw-j0', label: '1 · the journey' },
  { id: 'hiw-atlas', label: '2 · every verb' },
  { id: 'hiw-graft', label: '3 · branching' },
  { id: 'hiw-gate', label: '4 · the gate' },
  { id: 'hiw-term', label: '5 · nexus' },
]

const PLAY_STOPS: { id: string; dwell: number }[] = [
  { id: 'hiw-ov', dwell: 3800 },
  { id: 'hiw-j0', dwell: 6600 },
  { id: 'hiw-j1', dwell: 5600 },
  { id: 'hiw-j2', dwell: 6000 },
  { id: 'hiw-j3', dwell: 5200 },
  { id: 'hiw-j4', dwell: 5600 },
  { id: 'hiw-j5', dwell: 6200 },
  { id: 'hiw-atlas', dwell: 8000 },
  { id: 'hiw-graft', dwell: 9500 },
  { id: 'hiw-gate', dwell: 6800 },
  { id: 'hiw-term', dwell: 9000 },
  { id: 'hiw-onboard', dwell: 7000 },
  { id: 'hiw-loop', dwell: 10500 },
  { id: 'hiw-return', dwell: 6500 },
  { id: 'hiw-coda', dwell: 3000 },
]

export function HowItWorksView() {
  const narrow = useNarrow()
  const [playing, setPlaying] = useState(false)
  const playTok = useRef(0)

  const stop = useCallback(() => {
    playTok.current += 1
    setPlaying(false)
  }, [])

  const play = useCallback(async () => {
    const tok = ++playTok.current
    setPlaying(true)
    for (const s of PLAY_STOPS) {
      if (playTok.current !== tok) return
      document.getElementById(s.id)?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' })
      await wait(REDUCED ? 900 : s.dwell)
    }
    if (playTok.current === tok) setPlaying(false)
  }, [])

  // any manual scroll intent cancels the presentation
  useEffect(() => {
    if (!playing) return
    const cancel = () => stop()
    window.addEventListener('wheel', cancel, { passive: true })
    window.addEventListener('touchstart', cancel, { passive: true })
    window.addEventListener('keydown', cancel)
    return () => {
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', cancel)
    }
  }, [playing, stop])

  useEffect(() => stop, [stop]) // unmounting stops the tour

  return (
    <div style={{ background: C.contentBg }}>
      {/* chapter nav */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(234,235,228,.94)',
          backdropFilter: 'blur(6px)',
          borderBottom: `1px solid ${C.border}`,
          padding: narrow ? '7px 12px' : '8px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          overflowX: 'auto',
        }}
      >
        {CHAPTERS.map((ch) => (
          <button
            key={ch.id}
            onClick={() => {
              stop()
              document.getElementById(ch.id)?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' })
            }}
            className="hov-border"
            style={{
              font: `400 9.5px/1 ${MONO_FONT}`,
              color: C.inkSoft,
              border: `1px solid ${C.borderLt}`,
              borderRadius: 10,
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              background: C.panelBg,
            }}
          >
            {ch.label}
          </button>
        ))}
        <button
          onClick={playing ? stop : play}
          className="hov-border"
          style={{
            marginLeft: 'auto',
            font: `600 10px/1 ${MONO_FONT}`,
            color: playing ? C.inkSoft : '#3E3010',
            background: playing ? C.contentBg : 'linear-gradient(#E0CE9A,#C9A94E 45%,#A8873A)',
            border: `1px solid ${playing ? C.border : C.gold}`,
            borderRadius: 2,
            padding: '6px 12px',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            flex: 'none',
          }}
        >
          {playing ? '■ stop' : '▶ present'}
        </button>
      </div>

      <div style={{ maxWidth: 1060, margin: '0 auto', padding: narrow ? '0 16px 30px' : '0 28px 40px' }}>
        <Overture narrow={narrow} />
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: narrow ? 22 : 34 }}>
          <Kicker>Chapter 1 · the journey</Kicker>
          <ChapterTitle>Six beats from noise to Seed.</ChapterTitle>
          <div style={{ font: `400 13.5px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '66ch' }}>
            The canonical spark-to-seed run — six verbs, four voices, three sealed states. Routes are derived, never prescribed: this is one
            path through the estate, not the path.
          </div>
        </div>
        {JOURNEY.map((b, i) => (
          <JourneyBeatSec key={b.verb} beat={b} i={i} narrow={narrow} />
        ))}
        <AtlasChapter narrow={narrow} />
        <GraftChapter narrow={narrow} />
        <GateChapter narrow={narrow} />
        <NexusChapter narrow={narrow} />
        <Coda narrow={narrow} />
      </div>
    </div>
  )
}
