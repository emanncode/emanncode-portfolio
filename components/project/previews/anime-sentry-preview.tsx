"use client"

import { LiveDemoButton } from "../live-demo-button"

interface AnimeSentryPreviewProps {
  prodLink?: string
}

export function AnimeSentryPreview({ prodLink = "#" }: AnimeSentryPreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Container Collage */}
      <div className="relative rounded-3xl border border-border/50 bg-[#0c121e] p-3 sm:p-5 shadow-2xl overflow-hidden">
        {/* Sky / Anime aesthetic background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-cyan-600/10 blur-3xl" />

        {/* Top bar with status */}
        <div className="relative z-10 flex items-center justify-between pb-3 px-1">
          <span className="text-[10px] sm:text-xs font-mono text-cyan-300/90 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            CRON DISPATCHER // 30M INTERVAL
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
            POLLING: 14 TRACKERS
          </span>
        </div>

        {/* Collage Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-2.5 sm:gap-4 items-center">
          {/* Left Column: Two stacked cards */}
          <div className="col-span-4 sm:col-span-3 flex flex-col gap-3">
            {/* Top thumbnail with floating live button */}
            <div className="relative group">
              <div className="h-20 sm:h-24 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-900/60 via-indigo-950/70 to-slate-900 p-2 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <span className="text-2xl sm:text-3xl select-none">⚡</span>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-sky-200 mt-1">
                  BOT ALERT
                </span>
              </div>
              <div className="absolute -bottom-2.5 -right-2.5">
                <LiveDemoButton href={prodLink} size="sm" />
              </div>
            </div>

            {/* Bottom character artwork card */}
            <div className="h-32 sm:h-40 rounded-2xl border border-white/10 bg-gradient-to-t from-slate-950 via-sky-950 to-blue-900/60 p-2.5 shadow-lg flex flex-col justify-end relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3),transparent_60%)]" />
              <span className="text-3xl sm:text-4xl select-none block mb-1">🌊</span>
              <p className="text-[9px] sm:text-[10px] font-mono font-bold text-sky-200">
                Aoi • Heroine
              </p>
              <p className="text-[8px] text-slate-400 font-mono">Episode 12 Sub</p>
            </div>
          </div>

          {/* Center Column: Mobile Bot Chat View */}
          <div className="col-span-8 sm:col-span-6 rounded-2xl sm:rounded-3xl border-2 border-sky-500/30 bg-[#111927] p-3 sm:p-4 shadow-2xl flex flex-col justify-between">
            {/* Mobile Telegram-style header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="size-6 sm:size-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  🤖
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    Anime Sentry Bot
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-sky-400 font-mono">bot • online</p>
                </div>
              </div>
              <span className="text-[9px] font-mono text-slate-400">17:34</span>
            </div>

            {/* Chat Notification Bubbles */}
            <div className="py-2.5 space-y-2">
              <div className="rounded-xl bg-sky-950/60 border border-sky-500/30 p-2 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[8px] font-mono font-bold">
                    NEW RELEASE
                  </span>
                  <span className="text-[8px] text-slate-400 font-mono">Just now</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-white">
                  Solo Leveling — Episode 12
                </p>
                <p className="text-[8px] sm:text-[9px] text-slate-300 mt-0.5">
                  English Subs available. Official stream verified.
                </p>
                <div className="mt-2 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-sky-600 text-white text-[8px] font-mono font-medium">
                    Watch Now ↗
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-300 text-[8px] font-mono">
                    Mute Series
                  </span>
                </div>
              </div>

              {/* Status pill */}
              <div className="text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 text-[8px] font-mono text-slate-400 border border-white/5">
                  Next schedule sweep in 14m 28s
                </span>
              </div>
            </div>

            {/* Footer Input mockup */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400 font-mono">
              <span>/track &lt;anime-title&gt;</span>
              <span className="size-4 rounded-full bg-sky-500/30 text-sky-300 flex items-center justify-center font-bold">
                ↵
              </span>
            </div>
          </div>

          {/* Right Column: Tall Anime Character Banner */}
          <div className="hidden sm:flex sm:col-span-3 h-full min-h-[220px] rounded-2xl border border-white/10 bg-gradient-to-b from-blue-900/60 via-indigo-950 to-slate-950 p-3 flex-col justify-between relative overflow-hidden shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.3),transparent_70%)]" />
            <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-sky-300">
              <span>FEATURED</span>
              <span className="size-1.5 rounded-full bg-sky-400" />
            </div>
            <div className="relative z-10 my-auto text-center">
              <span className="text-4xl sm:text-5xl select-none block">🧑‍🎤</span>
              <p className="mt-1 text-[10px] font-bold text-white font-mono">Jinwoo</p>
              <p className="text-[8px] text-sky-400 font-mono">Rank: S-Tier</p>
            </div>
            <div className="relative z-10 text-[8px] font-mono text-slate-400 text-center">
              <span>gocron // scrapers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
