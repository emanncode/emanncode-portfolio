export type ProjectId =
  | "soldbay"
  | "uniflow"
  | "ifesquare"
  | "filmritz"
  | "attendance-system"
  | "gostar"
  | "kana-master"
  | "anime-sentry"
  | string

export type PreviewType =
  | "soldbay"
  | "uniflow"
  | "ifesquare"
  | "filmritz"
  | "gostar"
  | "kana-master"
  | "anime-sentry"
  | "custom"

export interface ProjectDescription {
  lead?: string
  paragraphs: string[]
  bulletPoints?: string[]
  footer?: string
}

export interface ProjectItem {
  id: ProjectId
  title: string
  subtitle?: string
  tags: string[]
  description: ProjectDescription
  gitLink: string
  prodLink?: string
  align: "left" | "right"
  previewType: PreviewType
  customImage?: string
  image?: string
}

// Compatibility alias
export type projectItems = ProjectItem
