import type { ProjectItem } from "@/types/project"

export const projects: ProjectItem[] = [
  {
    id: "soldbay",
    title: "Soldbay",
    subtitle: "Peer-to-Peer Campus Marketplace",
    tags: [
      "Next.js",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Expo",
    ],
    description: {
      lead: "Soldbay is an end-to-end commerce platform designed for student and community trade with verified buyer-seller protection and logistics coordination.",
      paragraphs: [
        "Built with an offline-resilient mobile app and modern web storefront, Soldbay features in-app chat negotiation, verified campus pickup point logistics, and escrow payment clearance.",
        "Vendors manage inventory listings, process instant checkouts, and track real-time fulfillment on mobile, with the main Soldbay admin on web",
      ],
    },
    gitLink: "https://github.com/emanncode/soldbay",
    prodLink: "https://soldbay.shop",
    align: "left",
    previewType: "soldbay",
  },
  {
    id: "uniflow",
    title: "Uniflow",
    subtitle: "Academic Coordination Platform",
    tags: [
      "React",
      "React Native",
      "Go",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
    ],
    description: {
      paragraphs: [
        "Uniflow is a comprehensive academic coordination system featuring a cross-platform mobile application and an administrative management portal.",
        "It unifies lecture timetables, exam room scheduling, attendance verification, and faculty communications into an intuitive, real-time interface designed to streamline university workflows.",
      ],
    },
    gitLink: "https://github.com/emanncode/Uniflow",
    prodLink: "https://uniflowapp.xyz",
    align: "right",
    previewType: "uniflow",
  },
  {
    id: "ifesquare",
    title: "Ifesquare",
    subtitle: "Smart Inventory & Ledger Engine",
    tags: ["Go", "React", "SQLite", "PWA", "Tailwind CSS", "REST API"],
    description: {
      lead: "A real-world full-stack ledger replacement for small retail businesses, replacing handwritten paper ledgers with automated sales computation and live stock monitoring.",
      paragraphs: ["Key Capabilities:"],
      bulletPoints: [
        "Decoupled React PWA client with offline-first caching and instant background synchronization.",
        "High-performance Go REST backend with ACID-compliant transactional persistence.",
        "Real-time revenue metrics, profit calculation, and automated low-stock reorder warnings.",
      ],
      footer:
        "Engineered for zero downtime and effortless daily retail bookkeeping.",
    },
    gitLink: "https://github.com/emanncode/ifesquare",
    prodLink: "https://ifesquare.uniflowapp.xyz",
    align: "left",
    previewType: "ifesquare",
  },
]
