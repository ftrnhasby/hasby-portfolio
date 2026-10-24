"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Mail, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function ContactForm() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].contact;

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    scope: t.scopeOptions[0],
    message: "",
  });

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Brief: ${formData.brand || formData.name}`);
    const body = encodeURIComponent(
      `Name / Role: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Brand / Account: ${formData.brand || "-"}\n` +
      `Scope: ${formData.scope}\n\n` +
      `Creative Objectives & Message:\n${formData.message}\n`
    );
    return `mailto:hasbyassyadiqi@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = generateMailto();
    // Open user's default email client with prefilled brief
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyBrief = () => {
    const text =
      `To: hasbyassyadiqi@gmail.com\n` +
      `Subject: Project Brief - ${formData.brand || formData.name}\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Brand: ${formData.brand}\n` +
      `Scope: ${formData.scope}\n\n` +
      `Message:\n${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#0d0d10] border border-white/[0.08] p-8 sm:p-12 text-center space-y-5">
        <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-white tracking-tight">
          {lang === "id" ? "Format Brief Siap Dikirim" : "Brief Draft Prepared"}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
          {lang === "id"
            ? `Aplikasi email Anda telah terbuka dengan draft brief terstruktur untuk ${formData.name}. Jika email tidak terbuka otomatis, Anda dapat menyalin teks brief di bawah ini.`
            : `Your email client has been prompted with a structured brief draft for ${formData.name}. If your client didn't open automatically, you can copy the text below.`}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleCopyBrief}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-white hover:bg-white/[0.1] transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === "id" ? "Tersalin!" : "Copied!") : (lang === "id" ? "Salin Teks Brief" : "Copy Brief Text")}</span>
          </button>

          <a
            href={generateMailto()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === "id" ? "Buka Email Ulang" : "Re-open Email"}</span>
          </a>
        </div>

        <div className="pt-4">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
          >
            {lang === "id" ? "Kembali ke formulir" : "Edit brief details"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-10 space-y-6"
    >
      <div className="border-b border-white/[0.06] pb-6">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
          {t.formTitle}
        </span>
        <h3 className="text-xl font-semibold text-white tracking-tight">
          {t.headline}
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          {t.formSub}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-300 block">
            {t.nameLabel} <span className="text-emerald-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[#111114] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-300 block">
            {t.emailLabel} <span className="text-emerald-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[#111114] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Brand / Offer URL */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-300 block">
            {t.brandLabel}
          </label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            placeholder={t.brandPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-[#111114] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>

        {/* Project Scope */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-zinc-300 block">
            {t.scopeLabel}
          </label>
          <select
            value={formData.scope}
            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#111114] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-white/30 transition-colors"
          >
            {t.scopeOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Creative Message */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-zinc-300 block">
          {t.messageLabel} <span className="text-emerald-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t.messagePlaceholder}
          className="w-full px-4 py-3 rounded-xl bg-[#111114] border border-white/[0.08] text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2 space-y-3">
        <button
          type="submit"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all duration-200 shadow-md"
        >
          <span>{t.submitBtn}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-[11px] font-mono text-zinc-500">
          {t.submitNotice}
        </p>
      </div>
    </form>
  );
}
