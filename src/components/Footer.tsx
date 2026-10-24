"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050506] text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Column 1: Editorial Vision */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-medium tracking-tight">
              <span className="font-semibold uppercase tracking-wider text-xs">Hasby</span>
              <span className="text-zinc-600">/</span>
              <span className="font-mono text-xs text-zinc-400">{t.roleTitle}</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              {t.bio}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] text-zinc-400 font-mono">
                {t.statusText}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">{t.archTitle}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.workLink}
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  {t.processLink}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.thesisLink}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.intakeLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">{t.channelsTitle}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@hasbyeditor.com"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                >
                  <span>{t.emailDirect}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/katama_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                >
                  <span>Katama (@katama_id)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-mono">
          <div>
            © {new Date().getFullYear()} Hasby. {t.rightsReserved}
          </div>
          <div className="flex items-center gap-6">
            <span>{t.locationText}</span>
            <span>{t.cdnText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
