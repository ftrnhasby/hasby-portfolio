"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Zap,
  Target,
  Lightbulb,
  RefreshCw,
  FileText,
  ChevronDown,
  Compass,
} from "lucide-react";
import { Project, LocalizedString } from "@/types/project";
import { VideoPlayerMock } from "@/components/VideoPlayerMock";
import { ScriptTable } from "@/components/ScriptTable";
import { ProductionProofStrip } from "@/components/ProductionProofStrip";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export interface NextProjectLink {
  slug: string;
  title: string;
  category: LocalizedString;
}

interface ProjectDetailViewProps {
  project: Project;
  nextProject?: NextProjectLink;
}

export function ProjectDetailView({ project, nextProject }: ProjectDetailViewProps) {
  const { lang } = useLanguage();
  const isId = lang === "id";
  const t = TRANSLATIONS[lang].projectDetail;

  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);
  const [isScriptOpen, setIsScriptOpen] = useState(false);

  const activeScript =
    project.scriptAngles[
      Math.min(selectedVariationIndex, Math.max(0, project.scriptAngles.length - 1))
    ] || project.scriptAngles[0];

  const hasProductionProof = Boolean(
    project.productionProof && project.productionProof.length > 0
  );
  const scriptSectionNumber = hasProductionProof ? "03" : "02";

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* ============================================================ */}
      {/* 1. COMPACT EDITORIAL HEADER                                  */}
      {/* ============================================================ */}
      <section className="pt-10 sm:pt-12 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-10 space-y-5">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t.returnLink}</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            {/* Compact Metadata Pills (Replaces large amber disclaimer banner) */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide uppercase bg-white/[0.06] text-zinc-200 border border-white/[0.08]">
                {project.category[lang]}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {project.creativeStrategy.projectType[lang]}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {project.primaryHighlight.value}
              </span>
              <span className="text-xs text-zinc-500 font-mono pl-1">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-3xl">
              {project.tagline[lang]}
            </p>

            {/* Dynamic Tools Used Chips */}
            {project.toolsUsed.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-mono text-zinc-500 mr-1">
                  {isId ? "Alat:" : "Stack:"}
                </span>
                {project.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.07] text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAIN CONTENT BODY (CLEAN, SCANNABLE 3-SECTION FLOW)         */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14 sm:space-y-16">
        {/* 2. HERO VIDEO SHOWCASE (Synced with Script Breakdown) */}
        <section>
          <VideoPlayerMock
            variations={project.videoVariations}
            clientName={project.client}
            selectedIndex={selectedVariationIndex}
            onSelectIndex={setSelectedVariationIndex}
          />
        </section>

        {/* 3. STRATEGY SNAPSHOT (3 Core Pillars + Compact Rationale & Next Test) */}
        <section className="space-y-6" id="strategy">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>01 / {isId ? "Ringkasan Strategi Kreatif" : "Strategy Snapshot"}</span>
              </div>
              <p className="text-xs text-zinc-400">
                {isId
                  ? "Inti masalah audiens, strategi hook 3 detik, dan penawaran utama."
                  : "Core audience friction, 3-second hook angle, and conversion offer."}
              </p>
            </div>
          </div>

          {/* 3 Focused Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pillar 1: Audience Friction */}
            <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-amber-400">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{isId ? "Masalah Audiens" : "The Friction"}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.creativeStrategy.audienceInsight[lang]}
              </p>
            </div>

            {/* Pillar 2: Hook & Angle */}
            <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>{isId ? "Hook & Angle" : "The Hook & Angle"}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.creativeStrategy.hookStrategy[lang]}
              </p>
            </div>

            {/* Pillar 3: Value & CTA */}
            <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 flex flex-col justify-between gap-3">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-sky-400">
                  <Target className="w-3.5 h-3.5 shrink-0" />
                  <span>{isId ? "Nilai & CTA" : "Value & CTA"}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.creativeStrategy.valueProposition[lang]}
                </p>
              </div>
              <p className="text-xs text-zinc-400 italic pt-3 border-t border-white/[0.06]">
                {project.creativeStrategy.callToAction[lang]}
              </p>
            </div>
          </div>

          {/* Compact 2-Column Takeaway & Next Test Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#0d0d10] border border-white/[0.07] p-5 space-y-2">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                <span>{isId ? "Kenapa Konsep Ini Bekerja" : "Why This Works"}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.creativeStrategy.creativeRationale[lang]}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0d0d10] border border-white/[0.07] p-5 space-y-2">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                <span>{isId ? "Rencana A/B Test Berikutnya" : "Next A/B Test"}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.honestEvaluation.nextIterationStrategy[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* 4. OPTIONAL BEHIND THE EDIT / PRODUCTION PROOF STRIP (Hidden cleanly if none) */}
        {hasProductionProof && project.productionProof && (
          <ProductionProofStrip
            items={project.productionProof}
            sectionNumber="02"
          />
        )}

        {/* 5. COLLAPSIBLE DEEP DIVE: BEAT-BY-BEAT SCRIPT BREAKDOWN */}
        {project.scriptAngles.length > 0 && (
          <section className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] overflow-hidden">
            <button
              type="button"
              onClick={() => setIsScriptOpen((prev) => !prev)}
              aria-expanded={isScriptOpen}
              className="w-full p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {scriptSectionNumber} /{" "}
                    {isId ? "Naskah & Breakdown per Beat" : "Beat-by-Beat Script Breakdown"}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {activeScript
                    ? `${activeScript.name[lang]} · ${activeScript.lines.length} ${isId ? "Beat" : "Beats"}`
                    : t.scriptSectionSub}
                </p>
              </div>

              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-200 self-start sm:self-auto shrink-0">
                <span>
                  {isScriptOpen
                    ? isId
                      ? "Tutup Naskah"
                      : "Hide Script"
                    : isId
                      ? "Lihat Naskah"
                      : "View Script"}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                    isScriptOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {isScriptOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/[0.06]">
                <ScriptTable
                  scriptAngles={project.scriptAngles}
                  activeIndex={selectedVariationIndex}
                  onSelectIndex={setSelectedVariationIndex}
                />
              </div>
            )}
          </section>
        )}

        {/* 5. SINGLE COLLABORATION CTA + NEXT CASE STUDY NAVIGATION */}
        <section className="pt-4 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/20 via-[#0d0d10] to-[#0a0a0c] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                {isId ? "Kolaborasi Kreatif" : "Creative Collaboration"}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {t.caseStudyCtaHeading}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                {t.caseStudyCtaSub}
              </p>
            </div>

            <Link
              href="/contact?package=3-hook"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all self-start sm:self-auto shadow-lg shrink-0"
            >
              <span>{t.caseStudyCtaBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Clean Bottom Navigation Strip */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{isId ? "Semua Karya" : "All Case Studies"}</span>
            </Link>

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-3 text-right"
              >
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    {isId ? "Studi Kasus Berikutnya" : "Next Case Study"}
                  </span>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 flex items-center justify-center text-zinc-300 group-hover:text-emerald-300 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
