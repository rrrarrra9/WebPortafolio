"use client";

import * as React from "react";
import { motion, isMotionComponent, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// Static components retain identity across renders (React Compiler compatible).
const motionTags = {
  a: motion.a,
  button: motion.button,
  div: motion.div,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  article: motion.article,
  section: motion.section,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  aside: motion.aside,
  svg: motion.svg,
  ul: motion.ul,
  li: motion.li,
};

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  "ref"
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  // React 19 may pass a lazy RSC child. Resolve it like Radix Slot does.
  if (
    children && typeof children === "object" &&
    children.$$typeof === Symbol.for("react.lazy") &&
    children._payload && typeof children._payload.then === "function"
  ) {
    children = React.use(children._payload);
  }
  if (!React.isValidElement(children)) return null;
  const Base =
    typeof children.type === "string"
      ? motionTags[children.type as keyof typeof motionTags]
      : isMotionComponent(children.type)
        ? (children.type as React.ElementType)
        : null;
  if (!Base)
    throw new Error(
      "Animate UI Slot requires a supported DOM element or an existing Motion component.",
    );

  const { ref: childRef, ...childProps } = children.props as AnyProps;

  const mergedProps = mergeProps(childProps, props);

  return (
    <Base {...mergedProps} ref={mergeRefs(childRef as React.Ref<T>, ref)} />
  );
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
