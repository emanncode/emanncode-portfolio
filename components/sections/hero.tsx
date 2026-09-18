"use client"

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { GithubIcon } from "@/components/ui/github"
import { TwitterIcon } from "@/components/ui/twitter"
import { LinkedinIcon } from "@/components/ui/linkedin"
import { LinktreeIcon } from "@/components/ui/linktree"
import { WhatsappIcon } from "@/components/ui/whatsapp"
import { EmailIcon } from "@/components/ui/email"
import { ArrowRightIcon } from "@/components/ui/arrow-right"
import TechStackMarquee from "@/components/tech-stack-marquee"
import { cn } from "@/lib/utils"

interface IconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface SocialLinkItem {
  link: string
  label: string
  Icon: React.ComponentType<{
    ref?: React.Ref<IconHandle>
    size?: number
    className?: string
  }>
}

const socialLinks: SocialLinkItem[] = [
  { link: "https://x.com/emanncode", label: "Twitter", Icon: TwitterIcon },
  {
    link: "https://www.linkedin.com/in/emmanuel-olajubaje-86178a42a/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    link: "https://github.com/emanncode",
    label: "Github",
    Icon: GithubIcon,
  },
  { link: "https://linktr.ee/emanncodedev", label: "Linktree", Icon: LinktreeIcon },
  { link: "https://wa.me/2349048801668", label: "Whatsapp", Icon: WhatsappIcon },
  { link: "mailto:olajubajeifeoluwa93@gmail.com", label: "Email", Icon: EmailIcon },
]

interface SocialPillProps extends SocialLinkItem {
  index: number
}

const SocialPill = forwardRef<IconHandle, SocialPillProps>(
  ({ link, label, Icon, index }, ref) => {
    const localRef = useRef<IconHandle>(null)

    useImperativeHandle(ref, () => ({
      startAnimation: () => localRef.current?.startAnimation(),
      stopAnimation: () => localRef.current?.stopAnimation(),
    }))

    // Organic scattered offsets on mobile view
    const mobileScatteredClasses = [
      "-translate-y-1.5 rotate-[-3deg]",
      "translate-y-2 rotate-[2deg]",
      "-translate-y-1 rotate-[4deg]",
      "translate-y-1.5 rotate-[-2deg]",
      "-translate-y-2 rotate-[-4deg]",
      "translate-y-1 rotate-[3deg]",
    ]

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => localRef.current?.startAnimation()}
        onMouseLeave={() => localRef.current?.stopAnimation()}
        className={cn(
          // Mobile: scattered circular icon pills; Tablet: compact icon+label; Laptop/Desktop: large pill
          "flex items-center justify-center rounded-full border border-muted-foreground/40 transition-all duration-300",
          "h-12 w-12 sm:h-auto sm:w-auto p-2.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 xl:px-9 xl:py-4",
          "text-muted-foreground hover:border-foreground hover:text-foreground hover:scale-105 active:scale-95",
          "sm:transform-none",
          mobileScatteredClasses[index % mobileScatteredClasses.length]
        )}
      >
        <Icon
          ref={localRef}
          size={20}
          className="text-foreground shrink-0 sm:size-5 lg:size-6 xl:size-7"
        />
        <span className="hidden sm:inline-block font-sans text-xs italic tracking-wider sm:text-sm lg:text-base xl:text-xl ml-2">
          {label}
        </span>
      </a>
    )
  }
)
SocialPill.displayName = "SocialPill"

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
    <div className="relative z-0 flex min-h-[70vh] sm:min-h-[75vh] lg:min-h-[calc(100vh-90px)] flex-col justify-between pt-6 sm:pt-10 lg:pt-14 px-[8%]">
      {/* Mobile & Tablet (< lg): Title, Tablet Projects button, and Paragraph centered */}
      <div className="flex flex-col items-center text-center lg:hidden">
        <h1 className="text-5xl font-normal tracking-wider sm:text-6xl md:text-7xl font-heading">
          Full-stack
        </h1>
        <h1 className="text-5xl font-normal tracking-wider sm:text-6xl md:text-7xl font-heading mt-1 sm:mt-2">
          Engineer
        </h1>

        {/* Paragraph under title */}
        <p className="mt-5 max-w-lg text-center text-xs leading-relaxed text-muted-foreground sm:text-sm sm:leading-7 md:text-base">
          I build interfaces around <span className="text-foreground">real product requirements</span>, not <span className="text-foreground">isolated screens,</span> turning <span className="text-foreground">complex workflows</span> into <span className="text-foreground">clear, responsive experiences</span> across <span className="text-foreground">web and mobile</span> with <span className="text-foreground">clean, maintainable, and understandable</span> code
        </p>
      </div>

      {/* Desktop (lg+): Editorial Split Layout */}
      <div className="hidden lg:flex flex-col -space-y-12 xl:-space-y-14">
        <div className="flex items-center justify-between">
          <h1 className="text-[105px] tracking-widest leading-none xl:text-[130px] 2xl:text-[160px] font-heading">
            Full-stack
          </h1>
          <div className="flex items-center">
            <h1 className="rounded-full bg-foreground px-12 py-3.5 xl:px-16 xl:py-4 2xl:px-20 2xl:py-5 font-sans text-lg xl:text-xl 2xl:text-2xl tracking-widest text-background italic">
              Projects
            </h1>
            <div className="rounded-full bg-foreground p-3.5 xl:p-4 2xl:p-5 font-sans text-background italic -ml-1">
              <ArrowRightIcon size={24} className="rotate-90" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-8 mt-10">
          <p className="max-w-md xl:max-w-xl text-left text-sm leading-8 xl:text-base xl:leading-10 text-muted-foreground font-sans">
            I build interfaces around <span className="text-foreground">real product requirements</span>, not <span className="text-foreground">isolated screens,</span> turning <span className="text-foreground">complex workflows</span> into <span className="text-foreground">clear, responsive experiences</span> across <span className="text-foreground">web and mobile</span> with <span className="text-foreground">clean, maintainable, and understandable</span> code
          </p>
          <h1 className="text-[105px] tracking-widest leading-none xl:text-[130px] 2xl:text-[160px] font-heading">
            Engineer
          </h1>
        </div>
      </div>

      {/* Social Links: Scattered circular icons on mobile, compact pills on tablet, full pills on desktop */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:gap-6 xl:gap-8 pt-6 sm:pt-8 my-auto">
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
