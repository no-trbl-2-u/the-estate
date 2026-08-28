// The Estate View data contract.
// Today this shape is emitted by scripts/generate.mjs into src/data/estate.json;
// in v2 the same shape is served from the database API. Nothing above this
// contract may care which.

export type ArtifactN = number | 'S'

export interface Artifact {
  n: ArtifactN
  type: string
  verb: string
  agent: string
  mono: string
  title: string
  file: string
  date: string
  inputs: ArtifactN[]
  classifiers: Record<string, string | boolean>
  lenses: string[]
  shape: string
  nextSteps: string[]
  summary: string | null
  excerpt: string
  stale: string | null
  generatedBy: string | null
  terminal: boolean
  origin?: string
}

export interface StateSnap {
  n: number
  date: string
  verb: string
  skill: string | null
  out: ArtifactN[]
  steer: string[] | null
  est: string
}

export interface IdeaRecord {
  id: string
  fullId: string
  title: string
  slug: string
  created: string
  status: string
  appetite: number
  placeholder: boolean
  appetiteNote: string | null
  stateHead: string
  headDate: string
  seed: string | null
  seedOrigin: string | null
  relates: string[]
  relatesNote: string | null
  tensions: string | null
  artifacts: Artifact[]
  states: StateSnap[]
}

export interface AgentInfo {
  name: string
  mono: string
  verbs: string[]
}

export interface RelatesMention {
  from: string
  to: string
  quote: string
}

export interface SurveyInfo {
  status: string
  covers: string[]
  description: string | null
}

export interface EstateData {
  generatedAt: string
  estateRoot: string
  agents: AgentInfo[]
  records: IdeaRecord[]
  survey: SurveyInfo | null
  relatesMentions: RelatesMention[]
}

export type ViewKey =
  | 'record'
  | 'grounds'
  | 'household'
  | 'types'
  | 'survey'
  | 'relates'
  | 'exports'
  | 'settings'
  | 'shelf' // mobile root
  | 'estate' // mobile "the estate itself" menu

export interface Selection {
  kind: 'artifact' | 'state'
  id: ArtifactN
}
