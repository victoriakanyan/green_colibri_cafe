"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useIsMobile from "@/hooks/use-mobile";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-green-100/80 overflow-hidden"
    >
      {/* No CoffeeBeans here */}

      {/* Blurred Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-300 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] w-[500px] h-[500px] bg-green-200 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-400 opacity-20 rounded-full blur-2xl" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-24 gap-12">
        {/* Text Content */}
        <div className="text-left max-w-2xl">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-green-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Green Colibri Cafe
          </motion.h1>

          <motion.p
            className="mt-6 text-xl md:text-2xl text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A pet-friendly, sustainable cafe in the heart of Nicosia — where
            good vibes and green values meet.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white shadow-lg text-lg px-8 py-4"
            >
              <Link href="#about">
                Learn More
                <ChevronDown className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Rotating Coffee Cup */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: isMobile ? 50 : 30,
            ease: "linear",
          }}
          className="w-[280px] h-[280px] md:w-[480px] md:h-[480px] flex items-center justify-center"
          style={{ transformOrigin: "center" }}
        >
          <Image
            src="/coffee-cup.png"
            alt="Rotating coffee cup"
            width={480}
            height={480}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
