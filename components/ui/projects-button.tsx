"use client"

import { useRef } from "react"
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/ui/arrow-right"
import { cn } from "@/lib/utils"

interface ProjectsButtonProps {
  variant?: "tablet" | "desktop"
  href?: string
  className?: string
}

export function ProjectsButton({
  variant = "desktop",
  href = "#projects",
  className,
}: ProjectsButtonProps) {
  const arrowRef = useRef<ArrowRightIconHandle>(null)

  const isTablet = variant === "tablet"

  return (
    <a
      href={href}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
      className={cn(
        "inline-flex items-center group transition-transform duration-300 hover:scale-105 active:scale-95",
        className
      )}
    >
      <span
        className={cn(
          "rounded-full bg-foreground font-sans text-background italic tracking-widest select-none",
          isTablet
            ? "px-4 py-2 text-xs sm:text-sm"
            : "px-8 py-2.5 xl:px-14 xl:py-3.5 2xl:px-18 2xl:py-4.5 text-base xl:text-xl 2xl:text-2xl"
        )}
      >
        Projects
      </span>
      <div
        className={cn(
          "rounded-full bg-foreground font-sans text-background italic -ml-1 flex items-center justify-center",
          isTablet
            ? "p-2"
            : "p-2.5 xl:p-3.5 2xl:p-4.5"
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

