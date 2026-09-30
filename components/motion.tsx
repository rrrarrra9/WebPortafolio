"use client";

import { useSyncExternalStore, type ReactElement, type ReactNode } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Slot } from "@/components/animate-ui/primitives/animate/slot";
import {
  ScrollProgress,
  ScrollProgressProvider,
} from "@/components/animate-ui/primitives/animate/scroll-progress";

const subscribeHydration = () => () => {};
const clientHydrated = () => true;
const serverHydrated = () => false;

function useMotionPreference() {
  const hydrated = useSyncExternalStore(subscribeHydration, clientHydrated, serverHydrated);
  const reduced = useReducedMotion();
  return hydrated && Boolean(reduced);
}

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Mantiene el contenido visible en el HTML inicial, incluso sin JavaScript.
export function Reveal({
  children,
  delay = 0,
  inView = true,
}: {
  children: ReactElement;
  delay?: number;
  inView?: boolean;
}) {
  const reduced = useMotionPreference();
  return (
    <Fade
      data-reveal=""
      asChild
      inView={inView}
      inViewOnce
      initialOpacity={1}
      delay={reduced ? 0 : delay}
      variants={{
        hidden: { opacity: 1, y: reduced ? 0 : 22 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={
        reduced
          ? { duration: 0 }
          : { type: "spring", stiffness: 90, damping: 20 }
      }
    >
      {children}
    </Fade>
  );
}

export function MagneticAction({ children }: { children: ReactElement }) {
  const reduced = useMotionPreference();
  return (
    <Magnetic onlyOnHover strength={reduced ? 0 : 0.12} range={80} disableOnTouch>
      {children}
    </Magnetic>
  );
}

export function Floating({
  children,
  delay = 0,
}: {
  children: ReactElement;
  delay?: number;
}) {
  const reduced = useMotionPreference();
  return (
    <Slot
      data-float=""
      initial={false}
      animate={{ y: reduced ? 0 : [0, -6, 0] }}
      transition={{
        duration: reduced ? 0 : 2,
        repeat: reduced ? 0 : 1,
        delay: reduced ? 0 : delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </Slot>
  );
}

export function ReadingProgress() {
  const reduced = useMotionPreference();
  return (
    <ScrollProgressProvider
      global
      transition={
        reduced
          ? { stiffness: 1000, damping: 100 }
          : { stiffness: 120, damping: 30 }
      }
    >
      <ScrollProgress
        mode="scaleX"
        className="reading-progress"
        aria-hidden="true"
      />
    </ScrollProgressProvider>
  );
}
