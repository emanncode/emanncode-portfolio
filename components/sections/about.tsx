"use client"

import { useRef } from "react"
import { GithubIcon, type GithubIconHandle } from "@/components/ui/github"
import { ArrowRightIcon, type ArrowRightIconHandle } from "@/components/ui/arrow-right"

export default function About() {
  const githubRef = useRef<GithubIconHandle>(null)
  const arrowRef = useRef<ArrowRightIconHandle>(null)

  return (
    <section id="about" className="relative min-h-screen py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative background circle */}
      <span className="pointer-events-none absolute -right-24 sm:-right-36 lg:-right-40 -top-10 w-72 sm:w-96 lg:w-[680px] aspect-square rounded-full border border-muted-foreground/30 opacity-40 z-0" />

      <div className="flex flex-col">
        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:gap-18 lg:flex-row lg:items-start lg:justify-between gap-6 px-[8%]">
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground shrink-0">
            .../About me ...
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg lg:text-[18px] leading-relaxed sm:leading-10 font-sans">
            Hello, I&apos;m Ifeoluwa Olajubaje,{" "}
            <span className="text-foreground italic font-medium">a full-stack engineer.</span>{" "}
            3 years as a developer,{" "}
            <span className="text-foreground italic font-medium">1 year</span> of experience in{" "}
            <span className="text-foreground italic font-medium">building as an engineer</span>
          </p>
          <span className="hidden lg:block w-8 shrink-0" />
        </div>

        {/* Main Content: Skills & Image */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16 pt-12 sm:pt-16 lg:pt-20 px-[8%]">
          {/* Left Column: Skill cards */}
          <div className="flex flex-col gap-6 sm:gap-8 min-w-0">
            {/* Card 1: Front-end */}
            <div className="bg-foreground text-background rounded-3xl sm:rounded-[29px] py-5 px-6 sm:px-8 flex gap-3 sm:gap-4 flex-col shadow-lg">
              <h3 className="text-xl sm:text-[22px] font-bold font-heading">Front-end</h3>
              <p className="max-w-xl font-medium italic text-sm sm:text-base leading-relaxed font-sans">
                Typescript / React / Vue / VueX / NextJs / Redux Toolkit / Nuxt / React Native / Javascript
              </p>
            </div>

            {/* Card 2: Styles + Github Button */}
            <div className="flex  items-stretch sm:items-center justify-between gap-4 sm:gap-6">
              <div className="border-muted-foreground/50 border rounded-3xl sm:rounded-[29px] py-5 px-6 sm:px-8 flex gap-3 sm:gap-4 flex-col">
                <h3 className="text-xl sm:text-[22px] font-bold font-heading">Styles</h3>
                <p className="max-w-xs font-medium italic text-sm sm:text-base leading-relaxed font-sans">
                  SCSS / SASS / POSTCSS / MUI / Material UI
                </p>
              </div>

              {/* Github & Arrow Interactive Pill */}
              <a
                href="https://github.com/emanncode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex -space-x-4 sm:-space-x-5 self-center sm:self-auto shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 py-2"
                onMouseEnter={() => {
                  githubRef.current?.startAnimation()
                  arrowRef.current?.startAnimation()
                }}
                onMouseLeave={() => {
                  githubRef.current?.stopAnimation()
                  arrowRef.current?.stopAnimation()
                }}
              >
                <div className="rounded-full border border-muted-foreground/50 bg-card/60 p-3.5 sm:p-4 backdrop-blur-sm shadow-md">
                  <GithubIcon ref={githubRef} size={24} className="sm:size-7 text-foreground" />
                </div>
                <div className="rounded-full bg-foreground p-3.5 sm:p-4 text-background shadow-md">
                  <ArrowRightIcon ref={arrowRef} size={24} className="sm:size-7 -rotate-45" />
                </div>
              </a>
            </div>

            {/* Card 3: Back-end & Database */}
            <div className="border-muted-foreground/50 border rounded-3xl sm:rounded-[29px] py-5 px-6 sm:px-8 flex gap-3 sm:gap-4 flex-col">
              <h3 className="text-xl sm:text-[22px] font-bold font-heading">Back-end & Database</h3>
              <p className="max-w-xl font-medium italic text-sm sm:text-base leading-relaxed font-sans">
                GoLang / Gin / GORM / PostgreSQL / MySQL / MongoDB / Node / PHP / Microservices / Supabase / REST APIs
              </p>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex w-full lg:w-[380px] xl:w-[440px] 2xl:w-[500px] shrink-0">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] bg-blend-luminosity bg-emann bg-center bg-cover bg-no-repeat bg-primary rounded-3xl sm:rounded-4xl shadow-xl border border-border/30" />
          </div>
        </div>
      </div>
    </section>
  )
}