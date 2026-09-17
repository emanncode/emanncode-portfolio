"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface LinktreeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LinktreeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TRUNK_VARIANTS: Variants = {
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
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const BRANCH_VARIANTS: Variants = {
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
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

const LinktreeIcon = forwardRef<LinktreeIconHandle, LinktreeIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const trunkControls = useAnimation();
    const branchControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          trunkControls.start("animate");
          branchControls.start("animate");
        },
        stopAnimation: () => {
          trunkControls.start("normal");
          branchControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          trunkControls.start("animate");
          branchControls.start("animate");
        }
      },
      [branchControls, onMouseEnter, trunkControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          trunkControls.start("normal");
          branchControls.start("normal");
        }
      },
      [branchControls, onMouseLeave, trunkControls]
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
          {/* Vertical Trunk */}
          <motion.path
            animate={trunkControls}
            d="M12 2v20"
            initial="normal"
            variants={TRUNK_VARIANTS}
          />
          {/* Top Arrows / Branches */}
          <motion.path
            animate={branchControls}
            d="M12 2l5 5M12 2l-5 5"
            initial="normal"
            variants={BRANCH_VARIANTS}
          />
          {/* Horizontal Cross Branches */}
          <motion.path
            animate={branchControls}
            d="M4 11h16"
            initial="normal"
            variants={BRANCH_VARIANTS}
          />
          {/* Lower Diagonal Branches */}
          <motion.path
            animate={branchControls}
            d="M12 11l6 6M12 11l-6 6"
            initial="normal"
            variants={BRANCH_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

LinktreeIcon.displayName = "LinktreeIcon";

export { LinktreeIcon };

