import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import rawData from './data/estate.json'
import type { ArtifactN, EstateData, Selection, ViewKey } from './lib/types'
import { art, chainPredecessors, successorOf } from './lib/derive'
import { EstatePanel, type EstateSel } from './components/EstatePanel'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { TravelMap } from './components/TravelMap'
import { Panel } from './components/Panel'
import { GroundsView } from './components/GroundsView'
import { HouseholdView } from './components/HouseholdView'
import { TypesView } from './components/TypesView'
import { SurveyView } from './components/SurveyView'
import { RelatesView } from './components/RelatesView'
import { ExportsView } from './components/ExportsView'
import { HowItWorksView } from './components/how/HowItWorksView'
import { SettingsView } from './components/SettingsView'
import { MobileShelf } from './components/MobileShelf'
import { MobileMap } from './components/MobileMap'
import { MobileEstate } from './components/MobileEstate'
import { C } from './lib/theme'

const data = rawData as unknown as EstateData

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 860px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const on = () => setMobile(mq.matches)
    mq.addEventListener('change', on)
    window.addEventListener('resize', on)
    return () => {
      mq.removeEventListener('change', on)
      window.removeEventListener('resize', on)
    }
  }, [])
  return mobile
}

export default function App() {
  const isMobile = useIsMobile()
  const [recId, setRecId] = useState(data.records[0]?.id ?? '')
  // an empty estate has no record to open — land on the Grounds instead
  const [view, setView] = useState<ViewKey>(isMobile ? 'shelf' : data.records.length ? 'record' : 'grounds')
  const [sel, setSel] = useState<Selection | null>(null)
  const [showRungs, setShowRungs] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [estateSel, setEstateSel] = useState<EstateSel | null>(null)
  // place-preserving: remember each record's last selection
  const selMemory = useRef(new Map<string, Selection | null>())

  const rec = useMemo(() => data.records.find((r) => r.id === recId) ?? data.records[0], [recId])

  const openRecord = useCallback(
    (id: string) => {
      selMemory.current.set(recId, sel)
      setRecId(id)
      setView('record')
      setSel(selMemory.current.get(id) ?? null)
      setEstateSel(null)
    },
    [recId, sel],
  )

  const openView = useCallback((v: ViewKey) => {
    setView(v)
    setSel(null)
    setEstateSel(null)
  }, [])

  const jump = useCallback(
    (id: string, n: ArtifactN) => {
      selMemory.current.set(recId, sel)
      setRecId(id)
      setView('record')
      setSel({ kind: 'artifact', id: n })
      setEstateSel(null)
    },
    [recId, sel],
  )

  // desktop never shows the mobile-only screens
  useEffect(() => {
    if (!isMobile && (view === 'shelf' || view === 'estate')) setView('record')
  }, [isMobile, view])

  // keyboard: esc to close · ← → walk the version chain
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSel(null)
        setEstateSel(null)
      }
      if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && sel?.kind === 'artifact' && rec) {
        const a = art(rec, sel.id)
        if (!a) return
        const next = e.key === 'ArrowLeft' ? chainPredecessors(rec, a)[0] : successorOf(rec, a)
        if (next) {
          e.preventDefault()
          setSel({ kind: 'artifact', id: next.n })
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sel, rec])

  const viewContent = (() => {
    switch (view) {
      case 'grounds':
        return <GroundsView data={data} openRecord={openRecord} />
      case 'household':
        return <HouseholdView data={data} onSelect={(id) => setEstateSel({ kind: 'office', id })} />
      case 'types':
        return <TypesView data={data} onSelect={(id) => setEstateSel({ kind: 'type', id })} />
      case 'survey':
        return <SurveyView data={data} />
      case 'relates':
        return <RelatesView data={data} />
      case 'exports':
        return <ExportsView data={data} onSelect={(id) => setEstateSel({ kind: 'export', id })} />
      case 'how':
        return <HowItWorksView />
      case 'settings':
        return <SettingsView data={data} showRungs={showRungs} setShowRungs={setShowRungs} />
      default:
        return null
    }
  })()

  if (isMobile) {
    return (
      <div style={{ height: '100%', overflow: 'hidden', background: C.contentBg, position: 'relative' }}>
        {view === 'shelf' && <MobileShelf data={data} openRecord={openRecord} openView={openView} />}
        {view === 'record' && rec && <MobileMap rec={rec} sel={sel} setSel={setSel} back={() => openView('shelf')} />}
        {view === 'estate' && <MobileEstate data={data} openView={openView} back={() => openView('shelf')} />}
        {view !== 'shelf' && view !== 'record' && view !== 'estate' && (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: C.contentBg }}>
            <Header data={data} view={view} rec={rec} mobile back={() => openView('estate')} />
            <div style={{ flex: 1, overflow: 'auto' }}>{viewContent}</div>
          </div>
        )}
        {sel && rec && view === 'record' && (
          <Panel data={data} rec={rec} sel={sel} setSel={setSel} close={() => setSel(null)} mobile />
        )}
        {estateSel && <EstatePanel data={data} sel={estateSel} close={() => setEstateSel(null)} jump={jump} mobile />}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: C.page }}>
      {sidebarOpen && <Sidebar data={data} recId={recId} view={view} openRecord={openRecord} openView={openView} />}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', background: C.contentBg, overflow: 'hidden' }}>
        <Header data={data} view={view} rec={rec} sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen((v) => !v)} />
        {view === 'record' && rec ? (
          <TravelMap rec={rec} sel={sel} setSel={setSel} showRungs={showRungs} />
        ) : view === 'record' ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '400 13px/1.6 Georgia, serif', fontStyle: 'italic', color: C.inkSoft }}>
              No records yet — the estate is waiting for its first capture.
            </span>
          </div>
        ) : (
          <div style={{ flex: 1, overflow: 'auto' }}>{viewContent}</div>
        )}
      </div>
      {sel && rec && view === 'record' && (
        <Panel data={data} rec={rec} sel={sel} setSel={setSel} close={() => setSel(null)} />
      )}
      {estateSel && view !== 'record' && <EstatePanel data={data} sel={estateSel} close={() => setEstateSel(null)} jump={jump} />}
    </div>
  )
}
