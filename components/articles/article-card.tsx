"use client"

import { useState } from "react"
import type { ArticleItem } from "@/types/article"
import { ArrowRight, Clock } from "lucide-react"
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
        "group relative flex flex-col justify-between rounded-3xl border border-border/40 bg-card/40 p-6 sm:p-8 backdrop-blur-xs transition-all duration-300 hover:border-foreground/30 hover:bg-card/70 hover:shadow-xl cursor-pointer min-h-[220px] sm:min-h-[240px]",
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

      {/* Bottom Action Row matching reference design exactly */}
      <div className="pt-6 mt-auto">
        <div className="flex items-center gap-2">
          {/* Pill button: white pill matching reference */}
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 sm:px-6 py-2 text-xs sm:text-sm font-mono font-medium text-background transition-all duration-300 group-hover:bg-foreground/90 select-none shadow-sm">
            <span>{article.statusText || "Coming soon"}</span>
          </div>

          {/* Circular companion button with standard Lucide ArrowRight */}
          <div className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-0.5 select-none shadow-sm">
            <ArrowRight
              size={16}
              className="text-background opacity-90 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </div>
        </div>

        {/* Temporary notification when user clicks */}
        {showNotice && (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-xl bg-card border border-border/80 px-3 py-2 text-center text-xs font-mono text-foreground shadow-lg animate-in fade-in zoom-in-95 duration-200 z-30">
            <Clock size={13} className="text-muted-foreground shrink-0" />
            <span>Not available yet — writing in progress. Coming soon!</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleCard
