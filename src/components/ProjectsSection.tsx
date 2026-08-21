"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Eye } from "lucide-react";
import { GithubIcon } from "./icons";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] mb-3">
              <span className="w-6 h-[2px] bg-[#059669]" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-md text-base text-[#64748B]">
            Aplikasi web nyata yang telah saya bangun dengan fokus pada fungsionalitas, performa, dan pengalaman antarmuka yang modern.
          </p>
        </ScrollReveal>

        {/* Projects 2-Column Responsive Grid with Layout Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              distance={40}
              duration={0.7}
              delay={index * 0.15}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="group flex flex-col justify-between bg-[#FFFFFF] rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-soft hover:shadow-soft-hover transition-all duration-300 overflow-hidden h-full">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9] border-b border-[#E2E8F0]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />


                  </div>

                  {/* Card Body */}
                  <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base text-[#64748B] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-[#F1F5F9] text-[#0F172A] text-xs font-medium border border-[#E2E8F0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs sm:text-sm font-semibold text-[#059669] hover:text-[#047857] inline-flex items-center gap-1.5 group/btn cursor-pointer"
                      >
                        <span>Lihat Studi Kasus</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </button>

                      <div className="flex items-center gap-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-2 rounded-xl bg-[#F1F5F9] hover:bg-[#ECFDF5] text-[#0F172A] hover:text-[#059669] border border-[#E2E8F0] transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live demo`}
                          className="p-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white transition-colors shadow-soft"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
