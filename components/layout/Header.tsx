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
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Green Colibri Logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="text-xl font-semibold text-green-700">Green Colibri</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {["about", "menu", "gallery", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-sm font-medium hover:text-green-700 transition-colors"
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
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-16 px-4"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {["about", "menu", "gallery", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-xl font-medium py-3 hover:text-green-700 transition-colors"
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
