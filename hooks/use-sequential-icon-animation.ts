"use client"

import { useEffect, useRef } from "react"
import type { IconHandle } from "@/types/social"

/**
 * Hook to sequentially trigger startAnimation / stopAnimation on an array of icon refs.
 * Cycles continuously through all icons at a specified duration.
 */
export function useSequentialIconAnimation(
  itemCount: number,
  delayMs = 1200,
  durationMs = 1100
) {
  const iconRefs = useRef<(IconHandle | null)[]>([])

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
        currentIndex = (currentIndex + 1) % itemCount
        playNext()
      }, durationMs)
    }

    timeoutId = setTimeout(playNext, delayMs)

    return () => {
      isCancelled = true
      clearTimeout(timeoutId)
      iconRefs.current.forEach((handle) => handle?.stopAnimation())
    }
  }, [itemCount, delayMs, durationMs])

  return iconRefs
}
