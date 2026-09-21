"use client"

import { useState } from "react"
import type { ArticleItem } from "@/types/article"
import { ArrowRightIcon } from "@/components/ui/arrow-right"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
  article: ArticleItem
  className?: string
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  const [showNotice, setShowNotice] = useState(false)

  const handleCardClick = () => {
    setShowNotice(true)
    setTimeout(() => setShowNotice(false), 2500)
  }

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border/40 bg-card/40 p-6 sm:p-8 backdrop-blur-xs transition-all duration-300 hover:border-foreground/30 hover:bg-card/70 hover:shadow-xl cursor-pointer min-h-[240px] sm:min-h-[260px]",
        className
      )}
    >
      {/* Upper Content */}
      <div className="space-y-3">
        {/* Title in monospace matching reference */}
        <h3 className="font-mono text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {article.description}
        </p>
      </div>

      {/* Bottom Action Row matching reference design */}
      <div className="pt-6 mt-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Pill button */}
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-background transition-all duration-300 group-hover:bg-foreground/90 select-none shadow-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span>{article.statusText || "Coming soon"}</span>
            </div>

            {/* Circular companion button */}
            <div className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-0.5 select-none shadow-sm">
              <ArrowRightIcon size={16} className="text-background opacity-90" />
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <span className="hidden sm:inline-block font-mono text-[11px] text-muted-foreground/80">
              {article.tags[0]}
            </span>
          )}
        </div>

        {/* Temporary toast notification when user clicks */}
        {showNotice && (
          <div className="absolute inset-x-4 bottom-4 rounded-xl bg-card border border-border/80 px-3 py-2 text-center text-xs font-mono text-foreground shadow-lg animate-in fade-in zoom-in-95 duration-200 z-30">
            ⏳ Not available yet — writing in progress. Coming soon!
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleCard
