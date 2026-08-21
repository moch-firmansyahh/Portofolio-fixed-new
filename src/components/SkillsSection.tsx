"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const skillCardVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#F1F5F9]/60 border-y border-[#E2E8F0] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] mb-3">
            <span className="w-6 h-[2px] bg-[#059669]" />
            <span>Tech Stack &amp; Skills</span>
            <span className="w-6 h-[2px] bg-[#059669]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            Teknologi &amp; Keahlian Pengembangan.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Kumpulan teknologi front-end modern, bahasa pemrograman, dan alat desain yang digunakan untuk membangun antarmuka web interaktif.
          </p>
        </motion.div>

        {/* Category Tabs with Animated Sliding Pill Indicator */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-white" : "text-[#64748B] hover:text-[#0F172A] bg-[#FFFFFF] border border-[#E2E8F0]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategoryPill"
                    className="absolute inset-0 bg-[#059669] rounded-xl shadow-soft shadow-glow-emerald -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <motion.div
          key={`desc-${activeTab}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-[#64748B]">
            {SKILL_CATEGORIES[activeTab].description}
          </p>
        </motion.div>

        {/* Skills Grid with Animated Entrance & Hover Micro-interactions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`grid-${activeTab}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillCardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`group p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border transition-all duration-300 hover:shadow-soft-hover cursor-default ${
                  skill.highlight
                    ? "border-[#A7F3D0] bg-gradient-to-br from-[#FFFFFF] to-[#ECFDF5]/70"
                    : "border-[#E2E8F0]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        skill.highlight
                          ? "bg-[#059669] text-white shadow-xs"
                          : "bg-[#F1F5F9] text-[#64748B] group-hover:text-[#059669] group-hover:bg-[#ECFDF5]"
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#0F172A] group-hover:text-[#059669] transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-[#64748B] font-medium">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {skill.highlight && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-[11px] font-semibold">
                      Primary
                    </span>
                  )}
                </div>

                {/* Animated Level Bar */}
                <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        skill.level === "Expert"
                          ? "95%"
                          : skill.level === "Advanced"
                          ? "85%"
                          : "75%",
                    }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      skill.highlight ? "bg-[#059669]" : "bg-[#94A3B8] group-hover:bg-[#059669]"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All Skills Summary Pill Tag Bar with Staggered Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-soft"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#64748B]">
            <Terminal className="w-4 h-4 text-[#059669]" />
            <span>Tools, Libraries &amp; Workflow Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "Next.js App Router",
              "TypeScript",
              "JavaScript ES6+",
              "Tailwind CSS",
              "Framer Motion",
              "GSAP",
              "Golang",
              "C++",
              "Figma",
              "Canva",
              "HTML5 Semantic",
              "CSS3 / Grid / Flexbox",
              "REST APIs",
              "Git & GitHub",
              "Vercel",
              "PWA",
              "Responsive Design",
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#ECFDF5] text-[#0F172A] hover:text-[#059669] text-xs font-medium border border-[#E2E8F0] hover:border-[#A7F3D0] transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
