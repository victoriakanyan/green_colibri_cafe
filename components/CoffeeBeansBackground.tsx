"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

interface BeanConfig {
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export default function CoffeeBeansBackground({
  count = 20,
}: {
  count?: number;
}) {
  const beans = useMemo(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 24 + Math.random() * 24,
      duration: 20 + Math.random() * 10,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {beans.map((bean, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `-10%`,
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
            delay: bean.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/coffeeBean.png"
            alt="Coffee Bean"
            width={bean.size}
            height={bean.size}
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
