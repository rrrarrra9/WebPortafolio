"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

import {
  Slot,
  type WithAsChild,
} from "@/components/animate-ui/primitives/animate/slot";

type ButtonProps = WithAsChild<
  HTMLMotionProps<"button"> & {
    hoverScale?: number;
    tapScale?: number;
  }
>;

function Button({
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  ...props
}: ButtonProps) {
  const reduced = useReducedMotion();
  const Component = asChild ? Slot : motion.button;

  return (
    <Component
      data-slot="button"
      whileTap={{ scale: reduced ? 1 : tapScale }}
      whileHover={{ scale: reduced ? 1 : hoverScale }}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
