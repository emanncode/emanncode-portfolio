import { cn } from "@/lib/utils"
import type { SkillCardProps } from "@/types/skill"

export function SkillCard({
  title,
  technologies,
  variant = "outline",
  className,
  textClassName,
}: SkillCardProps) {
  const isSolid = variant === "solid"

  return (
    <div
      className={cn(
        "rounded-3xl sm:rounded-[29px] py-5 px-6 sm:px-8 flex gap-3 sm:gap-4 flex-col transition-all duration-300",
        isSolid
          ? "bg-foreground text-background shadow-lg"
          : "border border-muted-foreground/50 text-foreground",
        className
      )}
    >
      <h3 className="text-xl sm:text-[22px] font-bold font-heading">{title}</h3>
      <p
        className={cn(
          "font-medium italic text-sm sm:text-base leading-relaxed font-sans",
          isSolid ? "text-background" : "text-muted-foreground",
          textClassName || "max-w-xl"
        )}
      >
        {technologies}
      </p>
    </div>
  )
}
