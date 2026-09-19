import type { WorkItem } from "@/types/work"

interface WorkRowProps {
  work: WorkItem
}

export function WorkRow({ work }: WorkRowProps) {
  return (
    <div className="group flex flex-col cursor-default border-b first:border-t border-muted-foreground/30 py-5 sm:py-7 lg:py-9 transition-colors duration-300 hover:bg-foreground hover:text-background">
      <div className="px-[8%] grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 items-start md:items-center">
        {/* Column 1: Date & Duration */}
        <div className="flex flex-row md:flex-col items-baseline md:items-start justify-between md:justify-center gap-2 md:col-span-3 lg:col-span-3">
          <p className="text-base sm:text-lg lg:text-xl font-medium tracking-normal text-foreground group-hover:text-background transition-colors duration-300">
            {work.date}
          </p>
          <p className="italic text-xs sm:text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-300">
            {work.time}
          </p>
        </div>

        {/* Column 2: Company */}
        <div className="md:col-span-4 lg:col-span-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-background transition-colors duration-300">
            {work.company}
          </h3>
        </div>

        {/* Column 3: Role & Tech Stack */}
        <div className="flex flex-col md:items-end md:text-right gap-1 md:col-span-5 lg:col-span-5">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground group-hover:text-background transition-colors duration-300">
            {work.position}
          </h3>
          <p className="italic text-xs sm:text-sm lg:text-base text-muted-foreground group-hover:text-background/70 transition-colors duration-300">
            {work.lang}
          </p>
        </div>
      </div>
    </div>
  )
}
