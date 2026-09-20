"use client"

import type { ProjectItem } from "@/types/project"
import { ProjectTag } from "./project-tag"
import { GithubPill } from "@/components/ui/github-pill"

interface ProjectDetailsProps {
  project: ProjectItem
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { title, subtitle, tags, description, gitLink } = project

  return (
    <div className="flex flex-col justify-between space-y-4 sm:space-y-6 max-w-xl">
      {/* Header & Tags */}
      <div>
        {subtitle && (
          <p className="font-heading italic text-muted-foreground text-lg sm:text-xl mb-1 select-none">
            {subtitle}
          </p>
        )}
        <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-medium tracking-tight">
          {title}
        </h3>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3 sm:pt-4">
            {tags.map((tag) => (
              <ProjectTag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>

      {/* Description Content */}
      <div className="space-y-3 text-muted-foreground font-sans text-sm sm:text-base lg:text-[17px] leading-relaxed">
        {description.lead && (
          <p className="text-foreground/90 font-medium leading-relaxed">
            {description.lead}
          </p>
        )}

        {description.paragraphs.map((p, idx) => (
          <p key={idx} className="leading-relaxed">
            {p}
          </p>
        ))}

        {description.bulletPoints && description.bulletPoints.length > 0 && (
          <ul className="space-y-1.5 pl-4 list-disc marker:text-primary">
            {description.bulletPoints.map((bp, idx) => (
              <li key={idx} className="leading-relaxed text-sm sm:text-base">
                {bp}
              </li>
            ))}
          </ul>
        )}

        {description.footer && (
          <p className="text-foreground font-medium italic pt-1">
            {description.footer}
          </p>
        )}
      </div>

      {/* GitHub Button */}
      <div className="pt-2">
        <GithubPill href={gitLink} />
      </div>
    </div>
  )
}

