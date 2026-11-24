"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Clock, ShieldCheck, ArrowUpRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

function InstagramIcon({ className }: { className?: string }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
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
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

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

export function ContactView() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].contact;

  const faqs = [
    {
      q: lang === "id" ? "Bahan rekaman apa yang perlu disediakan klien?" : "What footage or assets need to be provided?",
      a: lang === "id"
        ? "Kirimkan rekaman produk, klip kreator, atau aset brand lewat Google Drive atau Frame.io. Motion graphics, sound design, dan visual AI saya tangani langsung sesuai brief."
        : "Share your raw product footage, creator clips, or brand assets via Google Drive or Frame.io. I handle motion graphics, sound design, and AI visuals directly from your brief.",
    },
    {
      q: lang === "id" ? "Berapa lama estimasi pengerjaan satu batch video?" : "What is the typical turnaround timeline for a video batch?",
      a: lang === "id"
        ? "Sprint standar 3 variasi hook biasanya selesai dalam 36–48 jam kerja setelah brief disetujui. Untuk brand film atau film pendek AI, jadwal kita sepakati di awal."
        : "A standard 3-hook ad sprint takes 36 to 48 business hours after brief sign-off. Longer brand spots or AI short films follow a clear schedule we agree on upfront.",
    },
    {
      q: lang === "id" ? "Software dan teknologi apa yang Anda gunakan?" : "What software and production stack do you use?",
      a: lang === "id"
        ? "Saya mengedit di Adobe Premiere Pro, After Effects, dan CapCut Desktop, dipadukan dengan perangkat video dan suara AI saat konsep membutuhkan adegan sinematik atau iterasi hook cepat."
        : "I cut in Adobe Premiere Pro, After Effects, and CapCut Desktop, paired with modern AI video and voice tools when a concept calls for generated scenes or fast hook testing.",
    },
    {
      q: lang === "id" ? "Apakah format video siap tayang langsung di TikTok, Meta, dan platform lain?" : "Are deliverables ready for direct deployment on TikTok, Meta, and YouTube?",
      a: lang === "id"
        ? "Ya. File diekspor sesuai rasio dan standar platform yang Anda butuhkan (9:16 untuk Reels/TikTok/Shorts atau 16:9 untuk YouTube dan brand film), dengan audio -14 LUFS dan subtitle yang jelas tanpa suara."
        : "Yes. I export to the aspect ratio and platform specs you need (9:16 for Reels, TikTok, and Shorts, or 16:9 for YouTube and brand films), mastered to -14 LUFS with clean sound-off captions.",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Breadcrumb / Back to Home */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{t.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {t.headline}
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              {t.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info & Standards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Box & Direct Channels */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>{t.statusTitle}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                {t.statusText}
              </p>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
                {/* Email */}
                <a
                  href="mailto:hasbyassyadiqi@gmail.com"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                      <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">{t.directEmailLabel}</span>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white truncate block">hasbyassyadiqi@gmail.com</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6288286509211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                      <WhatsAppIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">WhatsApp:</span>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white truncate block">+62 882-8650-9211</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/hasbyassyadiqi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                      <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">Instagram:</span>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white truncate block">@hasbyassyadiqi</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hasby-assyadiqi-8b56332b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                      <LinkedInIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">LinkedIn:</span>
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white truncate block">Hasby Assyadiqi</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              </div>
            </div>

            {/* Quality Standards */}
            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.qualityGuaranteeTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {t.qualityGuaranteeText}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-10 h-96 animate-pulse flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Subtle Section Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Full-Width FAQ Section (Balanced 2-Column Grid) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
            <span>{t.faqHeading}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {lang === "id" ? "Hal yang Sering Ditanyakan Sebelum Memulai" : "Frequently Asked Questions Before Starting"}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {lang === "id"
              ? "Jawaban transparan mengenai alur kerja, spesifikasi materi, dan estimasi waktu pengerjaan."
              : "Transparent answers regarding creative workflows, asset specifications, and turnaround timelines."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.07] hover:border-emerald-500/25 transition-all space-y-3 group shadow-lg"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <h4 className="text-sm font-semibold text-white tracking-tight group-hover:text-emerald-400/90 transition-colors leading-snug">
                  {faq.q}
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pl-9 font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
