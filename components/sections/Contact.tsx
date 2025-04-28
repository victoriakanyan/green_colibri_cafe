"use client"

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible"
import { motion } from "framer-motion"
import { MapPin, Clock, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <FadeInWhenVisible>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-green-800">Contact Us</h2>
              <p className="text-gray-600">We'd love to hear from you! Drop by our cafe or send us a message.</p>

              <div className="space-y-4">
                {/* Address */}
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MapPin className="h-5 w-5 text-green-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Coffee Street, Nicosia, Cyprus</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Clock className="h-5 w-5 text-green-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-4 pt-2">
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                    <Link
                      href="https://instagram.com"
                      className="text-gray-600 hover:text-green-700 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                    <Link
                      href="https://facebook.com"
                      className="text-gray-600 hover:text-green-700 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4 mt-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white rounded-md p-2 font-medium">
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </FadeInWhenVisible>

          {/* Google Map */}
          <FadeInWhenVisible delay={0.3}>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26259.99679860495!2d33.34966!3d35.17539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3c807fc4146e!2sNicosia%2C%20Cyprus!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Colibri Cafe location"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
