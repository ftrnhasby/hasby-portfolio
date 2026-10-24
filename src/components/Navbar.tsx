"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;

  const navLinks = [
    { href: "/", label: t.work },
    { href: "/process", label: t.process },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#070708]/80 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link 
          href="/" 
          className="group flex items-center gap-2.5 sm:gap-3 text-sm font-medium tracking-tight text-white hover:text-white/90 transition-colors shrink-0"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
          <span className="font-semibold tracking-wider text-xs uppercase text-zinc-100">
            Hasby
          </span>
          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-xs text-zinc-400 font-mono tracking-normal hidden sm:inline">
            {t.roleSubtitle}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 px-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white/[0.12] text-white font-medium shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Selector + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 text-[11px] font-mono">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "id"
                  ? "bg-white text-black font-semibold shadow-xs"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-white text-black font-semibold shadow-xs"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-200"
          >
            <span>{t.bookCta}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Right Controls: Language + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5 text-[11px] font-mono">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === "id"
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-400"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === "en"
                  ? "bg-white text-black font-semibold"
                  : "text-zinc-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0b0b0d] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-lg ${
                  pathname === link.href
                    ? "bg-white/[0.08] text-white font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-medium bg-white text-black hover:bg-zinc-200"
            >
              <span>{t.bookCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
