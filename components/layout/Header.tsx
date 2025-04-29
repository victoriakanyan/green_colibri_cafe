"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-24 items-center justify-between"> {/* Increased header height */}
        <Link href="/" className="flex items-center gap-4"> {/* Bigger gap */}
          <div className="relative w-24 h-24"> {/* Even larger logo size */}
            <Image
              src="/greenColBird.PNG"
              alt="Green Colibri Logo"
              fill
              className="object-cover rounded-none" // Fully fill the container, no rounding
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">
          {["about", "menu", "gallery", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-base font-medium hover:text-green-700 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-24 px-4" // Match new header height
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col gap-8 text-center mt-8">
              {["about", "menu", "gallery", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-2xl font-medium py-4 hover:text-green-700 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
