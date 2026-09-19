"use client"

import Image from "next/image"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { navLinks } from "@/constants/nav-links"
import { ResumeButton } from "@/components/ui/resume-button"
import { MobileSidebar } from "@/components/ui/mobile-sidebar"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <nav className="relative">
      <span className="border border-muted-foreground/50 w-78 rounded-full aspect-square absolute -right-13 -top-15 z-0" />
      {/* Brand / Logo */}
      <div className="flex items-center justify-between px-[8%] py-4 font-sans font-normal tracking-[0.15em] sm:py-5 relative">
        <a href="/" className="transition-transform duration-200 hover:scale-105">
          <Image
            src={"/emannlogonobg.png"}
            alt="Logo"
            width={60}
            height={60}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 px-3 text-lg lg:flex xl:gap-10 xl:text-xl">
          {navLinks.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center transition-all duration-230 hover:text-foreground text-muted-foreground font-semibold"
              >
                <span className="mr-0.5 font-mono font-bold text-primary select-none">
                  ../
                </span>
                {link.label}
              </a>
            </div>
          ))}
        </div>

        {/* Right Controls: Resume & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:inline-flex">
            <ResumeButton variant="desktop" />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex cursor-pointer items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-muted/50 lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </nav>
  )
}
