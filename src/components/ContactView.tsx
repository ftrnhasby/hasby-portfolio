"use client";

import { ContactForm } from "@/components/ContactForm";
import { Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
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
        ? "Jika Anda memiliki rekaman B-roll kafe, produk, atau foto arsitektur, Anda dapat mengirimkannya via Google Drive atau Frame.io. Grafis teks kinetik, ilustrasi vektor, dan voiceover AI dapat dirancang langsung di Remotion."
        : "If you have existing raw cafe B-roll, product clips, or photos, you can share them via Google Drive or Frame.io. Kinetic captions, vector graphics, and AI voiceover can be built directly in Remotion.",
    },
    {
      q: lang === "id" ? "Berapa lama estimasi pengerjaan satu batch video?" : "What is the typical turnaround timeline for a video batch?",
      a: lang === "id"
        ? "Satu batch berisi 3 variasi hook naskah dengan durasi 30–45 detik biasanya selesai dalam 36 hingga 48 jam kerja setelah brief disetujui."
        : "A testing batch consisting of 3 distinct hook variations (30–45s) is typically finalized within 36 to 48 business hours following brief confirmation.",
    },
    {
      q: lang === "id" ? "Mengapa menggunakan Remotion dibanding NLE konvensional?" : "Why use Remotion over conventional video editing software?",
      a: lang === "id"
        ? "Remotion memungkinkan kami memprogram animasi teks dan komponen visual secara presisi dengan kode (React). Ketika perlu mengganti teks penawaran atau menyesuaikan durasi suara vokal baru, render multi-variasi dapat dilakukan dalam hitungan menit."
        : "Remotion enables programmatic component-driven video synthesis in React. Updating offer copy, swapping audio clips, or re-exporting multiple hook cuts takes minutes instead of hours of manual timeline tweaking.",
    },
    {
      q: lang === "id" ? "Apakah video sudah siap untuk TikTok Ads & Meta Ads?" : "Are deliverables ready for direct upload to TikTok & Meta Ads?",
      a: lang === "id"
        ? "Ya, seluruh video diekspor dalam format MP4 rasio 9:16 vertikal (1080×1920 30fps) dengan audio termaster -14 LUFS, teks terbaca jelas dalam mode sound-off, dan komposisi modular untuk Dynamic Creative."
        : "Yes, all assets are exported as 1080×1920 30fps vertical MP4s mastered to -14 LUFS, featuring sound-off legibility and modular structure suitable for Dynamic Creative testing.",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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

      {/* Main Grid: Info / FAQs + Form */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Availability Box & Direct Channels */}
            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>{t.statusTitle}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {t.statusText}
              </p>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-zinc-500 shrink-0">{t.directEmailLabel}</span>
                  <a
                    href="mailto:hasbyassyadiqi@gmail.com"
                    className="text-zinc-200 hover:text-white flex items-center gap-1.5 transition-colors group truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 shrink-0 transition-colors" />
                    <span className="truncate group-hover:underline">hasbyassyadiqi@gmail.com</span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-zinc-500 shrink-0">WhatsApp:</span>
                  <a
                    href="https://wa.me/6288286509211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 shrink-0 transition-colors" />
                    <span className="group-hover:underline">+62 882-8650-9211</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-zinc-500 shrink-0">Instagram:</span>
                  <a
                    href="https://www.instagram.com/hasbyassyadiqi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 shrink-0 transition-colors" />
                    <span className="group-hover:underline">@hasbyassyadiqi</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-zinc-500 shrink-0">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/hasby-assyadiqi-8b56332b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 shrink-0 transition-colors" />
                    <span className="group-hover:underline">Hasby Assyadiqi</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quality Standards */}
            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.qualityGuaranteeTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.qualityGuaranteeText}
              </p>
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">
                {t.faqHeading}
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.05] space-y-1.5"
                  >
                    <h4 className="text-xs font-semibold text-zinc-200">{faq.q}</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Intake Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
