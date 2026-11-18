export type LocalizedString = {
  id: string;
  en: string;
};

export interface VideoItem {
  id: string;
  title: LocalizedString;
  src: string;
  poster: string;
  angle: LocalizedString;
  description: LocalizedString;
  duration: string; // e.g. "30s", "44s", "41s", "45s"
  aspectRatio: string; // e.g. "9:16"
  status?: "published" | "draft";
}

export interface CollectionCategory {
  slug: string;
  label: LocalizedString;
}

export interface CreativeCollection {
  slug: string;
  title: string;
  subtitle: LocalizedString;
  description: LocalizedString;
  coverImage: string;
  categories: string[]; // e.g. ["product-ads", "ai-ads", "ugc-ads", "hook-variations", "review-ads"]
  projectType: "Spec Ad" | "Client Work" | "Template Spec";
  status: "published" | "draft";
  isTemplate?: boolean;
  year: string;
  brand: string;
  role: LocalizedString;
  softwareUsed: string[]; // e.g. ["CapCut", "Adobe Premiere Pro"]
  videos: VideoItem[];
  caseStudyHref?: string; // link to deep-dive case study e.g. "/projects/katama-coffee"
}
