import { StackCard } from "@/components/tech-stack/stack-card"
import type { MarqueeRowProps } from "@/types/tech-stack"

export function MarqueeRow({
  items,
  direction = "left",
  speed = 38,
  startVariant = "link",
}: MarqueeRowProps) {
  // duplicate the row so the loop has no visible seam
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden pointer-events-none py-0.5 select-none">
      <div
        className="flex w-max gap-4"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => {
          const isEven = i % 2 === 0
          const variant =
            startVariant === "link"
              ? isEven
                ? "link"
                : "resume"
              : isEven
                ? "resume"
                : "link"

          return (
            <StackCard
              item={item}
              variant={variant}
              key={`${item.name}-${i}`}
            />
          )
        })}
      </div>
    </div>
  )
}
