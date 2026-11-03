export interface FeaturedWorkConfig {
  projectSlug: string;
  variationId: string;
  videoSrc: string;
  posterSrc: string;
  durationSeconds: number;
  durationLabel: string;
  title: {
    id: string;
    en: string;
  };
  badge: {
    id: string;
    en: string;
  };
  caption: {
    id: string;
    en: string;
  };
  caseStudyLinkText: {
    id: string;
    en: string;
  };
}

/**
 * Single source of truth for the featured sample ad on the homepage.
 * To update the featured ad (e.g. when an AI avatar presenter ad is ready):
 * Update this configuration object with the new project slug, video source,
 * poster, title, badge, caption, and case study link.
 */
export const FEATURED_HERO_WORK: FeaturedWorkConfig = {
  projectSlug: "katama-coffee",
  variationId: "v2-free-print",
  videoSrc: "/videos/katama/katama_v2_editorial.mp4",
  posterSrc: "/images/katama/katama_v2_free_print_poster.jpg",
  durationSeconds: 44,
  durationLabel: "44s",
  title: {
    id: "Katama Coffee & Space · Free Print Discovery",
    en: "Katama Coffee & Space · Free Print Discovery",
  },
  badge: {
    id: "Spec ad independen",
    en: "Independent spec ad",
  },
  caption: {
    id: "Setelah membaca 50+ ulasan pengunjung Katama, saya memilih fasilitas print gratis sebagai pembuka iklan untuk mahasiswa yang sedang mengerjakan tugas.",
    en: "After analyzing 50+ visitor reviews of Katama, I selected the free printing amenity as the opening hook for university students on tight deadlines.",
  },
  caseStudyLinkText: {
    id: "Lihat riset, naskah, dan 3 angle iklan",
    en: "View research, scripts, and 3 ad angles",
  },
};
