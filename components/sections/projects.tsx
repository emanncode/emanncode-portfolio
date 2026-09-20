"use client"

import { projects } from "@/constants/projects"
import { ProjectCard } from "@/components/project/project-card"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background Decorative Rings (connecting circular arcs from reference design) */}
      <span className="pointer-events-none absolute -left-40 sm:-left-60 -top-20 size-96 sm:size-140 lg:size-180 aspect-square rounded-full border border-muted-foreground/20 opacity-40 z-0" />
      <span className="pointer-events-none absolute -right-32 top-1/3 size-80 sm:size-120 lg:size-160 aspect-square rounded-full border border-muted-foreground/20 opacity-30 z-0" />
      <span className="pointer-events-none absolute left-1/4 bottom-20 size-96 sm:size-130 lg:size-170 aspect-square rounded-full border border-muted-foreground/15 opacity-25 z-0" />

      <div className="relative z-10 flex flex-col px-[8%]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 sm:pb-12 border-b border-border/30">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground shrink-0 tracking-tight">
            ... /Projects ...
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-sans max-w-md">
            Selected full-stack web, mobile, and microservices applications engineered with precision.
          </p>
        </div>

        {/* Projects List */}
        <div className="divide-y divide-border/20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}