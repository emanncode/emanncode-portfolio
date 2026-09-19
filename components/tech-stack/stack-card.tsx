import Image from "next/image"
import { cn } from "@/lib/utils"
import type { StackCardProps } from "@/types/tech-stack"

export function StackCard({ item, variant }: StackCardProps) {
  const isResume = variant === "resume"

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center gap-4 rounded-full px-6 py-4 select-none pointer-events-none transition-none",
        isResume
          ? "border-2 border-foreground bg-foreground text-background"
          : "border border-muted-foreground/50 bg-transparent text-muted-foreground"
      )}
    >
      {/* Invisible protective overlay div covering the whole card */}
      <div className="absolute inset-0 z-20 rounded-full select-none" />

      {/* Actual Technology Logo */}
      <div
        className={cn(
          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-2",
          isResume ? "bg-background/10" : "bg-foreground/5 border border-foreground/10"
        )}
      >
        <Image
          src={item.icon}
          alt={item.name}
          width={24}
          height={24}
          unoptimized
          className={cn(
            "h-6 w-6 object-contain",
            !isResume && item.darkInvert && "invert"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-w-0 pr-3">
        <p
          className={cn(
            "font-sans text-base font-semibold tracking-wide",
            isResume ? "text-background" : "text-foreground"
          )}
        >
          {item.name}
        </p>
        <p
          className={cn(
            "mt-0.5 font-sans text-xs tracking-wider line-clamp-1 italic",
            isResume ? "text-background/80" : "text-muted-foreground"
          )}
        >
          {item.blurb}
        </p>
      </div>
    </div>
  )
}
