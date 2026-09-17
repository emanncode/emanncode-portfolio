import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"
import Navbar from "@/components/sections/navbar"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative tracking-widest overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col px-[8%]">
        <Hero />
        <About />
      </div>
    </main>
  )
}
