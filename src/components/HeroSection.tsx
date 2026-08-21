"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import Magnetic from "./Magnetic";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(
        titleLine1Ref.current,
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
          skewY: 1.5,
          duration: 1.1,
          delay: 0.1,
        }
      )
        .from(
          titleLine2Ref.current,
          {
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
            skewY: 1.5,
            duration: 1.1,
          },
          "-=0.85"
        )
        .from(
          subheadlineRef.current,
          {
            opacity: 0,
            y: 25,
            filter: "blur(6px)",
            duration: 0.9,
          },
          "-=0.7"
        )
        .from(
          ctaGroupRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Floating Parallax Ambient Background Orbs */}
      <motion.div
        style={{ y: orb1Y }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-[450px] md:w-[700px] h-[350px] md:h-[480px] bg-gradient-to-tr from-[#EEF2F6] via-[#F8FAFC] to-[#ECFDF5] rounded-full blur-3xl -z-10 opacity-80 pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[520px] h-[300px] md:h-[420px] bg-[#059669]/5 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col items-start"
      >
        {/* Hero Title */}
        <div className="space-y-1 md:space-y-2 mb-6">
          <h1
            ref={titleLine1Ref}
            className="text-[42px] sm:text-[58px] md:text-[80px] lg:text-[92px] font-extrabold tracking-[-0.035em] leading-[1.05] text-[#0F172A]"
          >
            Frontend Developer &amp;
          </h1>
          <h1
            ref={titleLine2Ref}
            className="text-[42px] sm:text-[58px] md:text-[80px] lg:text-[92px] font-extrabold tracking-[-0.035em] leading-[1.05] text-[#059669] flex items-center flex-wrap gap-3"
          >
            <span>UI Craftsman.</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="inline-block text-3xl sm:text-5xl md:text-6xl select-none"
            >
              ✦
            </motion.span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#64748B] font-normal leading-relaxed mb-10 tracking-tight"
        >
          Hi, I am <span className="font-semibold text-[#0F172A]">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Buttons Group with Magnetic pull & spring */}
        <div
          ref={ctaGroupRef}
          className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          <Magnetic strength={0.25}>
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-base transition-colors shadow-soft hover:shadow-xl cursor-pointer group"
            >
              <span>Explore Featured Work</span>
              <ArrowDown className="w-4 h-4 text-[#94A3B8] transition-transform group-hover:translate-y-1" />
            </motion.a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:text-[#059669] font-semibold text-base transition-colors shadow-soft cursor-pointer group"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4 text-[#64748B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
