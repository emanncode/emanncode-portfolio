import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"
import Navbar from "@/components/sections/navbar"
import Projects from "@/components/sections/projects"
import { BackToTop } from "@/components/ui/back-to-top"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col relative tracking-wider overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BackToTop />
    </main>
  )
}
