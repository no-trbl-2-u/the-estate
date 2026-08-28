// Pure graph derivation over the data contract — the durable spine.
// Version-chain stacking and tip-finding, fan-out, the wall, the rungs,
// map layout. No DOM, no React: this module survives every renderer.
import type { Artifact, ArtifactN, IdeaRecord, StateSnap } from './types'

export const art = (r: IdeaRecord, n: ArtifactN) => r.artifacts.find((a) => a.n === n)

export const pad = (n: number | string) => (n === 'S' ? 'seed' : String(n).padStart(4, '0'))

// ---- relative time (against the snapshot's generation moment) ----

export function ago(dateISO: string, nowISO: string): string {
  const days = Math.round((Date.parse(nowISO) - Date.parse(dateISO + 'T00:00:00Z')) / 86400000)
  return days <= 0 ? 'today' : days === 1 ? 'yesterday' : `${days}d ago`
}

export function daysTo(dateISO: string, nowISO: string): number {
  return Math.round((Date.parse(dateISO + 'T00:00:00Z') - Date.parse(nowISO)) / 86400000)
}

// ---- version chains ----

/** Refiners are a → a: only their output supersedes its input. A research run
 *  of Findings citing Findings is lineage, not a rewrite. */
export const REFINER_VERBS = new Set(['challenge', 'explore', 'distill'])

/** The same-type refiner successor that names `a` as its single input, if any. */
export function successorOf(r: IdeaRecord, a: Artifact): Artifact | undefined {
  return r.artifacts.find((x) => x.type === a.type && REFINER_VERBS.has(x.verb) && x.inputs.length === 1 && x.inputs[0] === a.n)
}

export const isSuperseded = (r: IdeaRecord, a: Artifact) => !!successorOf(r, a)

/** Same-type predecessors this refiner rewrote (the chain below `a`). */
export function chainPredecessors(r: IdeaRecord, a: Artifact): Artifact[] {
  if (!REFINER_VERBS.has(a.verb)) return []
  return a.inputs.map((n) => art(r, n)).filter((x): x is Artifact => !!x && x.type === a.type)
}

export interface TipInfo {
  label: string
  postExport: boolean
}

/** A tip is the unsuperseded end of a version chain, or an artifact wearing a
 *  notable classifier. The label is the classifier worn plainly. */
export function tipOf(r: IdeaRecord, a: Artifact): TipInfo | null {
  if (a.terminal) return null
  if (isSuperseded(r, a)) return null
  const chainTip = chainPredecessors(r, a).length > 0
  const cls: string[] = []
  if (a.classifiers['challenged'] === true) cls.push('challenged: true')
  if (a.classifiers['horizon'] === 'falsifiable') cls.push('falsifiable')
  if (a.classifiers['trajectory'] === 'actionable') cls.push('actionable')
  if (!chainTip && cls.length === 0) return null
  // recorded after the Seed left?
  const seedState = r.states.find((s) => s.out.includes('S'))
  const myState = r.states.find((s) => s.out.includes(a.n))
  const postExport = !!seedState && !!myState && myState.n > seedState.n
  let label = cls.length ? cls.join(' · ') : 'tip'
  if (postExport) label += ' · post-export'
  return { label, postExport }
}

// ---- lineage depth (column index on the map) ----

export function depths(r: IdeaRecord): Map<ArtifactN, number> {
  const d = new Map<ArtifactN, number>()
  const seen = new Set<ArtifactN>()
  const walk = (n: ArtifactN): number => {
    const got = d.get(n)
    if (got !== undefined) return got
    if (seen.has(n)) return 0
    seen.add(n)
    const a = art(r, n)
    const ins = a?.inputs ?? []
    const v = ins.length ? Math.max(...ins.map(walk)) + 1 : 0
    d.set(n, v)
    return v
  }
  r.artifacts.forEach((a) => walk(a.n))
  return d
}

// ---- desktop map layout ----

export interface MapNode {
  a: Artifact
  x: number
  y: number
  sup: boolean
  tip: TipInfo | null
}
export interface MapEdge {
  d: string
  kind: 'input' | 'version' | 'terminal' | 'rung' | 'wall-return'
  longRange: boolean
}
export interface MapState {
  s: StateSnap
  x: number
  y: number
  isHead: boolean
}
export interface MapHatch {
  s: StateSnap
  x: number
  w: number
}
export interface MapLabel {
  x: number
  y: number
  w: number
  text: string
  kind: 'superseded' | 'tip' | 'track' | 'wall' | 'steer-head' | 'steer-note'
}
export interface MapLayout {
  w: number
  h: number
  nodes: MapNode[]
  edges: MapEdge[]
  states: MapState[]
  seamTop: number
  hatches: MapHatch[]
  labels: MapLabel[]
  wallX: number | null
  wallH: number
}

export const NODE_W = 100
export const NODE_H = 34

export function buildMap(r: IdeaRecord, showRungs: boolean): MapLayout {
  const COLW = 112
  const ROW = 44
  const RAIL_TOP = 26
  const d = depths(r)
  const cols = new Map<number, Artifact[]>()
  for (const a of r.artifacts) {
    const k = d.get(a.n) ?? 0
    if (!cols.has(k)) cols.set(k, [])
    cols.get(k)!.push(a)
  }
  const colKeys = [...cols.keys()].sort((a, b) => a - b)
  const maxRows = colKeys.length ? Math.max(...colKeys.map((k) => cols.get(k)!.length)) : 1
  const railH = Math.max(150, maxRows * ROW + 24)
  const railMid = RAIL_TOP + railH / 2
  const artW = colKeys.length ? 6 + colKeys[colKeys.length - 1] * COLW + NODE_W : 300

  const nStates = r.states.length
  const stPitch = Math.max(86, (artW - 52) / Math.max(1, nStates - 1))
  const w = Math.max(artW, 6 + (nStates - 1) * stPitch + 52) + 30

  const seamTop = RAIL_TOP + railH + 14
  const stateTop = seamTop + 62
  const h = stateTop + 74

  const pos = new Map<ArtifactN, { x: number; y: number }>()
  for (const k of colKeys) {
    const list = cols.get(k)!
    list.forEach((a, i) => {
      pos.set(a.n, { x: 6 + k * COLW, y: Math.round(railMid - ((list.length - 1) * ROW) / 2 - NODE_H / 2 + i * ROW) })
    })
  }

  const nodes: MapNode[] = r.artifacts.map((a) => {
    const p = pos.get(a.n)!
    return { a, x: p.x, y: p.y, sup: isSuperseded(r, a), tip: tipOf(r, a) }
  })

  const edges: MapEdge[] = []
  for (const a of r.artifacts) {
    const p2 = pos.get(a.n)!
    for (const inN of a.inputs) {
      const src = art(r, inN)
      if (!src) continue
      const p1 = pos.get(inN)
      if (!p1) continue
      const x1 = p1.x + NODE_W
      const y1 = p1.y + NODE_H / 2
      const x2 = p2.x
      const y2 = p2.y + NODE_H / 2
      const dx = Math.max(18, (x2 - x1) * 0.5)
      const version = src.type === a.type && a.inputs.length === 1
      edges.push({
        d: `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`,
        kind: a.terminal ? 'terminal' : version ? 'version' : 'input',
        longRange: x2 - x1 > COLW * 2,
      })
    }
  }

  const stPos = new Map<number, number>()
  const states: MapState[] = r.states.map((s, i) => {
    const x = Math.round(6 + i * stPitch)
    stPos.set(s.n, x)
    return { s, x, y: stateTop, isHead: s.n === r.states[r.states.length - 1].n }
  })

  if (showRungs) {
    for (const s of r.states) {
      for (const n of s.out) {
        const p = pos.get(n)
        if (!p) continue
        const x1 = stPos.get(s.n)! + 23
        const y1 = stateTop
        const x2 = p.x + NODE_W / 2
        const y2 = p.y + NODE_H
        edges.push({ d: `M${x1},${y1} C${x1},${y1 - 90} ${x2},${y2 + 70} ${x2},${y2}`, kind: 'rung', longRange: false })
      }
    }
  }

  const labels: MapLabel[] = []
  let wallX: number | null = null
  const seedNode = r.artifacts.find((a) => a.terminal)
  if (seedNode) {
    const sp = pos.get(seedNode.n)!
    wallX = sp.x - 14
    labels.push({ x: sp.x - 10, y: 2, w: 120, text: 'THE WALL', kind: 'wall' })
    const st = r.states.find((s) => s.out.includes(seedNode.n))
    if (st) {
      const x1 = sp.x + NODE_W / 2
      const y1 = sp.y + NODE_H
      const x2 = stPos.get(st.n)! + 23
      edges.push({
        d: `M${x1},${y1} C${x1 + 40},${y1 + 120} ${x2 + 30},${stateTop - 40} ${x2},${stateTop}`,
        kind: 'wall-return',
        longRange: false,
      })
    }
  }
  for (const node of nodes) {
    if (node.sup) labels.push({ x: node.x, y: node.y - 15, w: NODE_W, text: 'superseded', kind: 'superseded' })
    if (node.tip)
      labels.push({
        x: node.x,
        y: node.y + NODE_H + 4,
        w: NODE_W,
        text: node.tip.label === 'tip' ? 'TIP' : `TIP · ${node.tip.label}`,
        kind: 'tip',
      })
  }
  labels.push({ x: 6, y: stateTop + 50, w: 900, text: "THE STEWARD'S TRACK — COPIED FORWARD, NEVER EDITED", kind: 'track' })

  const hatches: MapHatch[] = r.states
    .filter((s) => s.steer)
    .map((s) => ({ s, x: stPos.get(s.n)! - 8, w: Math.max(46, stPitch - 8) }))
  if (hatches.length) {
    const lastRight = Math.max(...hatches.map((hh) => hh.x + hh.w))
    const lx = Math.min(lastRight + 12, w - 380)
    labels.push({ x: lx, y: seamTop + 8, w: 380, text: 'STEERING — NO ARTIFACT', kind: 'steer-head' })
    labels.push({
      x: lx,
      y: seamTop + 20,
      w: 420,
      text: `${hatches.length} of ${r.states.length} sessions wrote outside the record. Click the hatching to read the narration.`,
      kind: 'steer-note',
    })
  }

  return { w, h, nodes, edges, states, seamTop, hatches, labels, wallX, wallH: stateTop + 26 }
}

// ---- census & aggregates ----

export function nonTerminalCount(r: IdeaRecord) {
  return r.artifacts.filter((a) => !a.terminal).length
}

export function typeCounts(records: IdeaRecord[]): Record<string, number> {
  const c: Record<string, number> = {}
  for (const r of records) for (const a of r.artifacts) c[a.type] = (c[a.type] ?? 0) + 1
  return c
}

export function agentCounts(records: IdeaRecord[]): Record<string, number> {
  const c: Record<string, number> = {}
  for (const r of records) for (const a of r.artifacts) c[a.agent] = (c[a.agent] ?? 0) + 1
  return c
}

export function totalStates(records: IdeaRecord[]) {
  return records.reduce((s, r) => s + r.states.length, 0)
}

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen']
export const numWord = (n: number) => WORDS[n] ?? String(n)

// ---- mobile map: the travel map turned ninety degrees ----

export type MobileItem =
  | { kind: 'artifact'; a: Artifact; stateNs: number[]; supersedeElbow: string | null }
  | { kind: 'group'; label: string; artifacts: Artifact[]; stateNs: number[] }
  | { kind: 'steer'; s: StateSnap }

export function buildMobileItems(r: IdeaRecord): MobileItem[] {
  type Flat = { a: Artifact; stateN: number | null }
  const flats: Flat[] = []
  const covered = new Set<ArtifactN>()
  const steerRows: { afterIndex: number; s: StateSnap }[] = []
  for (const s of r.states) {
    if (s.steer && s.out.length === 0) steerRows.push({ afterIndex: flats.length, s })
    for (const n of s.out) {
      const a = art(r, n)
      if (a) {
        flats.push({ a, stateN: s.n })
        covered.add(n)
      }
    }
    if (s.steer && s.out.length > 0) steerRows.push({ afterIndex: flats.length, s })
  }
  for (const a of r.artifacts) if (!covered.has(a.n)) flats.push({ a, stateN: null })

  // group runs of >=3 consecutive same type+verb artifacts
  const items: MobileItem[] = []
  let i = 0
  const steerAt = (idx: number) => steerRows.filter((x) => x.afterIndex === idx).map((x) => x.s)
  const pushSteer = (idx: number) => {
    for (const s of steerAt(idx)) items.push({ kind: 'steer', s })
  }
  while (i < flats.length) {
    pushSteer(i)
    let j = i + 1
    while (
      j < flats.length &&
      flats[j].a.type === flats[i].a.type &&
      flats[j].a.verb === flats[i].a.verb &&
      !flats[j].a.terminal &&
      !flats[i].a.terminal &&
      steerAt(j).length === 0
    )
      j++
    if (j - i >= 3) {
      const run = flats.slice(i, j)
      const stateNs = [...new Set(run.map((f) => f.stateN).filter((x): x is number => x !== null))]
      items.push({
        kind: 'group',
        label: `THE ${run[0].a.verb.toUpperCase()} RUN · ${stateNs.length || run.length} SESSION${(stateNs.length || run.length) === 1 ? '' : 'S'}`,
        artifacts: run.map((f) => f.a),
        stateNs,
      })
      i = j
    } else {
      const f = flats[i]
      const succ = successorOf(r, f.a)
      items.push({
        kind: 'artifact',
        a: f.a,
        stateNs: f.stateN !== null ? [f.stateN] : [],
        supersedeElbow: succ ? `${succ.verb} · supersedes` : null,
      })
      i++
    }
  }
  pushSteer(flats.length)
  return items
}
