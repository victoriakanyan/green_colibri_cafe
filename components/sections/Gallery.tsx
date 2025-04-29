"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollSpeed = 0.5; // Adjust for smoother or faster movement

  const images = [
    { src: "/greenColCaf1.webp", alt: "Cafe Interior" },
    { src: "/greenColCaf2.webp", alt: "Specialty Coffee" },
    { src: "/greenColCaf3.jpeg", alt: "Barista at Work" },
    { src: "/greenColCaf4.jpg", alt: "Outdoor Seating" },
    { src: "/greenColCaf5.jpeg", alt: "Coffee and Dessert" },
  ];

  const loopImages = [...images, ...images]; // doubled for infinite effect

  // Manual scroll
  const scrollGallery = (dir: "left" | "right") => {
    if (!galleryRef.current) return;
    const amount = 300;
    galleryRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
    pauseTemporarily();
  };

  const pauseTemporarily = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Smooth autoscroll using requestAnimationFrame
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const animate = () => {
      if (!isPaused) {
        gallery.scrollLeft += scrollSpeed;
        if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
          gallery.scrollLeft = 0;
        }
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isPaused]);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container px-6 md:px-12">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Gallery</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Take a peek inside our space and discover the Green Colibri
              experience.
            </p>
          </div>
        </FadeInWhenVisible>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md"
            onClick={() => scrollGallery("left")}
          >
            <ArrowLeft className="h-6 w-6 text-green-700" />
          </Button>

          {/* Scrollable gallery */}
          <div
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto no-scrollbar px-8"
            style={{ scrollbarWidth: "none", scrollBehavior: "auto" }}
          >
            {loopImages.map((image, i) => (
              <div className="relative min-w-[250px] md:min-w-[300px] aspect-square rounded-xl overflow-hidden flex-shrink-0 group transform transition-transform duration-500 ease-in-out hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-medium px-2 text-center">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
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
  );
}
