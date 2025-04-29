"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Define Y or X offset based on direction
  const offset =
    direction === "up"
      ? 30
      : direction === "down"
      ? -30
      : direction === "left"
      ? 40
      : -40;

  const motionProps =
    direction === "left" || direction === "right"
      ? { x: offset }
      : { y: offset };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...motionProps }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`transition-opacity ${className}`}
    >
      {children}
    </motion.div>
  );
}
