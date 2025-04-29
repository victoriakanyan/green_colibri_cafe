"use client";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="container px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <FadeInWhenVisible>
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-green-800">
                  Contact Us
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We'd love to hear from you — drop by or send us a message!
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin className="h-5 w-5 text-green-700 mt-0.5" />,
                    label: "Address",
                    content: "Agapinoros, Nicosia, 1056",
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-green-700 mt-0.5" />,
                    label: "Opening Hours",
                    content: [
                      "Monday - Friday: 7:00 AM - 5:00 PM",
                      "Saturday: 8:00 AM - 3:00 PM",
                      "Sunday: Closed",
                    ],
                  },
                  {
                    icon: <Phone className="h-5 w-5 text-green-700 mt-0.5" />,
                    label: "Phone",
                    content: "+357 99299395",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-green-800">
                        {item.label}
                      </h3>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p
                            key={i}
                            className="text-gray-600 text-sm leading-relaxed"
                          >
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }}>
                  <Link
                    href="https://www.instagram.com/green__colibri/"
                    aria-label="Follow Green Colibri Cafe on Instagram"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.15, rotate: -5 }}>
                  <Link
                    href="https://www.facebook.com/greencolibrispecialtycoffee"
                    aria-label="Follow Green Colibri Cafe on Facebook"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                </motion.div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6 mt-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-green-800"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      aria-required="true"
                      placeholder="Your name"
                      className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-green-800"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      aria-required="true"
                      placeholder="Your email"
                      inputMode="email"
                      autoCapitalize="off"
                      className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-green-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    aria-required="true"
                    placeholder="Your message..."
                    className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold p-3 rounded-md transition-colors text-base"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </FadeInWhenVisible>

          {/* Google Map Embed */}
          <FadeInWhenVisible delay={0.3}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.778659262123!2d33.3651489!3d35.1621405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de17dea8ef653f%3A0xd37d749ddd7c9c48!2sGreen%20Colibri%20specialty%20coffee!5e0!3m2!1sen!2s!4v1745921602231!5m2!1sen!2s"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Colibri Cafe location"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
