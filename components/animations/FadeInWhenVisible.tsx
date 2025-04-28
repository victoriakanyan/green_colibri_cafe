"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInWhenVisibleProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInWhenVisible({ children, delay = 0, className = "" }: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
