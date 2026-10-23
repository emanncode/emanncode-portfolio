"use client"

import { useRef } from "react"
import {
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from "@/components/ui/arrow-right"
import { cn } from "@/lib/utils"

interface ProjectsButtonProps {
  variant?: "tablet" | "desktop"
  href?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function ProjectsButton({
  variant = "desktop",
  href = "#projects",
  className,
  onClick,
}: ProjectsButtonProps) {
  const arrowRef = useRef<ArrowRightIconHandle>(null)

  const isTablet = variant === "tablet"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return

    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace(/^#/, "")
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        window.history.pushState(null, "", href)
      }
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
      className={cn(
        "group inline-flex items-center transition-transform duration-300",
        className
      )}
    >
      <span
        className={cn(
          "rounded-full bg-foreground font-sans tracking-widest text-background italic select-none",
          isTablet
            ? "px-4 py-2 text-xs sm:text-sm"
            : "px-8 py-2.5 text-base xl:px-14 xl:py-3.5 xl:text-xl 2xl:px-18 2xl:py-4.5 2xl:text-2xl"
        )}
      >
        Projects
      </span>
      <div
        className={cn(
          "-ml-1 flex items-center justify-center rounded-full bg-foreground font-sans text-background italic",
          isTablet ? "p-2" : "p-2.5 xl:p-3.5 2xl:p-4.5"
        )}
      >
        <ArrowRightIcon
          ref={arrowRef}
          size={isTablet ? 16 : 20}
          className="rotate-90"
        />
      </div>
    </a>
  )
}
