"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface EmailIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface EmailIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const RECT_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const FLAP_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const EmailIcon = forwardRef<EmailIconHandle, EmailIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const rectControls = useAnimation();
    const flapControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          rectControls.start("animate");
          flapControls.start("animate");
        },
        stopAnimation: () => {
          rectControls.start("normal");
          flapControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          rectControls.start("animate");
          flapControls.start("animate");
        }
      },
      [flapControls, onMouseEnter, rectControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          rectControls.start("normal");
          flapControls.start("normal");
        }
      },
      [flapControls, onMouseLeave, rectControls]
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
          <motion.rect
            animate={rectControls}
            height="16"
            initial="normal"
            rx="2"
            variants={RECT_VARIANTS}
            width="20"
            x="2"
            y="4"
          />
          <motion.path
            animate={flapControls}
            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            initial="normal"
            variants={FLAP_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

EmailIcon.displayName = "EmailIcon";

export { EmailIcon };

