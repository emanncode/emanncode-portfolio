"use client"

import { LiveDemoButton } from "../live-demo-button"

interface KanaMasterPreviewProps {
  prodLink?: string
}

export function KanaMasterPreview({ prodLink = "#" }: KanaMasterPreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Organic Parchment Canvas */}
      <div className="relative rounded-3xl border border-[#d6cec3] dark:border-[#3e362f] bg-gradient-to-br from-[#f2ece4] via-[#ebe3d7] to-[#ded5c5] dark:from-[#2a241f] dark:via-[#221d19] dark:to-[#1a1613] p-3 sm:p-6 shadow-2xl overflow-hidden">
        {/* Decorative Japanese Watermark / Kanji */}
        <div className="pointer-events-none absolute -right-6 -bottom-8 select-none text-[120px] sm:text-[160px] font-serif font-black text-[#3d332a]/5 dark:text-white/5 leading-none">
          学
        </div>

        {/* Top bar with artwork and live demo pill */}
        <div className="relative z-10 flex items-start justify-between pb-3">
          {/* Japanese Art Thumbnail with Live Demo Button */}
          <div className="relative group">
            <div className="size-16 sm:size-20 rounded-2xl border border-[#c8beb0] dark:border-stone-700 bg-[#fbf8f3] dark:bg-stone-800 p-2 shadow-md flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <span className="text-2xl sm:text-3xl select-none">🐱</span>
              <span className="text-[9px] font-mono font-bold text-stone-700 dark:text-stone-300 mt-1">
                かな
              </span>
            </div>
            {/* Live Demo floating button */}
            <div className="absolute -bottom-3 -right-3">
              <LiveDemoButton href={prodLink} size="sm" />
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block rounded-full bg-[#3d332a] dark:bg-stone-200 text-stone-100 dark:text-stone-900 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest shadow-sm">
              iOS 18 // SWIFT
            </span>
          </div>
        </div>

        {/* Center: Dual Mobile Screens (Light & Dark) */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-5 max-w-md mx-auto pt-2">
          {/* Screen 1: Learning (Light Theme) */}
          <div className="rounded-2xl sm:rounded-3xl border-2 border-stone-400/40 bg-white text-stone-900 p-3 sm:p-4 shadow-xl flex flex-col justify-between">
            {/* Dynamic Island */}
            <div className="mx-auto h-2.5 sm:h-3.5 w-14 sm:w-20 rounded-full bg-stone-900 mb-2 sm:mb-3" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold tracking-tight">Learning</span>
                <span className="text-[10px] font-mono text-stone-400">09:41</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-stone-500 font-medium">
                Chapter 1: Basic
              </p>

              {/* Progress ring card */}
              <div className="mt-2.5 rounded-xl bg-stone-50 p-2 border border-stone-200/70">
                <div className="flex items-center gap-2">
                  <div className="relative size-8 sm:size-10 rounded-full border-2 border-emerald-500 flex items-center justify-center font-mono text-[9px] sm:text-[11px] font-bold text-emerald-600">
                    95%
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[11px] font-semibold truncate">Hiragana Vowels</p>
                    <p className="text-[8px] sm:text-[9px] text-stone-400">15/15 mastered</p>
                  </div>
                </div>
              </div>

              {/* Next step */}
              <div className="mt-2 rounded-xl bg-stone-50 p-2 border border-stone-200/70">
                <p className="text-[9px] sm:text-[11px] font-semibold">K-Group: か き く け こ</p>
                <p className="text-[8px] sm:text-[9px] text-stone-400">In progress (21%)</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-stone-900 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-sm hover:bg-stone-800 transition-colors"
            >
              Continue
            </button>
          </div>

          {/* Screen 2: Practice & Drawing (Dark Theme) */}
          <div className="rounded-2xl sm:rounded-3xl border-2 border-stone-700/60 bg-[#161412] text-stone-100 p-3 sm:p-4 shadow-xl flex flex-col justify-between">
            {/* Dynamic Island */}
            <div className="mx-auto h-2.5 sm:h-3.5 w-14 sm:w-20 rounded-full bg-stone-800 mb-2 sm:mb-3" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-stone-100">Practice</span>
                <span className="text-[10px] font-mono text-stone-500">09:41</span>
              </div>

              {/* Flashcard with stroke guide */}
              <div className="mt-2.5 rounded-xl bg-[#231f1c] p-2.5 border border-stone-800 text-center relative overflow-hidden">
                <span className="text-3xl sm:text-4xl font-serif font-black text-amber-100/90 block py-1">
                  あ
                </span>
                <span className="text-[9px] font-mono text-stone-400">/a/ • 3 strokes</span>
              </div>

              {/* Multiple choice grid */}
              <div className="mt-2 grid grid-cols-2 gap-1 sm:gap-1.5">
                {["a", "i", "u", "e"].map((c, i) => (
                  <div
                    key={c}
                    className={`rounded-lg py-1 text-center font-mono text-[10px] sm:text-xs font-bold transition-colors ${
                      i === 0
                        ? "bg-amber-600/30 text-amber-300 border border-amber-500/50"
                        : "bg-[#231f1c] text-stone-300 border border-stone-800"
                    }`}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[9px] text-stone-400 font-mono pt-1 border-t border-stone-800">
              <span>AUDIO: ON</span>
              <span className="text-emerald-400">STREAK: 14🔥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
