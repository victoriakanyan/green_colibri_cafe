"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  return (
    <motion.section
      ref={heroRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ opacity, scale, y }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg?height=1080&width=1920&text=Coffee+Shop+Interior"
          alt="Coffee shop interior"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-6 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our purpose is to leave a piece of ourselves, our soul, creativity and love
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Strictly pet friendly sustainable cafe in the heart of Nicosia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild className="mt-4 bg-green-700 hover:bg-green-800 text-white">
            <Link href="#about">
              Learn More
              <ChevronDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
