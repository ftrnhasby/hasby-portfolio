"use client";

import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function ProjectGallery() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].home;

  return (
    <section className="space-y-6 sm:space-y-8 scroll-mt-24" id="work">
      {/* Category Header */}
      <ScrollReveal>
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 sm:pb-5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {t.galleryHeading}
            </h2>
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal key={project.id} delay={idx * 150}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
