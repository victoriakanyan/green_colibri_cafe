"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Coffee, Utensils, Clock, MapPin, Instagram, Facebook, ChevronDown, Menu, X, ArrowLeft, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

const FadeInWhenVisible = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  const galleryRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 300
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      // Pause auto-scroll when user manually scrolls
      setIsPaused(true)
      setTimeout(() => {
        setIsPaused(false)
      }, 2000) // 2 seconds pause
    }
  }

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const scrollSpeed = 1 // pixels per frame

    const scroll = () => {
      if (!isPaused) {
        if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
          gallery.scrollLeft = 0
        } else {
          gallery.scrollLeft += scrollSpeed
        }
      }
      animationFrameRef.current = requestAnimationFrame(scroll)
    }

    animationFrameRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isPaused])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const images = [
    { alt: "Cafe interior" },
    { alt: "Specialty coffee" },
    { alt: "Barista at work" },
    { alt: "Healthy food" },
    { alt: "Outdoor seating" },
    { alt: "Coffee preparation" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        {/* Header unchanged */}
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-16 px-4"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Mobile menu unchanged */}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* other sections until gallery */}

        <section id="gallery" className="py-20 bg-white overflow-hidden relative">
          <div className="container px-4 md:px-6">
            <FadeInWhenVisible>
              <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-green-800 mb-4">Gallery</h2>
                <p className="text-gray-600 max-w-2xl">
                  Take a peek inside our cafe and discover the Green Colibri experience.
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md"
                onClick={() => scrollGallery("left")}
              >
                <ArrowLeft className="h-6 w-6 text-green-700" />
              </Button>

              <div
                ref={galleryRef}
                className="flex gap-6 overflow-x-auto no-scrollbar px-8 scroll-smooth"
                style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
              >
                {[...images, ...images].map((image, index) => (
                  <div
                    key={index}
                    className="relative min-w-[250px] md:min-w-[300px] aspect-square overflow-hidden rounded-lg flex-shrink-0 group"
                  >
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Gallery+Image+${(index % images.length) + 1}`}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="sr-only">View image</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md"
                onClick={() => scrollGallery("right")}
              >
                <ArrowRight className="h-6 w-6 text-green-700" />
              </Button>
            </div>
          </div>
        </section>

        {/* remaining sections */}
      </main>

      {/* Footer unchanged */}
    </div>
  )
}
