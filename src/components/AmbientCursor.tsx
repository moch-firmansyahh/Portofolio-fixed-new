"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AmbientCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth outer trailing ring
  const springRingConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(mouseX, springRingConfig);
  const ringY = useSpring(mouseY, springRingConfig);

  // Faster spring for inner dot
  const springDotConfig = { damping: 40, stiffness: 600, mass: 0.1 };
  const dotX = useSpring(mouseX, springDotConfig);
  const dotY = useSpring(mouseY, springDotConfig);

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

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.closest(".cursor-pointer")
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Atmospheric Background Glow Orb */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-80 h-80 bg-[#059669]/6 rounded-full blur-3xl pointer-events-none z-30"
      />

      {/* 2. Sharp Inner Emerald Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 1.4 : isHovered ? 0.5 : 1,
          opacity: isHovered ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#059669] pointer-events-none z-50 shadow-xs"
      />
    </>
  );
}
