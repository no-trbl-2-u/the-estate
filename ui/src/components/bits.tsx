import type { CSSProperties, ReactNode } from 'react'
import type { Glyph } from '../lib/theme'
import { C, DISPLAY, MONO_FONT, SEAL_BG } from '../lib/theme'

/** Type glyph — shape carries the type, colour only the family. */
export function GlyphMark({ g, size, style }: { g: Omit<Glyph, 'accent'>; size: number; style?: CSSProperties }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flex: 'none',
        display: 'inline-block',
        background: g.gfill,
        border: g.gborder,
        borderRadius: g.gradius,
        clipPath: g.gclip === 'none' ? undefined : g.gclip,
        ...style,
      }}
    />
  )
}

/** Wax agent seal. */
export function AgentSeal({
  mono,
  size,
  rot = -5,
  active = true,
}: {
  mono: string
  size: number
  rot?: number
  active?: boolean
}) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flex: 'none',
        borderRadius: '50%',
        background: active ? SEAL_BG : 'transparent',
        border: active ? undefined : `1px dashed ${C.border}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `rotate(${rot}deg)`,
      }}
    >
      <span style={{ font: `400 ${Math.round(size * 0.36)}px/1 ${DISPLAY}`, color: active ? '#F0DCC8' : C.inkFaint }}>{mono}</span>
    </span>
  )
}

/** Brass nameplate. */
export function Plate({ text, small }: { text: string; small?: boolean }) {
  return (
    <span
      style={{
        background: 'linear-gradient(#E0CE9A,#C9A94E 45%,#A8873A)',
        border: `1px solid ${C.gold}`,
        borderRadius: small ? 1 : 2,
        padding: small ? '4px 8px' : '5px 10px',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.55)',
        display: 'inline-block',
        flex: 'none',
      }}
    >
      <span style={{ font: `600 ${small ? 9 : 10}px/1 ${MONO_FONT}`, letterSpacing: small ? '.16em' : '.2em', color: '#3E3010' }}>
        {text}
      </span>
    </span>
  )
}

export function Pill({
  text,
  hot,
  colors,
}: {
  text: string
  hot?: boolean
  colors?: { color: string; bc: string; bg: string }
}) {
  const c = colors ?? (hot ? { color: C.gold, bc: C.goldMid, bg: C.goldBg } : { color: C.inkSoft, bc: C.border, bg: 'transparent' })
  return (
    <span
      style={{
        font: `400 9px/1 ${MONO_FONT}`,
        color: c.color,
        border: `1px solid ${c.bc}`,
        background: c.bg,
        borderRadius: 10,
        padding: '4px 8px',
      }}
    >
      {text}
    </span>
  )
}

/** Small mono section label ("RECORDS", "SHELF LIFE", …). */
export function MonoLabel({ children, color = C.inkFaint, style }: { children: ReactNode; color?: string; style?: CSSProperties }) {
  return <div style={{ font: `400 8px/1 ${MONO_FONT}`, letterSpacing: '.2em', color, ...style }}>{children}</div>
}

/** The SEEDED wax bar on shelf cards. */
export function SeedWax({ w = 16, h = 9 }: { w?: number; h?: number }) {
  return (
    <span
      title="seeded — an export left the walls"
      style={{
        width: w,
        height: h,
        borderRadius: 1,
        background: 'radial-gradient(circle at 35% 30%,#9C3F31,#6E271E)',
        display: 'inline-block',
      }}
    />
  )
}

export const statusDotColor = (status: string) => (status === 'active' ? C.teal : status === 'incubating' ? C.goldMid : C.inkFaint)
