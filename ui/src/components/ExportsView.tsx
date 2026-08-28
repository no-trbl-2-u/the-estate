import type { EstateData } from '../lib/types'
import { C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'

const SEED_COMPONENTS = ['Horizon', 'Trajectory', 'next concrete move', 'refusals', 'provenance stamp']

export function ExportsView({ data, onSelect }: { data: EstateData; onSelect: (recId: string) => void }) {
  const seeded = data.records.filter((r) => r.seed)
  return (
    <div style={{ padding: '22px 24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 760 }}>
        {seeded.map((r) => {
          const seedArt = r.artifacts.find((a) => a.terminal)
          return (
            <button
              key={r.id}
              onClick={() => onSelect(r.id)}
              className="hov-border"
              style={{ background: C.goldBg, border: `1px solid ${C.gold}`, borderRadius: 2, padding: '16px 18px', cursor: 'pointer', textAlign: 'left' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', border: `3px solid ${C.gold}`, display: 'inline-block', flex: 'none' }} />
                <div>
                  <div style={{ font: `400 17px/1.2 ${DISPLAY}`, color: C.ink }}>{r.title}</div>
                  <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.gold, marginTop: 4, overflowWrap: 'anywhere' }}>{r.seed}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 13 }}>
                {SEED_COMPONENTS.map((p) => (
                  <span key={p} style={{ font: `400 9px/1 ${MONO_FONT}`, color: C.gold, border: `1px solid ${C.goldMid}`, borderRadius: 10, padding: '4px 8px' }}>
                    {p}
                  </span>
                ))}
              </div>
              <div style={{ font: `400 13px/1.6 ${SERIF}`, color: C.inkMid, marginTop: 12, maxWidth: '64ch' }}>
                {seedArt?.excerpt ?? ''}
              </div>
              <div style={{ font: `400 9.5px/1.5 ${MONO_FONT}`, color: C.gold, marginTop: 11, borderTop: `1px dashed ${C.goldMid}`, paddingTop: 9 }}>
                origin: {r.seedOrigin} — the only thing that travels backward
              </div>
            </button>
          )
        })}
        {seeded.length === 0 && (
          <div style={{ font: `400 15px/1.6 ${SERIF}`, color: C.inkSoft, fontStyle: 'italic' }}>No Seed has left the walls yet.</div>
        )}
      </div>
    </div>
  )
}
