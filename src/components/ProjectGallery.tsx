"use client";

import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SlidersHorizontal, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function ProjectGallery() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].home;

  return (
    <section className="space-y-8" id="work">
      {/* Category Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            {t.galleryHeading} ({t.galleryCount})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] text-white border border-white/[0.08] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Katama Coffee & Space (3 Angles)</span>
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
