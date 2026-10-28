"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Zap,
  Clock,
  Layers,
  Cpu,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  Sparkles,
  Code2,
  SlidersHorizontal,
  BarChart3,
  Wrench,
  Search,
  Scissors,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function ProcessView() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].process;

  // Video state for mini case study
  const katamaVariations = [
    {
      id: "v1",
      label: lang === "id" ? "Variasi 1: Kontras WFC" : "Variation 1: WFC Contrast",
      tag: "30s • Hook Pattern-Interrupt",
      src: "/videos/katama/katama_v1_editorial.mp4",
      specs: { duration: "30s", fps: "30 fps", resolution: "1080×1920", audio: "ElevenLabs Bian" },
    },
    {
      id: "v2",
      label: lang === "id" ? "Variasi 2: Fitur Free Print" : "Variation 2: Free Print Discovery",
      tag: "44s • Eksplorasi Fitur Langka",
      src: "/videos/katama/katama_v2_editorial.mp4",
      specs: { duration: "44s", fps: "30 fps", resolution: "1080×1920", audio: "ElevenLabs Bian" },
    },
    {
      id: "v3",
      label: lang === "id" ? "Variasi 3: Panik Deadline" : "Variation 3: 2 AM Deadline Emergency",
      tag: "44s • Urgensi Tugas Larut Malam",
      src: "/videos/katama/katama_v3_deadline_emergency.mp4",
      specs: { duration: "44s", fps: "30 fps", resolution: "1080×1920", audio: "ElevenLabs Bian" },
    },
  ];

  const [activeVarIdx, setActiveVarIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = katamaVariations[activeVarIdx];

  const handleSelectVariation = (idx: number) => {
    setActiveVarIdx(idx);
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Icon mapping for 5 stages
  const stageIcons = [
    <Search key="01" className="w-4 h-4 text-emerald-400" />,
    <SlidersHorizontal key="02" className="w-4 h-4 text-sky-400" />,
    <FileText key="03" className="w-4 h-4 text-amber-400" />,
    <Code2 key="04" className="w-4 h-4 text-violet-400" />,
    <CheckCircle2 key="05" className="w-4 h-4 text-emerald-400" />,
  ];

  // Icon mapping for 4 toolchain roles
  const toolchainIcons = [
    <Search key="t1" className="w-4 h-4 text-emerald-400" />,
    <Sparkles key="t2" className="w-4 h-4 text-sky-400" />,
    <Code2 key="t3" className="w-4 h-4 text-violet-400" />,
    <Wrench key="t4" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Editorial Hero Section */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.eyebrow}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              {t.headline}
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed pt-1">
              {t.subheadline}
            </p>
          </div>

          {/* Quick Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#mini-case-study"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.primaryCta}</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <span>{t.secondaryCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Feature the Production Model: 15 Hours, Multiple Outputs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#09090b] border border-white/[0.08] p-6 sm:p-12 space-y-8 overflow-hidden relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.productionModel.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {t.productionModel.heading}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed pt-1">
                {t.productionModel.description}
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                {t.productionModel.badge}
              </span>
            </div>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0e0e11] border border-white/[0.06] space-y-2">
              <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-mono">
                {t.productionModel.stat1Value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                {t.productionModel.stat1Label}
              </div>
              <div className="text-xs text-zinc-500">
                {t.productionModel.stat1Sub}
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0e0e11] border border-emerald-500/20 space-y-2 relative overflow-hidden">
              <div className="text-3xl sm:text-4xl font-semibold text-emerald-400 tracking-tight font-mono">
                {t.productionModel.stat2Value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-200">
                {t.productionModel.stat2Label}
              </div>
              <div className="text-xs text-zinc-400">
                {t.productionModel.stat2Sub}
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0e0e11] border border-white/[0.06] space-y-2">
              <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-mono">
                {t.productionModel.stat3Value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                {t.productionModel.stat3Label}
              </div>
              <div className="text-xs text-zinc-500">
                {t.productionModel.stat3Sub}
              </div>
            </div>
          </div>

          {/* Unobtrusive Qualification Note */}
          <div className="pt-2 flex items-start gap-3 text-xs text-zinc-500 font-mono leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
            <span>{t.productionModel.qualification}</span>
          </div>
        </div>
      </section>

      {/* 3. The Five-Stage Workflow (Problem, Solution, Output) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Layers className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.pipelineHeading}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {t.pipelineSub}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            {t.pipelineIntro}
          </p>
        </div>

        <div className="space-y-6">
          {t.stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 hover:border-white/[0.14] transition-all space-y-6"
            >
              {/* Stage Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.05] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    {stageIcons[idx]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-zinc-500">
                        STAGE {stage.step}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/[0.04] border border-white/[0.06] text-zinc-300">
                        {stage.badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mt-0.5">
                      {stage.phase}
                    </h3>
                  </div>
                </div>

                {/* Tools Tag list */}
                <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 mr-1">
                    {t.toolsLabel}:
                  </span>
                  {stage.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem -> Solution -> Output 3-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
                {/* Problem */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#0e0e11] border border-red-500/10 space-y-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-amber-400/90 font-medium">
                    <XCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.problemLabel}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stage.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#0e0e11] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-sky-400 font-medium">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t.solutionLabel}</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {stage.solution}
                  </p>
                </div>

                {/* Output */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#0e0e11] border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.outputLabel}</span>
                  </div>
                  <p className="text-xs text-zinc-200 font-medium leading-relaxed">
                    {stage.output}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Before-and-After Workflow Comparison */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.comparison.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {t.comparison.heading}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            {t.comparison.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column A: Without Structured Workflow */}
          <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.06] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <h3 className="text-base font-semibold text-white tracking-tight">
                {t.comparison.withoutTitle}
              </h3>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06]">
                {t.comparison.withoutBadge}
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-zinc-400">
              {t.comparison.withoutPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: With My Workflow */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0f1211] to-[#0a0a0c] border border-emerald-500/20 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-emerald-500/15 pb-4">
              <h3 className="text-base font-semibold text-white tracking-tight">
                {t.comparison.withTitle}
              </h3>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/25">
                {t.comparison.withBadge}
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-zinc-300">
              {t.comparison.withPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-zinc-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. AI-Assisted. Systematically Edited. Creatively Directed. */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#09090b] border border-white/[0.08] p-6 sm:p-12 space-y-10 overflow-hidden">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.aiAndCraft.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.aiAndCraft.heading}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t.aiAndCraft.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.aiAndCraft.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e0e11] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {idx === 0 ? (
                        <Sparkles className="w-4 h-4 text-sky-400" />
                      ) : idx === 1 ? (
                        <Code2 className="w-4 h-4 text-violet-400" />
                      ) : (
                        <Scissors className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real Mini Case Study: Katama Coffee (Interactive Video Preview) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6" id="mini-case-study">
        <div className="rounded-3xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-12 space-y-8 overflow-hidden">
          <div className="border-b border-white/[0.06] pb-6 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.caseStudy.eyebrow}</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-full">
                {t.caseStudy.projectTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.caseStudy.heading}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              {t.caseStudy.subheadline}
            </p>
          </div>

          {/* Grid: Left Breakdown, Right Interactive Player */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Breakdown */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  {t.caseStudy.challengeTitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.caseStudy.challengeDesc}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  {t.caseStudy.decisionTitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.caseStudy.decisionDesc}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  {t.caseStudy.workflowTitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.caseStudy.workflowDesc}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  {t.caseStudy.takeawayTitle}
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {t.caseStudy.takeawayDesc}
                </p>
              </div>

              {/* Responsible note & Link */}
              <div className="space-y-3 pt-2">
                <p className="text-[11px] font-mono text-zinc-500 leading-relaxed flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{t.caseStudy.disclaimer}</span>
                </p>

                <Link
                  href="/projects/katama-coffee"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-emerald-400 transition-colors underline underline-offset-4"
                >
                  <span>{t.caseStudy.ctaLink}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Video Player */}
            <div className="lg:col-span-5 space-y-4">
              {/* Variation Tabs */}
              <div className="flex flex-col gap-1.5 bg-[#0e0e11] p-1.5 rounded-xl border border-white/[0.06]">
                {katamaVariations.map((v, idx) => (
                  <button
                    key={v.id}
                    onClick={() => handleSelectVariation(idx)}
                    className={`text-left px-3 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                      activeVarIdx === idx
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{v.label}</span>
                    <span className={`text-[10px] ${activeVarIdx === idx ? "text-zinc-700" : "text-zinc-500"}`}>
                      {v.specs.duration}
                    </span>
                  </button>
                ))}
              </div>

              {/* Video Player Container */}
              <div className="rounded-2xl bg-black border border-white/[0.08] overflow-hidden relative shadow-2xl">
                <div className="relative aspect-[9/16] max-h-[500px] mx-auto bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    key={activeVideo.src}
                    src={activeVideo.src}
                    muted={isMuted}
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={togglePlay}
                  />

                  {/* Play overlay button if paused */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                      aria-label="Play video"
                    >
                      <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg pl-0.5">
                        <Play className="w-6 h-6 fill-current" />
                      </div>
                    </button>
                  )}
                </div>

                {/* Player Bar */}
                <div className="p-3 bg-[#0c0c0e] border-t border-white/[0.08] space-y-2">
                  {/* Progress scrubber */}
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-white"
                  />

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="p-1 hover:text-white transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-1 hover:text-white transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <span className="text-[11px] text-zinc-400">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                      <span>9:16</span>
                      <span>•</span>
                      <span>1080×1920</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Optional Future Measurement Framework */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#09090b] border border-white/[0.08] p-6 sm:p-10 space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <BarChart3 className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.futureMetrics.eyebrow}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {t.futureMetrics.heading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              {t.futureMetrics.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.futureMetrics.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0e0e11] border border-white/[0.05] space-y-1.5"
              >
                <div className="text-xs font-mono font-medium text-white tracking-tight">
                  {m.label}
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-[11px] font-mono text-zinc-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span>{t.futureMetrics.disclaimer}</span>
          </div>
        </div>
      </section>

      {/* 8. Curated Toolchain by Production Role */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.toolchain.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {t.toolchain.heading}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            {t.toolchain.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.toolchain.groups.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0d0d10] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {toolchainIcons[idx % toolchainIcons.length]}
                </div>

                <h3 className="text-sm font-semibold text-white tracking-tight">
                  {group.role}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {group.roleDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.04] space-y-1.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                  Stack:
                </span>
                <div className="flex flex-wrap gap-1">
                  {group.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.05] text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111114] to-[#0a0a0c] border border-white/[0.08] text-center space-y-6 overflow-hidden relative">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.ctaBox.heading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t.ctaBox.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.ctaBox.primaryBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/projects/katama-coffee"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <span>{t.ctaBox.secondaryBtn}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
