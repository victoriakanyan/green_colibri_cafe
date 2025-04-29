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
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const scrollSpeed = 0.3;

  const images = [
    { src: "/greenColCaf1.webp" },
    { src: "/greenColCaf2.webp" },
    { src: "/greenColCaf3.jpeg" },
    { src: "/greenColCaf4.jpg" },
    { src: "/greenColCaf10.jpeg" },
    { src: "/greenColCaf5.jpeg" },
    { src: "/greenColCaf14.jpg" },
    { src: "/greenColCaf11.jpeg" },
    { src: "/greenColCaf8.jpeg" },
    { src: "/greenColCaf9.jpeg" },
    { src: "/greenColCaf12.jpeg" },
    { src: "/greenColCaf13.jpeg" },
    { src: "/greenColCaf7.jpeg" },
    { src: "/greenColCaf15.jpeg" },
  ];

  const loopImages = [...images, ...images];

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

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleUserScrollStart = () => {
      setIsUserScrolling(true);
      setIsPaused(true);
      gallery.style.scrollSnapType = "x mandatory";
      gallery.style.scrollBehavior = "smooth";
    };

    const handleUserScrollEnd = () => {
      setTimeout(() => {
        setIsUserScrolling(false);
        setIsPaused(false);
      }, 1000);
    };

    gallery.addEventListener("touchstart", handleUserScrollStart);
    gallery.addEventListener("mousedown", handleUserScrollStart);
    gallery.addEventListener("touchend", handleUserScrollEnd);
    gallery.addEventListener("mouseup", handleUserScrollEnd);

    const animate = () => {
      if (!isPaused && !isUserScrolling) {
        gallery.style.scrollSnapType = "none";
        gallery.style.scrollBehavior = "auto";
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
      gallery.removeEventListener("touchstart", handleUserScrollStart);
      gallery.removeEventListener("mousedown", handleUserScrollStart);
      gallery.removeEventListener("touchend", handleUserScrollEnd);
      gallery.removeEventListener("mouseup", handleUserScrollEnd);
    };
  }, [isPaused, isUserScrolling]);

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
            className="flex gap-6 overflow-x-auto no-scrollbar px-8 touch-pan-x"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {loopImages.map((image, i) => (
              <div
                key={i}
                className="relative min-w-[250px] md:min-w-[300px] aspect-square rounded-xl overflow-hidden flex-shrink-0 group transform transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out"
                />
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
  );
}
