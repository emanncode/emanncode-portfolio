"use client"

import { useRef } from "react"
import { GithubIcon } from "@/components/ui/github"
import { TwitterIcon } from "@/components/ui/twitter"
import { LinkedinIcon } from "@/components/ui/linkedin"
import { LinktreeIcon } from "@/components/ui/linktree"
import { WhatsappIcon } from "@/components/ui/whatsapp"
import { EmailIcon } from "@/components/ui/email"
import { ArrowRightIcon } from "@/components/ui/arrow-right"
import TechStackMarquee from "@/components/tech-stack-marquee"

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

const links: SocialLinkItem[] = [
  { link: "https://x.com/emanncode", label: "Twitter", Icon: TwitterIcon },
  {
    link: "https://www.linkedin.com/in/emmanuel-olajubaje-86178a42a/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
]

const links2: SocialLinkItem[] = [
  {
    link: "https://github.com/emanncode",
    label: "Github",
    Icon: GithubIcon,
  },
  { link: "https://linktr.ee/emanncodedev", label: "Linktree", Icon: LinktreeIcon },
]

const links3: SocialLinkItem[] = [
  { link: "https://wa.me/2349048801668", label: "Whatsapp", Icon: WhatsappIcon },
  { link: "mailto:olajubajeifeoluwa93@gmail.com", label: "Email", Icon: EmailIcon },
]

function SocialPill({ link, label, Icon }: SocialLinkItem) {
  const iconRef = useRef<IconHandle>(null)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="flex items-center gap-2 rounded-full border border-muted-foreground/50 px-5 py-3 font-sans text-sm italic text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-foreground hover:text-foreground sm:px-7 sm:py-4 sm:text-lg xl:px-10 xl:py-5 xl:text-xl"
    >
      <Icon ref={iconRef} size={20} className="text-foreground sm:size-6 xl:size-7" />
      <span>{label}</span>
    </a>
  )
}

export default function Hero() {
  return (
    <div className="relative z-0 flex min-h-[calc(100vh-90px)] flex-col justify-between pt-10 sm:pt-16 px-[8%]">
      <div className="flex flex-col gap-6 lg:gap-0">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h1 className="text-center text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-center lg:text-[110px] lg:leading-none xl:text-[130px] 2xl:text-[165px]">
            Full-stack
          </h1>
          <div className="flex items-center">
            <h1 className="rounded-full bg-foreground px-5 py-2.5 font-sans text-base text-background italic sm:px-10 sm:py-4 sm:text-xl lg:px-20 lg:py-5 lg:text-2xl">
              Projects
            </h1>
            <ArrowRightIcon size={28} className="rounded-full bg-foreground p-5 text-background rotate-90" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 lg:-mt-7 lg:flex-row">
          <p className="max-w-xl text-center text-sm leading-7 text-muted-foreground sm:leading-10 lg:text-left lg:text-[16px]">
            I build interfaces around <span className="text-foreground">real product requirements</span>, not <span className="text-foreground">isolated screens,</span> turning <span className="text-foreground">complex workflows</span> into <span className="text-foreground">clear, responsive experiences</span> across <span className="text-foreground">web and mobile</span> with <span className="text-foreground">clean, maintainable, and understandable</span> code
          </p>
          <h1 className="text-center text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-[110px] lg:leading-none xl:text-[130px] 2xl:text-[165px]">
            Engineer
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 pt-9 lg:flex-row lg:gap-8 xl:gap-34">
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {links.map((link) => (
            <SocialPill key={link.label} {...link} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {links2.map((link) => (
            <SocialPill key={link.label} {...link} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {links3.map((link) => (
            <SocialPill key={link.label} {...link} />
          ))}
        </div>
      </div>
      {/* Anchored at the end of the Hero section */}
      <div className="mt-auto pt-10 mx-[-9.5%] w-[119%] overflow-hidden">
        <TechStackMarquee />
      </div>
    </div>
  )
}
