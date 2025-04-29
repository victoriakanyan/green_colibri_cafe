"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FadeInWhenVisible direction="right" delay={0.3}>
      <footer className="bg-green-900 text-white pt-10 pb-8">
        <div className="container px-6 flex flex-col sm:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          {/* Left: Copyright */}
          <div className="text-center sm:text-left space-y-2">
            <p className="text-sm text-green-100 max-w-[80ch]">
              © {year} Green Colibri Cafe.{" "}
              <Link
                href="https://ace-portfolio-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors duration-200"
              >
                Designed, Developed & Deployed by ACE.
              </Link>
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href="https://www.instagram.com/green__colibri/"
                aria-label="Visit Green Colibri Cafe on Instagram"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6 md:h-7 md:w-7" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href="https://www.facebook.com/greencolibrispecialtycoffee"
                aria-label="Visit Green Colibri Cafe on Facebook"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6 md:h-7 md:w-7" />
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </FadeInWhenVisible>
  );
}
