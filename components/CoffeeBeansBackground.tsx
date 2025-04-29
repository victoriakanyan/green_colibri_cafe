"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoffeeBeansBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => {
        const randomLeft = Math.random() * 100;
        const randomSize = 24 + Math.random() * 24;
        const randomDuration = 20 + Math.random() * 10;
        const randomDelay = Math.random() * 10;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `-10%`,
              left: `${randomLeft}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
            }}
            initial={{
              y: 0,
              rotate: Math.random() * 360,
              opacity: 0.7,
            }}
            animate={{
              y: "120vh",
              rotate: Math.random() * 360 + 360,
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/bean.png"
              alt="Coffee Bean"
              width={randomSize}
              height={randomSize}
              className="opacity-70"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
