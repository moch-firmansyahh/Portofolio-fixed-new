"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  "React.js",
  "Next.js (App Router)",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP Animation",
  "Golang",
  "C++",
  "Figma (UI/UX)",
  "Responsive Design",
  "Web Performance",
  "Clean Architecture",
];

export default function TechMarquee() {
  return (
    <div className="py-7 bg-[#FFFFFF] border-y border-[#E2E8F0] overflow-hidden select-none relative shadow-xs">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 26,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 text-sm sm:text-base font-bold text-[#64748B] tracking-tight uppercase group hover:text-[#059669] transition-colors"
          >
            <span className="text-[#0F172A] group-hover:text-[#059669] transition-colors">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#059669]/70 group-hover:rotate-45 transition-transform" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
