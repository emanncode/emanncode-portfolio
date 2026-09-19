export interface TechStackItem {
  name: string
  icon: string
  color: string
  blurb: string
  darkInvert?: boolean
}

export type StackCardVariant = "link" | "resume"

export interface StackCardProps {
  item: TechStackItem
  variant: StackCardVariant
}

export interface MarqueeRowProps {
  items: TechStackItem[]
  direction?: "left" | "right"
  speed?: number
  startVariant?: StackCardVariant
}

export interface TechStackMarqueeProps {
  className?: string
}

