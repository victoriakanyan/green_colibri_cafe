"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BeanConfig {
  id: number;
  left: number;
  size: number;
  duration: number;
  rotation: number;
}

export default function CoffeeBeansBackground({
  count = 20,
  interval = 500, // Time between bean releases (ms)
}: {
  count?: number;
  interval?: number;
}) {
  const [beans, setBeans] = useState<BeanConfig[]>([]);
  const [hasMounted, setHasMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || reduceMotion) return;

    let currentCount = 0;
    let id = 0;
    const intervalId = setInterval(() => {
      if (currentCount >= count) return;
      setBeans(prev => [
        ...prev,
        {
          id: id++,
          left: Math.random() * 100,
          size: 24 + Math.random() * 24,
          duration: 20 + Math.random() * 10,
          rotation: Math.random() * 360,
        },
      ]);
      currentCount++;
    }, interval);

    return () => clearInterval(intervalId);
  }, [count, hasMounted, reduceMotion, interval]);

  if (!hasMounted || reduceMotion) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute top-[-10%] will-change-transform"
          style={{
            left: `${bean.left}%`,
            width: `${bean.size}px`,
            height: `${bean.size}px`,
          }}
          initial={{
            y: 0,
            rotate: bean.rotation,
            opacity: 1,
          }}
          animate={{
            y: "120vh",
            rotate: bean.rotation + 360,
          }}
          transition={{
            duration: bean.duration,
            delay: 0,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/coffeeBean.webp"
            alt="Floating coffee bean"
            width={bean.size}
            height={bean.size}
            className="object-contain"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
