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
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide uppercase bg-white/[0.06] text-zinc-300 border border-white/[0.06]">
            {project.category[lang]}
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            {project.year}
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.1] transition-all duration-200">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Main Title & Client */}
      <div className="space-y-2 mb-6">
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

      {/* Performance / Highlights Callout Banner */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6 flex items-baseline justify-between">
        <div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            {project.primaryHighlight.label[lang]}
          </div>
          <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
            {project.primaryHighlight.value}
          </div>
        </div>
        {project.primaryHighlight.subtext && (
          <div className="text-right">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
              {project.primaryHighlight.subtext[lang]}
            </span>
          </div>
        )}
      </div>

      {/* Secondary Highlights & Tools footer */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4">
          {project.secondaryHighlights.slice(0, 3).map((m, idx) => (
            <div key={idx} className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="text-white font-medium">{m.value}</span>
              <span className="text-zinc-500">{m.label[lang]}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
          <span>{project.toolsUsed.slice(0, 2).join(" • ")}</span>
        </div>
      </div>
    </Link>
  );
}
