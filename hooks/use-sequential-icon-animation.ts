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

      // Stop previous animations safely
      iconRefs.current.forEach((handle) => {
        try {
          handle?.stopAnimation()
        } catch {
          // ignore
        }
      })

      // Start current animation safely
      const current = iconRefs.current[currentIndex]
      if (current) {
        try {
          current.startAnimation()
        } catch {
          // ignore
        }
      }

      timeoutId = setTimeout(() => {
        if (isCancelled) return
        if (current) {
          try {
            current.stopAnimation()
          } catch {
            // ignore
          }
        }
        currentIndex = (currentIndex + 1) % itemCount
        playNext()
      }, durationMs)
    }

    timeoutId = setTimeout(playNext, delayMs)

    return () => {
      isCancelled = true
      clearTimeout(timeoutId)
      iconRefs.current.forEach((handle) => {
        try {
          handle?.stopAnimation()
        } catch {
          // ignore
        }
      })
    }
  }, [itemCount, delayMs, durationMs])

  return iconRefs
}
