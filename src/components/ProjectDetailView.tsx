"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Target, Compass, Sparkles, Code2 } from "lucide-react";
import { Project } from "@/types/project";
import { VideoPlayerMock } from "@/components/VideoPlayerMock";
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
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Top Breadcrumb & Return Link */}
      <section className="pt-12 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 pb-12 space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t.returnLink}</span>
          </Link>

          {/* Title & Tagline Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
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

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {project.tagline[lang]}
            </p>
          </div>

          {/* Primary High-Impact Craft Highlights Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                {project.primaryHighlight.label[lang]}
              </div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                {project.primaryHighlight.value}
              </div>
              {project.primaryHighlight.subtext && (
                <div className="text-[10px] font-mono text-emerald-400 mt-1">
                  {project.primaryHighlight.subtext[lang]}
                </div>
              )}
            </div>

            {project.secondaryHighlights.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  {sec.label[lang]}
                </div>
                <div className="text-2xl sm:text-3xl font-semibold text-zinc-200 tracking-tight mt-1">
                  {sec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-6xl mx-auto px-6 space-y-16 sm:space-y-20">
        {/* Section 1: The Creative Brief & Strategic Foundation */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Compass className="w-3.5 h-3.5 text-zinc-300" />
            <span>01 / {t.objectiveHeading}</span>
          </div>

          <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left Column: Objective & Problem */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {t.objectiveHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2">
                    {project.creativeBrief.clientObjective[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f0f12] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-300">
                    <Target className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.coreProblemHeading}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.creativeBrief.coreProblem[lang]}
                  </p>
                </div>
              </div>

              {/* Right Column: Audience & Strategy */}
              <div className="md:col-span-5 space-y-6 md:border-l md:border-white/[0.06] md:pl-8">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    {t.targetAudienceHeading}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.creativeBrief.targetAudience[lang]}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    {t.strategyHeading}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.creativeBrief.angleHookStrategy[lang]}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    {t.differentiatorsHeading}
                  </span>
                  <ul className="space-y-1.5">
                    {project.creativeBrief.keyDifferentiators.map((diff, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{diff[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Real Video Player & Multi-Variation Matrix */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>02 / {t.variationsSectionTitle}</span>
          </div>

          <VideoPlayerMock
            variations={project.videoVariations}
            clientName={project.client}
          />
        </section>

        {/* Section 3: Frame-Accurate Direct Response Scripts */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Compass className="w-3.5 h-3.5 text-zinc-300" />
            <span>03 / {t.scriptSectionTitle}</span>
          </div>

          <ScriptTable scriptAngles={project.scriptAngles} />
        </section>

        {/* Section 4: Storyboard & Remotion Component Architecture */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Code2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>04 / {t.storyboardSectionTitle}</span>
          </div>

          <StoryboardGrid storyboard={project.storyboard} />
        </section>

        {/* Section 5: Production Roadmap */}
        <section className="space-y-4">
          <ProductionWorkflowSection workflow={project.productionWorkflow} />
        </section>

        {/* Section 6: Honest Creative Evaluation */}
        <section className="space-y-4">
          <HonestEvaluationSection evaluation={project.honestEvaluation} />
        </section>

        {/* Explore More Banner */}
        <section className="pt-12 border-t border-white/[0.08]">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
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
