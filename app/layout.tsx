import type { Metadata } from "next"
import { Fraunces, Source_Serif_4 } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ifeoluwa Olajubaje | Front-end Engineer",
  description: "EmannCode Portfolio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className={`${fraunces.variable} ${sourceSerif.variable} min-h-screen bg-background text-[16px] text-foreground antialiased selection:bg-primary/25 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  )
}
