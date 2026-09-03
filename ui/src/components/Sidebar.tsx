import type { EstateData, IdeaRecord, ViewKey } from '../lib/types'
import { ago, agentCounts, nonTerminalCount, recordGroups } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF, TYPE_ORDER, VIEW_GLYPHS } from '../lib/theme'
import { GlyphMark, MonoLabel, Plate, SeedWax, statusDotColor } from './bits'
import { typeCounts } from '../lib/derive'

function AppetiteBars({ r }: { r: IdeaRecord }) {
  return (
    <span
      title={r.appetiteNote ? `appetite ${r.appetite} — ${r.appetiteNote}` : `appetite ${r.appetite}`}
      style={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}
    >
      {[0, 1, 2].map((i) =>
        r.placeholder ? (
          <span key={i} style={{ width: 5, height: 11, background: 'transparent', border: `1px dashed ${i === 0 ? '#A97B6E' : C.border}` }} />
        ) : (
          <span
            key={i}
            style={{
              width: 5,
              height: 11,
              background: i < r.appetite ? C.gold : 'transparent',
              border: `1px solid ${i < r.appetite ? '#6E5418' : C.border}`,
            }}
          />
        ),
      )}
    </span>
  )
}

export function Sidebar({
  data,
  recId,
  view,
  openRecord,
  openView,
}: {
  data: EstateData
  recId: string
  view: ViewKey
  openRecord: (id: string) => void
  openView: (v: ViewKey) => void
}) {
  const isMap = view === 'record'
  const called = Object.keys(agentCounts(data.records)).length + 1 // + the Steward
  const nTypes = Object.keys(typeCounts(data.records)).length
  const nExports = data.records.filter((r) => r.seed).length
  const nEdges = data.records.reduce((s, r) => s + r.relates.length, 0)
  const views: { k: ViewKey; name: string; tag: string; tagColor: string }[] = [
    { k: 'grounds', name: 'The Grounds', tag: String(data.records.length), tagColor: C.inkFaint },
    { k: 'household', name: 'The Household', tag: `${called} / ${data.agents.length}`, tagColor: C.inkFaint },
    { k: 'types', name: 'The Types', tag: `${nTypes} / ${TYPE_ORDER.length}`, tagColor: C.inkFaint },
    { k: 'survey', name: 'Survey', tag: data.survey && data.survey.covers.length ? 'on file' : 'none on file', tagColor: C.red },
    { k: 'relates', name: 'Relates', tag: `${nEdges} edges`, tagColor: C.inkFaint },
    { k: 'exports', name: 'Exports', tag: String(nExports), tagColor: C.gold },
    { k: 'how', name: 'How it works', tag: 'walkthrough', tagColor: C.gold },
    { k: 'settings', name: 'Settings', tag: '', tagColor: C.inkFaint },
  ]

  return (
    <div
      style={{
        width: 262,
        flex: 'none',
        background: C.sidebarBg,
        borderRight: `1px solid ${C.border}`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '15px 16px 13px',
          borderBottom: `1px solid ${C.border}`,
          background: C.panelBg,
          borderTop: `2px solid ${C.goldMid}`,
          flex: 'none',
        }}
      >
        <Plate text="ESTATE VIEW" />
        <div style={{ font: `400 8.5px/1.5 ${MONO_FONT}`, color: C.inkSoft, marginTop: 9 }}>generated {data.generatedAt}</div>
        <div style={{ font: `400 8.5px/1.5 ${MONO_FONT}`, color: C.inkFaint }}>
          covers {data.records.length} records{data.projects.length > 0 ? ` · ${data.projects.length} project${data.projects.length === 1 ? '' : 's'}` : ''} · read-only
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '13px 12px 10px' }}>
        <MonoLabel style={{ padding: '0 4px 9px' }}>RECORDS</MonoLabel>
        {recordGroups(data).map((g, gi) => (
          <div key={g.key}>
            {g.project !== undefined && (
              <div
                style={{
                  margin: `${gi === 0 ? 0 : 13}px 2px 7px`,
                  paddingBottom: 5,
                  borderBottom: `1px solid ${C.borderLt}`,
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <span
                  title={g.project ? `project-${g.project.id} · status ${g.project.status} · appetite ${g.project.appetite}` : 'root ideas/ — records not scoped to any project'}
                  style={{ font: `400 11.5px/1.2 ${SERIF}`, fontStyle: 'italic', color: g.project ? C.inkMid : C.inkSoft, minWidth: 0 }}
                >
                  {g.project ? g.project.title : 'Unscoped'}
                </span>
                <span style={{ font: `400 7.5px/1 ${MONO_FONT}`, color: g.project?.target === 'nexus' ? C.gold : C.inkFaint, flex: 'none' }}>
                  {g.project ? `project-${g.project.id}${g.project.target === 'nexus' ? ' · nexus' : ''}` : 'root'}
                </span>
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {g.recs.map((r) => {
                const on = isMap && r.id === recId
                return (
                  <button
                    key={r.id}
                    onClick={() => openRecord(r.id)}
                    className="hov-border"
                    style={{
                      background: on ? C.goldBg : '#EFF0E9',
                      border: `1px solid ${on ? C.goldMid : C.borderLt}`,
                      borderLeft: `3px solid ${on ? C.gold : 'transparent'}`,
                      borderRadius: 2,
                      padding: '8px 9px',
                      cursor: 'pointer',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                      <span style={{ font: `600 9px/1 ${MONO_FONT}`, color: on ? C.gold : C.inkSoft }}>{r.id}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        {r.seed && <SeedWax />}
                        <span
                          title={`status: ${r.status}`}
                          style={{ width: 5, height: 5, borderRadius: '50%', background: statusDotColor(r.status), display: 'inline-block' }}
                        />
                      </span>
                    </div>
                    <div style={{ font: `400 13.5px/1.25 ${DISPLAY}`, color: C.ink, margin: '5px 0 6px', textWrap: 'pretty' }}>{r.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <AppetiteBars r={r} />
                      <span style={{ font: `400 8px/1 ${MONO_FONT}`, color: C.inkSoft }}>
                        {nonTerminalCount(r)}a · {r.states.length}s · {ago(r.headDate, data.generatedAt)}
                      </span>
                    </div>
                  </button>
                )
              })}
              {g.recs.length === 0 && (
                <div style={{ font: `400 10.5px/1.5 ${SERIF}`, fontStyle: 'italic', color: C.inkFaint, padding: '2px 4px 4px' }}>
                  no records yet — a project waiting for its first capture
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 'none',
          background: C.dampBg,
          borderTop: `1px solid ${C.border}`,
          boxShadow: 'inset 0 2px 4px -2px rgba(22,33,31,.18)',
          padding: '13px 12px 14px',
        }}
      >
        <MonoLabel color="#7C877F" style={{ padding: '0 4px 10px' }}>
          THE ESTATE ITSELF
        </MonoLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {views.map((v) => {
            const on = view === v.k
            const dashed = v.k === 'survey' || v.k === 'relates'
            return (
              <button
                key={v.k}
                onClick={() => openView(v.k)}
                className="hov-bg"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 9,
                  padding: '7px 9px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  background: on ? '#E9E5D5' : 'transparent',
                  width: '100%',
                }}
              >
                <GlyphMark g={VIEW_GLYPHS[v.k]} size={11} />
                <span style={{ font: `400 11.5px/1 ${SERIF}`, color: on ? C.ink : dashed ? C.inkSoft : C.inkMid, flex: 1 }}>{v.name}</span>
                <span style={{ font: `400 8px/1 ${MONO_FONT}`, color: v.tagColor }}>{v.tag}</span>
              </button>
            )
          })}
        </div>
        <div
          style={{
            font: `400 10.5px/1.5 ${SERIF}`,
            color: '#7C877F',
            fontStyle: 'italic',
            margin: '11px 4px 0',
            paddingTop: 9,
            borderTop: `1px solid ${C.border}`,
          }}
        >
          Views of the whole estate, not of a record — so they sit apart, not inside the list.
        </div>
      </div>
    </div>
  )
}
