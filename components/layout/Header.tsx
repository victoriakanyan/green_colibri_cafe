"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = ["about", "menu", "gallery", "contact"];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-emerald-900/60 backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/greenColLogo2.PNG"
            alt="Green Colibri Logo"
            width={40}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="relative text-base text-white font-medium hover:text-lime-300 transition duration-200"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-in Menu (Right) with Glass Effect */}
            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 z-50 h-screen/2 w-32 bg-[linear-gradient(to_bottom,_theme(colors.emerald.950/30)_0%,_theme(colors.emerald.950/90)_50%,_transparent_100%)] px-6 py-24 flex flex-col gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-md font-semibold text-white hover:text-lime-300 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
