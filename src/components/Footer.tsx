"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

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

export function Footer() {
  const { lang } = useLanguage();
  const isId = lang === "id";
  const t = TRANSLATIONS[lang].footer;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050506] text-zinc-400 text-xs relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-emerald-500/[0.02] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14 sm:mb-16">
          {/* Column 1: Editorial Vision & Live Availability (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white tracking-tight">
              <span className="font-bold uppercase tracking-wider text-sm text-white">HASBY</span>
              <span className="text-zinc-700 font-mono">/</span>
              <span className="font-mono text-xs text-zinc-400">{t.roleTitle}</span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-normal">
              {t.bio}
            </p>

            {/* Live Pulsing Radar Availability Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-mono font-medium tracking-wide">
                  {t.statusText}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (Col 6-8) */}
          <div className="md:col-span-3 md:pl-2 space-y-3.5">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-300 font-semibold">
              {t.archTitle}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-emerald-400 group-hover:scale-125 transition-all" />
                  <span>{t.workLink}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#workflow"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-emerald-400 group-hover:scale-125 transition-all" />
                  <span>{t.processLink}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-emerald-400 group-hover:scale-125 transition-all" />
                  <span>{t.thesisLink}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-emerald-400 group-hover:scale-125 transition-all" />
                  <span>{t.intakeLink}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication Channels (Col 9-12) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-300 font-semibold">
              {t.channelsTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hasbyassyadiqi@gmail.com"
                  className="inline-flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group py-0.5"
                >
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-xs font-medium truncate">hasbyassyadiqi@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-auto sm:ml-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6288286509211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group py-0.5"
                >
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-xs font-medium">WhatsApp (+62 882-8650-9211)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-auto sm:ml-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hasbyassyadiqi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group py-0.5"
                >
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                    <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-xs font-medium">Instagram (@hasbyassyadiqi)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-auto sm:ml-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hasby-assyadiqi-8b56332b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group py-0.5"
                >
                  <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors shrink-0">
                    <LinkedInIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <span className="text-xs font-medium">LinkedIn (Hasby Assyadiqi)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-auto sm:ml-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-mono">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Hasby. {t.rightsReserved}</span>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span>{t.locationText}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 hidden md:inline">{t.cdnText}</span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <span>{isId ? "Ke Atas" : "Back to top"}</span>
              <ArrowUp className="w-3 h-3 text-zinc-400 group-hover:text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
