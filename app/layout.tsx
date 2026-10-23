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
    default: "EmannCode — Ifeoluwa Olajubaje | Front-end & Mobile Engineer",
    template: "%s | EmannCode",
  },
  description:
    "Official portfolio of EmannCode (Ifeoluwa Olajubaje). Front-end & Mobile Engineer building high-performance web applications, creator of Soldbay, Uniflow, and Ifesquare.",
  keywords: [
    "EmannCode",
    "EmannCode portfolio",
    "Ifeoluwa Olajubaje",
    "Soldbay",
    "Uniflow",
    "Ifesquare",
    "Soldbay creator",
    "Uniflow developer",
    "Ifesquare ledger",
    "Front-end Engineer",
    "Mobile Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [
    { name: "EmannCode (Ifeoluwa Olajubaje)", url: "https://emanncode.work" },
  ],
  creator: "EmannCode (Ifeoluwa Olajubaje)",
  publisher: "EmannCode",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EmannCode — Ifeoluwa Olajubaje | Front-end & Mobile Engineer",
    description:
      "Official portfolio of EmannCode (Ifeoluwa Olajubaje). Front-end & Mobile Engineer building high-performance web applications, creator of Soldbay, Uniflow, and Ifesquare.",
    url: "https://emanncode.work",
    siteName: "EmannCode",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/emann.png",
        width: 1200,
        height: 630,
        alt: "EmannCode (Ifeoluwa Olajubaje) — Front-end & Mobile Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmannCode — Ifeoluwa Olajubaje | Front-end & Mobile Engineer",
    description:
      "Official portfolio of EmannCode (Ifeoluwa Olajubaje). Front-end & Mobile Engineer building high-performance web applications, creator of Soldbay, Uniflow, and Ifesquare.",
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
      name: "EmannCode",
      alternateName: ["Ifeoluwa Olajubaje", "Emmanuel Olajubaje"],
      url: "https://emanncode.work",
      image: "https://emanncode.work/me.jpg",
      jobTitle: "Front-end & Mobile Engineer",
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
      workExample: [
        {
          "@type": "WebApplication",
          name: "Soldbay",
          url: "https://soldbay.shop",
          description:
            "Peer-to-Peer Campus Marketplace engineered by EmannCode",
          applicationCategory: "ShoppingApplication",
        },
        {
          "@type": "WebApplication",
          name: "Uniflow",
          url: "https://uniflowapp.xyz",
          description:
            "Academic Coordination & University Timetable Platform engineered by EmannCode",
          applicationCategory: "EducationalApplication",
        },
        {
          "@type": "WebApplication",
          name: "Ifesquare",
          url: "https://ifesquare.uniflowapp.xyz",
          description:
            "Smart Inventory & Retail Ledger Engine engineered by EmannCode",
          applicationCategory: "BusinessApplication",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://emanncode.work/#website",
      url: "https://emanncode.work",
      name: "EmannCode — Official Portfolio",
      alternateName: ["EmannCode", "Ifeoluwa Olajubaje Portfolio"],
      description:
        "Official portfolio of EmannCode (Ifeoluwa Olajubaje), Front-end & Mobile Engineer.",
      publisher: {
        "@id": "https://emanncode.work/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://emanncode.work/#profilepage",
      url: "https://emanncode.work",
      name: "EmannCode — Ifeoluwa Olajubaje | Front-end & Mobile Engineer",
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
      className="dark scroll-smooth"
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
