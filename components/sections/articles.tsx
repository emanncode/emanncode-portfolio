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
      className="relative min-h-screen pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <span className="pointer-events-none absolute -right-32 -top-20 size-96 sm:size-140 lg:size-180 aspect-square rounded-full border border-muted-foreground/15 opacity-30 z-0" />
      <span className="pointer-events-none absolute -left-40 bottom-10 size-80 sm:size-120 lg:size-160 aspect-square rounded-full border border-muted-foreground/15 opacity-25 z-0" />

      <div className="relative z-10 flex flex-col px-[8%]">
        {/* Enclosing Outer Editorial Card from reference design */}
        <div className="relative w-full rounded-3xl sm:rounded-4xl border border-border/30 bg-card/10 p-6 sm:p-10 lg:p-12 backdrop-blur-xs">
          {/* Section Header: Large Articles title matching reference */}
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 pb-8 sm:pb-12 border-b border-border/20">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground select-none">
                ... /Writing & Thoughts ...
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans">
                Upcoming deep-dives into systems engineering, offline-first mobile apps, and distributed backends.
              </p>
            </div>
            <h2 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground sm:text-right select-none">
              Articles
            </h2>
          </div>

          {/* Body: Left Pagination + 2x2 Cards Grid */}
          <div className="pt-8 sm:pt-10 flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
            {/* Pagination Controls */}
            <div className="shrink-0 w-full lg:w-auto flex justify-center lg:block pt-1">
              <ArticlePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* 2x2 Article Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1 w-full">
              {currentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

