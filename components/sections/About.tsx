"use client";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-green-50 z-10">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <FadeInWhenVisible>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-green-800 leading-tight">
                About Green Colibri Cafe
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Green Colibri Cafe is a sustainable and pet-friendly space
                dedicated to bringing you the freshest coffee and the warmest
                atmosphere.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We pride ourselves on using eco-friendly practices, locally
                sourced ingredients, and welcoming pets with open arms.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Image Content */}
          <FadeInWhenVisible delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-lg group">
                <Image
                  src="/greenColLogo2.png"
                  alt="Inside the Green Colibri Cafe"
                  fill
                  className="object-contain transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
