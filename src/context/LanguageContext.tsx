"use client";

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  useEffect,
} from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

const STORAGE_KEY = "hasby_portfolio_lang";
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "id";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") {
      return saved;
    }
  } catch {
    // LocalStorage unavailable in certain environments
  }
  return "id";
}

function getServerSnapshot(): Language {
  return "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Synchronize document attributes & release anti-flash lock once client resolves language
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("lang-loading");
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // Ignore storage errors
      }
    }
    emitChange();
  }, []);

  const toggleLang = useCallback(() => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
