"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Coffee, Utensils } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container px-6 md:px-12">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <FadeInWhenVisible>
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-green-800 tracking-tight">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Green Colibri Cafe was born from a love of specialty coffee and
                a deep commitment to sustainability. Nestled in the heart of
                Nicosia, we've created a welcoming space for coffee lovers and
                conscious consumers alike.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe in doing things differently — from biodegradable
                packaging and local sourcing to mindful hospitality. Every cup
                we serve reflects our dedication to quality, community, and the
                planet.
              </p>

              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-green-100">
                    <Coffee className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-sm font-medium text-green-900">
                    Specialty Coffee
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-green-100">
                    <Utensils className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-sm font-medium text-green-900">
                    Wholesome Food
                  </span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Image */}
          <FadeInWhenVisible delay={0.2}>
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/greenColCaf6.jpg"
                alt="Barista preparing coffee"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
