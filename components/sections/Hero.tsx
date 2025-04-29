"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-green-100"
    >
      {/* Blurred shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-green-300 opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[500px] h-[500px] bg-green-200 opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-green-400 opacity-30 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex items-center justify-between px-6 md:px-12">
        {/* Left Side Text */}
        <div className="max-w-lg text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-green-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Green Colibri Cafe
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-green-800/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strictly pet friendly sustainable cafe in the heart of Nicosia
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              className="bg-green-700 hover:bg-green-800 text-white"
            >
              <Link href="#about">
                Learn More
                <ChevronDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Side Rotating Image */}
        <div className="hidden md:block w-1/2 h-[400px] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-[600px] h-[600px] flex items-center justify-center"
            style={{ transformOrigin: "center center", y: -100, x: 50 }}
          >
            <Image
              src="/animationCoffeeCup.png"
              alt="Coffee Cup1"
              width={540}
              height={540}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
