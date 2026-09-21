import type { ArticleItem } from "@/types/article"

export const articles: ArticleItem[] = [
  // Page 1
  {
    id: "offline-first-sqlite",
    title: "Designing offline-first mobile apps with Expo & SQLite",
    description:
      "Architecture patterns for local-first persistence, reactive SQLite queries, background cloud sync, and seamless conflict resolution in field retail apps.",
    status: "coming-soon",
    statusText: "Coming soon",
    tags: ["React Native", "SQLite", "Offline-first"],
    page: 1,
  },
  {
    id: "golang-rest-ledger",
    title: "High-throughput Go REST APIs for retail ledger engines",
    description:
      "Structuring ACID-compliant transactional persistence, minimal memory footprints, and sub-millisecond query execution in Go for daily retail bookkeeping.",
    status: "coming-soon",
    statusText: "Not available yet",
    tags: ["Go", "REST APIs", "SQLite"],
    page: 1,
  },
  {
    id: "campus-p2p-escrow",
    title: "Campus peer-to-peer commerce: escrow & pickup logistics",
    description:
      "Building verifiable trust mechanisms, buyer-seller escrow holds, and student campus pickup routing for high-density university marketplaces.",
    status: "coming-soon",
    statusText: "Coming soon",
    tags: ["Next.js", "PostgreSQL", "Escrow"],
    page: 1,
  },
  {
    id: "rsc-go-microservices",
    title: "Bridging React Server Components & typed Go microservices",
    description:
      "Patterns for integrating Next.js App Router streaming with lightweight Go microservices, strict type generation, and distributed edge caching.",
    status: "coming-soon",
    statusText: "Not available yet",
    tags: ["Next.js", "Go", "Microservices"],
    page: 1,
  },

  // Page 2
  {
    id: "react-native-biometrics",
    title: "Zero-latency biometrics and session token rotation in Expo",
    description:
      "Implementing hardware-backed biometric authentication, keychain persistence, and automated silent token refreshing across Android and iOS.",
    status: "coming-soon",
    statusText: "In writing",
    tags: ["React Native", "Auth", "Expo"],
    page: 2,
  },
  {
    id: "realtime-websocket-sync",
    title: "Real-time negotiation channels with Go WebSockets",
    description:
      "Designing resilient pub/sub chat rooms with low CPU overhead, automated connection recovery, and persistent message ordering in Go.",
    status: "coming-soon",
    statusText: "Draft in progress",
    tags: ["Go", "WebSockets", "Concurrency"],
    page: 2,
  },
  {
    id: "tailwind-design-systems",
    title: "Building scalable editorial design systems in Tailwind v4",
    description:
      "Modern CSS theme tokens, container queries, high-contrast accessible typography, and fluid responsive layouts for modern portfolios.",
    status: "coming-soon",
    statusText: "Coming soon",
    tags: ["Tailwind CSS", "CSS", "UI/UX"],
    page: 2,
  },
  {
    id: "pwa-service-workers",
    title: "Bulletproof service worker caching for offline retail PWAs",
    description:
      "Cache-first asset delivery, background sync queuing, and IndexedDB fallbacks for retail employees operating with unstable connectivity.",
    status: "coming-soon",
    statusText: "Not available yet",
    tags: ["PWA", "Service Worker", "React"],
    page: 2,
  },

  // Page 3
  {
    id: "postgres-query-optimization",
    title: "PostgreSQL indexing strategies for multi-tenant inventory",
    description:
      "Index tuning, JSONB query optimization, partial indexing, and partition pruning for fast product searches across thousands of campus vendors.",
    status: "coming-soon",
    statusText: "Planned",
    tags: ["PostgreSQL", "SQL", "Database"],
    page: 3,
  },
  {
    id: "turborepo-monorepo-workflow",
    title: "Monorepo setups for web, mobile, and backend microservices",
    description:
      "Shared TypeScript configurations, decoupled deploy pipelines, and fast remote caching across Next.js and React Native codebases.",
    status: "coming-soon",
    statusText: "Planned",
    tags: ["Monorepo", "TypeScript", "DevOps"],
    page: 3,
  },
  {
    id: "clean-architecture-in-go",
    title: "Pragmatic Clean Architecture for small Go service backends",
    description:
      "Avoiding enterprise bloat while maintaining strict domain boundaries, testable repository interfaces, and clean dependency injection.",
    status: "coming-soon",
    statusText: "Planned",
    tags: ["Go", "Architecture", "Testing"],
    page: 3,
  },
  {
    id: "frontend-state-management",
    title: "State management evolution: from Redux to modern server state",
    description:
      "Why decoupling server cache from local UI state using TanStack Query and RSC reduces boilerplate and prevents state synchronization bugs.",
    status: "coming-soon",
    statusText: "Planned",
    tags: ["React", "State Management", "Next.js"],
    page: 3,
  },
]
