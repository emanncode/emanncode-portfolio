"use client"

import { useRef } from "react"
import { GithubIcon, type GithubIconHandle } from "@/components/ui/github"
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/ui/arrow-right"
import { cn } from "@/lib/utils"

interface GithubPillProps {
  href?: string
  className?: string
}

export function GithubPill({
  href = "https://github.com/emanncode",
  className,
}: GithubPillProps) {
  const githubRef = useRef<GithubIconHandle>(null)
  const arrowRef = useRef<ArrowRightIconHandle>(null)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex -space-x-4 sm:-space-x-5 self-center sm:self-auto shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 py-2",
        className
      )}
      onMouseEnter={() => {
        githubRef.current?.startAnimation()
        arrowRef.current?.startAnimation()
      }}
      onMouseLeave={() => {
        githubRef.current?.stopAnimation()
        arrowRef.current?.stopAnimation()
      }}
    >
      <div className="rounded-full border border-muted-foreground/50 bg-card/60 p-3.5 sm:p-4 backdrop-blur-sm shadow-md">
        <GithubIcon ref={githubRef} size={24} className="sm:size-7 text-foreground" />
      </div>
      <div className="rounded-full bg-foreground p-3.5 sm:p-4 text-background shadow-md">
        <ArrowRightIcon ref={arrowRef} size={24} className="sm:size-7 -rotate-45" />
      </div>
    </a>
  )
}
