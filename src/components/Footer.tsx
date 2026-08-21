"use client";

import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E2E8F0] py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-[#64748B]">
          <div className="flex items-center gap-2 font-bold text-[#0F172A]">
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <span className="hidden sm:inline-block text-[#CBD5E1]">|</span>
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} • Crafted with Next.js, Tailwind &amp; Motion.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FAFC] hover:bg-white text-xs font-semibold text-[#0F172A] hover:text-[#059669] border border-[#E2E8F0] shadow-soft transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#059669]" />
        </button>
      </div>
    </footer>
  );
}
