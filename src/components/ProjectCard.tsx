"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].home;

  const cardData = t.projectCards?.[project.slug as keyof typeof t.projectCards] || {
    title: project.title,
    description: project.tagline[lang],
    info: `Spec ad · ${project.primaryHighlight.value}`,
    cta: lang === "id" ? "Buka Studi Kasus" : "Open Case Study",
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl bg-[#0c0c0e]/80 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#111115] transition-all duration-300 p-6 sm:p-8 hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
    >
      <div className="space-y-4 sm:space-y-4.5">
        {/* 1. Project Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
          {cardData.title}
        </h3>

        {/* 2. One sentence explaining the ad idea (fully unclipped) */}
        <p className="text-base text-zinc-300 leading-relaxed font-normal">
          {cardData.description}
        </p>

        {/* 3. Short info line: Spec ad status & angle count */}
        <div className="text-[13px] sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span>{cardData.info}</span>
        </div>

        {/* 4. Clear CTA to open case study */}
        <div className="pt-1 inline-flex items-center gap-1.5 text-base font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
          <span>{cardData.cta}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
