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
  {
    slug: "oximus-hydra-zdp1118",
    title: "Oximus Hydra ZDP1118",
    brand: "Oximus Indonesia",
    subtitle: {
      id: "Rangkaian 2 Video Iklan Vertikal (Meja Sempit Spatial Relief vs. Goodbye Tech-Neck)",
      en: "2-Part Vertical Direct Response System (Spatial Relief vs. Goodbye Tech-Neck)",
    },
    description: {
      id: "Rangkaian video iklan direct response vertikal (9:16) untuk Oximus Hydra ZDP1118. Menguji 2 variasi hook: (1) pelepasan 40% area meja sempit, dan (2) pembebasan leher kaku jam 3 sore melalui dorongan gas spring satu jari sejajar mata.",
      en: "A 2-part direct response vertical video ad series (9:16) for Oximus Hydra ZDP1118. Testing 2 creative hooks: (1) 40% spatial desk clutter relief, and (2) 3 PM neck strain relief via effortless one-finger gas spring rise to true eye level.",
    },
    coverImage: "/images/oximus/oximus_cover_poster.jpg",
    categories: ["ai-ads", "product-and-review"],
    projectType: "Spec Ad",
    status: "published",
    year: "2026",
    role: {
      id: "AI Creative Strategist & Video Editor",
      en: "AI Creative Strategist & Video Editor",
    },
    softwareUsed: [
      "Midjourney v6.1",
      "Kling AI",
      "ElevenLabs",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "CapCut Desktop",
    ],
    caseStudyHref: "/projects/oximus-hydra-zdp1118",
    videos: [
      {
        id: "oximus-cut-01",
        title: {
          id: "Cut 01: Meja Lu Sempit Bukan Karena Kurang Lebar (CON-001)",
          en: "Cut 01: The Cluttered Desk Friction Hook (CON-001)",
        },
        src: "/videos/oximus/oximus-hydra-zdp1118-v1.mp4",
        poster: "/images/oximus/oximus_cover_poster.jpg",
        angle: {
          id: "Spatial Relief & Fluid Adjustment (Pelepasan Ruang Kerja)",
          en: "Spatial Relief & Fluid Adjustment",
        },
        description: {
          id: "Hook visual meja sempit di 0–3 detik pertama, disusul pembuktian mekanisme gas spring satu jari, clamp kokoh, dan pelepasan 40% area kerja.",
          en: "Visual cluttered desk hook in the first 3 seconds, followed by one-finger gas spring fluidity demonstration, solid clamp, and 40% desk space reclamation.",
        },
        duration: "30s",
        aspectRatio: "9:16",
        status: "published",
      },
      {
        id: "oximus-cut-02",
        title: {
          id: "Cut 02: Say Goodbye to Tech-Neck (CON-003)",
          en: "Cut 02: Say Goodbye to Tech-Neck (CON-003)",
        },
        src: "/videos/oximus/oximus-hydra-zdp1118-v2.mp4",
        poster: "/images/oximus/oximus_v2_tech_neck_hook.jpg",
        angle: {
          id: "Ergonomi & Ketegangan Leher (Physical Friction to Relief)",
          en: "Ergonomics & Neck Strain (Physical Friction to Relief)",
        },
        description: {
          id: "Hook fisik leher kaku jam 3 sore akibat monitor pendek diganjal buku, disusul pembuktian dorongan gas spring naik sejajar mata dan bebas silau lampu.",
          en: "Physical friction hook of stiff 3 PM work neck caused by book-stacked screens, proving instant eye-level gas spring rise and anti-glare tilt.",
        },
        duration: "30s",
        aspectRatio: "9:16",
        status: "published",
      },
    ],
  },
  {
    slug: "agoda-weekend-getaway",
    title: "Agoda: Weekend Getaway",
    brand: "Agoda Indonesia",
    subtitle: {
      id: "Cinematic AI Micro-Drama Ads (The Weekend Surcharge Myth)",
      en: "Cinematic AI Micro-Drama Ads (The Weekend Surcharge Myth)",
    },
    description: {
      id: "Iklan mikro-drama sinematik AI 30 detik format vertikal (9:16) untuk Agoda Mobile App. Mematahkan mitos lonjakan harga hotel akhir pekan melalui drama warkop terik yang beralih ke diskon 35% App-Only Deals dan relaksasi infinity pool.",
      en: "A 30-second cinematic AI vertical micro-drama (9:16) for the Agoda Mobile App. Dismantling the weekend hotel surcharge myth through a sweltering coffee stall drama switching to exclusive 35% App-Only Deals and hillside pool relaxation.",
    },
    coverImage: "/images/agoda/agoda_cover_poster.jpg",
    categories: ["ai-ads"],
    projectType: "Spec Ad",
    status: "published",
    year: "2026",
    role: {
      id: "AI Creative Strategist & Video Editor",
      en: "AI Creative Strategist & Video Editor",
    },
    softwareUsed: [
      "Google Flow Omni Flash",
      "Midjourney v6.1",
      "ElevenLabs",
      "Adobe Premiere Pro",
      "Adobe After Effects",
    ],
    caseStudyHref: "/projects/agoda-weekend-getaway",
    videos: [
      {
        id: "agoda-con-005",
        title: {
          id: "Master Cut: The Weekend Surcharge Myth (CON-005)",
          en: "Master Cut: The Weekend Surcharge Myth (CON-005)",
        },
        src: "/videos/agoda/agoda-weekend-getaway-v1.mp4",
        poster: "/images/agoda/agoda_cover_poster.jpg",
        angle: {
          id: "Smart-Shopper Drama & App-Only Deals",
          en: "Smart-Shopper Drama & App-Only Deals",
        },
        description: {
          id: "Hook frustrasi harga hotel di warkop panas terik, disusul penyingkapan rahasia diskon aplikasi Agoda 35%, garansi free cancellation, hingga kepuasan bersulang di resort mewah.",
          en: "Sweltering stall price frustration hook, followed by Agoda 35% App-Only discount discovery, free cancellation guarantee, and a celebratory resort cheers.",
        },
        duration: "30s",
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
