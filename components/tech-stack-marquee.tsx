"use client";

import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
  blurb: string;
  darkInvert?: boolean;
}

export const STACK: TechStackItem[] = [
  {
    name: "Next.js",
    icon: "/tech-icons/nextjs.svg",
    color: "#E5E5E5",
    blurb: "SSR and routing for production-grade frontends",
  },
  {
    name: "React",
    icon: "/tech-icons/react.svg",
    color: "#61DAFB",
    blurb: "Component-driven UIs for web and mobile",
  },
  {
    name: "TypeScript",
    icon: "/tech-icons/typescript.svg",
    color: "#3178C6",
    blurb: "Type safety across every project",
  },
  {
    name: "Go",
    icon: "/tech-icons/go.svg",
    color: "#00ADD8",
    blurb: "Fast, typed APIs powering Uniflow",
  },
  {
    name: "PHP",
    icon: "/tech-icons/php.svg",
    color: "#8892BF",
    blurb: "Backend logic for client and internship work",
  },
  {
    name: "PostgreSQL",
    icon: "/tech-icons/postgresql.svg",
    color: "#4169E1",
    blurb: "Relational data for real-time platforms",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech-icons/tailwindcss.svg",
    color: "#38BDF8",
    blurb: "Utility-first styling, shipped fast",
  },
  {
    name: "GitHub",
    icon: "/tech-icons/github.svg",
    color: "#FFFFFF",
    blurb: "Version control, CI/CD, and repository workflows",
    darkInvert: true,
  },
  {
    name: "Vercel",
    icon: "/tech-icons/vercel.svg",
    color: "#FFFFFF",
    blurb: "Zero-config deployments and serverless edge hosting",
    darkInvert: true,
  },
  {
    name: "Vue",
    icon: "/tech-icons/vue.svg",
    color: "#4FC08D",
    blurb: "Progressive framework for reactive user interfaces",
  },
  {
    name: "React Native",
    icon: "/tech-icons/reactnative.svg",
    color: "#61DAFB",
    blurb: "Cross-platform mobile builds with Expo",
  },
  {
    name: "SQL",
    icon: "/tech-icons/sql.svg",
    color: "#00618A",
    blurb: "Database querying, schema design, and data modeling",
  },
  {
    name: "Framer",
    icon: "/tech-icons/framer.svg",
    color: "#0055FF",
    blurb: "Interactive motion and fluid micro-animations",
    darkInvert: true,
  },
];

interface StackCardProps {
  item: TechStackItem;
  variant: "link" | "resume";
}

function StackCard({ item, variant }: StackCardProps) {
  const isResume = variant === "resume";

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center gap-4 rounded-full px-6 py-4 select-none pointer-events-none transition-none",
        isResume
          ? "border-2 border-foreground bg-foreground text-background"
          : "border border-muted-foreground/50 bg-transparent text-muted-foreground "
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
  );
}

interface MarqueeRowProps {
  items: TechStackItem[];
  direction?: "left" | "right";
  speed?: number;
  startVariant?: "link" | "resume";
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 38,
  startVariant = "link",
}: MarqueeRowProps) {
  // duplicate the row so the loop has no visible seam
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden pointer-events-none py-0.5 select-none">
      <div
        className="flex w-max gap-4"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {track.map((item, i) => {
          const isEven = i % 2 === 0;
          const variant = startVariant === "link"
            ? (isEven ? "link" : "resume")
            : (isEven ? "resume" : "link");

          return (
            <StackCard
              item={item}
              variant={variant}
              key={`${item.name}-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}

interface TechStackMarqueeProps {
  className?: string;
}

export default function TechStackMarquee({ className }: TechStackMarqueeProps) {
  const half = Math.ceil(STACK.length / 2);
  const rowA = STACK.slice(0, half);
  const rowB = STACK.slice(half);

  return (
    <section className={cn("relative w-full bg-background pt-2 pb-6 select-none", className)}>
      {/* Full protective overlay covering the whole marquee container */}
      <div className="absolute inset-0 z-30 pointer-events-auto cursor-default select-none" />

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>

      <div className="space-y-4 pointer-events-none select-none">
        <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow items={rowA} direction="left" speed={34} startVariant="link" />
        </div>
        <div className="mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow items={rowB} direction="right" speed={30} startVariant="resume" />
        </div>
      </div>
    </section>
  );
}