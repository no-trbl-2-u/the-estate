// Estate View generator — zero-dependency Node script.
// Walks ideas/, exports/, ideas/SURVEY.md and system/registry.md at the estate
// root, parses the narrow frontmatter subset actually in use, and emits
// src/data/estate.json. Parsing only: graph derivation (chains, tips, layout)
// lives in src/lib/derive.ts so the same data contract can later be served
// from a database instead of this file.
import { readFileSync, readdirSync, writeFileSync, existsSync, statSync, mkdirSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const UI_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ROOT = resolve(UI_DIR, '..')
const OUT = join(UI_DIR, 'src', 'data', 'estate.json')

// ---------- frontmatter parsing (the subset in use, nothing more) ----------

function splitFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text)
  if (!m) return { fm: {}, body: text }
  return { fm: parseFm(m[1]), body: text.slice(m[0].length) }
}

function stripComment(raw) {
  // strip a trailing "# comment" outside quotes; return [value, comment]
  let inS = false, inD = false
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i]
    if (c === "'" && !inD) inS = !inS
    else if (c === '"' && !inS) inD = !inD
    else if (c === '#' && !inS && !inD) return [raw.slice(0, i).trim(), raw.slice(i + 1).trim()]
  }
  return [raw.trim(), null]
}

function scalar(raw) {
  let v = raw.trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
  if (v === 'true') return true
  if (v === 'false') return false
  if (v !== '' && !isNaN(Number(v)) && /^-?\d+(\.\d+)?$/.test(v)) return Number(v)
  return v
}

function parseFm(src) {
  const out = {}
  const comments = {}
  const lines = src.split(/\r?\n/)
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue }
    const m = /^(\s*)([\w][\w-]*):\s*(.*)$/.exec(line)
    if (!m) { i++; continue }
    const [, indent, key, rest0] = m
    if (indent.length > 0) { i++; continue } // nested keys handled below
    const [rest, comment] = stripComment(rest0)
    if (comment) comments[key] = comment
    if (rest === '') {
      // block list or nested map
      const items = []
      const nested = {}
      let isMap = false
      let j = i + 1
      while (j < lines.length) {
        const l = lines[j]
        if (!l.trim()) { j++; continue }
        const li = /^\s+-\s+(.*)$/.exec(l)
        const ni = /^\s+([\w][\w_-]*):\s*(.*)$/.exec(l)
        if (li) { items.push(scalar(stripComment(li[1])[0])) ; j++ }
        else if (ni && /^\s/.test(l)) { isMap = true; nested[ni[1]] = scalar(stripComment(ni[2])[0]); j++ }
        else break
      }
      out[key] = isMap ? nested : items
      i = j
    } else if (rest.startsWith('[')) {
      const inner = rest.replace(/^\[/, '').replace(/\]$/, '').trim()
      out[key] = inner === '' ? [] : inner.split(',').map((s) => scalar(s))
      i++
    } else if (rest.startsWith('{')) {
      const obj = {}
      for (const pair of rest.replace(/^\{/, '').replace(/\}$/, '').split(',')) {
        const pm = /^\s*([\w-]+):\s*(.*)$/.exec(pair)
        if (pm) obj[pm[1]] = scalar(pm[2])
      }
      out[key] = obj
      i++
    } else {
      out[key] = scalar(rest)
      i++
    }
  }
  out.__comments = comments
  return out
}

// ---------- markdown helpers ----------

function firstHeading(body) {
  const m = /^#\s+(.+)$/m.exec(body)
  return m ? m[1].trim() : null
}

function plainText(md) {
  return md
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s*[-*]\s+/gm, '— ')
    .replace(/^#+\s+/gm, '')
    .replace(/\r/g, '')
    .trim()
}

function section(body, name) {
  const re = new RegExp(`^##\\s+${name}\\s*$([\\s\\S]*?)(?=^##\\s|$(?![\\s\\S]))`, 'm')
  const m = re.exec(body)
  return m ? m[1].trim() : null
}

function firstParagraphs(text, n = 2, maxLen = 700) {
  const paras = text.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, ' ').trim()).filter(Boolean)
  let out = paras.slice(0, n).join('\n\n')
  if (out.length > maxLen) out = out.slice(0, maxLen).replace(/\s+\S*$/, '') + ' …'
  return out
}

// ---------- registry: verb -> agent ----------

function parseRegistry() {
  const verbToAgent = {}
  const path = join(ROOT, 'system', 'registry.md')
  if (existsSync(path)) {
    const text = readFileSync(path, 'utf8')
    for (const line of text.split(/\r?\n/)) {
      const m = /^\|\s*`([\w-]+)`\s*\|[^|]*\|[^|]*\|\s*\*\*([^*]+)\*\*\s*\|/.exec(line)
      if (m) verbToAgent[m[1]] = m[2].trim()
    }
  }
  return verbToAgent
}

const MONO = {
  'The Steward': 'St', 'The Gardener': 'Gd', 'The Architect': 'At', 'The Surveyor': 'Sv',
  'The Forager': 'Fg', 'The Distiller': 'Ds', 'The Advocate': 'Ad', 'The Factor': 'Fc',
  'The Assayer': 'As', 'The Chancellor': 'Ch', 'The Cartographer': 'Cg', 'The Keeper': 'Kp',
  'The Sower': 'Sw',
}
const AGENTS = [
  { name: 'The Steward', verbs: ['— writes all state'] },
  { name: 'The Gardener', verbs: ['capture', 'frame'] },
  { name: 'The Architect', verbs: ['envision'] },
  { name: 'The Surveyor', verbs: ['chart', 'phase'] },
  { name: 'The Forager', verbs: ['explore'] },
  { name: 'The Distiller', verbs: ['distill'] },
  { name: 'The Advocate', verbs: ['challenge'] },
  { name: 'The Factor', verbs: ['research'] },
  { name: 'The Assayer', verbs: ['compare', 'review'] },
  { name: 'The Chancellor', verbs: ['decide'] },
  { name: 'The Cartographer', verbs: ['relate', 'survey'] },
  { name: 'The Keeper', verbs: ['incubate', 'retire'] },
  { name: 'The Sower', verbs: ['seed'] },
]

// ---------- walk the estate ----------

const verbToAgent = parseRegistry()
const agentFor = (verb) => verbToAgent[verb] || null
const monoFor = (agent) => MONO[agent] || (agent ? agent.replace(/^The\s+/, '').slice(0, 2) : '??')

const ideasDir = join(ROOT, 'ideas')
const recordDirs = readdirSync(ideasDir).filter((d) => {
  return /^\d{4}-/.test(d) && statSync(join(ideasDir, d)).isDirectory()
})

// Seeds indexed by origin record id ("idea-0003")
const exportsDir = join(ROOT, 'exports')
const seedsByRecord = {}
if (existsSync(exportsDir)) {
  for (const f of readdirSync(exportsDir)) {
    if (!f.endsWith('.md') || f === 'README.md') continue
    const text = readFileSync(join(exportsDir, f), 'utf8')
    const { fm, body } = splitFrontmatter(text)
    if (fm.type !== 'Seed') continue
    const om = /^(idea-\d{4})\s*@\s*(\S+)/.exec(String(fm.origin || ''))
    const recId = om ? om[1] : null
    if (!recId) continue
    seedsByRecord[recId] = { file: 'exports/' + f, fm, body }
  }
}

function artifactNFromPath(p, recordDirName) {
  // "ideas/<dir>/artifacts/0009-....md" -> 9 (only for this record's artifacts)
  const m = new RegExp(`^ideas/${recordDirName}/artifacts/(\\d{4})-`).exec(p)
  return m ? parseInt(m[1], 10) : null
}

const records = []
for (const dir of recordDirs) {
  const base = join(ideasDir, dir)
  const ideaText = readFileSync(join(base, 'idea.md'), 'utf8')
  const { fm: ideaFm, body: ideaBody } = splitFrontmatter(ideaText)
  const numId = dir.slice(0, 4)
  const appetiteComment = (ideaFm.__comments && ideaFm.__comments.appetite) || ''
  const relatesComment = (ideaFm.__comments && ideaFm.__comments.relates) || ''

  // -- artifacts --
  const artifacts = []
  const artDir = join(base, 'artifacts')
  if (existsSync(artDir)) {
    for (const f of readdirSync(artDir).sort()) {
      if (!f.endsWith('.md')) continue
      const n = parseInt(f.slice(0, 4), 10)
      const { fm, body } = splitFrontmatter(readFileSync(join(artDir, f), 'utf8'))
      const inputs = (Array.isArray(fm.inputs) ? fm.inputs : [])
        .map((p) => artifactNFromPath(String(p), dir))
        .filter((x) => x !== null)
      const classifiers = fm.classifiers && typeof fm.classifiers === 'object' && !Array.isArray(fm.classifiers) ? fm.classifiers : {}
      artifacts.push({
        n,
        type: String(fm.type || 'Spark'),
        verb: String(fm['produced-by'] || ''),
        agent: agentFor(fm['produced-by']) || 'The Steward',
        mono: monoFor(agentFor(fm['produced-by'])),
        title: firstHeading(body) || String(fm.title || f),
        file: f,
        date: String(fm.date || ''),
        inputs,
        classifiers,
        lenses: Array.isArray(fm.lenses) ? fm.lenses : [],
        shape: String(fm.shape || 'prose'),
        nextSteps: Array.isArray(fm['potential-next-steps']) ? fm['potential-next-steps'] : [],
        summary: fm.summary ? String(fm.summary) : null,
        excerpt: firstParagraphs(plainText(body), 2),
        stale: fm.stale_after ? String(fm.stale_after).slice(0, 10) : null,
        generatedBy: fm.generated && fm.generated.by ? String(fm.generated.by) : null,
        terminal: false,
      })
    }
  }

  // -- the Seed, if this record exported one --
  const seed = seedsByRecord['idea-' + numId] || null
  if (seed) {
    const inputs = (Array.isArray(seed.fm.inputs) ? seed.fm.inputs : [])
      .map((p) => artifactNFromPath(String(p), dir))
      .filter((x) => x !== null)
    const classifiers = seed.fm.classifiers && typeof seed.fm.classifiers === 'object' && !Array.isArray(seed.fm.classifiers) ? seed.fm.classifiers : {}
    artifacts.push({
      n: 'S',
      type: 'Seed',
      verb: 'seed',
      agent: agentFor('seed') || 'The Sower',
      mono: monoFor(agentFor('seed') || 'The Sower'),
      title: firstHeading(seed.body) || seed.file,
      file: seed.file,
      date: String(seed.fm.date || ''),
      inputs,
      classifiers,
      lenses: [],
      shape: 'prose',
      nextSteps: [],
      summary: seed.fm.audience ? 'Audience: ' + String(seed.fm.audience) : null,
      excerpt: firstParagraphs(plainText(seed.body), 2),
      stale: null,
      generatedBy: null,
      terminal: true,
      origin: String(seed.fm.origin || ''),
    })
  }

  // -- states --
  const states = []
  const stDir = join(base, 'state')
  if (existsSync(stDir)) {
    for (const f of readdirSync(stDir).sort()) {
      if (!f.endsWith('.md')) continue
      const { fm, body } = splitFrontmatter(readFileSync(join(stDir, f), 'utf8'))
      const outputs = Array.isArray(fm.outputs) ? fm.outputs.map(String) : []
      const out = []
      const steer = []
      for (const p of outputs) {
        const an = artifactNFromPath(p, dir)
        if (an !== null) out.push(an)
        else if (/^exports\//.test(p) && seed && p === seed.file) out.push('S')
        else steer.push(p)
      }
      const est = section(body, 'Established')
      states.push({
        n: typeof fm.state === 'number' ? fm.state : parseInt(f.slice(0, 4), 10),
        date: String(fm.date || ''),
        verb: fm['session-verb'] ? String(fm['session-verb']) : '',
        skill: fm['session-skill'] ? String(fm['session-skill']) : null,
        out,
        steer: steer.length ? steer : null,
        est: est ? firstParagraphs(plainText(est), 2, 600) : '',
      })
    }
  }
  states.sort((a, b) => a.n - b.n)

  records.push({
    id: numId,
    fullId: String(ideaFm.id || 'idea-' + numId),
    title: String(ideaFm.title || dir.slice(5)),
    slug: dir,
    created: String(ideaFm.created || ''),
    status: String(ideaFm.status || 'active'),
    appetite: typeof ideaFm.appetite === 'number' ? ideaFm.appetite : 0,
    placeholder: /placeholder/i.test(appetiteComment),
    appetiteNote: appetiteComment || null,
    stateHead: String(ideaFm['state-head'] || ''),
    headDate: states.length ? states[states.length - 1].date : String(ideaFm.created || ''),
    seed: seed ? seed.file : null,
    seedOrigin: seed ? String(seed.fm.origin || '') : null,
    relates: Array.isArray(ideaFm.relates) ? ideaFm.relates : [],
    relatesNote: relatesComment || null,
    tensions: (() => {
      const t = section(ideaBody, 'Tensions')
      return t ? firstParagraphs(plainText(t), 1, 400) : null
    })(),
    artifacts,
    states,
  })
}

// display order: most recently moved first
records.sort((a, b) => (a.headDate < b.headDate ? 1 : a.headDate > b.headDate ? -1 : b.id.localeCompare(a.id)))

// -- survey --
let survey = null
{
  const p = join(ideasDir, 'SURVEY.md')
  if (existsSync(p)) {
    const { fm } = splitFrontmatter(readFileSync(p, 'utf8'))
    survey = {
      status: String(fm.status || 'draft'),
      covers: Array.isArray(fm.covers) ? fm.covers : [],
      description: fm.description ? String(fm.description) : null,
    }
  }
}

// -- relates mentions: quotations in idea.md comments, not edges --
const relatesMentions = []
for (const r of records) {
  if (!r.relatesNote) continue
  const ids = [...r.relatesNote.matchAll(/idea-(\d{4})/g)].map((m) => m[1])
  for (const target of ids) {
    if (target === r.id) continue
    relatesMentions.push({ from: r.id, to: target, quote: r.relatesNote })
  }
}

const now = new Date()
const stamp = now.toISOString().slice(0, 16).replace('T', ' ')

const data = {
  generatedAt: stamp,
  estateRoot: '~/the-estate',
  agents: AGENTS.map((a) => ({ ...a, mono: MONO[a.name] })),
  records,
  survey,
  relatesMentions,
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify(data, null, 2))
const nArt = records.reduce((s, r) => s + r.artifacts.length, 0)
const nSt = records.reduce((s, r) => s + r.states.length, 0)
console.log(`estate.json: ${records.length} records, ${nArt} artifacts (incl. seeds), ${nSt} states -> ${OUT}`)

// ---------- the plain-text editions: llms.txt, llms-full.txt, sitemap.xml ----------
// The estate's text derivation was always the spine ("proven as plain text");
// serving it at /llms.txt makes the site legible to AI agents by construction.

const SITE = 'https://idea-estate.com'
const PUB = join(UI_DIR, 'public')
mkdirSync(PUB, { recursive: true })

const seededCount = records.filter((r) => r.seed).length
const pad4 = (n) => (n === 'S' ? 'seed' : String(n).padStart(4, '0'))

const llms = `# Estate View

> A read-only visual browser for an "estate" of idea records. Each record
> accumulates typed artifacts (Spark, Framing, Horizon, Trajectory, Phase,
> Findings, Appraisal, Decision, Brief, Seed) written by named agents
> performing verbs, plus immutable state snapshots written by a single
> narrator called the Steward. Lineage is derived from each artifact's
> inputs; the Seed is the terminal export that leaves the walls.

This snapshot was generated ${data.generatedAt} and covers ${records.length} records
(${nArt} artifacts including seeds, ${nSt} state snapshots, ${seededCount} exported).

## Records

${records
  .map(
    (r) =>
      `- idea-${r.id}: ${r.title} — status ${r.status}, appetite ${r.appetite}${r.placeholder ? ' (placeholder)' : ''}, ` +
      `${r.artifacts.filter((a) => !a.terminal).length} artifacts, ${r.states.length} states, ` +
      `${r.seed ? `seeded (${r.seed})` : 'no export'}`,
  )
  .join('\n')}

## Full text

- ${SITE}/llms-full.txt: every record, artifact summary, and state narration in this snapshot, as plain text.

## Notes for agents

- The interactive app at ${SITE}/ renders the same data; there is no
  content behind interaction that is missing from /llms-full.txt.
- This tool is read-only by construction: nothing here writes to the estate.
`
writeFileSync(join(PUB, 'llms.txt'), llms)

const fullParts = [
  `# Estate View — the full estate as text`,
  ``,
  `Generated ${data.generatedAt}. ${records.length} records, ${nArt} artifacts (incl. seeds), ${nSt} state snapshots.`,
  ``,
]
for (const r of records) {
  fullParts.push(`\n${'='.repeat(72)}\n# idea-${r.id}: ${r.title}\n${'='.repeat(72)}\n`)
  fullParts.push(
    `status: ${r.status} · appetite: ${r.appetite}${r.placeholder ? ' (placeholder)' : ''} · created: ${r.created} · state-head: ${r.stateHead}${r.seed ? ` · seed: ${r.seed}` : ''}`,
  )
  if (r.relatesNote) fullParts.push(`relates (note, not an edge): ${r.relatesNote}`)
  fullParts.push(`\n## Artifacts — the agents' track\n`)
  if (!r.artifacts.length) fullParts.push(`(none — capture has not run on this record)`)
  for (const a of r.artifacts) {
    fullParts.push(`### ${pad4(a.n)} · ${a.type} · "${a.title}"`)
    fullParts.push(
      `${a.verb} · ${a.agent} · ${a.date} · inputs: [${a.inputs.map(pad4).join(', ')}]` +
        `${Object.entries(a.classifiers)
          .map(([k, v]) => ` · ${k}: ${v}`)
          .join('')}${a.stale ? ` · stale_after: ${a.stale}` : ''}`,
    )
    fullParts.push(a.summary ?? a.excerpt)
    fullParts.push('')
  }
  fullParts.push(`## States — the Steward's track (immutable, copied forward)\n`)
  for (const s of r.states) {
    fullParts.push(
      `### state/${pad4(s.n)} · ${s.date} · session-verb: ${s.verb || s.skill || 'none'}` +
        `${s.out.length ? ` · recorded: ${s.out.map(pad4).join(', ')}` : ''}` +
        `${s.steer ? ` · wrote outside the record: ${s.steer.join(', ')}` : ''}`,
    )
    if (s.est) fullParts.push(s.est)
    fullParts.push('')
  }
}
writeFileSync(join(PUB, 'llms-full.txt'), fullParts.join('\n'))

const today = data.generatedAt.slice(0, 10)
writeFileSync(
  join(PUB, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
`,
)
console.log(`text editions: public/llms.txt (${llms.length} B), public/llms-full.txt (${fullParts.join('\n').length} B), public/sitemap.xml`)
