"use client";

import CoffeeBeansBackground from "@/components/CoffeeBeansBackground";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-green-50 overflow-hidden">
      {/* Decorative Coffee Beans Background */}
      <CoffeeBeansBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <FadeInWhenVisible>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-green-800 leading-tight">
                About Green Colibri Cafe
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Green Colibri Cafe is a sustainable and pet-friendly space
                dedicated to bringing you the freshest coffee and the warmest
                atmosphere.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We pride ourselves on using eco-friendly practices, locally
                sourced ingredients, and welcoming pets with open arms.
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Image Content */}
          <FadeInWhenVisible delay={0.3}>
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="/greenColCaf6.jpg"
                alt="Inside the Green Colibri Cafe"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
