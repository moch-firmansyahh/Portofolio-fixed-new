"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AmbientCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Soft atmospheric glow spring
  const springGlowConfig = { damping: 30, stiffness: 120, mass: 1 };
  const glowX = useSpring(mouseX, springGlowConfig);
  const glowY = useSpring(mouseY, springGlowConfig);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Atmospheric Background Glow Orb */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-80 h-80 bg-neutral-900/4 rounded-full blur-3xl pointer-events-none z-30"
      />
    </>
  );
}
