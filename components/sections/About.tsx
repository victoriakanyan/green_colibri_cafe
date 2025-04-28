"use client"

import Image from "next/image"
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible"
import { Coffee, Utensils } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <FadeInWhenVisible>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-green-800">Our Story</h2>
              <p className="text-gray-600">
                Green Colibri Cafe was born from a passion for exceptional coffee and a commitment to sustainability.
                Located in the heart of Nicosia, we've created a space where coffee lovers can experience the finest
                specialty beans, prepared with precision and served with heart.
              </p>
              <p className="text-gray-600">
                Our mission is simple: to serve exceptional coffee while fostering community and promoting eco-conscious
                practices. From our biodegradable packaging to our locally sourced ingredients, every aspect of Green
                Colibri reflects our dedication to the planet and our customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-2">
                    <Coffee className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-sm font-medium">Specialty Coffee</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-2">
                    <Utensils className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-sm font-medium">Wholesome Food</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Barista+Preparing+Coffee"
                alt="Barista preparing coffee"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
