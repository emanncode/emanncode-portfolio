"use client"

import Image from "next/image"
import { LiveDemoButton } from "../live-demo-button"

interface SoldbayPreviewProps {
  prodLink?: string
}

export function SoldbayPreview({ prodLink = "https://soldbay.shop" }: SoldbayPreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Showcase Canvas */}
      <div className="relative rounded-3xl border border-border/50 bg-[#0e1320] p-3 sm:p-5 shadow-2xl overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-indigo-600/10 blur-3xl" />

        {/* Browser Top Bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 px-1">
          <div className="flex items-center gap-1.5">
            <span className="size-2 sm:size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2 sm:size-2.5 rounded-full bg-amber-500/70" />
            <span className="size-2 sm:size-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-[10px] sm:text-xs font-mono text-muted-foreground/70 tracking-wider truncate max-w-[180px] sm:max-w-none">
              https://soldbay.shop
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-emerald-400/90 flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE MARKETPLACE
          </span>
        </div>

        {/* Real Project Image inside frame */}
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-950 group">
          <Image
            src="/soldbay.png"
            alt="Soldbay Campus Marketplace"
            width={893}
            height={1059}
            className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />

          {/* Bottom gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0e1320] via-[#0e1320]/40 to-transparent" />

          {/* Floating Live Demo Button on Image */}
          <div className="absolute bottom-4 right-4 z-20">
            <LiveDemoButton href={prodLink} size="md" />
          </div>
        </div>
      </div>

      {/* Floating Badge below */}
      <div className="absolute -bottom-6 right-8 sm:right-16 z-20 size-16 sm:size-20 rounded-2xl border border-white/20 bg-gradient-to-tr from-[#162038] via-[#202b48] to-[#12192c] shadow-2xl p-2 flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.3),transparent_70%)]" />
        <span className="text-xl sm:text-2xl select-none">🛍️</span>
        <span className="mt-0.5 text-[8px] sm:text-[9px] font-mono text-slate-300 tracking-wider font-semibold">
          SOLDBAY
        </span>
      </div>
    </div>
  )
}
