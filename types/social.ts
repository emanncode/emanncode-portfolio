import type { ComponentType, Ref } from "react"

export interface IconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

export interface SocialLinkItem {
  link: string
  label: string
  Icon: ComponentType<{
    ref?: Ref<IconHandle>
    size?: number
    className?: string
  }>
}

export interface SocialPillProps extends SocialLinkItem {
  index: number
  variant?: "hero" | "footer"
  className?: string
}

