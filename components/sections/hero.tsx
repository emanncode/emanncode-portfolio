"use client"

import { useRef } from "react"
import { MoveRight } from "lucide-react"
import { GithubIcon } from "@/components/ui/github"
import { TwitterIcon } from "@/components/ui/twitter"
import { LinkedinIcon } from "@/components/ui/linkedin"
import { LinktreeIcon } from "@/components/ui/linktree"
import { WhatsappIcon } from "@/components/ui/whatsapp"
import { EmailIcon } from "@/components/ui/email"
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
      className="flex items-center gap-2 rounded-full border border-muted-foreground px-10 py-5 font-sans text-xl italic text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-foreground hover:text-foreground"
    >
      <Icon ref={iconRef} size={28} className="text-foreground" />
      <span>{label}</span>
    </a>
  )
}

export default function Hero() {
  return (
    <div className="relative z-0 flex min-h-[calc(100vh-90px)] flex-col justify-between pt-16">
      <div className="flex flex-col -space-y-22">
        <div className="flex justify-between items-center">
          <h1 className="text-[165px] ">
            Full-stack
          </h1>
          <div className="flex items-center">
            <h1 className="rounded-full bg-foreground px-45 py-5 font-sans text-2xl text-background italic">
              Projects
            </h1>
            <div className="rounded-full bg-foreground p-5 text-background">
              <MoveRight size={28} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[16px] text-muted-foreground max-w-xl leading-10">
            I build interfaces around <span className="text-foreground">real product requirements</span>, not <span className="text-foreground">isolated screens,</span> turning <span className="text-foreground">complex workflows</span> into <span className="text-foreground">clear, responsive experiences</span> across <span className="text-foreground">web and mobile</span> with <span className="text-foreground">clean, maintainable, and understandable</span> code
          </p>
          <h1 className="text-[165px]">
            Engineer
          </h1>
        </div>
      </div>
      <div className="flex gap-34 items-center justify-center pt-9">
        <div className="justify-center flex gap-4 items-center">
          {links.map((link) => (
            <SocialPill key={link.label} {...link} />
          ))}
        </div>
        <div className="justify-center flex gap-4 items-center">
          {links2.map((link) => (
            <SocialPill key={link.label} {...link} />
          ))}
        </div>
        <div className="justify-center flex gap-4 items-center">
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
