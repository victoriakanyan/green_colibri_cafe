"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible"

export default function Gallery() {
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
      setIsPaused(true)
      setTimeout(() => {
        setIsPaused(false)
      }, 2000) // Pause 2 seconds after manual scroll
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

  const images = [
    { alt: "Cafe interior" },
    { alt: "Specialty coffee" },
    { alt: "Barista at work" },
    { alt: "Healthy food" },
    { alt: "Outdoor seating" },
    { alt: "Coffee preparation" },
  ]

  return (
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
  )
}
