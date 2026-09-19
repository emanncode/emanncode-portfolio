"use client"

import { Works } from "@/constants/work"
import { WorkRow } from "@/components/ui/work-row"

export default function Work() {
  return (
    <div className="relative flex flex-col mt-16 sm:mt-24 lg:mt-32">
      <div className="flex items-center justify-end px-[8%] mb-6 sm:mb-8 lg:mb-12">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] font-heading font-bold tracking-wider leading-none text-foreground select-none">
          WORK
        </h2>
      </div>
      <div className="flex flex-col">
        {Works.map((work) => (
          <WorkRow key={work.company} work={work} />
        ))}
      </div>
    </div>
  )
}
