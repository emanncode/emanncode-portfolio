"use client"

import { cn } from "@/lib/utils"

interface ArticlePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function ArticlePagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: ArticlePaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div
      role="navigation"
      aria-label="Article pagination"
      className={cn("flex lg:flex-col items-center gap-3", className)}
    >
      {pages.map((page) => {
        const isActive = page === currentPage
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Go to article page ${page}`}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "size-8 sm:size-9 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none",
              isActive
                ? "bg-foreground text-background shadow-md scale-105"
                : "border border-border/60 bg-card/20 text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:scale-105 active:scale-95"
            )}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default ArticlePagination
