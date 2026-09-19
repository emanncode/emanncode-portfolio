"use client"

import { cn } from "@/lib/utils"
import { STACK } from "@/constants/tech-stack"
import { MarqueeRow } from "@/components/tech-stack/marquee-row"
import type { TechStackMarqueeProps } from "@/types/tech-stack"

export default function TechStackMarquee({ className }: TechStackMarqueeProps) {
  const half = Math.ceil(STACK.length / 2)
  const rowA = STACK.slice(0, half)
  const rowB = STACK.slice(half)

  return (
    <section className={cn("relative w-full bg-background pt-2 pb-6 select-none", className)}>
      {/* Full protective overlay covering the whole marquee container */}
      <div className="absolute inset-0 z-30 pointer-events-auto cursor-default select-none" />

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>

      <div className="space-y-4 pointer-events-none select-none">
        <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow items={rowA} direction="left" speed={34} startVariant="link" />
        </div>
        <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow items={rowB} direction="right" speed={30} startVariant="resume" />
        </div>
      </div>
    </section>
  )
}