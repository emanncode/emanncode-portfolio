"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/constants/nav-links"
import { ResumeButton } from "@/components/ui/resume-button"
import type { NavLinkItem } from "@/types/nav"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  links?: NavLinkItem[]
}

export function MobileSidebar({
  isOpen,
  onClose,
  links = navLinks,
}: MobileSidebarProps) {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Sidebar Panel */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-85 sm:max-w-105 flex-col justify-between bg-background border-l border-border/40 p-8 sm:p-10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
        aria-label="Mobile Navigation"
      >
        {/* Top bar: Navigation label & close button */}
        <div className="flex items-center justify-between pb-4">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border/50 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:rotate-90 active:scale-95"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* Numbered Navigation list */}
        <nav className="flex flex-col gap-6 sm:gap-8 my-auto py-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline gap-4 sm:gap-5 transition-all duration-300 hover:translate-x-2"
            >
              <span className="font-mono text-xs sm:text-sm text-muted-foreground/60 group-hover:text-primary transition-colors select-none">
                {link.num}
              </span>
              <span className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom Footer Section */}
        <div className="flex flex-col gap-3.5 border-t border-muted-foreground/20 pt-6">
          {/* Resume button for mobile */}
          <div className="sm:hidden pb-2">
            <ResumeButton variant="mobile" />
          </div>

          <p className="font-mono text-[11px] sm:text-xs tracking-[0.22em] text-muted-foreground uppercase font-medium">
            FULLSTACK ENGINEER
          </p>
          <p className="font-sans text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
            React · Next.js · Vue · React Native · PHP · MySQL · GO · PostgreSQL
          </p>
        </div>
      </aside>
    </>
  )
}

