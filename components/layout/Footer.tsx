"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FadeInWhenVisible direction="right" delay={0.3}>
      <footer className="bg-green-900 text-white py-6">
        <div className="container px-6 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
          {/* Left: Copyright */}
          <p className="text-sm text-green-100 text-center sm:text-left max-w-[80ch]">
            © {year} Green Colibri Café.{" "}
            <Link
              href="https://ace-portfolio-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200"
            >
              Designed, Developed & Deployed by ACE.
            </Link>
          </p>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="https://www.instagram.com/green__colibri/"
                aria-label="Green Colibri Instagram"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="https://www.facebook.com/greencolibrispecialtycoffee"
                aria-label="Green Colibri Facebook"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </FadeInWhenVisible>
  );
}
