import About from "@/components/sections/about"
import Navbar from "@/components/sections/navbar"

export default function TestAboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative tracking-widest overflow-x-hidden">
      <Navbar />
      <About />
    </main>
  )
}

