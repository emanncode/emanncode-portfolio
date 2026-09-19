import Image from "next/image"

interface AboutImageProps {
  className?: string
}

export function AboutImage({ className = "" }: AboutImageProps) {
  return (
    <div
      className={`relative w-full h-80 sm:h-105 lg:h-full min-h-80 sm:min-h-100 lg:min-h-130 bg-blend-luminosity bg-emann bg-center bg-cover bg-no-repeat bg-primary rounded-3xl sm:rounded-4xl shadow-xl border border-border/30 overflow-hidden ${className}`}
    >
      {/* Logo sitting at top right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
        <Image
          src="/emannlogonobg.png"
          alt="Logo"
          width={60}
          height={60}
          className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] select-none transition-transform duration-300 hover:scale-110"
          priority
        />
      </div>
    </div>
  )
}
