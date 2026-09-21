export type ArticleStatus = "coming-soon" | "draft" | "planned"

export interface ArticleItem {
  id: string
  title: string
  description: string
  status: ArticleStatus
  statusText?: string
  tags?: string[]
  page: number
}
