"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block relative rounded-2xl bg-[#0d0d0f] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 p-6 sm:p-8 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Project Type Badge (Clearly distinguish Spec Ad vs Client Work) */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>
              {project.creativeStrategy?.projectType
                ? project.creativeStrategy.projectType[lang]
                : lang === "id"
                ? "Spec Ad Mandiri"
                : "Independent Spec Ad"}
            </span>
          </span>

          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide uppercase bg-white/[0.06] text-zinc-300 border border-white/[0.06]">
            {project.category[lang]}
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            {project.year}
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.1] transition-all duration-200 shrink-0">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Main Title & Client */}
      <div className="space-y-2 mb-5">
        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          {project.client}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.tagline[lang]}
        </p>
      </div>

      {/* Creative Concept & Objective callout */}
      {project.creativeStrategy?.objective && (
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1 mb-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            {lang === "id" ? "Objektif Kreatif & Konsep" : "Creative Objective & Concept"}
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
            {project.creativeStrategy.objective[lang]}
          </p>
        </div>
      )}

      {/* Role & Production Skills */}
      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono border-l-2 border-emerald-500/50 pl-3">
        <span className="text-zinc-500">{lang === "id" ? "Peran:" : "Role:"}</span>
        <span className="text-zinc-200 font-medium">Remote Direct-Response Video Editor</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-400">
          {project.slug === "katama-coffee"
            ? lang === "id"
              ? "3 Angle Naskah • Remotion • Vokal ElevenLabs • Foley SFX"
              : "3 Angle Variations • Remotion Code • ElevenLabs Voice • Foley SFX"
            : lang === "id"
            ? "2 Angle Naskah • Remotion 4K/60 • Vokal ElevenLabs • Dynamic Typography"
            : "2 Angle Variations • Remotion 4K/60 • ElevenLabs Voice • Dynamic Typography"}
        </span>
      </div>

      {/* Performance / Highlights Callout Banner */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            {project.primaryHighlight.label[lang]}
          </div>
          <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
            {project.primaryHighlight.value}
          </div>
        </div>
        {project.primaryHighlight.subtext && (
          <div className="text-left sm:text-right">
            <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded break-words">
              {project.primaryHighlight.subtext[lang]}
            </span>
          </div>
        )}
      </div>

      {/* Secondary Highlights & Tools footer */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {project.secondaryHighlights.slice(0, 3).map((m, idx) => (
            <div key={idx} className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="text-white font-medium">{m.value}</span>
              <span className="text-zinc-500">{m.label[lang]}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-400 break-words">
          <span>{project.toolsUsed.slice(0, 2).join(" • ")}</span>
        </div>
      </div>
    </Link>
  );
}
