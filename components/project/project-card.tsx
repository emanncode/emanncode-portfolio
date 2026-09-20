"use client"

import type { ProjectItem } from "@/types/project"
import { ProjectDetails } from "./project-details"
import { ProjectPreview } from "./project-preview"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectItem
  className?: string
  index?: number
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  const isTextLeft = project.align === "left"

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-between gap-8 sm:gap-12 lg:gap-16 py-12 sm:py-16 lg:py-24",
        isTextLeft ? "lg:flex-row" : "lg:flex-row-reverse",
        className
      )}
    >
      {/* Decorative hairline circle framing individual project row */}
      <span
        className={cn(
          "pointer-events-none absolute -z-10 rounded-full border border-muted-foreground/20 aspect-square",
          index % 2 === 0
            ? "-right-20 sm:-right-32 top-1/2 -translate-y-1/2 w-80 sm:w-120 lg:w-160 opacity-30"
            : "-left-20 sm:-left-32 top-1/2 -translate-y-1/2 w-80 sm:w-120 lg:w-160 opacity-30"
        )}
      />

      {/* Editorial Details Column */}
      <div className="w-full lg:w-5/12 flex-1 min-w-0">
        <ProjectDetails project={project} />
      </div>

      {/* Visual Collage Column */}
      <div className="w-full lg:w-7/12 flex-1 min-w-0">
        <ProjectPreview project={project} />
      </div>
    </div>
  )
}

export default ProjectCard