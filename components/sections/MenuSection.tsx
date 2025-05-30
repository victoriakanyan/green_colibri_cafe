"use client";

import { Coffee, Utensils, AlertCircle } from "lucide-react";
import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MenuSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setHoveredItem((prev) => (prev === id ? null : id));
  };

  const isTouchDevice = () => {
    return typeof window !== "undefined" && "ontouchstart" in window;
  };

  const coffeeMenu = [
    {
      id: "coffee-1",
      title: "Panama Geisha",
      description: "Exceptional floral and fruity notes with a tea-like body",
      price: "€6.50",
      allergens: "No allergens",
      image: "/greenColCaf9.jpeg",
    },
    {
      id: "coffee-2",
      title: "Ethiopian Yirgacheffe",
      description: "Bright acidity with citrus and berry notes",
      price: "€4.50",
      allergens: "No allergens",
      image: "/greenColCaf5.jpeg",
    },
    {
      id: "coffee-3",
      title: "Colombian Supremo",
      description: "Rich, full-bodied with caramel sweetness",
      price: "€4.00",
      allergens: "Contains caffeine",
      image: "/greenColCaf9.jpeg",
    },
    {
      id: "coffee-4",
      title: "House Blend",
      description: "Balanced, smooth with chocolate undertones",
      price: "€3.50",
      allergens: "Contains caffeine",
      image: "/greenColCaf5.jpeg",
    },
  ];

  const foodMenu = [
    {
      id: "food-1",
      title: "Mediterranean Wrap",
      description: "Hummus, fresh vegetables, and feta in a whole grain wrap",
      price: "€7.50",
      allergens: "Contains dairy, gluten",
      image: "/greenColCaf8.jpeg",
    },
    {
      id: "food-2",
      title: "Avocado Toast",
      description:
        "Smashed avocado, cherry tomatoes, and microgreens on sourdough",
      price: "€6.50",
      allergens: "Contains gluten",
      image: "/greenColCaf10.jpeg",
    },
    {
      id: "food-3",
      title: "Quinoa Salad Bowl",
      description:
        "Mixed greens, quinoa, roasted vegetables, and tahini dressing",
      price: "€8.50",
      allergens: "Contains sesame",
      image: "/greenColCaf8.jpeg",
    },
    {
      id: "food-4",
      title: "Vegan Carrot Cake",
      description: "Sugar-free, moist carrot cake with cashew frosting",
      price: "€4.50",
      allergens: "Contains nuts",
      image: "/greenColCaf10.jpeg",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-green-50">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-green-800 mb-4">
              Our Menu
            </h2>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Discover our selection of specialty coffees and wholesome food,
              crafted with care using the finest ingredients.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid gap-12 md:grid-cols-2 relative">
          {/* Coffee Section */}
          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                Coffee Selection
              </h3>

              <div className="grid gap-6">
                {coffeeMenu.map((item) => (
                  <div
                    key={item.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() =>
                      !isTouchDevice() && setHoveredItem(item.id)
                    }
                    onMouseLeave={() =>
                      !isTouchDevice() && setHoveredItem(null)
                    }
                    onClick={() => handleToggle(item.id)}
                  >
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="font-medium text-green-800">
                        {item.title}
                      </div>
                      <div className="font-medium text-green-900">
                        {item.price}
                      </div>
                    </div>

                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 shadow-xl rounded-lg p-4 z-20"
                      >
                        <div className="relative w-full h-32 rounded-md overflow-hidden mb-3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-red-500 mt-2">
                          <AlertCircle className="h-4 w-4" />
                          {item.allergens}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Food Section */}
          <FadeInWhenVisible delay={0.4}>
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Food & Treats
              </h3>

              <div className="grid gap-6">
                {foodMenu.map((item) => (
                  <div
                    key={item.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() =>
                      !isTouchDevice() && setHoveredItem(item.id)
                    }
                    onMouseLeave={() =>
                      !isTouchDevice() && setHoveredItem(null)
                    }
                    onClick={() => handleToggle(item.id)}
                  >
                    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="font-medium text-green-800">
                        {item.title}
                      </div>
                      <div className="font-medium text-green-900">
                        {item.price}
                      </div>
                    </div>

                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 shadow-xl rounded-lg p-4 z-20"
                      >
                        <div className="relative w-full h-32 rounded-md overflow-hidden mb-3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-red-500 mt-2">
                          <AlertCircle className="h-4 w-4" />
                          {item.allergens}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
