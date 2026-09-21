"use client"

import Image from "next/image"
import type { ProjectItem } from "@/types/project"
import { LiveDemoButton } from "./live-demo-button"
import { cn } from "@/lib/utils"

interface ProjectPreviewProps {
  project: ProjectItem
  className?: string
}

export function ProjectPreview({ project, className }: ProjectPreviewProps) {
  const imageSrc =
    project.image ||
    (project.id === "soldbay"
      ? "/soldbay.png"
      : project.id === "uniflow"
      ? "/uniflow.png"
      : project.id === "ifesquare"
      ? "/ifesquare.png"
      : "/soldbay.png")

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto group", className)}>
      {/* Ambient elevation shadow */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl sm:rounded-4xl bg-gradient-to-b from-white/5 to-black/30 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80" />

      {/* Elevated Image Card */}
      <div className="relative z-10 w-full overflow-hidden rounded-3xl sm:rounded-4xl border border-border/40 bg-card shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.85)] hover:border-foreground/30">
        <Image
          src={imageSrc}
          alt={project.title}
          width={1200}
          height={900}
          className="w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          priority
        />

        {/* Floating Live Demo Button sitting directly on the picture */}
        {project.prodLink && (
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
            <LiveDemoButton href={project.prodLink} size="md" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectPreview
