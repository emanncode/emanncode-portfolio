"use client"

import { socialLinks } from "@/constants/social-links"
import { SocialPill } from "@/components/ui/social-pill"
import { useSequentialIconAnimation } from "@/hooks/use-sequential-icon-animation"

const navItems = [
  { label: "Main", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
]

export default function Contact() {
  const iconRefs = useSequentialIconAnimation(socialLinks.length)
  return (
    <footer
      id="contact"
      className="relative pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background Decorative Arc from reference design */}
      <span className="pointer-events-none absolute -left-20 sm:-left-32 bottom-20 sm:bottom-28 size-100 sm:size-140 lg:size-180 aspect-square rounded-full border border-muted-foreground/20 z-0" />

      <div className="relative z-10 flex flex-col px-[8%]">
        {/* Main Content: Staggered Name on left, Contacts & Site info on right */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-10 sm:gap-14 lg:gap-16">
          {/* Staggered Name Layout adapted to portfolio heading font */}
          <div className="flex flex-col select-none">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight text-foreground leading-[0.95]">
              Ifeoluwa
            </h2>
            <div className="flex items-baseline gap-3 sm:gap-6 lg:gap-10 mt-1 sm:mt-2">
              <h1 className="flex flex-col text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-tight tracking-wider uppercase shrink-0">
                <span>Front-end</span>
                <span>Engineer</span>
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight text-foreground/80 leading-[0.95]">
                Olajubaje
              </h2>
            </div>
          </div>

          {/* Right Column: Header, Quick Nav, and Site Card */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
            {/* Header */}
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground shrink-0 tracking-tight">
              ... /Contacts ...
            </h2>

            {/* Quick Navigation Links */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 sm:pt-5 text-xs sm:text-sm font-sans"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Site Credit Card matching reference design */}
            <div className="w-full sm:w-80 rounded-2xl border border-muted-foreground/40 p-5 sm:p-6 backdrop-blur-xs mt-6 space-y-3">
              <p className="font-sans text-xs sm:text-base font-semibold text-foreground tracking-wider">
                Site
              </p>
              <div className="space-y-1 text-xs sm:text-base font-sans text-muted-foreground leading-relaxed">
                <p>Handcrafted by ME /</p>
                <p>Powered by Next.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Social Links Pills using reusable SocialPill */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-2.5 sm:gap-3.5 lg:gap-4">
            {socialLinks.map((item, index) => (
              <SocialPill
                key={item.label}
                {...item}
                index={index}
                variant="footer"
                ref={(el) => {
                  iconRefs.current[index] = el
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
