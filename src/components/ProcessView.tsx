"use client";

import { PRODUCTION_PIPELINE } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight, Cpu, Zap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function ProcessView() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].process;

  const toolSuite = [
    {
      name: "Remotion (React + TypeScript)",
      category: lang === "id" ? "Animasi Programmatic & Komposisi" : "Programmatic Animation & Composition",
      note: lang === "id" ? "Menyusun video secara modular dengan kode: teks kinetik, pergerakan grafik SVG, dan sinkronisasi frame-accurate." : "Modular code-driven video synthesis: kinetic text, SVG motion graphics, and frame-accurate audio synchronization.",
    },
    {
      name: "ElevenLabs Neural Audio",
      category: lang === "id" ? "Sintesis Vokal AI Terkurasi" : "Curated AI Vocal Synthesis",
      note: lang === "id" ? "Voiceover bahasa Indonesia percakapan natural (model Bian) dengan artikulasi jernih, jeda nafas halus, dan zero noise." : "Conversational Indonesian neural voiceover with natural cadence, subtle breath pauses, and zero studio echo.",
    },
    {
      name: "Adobe Premiere Pro",
      category: lang === "id" ? "Penyelarasan Footage & B-Roll" : "Footage Assembly & B-Roll Prep",
      note: lang === "id" ? "Pemilihan momen emas rekaman kafe, penyesuaian rasio vertikal 9:16, dan grading warna natural." : "Curating golden moments from raw cafe footage, vertical 9:16 framing, and natural color grading.",
    },
    {
      name: "Tailwind CSS & SVG Vector",
      category: lang === "id" ? "Desain Grafis Kinetik" : "Kinetic Graphic Design",
      note: lang === "id" ? "Pembuatan elemen visual kustom (ilustrasi printer, plang ruko fotokopi, badging) yang scalable dan ringan." : "Building custom vector motion assets (printer graphics, photocopy shutters, badges) that scale cleanly.",
    },
    {
      name: "Audacity / FabFilter EQ",
      category: lang === "id" ? "Audio Mastering & SFX" : "Audio Mastering & Soundbed",
      note: lang === "id" ? "Kalibrasi loudness audio ke standar broadcast media sosial (-14 LUFS) dengan SFX detak jam dan ketikan keyboard." : "Audio loudness calibration to social broadcast standards (-14 LUFS) layered with tactile typing and ticking SFX.",
    },
  ];

  const comparisonRows = [
    { dimension: t.dimensions.dim1, traditional: t.dimensions.trad1, aiAssisted: t.dimensions.ai1 },
    { dimension: t.dimensions.dim2, traditional: t.dimensions.trad2, aiAssisted: t.dimensions.ai2 },
    { dimension: t.dimensions.dim3, traditional: t.dimensions.trad3, aiAssisted: t.dimensions.ai3 },
    { dimension: t.dimensions.dim4, traditional: t.dimensions.trad4, aiAssisted: t.dimensions.ai4 },
    { dimension: t.dimensions.dim5, traditional: t.dimensions.trad5, aiAssisted: t.dimensions.ai5 },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Page Header */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.eyebrow}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {t.headline}
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              {t.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* The 5-Step Pipeline */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            {t.pipelineHeading}
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            {t.pipelineSub}
          </span>
        </div>

        <div className="space-y-6">
          {PRODUCTION_PIPELINE.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 hover:border-white/[0.14] transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              {/* Step Number & Badge */}
              <div className="md:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-mono font-semibold text-white/30">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] border border-white/[0.06] text-zinc-300">
                    {item.badge[lang]}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                  {item.phase[lang]}
                </h3>
              </div>

              {/* Description & Tools */}
              <div className="md:col-span-8 space-y-4 md:border-l md:border-white/[0.06] md:pl-8">
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.summary[lang]}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    Core Toolchain:
                  </span>
                  {item.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.05] text-zinc-300"
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

      {/* Comparison: Traditional vs Programmatic Direct Response */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-4">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            {t.comparisonHeading}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {t.comparisonSub}
          </p>
        </div>

        <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-4 px-6 font-mono uppercase tracking-wider text-zinc-400 text-[11px]">
                    Production Dimension
                  </th>
                  <th className="py-4 px-6 font-mono uppercase tracking-wider text-zinc-400 text-[11px]">
                    Traditional Production
                  </th>
                  <th className="py-4 px-6 font-mono uppercase tracking-wider text-emerald-400 text-[11px]">
                    Remotion + AI Direct Response (Hasby)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-4 px-6 font-medium text-white">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 text-zinc-400">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 text-zinc-200 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{row.aiAssisted}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Software Toolchain Breakdown */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-4">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            {t.toolsuiteHeading}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {t.toolsuiteSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolSuite.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0d0d10] border border-white/[0.06] space-y-2 hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-sm">{item.name}</span>
                <Cpu className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <div className="text-[10px] font-mono uppercase text-zinc-400">
                {item.category}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#111114] to-[#0a0a0c] border border-white/[0.08] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            {t.ctaBoxHeadline}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            {t.ctaBoxSub}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.ctaBoxBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
