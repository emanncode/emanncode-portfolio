import type { ProjectItem } from "@/types/project"

export const projects: ProjectItem[] = [
  {
    id: "gostar",
    title: "GOStar",
    subtitle: "Centaur",
    tags: ["Go", "Microservices", "PostgreSQL", "Docker", "REST API", "Kafka"],
    description: {
      lead: "GOStar — a cutting-edge microservice-based application designed to handle HTTP request authentication and statistics with finesse.",
      paragraphs: [
        "This project comprises several key microservices, each contributing to its overall functionality and prowess.",
      ],
    },
    gitLink: "https://github.com/emanncode",
    prodLink: "https://github.com/emanncode",
    align: "left",
    previewType: "gostar",
  },
  {
    id: "kana-master",
    title: "Kana Master",
    tags: ["TypeScript", "ReactNative", "Redux Toolkit", "i18n", "iOS"],
    description: {
      paragraphs: [
        "Kana Master is an iOS application designed for learning Katakana and Hiragana. It includes various tests and practical exercises that help in learning and memorizing Japanese characters.",
        "The app also offers audio training for correct pronunciation and demonstrates how to properly draw each character.",
      ],
    },
    gitLink: "https://github.com/emanncode",
    prodLink: "https://github.com/emanncode",
    align: "right",
    previewType: "kana-master",
  },
  {
    id: "anime-sentry",
    title: "Anime Sentry",
    tags: ["GoLang", "GORM", "PostgreSQL", "L10n", "goquery", "gocron"],
    description: {
      lead: "Hey, anime fans! Struggling to track new episodes? Anime Alert Bot is your solution. Get auto-notifications for new episode releases!",
      paragraphs: ["How it Works:"],
      bulletPoints: [
        "Send the bot your anime link.",
        "Get release schedules instantly. Skip searching the web or social media.",
        "Every 30 mins, the bot checks for new episodes using a cron schedule. Be the first to know about voice or subtitle updates!",
      ],
      footer: "Connect now and never miss an episode! 🌟",
    },
    gitLink: "https://github.com/emanncode",
    prodLink: "https://github.com/emanncode",
    align: "left",
    previewType: "anime-sentry",
  },
]
