import { cn } from "@/lib/utils"

interface ProjectTagProps {
  label: string
  className?: string
}

export function ProjectTag({ label, className }: ProjectTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-muted-foreground/30 bg-card/30 px-3.5 py-1 text-xs sm:text-sm font-sans font-medium text-muted-foreground transition-all duration-200 hover:border-foreground/70 hover:text-foreground hover:bg-card/60 select-none",
        className
      )}
    >
      {label}
    </span>
  )
}

export default ProjectTag