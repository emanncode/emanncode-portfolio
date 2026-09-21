"use client"

import { socialLinks } from "@/constants/social-links"

const navItems = [
  { label: "Main", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
]

export default function Contact() {
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
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight text-foreground leading-[0.95]">
              Ifeoluwa
            </h2>
            <div className="flex items-baseline gap-3 sm:gap-6 lg:gap-10 mt-1 sm:mt-2">
              <div className="flex flex-col text-[11px] sm:text-xs md:text-sm font-sans text-muted-foreground leading-tight tracking-wider uppercase shrink-0">
                <span>Front-end</span>
                <span>developer</span>
              </div>
              <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight text-foreground/80 leading-[0.95]">
                Olajubaje
              </h2>
            </div>
          </div>

          {/* Right Column: Header, Quick Nav, and Site Card */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
            {/* Header */}
            <span className="font-sans text-xs sm:text-sm tracking-widest text-foreground font-semibold select-none">
              ... /Contacts ...
            </span>

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
            <div className="w-full sm:w-80 rounded-2xl border border-border/40 bg-card/40 p-5 sm:p-6 backdrop-blur-xs mt-6 space-y-3">
              <p className="font-sans text-xs font-semibold text-foreground tracking-wider">
                Site
              </p>
              <div className="space-y-1 text-xs font-sans text-muted-foreground leading-relaxed">
                <p>Handcrafted by ME /</p>
                <p>Designed by Taisia /</p>
                <p>Powered by Next.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Social Links Pills using existing socialLinks */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 lg:gap-4">
            {socialLinks.map((item) => {
              const Icon = item.Icon
              return (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center sm:justify-start gap-2.5 rounded-full border border-border/40 bg-card/50 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-sans text-muted-foreground shadow-xs transition-all duration-300 hover:border-foreground/40 hover:bg-card hover:text-foreground hover:scale-105 active:scale-95"
                >
                  <Icon size={18} className="text-foreground shrink-0" />
                  <span className="font-sans text-xs italic tracking-wider sm:text-sm">
                    {item.label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
