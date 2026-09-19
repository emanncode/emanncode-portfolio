"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/ui/arrow-right"
import { cn } from "@/lib/utils"

interface BackToTopProps {
  initialVisible?: boolean
}

export function BackToTop({ initialVisible = false }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(initialVisible)
  const lastScrollY = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const iconRef = useRef<ArrowRightIconHandle>(null)

  useEffect(() => {
    const getHeroThreshold = () => {
      // Find the about section or default to 15% of viewport height
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        return aboutSection.offsetTop - 120
      }
      return window.innerHeight * 0.15
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroThreshold = getHeroThreshold()
      const isPastHero = currentScrollY > heroThreshold

      // Clear any pending 3-second idle timer
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }

      // 1. If within Hero section, always hide
      if (!isPastHero) {
        setIsVisible(false)
        lastScrollY.current = currentScrollY
        return
      }

      // 2. While actively scrolling in any direction (up or down), immediately hide
      const isActivelyScrolling = Math.abs(currentScrollY - lastScrollY.current) > 2
      if (isActivelyScrolling) {
        setIsVisible(false)
      }

      // 3. Animate in after stopping scrolling (down or up) for 3 seconds
      timerRef.current = setTimeout(() => {
        if (window.scrollY > getHeroThreshold()) {
          setIsVisible(true)
        }
      }, 100)

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 active:scale-95 border border-border/20",
        isVisible
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "translate-y-8 opacity-0 scale-90 pointer-events-none"
      )}
    >
      <ArrowRightIcon
        ref={iconRef}
        size={22}
        className="-rotate-90 text-background sm:size-6"
      />
    </button>
  )
}

