import type { EstateData, IdeaRecord, ViewKey } from '../lib/types'
import { agentCounts, nonTerminalCount, numWord, pad, totalStates, typeCounts } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, TYPE_ORDER } from '../lib/theme'
import { Plate } from './bits'

function CompassRose() {
  return (
    <svg
      viewBox="0 0 76 76"
      style={{ width: 54, height: 54, flex: 'none' }}
      aria-label="compass rose: east later, north the agents' track, south the steward's track"
    >
      <circle cx="38" cy="38" r="27" fill="none" stroke={C.border} />
      <circle cx="38" cy="38" r="19" fill="none" stroke={C.borderLt} />
      <path d="M38,9 L42,38 L38,67 L34,38 Z" fill={C.inkMid} opacity=".8" />
      <path d="M9,38 L38,34 L67,38 L38,42 Z" fill={C.gold} />
      <circle cx="38" cy="38" r="2.6" fill={C.panelBg} stroke={C.inkMid} />
      <text x="38" y="6" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="6" fill={C.inkSoft}>
        agents
      </text>
      <text x="38" y="74" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="6" fill={C.inkSoft}>
        steward
      </text>
      <text x="72" y="30" textAnchor="end" fontFamily="JetBrains Mono,monospace" fontSize="6" fill={C.gold}>
        later
      </text>
      <text x="4" y="30" fontFamily="JetBrains Mono,monospace" fontSize="6" fill={C.inkFaint}>
        earlier
      </text>
    </svg>
  )
}

function ScaleBar() {
  const tick = <span style={{ width: 1, height: 9, background: C.gold, display: 'inline-block' }} />
  const seg = <span style={{ width: 60, height: 1, background: C.gold, marginBottom: 4, display: 'inline-block' }} />
  return (
    <div style={{ textAlign: 'right', flex: 'none' }}>
      <div style={{ font: `400 7.5px/1 ${MONO_FONT}`, letterSpacing: '.18em', color: C.inkFaint, marginBottom: 5 }}>SCALE</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: 9 }}>
        {tick}
        {seg}
        {tick}
        {seg}
        {tick}
      </div>
      <div style={{ font: `400 8px/1 ${MONO_FONT}`, color: C.inkSoft, marginTop: 4 }}>one state · one session</div>
    </div>
  )
}

export function headerFor(data: EstateData, view: ViewKey, rec: IdeaRecord | undefined) {
  const plur = (n: number, w: string) => `${n} ${w}${n === 1 ? '' : 's'}`
  const nArt = data.records.reduce((s, r) => s + nonTerminalCount(r), 0)
  const nExports = data.records.filter((r) => r.seed).length
  const nEdges = data.records.reduce((s, r) => s + r.relates.length, 0)
  const called = Object.keys(agentCounts(data.records)).length + 1
  const nTypes = Object.keys(typeCounts(data.records)).length
  switch (view) {
    case 'record': {
      if (!rec) return { plate: '', title: '', sub: '', isMap: false }
      const na = nonTerminalCount(rec)
      const head = rec.states.length ? rec.states[rec.states.length - 1].n : 0
      const proj = rec.projectId ? data.projects.find((p) => p.id === rec.projectId) : null
      return {
        plate: rec.id,
        title: rec.title,
        sub: `${proj ? `project-${proj.id} · ${proj.title} · ` : ''}the travel map · ${plur(na, 'artifact')} · ${plur(rec.states.length, 'state')} · state-head ${pad(head)}${rec.seed ? ' · seeded' : ''}`,
        isMap: true,
      }
    }
    case 'grounds':
      return {
        plate: 'THE GROUNDS',
        title: 'The Grounds',
        sub: `${data.projects.length ? `${numWord(data.projects.length)} project${data.projects.length === 1 ? '' : 's'} · ` : ''}${numWord(data.records.length)} records · ${nArt} artifacts · ${totalStates(data.records)} states · ${nExports} exports · ${nEdges} relates edges`,
        isMap: false,
      }
    case 'household':
      return {
        plate: 'THE HOUSEHOLD',
        title: 'The Household',
        sub: `${numWord(data.agents.length)} offices · ${numWord(data.agents.length - called)} have never been called`,
        isMap: false,
      }
    case 'types':
      return {
        plate: 'THE TYPES',
        title: 'The Types',
        sub: `${numWord(TYPE_ORDER.length)} artifact types · ${numWord(nTypes)} present in this estate`,
        isMap: false,
      }
    case 'survey':
      return {
        plate: 'SURVEY',
        title: 'Survey',
        sub: `ideas/SURVEY.md · status: ${data.survey?.status ?? 'missing'} · covers: [${(data.survey?.covers ?? []).join(', ')}]`,
        isMap: false,
      }
    case 'relates':
      return { plate: 'RELATES', title: 'Relates', sub: `the one hand-authored edge · ${numWord(nEdges)} drawn`, isMap: false }
    case 'exports':
      return {
        plate: 'EXPORTS',
        title: 'The departure lounge',
        sub: `${numWord(nExports)} Seed${nExports === 1 ? ' has' : 's have'} left the walls`,
        isMap: false,
      }
    case 'how':
      return {
        plate: 'HOW IT WORKS',
        title: 'How it works',
        sub: 'spark → seed → adopt → loop · a worked walkthrough · authored, not derived from records',
        isMap: false,
      }
    case 'settings':
      return { plate: 'SETTINGS', title: 'Settings', sub: 'nothing here writes to the estate', isMap: false }
    default:
      return { plate: '', title: '', sub: '', isMap: false }
  }
}

function DrawerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" style={{ width: 15, height: 15, display: 'block' }} aria-hidden>
      <rect x="1" y="1" width="14" height="14" fill="none" stroke={open ? C.gold : C.inkSoft} strokeWidth="1.4" rx="1" />
      <line x1="6" y1="1" x2="6" y2="15" stroke={open ? C.gold : C.inkSoft} strokeWidth="1.4" />
      <rect x="2.5" y="3" width="2" height="1.6" fill={open ? C.gold : C.inkSoft} />
      <rect x="2.5" y="6" width="2" height="1.6" fill={open ? C.gold : C.inkSoft} />
    </svg>
  )
}

export function Header({
  data,
  view,
  rec,
  mobile,
  back,
  sidebarOpen,
  toggleSidebar,
}: {
  data: EstateData
  view: ViewKey
  rec: IdeaRecord | undefined
  mobile?: boolean
  back?: () => void
  sidebarOpen?: boolean
  toggleSidebar?: () => void
}) {
  const h = headerFor(data, view, rec)
  return (
    <div
      style={{
        flex: 'none',
        background: C.panelBg,
        borderBottom: `1px solid ${C.border}`,
        borderTop: `2px solid ${C.goldMid}`,
        padding: mobile ? '13px 16px' : '13px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 18,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 13, minWidth: 0 }}>
        {!mobile && toggleSidebar && (
          <button
            onClick={toggleSidebar}
            title={sidebarOpen ? 'close the shelf drawer' : 'open the shelf drawer'}
            aria-label={sidebarOpen ? 'close the shelf drawer' : 'open the shelf drawer'}
            className="hov-border"
            style={{
              flex: 'none',
              padding: 6,
              background: sidebarOpen ? C.contentBg : C.goldBg,
              border: `1px solid ${sidebarOpen ? C.border : C.goldMid}`,
              borderRadius: 2,
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <DrawerIcon open={!sidebarOpen} />
          </button>
        )}
        {mobile && back && (
          <button onClick={back} style={{ font: `400 12px/1 ${MONO_FONT}`, color: C.gold, cursor: 'pointer', flex: 'none' }}>
            ‹
          </button>
        )}
        {h.plate && <Plate text={h.plate} small />}
        <div style={{ minWidth: 0 }}>
          <div style={{ font: `400 18px/1.1 ${DISPLAY}`, color: C.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {h.title}
          </div>
          <div
            style={{
              font: `400 9.5px/1.4 ${MONO_FONT}`,
              color: C.inkSoft,
              marginTop: 5,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {h.sub}
          </div>
        </div>
      </div>
      {h.isMap && !mobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 'none' }}>
          <ScaleBar />
          <CompassRose />
        </div>
      )}
    </div>
  )
}
