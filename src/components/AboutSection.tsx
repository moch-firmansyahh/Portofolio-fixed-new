"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual 3D Tilt Card & Animated Stats */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" distance={45} duration={0.85}>
              <TiltCard>
                <div className="relative">
                  {/* Background decorative offset card */}
                  <div className="absolute -inset-2.5 rounded-3xl bg-[#EEF2F6] border border-[#E2E8F0] transform rotate-1.5 -z-10 transition-transform duration-300" />

                  {/* Main Profile Card */}
                  <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E2E8F0] shadow-soft flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                          className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] shadow-xs"
                        >
                          <Sparkles className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-base text-[#0F172A]">
                            {PERSONAL_INFO.name}
                          </h4>
                          <p className="text-xs text-[#64748B] font-medium">{PERSONAL_INFO.role}</p>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#F1F5F9] text-[#64748B] font-medium border border-[#E2E8F0]">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-2 text-sm text-[#64748B] leading-relaxed">
                      <div className="flex items-center gap-2 font-semibold text-[#0F172A]">
                        <Zap className="w-4 h-4 text-[#059669]" />
                        <span>Philosophy &amp; Focus</span>
                      </div>
                      <p className="text-xs sm:text-sm italic">
                        &ldquo;Great digital products lie at the intersection of aesthetic grace, uncompromising performance, and intuitive user delight.&rdquo;
                      </p>
                    </div>

                    {/* Key Highlight Metric Badges with Framer Motion Animated Numbers */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col cursor-default"
                      >
                        <span className="text-2xl font-bold text-[#059669] tracking-tight">
                          2+
                        </span>
                        <span className="text-xs font-medium text-[#64748B] mt-0.5">
                          Tahun Berkarya
                        </span>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col cursor-default"
                      >
                        <span className="text-2xl font-bold text-[#059669] tracking-tight">
                          5+
                        </span>
                        <span className="text-xs font-medium text-[#64748B] mt-0.5">
                          Proyek Selesai
                        </span>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col cursor-default"
                      >
                        <span className="text-2xl font-bold text-[#059669] tracking-tight">
                          98%
                        </span>
                        <span className="text-xs font-medium text-[#64748B] mt-0.5">
                          Lighthouse Score
                        </span>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col cursor-default"
                      >
                        <span className="text-2xl font-bold text-[#059669] tracking-tight">
                          100%
                        </span>
                        <span className="text-xs font-medium text-[#64748B] mt-0.5">
                          Dedikasi &amp; Presisi
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="right" distance={40} duration={0.85}>
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] mb-2">
                <span className="w-6 h-[2px] bg-[#059669]" />
                <span>About Me</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-5">
                Mewujudkan antarmuka modern yang responsif dan interaktif.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
                <p>
                  Halo, saya <strong className="text-[#0F172A]">Moch Firmansyah</strong>. Mahasiswa S1 Teknik Informatika di Telkom University yang berfokus mendalami <strong className="text-[#0F172A]">Front-End Development</strong>. Saya memiliki ketertarikan tinggi dalam menciptakan pengalaman pengguna web yang nyaman, responsif, dan interaktif.
                </p>
                <p>
                  Melalui proyek nyata seperti <strong className="text-[#0F172A]">Sistem Manajemen Kontrakan Pa Iman</strong> dan platform <strong className="text-[#0F172A]">Voluntrip</strong>, saya mengimplementasikan teknologi modern seperti Next.js, React, TypeScript, dan Tailwind CSS untuk menghasilkan aplikasi yang berkinerja tinggi serta mudah dipelihara.
                </p>
                <p>
                  Saya terbiasa mentransformasikan desain visual dari Figma menjadi kode modular yang bersih, terstruktur rapi, dan diperkaya animasi mikro yang halus menggunakan Framer Motion dan GSAP.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
