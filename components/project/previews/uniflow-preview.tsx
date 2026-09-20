"use client"

import Image from "next/image"
import { LiveDemoButton } from "../live-demo-button"

interface UniflowPreviewProps {
  prodLink?: string
  image?: string
}

export function UniflowPreview({
  prodLink = "https://uniflowapp.xyz",
  image = "/uniflow.png",
}: UniflowPreviewProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Editorial Canvas */}
      <div className="relative rounded-3xl border border-[#d6cec3] dark:border-[#3e362f] bg-gradient-to-br from-[#f2ece4] via-[#ebe3d7] to-[#ded5c5] dark:from-[#2a241f] dark:via-[#221d19] dark:to-[#1a1613] p-3 sm:p-5 shadow-2xl overflow-hidden">
        {/* Decorative Watermark */}
        <div className="pointer-events-none absolute -right-6 -bottom-8 select-none text-[120px] sm:text-[160px] font-serif font-black text-[#3d332a]/5 dark:text-white/5 leading-none">
          UNI
        </div>

        {/* Browser Top Bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 px-1">
          <div className="flex items-center gap-1.5">
            <span className="size-2 sm:size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2 sm:size-2.5 rounded-full bg-amber-500/70" />
            <span className="size-2 sm:size-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-[10px] sm:text-xs font-mono text-stone-600 dark:text-stone-300 tracking-wider truncate max-w-[180px] sm:max-w-none">
              https://uniflowapp.xyz
            </span>
          </div>
          <span className="inline-block rounded-full bg-[#3d332a] dark:bg-stone-200 text-stone-100 dark:text-stone-900 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-medium tracking-widest shadow-sm">
            EDTECH PLATFORM
          </span>
        </div>

        {/* Real Project Image inside frame */}
        <div className="relative z-10 rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-700 shadow-2xl bg-stone-950 group">
          <Image
            src={image}
            alt="Uniflow Academic Coordination"
            width={893}
            height={1024}
            className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />

          {/* Bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1a1613] via-[#1a1613]/40 to-transparent" />

          {/* Floating Live Demo Button */}
          <div className="absolute bottom-4 right-4 z-20">
            <LiveDemoButton href={prodLink} size="md" />
          </div>
        </div>
      </div>

      {/* Floating Badge below */}
      <div className="absolute -bottom-6 left-8 sm:left-16 z-20 size-16 sm:size-20 rounded-2xl border border-stone-400/30 dark:border-white/20 bg-gradient-to-tr from-[#ebe3d7] via-[#f7f2ea] to-[#ded5c5] dark:from-[#2a241f] dark:via-[#352d27] dark:to-[#1a1613] shadow-2xl p-2 flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 hover:scale-105">
        <span className="text-xl sm:text-2xl select-none">🎓</span>
        <span className="mt-0.5 text-[8px] sm:text-[9px] font-mono text-stone-800 dark:text-slate-300 tracking-wider font-semibold">
          UNIFLOW
        </span>
      </div>
    </div>
  )
}
