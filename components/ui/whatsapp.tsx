"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface WhatsappIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WhatsappIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BUBBLE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const PHONE_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    rotate: [0, -10, 10, -6, 6, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const WhatsappIcon = forwardRef<WhatsappIconHandle, WhatsappIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const bubbleControls = useAnimation();
    const phoneControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          bubbleControls.start("animate");
          phoneControls.start("animate");
        },
        stopAnimation: () => {
          bubbleControls.start("normal");
          phoneControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          bubbleControls.start("animate");
          phoneControls.start("animate");
        }
      },
      [bubbleControls, onMouseEnter, phoneControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          bubbleControls.start("normal");
          phoneControls.start("normal");
        }
      },
      [bubbleControls, onMouseLeave, phoneControls]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={bubbleControls}
            d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"
            initial="normal"
            variants={BUBBLE_VARIANTS}
          />
          <motion.path
            animate={phoneControls}
            d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"
            initial="normal"
            style={{ transformOrigin: "12px 12px" }}
            variants={PHONE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

WhatsappIcon.displayName = "WhatsappIcon";

export { WhatsappIcon };

