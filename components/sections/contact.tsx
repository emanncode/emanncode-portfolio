"use client"

import { Mail, MessageCircle, Link2 } from "lucide-react"

// Clean static SVG brand icons (standard, non-animated)
function GithubSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const contactLinks = [
  {
    label: "Github",
    href: "https://github.com/emanncode",
    icon: GithubSvg,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/emmanuel-olajubaje-86178a42a/",
    icon: LinkedinSvg,
  },
  {
    label: "E-mail",
    href: "mailto:olajubajeifeoluwa93@gmail.com",
    icon: ({ className }: { className?: string }) => (
      <Mail size={16} className={className} />
    ),
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/2349048801668",
    icon: ({ className }: { className?: string }) => (
      <MessageCircle size={16} className={className} />
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/emanncode",
    icon: TwitterSvg,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/emanncodedev",
    icon: ({ className }: { className?: string }) => (
      <Link2 size={16} className={className} />
    ),
  },
]

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
        {/* Main Content: Name on left (desktop), Contacts & Site info on right (desktop) */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-10 sm:gap-14 lg:gap-16">
          {/* Left Column: Big Editorial Name & Role */}
          <div className="flex flex-col">
            <h2 className="font-mono text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground leading-[0.95] select-none">
              Ifeoluwa
            </h2>
            <h2 className="font-mono text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground/85 leading-[0.95] mt-1 sm:mt-2 select-none">
              Olajubaje
            </h2>
            <p className="text-muted-foreground font-mono text-xs sm:text-sm tracking-widest uppercase mt-4 sm:mt-6">
              Front-end engineer
            </p>
          </div>

          {/* Right Column: Header, Quick Nav, and Site Card */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
            {/* Header */}
            <span className="font-mono text-xs sm:text-sm tracking-widest text-foreground font-semibold select-none">
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
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Site Credit Card matching reference design */}
            <div className="w-full sm:w-80 rounded-2xl border border-border/40 bg-card/40 p-5 sm:p-6 backdrop-blur-xs mt-6 space-y-3">
              <p className="font-mono text-xs font-semibold text-foreground">
                Site
              </p>
              <div className="space-y-1 text-xs font-mono text-muted-foreground leading-relaxed">
                <p>Handcrafted by ME /</p>
                <p>Designed by Taisia /</p>
                <p>Powered by Next.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Social Links Pills */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 lg:gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center sm:justify-start gap-2 rounded-full border border-border/40 bg-card/50 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-sans text-muted-foreground shadow-xs transition-all duration-300 hover:border-foreground/40 hover:bg-card hover:text-foreground hover:scale-105 active:scale-95"
                >
                  <Icon className="text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
