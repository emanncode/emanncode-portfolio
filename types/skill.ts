export type SkillCardVariant = "solid" | "outline"

export interface SkillCardItem {
  id: string
  title: string
  technologies: string
  variant: SkillCardVariant
  className?: string
  textClassName?: string
}

export interface SkillCardProps {
  title: string
  technologies: string
  variant?: SkillCardVariant
  className?: string
  textClassName?: string
}

