"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StarryBGProps {
  starsCount?: number;
  cometsCount?: number;
  darkMode?: boolean;
}

export default function StarryBG({
  starsCount = 100,
  cometsCount = 3,
  darkMode = true,
}: StarryBGProps) {
  const [stars, setStars] = useState<Array<{ id: number; size: number; top: string; left: string; opacity: number }>>([]);
  
  useEffect(() => {
    // Generate stars with random positions, sizes, and opacities
    const generatedStars = Array.from({ length: starsCount }, (_, index) => ({
      id: index,
      size: Math.random() * 2 + 1, // Size between 1-3px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3-1.0
    }));
    
    setStars(generatedStars);
  }, [starsCount]);
  
  return (
    <div className="absolute inset-0" style={{ backgroundColor: darkMode ? "#050510" : "transparent" }}>
      {/* Stars */}
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
          }}
        />
      ))}
      
      {/* Comets/Shooting stars */}
      {Array.from({ length: cometsCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{
            width: Math.random() * 120 + 60 + 'px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)',
            rotate: Math.random() * 45 - 22.5 + 'deg',
            top: 20 + (i * 30) + '%',
            right: -10 + '%',
            zIndex: 1,
          }}
          animate={{
            right: ['0%', '120%'],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: i * 7,
          }}
        />
      ))}
      
      {/* Optional twinkling effect for some stars */}
      {stars.slice(0, starsCount / 4).map((star) => (
        <motion.div
          key={`twinkle-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}