"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  Globe,
  Briefcase,
  Zap,
  Languages,
  Download,
  Copy,
  Check,
  Mail,
  ArrowUpRight,
  Palette,
  Volume2,
  Clapperboard,
  Target,
  Scissors,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function AboutBentoSection() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  // Real-time Local Time in Bandar Lampung (WIB / UTC+7)
  const [localTime, setLocalTime] = useState<string>("");
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to GMT+7 (Asia/Jakarta)
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setLocalTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hasbyassyadiqi@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  return (
    <section id="about" className="space-y-10 sm:space-y-12 scroll-mt-24">
      {/* ============================================================ */}
      {/* SECTION HEADER                                               */}
      {/* ============================================================ */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-mono uppercase tracking-[0.18em] text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isId ? "TENTANG // FITRAN HASBY" : "ABOUT // FITRAN HASBY"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              {isId ? "Kreativitas Sinematik, " : "Cinematic Craft, "}
              <span className="text-zinc-500 font-normal">
                {isId ? "Pola Pikir Konversi." : "Conversion Mindset."}
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3 flex flex-col md:items-end">
            <p className="text-xs sm:text-sm text-zinc-400 md:text-right font-normal leading-relaxed">
              {isId
                ? "Menggabungkan cita rasa film dengan strategi video iklan yang jelas untuk brand dan agensi."
                : "Combining cinema craft with focused direct-response editing for modern brands and agencies."}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================ */}
      {/* UNIFIED BENTO GRID CONTAINER                                 */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* ------------------------------------------------------------ */}
        {/* TILE 1: HERO PORTRAIT & LIVE STATUS (5 COLS)                 */}
        {/* ------------------------------------------------------------ */}
        <div className="lg:col-span-5 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111116] via-[#0d0d11] to-[#08080a] p-5 sm:p-6 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.05] blur-3xl pointer-events-none rounded-full" />

          {/* Top Row: Live Availability Pill & Local Time */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono relative z-10">
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.1] border border-emerald-500/25 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                {isId ? "Tersedia Remote & Sprint" : "Open for Remote Roles"}
              </span>
            </div>

            {/* Live Local Time */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-[11px]">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span>{localTime ? `${localTime} WIB` : "WIB (UTC+7)"}</span>
            </div>
          </div>

          {/* Center: Portrait Photo with Refined Framing (Rule of Thirds & Centered Face) */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c0e] shadow-2xl aspect-[768/860] w-full max-w-sm mx-auto group-hover:border-white/20 transition-all duration-300">
            <Image
              src="/images/hasby-portrait.jpg"
              alt="Fitran Hasby - AI Direct Response Video Editor"
              width={768}
              height={860}
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Tag */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
              <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10">
                Fitran Hasby
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-emerald-400 font-medium">
                Bandar Lampung, ID
              </span>
            </div>
          </div>

          {/* Bottom Row: Download CV Action */}
          <div className="space-y-3 pt-2 relative z-10">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white tracking-tight">
                {isId ? "Portofolio & Resume Terverifikasi" : "Verified Resume & Background"}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {isId
                  ? "Dapatkan ringkasan riwayat kerja, tech-stack software, dan rekam jejak performa kampanye."
                  : "Download a structured overview of production history, tooling stack, and commercial track record."}
              </p>
            </div>

            <a
              href="/Hasby_Assyadiqi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-y-0.5" />
              <span>{isId ? "Unduh CV / Resume Resmi (PDF)" : "Download Official CV / Resume (PDF)"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover/btn:text-black transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* RIGHT COLUMN: BIO & EDITORIAL STORY (7 COLS)                 */}
        {/* ------------------------------------------------------------ */}
        <div className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-[#0c0c0f] p-6 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/[0.03] blur-3xl pointer-events-none rounded-full" />

          <div className="space-y-5 relative z-10">
            {/* Eyebrow */}
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              {isId ? "TENTANG SAYA" : "ABOUT ME"}
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
              Meet <span className="italic font-serif font-normal text-zinc-200">Fitran Hasby</span>
            </h3>

            {/* Lead Hook with Editorial Quote Rail Accent */}
            <div className="border-l-2 border-emerald-400/80 pl-4 py-0.5">
              <p className="text-base sm:text-lg font-bold text-white leading-snug">
                {isId
                  ? "Setiap potongan punya satu tugas: membuat orang berhenti, merasakan ceritanya, lalu bertindak."
                  : "Every cut has one job: stop the scroll, make people feel something, and move them to act."}
              </p>
            </div>

            {/* Paragraph 1 */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {isId ? (
                <>
                  Saya membantu brand, agensi, dan kreator memproduksi{" "}
                  <strong className="text-white font-semibold">iklan video dan karya AI filmmaking</strong>{" "}
                  dengan standar visual sinematik dan ritme pengerjaan yang cepat.
                </>
              ) : (
                <>
                  I help brands, agencies, and creators produce{" "}
                  <strong className="text-white font-semibold">performance video ads and AI-directed brand films</strong>{" "}
                  with cinema-level craft and fast turnarounds.
                </>
              )}
            </p>

            {/* Paragraph 2 */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {isId ? (
                <>
                  Di ruang edit, saya memadukan ketelitian timeline{" "}
                  <strong className="text-white font-semibold">Premiere Pro dan After Effects</strong> dengan
                  perangkat produksi AI modern. Mulai dari film pendek brand dan iklan cerita hingga UGC dan uji
                  variasi hook, semuanya berangkat dari{" "}
                  <strong className="text-white font-semibold">riset audiens dan tata suara yang rapi</strong>.
                </>
              ) : (
                <>
                  In the edit, I pair{" "}
                  <strong className="text-white font-semibold">Premiere Pro and After Effects</strong> with modern
                  AI production tools. From short brand films and narrative spots to UGC and hook-testing sprints,
                  every cut starts with{" "}
                  <strong className="text-white font-semibold">audience insight and clean sound design</strong>.
                </>
              )}
            </p>

            {/* Value Punchline */}
            <p className="text-xs sm:text-sm font-semibold text-zinc-200 tracking-tight pt-1">
              {isId
                ? "Komunikasi terbuka, jadwal jelas, dan hasil yang siap langsung tayang."
                : "Clear timelines, direct communication, and files ready to publish."}
            </p>
          </div>

          {/* Skill & Tool Pills with Unified Emerald Icons */}
          <div className="pt-5 border-t border-white/[0.06] flex flex-wrap gap-2 relative z-10">
            {[
              {
                name: "Premiere Pro",
                icon: (
                  <span className="w-4 h-4 rounded-[3.5px] bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 text-[8.5px] font-bold font-mono flex items-center justify-center leading-none">
                    Pr
                  </span>
                ),
              },
              {
                name: "After Effects",
                icon: (
                  <span className="w-4 h-4 rounded-[3.5px] bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 text-[8.5px] font-bold font-mono flex items-center justify-center leading-none">
                    Ae
                  </span>
                ),
              },
              {
                name: "CapCut Desktop",
                icon: <Scissors className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "AI Filmmaking",
                icon: <Clapperboard className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "Color Grading",
                icon: <Palette className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "Sound Design",
                icon: <Volume2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "Motion Graphics",
                icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "Storytelling",
                icon: <Clapperboard className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "Direct-Response Ads",
                icon: <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
              {
                name: "Hook Retention",
                icon: <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
              },
            ].map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-emerald-500/[0.08] border border-white/[0.08] hover:border-emerald-500/30 text-xs text-zinc-300 hover:text-white font-medium transition-all shadow-2xs group/pill cursor-default"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* TILE 4: RECRUITER & AVAILABILITY SPECS HUB (12 COLS)         */}
        {/* ------------------------------------------------------------ */}
        <div className="lg:col-span-12 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0d0d11] via-[#0a0a0d] to-[#070709] p-6 sm:p-10 space-y-8 shadow-xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-emerald-500/[0.03] blur-3xl pointer-events-none rounded-full" />

          {/* Section Header */}
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isId ? "KREDENSIAL KERJA & KETERSEDIAAN" : "AVAILABILITY & RECRUITER SPECS"}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {isId ? "Tertarik Membahas Proyek atau Peran Remote?" : "Interested in Discussing a Project or Remote Role?"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed font-normal">
              {isId
                ? "Overlap zona waktu fleksibel, kecepatan iterasi 24–48 jam, dan komunikasi transparan siap mendukung tim atau brand Anda."
                : "Flexible timezone overlap, fast 24–48h sprint turnarounds, and clear transparent communication ready for your team or brand."}
            </p>
          </div>

          {/* 4 Sleek Bento Spec Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1 relative z-10">
            {/* Spec 1: Timezone & Location */}
            <div className="p-4 rounded-2xl bg-[#09090c] border border-white/[0.06] space-y-2 hover:border-white/15 transition-all">
              <div className="flex items-center gap-2 text-emerald-400">
                <Globe className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  {isId ? "LOKASI & ZONA WAKTU" : "TIMEZONE & LOCATION"}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                Bandar Lampung, ID · UTC+7 (WIB)
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {isId
                  ? "Fleksibel overlap jam kerja US, EU, dan APAC."
                  : "Flexible working overlap with US, EU, and APAC teams."}
              </p>
            </div>

            {/* Spec 2: Engagement Models */}
            <div className="p-4 rounded-2xl bg-[#09090c] border border-white/[0.06] space-y-2 hover:border-white/15 transition-all">
              <div className="flex items-center gap-2 text-sky-400">
                <Briefcase className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  {isId ? "MODEL KOLABORASI" : "ENGAGEMENT FIT"}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                Full-time Remote · Retainer · Sprints
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {isId
                  ? "Siap langsung bergabung dengan tim brand in-house maupun agensi."
                  : "Ready to plug straight into in-house brand teams or agency squads."}
              </p>
            </div>

            {/* Spec 3: Turnaround & Speed */}
            <div className="p-4 rounded-2xl bg-[#09090c] border border-white/[0.06] space-y-2 hover:border-white/15 transition-all">
              <div className="flex items-center gap-2 text-amber-400">
                <Zap className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  {isId ? "KECEPATAN TURNAROUND" : "PACE & TURNAROUND"}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                {isId ? "24–48 Jam per Siklus Iterasi" : "24–48h per Iteration Cycle"}
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {isId
                  ? "Milestone jelas dan putaran review ringkas dari rough cut hingga master final."
                  : "Clear milestones and crisp review rounds from first cut to final master."}
              </p>
            </div>

            {/* Spec 4: Languages & Communication */}
            <div className="p-4 rounded-2xl bg-[#09090c] border border-white/[0.06] space-y-2 hover:border-white/15 transition-all">
              <div className="flex items-center gap-2 text-violet-400">
                <Languages className="w-4 h-4 shrink-0" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  {isId ? "BAHASA & RESPON" : "LANGUAGES & RESPONSE"}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                English & Bahasa Indonesia
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {isId
                  ? "Balasan dalam 24 jam kerja via Slack atau Email."
                  : "Replies within 24 business hours via Email or Slack."}
              </p>
            </div>
          </div>

          {/* Quick Connect Actions Bar */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="text-xs text-zinc-400 text-center sm:text-left font-normal">
              {isId
                ? "Terbuka untuk sprint iklan, AI brand film, uji coba edit, atau peran remote jangka panjang."
                : "Open for ad sprints, AI brand films, trial edits, or long-term remote roles."}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {/* 1-Click Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-white transition-all cursor-pointer shadow-sm"
                title={isId ? "Klik untuk salin email" : "Click to copy email"}
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">
                      {isId ? "Email Disalin!" : "Email Copied!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>hasbyassyadiqi@gmail.com</span>
                  </>
                )}
              </button>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hasby-assyadiqi-8b56332b5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-200 hover:text-white transition-all"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              {/* Contact Form CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{isId ? "Hubungi Saya" : "Get in Touch"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
