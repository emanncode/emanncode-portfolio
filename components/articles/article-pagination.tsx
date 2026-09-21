"use client"

import { ArrowRight } from "lucide-react"
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
  return (
    <div
      role="navigation"
      aria-label="Article pagination"
      className={cn("flex lg:flex-col items-center gap-2.5 sm:gap-3", className)}
    >
      {/* Page 1 */}
      <button
        type="button"
        onClick={() => onPageChange(1)}
        aria-label="Go to article page 1"
        aria-current={currentPage === 1 ? "page" : undefined}
        className={cn(
          "size-8 sm:size-9 rounded-full flex items-center justify-center font-sans text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none",
          currentPage === 1
            ? "bg-foreground text-background shadow-md scale-105"
            : "border border-border/60 bg-card/20 text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:scale-105 active:scale-95"
        )}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        type="button"
        onClick={() => onPageChange(2)}
        aria-label="Go to article page 2"
        aria-current={currentPage === 2 ? "page" : undefined}
        className={cn(
          "size-8 sm:size-9 rounded-full flex items-center justify-center font-sans text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none",
          currentPage === 2
            ? "bg-foreground text-background shadow-md scale-105"
            : "border border-border/60 bg-card/20 text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:scale-105 active:scale-95"
        )}
      >
        2
      </button>

      {/* Page 3 on desktop, Next arrow on mobile matching Picture 1 */}
      <button
        type="button"
        onClick={() =>
          onPageChange(currentPage < totalPages ? currentPage + 1 : 1)
        }
        aria-label={
          currentPage === 3 ? "Go to article page 3" : "Next article page"
        }
        aria-current={currentPage === 3 ? "page" : undefined}
        className={cn(
          "size-8 sm:size-9 rounded-full flex items-center justify-center font-sans text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none",
          currentPage === 3
            ? "bg-foreground text-background shadow-md scale-105"
            : "border border-border/60 bg-card/20 text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:scale-105 active:scale-95"
        )}
      >
        <span className="hidden lg:inline">3</span>
        <ArrowRight size={14} className="inline lg:hidden text-foreground" />
      </button>
    </div>
  )
}

export default ArticlePagination
