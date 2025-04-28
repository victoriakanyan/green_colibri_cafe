"use client"

import { Coffee, Utensils } from "lucide-react"
import Image from "next/image"
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible"
import { motion } from "framer-motion"

export default function MenuSection() {
  const coffeeMenu = [
    {
      title: "Panama Geisha",
      description: "Exceptional floral and fruity notes with a tea-like body",
      price: "€6.50",
    },
    {
      title: "Ethiopian Yirgacheffe",
      description: "Bright acidity with citrus and berry notes",
      price: "€4.50",
    },
    {
      title: "Colombian Supremo",
      description: "Rich, full-bodied with caramel sweetness",
      price: "€4.00",
    },
    {
      title: "House Blend",
      description: "Balanced, smooth with chocolate undertones",
      price: "€3.50",
    },
  ]

  const foodMenu = [
    {
      title: "Mediterranean Wrap",
      description: "Hummus, fresh vegetables, and feta in a whole grain wrap",
      price: "€7.50",
    },
    {
      title: "Avocado Toast",
      description: "Smashed avocado, cherry tomatoes, and microgreens on sourdough",
      price: "€6.50",
    },
    {
      title: "Quinoa Salad Bowl",
      description: "Mixed greens, quinoa, roasted vegetables, and tahini dressing",
      price: "€8.50",
    },
    {
      title: "Vegan Carrot Cake",
      description: "Sugar-free, moist carrot cake with cashew frosting",
      price: "€4.50",
    },
  ]

  return (
    <section id="menu" className="py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our selection of specialty coffees and wholesome food, crafted with care using the finest
              ingredients.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Coffee Menu */}
          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                Coffee Selection
              </h3>

              <div className="grid gap-6">
                {coffeeMenu.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between group items-center p-3 rounded-lg hover:bg-green-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=48&width=48&text=Coffee+${index + 1}`}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium group-hover:text-green-700 transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="font-medium">{item.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Food Menu */}
          <FadeInWhenVisible delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Food & Treats
              </h3>

              <div className="grid gap-6">
                {foodMenu.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between group items-center p-3 rounded-lg hover:bg-green-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=48&width=48&text=Food+${index + 1}`}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium group-hover:text-green-700 transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="font-medium">{item.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
