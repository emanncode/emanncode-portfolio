"use client"

import { LiveDemoButton } from "../live-demo-button"

interface SoldbayPreviewProps {
  prodLink?: string
}

export function SoldbayPreview({ prodLink = "https://soldbay.shop" }: SoldbayPreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Collage Canvas */}
      <div className="relative rounded-3xl border border-border/50 bg-[#0e1320] p-3 sm:p-5 shadow-2xl overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 px-1">
          <div className="flex items-center gap-1.5">
            <span className="size-2 sm:size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2 sm:size-2.5 rounded-full bg-amber-500/70" />
            <span className="size-2 sm:size-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-[10px] sm:text-xs font-mono text-muted-foreground/70 tracking-wider">
              soldbay.shop // marketplace-engine
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-emerald-400/90 flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE SHOP
          </span>
        </div>

        {/* Devices Collage Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-2.5 sm:gap-3.5 items-stretch">
          {/* Left Device: Mobile Buyer & Seller Storefront */}
          <div className="col-span-4 sm:col-span-3 rounded-2xl bg-[#fafafa] text-stone-900 p-2.5 sm:p-3 shadow-lg flex flex-col justify-between border border-stone-200/80 min-h-[180px] sm:min-h-[220px]">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="size-4 sm:size-5 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">
                  S
                </span>
                <span className="text-[9px] font-mono text-stone-500">11:20</span>
              </div>
              <div className="mt-2 rounded-lg bg-indigo-50 p-1.5 sm:p-2 border border-indigo-100">
                <p className="text-[8px] sm:text-[9px] uppercase font-mono text-indigo-700 font-semibold tracking-wider">
                  Campus Pickup
                </p>
                <p className="text-xs sm:text-sm font-bold text-stone-900 truncate">Station Point A</p>
              </div>
              <div className="mt-2 space-y-1 sm:space-y-1.5">
                {[
                  { name: "MacBook Air M2", price: "₦680k", col: "bg-emerald-500" },
                  { name: "Desk Lamp", price: "₦14k", col: "bg-sky-500" },
                  { name: "Textbooks (x3)", price: "₦25k", col: "bg-indigo-500" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[8px] sm:text-[9px]">
                    <span className="text-stone-600 font-medium truncate max-w-[55px] sm:max-w-[70px]">
                      {item.name}
                    </span>
                    <span className="text-stone-900 font-mono font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-stone-200">
              <span className="block text-center rounded-lg bg-indigo-600 py-1 text-[8px] sm:text-[9px] font-semibold text-white">
                Escrow Protected 🔒
              </span>
            </div>
          </div>

          {/* Center Screen: Web Orders & Fulfillment Dashboard */}
          <div className="col-span-8 sm:col-span-6 rounded-2xl bg-[#141b2c]/95 border border-white/10 p-2.5 sm:p-4 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[9px] sm:text-[10px] font-mono font-medium border border-indigo-500/30">
                    ORDERS
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-slate-300 text-[9px] sm:text-[10px] font-mono">
                    24 today
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-slate-300 text-[9px] sm:text-[10px] font-mono">
                    98% fulfilled
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-200">
                  soldbay.shop
                </span>
              </div>

              {/* Real-time Sales Curve */}
              <div className="mt-3 relative h-20 sm:h-28 w-full">
                <svg
                  viewBox="0 0 200 80"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="soldbayGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="0,65 15,50 30,55 45,35 60,45 75,25 90,40 105,20 120,30 135,15 150,28 165,18 180,32 200,10 200,80 0,80"
                    fill="url(#soldbayGlow)"
                  />
                  <polyline
                    points="0,65 15,50 30,55 45,35 60,45 75,25 90,40 105,20 120,30 135,15 150,28 165,18 180,32 200,10"
                    fill="none"
                    stroke="#a5b4fc"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="200" cy="10" r="3.5" fill="#c7d2fe" className="animate-ping" />
                  <circle cx="200" cy="10" r="3" fill="#ffffff" />
                </svg>
              </div>
            </div>

            {/* Bottom status */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[9px] sm:text-[10px] text-slate-400 font-mono">
              <span>Next.js 16 + Postgres</span>
              <span className="text-emerald-400">Escrow Cleared</span>
            </div>

            {/* Floating Live Demo Button */}
            <div className="absolute bottom-2.5 right-2.5">
              <LiveDemoButton href={prodLink} size="sm" />
            </div>
          </div>

          {/* Right Device: Logistics & Hub Dispatch Card */}
          <div className="hidden sm:flex sm:col-span-3 rounded-2xl bg-gradient-to-b from-[#18233c] via-[#101726] to-[#0a0d18] border border-white/10 p-3 flex-col justify-between relative overflow-hidden shadow-lg">
            <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,#38bdf8_0%,transparent_50%)]" />
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-sky-200">
              <span>PICKUP HUBS</span>
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="relative z-10 my-auto space-y-1.5">
              {[
                { label: "Campus Gate", val: "100%" },
                { label: "Hostel Block B", val: "85%" },
                { label: "Faculty Hub", val: "92%" },
                { label: "Library Annex", val: "78%" },
              ].map((hub) => (
                <div key={hub.label} className="text-[8px] font-mono">
                  <div className="flex justify-between text-slate-400 mb-0.5">
                    <span className="truncate">{hub.label}</span>
                    <span className="text-indigo-300">{hub.val}</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full"
                      style={{ width: hub.val }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="relative z-10 text-[9px] font-mono text-slate-400">
              <span>Expo Mobile App</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge below */}
      <div className="absolute -bottom-8 right-12 sm:right-24 z-20 size-20 sm:size-24 rounded-2xl border border-white/20 bg-gradient-to-tr from-[#162038] via-[#202b48] to-[#12192c] shadow-2xl p-2 flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.3),transparent_70%)]" />
        <span className="text-xl sm:text-2xl select-none">🛍️</span>
        <span className="mt-1 text-[8px] sm:text-[9px] font-mono text-slate-300 tracking-wider font-semibold">
          SOLDBAY
        </span>
      </div>
    </div>
  )
}
