"use client"

import { LiveDemoButton } from "../live-demo-button"

interface IfesquarePreviewProps {
  prodLink?: string
}

export function IfesquarePreview({ prodLink = "https://ifesquare.uniflowapp.xyz" }: IfesquarePreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Container Collage */}
      <div className="relative rounded-3xl border border-border/50 bg-[#0c121e] p-3 sm:p-5 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-emerald-600/10 blur-3xl" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 px-1">
          <span className="text-[10px] sm:text-xs font-mono text-emerald-300/90 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            GO BACKEND // OFFLINE-FIRST PWA
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
            SQLITE • AUTO-CALC
          </span>
        </div>

        {/* Collage Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-2.5 sm:gap-4 items-center">
          {/* Left Column: Stacked Ledger Widgets */}
          <div className="col-span-4 sm:col-span-3 flex flex-col gap-3">
            {/* Top Widget with Live Button */}
            <div className="relative group">
              <div className="h-20 sm:h-24 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-stone-950 p-2 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <span className="text-2xl sm:text-3xl select-none">🧾</span>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-emerald-200 mt-1">
                  DAILY LEDGER
                </span>
              </div>
              <div className="absolute -bottom-2.5 -right-2.5">
                <LiveDemoButton href={prodLink} size="sm" />
              </div>
            </div>

            {/* Bottom Stock Alert Card */}
            <div className="h-32 sm:h-40 rounded-2xl border border-white/10 bg-gradient-to-t from-stone-950 via-emerald-950/40 to-slate-900 p-2.5 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-[8px] font-mono text-emerald-400">
                <span>INVENTORY</span>
                <span className="size-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-1 my-auto">
                <div className="p-1 rounded bg-black/40 border border-white/5 text-[8px] font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span className="truncate">Oil 5L</span>
                    <span className="text-amber-300">4 left</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full mt-0.5 overflow-hidden">
                    <div className="h-full bg-amber-400 w-1/4" />
                  </div>
                </div>
                <div className="p-1 rounded bg-black/40 border border-white/5 text-[8px] font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span className="truncate">Rice 50kg</span>
                    <span className="text-emerald-400">18 in stock</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full mt-0.5 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-3/4" />
                  </div>
                </div>
              </div>
              <p className="text-[7px] text-slate-400 font-mono text-center">
                Auto Deduction Active
              </p>
            </div>
          </div>

          {/* Center Column: Mobile POS Sales Terminal */}
          <div className="col-span-8 sm:col-span-6 rounded-2xl sm:rounded-3xl border-2 border-emerald-500/30 bg-[#111927] p-3 sm:p-4 shadow-2xl flex flex-col justify-between">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="size-6 sm:size-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  🏪
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    Ifesquare Terminal
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-emerald-400 font-mono">Store #01 • Online</p>
                </div>
              </div>
              <span className="text-[9px] font-mono text-slate-400">04:15 PM</span>
            </div>

            {/* Sales Calculator Body */}
            <div className="py-2.5 space-y-2">
              <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-2.5 text-left">
                <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 mb-1">
                  <span>TRANS #1042</span>
                  <span className="text-emerald-400">PAID (TRANSFER)</span>
                </div>
                <div className="space-y-1 text-[9px] sm:text-[10px] text-slate-200">
                  <div className="flex justify-between">
                    <span>2x Sugar Packets</span>
                    <span className="font-mono font-bold">₦2,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1x Golden Penny Flour</span>
                    <span className="font-mono font-bold">₦12,500</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-white/10 text-white font-bold text-[10px] sm:text-xs">
                    <span>Total Computed</span>
                    <span className="font-mono text-emerald-300">₦14,900</span>
                  </div>
                </div>
              </div>

              {/* Profit summary pill */}
              <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-[8px] sm:text-[9px] font-mono">
                <span className="text-slate-400">Daily Revenue:</span>
                <span className="font-bold text-emerald-400">₦184,200 (Margin: 22%)</span>
              </div>
            </div>

            {/* Footer Status */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[8px] text-slate-400 font-mono">
              <span>SYNC: LOCAL STORAGE + GO REST</span>
              <span className="size-2 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Right Column: Daily Revenue Chart Card */}
          <div className="hidden sm:flex sm:col-span-3 h-full min-h-[220px] rounded-2xl border border-white/10 bg-gradient-to-b from-emerald-950/60 via-slate-950 to-stone-950 p-3 flex-col justify-between relative overflow-hidden shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25),transparent_70%)]" />
            <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-emerald-300">
              <span>ANALYTICS</span>
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="relative z-10 my-auto text-center">
              <span className="text-3xl sm:text-4xl select-none block">📈</span>
              <p className="mt-1 text-[11px] font-bold text-white font-mono">₦1.4M / mo</p>
              <p className="text-[8px] text-emerald-400 font-mono">Automated Ledger</p>
            </div>
            <div className="relative z-10 text-[8px] font-mono text-slate-400 text-center">
              <span>Zero Paper Waste</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
