import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { C, MONO_FONT } from '../lib/theme'

const MIN = 0.35
const MAX = 3

/** Pan/zoom surface for the travel maps: click-drag + wheel on desktop,
 *  one-finger pan + pinch zoom on touch. Clicks still land unless dragged. */
export function PanZoom({
  children,
  contentWidth = 'max-content',
  initial = { x: 20, y: 18, s: 1 },
  style,
}: {
  children: ReactNode
  contentWidth?: CSSProperties['width']
  initial?: { x: number; y: number; s: number }
  style?: CSSProperties
}) {
  const [t, setT] = useState(initial)
  const ref = useRef<HTMLDivElement>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const pinchBase = useRef<{ dist: number; s: number } | null>(null)
  const dragged = useRef(false)

  // wheel zoom toward the cursor — native listener so preventDefault always works
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      setT((cur) => {
        const k = Math.exp(-e.deltaY * 0.0015)
        const s = Math.min(MAX, Math.max(MIN, cur.s * k))
        const ratio = s / cur.s
        return { s, x: px - (px - cur.x) * ratio, y: py - (py - cur.y) * ratio }
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    ref.current?.setPointerCapture(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    dragged.current = false
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      pinchBase.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), s: t.s }
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId)
    if (!prev) return
    const cur = { x: e.clientX, y: e.clientY }
    pointers.current.set(e.pointerId, cur)
    if (pointers.current.size === 1) {
      const dx = cur.x - prev.x
      const dy = cur.y - prev.y
      if (Math.abs(dx) + Math.abs(dy) > 0) {
        if (Math.abs(dx) + Math.abs(dy) > 3) dragged.current = true
        setT((c) => ({ ...c, x: c.x + dx, y: c.y + dy }))
      }
    } else if (pointers.current.size === 2 && pinchBase.current && ref.current) {
      dragged.current = true
      const [a, b] = [...pointers.current.values()]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      const rect = ref.current.getBoundingClientRect()
      const mx = (a.x + b.x) / 2 - rect.left
      const my = (a.y + b.y) / 2 - rect.top
      setT((c) => {
        const s = Math.min(MAX, Math.max(MIN, pinchBase.current!.s * (dist / pinchBase.current!.dist)))
        const ratio = s / c.s
        return { s, x: mx - (mx - c.x) * ratio, y: my - (my - c.y) * ratio }
      })
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinchBase.current = null
  }

  const zoomBy = (k: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = rect.width / 2
    const py = rect.height / 2
    setT((cur) => {
      const s = Math.min(MAX, Math.max(MIN, cur.s * k))
      const ratio = s / cur.s
      return { s, x: px - (px - cur.x) * ratio, y: py - (py - cur.y) * ratio }
    })
  }

  const btn: CSSProperties = {
    width: 26,
    height: 24,
    background: C.panelBg,
    border: `1px solid ${C.border}`,
    borderRadius: 2,
    font: `400 12px/1 ${MONO_FONT}`,
    color: C.inkMid,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClickCapture={(e) => {
        if (dragged.current) {
          e.stopPropagation()
          e.preventDefault()
          dragged.current = false
        }
      }}
      style={{ position: 'relative', overflow: 'hidden', touchAction: 'none', cursor: 'grab', ...style }}
    >
      <div style={{ transform: `translate(${t.x}px,${t.y}px) scale(${t.s})`, transformOrigin: '0 0', width: contentWidth, position: 'relative' }}>
        {children}
      </div>
      <div style={{ position: 'absolute', right: 10, bottom: 10, display: 'flex', gap: 4, alignItems: 'center', zIndex: 5 }}>
        <span style={{ font: `400 8px/1 ${MONO_FONT}`, color: C.inkFaint, marginRight: 3 }}>{Math.round(t.s * 100)}%</span>
        <button style={btn} title="zoom out" onClick={() => zoomBy(1 / 1.25)}>
          −
        </button>
        <button style={btn} title="zoom in" onClick={() => zoomBy(1.25)}>
          +
        </button>
        <button style={{ ...btn, width: 'auto', padding: '0 7px', font: `400 8px/1 ${MONO_FONT}` }} title="reset view" onClick={() => setT(initial)}>
          RESET
        </button>
      </div>
    </div>
  )
}
