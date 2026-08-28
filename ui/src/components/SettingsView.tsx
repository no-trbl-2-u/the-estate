import type { EstateData } from '../lib/types'
import { C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'

export function SettingsView({
  data,
  showRungs,
  setShowRungs,
}: {
  data: EstateData
  showRungs: boolean
  setShowRungs: (v: boolean) => void
}) {
  const rows: { name: string; note: string; value: string; onClick?: () => void }[] = [
    { name: 'Estate root', note: 'the directory this snapshot was generated from', value: data.estateRoot },
    { name: 'Generated at', note: 'this tool renders a snapshot; honesty about its age is the feature', value: data.generatedAt },
    { name: 'Records covered', note: 'every ideas/NNNN-slug/ found at generation time', value: String(data.records.length) },
    { name: 'Mode', note: 'read-only by construction — there is no writer here', value: 'read-only' },
    {
      name: 'Rungs',
      note: 'state → artifact lines under the rails · click to toggle',
      value: showRungs ? 'shown' : 'hidden',
      onClick: () => setShowRungs(!showRungs),
    },
  ]
  return (
    <div style={{ padding: '22px 24px' }}>
      <div style={{ maxWidth: 560, background: C.panelBg, border: `1px solid ${C.border}`, borderRadius: 2 }}>
        {rows.map((s) => (
          <div
            key={s.name}
            onClick={s.onClick}
            style={{
              padding: '13px 16px',
              borderBottom: `1px solid ${C.borderLt}`,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              alignItems: 'baseline',
              cursor: s.onClick ? 'pointer' : undefined,
            }}
          >
            <div>
              <div style={{ font: `400 13.5px/1.2 ${DISPLAY}`, color: C.ink }}>{s.name}</div>
              <div style={{ font: `400 11.5px/1.5 ${SERIF}`, color: C.inkFaint, marginTop: 3 }}>{s.note}</div>
            </div>
            <div style={{ font: `400 10px/1.5 ${MONO_FONT}`, color: s.onClick ? C.gold : C.inkSoft, textAlign: 'right', flex: 'none' }}>{s.value}</div>
          </div>
        ))}
        <div style={{ padding: '13px 16px', font: `400 12px/1.6 ${SERIF}`, color: C.inkFaint, fontStyle: 'italic' }}>
          This tool renders a snapshot and cannot change the estate. There is nothing here to save.
        </div>
      </div>
    </div>
  )
}
