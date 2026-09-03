import type { EstateData, IdeaRecord, ProjectInfo } from '../lib/types'
import { recordGroups } from '../lib/derive'
import { BANDC, C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'
import { TYPE_ORDER } from '../lib/theme'

// The band above a project's records (ADR 0033). `p` null is the unscoped
// group's divider — root ideas/, shown beneath the projects.
function ProjectBand({ p, recs }: { p: ProjectInfo | null; recs: IdeaRecord[] }) {
  if (!p)
    return (
      <div style={{ margin: '14px 2px 4px', display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ font: `400 8px/1 ${MONO_FONT}`, letterSpacing: '.16em', color: C.inkFaint }}>UNSCOPED</span>
        <span style={{ font: `400 10.5px/1 ${SERIF}`, fontStyle: 'italic', color: C.inkFaint }}>
          root ideas/ — records not scoped to any project
        </span>
      </div>
    )
  const seeded = recs.filter((r) => r.seed).length
  return (
    <div
      style={{
        marginTop: 14,
        background: C.panelBg,
        border: `1px solid ${C.border}`,
        borderTop: `2px solid ${C.goldMid}`,
        borderRadius: 2,
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ font: `600 9px/1 ${MONO_FONT}`, color: C.gold }}>project-{p.id}</span>
          <span style={{ font: `400 15px/1.2 ${DISPLAY}`, color: C.ink }}>{p.title}</span>
        </div>
        {p.origin && (
          <div style={{ font: `400 11px/1.45 ${SERIF}`, fontStyle: 'italic', color: C.inkSoft, marginTop: 4, maxWidth: '70ch' }}>{p.origin}</div>
        )}
      </div>
      <div style={{ flex: 'none', textAlign: 'right', font: `400 8.5px/1.7 ${MONO_FONT}`, color: C.inkSoft }}>
        <div>
          status {p.status} · appetite {p.appetite}
        </div>
        <div>
          {recs.length} record{recs.length === 1 ? '' : 's'} · {seeded} seeded ·{' '}
          <span style={{ color: p.target === 'nexus' ? C.gold : C.inkFaint }}>target {p.target}</span>
        </div>
      </div>
    </div>
  )
}

export function GroundsView({ data, openRecord }: { data: EstateData; openRecord: (id: string) => void }) {
  const legendTypes = TYPE_ORDER.filter((t) => t in BANDC && t !== 'Seed')
  return (
    <div style={{ padding: '22px 24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 1000 }}>
        {recordGroups(data).map((g) => (
          <div key={g.key} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {g.project !== undefined && <ProjectBand p={g.project} recs={g.recs} />}
            {g.recs.map((r) => {
          const counts: Record<string, number> = {}
          for (const a of r.artifacts) if (!a.terminal) counts[a.type] = (counts[a.type] ?? 0) + 1
          const segs = TYPE_ORDER.filter((t) => counts[t]).map((t) => ({
            t,
            n: counts[t],
            color: BANDC[t] ?? '#8E948C',
            fg: t === 'Phase' || t === 'Trajectory' ? C.ink : C.panelBg,
          }))
          const total = segs.reduce((s, g) => s + g.n, 0)
          const noArtStates = r.states.filter((s) => s.out.length === 0).length
          return (
            <button
              key={r.id}
              onClick={() => openRecord(r.id)}
              className="hov-border"
              style={{
                background: C.panelBg,
                border: `1px solid ${C.border}`,
                borderRadius: 2,
                padding: '14px 16px',
                cursor: 'pointer',
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ width: 190, flex: 'none' }}>
                <div style={{ font: `600 9px/1 ${MONO_FONT}`, color: C.gold }}>idea-{r.id}</div>
                <div style={{ font: `400 14px/1.2 ${DISPLAY}`, color: C.ink, marginTop: 5 }}>{r.title}</div>
                <div style={{ font: `400 8px/1.4 ${MONO_FONT}`, color: r.placeholder ? C.red : C.inkMid, marginTop: 5 }}>
                  appetite {r.appetite} · {r.placeholder ? 'placeholder' : 'hand-set'}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'flex',
                    height: 26,
                    border: `1px solid ${C.border}`,
                    width: Math.max(120, total * 26),
                    minWidth: 120,
                    maxWidth: '100%',
                  }}
                >
                  {segs.map((g) => (
                    <span
                      key={g.t}
                      title={`${g.t} ×${g.n}`}
                      style={{
                        width: g.n * 26,
                        background: g.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        font: `400 9px/1 ${MONO_FONT}`,
                        color: g.fg,
                      }}
                    >
                      {g.n}
                    </span>
                  ))}
                  {total === 0 && (
                    <span
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: 9,
                        font: `400 11px/1 ${SERIF}`,
                        fontStyle: 'italic',
                        color: C.inkFaint,
                      }}
                    >
                      no artifacts — capture has not run on this record
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 9, marginTop: 7 }}>
                  {r.states.map((s) => (
                    <span key={s.n} title={`state/${String(s.n).padStart(4, '0')} · ${s.verb || 'no verb'}`} style={{ width: 1.4, height: 8, background: s.verb ? C.gold : '#C9C9BE' }} />
                  ))}
                  <span style={{ font: `400 8px/1 ${MONO_FONT}`, color: C.inkFaint, marginLeft: 7, whiteSpace: 'nowrap' }}>
                    {r.states.length} states
                    {noArtStates > 2 ? ` — ${noArtStates} of them wrote no artifact at all` : ''}
                  </span>
                </div>
              </div>
              <div style={{ width: 200, flex: 'none', textAlign: 'right' }}>
                {r.seed ? (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      background: C.goldBg,
                      border: `1px solid ${C.gold}`,
                      borderRadius: 2,
                      padding: '5px 9px',
                    }}
                  >
                    <span style={{ width: 11, height: 11, borderRadius: '50%', border: `2.4px solid ${C.gold}`, display: 'inline-block' }} />
                    <span style={{ font: `400 8px/1.4 ${MONO_FONT}`, color: C.gold }}>{r.seed.replace('exports/', '')}</span>
                  </div>
                ) : (
                  <span style={{ font: `400 8px/1 ${MONO_FONT}`, color: C.inkFaint, border: `1px dashed ${C.border}`, borderRadius: 2, padding: '5px 8px' }}>
                    NO EXPORT
                  </span>
                )}
              </div>
            </button>
          )
            })}
            {g.recs.length === 0 && g.project && (
              <div
                style={{
                  background: C.contentBg,
                  border: `1px dashed ${C.border}`,
                  borderRadius: 2,
                  padding: '12px 16px',
                  font: `400 12px/1.5 ${SERIF}`,
                  fontStyle: 'italic',
                  color: C.inkSoft,
                }}
              >
                no records yet — a project waiting for its first capture is not an error (ADR 0033)
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: 1000,
          marginTop: 18,
          paddingTop: 14,
          borderTop: `1px solid ${C.border}`,
          display: 'flex',
          gap: 22,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <span style={{ font: `400 8px/1 ${MONO_FONT}`, letterSpacing: '.16em', color: C.inkFaint }}>26PX = ONE ARTIFACT, EVERYWHERE</span>
        {legendTypes.map((t) => (
          <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, font: `400 9.5px/1 ${MONO_FONT}`, color: C.inkSoft }}>
            <span style={{ width: 16, height: 9, background: BANDC[t] }} />
            {t}
          </span>
        ))}
      </div>
      {data.relatesMentions.length > 0 && (
        <div style={{ maxWidth: 1000, marginTop: 20, background: C.panelBg, border: `1px solid ${C.border}`, borderLeft: `2px solid ${C.red}`, padding: '14px 16px' }}>
          <div style={{ font: `400 8px/1 ${MONO_FONT}`, letterSpacing: '.14em', color: C.red, marginBottom: 8 }}>
            RELATES — NAMED IN {data.relatesMentions.length === 1 ? 'ONE RECORD' : `${data.relatesMentions.length} RECORDS`}, DRAWN BY NOBODY
          </div>
          <div style={{ font: `400 13px/1.6 ${SERIF}`, color: C.inkMid, maxWidth: '70ch' }}>
            {data.relatesMentions.map((m, i) => (
              <span key={i}>
                idea-{m.from}&#39;s frontmatter says of idea-{m.to}: <em>“{m.quote}”</em>
                {i < data.relatesMentions.length - 1 ? ' ' : ' '}
              </span>
            ))}
            <span style={{ color: C.inkSoft }}>
              None is an edge. <span style={{ fontFamily: MONO_FONT.replace(/'/g, ''), fontSize: '.85em' }}>relate</span> is The Cartographer’s and has
              not run, so the graph has none — these are quotations from the records, shown as quotations.
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
