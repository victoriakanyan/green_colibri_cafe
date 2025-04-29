"use client";

import CoffeeBeansBackground from "@/components/CoffeeBeansBackground"; // 👈 import
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-green-50 overflow-hidden">
      {/* Coffee Beans */}
      <CoffeeBeansBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-green-800">
                About Green Colibri Cafe
              </h2>
              <p className="text-gray-600 text-lg">
                Green Colibri Cafe is a sustainable and pet-friendly space
                dedicated to bringing you the freshest coffee and the warmest atmosphere.
              </p>
              <p className="text-gray-600 text-lg">
                We pride ourselves on using eco-friendly practices, locally sourced ingredients, and welcoming pets with open arms.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="relative w-full h-[400px]">
              <Image
                src="/greenColCaf6.jpg"
                alt="Inside the Green Colibri Cafe"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
