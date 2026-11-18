import { CreativeCollection, CollectionCategory } from "@/types/collection";

export const MASTER_CATEGORIES: CollectionCategory[] = [
  {
    slug: "ai-ads",
    label: { id: "AI Ads", en: "AI Ads" },
  },
  {
    slug: "ugc-ads",
    label: { id: "UGC Ads", en: "UGC Ads" },
  },
  {
    slug: "product-and-review",
    label: { id: "Product and review", en: "Product and review" },
  },
];

export const COLLECTIONS: CreativeCollection[] = [
  {
    slug: "katama-coffee",
    title: "Katama Coffee & Space",
    brand: "Katama Coffee & Space",
    subtitle: {
      id: "Rangkaian 3 Video Iklan Vertikal (Free Print, WFC Contrast, Deadline 24 Jam)",
      en: "3-Part Vertical Ad System (Free Print, WFC Contrast, 2 AM Deadline Emergency)",
    },
    description: {
      id: "Rangkaian video iklan direct response format vertikal (9:16) untuk kafe 24 jam Katama Way Halim. Menguji 3 sudut pandang narasi: kontras fungsional WFC, eksplorasi fitur print gratis, dan kepanikan tugas larut malam.",
      en: "A 3-part direct response vertical video system (9:16) for Katama Way Halim 24-hour space. Testing 3 isolated angles: functional WFC contrast, free document printing discovery, and midnight deadline relief.",
    },
    coverImage: "/images/katama/katama_v2_free_print_poster.jpg",
    categories: ["product-and-review"],
    projectType: "Spec Ad",
    status: "published",
    year: "2026",
    role: {
      id: "Creative Strategist & Video Editor",
      en: "Creative Strategist & Video Editor",
    },
    softwareUsed: ["CapCut", "Adobe Premiere Pro"],
    caseStudyHref: "/projects/katama-coffee",
    videos: [
      {
        id: "katama-v1",
        title: {
          id: "Cut 01: Kontras Realitas WFC",
          en: "Cut 01: WFC Contrast",
        },
        src: "/videos/katama/katama_v1_editorial.mp4",
        poster: "/images/katama/katama_v1_poster.jpg",
        angle: {
          id: "Pola Interupsi & Kontras Fungsional",
          en: "Pattern-Interrupt & Functional Contrast",
        },
        description: {
          id: "Membongkar ekspektasi kafe estetik biasa dengan menyorot kebutuhan fungsional mahasiswa & pekerja: stop kontak di tiap meja dan Wi-Fi cepat.",
          en: "Disrupting generic cafe aesthetic expectations by highlighting practical essentials: abundant outlets and fast WiFi without distraction.",
        },
        duration: "30s",
        aspectRatio: "9:16",
        status: "published",
      },
      {
        id: "katama-v2",
        title: {
          id: "Cut 02: Eksplorasi Fitur Free Print",
          en: "Cut 02: Free Print Discovery",
        },
        src: "/videos/katama/katama_v2_editorial.mp4",
        poster: "/images/katama/katama_v2_free_print_poster.jpg",
        angle: {
          id: "Fitur Langka (Unique Selling Proposition)",
          en: "Rare Feature (Unique Selling Proposition)",
        },
        description: {
          id: "Menjadikan fasilitas print dokumen gratis sebagai hook pembuka iklan untuk menarik perhatian mahasiswa yang sedang mengerjakan tugas akhir.",
          en: "Using the free document printing amenity as the opening ad hook to capture senior students working on final assignments.",
        },
        duration: "44s",
        aspectRatio: "9:16",
        status: "published",
      },
      {
        id: "katama-v3",
        title: {
          id: "Cut 03: Penyelamat Panik Deadline 24 Jam",
          en: "Cut 03: 2 AM Deadline Emergency",
        },
        src: "/videos/katama/katama_v3_deadline_emergency.mp4",
        poster: "/images/katama/katama_v3_poster.jpg",
        angle: {
          id: "Urgensi Emosional Larut Malam",
          en: "Midnight Emotional Urgency",
        },
        description: {
          id: "Membidik momen krisis mahasiswa saat toko fotokopi luar dan kafe lain tutup tengah malam, diselesaikan fasilitas 24 jam Katama.",
          en: "Targeting the high-stress moment when external print shops and other cafes close at midnight, resolved by Katama's 24-hour setup.",
        },
        duration: "44s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
  {
    slug: "nespresso-vertuo",
    title: "Nespresso Vertuo Pop",
    brand: "Nespresso",
    subtitle: {
      id: "2 Angle Iklan Vertikal untuk Pekerja WFH (Meeting Rush vs. Sensory Crema)",
      en: "2 Vertical Ad Angles for Remote Professionals (Meeting Rush vs. Sensory Crema)",
    },
    description: {
      id: "Dua cara menarik perhatian pekerja WFH: satu iklan dibuka dengan kepanikan rapat pagi yang sebentar lagi mulai, satu lagi dengan visual sensory close-up crema Centrifusion 4.000 RPM.",
      en: "Two ways to catch a remote worker's attention: one ad opens with an urgent morning meeting rush, the other with a sensory close-up of 4,000 RPM Centrifusion crema.",
    },
    coverImage: "/images/nespresso/nespresso_v2_crema_poster.jpg",
    categories: ["product-and-review"],
    projectType: "Spec Ad",
    status: "published",
    year: "2026",
    role: {
      id: "Creative Strategist & Video Editor",
      en: "Creative Strategist & Video Editor",
    },
    softwareUsed: ["CapCut", "Adobe Premiere Pro"],
    caseStudyHref: "/projects/nespresso-vertuo",
    videos: [
      {
        id: "nespresso-v1",
        title: {
          id: "Cut 01: The 08:55 AM Meeting Emergency",
          en: "Cut 01: The 08:55 AM Meeting Emergency",
        },
        src: "/videos/nespresso/nespresso-vertuo-v1.mp4",
        poster: "/images/nespresso/nespresso_v1_poster.jpg",
        angle: {
          id: "Urgensi Waktu & Solusi Praktis",
          en: "Time Friction & Quick Relief",
        },
        description: {
          id: "Menampilkan friksi nyata pekerja remote saat meeting pagi dimulai dalam 5 menit tapi kafein belum siap.",
          en: "Depicting real remote worker morning friction: a 9 AM meeting starts in 5 minutes and caffeine is desperately needed.",
        },
        duration: "45s",
        aspectRatio: "9:16",
        status: "published",
      },
      {
        id: "nespresso-v2",
        title: {
          id: "Cut 02: The 30-Second Desk Barista",
          en: "Cut 02: The 30-Second Desk Barista",
        },
        src: "/videos/nespresso/nespresso-vertuo-v2.mp4",
        poster: "/images/nespresso/nespresso_v2_crema_poster.jpg",
        angle: {
          id: "Sensory Crema & Product Reveal",
          en: "Sensory Crema & Product Reveal",
        },
        description: {
          id: "Close-up pouring crema berputar 4.000 RPM Centrifusion yang membuktikan kualitas kopi kafe langsung di meja kerja.",
          en: "Sensory close-up of 4,000 RPM Centrifusion crema pour, proving cafe-grade coffee right at the home desk.",
        },
        duration: "41s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
  {
    slug: "aura-botanicals-ai",
    title: "Aura Botanicals",
    brand: "Aura Botanicals",
    subtitle: {
      id: "AI Narrative Ad: Eksplorasi Visual & Karakter Terkalibrasi",
      en: "AI Narrative Ad: Character & Visual Calibration Sprint",
    },
    description: {
      id: "Eksplorasi pembuatan video iklan vertikal berbasis karakter dan visual sinematik AI yang diedit dengan pacing iklan komersial direct-response.",
      en: "Exploration of AI-generated characters and visuals cut with commercial direct-response ad pacing.",
    },
    coverImage: "/images/nespresso/nespresso_v1_poster.jpg",
    categories: ["ai-ads"],
    projectType: "Template Spec",
    isTemplate: true,
    status: "published",
    year: "2026",
    role: {
      id: "AI Video Editor & Strategist",
      en: "AI Video Editor & Strategist",
    },
    softwareUsed: ["CapCut", "Adobe Premiere Pro", "ElevenLabs Neural AI"],
    caseStudyHref: "/projects/aura-botanicals-ai",
    videos: [
      {
        id: "aura-ai-v1",
        title: {
          id: "Cut 01: The Morning Ritual Drama",
          en: "Cut 01: The Morning Ritual Drama",
        },
        src: "/videos/nespresso/nespresso-vertuo-v1.mp4",
        poster: "/images/nespresso/nespresso_v1_poster.jpg",
        angle: {
          id: "Naratif Mini Drama AI",
          en: "AI Mini-Drama Narrative",
        },
        description: {
          id: "Format cerita naratif berbasis karakter AI terarah untuk menarik atensi audiens skincare natural.",
          en: "Character-driven AI story format designed to hold attention for natural skincare audiences.",
        },
        duration: "45s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
  {
    slug: "lumina-skin-ugc",
    title: "Lumina Skin",
    brand: "Lumina Skin",
    subtitle: {
      id: "UGC Native Testimonial & Problem-Agitation Sprint",
      en: "UGC Native Testimonial & Problem-Agitation Sprint",
    },
    description: {
      id: "Format iklan kreator native vertikal dengan hook pembuka masalah 0–3 detik dan social proof berdurasi padat.",
      en: "Native vertical creator ad format featuring 0–3s problem agitation and rapid social proof.",
    },
    coverImage: "/images/katama/katama_v1_poster.jpg",
    categories: ["ugc-ads"],
    projectType: "Template Spec",
    isTemplate: true,
    status: "published",
    year: "2026",
    role: {
      id: "Direct Response Video Editor",
      en: "Direct Response Video Editor",
    },
    softwareUsed: ["CapCut", "Adobe Premiere Pro"],
    caseStudyHref: "/projects/lumina-skin-ugc",
    videos: [
      {
        id: "lumina-ugc-v1",
        title: {
          id: "Cut 01: Don't Buy Until You Know This",
          en: "Cut 01: Don't Buy Until You Know This",
        },
        src: "/videos/katama/katama_v1_editorial.mp4",
        poster: "/images/katama/katama_v1_poster.jpg",
        angle: {
          id: "Pattern Interrupt & Curiosity Hook",
          en: "Pattern Interrupt & Curiosity Hook",
        },
        description: {
          id: "Pola interupsi rasa ingin tahu dengan penataan split-screen dan teks tebal kontras.",
          en: "Curiosity pattern interrupt with split-screen pacing and high-contrast captions.",
        },
        duration: "30s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
  {
    slug: "focusbrew-hook-sprint",
    title: "FocusBrew Nootropics",
    brand: "FocusBrew",
    subtitle: {
      id: "3-Angle Hook Variations Sprint untuk Minuman Fokus",
      en: "3-Angle Hook Variations Sprint for Focus Beverage",
    },
    description: {
      id: "Memproduksi 3 pembuka berbeda (Skripsi, Zoom fatigue, dan Kafein crash) dengan penawaran inti yang sama untuk menguji retensi 3 detik pertama.",
      en: "Testing 3 isolated opening hooks with the same underlying offer to find the winning thumbstop angle.",
    },
    coverImage: "/images/katama/katama_v3_poster.jpg",
    categories: ["ugc-ads"],
    projectType: "Template Spec",
    isTemplate: true,
    status: "published",
    year: "2026",
    role: {
      id: "Creative Variations Editor",
      en: "Creative Variations Editor",
    },
    softwareUsed: ["CapCut", "Adobe Premiere Pro"],
    caseStudyHref: "/projects/focusbrew-hook-sprint",
    videos: [
      {
        id: "focusbrew-v1",
        title: {
          id: "Cut 01: The 2 PM Energy Crash",
          en: "Cut 01: The 2 PM Energy Crash",
        },
        src: "/videos/katama/katama_v3_deadline_emergency.mp4",
        poster: "/images/katama/katama_v3_poster.jpg",
        angle: {
          id: "Urgensi Kelelahan Kerja",
          en: "Midday Work Fatigue Urgency",
        },
        description: {
          id: "Hook visual dramatis saat energi mendadak drop di tengah deadline padat.",
          en: "Dramatic visual hook opening at the exact moment energy drops during tight deadlines.",
        },
        duration: "44s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
  {
    slug: "ergodesk-review-stack",
    title: "ErgoDesk Pro",
    brand: "ErgoDesk",
    subtitle: {
      id: "Review-Stack Ads: Sintesis Ulasan Pelanggan Terverifikasi",
      en: "Review-Stack Ads: Synthesizing Verified Customer Reviews",
    },
    description: {
      id: "Menyusun kutipan ulasan pelanggan nyata (VOC) ke dalam narasi visual bertingkat untuk mengatasi keraguan pembeli sebelum checkout.",
      en: "Stacking authentic customer quotes (VOC) into a sequential vertical proof arc to eliminate hesitation.",
    },
    coverImage: "/images/nespresso/nespresso_v2_crema_poster.jpg",
    categories: ["product-and-review"],
    projectType: "Template Spec",
    isTemplate: true,
    status: "published",
    year: "2026",
    role: {
      id: "Direct Response Video Editor",
      en: "Direct Response Video Editor",
    },
    softwareUsed: ["CapCut", "Adobe Premiere Pro"],
    caseStudyHref: "/projects/ergodesk-review-stack",
    videos: [
      {
        id: "ergodesk-v1",
        title: {
          id: "Cut 01: 5-Star Review Breakdown",
          en: "Cut 01: 5-Star Review Breakdown",
        },
        src: "/videos/nespresso/nespresso-vertuo-v2.mp4",
        poster: "/images/nespresso/nespresso_v2_crema_poster.jpg",
        angle: {
          id: "Social Proof Stack",
          en: "Social Proof Stack",
        },
        description: {
          id: "Membuka video dengan kutipan ulasan paling tajam untuk membangun kredibilitas instan.",
          en: "Opening with the sharpest verified review quote to establish instant credibility.",
        },
        duration: "41s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
];

export function getPublishedCollections(): CreativeCollection[] {
  return COLLECTIONS.filter((col) => col.status === "published");
}

export function getCollectionBySlug(slug: string): CreativeCollection | undefined {
  return COLLECTIONS.find((col) => col.slug === slug && col.status === "published");
}

export function getActiveCategories(publishedCollections: CreativeCollection[]): CollectionCategory[] {
  const activeSlugs = new Set<string>();
  publishedCollections.forEach((col) => {
    col.categories.forEach((catSlug) => activeSlugs.add(catSlug));
  });

  return MASTER_CATEGORIES.filter((cat) => activeSlugs.has(cat.slug));
}
