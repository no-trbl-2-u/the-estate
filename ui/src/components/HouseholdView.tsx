import type { EstateData } from '../lib/types'
import { agentCounts, numWord, totalStates } from '../lib/derive'
import { C, DISPLAY, MONO_FONT, SERIF } from '../lib/theme'
import { AgentSeal } from './bits'

export function HouseholdView({ data, onSelect }: { data: EstateData; onSelect: (name: string) => void }) {
  const used = agentCounts(data.records)
  const nStates = totalStates(data.records)
  const neverCalled = data.agents.filter((a) => a.name !== 'The Steward' && !used[a.name]).length
  return (
    <div style={{ padding: '22px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(258px,1fr))', gap: 12, maxWidth: 1140 }}>
        {data.agents.map((a, i) => {
          const isSteward = a.name === 'The Steward'
          const n = isSteward ? nStates : (used[a.name] ?? 0)
          const on = n > 0 || isSteward
          return (
            <button
              key={a.name}
              onClick={() => onSelect(a.name)}
              className="hov-border"
              style={{
                background: on ? C.panelBg : '#EFF0E9',
                border: `1px solid ${on ? C.border : C.borderLt}`,
                borderRadius: 2,
                padding: '13px 14px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <AgentSeal mono={a.mono} size={30} rot={((i % 3) - 1) * 5} active={on} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ font: `400 15px/1.15 ${DISPLAY}`, color: on ? C.ink : C.inkSoft }}>{a.name}</div>
                  <div style={{ font: `400 8px/1.4 ${MONO_FONT}`, color: on ? C.gold : C.inkFaint, marginTop: 3 }}>
                    {isSteward ? `${nStates} state snapshots` : n ? `${n} artifact${n > 1 ? 's' : ''}` : 'never called'}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 11 }}>
                {a.verbs.map((v) => (
                  <span
                    key={v}
                    style={{
                      font: `400 9px/1 ${MONO_FONT}`,
                      color: on ? C.inkMid : C.inkFaint,
                      border: `1px solid ${C.borderLt}`,
                      background: on ? C.contentBg : 'transparent',
                      borderRadius: 2,
                      padding: '3px 6px',
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </button>
          )
        })}
      </div>
      <div
        style={{
          maxWidth: 1140,
          marginTop: 18,
          font: `400 13px/1.6 ${SERIF}`,
          color: C.inkSoft,
          fontStyle: 'italic',
          borderTop: `1px solid ${C.border}`,
          paddingTop: 14,
        }}
      >
        {neverCalled > 0
          ? `${numWord(neverCalled).replace(/^./, (c) => c.toUpperCase())} offices have never been called anywhere in the estate. That is not a fault — it is the shape of what has been asked for so far.`
          : 'Every office has been called at least once.'}
      </div>
    </div>
  )
}
