"use client"

import Image from "next/image"
import { CloudDownloadIcon } from "@/components/ui/cloud-download"
import type { CloudDownloadIconHandle } from "@/components/ui/cloud-download"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#Articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const resumeIconRef = useRef<CloudDownloadIconHandle>(null)
  const mobileResumeIconRef = useRef<CloudDownloadIconHandle>(null)

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
    <nav className="relative top-0 z-50 backdrop-blur-2xl">
      <span className="border border-muted-foreground w-78 rounded-full aspect-square absolute -right-13 -top-15 z-0"></span>
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
          {links.map((link) => {
            return (
              <div key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center transition-all duration-230 hover:text-foreground font-semibold "
                >
                  <span className="mr-0.5 font-mono font-bold text-primary select-none">
                    ../
                  </span>
                  {link.label}
                </a>
              </div>
            )
          })}
        </div>

        {/* Right Controls: Resume & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href=""
            className="hidden sm:inline-flex"
            onMouseEnter={() => resumeIconRef.current?.startAnimation()}
            onMouseLeave={() => resumeIconRef.current?.stopAnimation()}
          >
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-full border-2 border-foreground bg-foreground text-background px-3 py-1.5 text-base transition-all duration-300 hover:scale-105 sm:px-4 sm:py-2 lg:gap-3 lg:text-xl"
            >
              <CloudDownloadIcon ref={resumeIconRef} size={18} className="sm:size-5" />
              <span>Resume</span>
            </button>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex cursor-pointer items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-muted/50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 top-18 z-40 bg-background/80 backdrop-blur-md lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-x-4 top-20 z-50 origin-top rounded-2xl border border-border/80 bg-card/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${isMobileMenuOpen
            ? "visible scale-100 opacity-100"
            : "pointer-events-none invisible scale-95 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              return (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center transition-all duration-230 hover:text-foreground font-semibold text-foreground"
                  >
                    <span className="mr-0.5 font-mono font-bold select-none">
                      ../
                    </span>
                    {link.label}
                  </a>
                </div>
              )
            })}

            {/* Resume button inside mobile menu for small screens */}
            <div className="mt-2 border-t border-border/60 pt-4 sm:hidden">
              <a
                href=""
                className="inline-block w-full"
                onMouseEnter={() => mobileResumeIconRef.current?.startAnimation()}
                onMouseLeave={() => mobileResumeIconRef.current?.stopAnimation()}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-foreground bg-foreground text-background py-2.5 text-[16px] transition-all duration-300 active:scale-95"
                >
                  <CloudDownloadIcon ref={mobileResumeIconRef} size={18} />
                  <span>Resume</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
