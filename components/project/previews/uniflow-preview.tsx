"use client"

import { LiveDemoButton } from "../live-demo-button"

interface UniflowPreviewProps {
  prodLink?: string
}

export function UniflowPreview({ prodLink = "https://uniflowapp.xyz" }: UniflowPreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Editorial Canvas */}
      <div className="relative rounded-3xl border border-[#d6cec3] dark:border-[#3e362f] bg-gradient-to-br from-[#f2ece4] via-[#ebe3d7] to-[#ded5c5] dark:from-[#2a241f] dark:via-[#221d19] dark:to-[#1a1613] p-3 sm:p-6 shadow-2xl overflow-hidden">
        {/* Decorative Academic Watermark */}
        <div className="pointer-events-none absolute -right-6 -bottom-8 select-none text-[120px] sm:text-[160px] font-serif font-black text-[#3d332a]/5 dark:text-white/5 leading-none">
          UNI
        </div>

        {/* Top bar */}
        <div className="relative z-10 flex items-start justify-between pb-3">
          <div className="relative group">
            <div className="size-16 sm:size-20 rounded-2xl border border-[#c8beb0] dark:border-stone-700 bg-[#fbf8f3] dark:bg-stone-800 p-2 shadow-md flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <span className="text-2xl sm:text-3xl select-none">🎓</span>
              <span className="text-[9px] font-mono font-bold text-stone-700 dark:text-stone-300 mt-1">
                uniflow
              </span>
            </div>
            {/* Live Demo floating button */}
            <div className="absolute -bottom-3 -right-3">
              <LiveDemoButton href={prodLink} size="sm" />
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block rounded-full bg-[#3d332a] dark:bg-stone-200 text-stone-100 dark:text-stone-900 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest shadow-sm">
              REACT NATIVE + GO
            </span>
          </div>
        </div>

        {/* Center: Dual Mobile Screens (Light & Dark) */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-5 max-w-md mx-auto pt-2">
          {/* Screen 1: Academic Timetable (Light Theme) */}
          <div className="rounded-2xl sm:rounded-3xl border-2 border-stone-400/40 bg-white text-stone-900 p-3 sm:p-4 shadow-xl flex flex-col justify-between">
            <div className="mx-auto h-2.5 sm:h-3.5 w-14 sm:w-20 rounded-full bg-stone-900 mb-2 sm:mb-3" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold tracking-tight">Today&apos;s Classes</span>
                <span className="text-[10px] font-mono text-stone-400">09:41</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-stone-500 font-medium">
                Faculty of Technology
              </p>

              {/* Next lecture alert */}
              <div className="mt-2.5 rounded-xl bg-indigo-50 p-2 border border-indigo-100">
                <div className="flex items-center justify-between text-[8px] font-mono font-bold text-indigo-700 mb-1">
                  <span>IN 15 MINS</span>
                  <span>HALL B2</span>
                </div>
                <p className="text-[9px] sm:text-[11px] font-bold text-stone-900 truncate">
                  CSC 411: Distributed Systems
                </p>
                <p className="text-[8px] text-stone-500">Dr. Adeleke • Lecture & Lab</p>
              </div>

              {/* Afternoon lecture */}
              <div className="mt-2 rounded-xl bg-stone-50 p-2 border border-stone-200/70">
                <p className="text-[9px] sm:text-[11px] font-semibold text-stone-900">
                  MTH 302: Numerical Methods
                </p>
                <p className="text-[8px] text-stone-400">01:30 PM • Main Tech Theatre</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-stone-900 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-sm hover:bg-stone-800 transition-colors"
            >
              Exam Venue Locator
            </button>
          </div>

          {/* Screen 2: Attendance Verification (Dark Theme) */}
          <div className="rounded-2xl sm:rounded-3xl border-2 border-stone-700/60 bg-[#161412] text-stone-100 p-3 sm:p-4 shadow-xl flex flex-col justify-between">
            <div className="mx-auto h-2.5 sm:h-3.5 w-14 sm:w-20 rounded-full bg-stone-800 mb-2 sm:mb-3" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-stone-100">
                  Attendance
                </span>
                <span className="text-[10px] font-mono text-stone-500">09:41</span>
              </div>

              {/* Verification Card */}
              <div className="mt-2.5 rounded-xl bg-[#231f1c] p-2.5 border border-stone-800 text-center relative overflow-hidden">
                <span className="text-2xl sm:text-3xl block py-1 select-none">📱</span>
                <p className="text-[10px] sm:text-xs font-bold text-amber-200">
                  QR Verified
                </p>
                <span className="text-[8px] font-mono text-emerald-400">
                  96.4% Semester Rate 🔥
                </span>
              </div>

              {/* Recent course records */}
              <div className="mt-2 space-y-1">
                {[
                  { code: "CSC 411", stat: "Present", col: "text-emerald-400" },
                  { code: "EEG 422", stat: "Present", col: "text-emerald-400" },
                  { code: "MTH 302", stat: "Excused", col: "text-amber-400" },
                ].map((item) => (
                  <div
                    key={item.code}
                    className="flex justify-between text-[8px] sm:text-[9px] font-mono px-2 py-0.5 rounded bg-[#231f1c]"
                  >
                    <span className="text-stone-300">{item.code}</span>
                    <span className={item.col}>{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[8px] text-stone-400 font-mono pt-1 border-t border-stone-800">
              <span>SYNC: GO API</span>
              <span className="text-emerald-400">STATUS: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
