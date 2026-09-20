"use client"

import type { ProjectItem } from "@/types/project"
import { GostarPreview } from "./previews/gostar-preview"
import { KanaMasterPreview } from "./previews/kana-master-preview"
import { AnimeSentryPreview } from "./previews/anime-sentry-preview"
import { LiveDemoButton } from "./live-demo-button"
import Image from "next/image"

interface ProjectPreviewProps {
  project: ProjectItem
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  switch (project.previewType) {
    case "gostar":
      return <GostarPreview prodLink={project.prodLink} />
    case "kana-master":
      return <KanaMasterPreview prodLink={project.prodLink} />
    case "anime-sentry":
      return <AnimeSentryPreview prodLink={project.prodLink} />
    default:
      return (
        <div className="relative rounded-3xl border border-border/40 bg-card/40 p-4 sm:p-6 shadow-xl overflow-hidden min-h-[220px] flex items-center justify-center">
          {project.customImage ? (
            <Image
              src={project.customImage}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl object-cover"
            />
          ) : (
            <div className="text-center">
              <p className="text-lg font-heading font-semibold text-foreground">
                {project.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Interactive Preview</p>
            </div>
          )}
          {project.prodLink && (
            <div className="absolute bottom-4 right-4">
              <LiveDemoButton href={project.prodLink} size="md" />
            </div>
          )}
        </div>
      )
  }
}
