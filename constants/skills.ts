import type { SkillCardItem } from "@/types/skill"

export const skillsData: SkillCardItem[] = [
  {
    id: "frontend",
    title: "Front-end",
    technologies:
      "Typescript / React / Vue / VueX / NextJs / Redux Toolkit / Nuxt / React Native / Javascript",
    variant: "solid",
  },
  {
    id: "styles",
    title: "Styles",
    technologies: "SCSS / SASS / POSTCSS / MUI / Material UI",
    variant: "outline",
    textClassName: "max-w-xs",
  },
  {
    id: "backend",
    title: "Back-end & Database",
    technologies:
      "GoLang / Gin / GORM / PostgreSQL / MySQL / MongoDB / Node / PHP / Microservices / Supabase / REST APIs",
    variant: "outline",
    textClassName: "max-w-xl",
  },
]
