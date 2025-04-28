"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Green Colibri Logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-xl font-semibold">Green Colibri</span>
            </Link>
            <p className="text-green-100 text-sm">Specialty coffee with soul, in the heart of Nicosia.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {["about", "menu", "gallery", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-sm text-green-100 hover:text-white transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="font-medium mb-4">Visit Us</h3>
            <address className="text-sm text-green-100 not-italic">
              123 Coffee Street
              <br />
              Nicosia, Cyprus
              <br />
              <br />
              Monday - Friday: 8:00 AM - 8:00 PM
              <br />
              Saturday - Sunday: 9:00 AM - 6:00 PM
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-green-100">
            © {new Date().getFullYear()} Green Colibri Cafe. All rights reserved.
          </p>

          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link
                href="https://instagram.com"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <Link
                href="https://facebook.com"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
