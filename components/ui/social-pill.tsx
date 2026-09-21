"use client"

import { forwardRef, useImperativeHandle, useRef } from "react"
import { cn } from "@/lib/utils"
import type { IconHandle, SocialPillProps } from "@/types/social"

const mobileScatteredClasses = [
  "-translate-y-2 rotate-[-4deg]",
  "translate-y-1 rotate-[3deg]",
  "-translate-y-1 rotate-[-2deg]",
  "translate-y-2 rotate-[4deg]",
  "-translate-y-1.5 rotate-[-3deg]",
  "translate-y-1 rotate-[2deg]",
]

export const SocialPill = forwardRef<IconHandle, SocialPillProps>(
  ({ link, label, Icon, index, variant = "hero", className }, ref) => {
    const localRef = useRef<IconHandle>(null)

    useImperativeHandle(ref, () => ({
      startAnimation: () => localRef.current?.startAnimation(),
      stopAnimation: () => localRef.current?.stopAnimation(),
    }))

    const isHero = variant === "hero"

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => localRef.current?.startAnimation()}
        onMouseLeave={() => localRef.current?.stopAnimation()}
        className={cn(
          "flex items-center justify-center rounded-full border border-muted-foreground/40 transition-all duration-300",
          "text-muted-foreground hover:border-foreground hover:text-foreground hover:scale-105 active:scale-95",
          isHero
            ? [
                // Mobile: scattered circular icon pills; Tablet/Desktop: compact to large editorial pill
                "h-12 w-12 sm:h-auto sm:w-auto p-2.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 xl:px-9 xl:py-4",
                "sm:transform-none",
                mobileScatteredClasses[index % mobileScatteredClasses.length],
              ]
            : [
                // Footer: aligned normally on mobile and all screens, not scattered
                "w-full sm:w-auto p-2.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 xl:px-9 xl:py-4",
              ],
          className
        )}
      >
        <Icon
          ref={localRef}
          size={20}
          className="text-foreground shrink-0 sm:size-5 lg:size-6 xl:size-7"
        />
        <span
          className={cn(
            "font-sans text-xs italic tracking-wider sm:text-sm lg:text-base xl:text-xl ml-2",
            isHero ? "hidden sm:inline-block" : "inline-block"
          )}
        >
          {label}
        </span>
      </a>
    )
  }
)
SocialPill.displayName = "SocialPill"

