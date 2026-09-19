"use client"

import { SkillCard } from "@/components/ui/skill-card"
import { GithubPill } from "@/components/ui/github-pill"
import { AboutImage } from "@/components/ui/about-image"
import { skillsData } from "@/constants/skills"
import Work from "@/components/sections/work"

export default function About() {
  const frontEndSkill = skillsData.find((s) => s.id === "frontend")
  const stylesSkill = skillsData.find((s) => s.id === "styles")
  const backendSkill = skillsData.find((s) => s.id === "backend")

  return (
    <section id="about" className="relative min-h-screen pt-16 sm:pt-20 gap-6 lg:pt-28 overflow-hidden">
      {/* Decorative background circle */}
      <span className="pointer-events-none absolute -right-24 sm:-right-36 lg:-right-40 -top-10 w-72 sm:w-96 lg:w-170 aspect-square rounded-full border border-muted-foreground/30 opacity-40 z-0" />

      <div className="flex flex-col px-[8%]">
        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:gap-18 lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-foreground shrink-0">
            ... /About me ...
          </h2>
          <p className="text-muted-foreground max-w-150 text-base sm:text-lg lg:text-[18px] leading-relaxed sm:leading-10 font-sans">
            Hello, I&apos;m Ifeoluwa Olajubaje,{" "}
            <span className="text-foreground italic font-medium">a front-end engineer.</span>{" "}
            3 years as a developer,{" "}
            <span className="text-foreground italic font-medium">1 year</span> of experience in{" "}
            <span className="text-foreground italic font-medium">building as an engineer</span>
          </p>
          <span className="hidden lg:block w-8 shrink-0" />
        </div>

        {/* Main Content: Skills & Image */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16 pt-12 sm:pt-16 lg:pt-20">
          {/* Left Column: Skill cards */}
          <div className="flex flex-col gap-6 sm:gap-8 min-w-0">
            {/* Card 1: Front-end */}
            {frontEndSkill && (
              <SkillCard
                title={frontEndSkill.title}
                technologies={frontEndSkill.technologies}
                variant={frontEndSkill.variant}
              />
            )}

            {/* Card 2: Styles + Github Button */}
            <div className="flex items-stretch sm:items-center justify-between gap-4 sm:gap-6">
              {stylesSkill && (
                <SkillCard
                  title={stylesSkill.title}
                  technologies={stylesSkill.technologies}
                  variant={stylesSkill.variant}
                  textClassName={stylesSkill.textClassName}
                  className="flex-1"
                />
              )}
              <GithubPill />
            </div>

            {/* Card 3: Back-end & Database */}
            {backendSkill && (
              <SkillCard
                title={backendSkill.title}
                technologies={backendSkill.technologies}
                variant={backendSkill.variant}
                textClassName={backendSkill.textClassName}
              />
            )}
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex w-full lg:w-100 xl:w-110 2xl:w-125 shrink-0">
            <AboutImage />
          </div>
        </div>
      </div>
      <Work />
    </section>
  )
}