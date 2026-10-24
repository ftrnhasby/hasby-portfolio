"use client";

import { ContactForm } from "@/components/ContactForm";
import { Mail, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function ContactPage() {
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
            {/* Availability Box */}
            <div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>{t.statusTitle}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {t.statusText}
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>{t.directEmailLabel}</span>
                <a
                  href="mailto:contact@hasbyeditor.com"
                  className="text-white hover:underline flex items-center gap-1 font-mono"
                >
                  <Mail className="w-3 h-3" />
                  <span>contact@hasbyeditor.com</span>
                </a>
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
