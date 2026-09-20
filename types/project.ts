export type ProjectId = "gostar" | "kana-master" | "anime-sentry" | string

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
  previewType: "gostar" | "kana-master" | "anime-sentry" | "custom"
  customImage?: string
}

// Compatibility alias
export type projectItems = ProjectItem