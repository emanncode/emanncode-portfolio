"use client"

import { useEffect, useRef } from "react"
import { SocialPill } from "@/components/ui/social-pill"
import { ProjectsButton } from "@/components/ui/projects-button"
import TechStackMarquee from "@/components/tech-stack-marquee"
import { socialLinks } from "@/constants/social-links"
import type { IconHandle } from "@/types/social"

export default function Hero() {
  const iconRefs = useRef<(IconHandle | null)[]>([])

  // Consecutive animation sequence looping from first to last icon
  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout
    let isCancelled = false

    const playNext = () => {
      if (isCancelled) return

      // Stop previous animations
      iconRefs.current.forEach((handle) => handle?.stopAnimation())

      // Start current animation
      const current = iconRefs.current[currentIndex]
      if (current) {
        current.startAnimation()
      }

      timeoutId = setTimeout(() => {
        if (isCancelled) return
        if (current) {
          current.stopAnimation()
        }
        currentIndex = (currentIndex + 1) % socialLinks.length
        playNext()
      }, 1100)
    }

    timeoutId = setTimeout(playNext, 1200)

    return () => {
      isCancelled = true
      clearTimeout(timeoutId)
      iconRefs.current.forEach((handle) => handle?.stopAnimation())
    }
  }, [])

  return (
    <div className="relative z-0 flex min-h-[65vh] sm:min-h-[72vh] lg:min-h-[calc(100vh-90px)] flex-col justify-between pt-6 sm:pt-10 lg:pt-14 px-[8%]">
      {/* Mobile & Tablet (< lg): Title, Tablet Projects button, and Paragraph centered */}
      <div className="flex flex-col items-center text-center lg:hidden">
        <h1 className="text-5xl font-normal tracking-tight sm:tracking-wider sm:text-6xl md:text-7xl font-heading leading-tight">
          Front-end
        </h1>
        <h1 className="text-5xl font-normal tracking-tight sm:tracking-wider sm:text-6xl md:text-7xl font-heading mt-1 sm:mt-2 leading-tight">
          Engineer
        </h1>

        {/* Projects button: Tablet only (hidden completely on mobile view) */}
        <div className="hidden sm:flex lg:hidden items-center mt-4">
          <ProjectsButton variant="tablet" />
        </div>

        {/* Paragraph under title */}
        <p className="mt-4 sm:mt-5 max-w-lg text-center text-base leading-relaxed sm:leading-7 text-muted-foreground">
          I build interfaces around <span className="text-foreground">real product requirements</span>, not <span className="text-foreground">isolated screens,</span> turning <span className="text-foreground">complex workflows</span> into <span className="text-foreground">clear, responsive experiences</span> across <span className="text-foreground">web and mobile</span> with <span className="text-foreground">clean, maintainable, and understandable</span> code
        </p>
      </div>

      {/* Desktop (lg+): Editorial Split Layout */}
      <div className="hidden lg:flex flex-col gap-4 xl:gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-7xl xl:text-[100px] 2xl:text-[140px] tracking-widest leading-none font-heading">
            Front-end
          </h1>
          <ProjectsButton variant="desktop" />
        </div>
        <div className="flex items-center justify-between gap-6 xl:gap-8">
          <p className="max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left text-2xl leading-relaxed xl:leading-8 text-muted-foreground font-sans">
            I build interfaces around <span className="text-foreground">real product requirements</span>, not <span className="text-foreground">isolated screens,</span> turning <span className="text-foreground">complex workflows</span> into <span className="text-foreground">clear, responsive experiences</span> across <span className="text-foreground">web and mobile</span> with <span className="text-foreground">clean, maintainable, and understandable</span> code.
          </p>
          <h1 className="text-7xl xl:text-[100px] 2xl:text-[140px] tracking-widest leading-none font-heading">
            Engineer
          </h1>
        </div>
      </div>

      {/* Social Links: Scattered circular icons on mobile (balanced 3+3), compact pills on tablet, full pills on desktop */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:gap-5 xl:gap-7 pt-4 sm:pt-6 lg:pt-8 my-auto max-w-80 sm:max-w-none mx-auto">
        {socialLinks.map((link, index) => (
          <SocialPill
            key={link.label}
            {...link}
            index={index}
            ref={(el) => {
              iconRefs.current[index] = el
            }}
          />
        ))}
      </div>

      {/* Tech Stack Marquee pinned to the end of the hero section */}
      <div className="mt-auto pt-6 sm:pt-10 mx-[-9.5%] w-[119%] overflow-hidden">
        <TechStackMarquee />
      </div>
    </div>
  )
}
