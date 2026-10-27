"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, Code2 } from "lucide-react";
import { Project } from "@/types/project";
import { VideoPlayerMock } from "@/components/VideoPlayerMock";
import { CreativeStrategySection } from "@/components/CreativeStrategySection";
import { AssetBreakdownSection } from "@/components/AssetBreakdownSection";
import { ScriptTable } from "@/components/ScriptTable";
import { StoryboardGrid } from "@/components/StoryboardGrid";
import { ProductionWorkflowSection } from "@/components/ProductionWorkflowSection";
import { HonestEvaluationSection } from "@/components/HonestEvaluationSection";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ProjectDetailViewProps {
  project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projectDetail;

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* Top Breadcrumb & Return Link */}
      <section className="pt-10 sm:pt-12 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 space-y-6 sm:space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t.returnLink}</span>
          </Link>

          {/* Title & Tagline Header */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide uppercase bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                {project.category[lang]}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {t.clientLabel}: {project.client}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-500 font-mono">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {project.tagline[lang]}
            </p>
          </div>

          {/* Primary High-Impact Craft Highlights Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/[0.06]">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider truncate">
                {project.primaryHighlight.label[lang]}
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight mt-1 truncate">
                {project.primaryHighlight.value}
              </div>
              {project.primaryHighlight.subtext && (
                <div className="text-[10px] font-mono text-emerald-400 mt-1 break-words">
                  {project.primaryHighlight.subtext[lang]}
                </div>
              )}
            </div>

            {project.secondaryHighlights.map((sec, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider truncate">
                  {sec.label[lang]}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-200 tracking-tight mt-1 truncate">
                  {sec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* Section 2A: Prominent Final Video Preview (Immediate Top Centerpiece) */}
        <section className="space-y-4">
          <VideoPlayerMock
            variations={project.videoVariations}
            clientName={project.client}
            projectTitle={project.title}
            projectType={project.creativeStrategy.projectType}
            toolsUsed={project.toolsUsed}
          />
        </section>

        {/* Section 2B: Creative Strategy Overview */}
        <CreativeStrategySection
          strategy={project.creativeStrategy}
          projectTitle={project.title}
        />

        {/* Section 03: Frame-Accurate Direct Response Scripts */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Compass className="w-3.5 h-3.5 text-zinc-300" />
            <span>03 / {t.scriptSectionTitle}</span>
          </div>

          <ScriptTable scriptAngles={project.scriptAngles} />
        </section>

        {/* Section 04: Storyboard & Remotion Component Architecture */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Code2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>04 / {t.storyboardSectionTitle}</span>
          </div>

          <StoryboardGrid storyboard={project.storyboard} />
        </section>

        {/* Section 01: Asset & Production Breakdown */}
        <AssetBreakdownSection
          assets={project.assetBreakdown}
          projectTitle={project.title}
        />

        {/* Section 05: Production Roadmap */}
        <section className="space-y-4">
          <ProductionWorkflowSection workflow={project.productionWorkflow} />
        </section>

        {/* Section 06: Honest Creative Evaluation */}
        <section className="space-y-4">
          <HonestEvaluationSection evaluation={project.honestEvaluation} />
        </section>

        {/* Explore More Banner */}
        <section className="pt-12 border-t border-white/[0.08]">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                {t.nextCaseStudyLabel}
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {lang === "id" ? "Pelajari Mesin Produksi Remotion" : "Explore the Remotion Production Engine"}
              </h4>
              <p className="text-xs text-zinc-400">
                {lang === "id"
                  ? "Lihat bagaimana alur kerja berbasis kode dan ElevenLabs mempercepat pengujian video iklan."
                  : "See how code-driven programmatic video and ElevenLabs accelerate ad testing sprints."}
              </p>
            </div>

            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all self-start sm:self-auto shadow-md"
            >
              <span>{lang === "id" ? "Buka Alur Kerja" : "View Production Pipeline"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
