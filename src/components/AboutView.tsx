"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Award, BrainCircuit, Sparkles, Terminal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function AboutView() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].about;

  const principles = [
    {
      title: lang === "id" ? "Algoritma menyaring, tetapi manusia yang memutuskan." : "Algorithms filter, but humans decide.",
      description: lang === "id"
        ? "Meskipun algoritma TikTok dan Meta menentukan distribusi tayangan, psikologi audiens yang menentukan tindakan. Setiap video dirancang untuk memicu emosi yang tepat di detik awal."
        : "While social media algorithms control impression distribution, human psychology drives action. Every video is engineered to trigger the right emotion in the opening seconds.",
    },
    {
      title: lang === "id" ? "Visual estetik tanpa diferensiasi fungsional adalah sia-sia." : "Aesthetic visuals without functional differentiators fall flat.",
      description: lang === "id"
        ? "Banyak video kafe atau produk yang secara visual indah tetapi gagal menarik pelanggan karena tidak menjawab masalah nyata seperti colokan, jam buka, atau fasilitas darurat."
        : "Many product videos look visually stunning yet fail to convert because they ignore real audience anxieties like opening hours, outlets, or emergency utility.",
    },
    {
      title: lang === "id" ? "Kode dan AI adalah akselerator eksekusi." : "Code and AI serve as execution accelerators.",
      description: lang === "id"
        ? "Remotion dan ElevenLabs memungkinkan pengujian berbagai sudut naskah secara modular tanpa proses rekaman ulang yang lambat dan mahal."
        : "Remotion and ElevenLabs allow rapid multi-angle testing without the latency and prohibitive costs of traditional reshoots.",
    },
    {
      title: lang === "id" ? "Presisi per frame tidak bisa dikompromikan." : "Frame-by-frame precision is non-negotiable.",
      description: lang === "id"
        ? "Satu detik jeda tanpa informasi visual dapat memicu penonton melakukan swipe-away. Pemotongan adegan harus efisien dan langsung ke pokok pesan."
        : "A single dead second in social feeds triggers an instant swipe-away. Scene cuts must be purposeful, rhythmic, and content-dense.",
    },
  ];

  const workstationSpecs = [
    {
      label: lang === "id" ? "Framework Video Programmatic" : "Programmatic Video Framework",
      value: "Remotion 4.0 (React, TypeScript, Tailwind CSS)",
    },
    {
      label: lang === "id" ? "Neural Voiceover AI" : "Neural Voiceover AI",
      value: "ElevenLabs (Model Multilingual v2 / Bian)",
    },
    {
      label: lang === "id" ? "NLE & Footage Prep" : "NLE & Footage Preparation",
      value: "Adobe Premiere Pro (9:16 Vertical Assembly)",
    },
    {
      label: lang === "id" ? "Audio Mastering" : "Audio Mastering & Loudness",
      value: "Standard -14 LUFS Broadcast Mobile EQ",
    },
    {
      label: lang === "id" ? "Kecepatan Iterasi Naskah" : "Script Iteration Turnaround",
      value: lang === "id" ? "36–48 jam per batch variasi hook" : "36–48 hours per hook variation batch",
    },
    {
      label: lang === "id" ? "Basis Operasi" : "Operating Base",
      value: "Bandar Lampung, Indonesia (WIB / GMT+7)",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header & Portrait Profile Section */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.eyebrow}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Bio & Positioning */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                {t.headline}
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
                {t.subheadline}
              </p>

              {/* Profile Intro Callout */}
              <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block">
                  {t.profileRole}
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.profileBio}
                </p>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-full max-w-[280px] aspect-[430/506]">
                <Image
                  src="/images/hasby-formal.png"
                  alt={t.portraitAlt}
                  width={430}
                  height={506}
                  priority
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    Hasby • Bandar Lampung, ID
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-8 text-sm text-zinc-400 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {t.storyHeading}
              </h2>
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-300">
                <BrainCircuit className="w-4 h-4 text-emerald-400" />
                <span>{t.thesisBoxTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.thesisBoxText}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {t.targetClientsHeading}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>{t.target1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>{t.target2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>{t.target3}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Workstation & Principles */}
          <div className="lg:col-span-5 space-y-8">
            {/* Workstation Specs Card */}
            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                <span>{t.studioHeading}</span>
              </div>

              <div className="space-y-3">
                {workstationSpecs.map((spec, idx) => (
                  <div key={idx} className="pb-3 border-b border-white/[0.04] last:border-b-0 space-y-0.5">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">{spec.label}</span>
                    <span className="text-xs font-medium text-zinc-200">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values Card */}
            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.rulesHeading}</span>
              </div>

              <div className="space-y-3">
                {principles.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-semibold text-white">{p.title}</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#09090b] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {t.readyHeading}
            </h3>
            <p className="text-xs text-zinc-400">
              {t.readySub}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all self-start sm:self-auto shadow-md"
          >
            <span>{t.readyBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
