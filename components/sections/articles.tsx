"use client"

import { useState } from "react"
import { articles } from "@/constants/articles"
import { ArticleCard } from "@/components/articles/article-card"
import { ArticlePagination } from "@/components/articles/article-pagination"

export default function Articles() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = 3

  const currentArticles = articles.filter(
    (article) => article.page === currentPage
  )

  return (
    <section
      id="articles"
      className="relative pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <span className="pointer-events-none absolute -right-32 -top-20 size-96 sm:size-140 lg:size-180 aspect-square rounded-full border border-muted-foreground/15 opacity-30 z-0" />
      <span className="pointer-events-none absolute -left-40 bottom-10 size-80 sm:size-120 lg:size-160 aspect-square rounded-full border border-muted-foreground/15 opacity-25 z-0" />

      <div className="relative z-10 flex flex-col px-[8%]">
        {/* Outer Editorial Container Card from reference design */}
        <div className="relative w-full rounded-3xl sm:rounded-4xl border border-border/30 bg-card/10 p-6 sm:p-10 lg:p-12 backdrop-blur-xs">
          {/* Header: Pure Articles heading in font-heading right-aligned matching reference */}
          <div className="flex justify-end pb-6 sm:pb-8 border-b border-border/20">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground select-none">
              Articles
            </h2>
          </div>

          {/* Body: Left Vertical Pagination (Desktop) + Cards Grid + Bottom Horizontal Pagination (Mobile) */}
          <div className="pt-8 sm:pt-10 flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
            {/* Desktop Left-Hand Vertical Pagination */}
            <div className="hidden lg:block shrink-0 pt-2">
              <ArticlePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* Cards Grid: 2x2 on desktop (4 cards), single column on mobile (3 cards matching Picture 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1 w-full">
              {currentArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  className={index === 3 ? "hidden lg:flex" : "flex"}
                />
              ))}
            </div>
          </div>

          {/* Mobile Bottom Horizontal Pagination matching Picture 1 (1 2 →) */}
          <div className="flex lg:hidden justify-end pt-6">
            <ArticlePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
