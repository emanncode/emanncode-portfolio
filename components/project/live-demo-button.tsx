"use client"

import { useRef } from "react"
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/ui/arrow-right"
import { cn } from "@/lib/utils"

interface LiveDemoButtonProps {
  href?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LiveDemoButton({
  href = "#",
  className,
  size = "md",
}: LiveDemoButtonProps) {
  const arrowRef = useRef<ArrowRightIconHandle>(null)

  const sizeClasses = {
    sm: "size-9 sm:size-10",
    md: "size-11 sm:size-12",
    lg: "size-13 sm:size-14",
  }

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View live project"
      className={cn(
        "group relative z-20 flex items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95",
        sizeClasses[size],
        className
      )}
      onMouseEnter={() => arrowRef.current?.startAnimation()}
      onMouseLeave={() => arrowRef.current?.stopAnimation()}
    >
      <ArrowRightIcon
        ref={arrowRef}
        size={iconSizes[size]}
        className="-rotate-45 text-background transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}
