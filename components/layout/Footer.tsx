"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Copyright and Link */}
        <p className="text-sm text-green-100 text-center sm:text-left">
          © {new Date().getFullYear()} Green Colibri Cafe.{" "}
          <Link
            href="https://ace-portfolio-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Designed, Developed and Deployed by ACE.
          </Link>
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link
              href="https://www.instagram.com/green__colibri/"
              className="text-green-100 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
            <Link
              href="https://www.facebook.com/greencolibrispecialtycoffee"
              className="text-green-100 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
