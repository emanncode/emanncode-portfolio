"use client"

import { useRef } from "react"
import { CloudDownloadIcon, type CloudDownloadIconHandle } from "@/components/ui/cloud-download"
import { cn } from "@/lib/utils"

interface ResumeButtonProps {
  href?: string
  variant?: "desktop" | "mobile"
  className?: string
}

export function ResumeButton({
  href = "",
  variant = "desktop",
  className,
}: ResumeButtonProps) {
  const iconRef = useRef<CloudDownloadIconHandle>(null)

  const isMobile = variant === "mobile"

  return (
    <a
      href={href}
      className={cn(isMobile ? "inline-block w-full" : "inline-flex", className)}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <button
        type="button"
        className={cn(
          "flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-foreground bg-foreground text-background transition-all duration-300",
          isMobile
            ? "w-full py-2.5 text-[16px] active:scale-95"
            : "px-3 py-1.5 text-base hover:scale-105 sm:px-4 sm:py-2 lg:gap-3 lg:text-xl"
        )}
      >
        <CloudDownloadIcon
          ref={iconRef}
          size={18}
          className={cn(!isMobile && "sm:size-5")}
        />
        <span>Resume</span>
      </button>
    </a>
  )
}
