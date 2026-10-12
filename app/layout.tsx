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
  metadataBase: new URL("https://emanncode.work"),
  title: {
    default: "Ifeoluwa Olajubaje | Front-end Engineer",
    template: "%s | Ifeoluwa Olajubaje",
  },
  description:
    "Ifeoluwa Olajubaje (EmannCode) — Front-end & Mobile Engineer building high-performance, accessible web and mobile applications with React, Next.js, and TypeScript.",
  keywords: [
    "Ifeoluwa Olajubaje",
    "EmannCode",
    "Front-end Engineer",
    "Mobile Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Ifeoluwa Olajubaje", url: "https://emanncode.work" }],
  creator: "Ifeoluwa Olajubaje",
  publisher: "Ifeoluwa Olajubaje",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ifeoluwa Olajubaje | Front-end Engineer",
    description:
      "Front-end & Mobile Engineer building high-performance, accessible web and mobile applications with React, Next.js, and TypeScript.",
    url: "https://emanncode.work",
    siteName: "EmannCode",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/emann.png",
        width: 1200,
        height: 630,
        alt: "Ifeoluwa Olajubaje — Front-end Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifeoluwa Olajubaje | Front-end Engineer",
    description:
      "Front-end & Mobile Engineer building high-performance, accessible web and mobile applications with React, Next.js, and TypeScript.",
    images: ["/emann.png"],
    creator: "@emanncode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://emanncode.work/#person",
      name: "Ifeoluwa Olajubaje",
      alternateName: ["Emmanuel Olajubaje", "EmannCode"],
      url: "https://emanncode.work",
      image: "https://emanncode.work/me.jpg",
      jobTitle: "Front-end Engineer",
      sameAs: [
        "https://x.com/emanncode",
        "https://www.linkedin.com/in/emmanuel-olajubaje-86178a42a/",
        "https://github.com/emanncode",
        "https://linktr.ee/emanncodedev",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "React Native",
        "Mobile Development",
        "Web Development",
        "Front-end Engineering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://emanncode.work/#website",
      url: "https://emanncode.work",
      name: "EmannCode — Ifeoluwa Olajubaje Portfolio",
      description: "Portfolio of Ifeoluwa Olajubaje, Front-end Engineer.",
      publisher: {
        "@id": "https://emanncode.work/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://emanncode.work/#profilepage",
      url: "https://emanncode.work",
      name: "Ifeoluwa Olajubaje | Front-end Engineer",
      mainEntity: {
        "@id": "https://emanncode.work/#person",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${sourceSerif.variable} min-h-screen bg-background text-[16px] text-foreground antialiased selection:bg-primary/25 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  )
}
