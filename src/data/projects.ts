import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "katama-coffee",
    slug: "katama-coffee",
    title: "Katama Coffee & Space",
    client: "Katama Coffee & Space (Way Halim, Bandar Lampung)",
    category: {
      id: "F&B / Coffee & Coworking Space",
      en: "F&B / Coffee & Coworking Space",
    },
    year: "2026",
    tagline: {
      id: "Rangkaian 3 video vertikal direct response berbasis Remotion & ElevenLabs untuk segmen mahasiswa dan remote worker.",
      en: "A 3-part direct response vertical video system engineered with Remotion & ElevenLabs for student and remote-worker audiences.",
    },
    heroSummary: {
      id: "Studi kasus spec ad komprehensif untuk kafe 24 jam Katama Way Halim. Menghubungkan riset audiens mahasiswa/WFC dengan 3 angle narasi independen: Kontras Realitas WFC, Eksplorasi Fitur Free Print, dan Penyelamat Panik Deadline 24 Jam.",
      en: "A comprehensive spec ad case study for Katama Way Halim 24-hour coffee space. Translating student/WFC customer research into 3 distinct narrative angles: WFC Reality Check, Free Print Discovery, and The Midnight Deadline Lifesaver.",
    },
    featured: true,
    primaryHighlight: {
      value: "3 Video Cuts",
      label: {
        id: "Variasi Angle Kreatif",
        en: "Creative Angle Variations",
      },
      subtext: {
        id: "30s & 44s Vertikal 9:16 (Render Nyata Remotion)",
        en: "30s & 44s 9:16 Vertical (Actual Remotion Renders)",
      },
    },
    secondaryHighlights: [
      {
        value: "9:16",
        label: {
          id: "Format Vertikal Media Sosial",
          en: "Native Social Vertical Format",
        },
      },
      {
        value: "React + TS",
        label: {
          id: "Engine Animasi Remotion",
          en: "Remotion Animation Engine",
        },
      },
      {
        value: "ElevenLabs",
        label: {
          id: "Voiceover Neural AI Terkurasi",
          en: "Neural AI Voiceover Pipeline",
        },
      },
    ],
    toolsUsed: [
      "Remotion (React & TypeScript)",
      "ElevenLabs (Bian Neural Voice)",
      "Adobe Premiere Pro",
      "Tailwind CSS",
      "Audacity / Audio EQ",
    ],
    creativeBrief: {
      clientObjective: {
        id: "Merancang rangkaian video iklan direct response format vertikal (9:16) untuk memperkenalkan Katama Coffee & Space Way Halim sebagai 'All-in-One Productivity Hub' bagi mahasiswa kampus (Unila, ITERA, UBL, Teknokrat) dan pekerja remote di Bandar Lampung.",
        en: "Develop a direct response vertical video ad series (9:16) establishing Katama Coffee & Space Way Halim as Bandar Lampung's premier 'All-in-One Productivity Hub' for university students and remote professionals.",
      },
      targetAudience: {
        id: "Mahasiswa tingkat akhir (sedang skripsi/tugas kelompok) dan pekerja jarak jauh (remote worker/freelancer) berusia 19–32 tahun yang membutuhkan ruang kerja fungsional dengan stop kontak berlimpah, koneksi WiFi stabil, dan makanan berat.",
        en: "Senior university students (thesis/group assignments) and remote workers aged 19–32 in Bandar Lampung needing functional workspaces with abundant outlets, fast WiFi, and hot meals.",
      },
      coreProblem: {
        id: "Banyak kafe kekinian di Lampung hanya mengutamakan estetika visual untuk foto: meja sempit, colokan minim/rebutan, tutup jam 22.00–24.00, dan tidak ada fasilitas cetak dokumen saat toko fotokopi luar tutup tengah malam.",
        en: "Most aesthetic cafes in Bandar Lampung prioritize photogenic decor over function: cramped tables, scarce power plugs, early 10 PM–midnight closing times, and zero printing capabilities when external print shops close.",
      },
      angleHookStrategy: {
        id: "Menguji 3 sudut pandang berbeda: (1) Kontras fungsional 'Bukan Cuma Estetik', (2) Eksplorasi fitur langka 'Free Print Dokumen', dan (3) Urgensi kepanikan tugas larut malam 'The 2 AM Deadline Emergency' yang diselesaikan fasilitas 24 jam Katama.",
        en: "Testing 3 isolated angles: (1) Functional contrast 'Not Just Aesthetic', (2) Rare feature discovery 'Free Document Printing', and (3) High-urgency midnight relief 'The 2 AM Deadline Emergency' solved by Katama's 24-hour setup.",
      },
      keyDifferentiators: [
        {
          id: "Fasilitas Free Print dokumen fisik di dalam kafe (kertas disediakan)",
          en: "Free on-site physical document printing facility (paper provided)",
        },
        {
          id: "Buka 24 Jam non-stop tanpa batas jam tutup bagi pejuang deadline",
          en: "Open 24/7 non-stop with no closing time cut-offs for night workers",
        },
        {
          id: "Stop kontak tersebar di tiap sudut meja dan koneksi Wi-Fi stabil (~75 Mbps)",
          en: "Dedicated power outlets at every desk zone and stable ~75 Mbps WiFi",
        },
        {
          id: "Pilihan menu lengkap: kopi signature (Butterscotch Latte) & makanan berat (Mietama, Salted Egg)",
          en: "Full F&B menu: signature coffees (Butterscotch Latte) & heavy meals (Mietama, Salted Egg)",
        },
      ],
      deliverables: [
        {
          id: "Variasi 1: Video Vertikal 'The WFC Reality Check' (30 Detik, 900 frame @ 30fps)",
          en: "Variation 1: Vertical Video 'The WFC Reality Check' (30s, 900 frames @ 30fps)",
        },
        {
          id: "Variasi 2: Video Vertikal 'The Free Print Discovery' (44 Detik, 1320 frame @ 30fps)",
          en: "Variation 2: Vertical Video 'The Free Print Discovery' (44s, 1320 frames @ 30fps)",
        },
        {
          id: "Variasi 3: Video Vertikal 'The 2 AM Deadline Emergency' (44 Detik, 1320 frame @ 30fps)",
          en: "Variation 3: Vertical Video 'The 2 AM Deadline Emergency' (44s, 1320 frames @ 30fps)",
        },
        {
          id: "Komposisi Remotion modular lengkap dengan sinkronisasi voiceover ElevenLabs",
          en: "Modular Remotion composition repository with ElevenLabs neural voiceover sync",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec ad independen",
        en: "Independent spec ad",
      },
      objective: {
        id: "Merancang rangkaian video iklan direct response format vertikal (9:16) untuk memperkenalkan Katama Coffee & Space Way Halim sebagai 'All-in-One Productivity Hub' bagi mahasiswa kampus (Unila, ITERA, UBL, Teknokrat) dan pekerja remote di Bandar Lampung.",
        en: "Develop a direct response vertical video ad series (9:16) establishing Katama Coffee & Space Way Halim as Bandar Lampung's premier 'All-in-One Productivity Hub' for university students and remote professionals.",
      },
      targetAudience: {
        id: "Mahasiswa tingkat akhir (sedang skripsi/tugas kelompok) dan pekerja jarak jauh (remote worker/freelancer) berusia 19–32 tahun yang membutuhkan ruang kerja fungsional dengan stop kontak berlimpah, koneksi WiFi stabil, dan makanan berat.",
        en: "Senior university students (thesis/group assignments) and remote workers aged 19–32 in Bandar Lampung needing functional workspaces with abundant outlets, fast WiFi, and hot meals.",
      },
      audienceInsight: {
        id: "Banyak kafe kekinian di Lampung hanya mengutamakan estetika visual untuk foto (meja sempit, colokan rebutan, tutup jam 22.00–24.00), sementara mahasiswa panik saat butuh cetak dokumen fisik tengah malam karena toko fotokopi luar sudah tutup.",
        en: "Most aesthetic cafes prioritize photogenic decor over function (cramped tables, scarce plugs, early midnight closing), while students face panic when needing physical document prints late at night when external shops are closed.",
      },
      coreAngle: {
        id: "Pengujian 3 variasi pesan: Kontras Realitas WFC (Bukan Cuma Estetik), Eksplorasi Fitur Langka (Free Print Dokumen), dan Penyelamat Panik Deadline Larut Malam (24 Jam Non-Stop).",
        en: "Testing 3 distinct message angles: WFC Reality Contrast (Not Just Aesthetic), Rare Feature Discovery (Free Document Printing), and Midnight Deadline Relief (24/7 Non-Stop).",
      },
      hookStrategy: {
        id: "Pattern-interrupt 0–3 detik: memvalidasi kejengkelan nyata (meja bulat semen sempit, colokan rebutan) dan jam darurat 23:45 untuk menghentikan scrolling penonton sebelum drop-off.",
        en: "0–3 second pattern-interrupt: validating authentic audience friction (cramped circular concrete tables, fighting for plugs) and 11:45 PM panic to arrest scrolling habits before drop-off.",
      },
      valueProposition: {
        id: "All-in-One Productivity Hub: Fasilitas Free Print gratis di dalam kafe (kertas disediakan), buka 24 jam non-stop tanpa batas jam tutup, colokan di tiap sudut meja, dan pilihan makanan berat hangat pendukung fokus.",
        en: "All-in-One Productivity Hub: Free physical document printing (paper provided), open 24/7 non-stop with no closing cut-offs, outlets at every desk zone, and hot heavy meals fueling deep work.",
      },
      callToAction: {
        id: "Wajib simpan video ini buat jaga-jaga pas deadline mepet atau tag teman nugas kamu sekarang!",
        en: "Save this video for your next emergency deadline or tag your study buddy right now!",
      },
      creativeRationale: {
        id: "Audiens mahasiswa dan remote worker di media sosial kebal terhadap iklan kafe konvensional yang hanya memamerkan latte art. Dengan memusatkan narasi pada 'Free Print Dokumen' dan '24 Jam Non-Stop', video langsung menjawab friksi fungsional mendesak yang tidak dapat diselesaikan oleh kafe kompetitor di Bandar Lampung.",
        en: "Student and remote worker audiences are immune to conventional cafe ads showcasing generic latte art. Centering the narrative on 'Free Document Printing' and '24/7 Access' addresses high-urgency functional friction that competing aesthetic cafes in Bandar Lampung cannot resolve.",
      },
    },
    assetBreakdown: [
      {
        id: "katama-shot-01",
        name: {
          id: "Layar HP / Jam Digital 23:45",
          en: "Phone Screen / Digital Clock 23:45",
        },
        category: "Self-shot / original footage",
        sourceOrTool: "Kamera Smartphone (Original Capture)",
        myContribution: {
          id: "Perekaman mandiri dengan pencahayaan redup, koreksi warna dingin, dan animasi micro push-in.",
          en: "Original self-capture in low light, cool color grading, and micro push-in animation.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Dibuat mandiri untuk memicu urgensi detik pertama.",
          en: "Original capture engineered to trigger opening-second urgency.",
        },
      },
      {
        id: "katama-shot-02",
        name: {
          id: "Jari Mengetik Panik di Keyboard Laptop",
          en: "Panicked Laptop Keyboard Typing",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Pexels (Stock B-roll)",
        myContribution: {
          id: "Kurasi visual, pemotongan ritmis, speed-ramp 120%, dan sinkronisasi audio ketikan keyboard kacau.",
          en: "Visual curation, rhythmic cutting, 120% speed ramp, and chaotic keyboard typing foley sync.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Lisensi bebas royalti komersial Pexels.",
          en: "Commercial royalty-free Pexels license.",
        },
      },
      {
        id: "katama-shot-03",
        name: {
          id: "Rolling Door Ruko Fotokopi Gelap Terkunci",
          en: "Dark Locked Print Shop Steel Shutter",
        },
        category: "Self-shot / original footage",
        sourceOrTool: "Kamera Smartphone (Original Night B-roll)",
        myContribution: {
          id: "Perekaman jalanan malam mandiri, penyesuaian kontras bayangan, dan foley pintu besi dibanting.",
          en: "Original night street capture, shadow contrast grading, and metal shutter slam foley.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Dokumentasi visual ruko fotokopi tutup di malam hari.",
          en: "Original visual documentation of closed night print shops.",
        },
      },
      {
        id: "katama-shot-04",
        name: {
          id: "Plang CLOSED Kafe Dibalik & Lampu Dimatikan",
          en: "Cafe CLOSED Sign Flipped at Night",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Pexels (Stock Footage)",
        myContribution: {
          id: "Kurasi klip, filter warna dingin (blue-grey tint), dan penambahan SFX papan kayu berderit.",
          en: "Footage curation, cool blue-grey color tint, and creaking wooden sign SFX.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Lisensi komersial bebas royalti.",
          en: "Commercial royalty-free license.",
        },
      },
      {
        id: "katama-shot-05",
        name: {
          id: "Fasad Neon Sign Katama Menyala Malam Hari",
          en: "Katama Illuminated Neon Sign Facade",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Instagram/TikTok Publik Resmi Katama (@katama_id)",
        myContribution: {
          id: "Kurasi rekaman publik, stabilisasi gerakan, crop vertikal 9:16, saturasi neon boost, dan whip-pan transition.",
          en: "Public footage curation, motion stabilization, 9:16 vertical crop, neon saturation boost, and whip-pan transition.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Materi publik akun resmi kafe; digunakan untuk keperluan studi kasus spec ad portofolio transformatif non-komersial.",
          en: "Public cafe footage; utilized under transformative non-commercial portfolio spec ad conventions.",
        },
      },
      {
        id: "katama-shot-06",
        name: {
          id: "Mesin Printer Katama Mencetak Kertas Fisik",
          en: "Katama Free Print Machine Dispensing Paper",
        },
        category: "Self-shot / original footage",
        sourceOrTool: "Rekaman Close-up Mandiri & UGC Publik",
        myContribution: {
          id: "Perekaman macro tray printer, motion graphic highlight 'Kertas Disediakan!', dan layering SFX mesin cetak.",
          en: "Macro printer tray capture, 'Paper Provided!' motion callout, and mechanical printing SFX layering.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Bukti visual konkret fasilitas Free Print dokumen di dalam kafe.",
          en: "Concrete visual proof for the in-cafe free document printing facility.",
        },
      },
      {
        id: "katama-shot-07",
        name: {
          id: "Area Indoor: Meja Kayu Lapang & Colokan",
          en: "Indoor Zone: Spacious Desks & Power Plugs",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Instagram/TikTok Publik Resmi Katama (@katama_id)",
        myContribution: {
          id: "Reframing 9:16, stabilisasi handheld, koreksi warna hangat, dan sinkronisasi audio ambient kafe.",
          en: "9:16 reframing, handheld stabilization, warm color grade, and cafe ambient sound design.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Menampilkan ketersediaan colokan dan kenyamanan area kerja indoor ber-AC.",
          en: "Demonstrating power outlet density and air-conditioned indoor comfort.",
        },
      },
      {
        id: "katama-shot-08",
        name: {
          id: "Bakmi Mietama Hangat & Butterscotch Latte",
          en: "Hot Mietama Noodles & Butterscotch Latte",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Katalog Menu & Video Publik Katama",
        myContribution: {
          id: "Food color grading (vibrance boost +8), penataan teks pill rating GoFood 4.8, dan foley denting mangkuk keramik.",
          en: "Food color grading (vibrance boost +8), GoFood 4.8 rating pill badge, and ceramic tableware foley.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Menjawab kebutuhan makan malam pejuang deadline tanpa harus keluar kafe.",
          en: "Answering night study hunger without requiring patrons to leave the venue.",
        },
      },
      {
        id: "katama-shot-09",
        name: {
          id: "Pengunjung Tersenyum Lega Merapikan Berkas",
          en: "Relieved Visitor Organizing Printed Thesis",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Materi Publik Katama / Pexels B-roll",
        myContribution: {
          id: "Framing aman (profile shot tanpa menampakkan wajah depan secara langsung demi privasi), timing transisi lega, dan SFX nafas lega.",
          en: "Privacy-compliant profile framing, relief transition timing, and sigh-of-relief audio cue.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Visualisasi kondisi akhir (after-state) yang tenang dan puas.",
          en: "Visualizing the calm and accomplished after-state.",
        },
      },
      {
        id: "katama-shot-10",
        name: {
          id: "Kinetic Safe-Zone Typography & End Card UI",
          en: "Kinetic Safe-Zone Typography & End Card UI",
        },
        category: "Motion graphics and compositing",
        sourceOrTool: "Remotion Studio (React + TypeScript + Tailwind CSS)",
        myContribution: {
          id: "Desain dan rekayasa kode komponen animasi teks kinetik, safe zone compliance TikTok, dan End Card lokasi.",
          en: "Design and code engineering of kinetic caption components, TikTok safe zone compliance, and location End Card.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "100% diprogram secara programmatic di Remotion Studio.",
          en: "100% programmatically coded in Remotion Studio.",
        },
      },
      {
        id: "katama-shot-11",
        name: {
          id: "Narasi Vokal Natural Kasual 'Bian'",
          en: "Neural AI Voiceover Narration ('Bian')",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "ElevenLabs Neural Audio Engine",
        myContribution: {
          id: "Prompt scripting, pacing calibration (~135 WPM), audio de-essing, EQ compression, dan penyelarasan beat audio.",
          en: "Prompt scripting, pacing calibration (~135 WPM), audio de-essing, EQ compression, and beat audio alignment.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Dihasilkan melalui lisensi resmi ElevenLabs AI Voice.",
          en: "Generated via licensed ElevenLabs AI Voice engine.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "angle-v1",
        name: {
          id: "Variasi 1: The WFC Reality Check",
          en: "Variation 1: The WFC Reality Check",
        },
        hookType: {
          id: "Kontras Realitas / Pattern Interrupt",
          en: "Reality Contrast / Pattern Interrupt",
        },
        duration: "30s",
        concept: {
          id: "Membongkar friksi kafe yang cuma menang foto estetik namun menyiksa saat dipakai kerja, lalu mengarahkan solusi ke Katama Way Halim yang serba ada.",
          en: "Exposing the discomfort of cafes that only look good in photos but frustrate productive work, directing viewers to Katama Way Halim's all-in-one setup.",
        },
        lines: [
          {
            time: "00:00 - 00:04",
            visual: {
              id: "Cut cepat meja semen bulat kecil yang sesak, disusul orang mengusap leher pegal di kafe.",
              en: "Fast cuts of a cramped concrete table, followed by a patron rubbing a sore neck at a trendy cafe.",
            },
            audio: {
              id: "“Ciri-ciri kafe yang cuma menang estetik di foto, tapi bikin emosi pas dipakai nugas...”",
              en: "“Signs of a cafe that looks great in photos, but drives you crazy when you try to get work done...”",
            },
            psychologyIntent: {
              id: "Memvalidasi kejengkelan nyata audiens (WFC friction) untuk memicu retensi di detik awal.",
              en: "Validating real audience annoyance (WFC friction) to secure early 3-second retention.",
            },
          },
          {
            time: "00:04 - 00:09",
            visual: {
              id: "Laptop digeser karena meja kepenuhan, kabel charger berebut stop kontak lantai, toko fotokopi luar tutup.",
              en: "Laptop squeezed on a tiny desk, phone chargers competing for a single wall outlet, dark closed print shop.",
            },
            audio: {
              id: "“Meja kekecilan, colokan rebutan, giliran mau ngeprint tugas, toko luar udah pada tutup.”",
              en: "“Cramped tables, fighting for plugs, and when you need to print your document, outside shops are locked shut.”",
            },
            psychologyIntent: {
              id: "Mengagitasikan 3 masalah berurutan agar audiens merasa situasi ini sangat mendesak dan relatable.",
              en: "Agitating 3 consecutive pain points so viewers immediately recognize their own daily struggles.",
            },
          },
          {
            time: "00:09 - 00:15",
            visual: {
              id: "Whip-pan ke fasad luar Katama dengan neon sign menyala, lalu kamera tracking masuk ke area indoor ber-AC yang lega.",
              en: "Dynamic whip-pan to Katama's illuminated facade, tracking smoothly into the spacious AC indoor zone.",
            },
            audio: {
              id: "“Mending langsung meluncur ke Katama Way Halim. Di sini beneran disiapin buat kalian yang butuh fokus.”",
              en: "“Head over to Katama Way Halim instead. Everything here is genuinely built for people who need to focus.”",
            },
            psychologyIntent: {
              id: "Transisi instan dari rasa frustrasi ke rasa lega (relief), memperkenalkan Katama sebagai solusi nyata.",
              en: "Instant transition from frustration to cognitive relief, positioning Katama as the definitive fix.",
            },
          },
          {
            time: "00:15 - 00:22",
            visual: {
              id: "Tiga adegan: Meja kayu lapang + colokan dinding, close-up printer Katama mencetak kertas (Free Print), semangkuk Mietama & es kopi ditaruh.",
              en: "Three sequential shots: wide desk with wall outlets, close-up of Katama printer dispensing free printouts, bowl of hot Mietama noodles with iced latte.",
            },
            audio: {
              id: "“Mejanya lapang, colokan berderet, Wi-Fi kencang, bahkan ada fasilitas free print dokumen. Pas laper, makanan beratnya juga siap nemenin.”",
              en: "“Spacious desks, plugs everywhere, fast Wi-Fi, and even free document printing. When hunger strikes, warm heavy meals are ready.”",
            },
            psychologyIntent: {
              id: "Menyajikan bukti visual konkret terhadap fasilitas pembeda utama (Free Print & Makanan Berat).",
              en: "Presenting concrete visual proof for primary unique differentiators (Free Print & Hot Meals).",
            },
          },
          {
            time: "00:22 - 00:26",
            visual: {
              id: "Suasana malam hari di area indoor: beberapa pengunjung tenang fokus di depan laptop dengan pencahayaan hangat.",
              en: "Night atmosphere inside the indoor space: patrons calmly working on laptops under warm lighting.",
            },
            audio: {
              id: "“Yang paling juara, Katama buka 24 jam non-stop. Ga bakal ada drama diusir pas lagi asyik mikir.”",
              en: "“Best of all, Katama is open 24 hours non-stop. Zero drama of getting kicked out at closing time.”",
            },
            psychologyIntent: {
              id: "Menghilangkan kekhawatiran batas waktu jam operasional bagi mahasiswa yang sedang dalam 'flow state'.",
              en: "Eliminating closing-time anxiety for students who are deep in their productive flow state.",
            },
          },
          {
            time: "00:26 - 00:30",
            visual: {
              id: "End Card: Logo Katama, pin alamat lengkap seberang Transmart Way Halim, dan animasi ikon tag/share.",
              en: "End Card: Katama logo, full address anchor opposite Transmart Way Halim, and tag/share animation.",
            },
            audio: {
              id: "“Simpan video ini buat jadwal WFC kamu berikutnya, atau tag temen nugas kamu sekarang!”",
              en: "“Save this video for your next work session, or tag your study buddy right now!”",
            },
            psychologyIntent: {
              id: "Call to action yang mengutamakan share ke sesama mahasiswa dan bookmark video untuk rujukan lokasi.",
              en: "Call to action optimized for peer-to-peer sharing and saving for future reference.",
            },
          },
        ],
      },
      {
        id: "angle-v2",
        name: {
          id: "Variasi 2: The Free Print Discovery",
          en: "Variation 2: The Free Print Discovery",
        },
        hookType: {
          id: "Keingintahuan & Eksplorasi Fitur Langka",
          en: "Feature-Led Curiosity & Discovery",
        },
        duration: "44s",
        concept: {
          id: "Menyorot fasilitas langka 'Free Print' sebagai daya tarik pembuka rasa penasaran, dilanjutkan dengan tur fasilitas 'paket komplit' Katama.",
          en: "Spotlighting the rare 'Free Print' facility as a curiosity-driving hook, followed by a tour of Katama's all-in-one productivity amenities.",
        },
        lines: [
          {
            time: "00:00 - 00:06",
            visual: {
              id: "Close-up lembaran kertas keluar dari mesin printer, lalu kamera zoom-out memperlihatkan suasana kafe ber-AC yang nyaman.",
              en: "Close-up of printed sheets exiting the printer, zooming out to reveal an aesthetic air-conditioned cafe interior.",
            },
            audio: {
              id: "“Baru tahu di Bandar Lampung ada kafe estetik yang nyediain printer gratis buat nugas?!”",
              en: "“Did you know there's an aesthetic cafe in Bandar Lampung offering completely free printing for study sessions?!”",
            },
            psychologyIntent: {
              id: "Membangkitkan rasa penasaran instan lewat fitur langka yang hampir tidak pernah disediakan kafe lain.",
              en: "Triggering instant curiosity through a novel amenity rarely found in competing cafes.",
            },
          },
          {
            time: "00:06 - 00:17",
            visual: {
              id: "Tracking shot area indoor Katama: deretan stop kontak di dinding, laptop menyala, dan meja kayu yang lapang.",
              en: "Tracking shot across Katama's indoor AC space: wall power strips, open laptops, and generous wooden desks.",
            },
            audio: {
              id: "“Ini di Katama Way Halim. Konsepnya beneran all-in-one: mejanya lega, colokan berderet di tiap sudut, plus Wi-Fi kencang.”",
              en: "“This is Katama Way Halim. Truly all-in-one: spacious desks, outlets at every corner, plus fast Wi-Fi.”",
            },
            psychologyIntent: {
              id: "Membuktikan bahwa fasilitas bukan sekadar gimmick, melainkan didukung lingkungan kerja yang memadai.",
              en: "Proving that the feature is backed by a fully functional, comfortable remote working environment.",
            },
          },
          {
            time: "00:17 - 00:26",
            visual: {
              id: "Penyajian Bakmi Mietama hangat & rice bowl di samping es kopi Butterscotch Latte dingin berembun.",
              en: "Steaming bowl of signature Mietama noodles and rice bowl served next to iced Butterscotch Latte.",
            },
            audio: {
              id: "“Ga cuma kopi enak, di sini makanan beratnya juga lengkap banget. Jadi nugas seharian ga bakal bingung cari makan ke luar.”",
              en: "“More than great coffee, the food menu is packed with heavy meals so you never have to leave to find dinner.”",
            },
            psychologyIntent: {
              id: "Menjawab keberatan pengunjung yang sering kelaparan saat berlama-lama nugas di kafe.",
              en: "Addressing the common objection of getting hungry during extended study sessions.",
            },
          },
          {
            time: "00:26 - 00:37",
            visual: {
              id: "Visual suasana malam hari dengan pencahayaan hangat, pengunjung tetap santai tanpa tergesa-gesa.",
              en: "Warm evening ambience inside the cafe, visitors relaxed and working with no hurry to leave.",
            },
            audio: {
              id: "“Paling mantap, Katama buka 24 jam non-stop. Mau nugas pagi atau begadang santai semalaman, ga pake diusir jam tutup.”",
              en: "“Best of all, Katama is open 24/7 non-stop. Study in the morning or stay up all night, no closing time rushes.”",
            },
            psychologyIntent: {
              id: "Menjamin fleksibilitas waktu mutlak bagi mahasiswa maupun pekerja remote dengan jam kerja fleksibel.",
              en: "Guaranteeing unconditional schedule flexibility for students and night-owl remote workers.",
            },
          },
          {
            time: "00:37 - 00:44",
            visual: {
              id: "End Card Katama Coffee & Space: Alamat Way Halim seberang Transmart, arahan share ke grup tugas.",
              en: "Katama End Card: Way Halim address opposite Transmart, prompt to share with study groups.",
            },
            audio: {
              id: "“Share video ini ke grup tugas kamu, atau langsung meluncur ke Katama seberang Transmart Way Halim!”",
              en: "“Share this video to your group chat, or head over to Katama opposite Transmart Way Halim!”",
            },
            psychologyIntent: {
              id: "Memaksimalkan jangkauan organik melalui penyebaran antar mahasiswa dalam satu kelompok kelas.",
              en: "Maximizing organic peer-to-peer distribution across student class groups.",
            },
          },
        ],
      },
      {
        id: "angle-v3",
        name: {
          id: "Variasi 3: The 2 AM Deadline Emergency",
          en: "Variation 3: The 2 AM Deadline Emergency",
        },
        hookType: {
          id: "Problem-to-Solution / Urgensi Panik ke Sangat Lega",
          en: "Problem-to-Solution / High Urgency Panic-to-Relief",
        },
        duration: "44s",
        concept: {
          id: "Mengangkat drama panik tengah malam saat tugas harus dikumpulkan besok pagi, toko fotokopi luar tutup, dan kafe biasa mengusir pengunjung.",
          en: "Focusing on the high-tension midnight panic when assignments are due next morning, photocopy shops are dark, and standard cafes close.",
        },
        lines: [
          {
            time: "00:00 - 00:07",
            visual: {
              id: "Jam HP menunjukkan 23:45, disusul ketikan panik terburu-buru di laptop dengan tumpukan berkas tugas belum rampung.",
              en: "Phone screen displaying 11:45 PM, followed by panicked typing on a laptop surrounded by unfinished papers.",
            },
            audio: {
              id: "“Udah jam 12 malem, tugas belum kelar, kafe lain pada tutup, dan besok pagi harus dikumpulin fisik?!”",
              en: "“It's midnight, assignment isn't done, cafes are closing, and it has to be submitted as a physical copy tomorrow morning?!”",
            },
            psychologyIntent: {
              id: "Tingkat empati dan urgensi ekstrem: mahasiswa yang pernah mengalami situasi ini akan langsung berhenti scroll.",
              en: "Extreme empathy and situational urgency: stops any student who has ever faced an eleventh-hour crisis.",
            },
          },
          {
            time: "00:07 - 00:14",
            visual: {
              id: "Ruko fotokopi pinggir jalan yang gelap dan terkunci rolling door, staf kafe lain membalik plang tanda 'CLOSED'.",
              en: "Dark street photocopy kiosk with pulled-down shutters, followed by another cafe turning its 'CLOSED' sign.",
            },
            audio: {
              id: "“Mau ngeprint keluar fotokopi udah gelap, nongkrong di kafe biasa malah diusir karena jam tutup.”",
              en: "“Need to print outside? Shops are dark. Sitting in a normal cafe? You get kicked out at closing time.”",
            },
            psychologyIntent: {
              id: "Menggambarkan jalan buntu (deadlock) yang biasa dihadapi audiens sebelum solusi dihadirkan.",
              en: "Depicting the painful deadlock students face right before presenting the solution.",
            },
          },
          {
            time: "00:14 - 00:22",
            visual: {
              id: "Fasad Katama Way Halim menyala terang di tengah malam, kamera meluncur masuk ke ruangan indoor AC yang adem dan terang.",
              en: "Katama Way Halim exterior illuminated warmly at night, camera gliding into the bright, comfortable AC indoor space.",
            },
            audio: {
              id: "“Tarik nafas dulu, langsung tancap gas ke Katama Way Halim. Di sini bukanya 24 jam non-stop!”",
              en: "“Take a deep breath and head straight to Katama Way Halim. It's open 24 hours non-stop!”",
            },
            psychologyIntent: {
              id: "Menghadirkan 'instant emotional relief' dan rasa aman bagi pejuang tugas malam.",
              en: "Delivering instant emotional relief and a safe sanctuary for nocturnal deadline fighters.",
            },
          },
          {
            time: "00:22 - 00:31",
            visual: {
              id: "Printer Katama mencetak tugas fisik (Free Print, kertas disediakan), colokan aman di meja, makanan berat hangat disajikan.",
              en: "Katama printer dispensing assignment sheets (Free Print, paper provided), wall plugs connected, warm meal served.",
            },
            audio: {
              id: "“Tugas kamu bisa langsung diprint di sini gratis, Wi-Fi kencang, banyak colokan, plus makanan beratnya siap nemenin sampai subuh.”",
              en: "“Print your assignment right here for free, fast Wi-Fi, plenty of outlets, plus hot food to keep you going till dawn.”",
            },
            psychologyIntent: {
              id: "Mengeliminasi seluruh poin kepanikan sekaligus: cetak beres, baterai aman, perut kenyang.",
              en: "Resolving all pain triggers in one place: printing solved, power secure, hunger satisfied.",
            },
          },
          {
            time: "00:31 - 00:37",
            visual: {
              id: "Pengunjung tersenyum lega merapikan kertas tugas yang tercetak rapi di meja kafe yang nyaman.",
              en: "Visitor smiling with relief, neatly arranging the newly printed assignment sheets on a cafe desk.",
            },
            audio: {
              id: "“Deadline aman, tugas beres tanpa panik, dan perut tetap kenyang.”",
              en: "“Deadline saved, assignment done without panic, and your stomach stays full.”",
            },
            psychologyIntent: {
              id: "Visualisasi kondisi akhir (after-state) yang diinginkan: ketenangan dan kepuasan.",
              en: "Visualizing the desired end-state: relief, calm, and accomplishment.",
            },
          },
          {
            time: "00:37 - 00:44",
            visual: {
              id: "End Card: Pin alamat lengkap Jl. Letjen Alamsyah Ratu Prawiranegara No.86 (Seberang Transmart Way Halim), ikon bookmark/save.",
              en: "End Card: Full address anchor Jl. Letjen Alamsyah Ratu Prawiranegara No.86 (Opposite Transmart Way Halim), save icon.",
            },
            audio: {
              id: "“Wajib simpan video ini buat jaga-jaga pas deadline mepet, atau langsung meluncur ke Katama sekarang!”",
              en: "“Save this video for your next emergency deadline, or head over to Katama right now!”",
            },
            psychologyIntent: {
              id: "Tindakan 'save video' sebagai 'emergency insurance' yang bernilai tinggi bagi audiens mahasiswa.",
              en: "Treating the 'save video' action as high-value emergency insurance for students.",
            },
          },
        ],
      },
    ],
    storyboard: [
      {
        id: "sb-1",
        scene: {
          id: "Adegan 1: The Midnight Panic Hook",
          en: "Scene 1: The Midnight Panic Hook",
        },
        timecode: "00:00 - 00:07",
        visualDescription: {
          id: "Layar jam digital HP menunjukkan pukul 23:45, disusul potongan cepat jari mengetik panik di keyboard laptop dengan tumpukan berkas.",
          en: "Phone screen clock at 11:45 PM, followed by quick cuts of panicked keyboard typing amid messy stacks of papers.",
        },
        technicalNote: {
          id: "Remotion Scene1PanicHookV3: Animasi getar/shake pada headline teks, SFX detak jam bertransisi ke bass drop.",
          en: "Remotion Scene1PanicHookV3: subtle text shake animation on headline, ticking clock SFX transitioning to bass drop.",
        },
        toolUsed: "Remotion (Scene1PanicHookV3.tsx)",
        assetType: "Remotion Component",
      },
      {
        id: "sb-2",
        scene: {
          id: "Adegan 2: Agitation (Fotokopi & Kafe Tutup)",
          en: "Scene 2: Agitation (Closed Print Shop & Cafe)",
        },
        timecode: "00:07 - 00:14",
        visualDescription: {
          id: "Ruko fotokopi pinggir jalan terkunci rapat dengan rolling door gelap, disusul plang tanda 'CLOSED' kafe lain yang dibalik.",
          en: "Street photocopy shop locked under dark steel shutters, followed by another cafe flipping its 'CLOSED' sign.",
        },
        technicalNote: {
          id: "LineArtClosedPhotocopy: Ilustrasi vektor SVG terprogram dengan whoosh hembusan angin malam sepi.",
          en: "LineArtClosedPhotocopy: Programmatic SVG vector graphic accompanied by lonesome night wind whoosh SFX.",
        },
        toolUsed: "Remotion (Scene2ClosedAgitationV3.tsx)",
        assetType: "Motion Graphic",
      },
      {
        id: "sb-3",
        scene: {
          id: "Adegan 3: The 24h Lifesaver Reveal",
          en: "Scene 3: The 24h Lifesaver Reveal",
        },
        timecode: "00:14 - 00:22",
        visualDescription: {
          id: "Pintu masuk dan neon sign Katama menyala terang benderang di malam hari, kamera meluncur masuk ke area indoor AC yang adem dan lega.",
          en: "Katama illuminated entrance facade at night, tracking smoothly into the bright and spacious air-conditioned indoor zone.",
        },
        technicalNote: {
          id: "Whip-pan dinamis dari gelap ke terang, musik beat lofi energik masuk penuh menghadirkan rasa lega.",
          en: "Dynamic whip-pan from dark to bright, upbeat lofi hiphop beat entering to signal relief.",
        },
        toolUsed: "Remotion + Footage Asli Katama",
        assetType: "Brand Footage",
      },
      {
        id: "sb-4",
        scene: {
          id: "Adegan 4: All-in-One Lifesaver Proof",
          en: "Scene 4: All-in-One Lifesaver Proof",
        },
        timecode: "00:22 - 00:31",
        visualDescription: {
          id: "Tiga visual bukti: Mesin printer Katama mencetak kertas (Free Print), colokan di meja kayu, mangkuk Mietama hangat dan es kopi segar.",
          en: "Three proof points: Katama printer dispensing free sheets, wall outlets by desks, warm Mietama noodles with iced coffee.",
        },
        technicalNote: {
          id: "PrinterMotionGraphic & Split-Badge: Desis printer mencetak + keyboard typing + denting piring santai.",
          en: "PrinterMotionGraphic & Split-Badge: Printer whirring + typing sounds + tableware chime.",
        },
        toolUsed: "Remotion (PrinterMotionGraphic.tsx)",
        assetType: "Remotion Component",
      },
      {
        id: "sb-5",
        scene: {
          id: "Adegan 5: Safe Haven Reassurance",
          en: "Scene 5: Safe Haven Reassurance",
        },
        timecode: "00:31 - 00:37",
        visualDescription: {
          id: "Pengunjung tersenyum lega merapikan berkas tugas yang tercetak rapi di meja kafe yang nyaman.",
          en: "Customer smiling with relief, organizing freshly printed papers on a clean, comfortable desk.",
        },
        technicalNote: {
          id: "Slow push-in kamera, SFX hembusan nafas lega (sigh of relief) berpadu melodi penenang.",
          en: "Slow push-in camera motion, sigh-of-relief SFX blended with reassuring melody.",
        },
        toolUsed: "Remotion (Scene5ReassuranceV3.tsx)",
        assetType: "Remotion Component",
      },
      {
        id: "sb-6",
        scene: {
          id: "Adegan 6: CTA & Location Anchor",
          en: "Scene 6: CTA & Location Anchor",
        },
        timecode: "00:37 - 00:44",
        visualDescription: {
          id: "End Card estetik: Logo Katama, pin alamat Jl. Letjen Alamsyah Ratu Prawiranegara No.86 (Seberang Transmart Way Halim), tombol bookmark.",
          en: "End Card: Katama logo, full street address opposite Transmart Way Halim, bookmark CTA.",
        },
        technicalNote: {
          id: "Scene6CTAEndCardV3: Hold statis 7 detik agar penonton sempat membaca alamat dan menyimpan video darurat.",
          en: "Scene6CTAEndCardV3: 7-second static hold allowing viewers to read the full address and save the video.",
        },
        toolUsed: "Remotion (Scene6CTAEndCardV3.tsx)",
        assetType: "Remotion Component",
      },
    ],
    videoVariations: [
      {
        id: "v1-reality-check",
        label: {
          id: "Variasi 1: The WFC Reality Check",
          en: "Variation 1: The WFC Reality Check",
        },
        hookHeadline: {
          id: "“Stop WFC di kafe yang cuma menang estetik!”",
          en: "“Stop working at cafes that only look good in photos!”",
        },
        angleDescription: {
          id: "Membongkar friksi kafe meja sempit & colokan rebutan, memposisikan Katama sebagai ruang kerja fungsional serba ada.",
          en: "Exposing cramped table friction and outlet shortages, positioning Katama as the all-in-one functional workspace.",
        },
        videoSrc: "/videos/katama/katama_v1_editorial.mp4",
        aspectRatio: "9:16",
        duration: "30s",
        specs: {
          durationFrames: "900 Frames",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Neural Voice (Tempo Natural ~135 WPM)",
        },
        keyTakeaway: {
          id: "Cocok untuk menjaring audiens pekerja remote dan mahasiswa yang sering kecewa dengan kafe Instagrammable namun tidak fungsional. Pacing cepat 1.6–2.0 detik per pergantian adegan di awal video menjaga retensi tetap tinggi.",
          en: "Ideal for capturing remote workers and students tired of photogenic yet dysfunctional cafes. Rapid 1.6–2.0s cuts in the first 9 seconds maintain high visual momentum.",
        },
      },
      {
        id: "v2-free-print",
        label: {
          id: "Variasi 2: The Free Print Discovery",
          en: "Variation 2: The Free Print Discovery",
        },
        hookHeadline: {
          id: "“Nemu kafe di Lampung yang nyediain FREE PRINT?!”",
          en: "“Found a cafe in Lampung offering FREE PRINTING?!”",
        },
        angleDescription: {
          id: "Memanfaatkan rasa penasaran (*novelty factor*) terhadap fasilitas langka printer gratis sebagai pintu masuk eksplorasi kafe.",
          en: "Leveraging novelty curiosity regarding the rare free-print amenity as the gateway to a full space showcase.",
        },
        videoSrc: "/videos/katama/katama_v2_editorial.mp4",
        aspectRatio: "9:16",
        duration: "44s",
        specs: {
          durationFrames: "1320 Frames",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Bian Voice (8 Beat Audio Layout)",
        },
        keyTakeaway: {
          id: "Fasilitas Free Print adalah fitur diferensiasi paling kuat yang tidak dimiliki kompetitor di Bandar Lampung. Menempatkan bukti printer di detik ke-0 memberikan alasan tak terbantahkan bagi penonton untuk tidak melakukan scroll-away.",
          en: "The Free Print service is Katama's strongest unique mechanism. Placing printer proof in the opening 2 seconds creates a compelling reason for viewers to stay rather than scroll away.",
        },
      },
      {
        id: "v3-deadline-emergency",
        label: {
          id: "Variasi 3: The 2 AM Deadline Emergency",
          en: "Variation 3: The 2 AM Deadline Emergency",
        },
        hookHeadline: {
          id: "“PANIK DEADLINE JAM 12 MALEM?!”",
          en: "“MIDNIGHT DEADLINE PANIC AT 12 AM?!”",
        },
        angleDescription: {
          id: "Sudut pandang emosional paling intens: kepanikan tugas larut malam diselesaikan oleh kafe 24 jam dengan printer gratis dan makanan hangat.",
          en: "Highest emotional urgency: late-night assignment panic resolved by a 24-hour haven with free printing and hot meals.",
        },
        videoSrc: "/videos/katama/katama_v3_deadline_emergency.mp4",
        aspectRatio: "9:16",
        duration: "44s",
        specs: {
          durationFrames: "1320 Frames",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Spoken Pace (High Urgency to Calm Relief)",
        },
        keyTakeaway: {
          id: "Angle dengan potensi save-rate dan share-rate organik tertinggi di kalangan mahasiswa semester akhir. Menyajikan kontras dramatis antara jalanan/toko fotokopi yang gelap dengan interior Katama yang terang dan hangat.",
          en: "Highest organic bookmark and share potential among university students. Delivers a dramatic contrast between locked dark print shops and Katama's bright, welcoming interior.",
        },
      },
    ],
    productionWorkflow: [
      {
        phase: "Tahap 01",
        title: {
          id: "Riset Brand, Audiens, & Voice of Customer (VOC)",
          en: "Brand, Audience, & Voice of Customer (VOC) Research",
        },
        turnaroundTime: {
          id: "Hari ke-1",
          en: "Day 1",
        },
        tools: ["Dokumentasi Katama", "Google Maps Reviews", "Katalog GoFood"],
        summary: {
          id: "Menganalisis 50+ ulasan pengunjung asli Katama di Way Halim. Menemukan bahwa fasilitas 'Free Print' dan jam operasional 24 jam adalah faktor paling banyak dipuji oleh mahasiswa kampus Bandar Lampung.",
          en: "Analyzed 50+ real visitor reviews of Katama Way Halim. Identified 'Free Print' and 24-hour operation as the most praised factors by local university students.",
        },
        keyDeliverable: {
          id: "Dokumen Riset Brand & Peta VOC Mahasiswa",
          en: "Brand Research & Student VOC Document",
        },
      },
      {
        phase: "Tahap 02",
        title: {
          id: "Matriks Sudut Pandang Kreatif & Creative Brief",
          en: "Creative Angles Matrix & Strategic Brief",
        },
        turnaroundTime: {
          id: "Hari ke-2",
          en: "Day 2",
        },
        tools: ["Notion", "Creative Angles Matrix"],
        summary: {
          id: "Menyusun matriks 4 sudut pandang dan memprioritaskan 3 angle paling kuat: (1) WFC Reality Check, (2) Free Print Discovery, dan (3) The 2 AM Deadline Emergency.",
          en: "Formulated a 4-angle matrix and prioritized the top 3 concepts: (1) WFC Reality Check, (2) Free Print Discovery, and (3) The 2 AM Deadline Emergency.",
        },
        keyDeliverable: {
          id: "Matriks 3 Sudut Pandang & Brief Kreatif Disetujui",
          en: "3-Angle Matrix & Approved Creative Brief",
        },
      },
      {
        phase: "Tahap 03",
        title: {
          id: "Penulisan Naskah & Storyboard Frame-by-Frame",
          en: "Scriptwriting & Frame-by-Frame Storyboard",
        },
        turnaroundTime: {
          id: "Hari ke-3",
          en: "Day 3",
        },
        tools: ["Markdown", "ElevenLabs Script Editor"],
        summary: {
          id: "Menulis naskah percakapan natural berbahasa Indonesia kasual (~135 WPM). Menyusun tabel storyboard 6 adegan dengan sinkronisasi ketat antara voice-over, tindakan visual, teks layar, dan SFX.",
          en: "Drafted natural Indonesian conversational scripts (~135 WPM). Structured 6-scene storyboards with tight sync across VO, visual action, screen text, and SFX.",
        },
        keyDeliverable: {
          id: "Naskah 3 Versi & Tabel Storyboard Remotion",
          en: "3 Script Versions & Remotion Storyboard Tables",
        },
      },
      {
        phase: "Tahap 04",
        title: {
          id: "Rekayasa Animasi Programmatic di Remotion Studio",
          en: "Programmatic Animation in Remotion Studio",
        },
        turnaroundTime: {
          id: "Hari ke-4",
          en: "Day 4",
        },
        tools: ["Remotion (React + TypeScript)", "Tailwind CSS", "ElevenLabs"],
        summary: {
          id: "Membangun komponen animasi khusus di Remotion: PrinterMotionGraphic, LineArtClosedPhotocopy, dan KineticTypography. Mengintegrasikan audio vokal ElevenLabs yang diselaraskan per frame sequence.",
          en: "Built custom Remotion animation components: PrinterMotionGraphic, LineArtClosedPhotocopy, and KineticTypography. Integrated ElevenLabs audio synced to frame sequences.",
        },
        keyDeliverable: {
          id: "Komposisi React Remotion (V1, V2, V3)",
          en: "Remotion React Compositions (V1, V2, V3)",
        },
      },
      {
        phase: "Tahap 05",
        title: {
          id: "Mastering Audio & Ekspor Video Final",
          en: "Audio Mastering & Final Multi-Variation Export",
        },
        turnaroundTime: {
          id: "Hari ke-5",
          en: "Day 5",
        },
        tools: ["Remotion CLI (npm run build)", "Audacity / FabFilter"],
        summary: {
          id: "Merender video vertikal 1080×1920 30fps langsung dari Remotion engine. Menyeimbangkan loudness audio voice-over dan lofi beat dengan SFX detak jam dan printer yang tajam.",
          en: "Rendered 1080×1920 30fps vertical videos directly from Remotion CLI. Balanced voiceover loudness with lofi music and crisp tactile sound effects.",
        },
        keyDeliverable: {
          id: "3 File Video MP4 Final (V1 30s, V2 44s, V3 44s)",
          en: "3 Final MP4 Video Files (V1 30s, V2 44s, V3 44s)",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Angle V3 (The 2 AM Deadline Emergency) memiliki daya tarik emosional paling kuat karena membidik momen krisis nyata mahasiswa (toko fotokopi tutup & kafe tutup).",
          en: "Angle V3 (The 2 AM Deadline Emergency) carries the strongest emotional resonance by targeting a real student crisis (closed print shops & closing cafes).",
        },
        {
          id: "Visual proof fasilitas 'Free Print' di detik-detik awal (pada V2 & V3) memecah ekspektasi penonton bahwa video ini hanyalah promosi kafe estetik biasa.",
          en: "Placing 'Free Print' visual proof in the opening moments (V2 & V3) breaks viewer expectations of a generic cafe aesthetic promo.",
        },
        {
          id: "Tipografi sans-serif tebal warna kuning-putih dengan animasi getar halus memastikan pesan terbaca jelas bahkan saat penonton memutar video dalam mode tanpa suara (sound-off).",
          en: "Bold yellow-white sans-serif captions with subtle shake animation ensure crystal-clear sound-off comprehension in mobile feeds.",
        },
      ],
      underperformers: [
        {
          id: "Durasi V2 dan V3 yang mencapai 44 detik memerlukan retensi narasi yang kuat di pertengahan video (detik 18–26) agar penonton tidak berpindah sebelum melihat alamat lengkap di End Card.",
          en: "The 44-second duration in V2 and V3 requires strong mid-video narrative retention (seconds 18–26) to prevent viewer drop-off before reaching the End Card.",
        },
        {
          id: "Beberapa aset visual masih mengandalkan rekaman publik kafe; pada iterasi mendatang, pengambilan footage kamera langsung bersudut macro pada mesin printer saat mencetak akan memperkuat rasa autentik.",
          en: "Several visual sequences rely on public cafe B-roll; future iterations would benefit from dedicated on-site macro camera footage of the actual printer in action.",
        },
      ],
      creativeAssessment: {
        id: "Evaluasi ini difokuskan pada analisis keputusan kreatif, ritme pacing, dan kekuatan narasi naskah. Karena ini merupakan spec ad independen yang belum dijalankan pada dashboard iklan berbayar (paid media), tidak ada klaim ROAS atau konversi semu yang dibuat.",
        en: "This evaluation focuses strictly on creative decision-making, editorial pacing, and narrative strength. As an independent spec ad not yet run in active paid ad accounts, no synthetic ROAS or conversion metrics are claimed.",
      },
      creativeLearnings: [
        {
          id: "Dalam video direct response F&B, keunikan fungsional (seperti printer gratis & 24 jam) mengonversi perhatian jauh lebih kuat daripada sekadar visual latte art atau interior cantik.",
          en: "In F&B direct response video, functional differentiators (such as free printing & 24/7 access) convert attention far better than generic latte art or pretty interiors.",
        },
        {
          id: "Programmatic video (Remotion) memungkinkan sinkronisasi frame-by-frame antara voiceover AI dengan teks kinetik dan komponen grafis tanpa ketergantungan render NLE manual yang lambat.",
          en: "Programmatic video (Remotion) enables frame-by-frame synchronization between AI voiceover, kinetic captions, and motion elements without sluggish manual NLE renders.",
        },
      ],
      nextIterationStrategy: {
        id: "Menyiapkan pengujian A/B live testing pada Meta Dynamic Creative Ads (DCT) dengan membandingkan 3 variasi hook pembuka 3 detik secara terisolasi untuk mengukur rasio thumbstop 3 detik di kalangan mahasiswa Lampung.",
        en: "Prepare an A/B live test on Meta Dynamic Creative (DCT) comparing the 3 distinct 3-second opening hooks in isolation to measure real-world thumbstop rates among Lampung students.",
      },
    },
  },
  {
    id: "nespresso-vertuo",
    slug: "nespresso-vertuo",
    title: "Nespresso Vertuo Pop",
    client: "Nespresso (Spec Ad / Portfolio Case Study)",
    category: {
      id: "F&B / Smart Coffee Appliances",
      en: "F&B / Smart Coffee Appliances",
    },
    year: "2026",
    tagline: {
      id: "Rangkaian video iklan direct response TikTok (9:16) berbasis Remotion & ElevenLabs untuk segmen pekerja WFH yang butuh kopi kafe cepat tanpa friksi.",
      en: "A 9:16 vertical direct response video ad system engineered with Remotion & ElevenLabs for remote professionals needing fast, frictionless cafe-quality coffee.",
    },
    heroSummary: {
      id: "Studi kasus spec ad komprehensif untuk Nespresso Vertuo Pop. Menghubungkan friksi pagi pekerja remote (meeting maraton, otak loading, keterbatasan waktu seduh) dengan 2 variasi angle teruji: The 08:55 AM Meeting Emergency dan The 30-Second Desk Barista (Sensory Crema Contrast).",
      en: "A comprehensive direct-response spec ad case study for Nespresso Vertuo Pop. Translating remote-worker morning friction into high-converting hooks across 2 tested angles: The 08:55 AM Meeting Emergency and The 30-Second Desk Barista (Sensory Crema Contrast).",
    },
    featured: true,
    primaryHighlight: {
      value: "2 Video Cuts",
      label: {
        id: "Variasi Angle Kreatif",
        en: "Creative Angle Variations",
      },
      subtext: {
        id: "45s & 41s Vertikal 9:16 (Render Nyata Remotion)",
        en: "45s & 41s 9:16 Vertical (Actual Remotion Renders)",
      },
    },
    secondaryHighlights: [
      {
        value: "9:16",
        label: {
          id: "Format Vertikal Media Sosial",
          en: "Native Social Vertical Format",
        },
      },
      {
        value: "4.000 RPM",
        label: {
          id: "Teknologi Centrifusion™",
          en: "Centrifusion™ Extraction",
        },
      },
      {
        value: "ElevenLabs",
        label: {
          id: "Voiceover Neural AI Terkurasi",
          en: "Neural AI Voiceover Pipeline",
        },
      },
    ],
    toolsUsed: [
      "Remotion (React & TypeScript)",
      "ElevenLabs Neural Voice",
      "Adobe Premiere Pro",
      "Tailwind CSS",
      "Audacity / Audio EQ",
    ],
    creativeBrief: {
      clientObjective: {
        id: "Merancang rangkaian video iklan direct response format vertikal (9:16) untuk Nespresso Vertuo Pop di media sosial (TikTok & Reels). Menghubungkan kecepatan seduh 30 detik, pengenalan barcode otomatis, dan kapasitas mug 230ml dengan crema tebal langsung di meja kerja para profesional WFH.",
        en: "Develop a direct response vertical video ad series (9:16) for Nespresso Vertuo Pop on paid social (TikTok & Reels), highlighting 30-second brewing speed, auto-barcode recognition, and a full 230ml mug size with dense crema directly at the desk for WFH professionals.",
      },
      targetAudience: {
        id: "Profesional WFH, software engineer, pekerja agency, dan freelancer berusia 24–38 tahun yang menghabiskan 8+ jam di depan laptop dengan jadwal meeting online padat. Membutuhkan kopi kafe porsi besar setiap pagi tanpa kerepotan seduh manual atau keterlambatan pesanan ojol.",
        en: "WFH professionals, software engineers, agency workers, and freelancers aged 24–38 spending 8+ hours at laptops with tight online meeting schedules. Demanding large-cup cafe coffee every morning without manual brew friction or delivery delays.",
      },
      coreProblem: {
        id: "Seduh manual butuh 15 menit dan meninggalkan ampas berantakan; pesan kopi kafe via ojol memakan waktu 30 menit dengan ongkir mahal dan es mencair; sementara kopi saset instan rasanya datar tanpa lapisan crema.",
        en: "Manual brewing takes 15 minutes with messy clean-up; ordering delivery takes 30 minutes with high fees and melted ice; while instant sachet coffee tastes flat and lacks crema.",
      },
      angleHookStrategy: {
        id: "Menguji 2 sudut pandang pesan kontras: (1) Urgensi kepanikan waktu 'The 08:55 AM Meeting Emergency' (solusi 30 detik sebelum daily standup), dan (2) Kontras sensori visual 'The 30-Second Desk Barista' (ASMR spoon crema tebal mematahkan mitos kopi kafe mahal vs meja kerja).",
        en: "Testing 2 contrasting message angles: (1) Time-urgency panic 'The 08:55 AM Meeting Emergency' (30-second fix before daily standup), and (2) Sensory visual contrast 'The 30-Second Desk Barista' (macro crema ASMR debunking the expensive cafe coffee myth).",
      },
      keyDifferentiators: [
        {
          id: "Teknologi Centrifusion™ 4.000 RPM menghasilkan crema alami super tebal",
          en: "Centrifusion™ 4,000 RPM extraction producing exceptionally rich natural crema",
        },
        {
          id: "Sistem barcode cerdas memindai kapsul dan mengatur parameter seduh dengan 1 sentuhan tombol",
          en: "Smart barcode system scanning capsule and optimizing brew parameters with a single button press",
        },
        {
          id: "Dukungan porsi 1 Mug Penuh (230 ml) untuk menemani sesi kerja panjang",
          en: "Full 1-Mug capacity (230 ml) engineered to power extended remote work sessions",
        },
        {
          id: "Zero-Mess: Kapsul bekas otomatis masuk ke kontainer internal, meja kerja bebas ampas",
          en: "Zero-Mess: Spent capsules automatically eject into an internal bin, keeping desks pristine",
        },
      ],
      deliverables: [
        {
          id: "Variasi 1: Video Vertikal 'The 08:55 AM Meeting Emergency' (Durasi Final 45s / Storyboard Awal 30s, 1080×1920 @ 30fps)",
          en: "Variation 1: Vertical Video 'The 08:55 AM Meeting Emergency' (Final 45s / Initial Storyboard 30s, 1080×1920 @ 30fps)",
        },
        {
          id: "Variasi 2: Video Vertikal 'The 30-Second Desk Barista / Crema Contrast' (Durasi Final 41s / Storyboard Awal 30s, 1080×1920 @ 30fps)",
          en: "Variation 2: Vertical Video 'The 30-Second Desk Barista / Crema Contrast' (Final 41s / Initial Storyboard 30s, 1080×1920 @ 30fps)",
        },
        {
          id: "Komposisi Remotion modular (NespressoVideo & NespressoVideoV2) dengan sinkronisasi vokal ElevenLabs",
          en: "Modular Remotion composition repository (NespressoVideo & NespressoVideoV2) with ElevenLabs neural voice sync",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec ad independen",
        en: "Independent spec ad",
      },
      objective: {
        id: "Merancang rangkaian video iklan direct response format vertikal (9:16) untuk Nespresso Vertuo Pop di media sosial (TikTok & Reels). Menghubungkan kecepatan seduh 30 detik, pengenalan barcode otomatis, dan kapasitas mug 230ml dengan crema tebal langsung di meja kerja para profesional WFH.",
        en: "Develop a direct response vertical video ad series (9:16) for Nespresso Vertuo Pop on paid social (TikTok & Reels), highlighting 30-second brewing speed, auto-barcode recognition, and a full 230ml mug size with dense crema directly at the desk for WFH professionals.",
      },
      targetAudience: {
        id: "Profesional WFH, software engineer, pekerja agency, dan freelancer berusia 24–38 tahun yang menghabiskan 8+ jam di depan laptop dengan jadwal meeting online padat. Membutuhkan kopi kafe porsi besar setiap pagi tanpa kerepotan seduh manual atau keterlambatan pesanan ojol.",
        en: "WFH professionals, software engineers, agency workers, and freelancers aged 24–38 spending 8+ hours at laptops with tight online meeting schedules. Demanding large-cup cafe coffee every morning without manual brew friction or delivery delays.",
      },
      audienceInsight: {
        id: "Pagi hari pekerja WFH adalah waktu paling krusial: 5 menit sebelum meeting jam 09:00 otak masih lemas/loading, seduh manual butuh 15 menit dan meninggalkan ampas kotor di meja, sementara pesanan ojol memakan waktu 30 menit dengan ongkir mahal dan es mencair.",
        en: "Remote workers face morning friction: 5 minutes before a 9:00 AM meeting the brain is still groggy, manual brew takes 15 minutes leaving messy grounds, while delivery takes 30 minutes with high fees and melted ice.",
      },
      coreAngle: {
        id: "Pengujian 2 sudut pandang pesan kontras: (1) Urgensi kepanikan waktu 'The 08:55 AM Meeting Emergency' (solusi 30 detik sebelum daily standup), dan (2) Kontras sensori visual 'The 30-Second Desk Barista' (macro crema ASMR mematahkan mitos kopi kafe mahal vs meja kerja).",
        en: "Testing 2 contrasting message angles: (1) Time-urgency panic 'The 08:55 AM Meeting Emergency' (30-second fix before daily standup), and (2) Sensory visual contrast 'The 30-Second Desk Barista' (macro crema ASMR debunking the expensive cafe coffee myth).",
      },
      hookStrategy: {
        id: "Jam digital 08:55 berkedip notifikasi 'Daily Standup in 5 mins' (V1) atau macro slow-motion sendok menyibak busa crema tebal keemasan (V2) sebagai visual pattern-interrupt di 3 detik awal.",
        en: "Flashing 8:55 AM clock with 'Daily Standup in 5 mins' popup (V1) or macro slow-motion spoon dipping into velvety golden crema (V2) as an immediate 3-second pattern-interrupt.",
      },
      valueProposition: {
        id: "Barista-Quality Mug in 30 Seconds with Zero Clean-Up: Teknologi Centrifusion™ 4.000 RPM memindai barcode kapsul dan menyeduh 1 mug penuh 230ml dengan crema tebal secara otomatis via 1 sentuhan tombol.",
        en: "Barista-Quality Mug in 30 Seconds with Zero Clean-Up: Centrifusion™ 4,000 RPM technology scans the capsule barcode and automatically brews a full 230ml mug with dense crema via a single button press.",
      },
      callToAction: {
        id: "Upgrade ritual kopi WFH kamu sekarang. Cek promo Nespresso Vertuo Pop di link bio!",
        en: "Upgrade your daily WFH coffee ritual. Check out Nespresso Vertuo Pop promotions at the link in bio!",
      },
      creativeRationale: {
        id: "Pekerja remote memiliki sensitivitas tinggi terhadap waktu dan kebersihan meja kerja. Menghubungkan kepanikan waktu nyata (08:55 AM) atau sensori rasa kafe Rp50.000 dengan kemudahan mesin satu tombol menghasilkan alasan emosional dan rasional yang kuat untuk membeli tanpa merasa digurui.",
        en: "Remote workers are highly sensitive to time friction and desk cleanliness. Connecting real morning panic (8:55 AM) or Rp50,000 cafe sensory desire to a 1-button desk appliance provides compelling emotional and rational purchase triggers without sounding preachy.",
      },
    },
    assetBreakdown: [
      {
        id: "nespresso-shot-01",
        name: {
          id: "Layar Laptop 08:55 AM & Notifikasi Standup",
          en: "Laptop Screen 08:55 AM & Standup Notification",
        },
        category: "Motion graphics and compositing",
        sourceOrTool: "Remotion (Scene1Hook.tsx / Motion UI Mockup)",
        myContribution: {
          id: "Desain motion UI Google Calendar popup, animasi detak jam digital, glitch effect, dan SFX calendar chime.",
          en: "Motion UI design for Google Calendar popup, digital clock animation, glitch effect, and calendar chime SFX.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Dibuat secara terprogram di Remotion sebagai visual pattern-interrupt detik ke-0.",
          en: "Programmatically created in Remotion as a 0-second visual pattern-interrupt.",
        },
      },
      {
        id: "nespresso-shot-02",
        name: {
          id: "Pekerja WFH Lemas & Mengantuk di Depan Laptop",
          en: "Exhausted WFH Worker at Desk",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Pexels (Stock B-roll)",
        myContribution: {
          id: "Kurasi ekspresi kantuk, pemberian cool blue-grey color tint (5200K) mencerminkan suasana lemas pagi hari.",
          en: "Expression curation, cool blue-grey color tint (5200K) reflecting morning lethargy.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Lisensi stok bebas royalti Pexels (100% aman hak cipta komersial).",
          en: "Royalty-free commercial stock license from Pexels.",
        },
      },
      {
        id: "nespresso-shot-03",
        name: {
          id: "Layar HP Ojol 35 Menit & Grinder Manual",
          en: "Delivery App 35-Min Wait & Manual Grinder",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Screen Recording UI & Stock B-roll",
        myContribution: {
          id: "Penyusunan perbandingan visual split/cut, teks silang merah, dan SFX akselerasi detak jam panik.",
          en: "Split comparison editing, red cross text badge, and accelerating panic clock foley.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Mengagitasikan dua alternatif yang gagal menyelesaikan masalah waktu pekerja WFH.",
          en: "Agitating two alternatives that fail to solve remote workers' morning time crunch.",
        },
      },
      {
        id: "nespresso-shot-04",
        name: {
          id: "Tangan Memasukkan Kapsul & Mengunci Tuas",
          en: "Hand Inserting Capsule & Locking Lever",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Review Publik / UGC Vertuo Pop",
        myContribution: {
          id: "Crop vertikal 9:16 rapat pada tuas (tanpa menampilkan wajah reviewer), dan penambahan SFX solid mechanical 'clack'.",
          en: "Tight 9:16 crop on machine lever (excluding reviewer faces), and solid mechanical 'clack' SFX layering.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Footage publik ulasan produk untuk keperluan spec ad edukasi mekanisme mesin.",
          en: "Public product review footage used under transformative spec ad educational conventions.",
        },
      },
      {
        id: "nespresso-shot-05",
        name: {
          id: "Jari Menekan 1 Tombol & Ring LED Berputar",
          en: "Finger Pressing Top Button & Rotating LED",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Review Publik / B-roll Resmi Nespresso",
        myContribution: {
          id: "Macro punch-in, peningkatan saturasi lampu indikator LED, dan sinkronisasi audio mechanical button click.",
          en: "Macro punch-in, LED ring saturation boost, and tactile mechanical button click sync.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Menunjukkan kemudahan sistem barcode otomatis dengan satu sentuhan.",
          en: "Demonstrating the simplicity of 1-touch auto-barcode recognition.",
        },
      },
      {
        id: "nespresso-shot-06",
        name: {
          id: "Aliran Kopi & Crema Tebal ke Mug Kaca 230ml",
          en: "Rich Coffee & Thick Crema Pouring into Mug",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "B-roll Resmi Vertuo / UGC Showcase",
        myContribution: {
          id: "Slow-motion (optical flow) 60%, color grading warm golden-amber (6200K, Vibrance +12), dan rich coffee pour ASMR.",
          en: "60% optical flow slow-motion, warm golden-amber grade (6200K, Vibrance +12), and rich coffee pour ASMR.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Bukti visual sensori untuk membuktikan klaim crema 4.000 RPM dan kapasitas porsi mug 230ml.",
          en: "Sensory visual proof for 4,000 RPM Centrifusion crema and full 230ml mug capacity.",
        },
      },
      {
        id: "nespresso-shot-07",
        name: {
          id: "Sendok Menyibak Lapisan Busa Crema Tebal",
          en: "Spoon Dipping into Thick Velvety Crema",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "UGC / Review Kopi Vertuo",
        myContribution: {
          id: "Extreme macro framing, penyesuaian kontras busa mikro, dan audio layering denting sendok kaca halus.",
          en: "Extreme macro framing, microfoam contrast enhancement, and delicate glass spoon clink audio layering.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Komponen utama hook pembuka pada Variasi 2 (The Sensory Crema Contrast).",
          en: "Core component of opening hook in Variation 2 (The Sensory Crema Contrast).",
        },
      },
      {
        id: "nespresso-shot-08",
        name: {
          id: "Tuas Terbuka & Kapsul Jatuh ke Tangki Internal",
          en: "Lever Opens & Capsule Auto-Drops to Bin",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Review Publik Vertuo Pop",
        myContribution: {
          id: "Editing cut 1.5 detik tepat saat kapsul terlontar, dan SFX 'pluk' kapsul jatuh ke wadah tertutup.",
          en: "Precision 1.5s cut on capsule ejection, and tactile container drop 'pluk' SFX.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Membuktikan janji Zero-Mess: meja kerja tetap rapi tanpa ampas kopi berceceran.",
          en: "Proving Zero-Mess claim: pristine workspace with zero scattered grounds.",
        },
      },
      {
        id: "nespresso-shot-09",
        name: {
          id: "Pekerja Menyeruput Kopi & Kamera Zoom Aktif",
          en: "Worker Sipping Coffee as Zoom Activates",
        },
        category: "Publicly sourced / third-party footage",
        sourceOrTool: "Pexels (Stock B-roll)",
        myContribution: {
          id: "Transisi match-cut, grading warna hangat natural, SFX nafas lega, dan chime notifikasi Zoom join.",
          en: "Match-cut transition, natural warm grade, sigh-of-relief foley, and Zoom join chime SFX.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Menghadirkan rasa kepuasan (relief): tepat waktu jam 08:59 dan fokus siap kerja.",
          en: "Delivering emotional relief: punctual at 8:59 AM with energized work focus.",
        },
      },
      {
        id: "nespresso-shot-10",
        name: {
          id: "Jajaran 5 Warna Nespresso Vertuo Pop",
          en: "5-Colorway Nespresso Vertuo Pop Lineup",
        },
        category: "Product images or external assets",
        sourceOrTool: "Press Kit Resmi Nespresso (Vektorisasi / PNG)",
        myContribution: {
          id: "Penghapusan latar belakang, penataan layout 2.5D floating, dan integrasi komponen Remotion HeroProductLineup.",
          en: "Background removal, 2.5D floating layout staging, and Remotion HeroProductLineup code integration.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
        notes: {
          id: "Materi press kit resmi brand untuk tampilan End Card varian warna produk.",
          en: "Official brand press kit material for End Card product color options.",
        },
      },
      {
        id: "nespresso-shot-11",
        name: {
          id: "Tipografi Kinetik & Pill Badge Safe Zone",
          en: "Kinetic Safe-Zone Typography & Badges",
        },
        category: "Motion graphics and compositing",
        sourceOrTool: "Remotion Studio (MotionBadge.tsx & SafeZoneContainer.tsx)",
        myContribution: {
          id: "Rekayasa kode komponen pill badge dengan kontras tinggi, animasi pop-in, dan kepatuhan margin aman TikTok.",
          en: "Code engineering of high-contrast pill badges, pop-in animation, and TikTok safe zone compliance.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Diprogram menggunakan React & Tailwind CSS untuk keterbacaan optimal tanpa suara (sound-off).",
          en: "Programmatically coded using React & Tailwind CSS for optimal sound-off readability.",
        },
      },
      {
        id: "nespresso-shot-12",
        name: {
          id: "Voiceover Narasi Kasual Cepat WFH",
          en: "Neural AI Voiceover Narration (Casual WFH)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "ElevenLabs Neural Audio Engine",
        myContribution: {
          id: "Penulisan naskah percakapan natural (~146 WPM & ~156 WPM), penyesuaian pitch, EQ kompresi, dan ducking musik.",
          en: "Conversational scriptwriting (~146 & ~156 WPM), pitch shaping, EQ compression, and dynamic music ducking.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Dihasilkan melalui lisensi resmi ElevenLabs AI Voice Engine.",
          en: "Generated via licensed ElevenLabs AI Voice Engine.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "angle-v1-emergency",
        name: {
          id: "Variasi 1: The 08:55 AM Meeting Emergency",
          en: "Variation 1: The 08:55 AM Meeting Emergency",
        },
        hookType: {
          id: "Urgensi Waktu / Problem-Agitation-Solution",
          en: "Time Urgency / Problem-Agitation-Solution",
        },
        duration: "45s (Storyboard awal: 30s)",
        concept: {
          id: "Mengangkat kepanikan nyata 5 menit sebelum meeting online jam 09:00 ketika otak masih lemas, seduh manual terlalu lama, dan ojol terlambat.",
          en: "Depicting the real panic of 5 minutes before a 9:00 AM meeting when the brain is groggy, manual brew takes too long, and delivery is delayed.",
        },
        lines: [
          {
            time: "00:00 - 00:04",
            visual: {
              id: "Zoom-in layar laptop jam 08:55 pagi & notifikasi Daily Standup 09:00, cut ekspresi lemas, cut tangan buka tuas Vertuo Pop.",
              en: "Zoom-in on laptop clock at 8:55 AM with Daily Standup popup, cut to tired face, cut to hand opening Vertuo Pop lever.",
            },
            audio: {
              id: "“Jam 08.55 pagi, meeting mulai lima menit lagi, dan otak kamu masih loading total?”",
              en: "“8:55 AM, meeting starts in five minutes, and your brain is still completely loading?”",
            },
            psychologyIntent: {
              id: "Pattern-interrupt visual jam 08:55 dan validasi friksi pagi hari pekerja WFH untuk menghentikan scroll di 3 detik awal.",
              en: "Visual pattern-interrupt with 8:55 AM clock validating WFH morning friction to secure 3-second thumbstop retention.",
            },
          },
          {
            time: "00:04 - 00:08",
            visual: {
              id: "Cut layar aplikasi delivery estimasi 35 menit, cut tangan mendorong grinder manual ke samping meja dengan frustrasi.",
              en: "Cut to delivery app showing 35-minute wait, cut to hand pushing manual grinder aside in frustration.",
            },
            audio: {
              id: "“Mau pesan ojol kelamaan, seduh manual juga ga bakal sempat.”",
              en: "“Delivery takes way too long, and manual brewing is out of the question.”",
            },
            psychologyIntent: {
              id: "Agitasi dilema alternatif: ojol terlalu lambat dan seduh manual terlalu merepotkan di sela meeting.",
              en: "Agitating alternative dilemmas: delivery is sluggish and manual brewing is impractical between meetings.",
            },
          },
          {
            time: "00:08 - 00:15",
            visual: {
              id: "Tangan memasukkan kapsul Vertuo Pop, tuas dikunci bunyi 'clack', jari menekan 1 tombol atas (LED berputar), kopi mengucur.",
              en: "Hand inserts Vertuo Pop capsule, lever locks with satisfying clack, finger presses 1 top button (rotating LED), coffee begins pouring.",
            },
            audio: {
              id: "“Untung ada Nespresso Vertuo Pop. Cukup masukin kapsul, pencet satu tombol, mesinnya langsung nyiapin kopi otomatis.”",
              en: "“Good thing there's Nespresso Vertuo Pop. Just pop in a capsule, press one button, and it automatically brews your coffee.”",
            },
            psychologyIntent: {
              id: "Pengenalan solusi instan (mechanism reveal): 1-touch button dan pemindaian barcode otomatis menghilangkan semua friksi.",
              en: "Instant mechanism reveal: 1-touch button and auto barcode scanning eliminate all operational friction.",
            },
          },
          {
            time: "00:15 - 00:21",
            visual: {
              id: "Macro slow-motion crema tebal naik berlapis di mug kaca 230 ml bening, sendok mencolek busa mikro beludru.",
              en: "Macro slow-motion of thick crema layering up in a clear 230 ml mug, spoon dipping into velvety microfoam.",
            },
            audio: {
              id: "“Putaran 4.000 RPM Centrifusion bikin crema-nya setebal ini, dan ukurannya beneran satu mug penuh 230 ml.”",
              en: "“Centrifusion's 4,000 RPM spin creates crema this rich, filling a generous full 230 ml mug.”",
            },
            psychologyIntent: {
              id: "Bukti visual sensori konkret: membuktikan kualitas crema kafe dan mematahkan mitos mesin kapsul cuma sloki kecil.",
              en: "Concrete sensory proof: proving cafe-grade crema and debunking the myth that capsule machines only brew tiny espresso shots.",
            },
          },
          {
            time: "00:21 - 00:25",
            visual: {
              id: "Tuas dibuka, kapsul bekas otomatis terlontar ke tangki internal. Jam di laptop 08:59, menyeruput kopi santai saat kamera Zoom menyala.",
              en: "Lever opens, used capsule auto-ejects into internal bin. Laptop clock shows 8:59 AM, smiling and sipping coffee as Zoom camera turns on.",
            },
            audio: {
              id: "“Nol ampas berantakan, jam sembilan pas kamera Zoom nyala, kamu udah fokus total.”",
              en: "“Zero messy grounds, and right at 9 sharp as your Zoom camera lights up, you're in total focus.”",
            },
            psychologyIntent: {
              id: "Kelegaan kognitif (relief) dan visualisasi kondisi sukses (after-state): meja bersih, tepat waktu, dan siap kerja.",
              en: "Cognitive relief and successful after-state visualization: pristine desk, punctual readiness, and energized focus.",
            },
          },
          {
            time: "00:25 - 00:30",
            visual: {
              id: "End Card dinamis: 5 varian warna Nespresso Vertuo Pop di atas meja kerja minimalis + badge promo penawaran + panah mengarah ke link bio.",
              en: "Dynamic End Card: 5 color variants of Nespresso Vertuo Pop on a minimal desk + promo offer badge + arrow pointing to link in bio.",
            },
            audio: {
              id: "“Bikin ritual WFH kamu jauh lebih simpel. Cek promo Nespresso Vertuo Pop di link bio sekarang!”",
              en: "“Simplify your WFH coffee ritual. Check out Nespresso Vertuo Pop offers at the link in bio now!”",
            },
            psychologyIntent: {
              id: "Call to action langsung dan tegas dengan penawaran promo yang memicu tindakan klik segera.",
              en: "Direct and assertive call to action with promo framing driving immediate link click behavior.",
            },
          },
        ],
      },
      {
        id: "angle-v2-sensory",
        name: {
          id: "Variasi 2: The 30s Desk Barista",
          en: "Variation 2: The 30s Desk Barista",
        },
        hookType: {
          id: "Kontras Sensori & Rasa / Visual ASMR",
          en: "Sensory & Taste Contrast / Visual ASMR",
        },
        duration: "41s (Storyboard awal: 30s)",
        concept: {
          id: "Menantang persepsi bahwa crema setebal kafe hanya bisa didapat dari kafe mahal Rp50.000 atau mesin manual yang mengotori meja.",
          en: "Challenging the assumption that dense velvety crema requires expensive cafe drinks or messy manual machines.",
        },
        lines: [
          {
            time: "00:00 - 00:04",
            visual: {
              id: "Extreme macro shot sendok menyibak lapisan crema tebal keemasan di mug kaca bening, disusul zoom-out cepat ke meja kerja di samping laptop.",
              en: "Extreme macro shot of spoon parting golden crema in a clear mug, followed by quick zoom-out revealing a desk setup next to a laptop.",
            },
            audio: {
              id: "“Ini bukan kopi kafe lima puluh ribuan, dan dibikinnya cuma tiga puluh detik di meja kerja.”",
              en: "“This isn't a fifty-thousand rupiah cafe drink, and it was brewed in just thirty seconds at a work desk.”",
            },
            psychologyIntent: {
              id: "Sensory hook ASMR dipadukan dengan pematahan harga kopi kafe untuk memicu rasa ingin tahu (curiosity gap).",
              en: "Sensory ASMR hook paired with cafe price debunking to spark instant curiosity gap.",
            },
          },
          {
            time: "00:04 - 00:08",
            visual: {
              id: "Cut cup plastik kopi ojol berembun es mencair disingkirkan, cut alat kopi manual dengan bubuk ampas basah mengotori meja.",
              en: "Cut to watery iced delivery plastic cup pushed aside, cut to manual coffee gear with wet coffee grounds dirtying the desk.",
            },
            audio: {
              id: "“Biasanya crema sepadat ini cuma ada di kafe mahal atau mesin manual ribet.”",
              en: "“Usually crema this dense only exists in pricey cafes or messy manual machines.”",
            },
            psychologyIntent: {
              id: "Menegaskan dua friksi utama yang biasa dialami audiens: mahal & lama nunggu vs ribet ampas berserakan.",
              en: "Reinforcing two prevalent audience pain points: expensive & slow delivery vs messy manual grounds.",
            },
          },
          {
            time: "00:08 - 00:15",
            visual: {
              id: "Tangan memasukkan kapsul Vertuo Pop setengah kubah, tuas dikunci clack mantap, jari tekan 1 tombol atas membaca barcode.",
              en: "Hand inserts hemispherical Vertuo Pop capsule, lever locks with solid clack, finger presses single top button reading barcode.",
            },
            audio: {
              id: "“Tapi Nespresso Vertuo Pop beda. Cukup pencet satu tombol, sistem barcodenya bekerja otomatis memutar kapsul.”",
              en: "“Nespresso Vertuo Pop is different. Just press one button, and its smart barcode system automatically spins the capsule.”",
            },
            psychologyIntent: {
              id: "Membuka teknologi barcode otomatis sebagai alasan mengapa mesin ini begitu mudah digunakan tanpa keahlian barista.",
              en: "Revealing auto-barcode technology as the mechanism for barista-quality coffee without barista training." }
          },
          {
            time: "00:15 - 00:21",
            visual: {
              id: "Slow-motion macro aliran kopi kaya crema keemasan mengucur deras ke mug kaca 230 ml, lapisan crema tebal naik bertingkat.",
              en: "Slow-motion macro of rich golden crema flowing into a 230 ml glass mug, thick foam rising smoothly."
            },
            audio: {
              id: "“Putaran 4.000 RPM Centrifusion ngehasilin crema super tebal, langsung penuh satu mug 230 ml.”",
              en: "“Centrifusion's 4,000 RPM rotation extracts super thick crema, filling an entire 230 ml mug instantly.”"
            },
            psychologyIntent: {
              id: "Validasi sensori putaran 4.000 RPM dan porsi besar 230 ml sebagai alasan konversi nilai rasional dan emosional.",
              en: "Sensory validation of 4,000 RPM extraction and 230 ml capacity supporting both rational and emotional desire."
            }
          },
          {
            time: "00:21 - 00:25",
            visual: {
              id: "Tuas dibuka, kapsul bekas otomatis terlontar ke kontainer internal (meja tetap bersih). Pekerja tersenyum menyeruput kopi, fokus kerja aktif.",
              en: "Lever opens, used capsule drops cleanly into internal container. Worker smiles sipping warm coffee, productivity activated."
            },
            audio: {
              id: "“Meja tetap bersih tanpa ampas, fokus kerja kamu langsung on total.”",
              en: "“Desks stay spotless with zero grounds, and your work focus turns completely on.”"
            },
            psychologyIntent: {
              id: "Menghadirkan rasa kepuasan kerja (lifestyle relief): ritual ngopi mewah tanpa beban ampas kotor di meja.",
              en: "Delivering lifestyle relief: a luxury coffee ritual with zero mess burdening the workspace."
            }
          },
          {
            time: "00:25 - 00:30",
            visual: {
              id: "Hero shot display 5 varian warna Nespresso Vertuo Pop + badge promo paket bundling / voucher kapsul + tombol CTA berkedip dinamis.",
              en: "Hero shot displaying 5 vibrant Vertuo Pop colorways + bundling voucher promo badge + dynamic pulsing CTA button."
            },
            audio: {
              id: "“Upgrade ritual ngopi kamu sekarang. Cek promo Nespresso Vertuo Pop di link bio!”",
              en: "“Upgrade your daily coffee ritual now. Check out Nespresso Vertuo Pop promotions at the link in bio!”"
            },
            psychologyIntent: {
              id: "Call to action yang memposisikan pembelian sebagai upgrade kualitas hidup kerja dari rumah.",
              en: "Call to action positioning purchase as an upgrade to everyday work-from-home quality of life."
            }
          }
        ]
      }
    ],
    storyboard: [
      {
        id: "sb-1",
        scene: {
          id: "Adegan 1: The Emergency Hook (08:55 AM)",
          en: "Scene 1: The Emergency Hook (08:55 AM)",
        },
        timecode: "00:00 - 00:04",
        visualDescription: {
          id: "Zoom-in jam 08:55 & notifikasi Daily Standup Google Calendar, cut cepat ekspresi lemas pekerja WFH, cut tangan membuka tuas Vertuo Pop.",
          en: "Zoom-in on 8:55 AM clock and Daily Standup Google Calendar notification, rapid cuts of tired WFH worker and hand opening Vertuo Pop lever.",
        },
        technicalNote: {
          id: "Pacing cepat (1.3s per cut), micro punch-in (100% -> 108%), SFX calendar pop chime + clock tick + glitch buzz.",
          en: "Rapid pacing (1.3s per cut), micro punch-in (100% -> 108%), calendar pop chime + clock tick + glitch buzz SFX.",
        },
        toolUsed: "Remotion (Scene1Hook.tsx)",
        assetType: "Remotion Component",
      },
      {
        id: "sb-2",
        scene: {
          id: "Adegan 2: Morning Agitation (Ojol vs Manual)",
          en: "Scene 2: Morning Agitation (Delivery vs Manual)",
        },
        timecode: "00:04 - 00:08",
        visualDescription: {
          id: "Layar HP menampilkan estimasi delivery ojol 35 menit, disusul tangan menyingkirkan grinder kopi manual dari meja kerja.",
          en: "Smartphone screen showing 35-minute delivery estimate, followed by hand pushing manual coffee grinder aside.",
        },
        technicalNote: {
          id: "Transisi directional whip-whoosh, SFX whoosh dinamis berpadu suara detak jam berakselerasi.",
          en: "Directional whip-whoosh transitions, dynamic whoosh SFX blended with accelerating panic clock ticking.",
        },
        toolUsed: "Remotion (Scene2Agitation.tsx)",
        assetType: "Remotion Component",
      },
      {
        id: "sb-3",
        scene: {
          id: "Adegan 3: 1-Touch Centrifusion Brewing",
          en: "Scene 3: 1-Touch Centrifusion Brewing",
        },
        timecode: "00:08 - 00:15",
        visualDescription: {
          id: "Kapsul Vertuo dimasukkan ke chamber, tuas dikunci ke kanan (clack), jari menekan 1 tombol atas (LED berputar), kucuran kopi pertama mengalir deras.",
          en: "Vertuo capsule inserted into chamber, lever locked right (clack), finger presses 1 top button (rotating LED), initial coffee stream flows into mug.",
        },
        technicalNote: {
          id: "SFX tuas mekanikal 'clack' + tombol klik taktil + desingan motor 4.000 RPM. Beat musik modern upbeat masuk penuh.",
          en: "Mechanical lever 'clack' + tactile button click + 4,000 RPM motor whir. Upbeat modern beat drops fully.",
        },
        toolUsed: "Remotion (Scene3Brewing.tsx)",
        assetType: "Brand Footage",
      },
      {
        id: "sb-4",
        scene: {
          id: "Adegan 4: Sensory Proof (Crema & Mug 230ml)",
          en: "Scene 4: Sensory Proof (Crema & Mug 230ml)",
        },
        timecode: "00:15 - 00:21",
        visualDescription: {
          id: "Macro slow-motion aliran kopi kaya crema keemasan memenuhi mug kaca 230 ml bening, sendok mencolek busa tebal bertekstur beludru.",
          en: "Macro slow-motion of golden crema filling a 230 ml clear mug, small spoon dipping into dense velvety microfoam.",
        },
        technicalNote: {
          id: "Slow vertical tracking pan, SFX rich coffee pour ASMR + denting sendok kaca halus menyentuh mug.",
          en: "Slow vertical tracking pan, rich coffee pour ASMR + subtle glass spoon chime SFX.",
        },
        toolUsed: "Remotion (Scene4Sensory.tsx)",
        assetType: "Brand Footage",
      },
      {
        id: "sb-5",
        scene: {
          id: "Adegan 5: Relief & Meeting Ready",
          en: "Scene 5: Relief & Meeting Ready",
        },
        timecode: "00:21 - 00:25",
        visualDescription: {
          id: "Tuas dibuka dan kapsul bekas jatuh otomatis ke wadah internal (meja rapi). Jam laptop 08:59, menyeruput kopi santai saat kamera Zoom menyala.",
          en: "Lever opens and used capsule auto-drops into internal container (clean desk). Laptop clock shows 8:59 AM, smiling and sipping coffee as Zoom connects.",
        },
        technicalNote: {
          id: "SFX kapsul jatuh ('pluk') + desah nafas lega ('ahhh') + mug clink ditaruh di meja + chime notifikasi Zoom join.",
          en: "Capsule eject SFX + sigh of relief + mug desk clink + Zoom join chime SFX.",
        },
        toolUsed: "Remotion (Scene5Relief.tsx)",
        assetType: "Remotion Component",
      },
      {
        id: "sb-6",
        scene: {
          id: "Adegan 6: CTA & Colorway Lineup",
          en: "Scene 6: CTA & Colorway Lineup",
        },
        timecode: "00:25 - 00:30",
        visualDescription: {
          id: "Motion Graphic End Card: Hero shot 5 varian warna Nespresso Vertuo Pop di meja kerja + badge promo paket bundling + tombol CTA berkedip dinamis.",
          en: "Motion Graphic End Card: Hero shot of 5 Vertuo Pop colorways on desk + bundling promo badge + dynamic pulsing CTA button.",
        },
        technicalNote: {
          id: "Komposisi HeroProductLineup.tsx dengan floating effect, SFX punchy bass drop penutup + melodic chime + musik fade out.",
          en: "HeroProductLineup.tsx composition with floating effect, punchy bass drop + melodic chime + gentle audio fade out.",
        },
        toolUsed: "Remotion (Scene6CTA.tsx)",
        assetType: "Motion Graphic",
      },
    ],
    videoVariations: [
      {
        id: "v1-meeting-emergency",
        label: {
          id: "Variasi 1: The 08:55 AM Emergency",
          en: "Variation 1: The 08:55 AM Emergency",
        },
        hookHeadline: {
          id: "“Jam 08.55 pagi, meeting mulai 5 menit lagi... otak masih loading?!”",
          en: "“8:55 AM, standup meeting in 5 minutes... brain still loading?!”",
        },
        angleDescription: {
          id: "Urgensi kepanikan pagi WFH: friksi ojol 35 menit & seduh manual 15 menit diselesaikan dalam 30 detik dengan satu sentuhan Nespresso Vertuo Pop.",
          en: "High-urgency WFH morning friction: delivery delays and messy manual prep solved in 30 seconds with one-touch Centrifusion brewing.",
        },
        videoSrc: "/videos/nespresso/nespresso-vertuo-v1.mp4",
        aspectRatio: "9:16",
        duration: "45s",
        specs: {
          durationFrames: "Storyboard awal: 30s • Render final: 44.5s",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Neural Voice (Natural WFH Cadence ~146 WPM)",
        },
        keyTakeaway: {
          id: "Hook jam 08:55 dan pop-up Google Calendar berfungsi sebagai visual pattern-interrupt instan bagi pekerja WFH. Pacing dinamis beralih dari kepanikan di detik 0–8 ke ritme sensori yang menenangkan saat kopi mengucur.",
          en: "The 8:55 AM clock and Google Calendar popup trigger instant pattern interruption for remote workers. Dynamic pacing shifts smoothly from panic to sensory relief as rich crema pours into the mug.",
        },
      },
      {
        id: "v2-sensory-contrast",
        label: {
          id: "Variasi 2: The 30s Desk Barista",
          en: "Variation 2: The 30s Desk Barista",
        },
        hookHeadline: {
          id: "“Crema setebal ini cuma 30 detik di meja kerja?!”",
          en: "“Crema this thick in just 30 seconds at your work desk?!”",
        },
        angleDescription: {
          id: "Kontras sensori visual: macro shot sendok menyibak busa crema tebal mematahkan anggapan bahwa kopi kafe bintang lima harus mahal atau ribet.",
          en: "Visual sensory contrast: macro spoon dips into velvety crema, debunking the myth that cafe-quality coffee requires expensive runs or messy manual espresso.",
        },
        videoSrc: "/videos/nespresso/nespresso-vertuo-v2.mp4",
        aspectRatio: "9:16",
        duration: "41s",
        specs: {
          durationFrames: "Storyboard awal: 30s • Render final: 40.9s",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Neural Voice (Confident & Sensory Pacing ~156 WPM)",
        },
        keyTakeaway: {
          id: "Pilihan hook alternatif yang memprioritaskan coffee aesthetic ASMR untuk audiens solution-aware. Menyoroti perbandingan biaya kopi kafe Rp50.000 vs kemudahan satu tombol di samping laptop.",
          en: "Alternative hook variant prioritizing coffee aesthetic ASMR for solution-aware audiences. Highlights the financial and time contrast between Rp50,000 cafe cups and a 30-second one-touch desk solution.",
        },
      },
    ],
    productionWorkflow: [
      {
        phase: "Tahap 01",
        title: {
          id: "Riset Brand, Audiens, & Voice of Customer (VOC)",
          en: "Brand, Audience, & Voice of Customer (VOC) Research",
        },
        turnaroundTime: {
          id: "Hari ke-1",
          en: "Day 1",
        },
        tools: ["Dokumentasi Nespresso", "Sintesis Komunitas WFH", "VOC Review E-Commerce"],
        summary: {
          id: "Membedah spesifikasi mesin Vertuo Pop (Centrifusion 4.000 RPM, barcode system, mug 230ml) dan keresahan utama pekerja remote (waktu seduh manual 15 menit, pesanan ojol terlambat, kopi saset hambar).",
          en: "Deconstructed Vertuo Pop technical specs (Centrifusion 4,000 RPM, barcode system, 230ml mug) and core remote worker frictions (15-minute manual brew, delayed delivery, flavorless instant sachets).",
        },
        keyDeliverable: {
          id: "Dokumen Riset Brand & Peta VOC Pekerja WFH",
          en: "Brand Research & Remote Worker VOC Document",
        },
      },
      {
        phase: "Tahap 02",
        title: {
          id: "Matriks Sudut Pandang Kreatif & Creative Brief",
          en: "Creative Angles Matrix & Strategic Brief",
        },
        turnaroundTime: {
          id: "Hari ke-2",
          en: "Day 2",
        },
        tools: ["Notion", "Creative Angles Matrix Framework"],
        summary: {
          id: "Merumuskan matriks 4 sudut pandang dan memprioritaskan 2 angle terkuat: (1) The 08:55 AM Meeting Emergency untuk pengujian urgensi waktu, dan (2) The 30-Second Desk Barista untuk pengujian kontras sensori rasa.",
          en: "Formulated a 4-angle matrix and prioritized the top 2 testable concepts: (1) The 08:55 AM Meeting Emergency for time urgency testing, and (2) The 30-Second Desk Barista for sensory taste contrast.",
        },
        keyDeliverable: {
          id: "Matriks 4 Sudut Pandang & Brief Kreatif Disetujui",
          en: "4-Angle Matrix & Approved Creative Brief",
        },
      },
      {
        phase: "Tahap 03",
        title: {
          id: "Penulisan Naskah & Storyboard Frame-by-Frame",
          en: "Scriptwriting & Frame-by-Frame Storyboard",
        },
        turnaroundTime: {
          id: "Hari ke-3",
          en: "Day 3",
        },
        tools: ["Markdown", "ElevenLabs Script Editor"],
        summary: {
          id: "Menulis naskah percakapan natural berbahasa Indonesia kasual (~146 WPM) dengan 6 adegan terstruktur. Memastikan sinkronisasi ketat antara voice-over, tindakan visual, on-screen text, dan cue SFX.",
          en: "Drafted natural Indonesian conversational scripts (~146 WPM) across 6 structured scenes. Ensured frame-accurate sync between voice-over, visual action, on-screen captions, and tactile SFX cues.",
        },
        keyDeliverable: {
          id: "Naskah 2 Versi & Tabel Storyboard 6 Adegan",
          en: "2 Script Versions & 6-Scene Storyboard Tables",
        },
      },
      {
        phase: "Tahap 04",
        title: {
          id: "Rekayasa Animasi Programmatic di Remotion Studio",
          en: "Programmatic Animation in Remotion Studio",
        },
        turnaroundTime: {
          id: "Hari ke-4",
          en: "Day 4",
        },
        tools: ["Remotion (React + TypeScript)", "Tailwind CSS", "ElevenLabs Neural Audio"],
        summary: {
          id: "Membangun komponen modular di Remotion: Scene1Hook (animasi kalender & jam digital), MotionBadge, SafeZoneContainer, dan HeroProductLineup 5 warna. Mengintegrasikan voiceover ElevenLabs per frame sequence.",
          en: "Built modular Remotion components: Scene1Hook (calendar & digital clock animation), MotionBadge, SafeZoneContainer, and HeroProductLineup 5 colorways. Integrated ElevenLabs audio per frame sequence.",
        },
        keyDeliverable: {
          id: "Komposisi React Remotion (NespressoVideo & NespressoVideoV2)",
          en: "Remotion React Compositions (NespressoVideo & NespressoVideoV2)",
        },
      },
      {
        phase: "Tahap 05",
        title: {
          id: "Mastering Audio & Ekspor Video Final",
          en: "Audio Mastering & Final Multi-Variation Export",
        },
        turnaroundTime: {
          id: "Hari ke-5",
          en: "Day 5",
        },
        tools: ["Remotion CLI (npx remotion render)", "Audacity / Audio EQ"],
        summary: {
          id: "Merender video vertikal 1080×1920 30fps langsung dari CLI Remotion. Menyeimbangkan audio loudness (-14 LUFS) dengan perpaduan VO vokal jernih, background music modern lofi-groove, dan SFX mekanikal mesin presisi.",
          en: "Rendered 1080×1920 30fps vertical video directly via Remotion CLI. Balanced audio loudness (-14 LUFS) combining clear voiceover, modern lofi-groove BGM, and tactile mechanical SFX.",
        },
        keyDeliverable: {
          id: "2 File Video MP4 Final (V1 Emergency 45s & V2 Sensory 41s)",
          en: "2 Final MP4 Video Files (V1 Emergency 45s & V2 Sensory 41s)",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Transisi emosional dari kepanikan jam 08:55 ke rasa lega di jam 08:59 menciptakan resolusi narasi yang sangat kuat bagi pekerja remote.",
          en: "The emotional pacing transition from 8:55 AM panic to 8:59 AM calm relief establishes a compelling narrative resolution for remote professionals.",
        },
        {
          id: "Macro shot sendok menyibak busa crema pada Variasi 2 difungsikan sebagai visual hook untuk memikat perhatian penonton lewat detail sensori ASMR kopi.",
          en: "The macro crema spoon dip in Variation 2 serves as a sensory visual hook designed to capture viewer attention through tactile coffee ASMR details.",
        },
        {
          id: "Penerapan batas TikTok Safe Zone yang disiplin memastikan tipografi pill badge bebas dari tabrakan dengan antarmuka native aplikasi.",
          en: "Disciplined TikTok Safe Zone enforcement ensures high-contrast pill badge captions never collide with native UI overlays.",
        },
      ],
      underperformers: [
        {
          id: "Variasi 2 memerlukan penekanan edukasi lebih eksplisit mengenai teknologi barcode agar penonton tidak menyamakannya dengan mesin kapsul pompa biasa.",
          en: "Variation 2 requires more explicit educational emphasis on barcode scanning so viewers clearly distinguish it from ordinary pump capsule machines.",
        },
        {
          id: "Ketergantungan pada rekaman b-roll publik memerlukan kurasi grading warna yang cermat agar saturasi crema tetap konsisten di layar smartphone modern.",
          en: "Reliance on public B-roll requires meticulous color grading curation to keep crema saturation consistent across modern mobile displays.",
        },
      ],
      creativeAssessment: {
        id: "Evaluasi ini difokuskan pada analisis keputusan ritme editing, sinkronisasi audio-visual, dan efektivitas struktur direct response. Karena berstatus spec ad independen yang belum dijalankan pada dashboard iklan berbayar (paid media), tidak ada klaim performa ROAS atau konversi semu yang dibuat.",
        en: "This evaluation focuses strictly on editorial rhythm, audio-visual synchronization, and direct response pacing. As an independent spec ad case study not yet run in active paid ad accounts, no synthetic ROAS or conversion metrics are claimed.",
      },
      creativeLearnings: [
        {
          id: "Saya memakai cut cepat saat adegan panik, lalu menahan shot crema lebih lama agar detail produk sempat terlihat.",
          en: "I used fast cuts during the panic scene, then held the crema shot longer so product details could register.",
        },
        {
          id: "Integrasi SFX mekanikal mesin (tuas terkunci, klik tombol, desingan rotasi) yang disinkronkan per frame di Remotion memberikan kepuasan taktil yang memperkuat persepsi produk premium.",
          en: "Frame-accurate mechanical SFX integration in Remotion (lever lock, button click, spin whir) provides tactile satisfaction that elevates premium appliance perception.",
        },
      ],
      nextIterationStrategy: {
        id: "Menyiapkan pengujian A/B live testing di TikTok Ads dengan membandingkan hook jam 08:55 (urgensi waktu) melawan macro crema ASMR (sensori rasa) secara terisolasi untuk mengukur rasio thumb-stop 3 detik pertama.",
        en: "Prepare an A/B live test in TikTok Ads pitting the 8:55 AM clock hook (time urgency) against the macro crema ASMR hook (sensory taste) in isolation to measure real-world 3-second thumbstop rates.",
      },
    },
  },

  {
    id: "lumina-skin-ugc",
    slug: "lumina-skin-ugc",
    title: "Lumina Skin",
    client: "Lumina Skin (Spec Ad / UGC Native)",
    category: {
      id: "Skincare / UGC Native Testimonial",
      en: "Skincare / UGC Native Testimonial",
    },
    year: "2026",
    tagline: {
      id: "Format iklan kreator native vertikal dengan hook pembuka masalah 0–3 detik dan social proof berdurasi padat.",
      en: "Native vertical creator ad format featuring 0–3s problem agitation and rapid social proof.",
    },
    heroSummary: {
      id: "Studi kasus iklan vertikal gaya kreator native (UGC) untuk produk perawatan kulit harian, menguji pola pembuka interupsi 'Don't Buy Until You Know This'.",
      en: "A creator-style native UGC vertical ad case study testing the 'Don't Buy Until You Know This' curiosity hook.",
    },
    featured: false,
    primaryHighlight: {
      value: "1 Video Cut",
      label: {
        id: "Format Iklan UGC",
        en: "UGC Native Cut",
      },
      subtext: {
        id: "30s Vertikal 9:16 (CapCut & Premiere Pro)",
        en: "30s 9:16 Vertical (CapCut & Premiere Pro)",
      },
    },
    secondaryHighlights: [
      {
        value: "9:16",
        label: {
          id: "Format Vertikal Media Sosial",
          en: "Native Social Vertical Format",
        },
      },
      {
        value: "UGC Native",
        label: {
          id: "Gaya Kreator Organik",
          en: "Organic Creator Style",
        },
      },
      {
        value: "CapCut & PR",
        label: {
          id: "Workflow Editing Cepat",
          en: "Rapid Turnaround Workflow",
        },
      },
    ],
    toolsUsed: ["CapCut", "Adobe Premiere Pro"],
    creativeBrief: {
      clientObjective: {
        id: "Meningkatkan rasio klik (CTR) dengan tampilan video yang terasa seperti konten organik TikTok.",
        en: "Increase CTR using video styling that mimics organic TikTok content.",
      },
      targetAudience: {
        id: "Remaja & dewasa muda pengguna aktif TikTok dan Reels.",
        en: "Teens & young adults active on TikTok and Reels.",
      },
      coreProblem: {
        id: "Iklan komersial tradisional langsung diskip karena terlihat seperti jualan.",
        en: "Traditional commercial ads get skipped instantly for looking like hard selling.",
      },
      angleHookStrategy: {
        id: "Hook peringatan 'Don't Buy Until You Know This' memicu rasa penasaran alami.",
        en: "Curiosity warning hook 'Don't Buy Until You Know This'.",
      },
      keyDifferentiators: [
        {
          id: "Pencahayaan natural dan teks dinamis gaya TikTok.",
          en: "Natural lighting and TikTok-native kinetic captions.",
        },
      ],
      deliverables: [
        {
          id: "1 Video Cut 9:16 (30 Detik).",
          en: "1 Video Cut 9:16 (30 Seconds).",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec Ad / Template UGC",
        en: "Spec Ad / Template UGC",
      },
      objective: {
        id: "Mencapai thumbstop rate maksimal pada feed media sosial.",
        en: "Achieve maximum thumbstop rate on social feeds.",
      },
      targetAudience: {
        id: "Konsumen digital yang mengutamakan rekomendasi teman sebaya.",
        en: "Digital consumers prioritizing peer recommendations.",
      },
      audienceInsight: {
        id: "Audiens lebih percaya review kasual tanpa filter ketimbang studio ad glamor.",
        en: "Audiences trust unfiltered casual reviews over polished studio ads.",
      },
      coreAngle: {
        id: "Don't Buy Until You Know This",
        en: "Don't Buy Until You Know This",
      },
      hookStrategy: {
        id: "Teks tebal di layar dengan ekspresi bicara langsung ke kamera.",
        en: "Bold onscreen text with direct camera-facing delivery.",
      },
      valueProposition: {
        id: "Hasil nyata dalam 7 hari tanpa iritasi kulit.",
        en: "Noticeable results in 7 days without skin irritation.",
      },
      callToAction: {
        id: "Cek keranjang kuning atau link di bio sebelum kehabisan.",
        en: "Check link in bio before the batch sells out.",
      },
      creativeRationale: {
        id: "Menyamarkan iklan sebagai tips personal untuk menurunkan resistensi audiens.",
        en: "Framing ad as personal advice to reduce buyer friction.",
      },
    },
    videoVariations: [
      {
        id: "lumina-ugc-v1",
        label: {
          id: "Cut 01: Don't Buy Until You Know This",
          en: "Cut 01: Don't Buy Until You Know This",
        },
        hookHeadline: {
          id: "Pattern Interrupt & Curiosity Hook",
          en: "Pattern Interrupt & Curiosity Hook",
        },
        angleDescription: {
          id: "Pola interupsi rasa ingin tahu dengan penataan split-screen dan teks tebal kontras.",
          en: "Curiosity pattern interrupt with split-screen pacing and high-contrast captions.",
        },
        videoSrc: "/videos/katama/katama_v1_editorial.mp4",
        aspectRatio: "9:16",
        duration: "30s",
        specs: {
          durationFrames: "900",
          fps: "30",
          resolution: "1080×1920",
          voiceModel: "Native Creator Voice",
        },
        keyTakeaway: {
          id: "Hook 3 detik pertama sangat menentukan retensi video UGC.",
          en: "First 3-second hook dictates UGC retention.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "script-lumina-v1",
        name: {
          id: "Angle 01: Pattern Interrupt Warning",
          en: "Angle 01: Pattern Interrupt Warning",
        },
        hookType: {
          id: "Curiosity Warning",
          en: "Curiosity Warning",
        },
        duration: "30s",
        concept: {
          id: "Membuka video dengan gestur tangan berhenti dan teks peringatan.",
          en: "Opening with a hand stop gesture and warning text.",
        },
        lines: [
          {
            time: "0:00 - 0:03",
            visual: {
              id: "Kreator memegang produk di depan kamera dengan gestur stop.",
              en: "Creator holds product with a subtle stop gesture.",
            },
            audio: {
              id: "'Stop scrolling kalau kalian lagi mikir mau checkout serum ini...'",
              en: "'Stop scrolling if you were about to checkout this serum...'",
            },
            psychologyIntent: {
              id: "Menghentikan jempol penonton dengan rasa penasaran mendesak.",
              en: "Interrupting scrolling with urgent curiosity.",
            },
          },
        ],
      },
    ],
    storyboard: [
      {
        id: "lumina-sc-1",
        scene: {
          id: "Adegan 01: Hook Peringatan",
          en: "Scene 01: Stop Warning Hook",
        },
        timecode: "00:00 - 00:03",
        visualDescription: {
          id: "Ekspresi serius kreator menatap kamera.",
          en: "Creator direct-to-camera candid expression.",
        },
        toolUsed: "CapCut Native Cut",
        assetType: "Motion Graphic",
      },
    ],
    assetBreakdown: [
      {
        id: "lumina-asset-1",
        name: {
          id: "Creator Footage & In-App Captions",
          en: "Creator Footage & In-App Captions",
        },
        category: "Self-shot / original footage",
        myContribution: {
          id: "Pacing edit, teks kinetik, audio level balancing.",
          en: "Pacing edit, kinetic text overlays, audio level balancing.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
      },
    ],
    productionWorkflow: [
      {
        phase: "01",
        title: {
          id: "Assembly Cut & Hook Tuning",
          en: "Assembly Cut & Hook Tuning",
        },
        turnaroundTime: {
          id: "4 Jam",
          en: "4 Hours",
        },
        tools: ["CapCut", "Premiere Pro"],
        summary: {
          id: "Memotong jeda napas mati dan mempercepat tempo percakapan.",
          en: "Trimming dead air and accelerating conversational tempo.",
        },
        keyDeliverable: {
          id: "Rough Cut Tight Pacing",
          en: "Rough Cut Tight Pacing",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Editing rapat tanpa jeda hening menjaga tempo video tetap bertenaga.",
          en: "Seamless edit without pauses keeps momentum energetic.",
        },
      ],
      underperformers: [
        {
          id: "Menambahkan split screen di detik ke-10 untuk demo tekstur.",
          en: "Add a split-screen at second 10 for texture demonstration.",
        },
      ],
      creativeAssessment: {
        id: "Proyek spec ad untuk format iklan UGC direct-response.",
        en: "Spec ad demonstrating direct-response UGC ad formatting.",
      },
      creativeLearnings: [
        {
          id: "Format vertikal native membutuhkan subtitle besar dengan warna kontras.",
          en: "Native vertical format demands large, high-contrast subtitles.",
        },
      ],
      nextIterationStrategy: {
        id: "Uji 3 hook pembuka berbeda dengan bagian isi yang sama.",
        en: "Test 3 distinct hooks with identical body creative.",
      },
    },
  },
  {
    id: "focusbrew-hook-sprint",
    slug: "focusbrew-hook-sprint",
    title: "FocusBrew Nootropics",
    client: "FocusBrew (Spec Ad / Hook Sprint)",
    category: {
      id: "Beverage / Hook Variations Sprint",
      en: "Beverage / Hook Variations Sprint",
    },
    year: "2026",
    tagline: {
      id: "3-Angle Hook Variations Sprint untuk menguji retensi 3 detik pertama pada minuman penambah fokus.",
      en: "3-Angle Hook Variations Sprint testing the first 3-second retention on focus beverages.",
    },
    heroSummary: {
      id: "Studi kasus iterasi sudut pandang iklan performa (Hook Sprint). Memproduksi 3 pembuka berbeda (Skripsi, Zoom fatigue, Kafein crash) dengan penawaran inti yang sama.",
      en: "A performance creative iteration study (Hook Sprint) testing 3 isolated opening hooks against a single core offer.",
    },
    featured: false,
    primaryHighlight: {
      value: "1 Video Cut",
      label: {
        id: "Variasi Angle Kreatif",
        en: "Creative Angle Variations",
      },
      subtext: {
        id: "44s Vertikal 9:16 (CapCut & Premiere Pro)",
        en: "44s 9:16 Vertical (CapCut & Premiere Pro)",
      },
    },
    secondaryHighlights: [
      {
        value: "9:16",
        label: {
          id: "Format Vertikal Media Sosial",
          en: "Native Social Vertical Format",
        },
      },
      {
        value: "Hook Sprint",
        label: {
          id: "Iterasi Sudut Pandang",
          en: "Angle Iteration System",
        },
      },
      {
        value: "CapCut & PR",
        label: {
          id: "Editing Multi-Variasi",
          en: "Multi-Variation Editing",
        },
      },
    ],
    toolsUsed: ["CapCut", "Adobe Premiere Pro"],
    creativeBrief: {
      clientObjective: {
        id: "Menemukan hook pembuka pemenang (winning angle) dengan biaya produksi minimum.",
        en: "Identify winning opening hooks with minimal production friction.",
      },
      targetAudience: {
        id: "Pekerja kreatif, developer, dan mahasiswa dengan beban tugas intensif.",
        en: "Creative pros, devs, and students under heavy workload.",
      },
      coreProblem: {
        id: "Kopi biasa sering menyebabkan jitter dan crash energi di jam 2 siang.",
        en: "Regular coffee causes jitters and an afternoon 2 PM energy crash.",
      },
      angleHookStrategy: {
        id: "Menggambarkan sensasi '2 PM energy crash' dengan efek visual dramatis.",
        en: "Depicting the '2 PM energy crash' with dramatic visual cues.",
      },
      keyDifferentiators: [
        {
          id: "Fokus stabil 6 jam tanpa rasa cemas atau jantung berdebar.",
          en: "6-hour calm focus without jitters or palpitations.",
        },
      ],
      deliverables: [
        {
          id: "1 Video Cut 9:16 (44 Detik).",
          en: "1 Video Cut 9:16 (44 Seconds).",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec Ad / Hook Variations Sprint",
        en: "Spec Ad / Hook Variations Sprint",
      },
      objective: {
        id: "Mengidentifikasi hook dengan thumbstop tertinggi untuk kampanye berbayar.",
        en: "Identify highest-thumbstop angle for paid ad campaigns.",
      },
      targetAudience: {
        id: "Pekerja meja dan pembelajar yang membutuhkan stamina mental berkelanjutan.",
        en: "Desk workers and learners requiring sustained mental stamina.",
      },
      audienceInsight: {
        id: "Audiens menyadari masalah drop energi mereka tetapi belum tahu solusi nootropik.",
        en: "Audiences know their energy crash problem but lack awareness of nootropics.",
      },
      coreAngle: {
        id: "The 2 PM Energy Crash",
        en: "The 2 PM Energy Crash",
      },
      hookStrategy: {
        id: "Jam dinding menunjukkan pukul 14:00 disusul kepala jatuh ke meja.",
        en: "Wall clock hitting 2:00 PM followed by desk slump.",
      },
      valueProposition: {
        id: "Kombinasi jamur adaptogen dan nootropik alami untuk energi konstan.",
        en: "Adaptogenic mushrooms and natural nootropics for constant energy.",
      },
      callToAction: {
        id: "Coba starter pack dengan garansi uang kembali 30 hari.",
        en: "Try the starter kit with a 30-day money-back guarantee.",
      },
      creativeRationale: {
        id: "Mengisolasi rasa sakit jam 2 siang membuat penonton langsung merasa 'ini tentang saya'.",
        en: "Isolating the 2 PM pain point generates instant viewer self-identification.",
      },
    },
    videoVariations: [
      {
        id: "focusbrew-v1",
        label: {
          id: "Cut 01: The 2 PM Energy Crash",
          en: "Cut 01: The 2 PM Energy Crash",
        },
        hookHeadline: {
          id: "Urgensi Kelelahan Kerja Jam 14:00",
          en: "Midday Work Fatigue Urgency",
        },
        angleDescription: {
          id: "Hook visual dramatis saat energi mendadak drop di tengah deadline padat.",
          en: "Dramatic visual hook opening at the exact moment energy drops during tight deadlines.",
        },
        videoSrc: "/videos/katama/katama_v3_deadline_emergency.mp4",
        aspectRatio: "9:16",
        duration: "44s",
        specs: {
          durationFrames: "1320",
          fps: "30",
          resolution: "1080×1920",
          voiceModel: "Conversational Pro Voice",
        },
        keyTakeaway: {
          id: "Hook berbasis jam spesifik terbukti meningkatkan keterhubungan emosional penonton.",
          en: "Specific-time hooks elevate emotional viewer relevance.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "script-focus-v1",
        name: {
          id: "Angle 01: Midday Energy Crash",
          en: "Angle 01: Midday Energy Crash",
        },
        hookType: {
          id: "Situational Friction",
          en: "Situational Friction",
        },
        duration: "44s",
        concept: {
          id: "Menangkap momen saat mata mulai berat di depan laptop.",
          en: "Capturing the moment eyes glaze over in front of the screen.",
        },
        lines: [
          {
            time: "0:00 - 0:03",
            visual: {
              id: "Tampilan jam 14:00 dan layar laptop penuh tab terbuka.",
              en: "Clock showing 2:00 PM and browser tabs overload.",
            },
            audio: {
              id: "'Jam 2 siang, kerjaan masih numpuk, tapi otak udah mogok kerja?'",
              en: "'2 PM, inbox full, but brain already checked out?'",
            },
            psychologyIntent: {
              id: "Membangun empati instan dengan realitas kerja penonton.",
              en: "Instantly empathizing with the viewer's work reality.",
            },
          },
        ],
      },
    ],
    storyboard: [
      {
        id: "focus-sc-1",
        scene: {
          id: "Adegan 01: Jam 14:00 Drop",
          en: "Scene 01: The 2 PM Slump",
        },
        timecode: "00:00 - 00:03",
        visualDescription: {
          id: "Tampilan jam dinding bergerak cepat ke 14:00.",
          en: "Clock timelapse ticking swiftly to 2:00 PM.",
        },
        toolUsed: "Premiere Pro Speed Ramp",
        assetType: "Motion Graphic",
      },
    ],
    assetBreakdown: [
      {
        id: "focus-asset-1",
        name: {
          id: "B-Roll Workflow & Beverage Pour",
          en: "B-Roll Workflow & Beverage Pour",
        },
        category: "Self-shot / original footage",
        myContribution: {
          id: "Speed ramping, sound design klik keyboard, dan koreksi warna.",
          en: "Speed ramping, keyboard tactile sound design, and color grading.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
      },
    ],
    productionWorkflow: [
      {
        phase: "01",
        title: {
          id: "Variasi Modular Hook Timeline",
          en: "Modular Hook Timeline Assembly",
        },
        turnaroundTime: {
          id: "6 Jam",
          en: "6 Hours",
        },
        tools: ["Premiere Pro"],
        summary: {
          id: "Menyusun timeline dengan 3 variasi 3 detik pertama yang dapat diekspor secara mandiri.",
          en: "Building timelines with 3 swappable first 3-second segments for independent export.",
        },
        keyDeliverable: {
          id: "Multi-Hook Export Batch",
          en: "Multi-Hook Export Batch",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Struktur modular mempermudah pengujian A/B cepat di ad manager.",
          en: "Modular architecture streamlines rapid A/B testing in ad managers.",
        },
      ],
      underperformers: [
        {
          id: "Membuat hook visual ketiga dengan peraga demonstrasi produk langsung.",
          en: "Produce a third visual hook featuring live product demonstration.",
        },
      ],
      creativeAssessment: {
        id: "Proyek spec ad untuk demonstrasi metodologi hook sprint.",
        en: "Spec ad demonstrating hook sprint production methodology.",
      },
      creativeLearnings: [
        {
          id: "Menukar 3 detik pertama menghasilkan biaya pengujian yang jauh lebih hemat.",
          en: "Swapping only the first 3 seconds dramatically lowers production testing costs.",
        },
      ],
      nextIterationStrategy: {
        id: "Menguji 2 CTA penutup yang berbeda (diskon vs gratis ongkir).",
        en: "Test 2 distinct closing CTAs (discount vs free shipping).",
      },
    },
  },
  {
    id: "ergodesk-review-stack",
    slug: "ergodesk-review-stack",
    title: "ErgoDesk Pro",
    client: "ErgoDesk (Spec Ad / Review Stack)",
    category: {
      id: "Furniture & Workspaces / Review-Stack Ads",
      en: "Furniture & Workspaces / Review-Stack Ads",
    },
    year: "2026",
    tagline: {
      id: "Menyusun kutipan ulasan pelanggan nyata (VOC) ke dalam narasi visual bertingkat untuk mengatasi keraguan pembeli sebelum checkout.",
      en: "Stacking authentic customer quotes (VOC) into a sequential vertical proof arc to eliminate hesitation.",
    },
    heroSummary: {
      id: "Studi kasus iklan vertikal berbasis ulasan pelanggan terverifikasi (Review-Stack). Mengubah ulasan bintang lima menjadi bukti sosial kinetik berkecepatan tinggi.",
      en: "A verified review-stack vertical ad study transforming authentic 5-star customer reviews into rapid kinetic social proof.",
    },
    featured: false,
    primaryHighlight: {
      value: "1 Video Cut",
      label: {
        id: "Format Review-Stack",
        en: "Review-Stack Cut",
      },
      subtext: {
        id: "41s Vertikal 9:16 (CapCut & Premiere Pro)",
        en: "41s 9:16 Vertical (CapCut & Premiere Pro)",
      },
    },
    secondaryHighlights: [
      {
        value: "9:16",
        label: {
          id: "Format Vertikal Media Sosial",
          en: "Native Social Vertical Format",
        },
      },
      {
        value: "Review Stack",
        label: {
          id: "Arsitektur Social Proof",
          en: "Social Proof Architecture",
        },
      },
      {
        value: "CapCut & PR",
        label: {
          id: "Animasi Teks Kinetik",
          en: "Kinetic Text Animation",
        },
      },
    ],
    toolsUsed: ["CapCut", "Adobe Premiere Pro"],
    creativeBrief: {
      clientObjective: {
        id: "Mengatasi keraguan harga tinggi pada standing desk dengan rentetan ulasan pembeli nyata.",
        en: "Eliminate price hesitation for standing desks through rapid real buyer reviews.",
      },
      targetAudience: {
        id: "Pekerja remote dengan masalah sakit punggung setelah duduk seharian.",
        en: "Remote workers suffering back pain from prolonged sitting.",
      },
      coreProblem: {
        id: "Pembeli ragu apakah meja berdiri elektrik sepadan dengan harganya.",
        en: "Buyers hesitate over whether electric standing desks justify their premium price.",
      },
      angleHookStrategy: {
        id: "Menampilkan kutipan review paling tajam: 'Pinggang gue akhirnya nggak teriak lagi'.",
        en: "Opening with the sharpest review quote: 'My lower back finally stopped screaming'.",
      },
      keyDifferentiators: [
        {
          id: "Motor ganda senyap dan garansi rangka 5 tahun.",
          en: "Dual silent motors with 5-year frame warranty.",
        },
      ],
      deliverables: [
        {
          id: "1 Video Cut 9:16 (41 Detik).",
          en: "1 Video Cut 9:16 (41 Seconds).",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec Ad / Review-Stack Ads",
        en: "Spec Ad / Review-Stack Ads",
      },
      objective: {
        id: "Membangun kepercayaan transaksi instan menggunakan bukti ulasan nyata.",
        en: "Build instant transactional trust using authentic review proof.",
      },
      targetAudience: {
        id: "Profesional WFH yang memprioritaskan ergonomi ruang kerja.",
        en: "WFH professionals prioritizing ergonomic workspace health.",
      },
      audienceInsight: {
        id: "Klaim brand sendiri diabaikan, namun kata-kata pembeli lain yang spesifik sangat dipercaya.",
        en: "Brand self-claims get ignored; specific peer review wording converts.",
      },
      coreAngle: {
        id: "5-Star Review Breakdown",
        en: "5-Star Review Breakdown",
      },
      hookStrategy: {
        id: "Pop-up grafis bintang 5 dan screenshot ulasan di detik pertama.",
        en: "5-star graphic pop-up with review snippet in second one.",
      },
      valueProposition: {
        id: "Meja ergonomis stabil dengan penyesuaian tinggi sentuhan satu tombol.",
        en: "Rock-solid ergonomic desk with one-touch height presets.",
      },
      callToAction: {
        id: "Upgrade meja kerja hari ini dengan cicilan 0% dan free delivery.",
        en: "Upgrade your desk today with 0% installment and free delivery.",
      },
      creativeRationale: {
        id: "Mendobrak keraguan harga dengan membuktikan kepuasan ratusan pelanggan terdahulu.",
        en: "Countering price friction by showcasing hundreds of satisfied customer outcomes.",
      },
    },
    videoVariations: [
      {
        id: "ergodesk-v1",
        label: {
          id: "Cut 01: 5-Star Review Breakdown",
          en: "Cut 01: 5-Star Review Breakdown",
        },
        hookHeadline: {
          id: "Social Proof Stack",
          en: "Social Proof Stack",
        },
        angleDescription: {
          id: "Membuka video dengan kutipan ulasan paling tajam untuk membangun kredibilitas instan.",
          en: "Opening with the sharpest verified review quote to establish instant credibility.",
        },
        videoSrc: "/videos/nespresso/nespresso-vertuo-v2.mp4",
        aspectRatio: "9:16",
        duration: "41s",
        specs: {
          durationFrames: "1230",
          fps: "30",
          resolution: "1080×1920",
          voiceModel: "Conversational Review Voice",
        },
        keyTakeaway: {
          id: "Kutipan spesifik mengatasi keberatan harga jauh lebih baik dari klaim abstrak.",
          en: "Specific quotes overcome price objections better than generic slogans.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "script-ergo-v1",
        name: {
          id: "Angle 01: Back Pain Relief Review",
          en: "Angle 01: Back Pain Relief Review",
        },
        hookType: {
          id: "Social Proof Hook",
          en: "Social Proof Hook",
        },
        duration: "41s",
        concept: {
          id: "Membaca ulasan pembeli yang paling emosional tentang hilangnya sakit pinggang.",
          en: "Reading the most emotional customer quote about back pain relief.",
        },
        lines: [
          {
            time: "0:00 - 0:03",
            visual: {
              id: "Grafis kartu ulasan bintang 5 muncul dengan efek suara ding.",
              en: "5-star rating badge pops up with clean chime sound.",
            },
            audio: {
              id: "'Awalnya ragu beli meja semahal ini... tapi ulasan ini yang bikin gue yakin.'",
              en: "'I hesitated spending this much on a desk... until this review.'",
            },
            psychologyIntent: {
              id: "Membuka rasa ingin tahu seputar keputusan pembelian.",
              en: "Piquing curiosity around a high-ticket purchase decision.",
            },
          },
        ],
      },
    ],
    storyboard: [
      {
        id: "ergo-sc-1",
        scene: {
          id: "Adegan 01: Pop-up Rating Bintang 5",
          en: "Scene 01: 5-Star Rating Pop",
        },
        timecode: "00:00 - 00:03",
        visualDescription: {
          id: "Animasi kinetik 5 bintang emas bersinar.",
          en: "Kinetic animation of 5 gold glowing stars.",
        },
        toolUsed: "CapCut Motion Graphics",
        assetType: "Motion Graphic",
      },
    ],
    assetBreakdown: [
      {
        id: "ergo-asset-1",
        name: {
          id: "Desk Footage & Kinetic Review Badges",
          en: "Desk Footage & Kinetic Review Badges",
        },
        category: "Product images or external assets",
        myContribution: {
          id: "Motion graphics kartu ulasan, audio leveling, pacing cuts.",
          en: "Review card motion graphics, audio mastering, pacing cuts.",
        },
        licenseStatus: "Public Content (Spec Ad Use)",
      },
    ],
    productionWorkflow: [
      {
        phase: "01",
        title: {
          id: "Ekstraksi Review & Desain Typografi",
          en: "Review Extraction & Kinetic Typography",
        },
        turnaroundTime: {
          id: "5 Jam",
          en: "5 Hours",
        },
        tools: ["Premiere Pro", "CapCut"],
        summary: {
          id: "Memilih kalimat ulasan paling kuat dan membuat animasi teks dinamis.",
          en: "Selecting potent customer soundbites and creating dynamic typography.",
        },
        keyDeliverable: {
          id: "Review Card Animation Assets",
          en: "Review Card Animation Assets",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Format social proof langsung menurunkan skeptisisme penonton.",
          en: "Direct social proof formatting immediately reduces skepticism.",
        },
      ],
      underperformers: [
        {
          id: "Menambahkan split-screen b-roll penyesuaian tinggi meja di detik ke-5.",
          en: "Include a split-screen height adjustment b-roll at second 5.",
        },
      ],
      creativeAssessment: {
        id: "Proyek spec ad untuk demonstrasi format review-stacking.",
        en: "Spec ad demonstrating review-stacking framework.",
      },
      creativeLearnings: [
        {
          id: "Kutipan ulasan yang jujur memiliki daya dorong konversi yang sangat tinggi.",
          en: "Candid customer quotes provide exceptionally high conversion momentum.",
        },
      ],
      nextIterationStrategy: {
        id: "Menguji variasi pembuka dengan format unboxing cepat.",
        en: "Test opening variations featuring a rapid unboxing format.",
      },
    },
  },
  {
    id: "oximus-hydra-zdp1118",
    slug: "oximus-hydra-zdp1118",
    title: "Oximus Hydra ZDP1118",
    client: "Oximus Indonesia (Spec Ad / Creative Sprint)",
    category: {
      id: "Tech & Workstation Ergonomics / AI Ads",
      en: "Tech & Workstation Ergonomics / AI Ads",
    },
    year: "2026",
    tagline: {
      id: "Rangkaian 2 video iklan direct response vertikal 30 detik (9:16) berbasis AI Creative Pipeline untuk segmen pekerja WFH, programmer, & workstation enthusiast.",
      en: "A 2-part direct response vertical video ad system (30s, 9:16) engineered with an AI Creative Pipeline for remote professionals, developers, and workstation enthusiasts.",
    },
    heroSummary: {
      id: "Studi kasus creative advertising multi-variasi untuk Oximus Hydra ZDP1118 Gas Spring Monitor Arm. Menguji 2 sudut pandang narasi: (1) Spatial Relief & Cluttered Desk Friction ('Meja Lu Sempit Bukan Karena Kurang Lebar'), dan (2) Say Goodbye to Tech-Neck ('Lehermu Kaku Tiap Sore Karena Monitormu Kurang Tinggi') yang diselesaikan mekanisme counterbalance gas spring satu jari dan 5 sudut kamera sinematik dinamis.",
      en: "A comprehensive multi-variation creative advertising case study for Oximus Hydra ZDP1118 Gas Spring Monitor Arm. Testing 2 distinct narrative angles: (1) Spatial Relief & Cluttered Desk Friction ('Your desk isn't too small, the stand eats your space'), and (2) Say Goodbye to Tech-Neck ('Your neck is stiff every afternoon because your monitor sits too low') solved by one-finger gas spring counterbalance across 5 dynamic cinematic POVs.",
    },
    featured: true,
    primaryHighlight: {
      value: "2 Video Cuts",
      label: {
        id: "Variasi Angle Kreatif",
        en: "Creative Angle Variations",
      },
      subtext: {
        id: "30s Vertikal 9:16 (Meja Sempit vs. Goodbye Tech-Neck)",
        en: "30s 9:16 Vertical (Cluttered Desk vs. Goodbye Tech-Neck)",
      },
    },
    secondaryHighlights: [
      {
        value: "2–9 kg",
        label: {
          id: "Kapasitas Beban Gas Spring (19\"–34\")",
          en: "Gas Spring Load Capacity (19\"–34\")",
        },
      },
      {
        value: "+40%",
        label: {
          id: "Area Meja Bebas (Spatial Relief)",
          en: "Reclaimed Usable Desk Surface",
        },
      },
      {
        value: "7 SFX Cues",
        label: {
          id: "Desain Audio Taktil ASMR & Lo-Fi 95 BPM",
          en: "Tactile ASMR Foley & 95 BPM Chillhop",
        },
      },
    ],
    toolsUsed: [
      "Google Flow (Scene & Video Gen)",
      "Midjourney v6.1 (Visual Keyframes)",
      "Kling AI (Motion Diffusion)",
      "ElevenLabs (Neural Voiceover)",
      "CapCut Desktop (12-Track NLE & Captions)",
      "Adobe Premiere Pro & After Effects",
    ],
    creativeBrief: {
      clientObjective: {
        id: "Merancang video iklan direct response format vertikal (9:16, 30 detik) yang menonjolkan Oximus Hydra ZDP1118 sebagai solusi utama untuk mengatasi meja kerja sempit, kabel berantakan, dan postur leher kaku bagi pengguna setup workstation di Indonesia.",
        en: "Produce a 30-second vertical direct response video ad (9:16) establishing the Oximus Hydra ZDP1118 monitor arm as the definitive solution for cluttered desks, tangled cords, and ergonomic neck fatigue among Indonesian remote professionals.",
      },
      targetAudience: {
        id: "Pekerja remote/WFH, software engineer, desainer visual, dan desk setup enthusiast berusia 22–38 tahun yang menghabiskan 8+ jam di depan meja kerja dan terganggu oleh stand bawaan layar yang memakan area meja.",
        en: "Remote professionals, developers, designers, and desk setup enthusiasts aged 22–38 spending 8+ hours at their workstations, frustrated by bulky monitor stands stealing desktop space.",
      },
      coreProblem: {
        id: "Kaki stand monitor bawaan pabrik (OEM) memakan hingga 40% area fungsional meja, membatasi posisi keyboard/mousepad, menciptakan kabel ruwet yang merusak fokus, dan memaksa posisi leher kaku karena minimnya fleksibilitas sudut pandang.",
        en: "Bulky OEM monitor stands consume up to 40% of usable desk surface, crowd keyboard and mousepad space, create distracting cable clutter, and trap users in rigid, non-ergonomic viewing angles.",
      },
      angleHookStrategy: {
        id: "Membuka video dengan Hook Friksi Spasial: 'Meja Lu Sempit Bukan Karena Kurang Lebar...' untuk mematahkan asumsi penonton bahwa mereka perlu meja baru, lalu memperkenalkan mekanisme gas spring dan pelepasan ruang meja secara kontras dan memuaskan (spatial relief).",
        en: "Opening with a Spatial Friction Hook: 'Your desk feels cramped not because it's too small...' to challenge assumptions about needing a bigger desk, immediately demonstrating one-finger gas spring levitation and dramatic 40% spatial reclamation.",
      },
      keyDifferentiators: [
        {
          id: "Mekanisme gas spring counterbalance presisi untuk beban monitor 2–9 kg (layar 19\" hingga 34\")",
          en: "Precision gas spring counterbalance mechanism supporting 2–9 kg displays (19\" to 34\")",
        },
        {
          id: "Pelepasan area meja instan hingga 40% dengan pemasangan clamp kokoh tanpa merusak meja (10–65 mm)",
          en: "Instant 40% desk space relief with a solid non-damaging clamp/grommet mount (10–65 mm)",
        },
        {
          id: "Integrated cable management tersembunyi di dalam lengan arm untuk estetika meja clean setup",
          en: "Internal integrated cable management channels for a clean, wire-free desk aesthetic",
        },
        {
          id: "Artikulasi gerak 360° penuh: tilt ±90°, swivel 180°, rotasi layar landscape ke portrait dengan sentuhan satu jari",
          en: "Full 360° motion: tilt ±90°, swivel 180°, and portrait/landscape rotation with a single finger touch",
        },
      ],
      deliverables: [
        {
          id: "Variasi 1: Video Vertikal 'Meja Sempit Bukan Kurang Lebar' (30 Detik, 1080×1920 9:16 @ 30fps)",
          en: "Variation 1: Vertical Video 'Cluttered Desk Friction' (30s, 1080×1920 9:16 @ 30fps)",
        },
        {
          id: "Variasi 2: Video Vertikal 'Say Goodbye to Tech-Neck' (30 Detik, 1080×1920 9:16 @ 30fps)",
          en: "Variation 2: Vertical Video 'Say Goodbye to Tech-Neck' (30s, 1080×1920 9:16 @ 30fps)",
        },
        {
          id: "5 Dynamic Cinematic POVs (OTS Leher Pegal, Frontal Eye-Level, Tabletop Low-Angle, POV Layar, Studio Sweep)",
          en: "5 Dynamic Cinematic POVs (OTS Neck Strain, Frontal Eye-Level, Tabletop Low-Angle, Driver's POV, Studio Sweep)",
        },
        {
          id: "Paket Desain Suara Taktil (7 Cues Foley ASMR + BGM Chillhop 95 BPM mastered to -14 LUFS)",
          en: "Tactile Audio Package (7 ASMR Foley Cues + 95 BPM Chillhop mastered to -14 LUFS)",
        },
        {
          id: "Blueprint Handoff Produksi & Safe-Zone Compliance Guide untuk TikTok Ads & Meta Reels",
          en: "Production Handoff Blueprint & Safe-Zone Compliance Guide for TikTok Ads & Meta Reels",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec ad independen / AI Direct Response Video Ad",
        en: "Independent Spec Ad / AI Direct Response Video Ad",
      },
      objective: {
        id: "Memicu konversi pembelian langsung (klik keranjang kuning / link checkout) dengan menonjolkan transformasi visual instan dari meja berantakan menjadi setup melayang yang lega.",
        en: "Drive direct-response purchases (cart/bio link clicks) by showcasing the instant visual transformation from a crowded desk to a floating, spacious setup.",
      },
      targetAudience: {
        id: "Pengguna workstation di Indonesia (usia 22–38) yang membutuhkan ruang kerja lebih luas dan ergonomis tanpa harus membeli meja baru.",
        en: "Workstation users in Indonesia (aged 22–38) seeking ergonomic comfort and expanded workspace without buying an expensive new desk.",
      },
      audienceInsight: {
        id: "Banyak orang mengira mereka butuh meja lebih besar saat meja kerja terasa sempit, padahal masalah sebenarnya adalah stand monitor bawaan yang statis dan 'memakan' area kerja paling berharga.",
        en: "Many professionals believe they need a bigger desk when cramped, unaware that their bulky OEM monitor stand is stealing the most valuable desk real estate.",
      },
      coreAngle: {
        id: "Spatial Relief & Effortless Fluid Adjustment — 'Meja Lu Sempit Bukan Karena Kurang Lebar, Kaki Stand Bawaan Itu yang Makan Ruang'",
        en: "Spatial Relief & Effortless Fluid Adjustment — 'Your desk isn't too small, the factory monitor stand is eating your space'",
      },
      hookStrategy: {
        id: "Visual Hook 0–3 detik yang memperlihatkan meja penuh sesak dan frustrasi menaruh barang, dipadukan headline tebal 2 baris All-Caps dan audio room tone teredam untuk memicu thumb-stop instan.",
        en: "Visual hook in seconds 0–3 showing a cramped desk and crowded peripherals, paired with bold 2-line All-Caps captions and muffled room tone to trigger instant thumb-stops.",
      },
      valueProposition: {
        id: "Oximus Hydra ZDP1118 membebaskan 40% area meja seketika, memungkinkan monitor digerakkan ringan hanya dengan satu jari, dan menyembunyikan semua kabel.",
        en: "Oximus Hydra ZDP1118 instantly frees 40% of desk space, lets you glide heavy monitors with one finger, and hides all cable clutter.",
      },
      callToAction: {
        id: "“Upgrade setup meja kerja lu sekarang. Klik keranjang kuning atau link di bio sebelum kehabisan.”",
        en: "“Upgrade your desk setup now. Click the link in bio or cart before stock runs out.”",
      },
      creativeRationale: {
        id: "Format direct response pendek (30 detik) memaksimalkan completion rate pada feed TikTok & Reels, sementara pacing cepat dengan pergantian shot setiap 2–3 detik dan efek audio ASMR taktil (clamp click, gas spring hiss) menjaga dopamin visual penonton.",
        en: "A 30-second duration optimizes completion rates across TikTok and Reels feeds, while 2–3 second shot pacing and tactile ASMR audio cues (clamp click, gas spring hiss) sustain visual momentum.",
      },
    },
    assetBreakdown: [
      {
        id: "oximus-shot-01",
        name: {
          id: "Visual Meja Penuh Sesak & Stand OEM Boros Ruang",
          en: "Cluttered Desk & Bulky OEM Monitor Stand",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Midjourney v6.1 + Kling AI Diffusion",
        myContribution: {
          id: "Penyusunan prompt visual sinematik meja sempit, rendering difusi gerak, color grading kontras hangat, dan sound design ruang pengap.",
          en: "Cinematic prompt engineering for cramped desk, motion diffusion generation, warm claustrophobic color grade, and muffled room tone audio design.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Aset pembuka hook 0–3 detik (CLIP-001A & CLIP-001B).",
          en: "Opening 0–3s hook asset (CLIP-001A & CLIP-001B).",
        },
      },
      {
        id: "oximus-shot-02",
        name: {
          id: "Demonstrasi Pemasangan Clamp Kokoh di Pinggir Meja",
          en: "Solid Desk Clamp Lock-in Demonstration",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Midjourney v6.1 + Kling AI Diffusion",
        myContribution: {
          id: "Generasi visual makro mekanisme pengencangan clamp, sinkronisasi foley taktil metalik 'clack-click', dan overlay teks penjelas.",
          en: "Macro visual generation of clamp tightening mechanism, tactile metallic 'clack-click' foley synchronization, and explanatory text overlay.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Visual bukti instalasi kokoh 10–65 mm (CLIP-002).",
          en: "Visual proof of solid 10–65 mm installation (CLIP-002).",
        },
      },
      {
        id: "oximus-shot-03",
        name: {
          id: "Sentuhan Satu Jari Dorongan Gas Spring Melayang",
          en: "One-Finger Smooth Gas Spring Glide & Push",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Midjourney v6.1 + Kling AI Diffusion",
        myContribution: {
          id: "Animasi difusi gerak pergeseran monitor melayang tanpa usaha, foley desis pneumatik gas spring halus, dan efek speed-ramp dramatis.",
          en: "Motion diffusion animation of effortless floating monitor adjustment, subtle pneumatic gas spring hiss foley, and dramatic speed-ramping.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Inti USP mekanis Oximus Hydra ZDP1118 (CLIP-003).",
          en: "Core mechanical USP of Oximus Hydra ZDP1118 (CLIP-003).",
        },
      },
      {
        id: "oximus-shot-04",
        name: {
          id: "Manajemen Kabel Terintegrasi & Penyesuaian Ergonomis",
          en: "Integrated Cable Routing & Ergonomic Adjustment",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Midjourney v6.1 + Kling AI Diffusion",
        myContribution: {
          id: "Visualisasi kabel rapi terselip di balik lengan arm, foley snap pengunci plastik, dan transisi sudut pandang mata rileks.",
          en: "Visualization of clean concealed cables in arm channels, snap foley cues, and eye-level posture relaxation transition.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Demonstrasi fitur fungsional manajemen kabel (CLIP-004).",
          en: "Functional cable routing demonstration (CLIP-004).",
        },
      },
      {
        id: "oximus-shot-05",
        name: {
          id: "Setup Meja Melayang Luas & Clean Desk Hero End-Card",
          en: "Expansive Clean Floating Desk Setup & Urgent CTA",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Midjourney v6.1 + Kling AI + Premiere Pro",
        myContribution: {
          id: "Komposisi sudut wide setup meja melayang luas bebas hambatan, tipografi kinetik penawaran akhir, dan transisi lock CTA.",
          en: "Wide-angle hero framing of clean floating desk surface, kinetic typography offer, and CTA lock transition.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Adegan penutup resolusi spasial dan CTA belanja (CLIP-005).",
          en: "Closing spatial relief resolution scene and purchase CTA (CLIP-005).",
        },
      },
      {
        id: "oximus-shot-06",
        name: {
          id: "Desain Audio Taktil ASMR & Narasi Neural AI Bahasa Indonesia",
          en: "Tactile ASMR Sound Design & Indonesian Neural Voiceover",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "ElevenLabs + Foley Suite + Premiere Pro Audio EQ",
        myContribution: {
          id: "Kalibrasi naskah VO tempo 130 WPM, balancing 7 efek suara foley taktil, mastering BGM Lo-Fi 95 BPM ducking ke -18 dB, dan output -14 LUFS.",
          en: "Voiceover tempo calibration (~130 WPM), balancing 7 tactile foley sound cues, 95 BPM Lo-Fi music ducking to -18 dB, and -14 LUFS broadcast mastering.",
        },
        licenseStatus: "Verified Commercial",
        notes: {
          id: "Master audio terintegrasi penuh untuk performa sound-on.",
          en: "Fully integrated master audio track engineered for sound-on impact.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "angle-con-001",
        name: {
          id: "Angle CON-001: The Cluttered Desk Friction (Spatial Relief)",
          en: "Angle CON-001: The Cluttered Desk Friction (Spatial Relief)",
        },
        hookType: {
          id: "Pola Interupsi / Friksi Spasial Meja Sempit",
          en: "Pattern-Interrupt / Desk Space Friction",
        },
        duration: "30s",
        concept: {
          id: "Membongkar friksi meja kerja sempit akibat stand monitor bawaan yang boros ruang, mendemonstrasikan kebebasan gerak gas spring satu jari, dan menampilkan hasil transformasi clean desk setup.",
          en: "Exposing bulky OEM monitor stand clutter, demonstrating one-finger gas spring counterbalance, and showcasing a pristine floating desk transformation.",
        },
        lines: [
          {
            time: "00:00 - 00:04",
            visual: {
              id: "Meja kerja penuh sesak, keyboard terdesak kaki stand bawaan monitor yang besar, secangkir kopi hampir tumpah.",
              en: "Cluttered desk surface, keyboard squeezed by bulky factory monitor feet, coffee cup almost knocked over.",
            },
            audio: {
              id: "“Meja kerja lu kerasa sempit dan bikin sesak? Bukan karena mejanya kekecilan.”",
              en: "“Does your desk feel cramped and overwhelming? It's not because your desk is too small.”",
            },
            psychologyIntent: {
              id: "Mematahkan asumsi penonton (pola interupsi) dan mengidentifikasi rasa frustrasi ruang kerja di 3 detik pertama.",
              en: "Disrupting viewer assumptions (pattern-interrupt) and validating workspace frustration in the crucial first 3 seconds.",
            },
          },
          {
            time: "00:04 - 00:09",
            visual: {
              id: "Kamera menyorot dekat kaki stand monitor bawaan yang boros tempat, lalu bertransisi ke pemasangan clamp Oximus Hydra di bibir meja.",
              en: "Camera zooms in on bulky OEM monitor feet consuming desk space, cutting to solid Oximus Hydra clamp locking onto the desk edge.",
            },
            audio: {
              id: "“Kaki monitor bawaan itu yang makan hampir setengah ruang kerja lu.”",
              en: "“That factory monitor stand is eating up almost half of your usable workspace.”",
            },
            psychologyIntent: {
              id: "Menyalahkan 'kambing hitam' yang tepat (stand bawaan) agar penonton menyadari akar masalah sesungguhnya.",
              en: "Isolating the real culprit (bulky factory stand) so viewers clearly recognize the root problem.",
            },
          },
          {
            time: "00:09 - 00:16",
            visual: {
              id: "Monitor terpasang kokoh pada arm putih Oximus Hydra ZDP1118, didorong halus hanya dengan satu jari naik-turun dan maju-mundur secara melayang.",
              en: "Monitor mounted on sleek white Oximus Hydra ZDP1118 arm, effortlessly pushed up, down, forward and backward with a single finger.",
            },
            audio: {
              id: "“Ganti pakai Oximus Hydra ZDP1118. Gas spring mechanism-nya bikin monitor lu serasa melayang dan bisa digeser cuma pakai satu jari.”",
              en: "“Upgrade to Oximus Hydra ZDP1118. Its gas spring mechanism makes your monitor feel weightless, moving smoothly with a single finger touch.”",
            },
            psychologyIntent: {
              id: "Menampilkan USP inti produk (gas spring counterbalance) dengan sensasi visual yang memuaskan dan effortless.",
              en: "Demonstrating the core mechanical USP (gas spring counterbalance) with a highly satisfying, effortless visual glide.",
            },
          },
          {
            time: "00:16 - 00:23",
            visual: {
              id: "Kabel daya dan HDMI dirapikan ke dalam jalur kabel internal arm, lalu monitor diposisikan sejajar mata dengan postur duduk tegak.",
              en: "Power and HDMI cables tucked neatly inside internal arm channels, monitor adjusted to eye level for relaxed ergonomic posture.",
            },
            audio: {
              id: "“Ada integrated cable management biar meja bebas kabel kusut, plus pengaturan posisi bebas bikin leher gak gampang pegal.”",
              en: "“Integrated cable management keeps cords invisible, while full ergonomic adjustment eliminates neck and shoulder strain.”",
            },
            psychologyIntent: {
              id: "Menjawab kebutuhan estetika (kabel rapi) sekaligus kesehatan jangka panjang (kenyamanan leher & postur tubuh).",
              en: "Addressing both aesthetic desires (clean cable-free desk) and health priorities (ergonomic posture relief).",
            },
          },
          {
            time: "00:23 - 00:30",
            visual: {
              id: "Pemandangan wide setup meja melayang yang super lapang dan minimalis, logo Oximus tampil percaya diri dengan teks ajakan checkout.",
              en: "Expansive wide shot of a spacious, minimalist floating desk setup, Oximus badge locked in with clear checkout prompt.",
            },
            audio: {
              id: "“Upgrade setup meja kerja lu sekarang. Klik keranjang kuning atau link di bio sebelum kehabisan.”",
              en: "“Upgrade your desk setup today. Tap the yellow cart or link in bio before stocks run out.”",
            },
            psychologyIntent: {
              id: "Memberikan kepuasan visual spatial relief maksimal dan mengarahkan dorongan belanja dengan call-to-action yang tegas.",
              en: "Delivering maximum spatial relief satisfaction and driving direct purchase momentum with an explicit direct-response CTA.",
            },
          },
        ],
      },
      {
        id: "angle-con-003",
        name: {
          id: "Angle CON-003: Say Goodbye to Tech-Neck (Ergonomic Relief)",
          en: "Angle CON-003: Say Goodbye to Tech-Neck (Ergonomic Relief)",
        },
        hookType: {
          id: "Pola Interupsi / Friksi Fisik Leher Pegal Jam 3 Sore",
          en: "Pattern-Interrupt / 3 PM Stiff Neck Physical Friction",
        },
        duration: "30s",
        concept: {
          id: "Mengangkat friksi fisik leher kaku akibat monitor terlalu pendek yang diganjal tumpukan buku, membuktikan mekanisme gas spring naik sejajar mata di detik ke-3 (Trust Anchor), serta mendemonstrasikan tilt anti-silau dan manajemen kabel tersembunyi.",
          en: "Targeting acute physical neck strain from book-propped low screens, proving one-finger eye-level gas spring rise at second 3 (Trust Anchor), and demonstrating anti-glare tilt and hidden cable routing.",
        },
        lines: [
          {
            time: "00:00 - 00:03",
            visual: {
              id: "Talent duduk membungkuk di meja kerja memijat leher belakang yang kaku dari sudut Over-The-Shoulder (OTS), menatap tumpukan buku tebal di bawah monitor pendek.",
              en: "Talent slouching at desk massaging stiff neck from an Over-The-Shoulder (OTS) angle, looking down at thick books propping up a low monitor.",
            },
            audio: {
              id: "“Lehermu kaku tiap sore karena monitormu kurang tinggi.”",
              en: "“Your neck is stiff every afternoon because your monitor sits too low.”",
            },
            psychologyIntent: {
              id: "Membangkitkan empati kinestetik instan di 2 detik awal melalui rasa sakit fisik harian yang dialami jutaan pekerja meja.",
              en: "Triggering instant kinesthetic empathy in the first 2 seconds through relatable physical pain felt by millions of desk workers.",
            },
          },
          {
            time: "00:03 - 00:08",
            visual: {
              id: "Kamera frontal horizon eye-level: tangan mendorong bingkai monitor naik vertikal, berhenti kaku tepat sejajar mata, postur tubuh seketika tegak lurus sempurna.",
              en: "Frontal horizon eye-level camera: hands push monitor frame vertically, locking precisely at eye line, instantly correcting spine posture.",
            },
            audio: {
              id: "“Ganjal buku tebal cuma bikin meja berantakan. Pakai arm Oximus putih ini, monitor langsung naik pas sejajar mata.”",
              en: "“Stacking books looks messy and still strains your neck. This white Oximus arm glides your screen right to true eye level.”",
            },
            psychologyIntent: {
              id: "Lock-in Zone & Trust Anchor: membongkar kekeliruan ganjal buku dan memberikan bukti visual kelegaan postur seketika.",
              en: "Lock-in Zone & Trust Anchor: discrediting the book-stack workaround and providing immediate visual proof of postural relief.",
            },
          },
          {
            time: "00:08 - 00:15",
            visual: {
              id: "Sudut ultra low-angle dari permukaan meja: talent bersandar santai di kursi ergonomis, jari telunjuk menarik monitor turun-maju mengikuti posisi mata baru tanpa usaha.",
              en: "Ultra low-angle tabletop view: talent reclines comfortably in ergonomic chair, one index finger effortlessly guiding screen forward and down.",
            },
            audio: {
              id: "“Piston gas spring-nya nahan beban sampai 9 kilo. Mau duduk tegak atau selonjoran, tinggal geser pakai satu jari.”",
              en: "“The internal gas spring holds up to 9 kilos. Sit upright or recline back, it adjusts smoothly with just one finger.”",
            },
            psychologyIntent: {
              id: "Menjelaskan mekanisme unik (piston gas spring 2–9 kg) dan fleksibilitas gerak di segala posisi duduk.",
              en: "Explaining the unique mechanism (gas spring counterbalance 2–9 kg) and fluid adjustability across any seating posture.",
            },
          },
          {
            time: "00:15 - 00:22",
            visual: {
              id: "First-person POV: kedua tangan memiringkan layar (tilt) 15°, pantulan silau lampu seketika lenyap dari layar kode, kamera memperlihatkan jalur kabel tertata rapi.",
              en: "First-person POV: hands tilt display 15°, room glare vanishes from screen code instantly, camera pans down to clean concealed cable channel.",
            },
            audio: {
              id: "“Bisa tilt bebas silau lampu, dan semua kabel power sama HDMI tersimpan rapi di dalam arm.”",
              en: "“Tilt the screen to kill room glare, while all your power and display cables hide neatly inside.”",
            },
            psychologyIntent: {
              id: "Sensory proof & craftsmanship: menghilangkan masalah pantulan silau dan kekacauan kabel yang merusak fokus.",
              en: "Sensory proof & craftsmanship: eliminating distracting glare reflections and unsightly wire clutter.",
            },
          },
          {
            time: "00:22 - 00:30",
            visual: {
              id: "High-angle studio sweep: ruang kerja estetik luas, talent mengetik tegak dan memberi jempol ramah ke kamera didampingi badge garansi resmi Oximus.",
              en: "High-angle studio sweep: spacious clean workstation, talent typing upright and flashing a friendly thumbs-up alongside official Oximus warranty badge.",
            },
            audio: {
              id: "“Lindungi leher dan postur kerjamu sekarang. Dapatkan Oximus Hydra ZDP1118 di official store.”",
              en: "“Save your neck and posture today. Check out the Oximus Hydra ZDP1118 at the official store.”",
            },
            psychologyIntent: {
              id: "Aspirational resolution dan call to action tegas dengan jaminan garansi resmi untuk menghilangkan keraguan checkout.",
              en: "Aspirational resolution and decisive call to action backed by official warranty to eliminate checkout friction.",
            },
          },
        ],
      },
    ],
    storyboard: [
      {
        id: "oximus-sb-1",
        scene: {
          id: "Adegan 1A: The Cluttered Desk Hook",
          en: "Scene 1A: The Cluttered Desk Hook",
        },
        timecode: "00:00 - 00:02",
        visualDescription: {
          id: "Meja kerja sempit penuh barang, keyboard terjepit, dan rasa sesak yang langsung menarik perhatian pengguna workstation.",
          en: "Cramped desk packed with peripherals, squeezed keyboard, and immediate visual tension capturing workstation users.",
        },
        technicalNote: {
          id: "CLIP-001A: Rasio 9:16 vertikal, headline All-Caps tebal 2 baris 'MEJA SEMPIT? / BUKAN KURANG LEBAR', audio room tone teredam.",
          en: "CLIP-001A: 9:16 vertical ratio, bold 2-line All-Caps headline 'MEJA SEMPIT? / BUKAN KURANG LEBAR', muffled room tone audio.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-sb-2",
        scene: {
          id: "Adegan 1B: Stand OEM Agitation",
          en: "Scene 1B: Stand OEM Agitation",
        },
        timecode: "00:02 - 00:04",
        visualDescription: {
          id: "Close-up sudut tajam kaki stand monitor bawaan pabrik yang memakan hampir setengah luas permukaan meja fungsional.",
          en: "Close-up on wide OEM monitor stand legs eating almost half of functional desktop surface.",
        },
        technicalNote: {
          id: "CLIP-001B: Zoom lambat mempertegas friksi ruang, transisi cepat ke solusi produk di detik ke-4.",
          en: "CLIP-001B: Slow push-in emphasizing spatial waste, rapid cut to product solution at second 4.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-sb-3",
        scene: {
          id: "Adegan 2: Clamp Lock-in Installation",
          en: "Scene 2: Clamp Lock-in Installation",
        },
        timecode: "00:04 - 00:09",
        visualDescription: {
          id: "Mekanisme clamp Oximus dikencangkan di pinggir meja dengan kokoh dan presisi tanpa merusak permukaan meja kayu.",
          en: "Oximus heavy-duty clamp tightened securely onto the desk edge with precision stability and zero surface damage.",
        },
        technicalNote: {
          id: "CLIP-002: SFX foley taktil 'clack-click' penguncian logam clamp, teks penjelas 'SOLID CLAMP 10-65MM'.",
          en: "CLIP-002: Tactile metallic 'clack-click' clamp lock foley, explanatory on-screen badge 'SOLID CLAMP 10-65MM'.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-sb-4",
        scene: {
          id: "Adegan 3: One-Finger Gas Spring Glide",
          en: "Scene 3: One-Finger Gas Spring Glide",
        },
        timecode: "00:09 - 00:16",
        visualDescription: {
          id: "Layar monitor melayang digeser dan didorong turun-naik sangat ringan hanya memakai satu jari tangan.",
          en: "Floating display smoothly repositioned up, down, and forward with the gentle touch of a single finger.",
        },
        technicalNote: {
          id: "CLIP-003: Core USP shot, SFX desis pneumatik gas spring halus berpadu melodi chillhop 95 BPM.",
          en: "CLIP-003: Core USP demonstration, subtle pneumatic gas spring hiss blended with 95 BPM chillhop melody.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-sb-5",
        scene: {
          id: "Adegan 4: Cable Routing & Ergonomic Comfort",
          en: "Scene 4: Cable Routing & Ergonomic Comfort",
        },
        timecode: "00:16 - 00:23",
        visualDescription: {
          id: "Kabel monitor diselipkan rapi ke dalam klip manajemen kabel tersembunyi, posisi monitor sejajar mata demi kenyamanan leher.",
          en: "Monitor cables clipped into concealed internal arm channels, display set at ergonomic eye-level posture.",
        },
        technicalNote: {
          id: "CLIP-004: SFX plastik snap foley yang renyah, transisi santai menghadirkan rasa lega dan kepuasan visual.",
          en: "CLIP-004: Crisp snap plastic clip foley, relaxed transition delivering calm and visual satisfaction.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-sb-6",
        scene: {
          id: "Adegan 5: Clean Floating Desk & Urgent CTA",
          en: "Scene 5: Clean Floating Desk & Urgent CTA",
        },
        timecode: "00:23 - 00:30",
        visualDescription: {
          id: "Tampilan wide setup meja kerja minimalis putih yang sangat luas dan bersih, monitor melayang bebas di atas meja.",
          en: "Wide shot of a clean, minimalist white floating setup with vast open desk space and zero cable clutter.",
        },
        technicalNote: {
          id: "CLIP-005: Hold statis dengan branding Oximus Hydra ZDP1118, audio riser lembut mengunci ajakan checkout keranjang kuning.",
          en: "CLIP-005: Clean hold with Oximus Hydra ZDP1118 branding, subtle audio riser locking the cart checkout CTA.",
        },
        toolUsed: "Adobe Premiere Pro + After Effects",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-v2-sb-1",
        scene: {
          id: "Cut 02 · Adegan 1: Over-The-Shoulder Neck Fatigue Hook",
          en: "Cut 02 · Scene 1: Over-The-Shoulder Neck Fatigue Hook",
        },
        timecode: "00:00 - 00:03",
        visualDescription: {
          id: "Kamera Over-The-Shoulder (OTS) di belakang bahu talent: memijat leher tegang menatap monitor pendek yang diganjal tumpukan buku.",
          en: "Over-The-Shoulder (OTS) camera behind talent: massaging stiff neck looking down at low book-stacked monitor.",
        },
        technicalNote: {
          id: "POV 1 OTS: Headline 2 baris 'LEHER KAKU TIAP SORE / MONITOR KURANG TINGGI', SFX sub-bass tension thud.",
          en: "POV 1 OTS: 2-line headline 'STIFF NECK EVERY AFTERNOON / MONITOR SITS TOO LOW', sub-bass tension thud SFX.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-v2-sb-2",
        scene: {
          id: "Cut 02 · Adegan 2: Frontal Horizon Eye-Level Lock-in",
          en: "Cut 02 · Scene 2: Frontal Horizon Eye-Level Lock-in",
        },
        timecode: "00:03 - 00:08",
        visualDescription: {
          id: "Kamera frontal horizon eye-level: tangan mendorong monitor naik vertikal ke tengah lensa, postur punggung seketika tegak sempurna.",
          en: "Frontal horizon eye-level camera: hands push monitor vertically to lens center, posture instantly straightening.",
        },
        technicalNote: {
          id: "POV 2 Frontal: SFX desis pneumatik hidrolik mulus + teks highlight kuning 'PAS SEJAJAR MATA'.",
          en: "POV 2 Frontal: Smooth hydraulic pneumatic air hiss SFX + yellow highlight text 'TRUE EYE LEVEL'.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-v2-sb-3",
        scene: {
          id: "Cut 02 · Adegan 3: Tabletop Low-Angle Recline Glide",
          en: "Cut 02 · Scene 3: Tabletop Low-Angle Recline Glide",
        },
        timecode: "00:08 - 00:15",
        visualDescription: {
          id: "Kamera ultra low-angle dari atas meja: talent bersandar rileks di kursi dan menarik monitor dengan satu jari telunjuk.",
          en: "Ultra low-angle tabletop camera: talent reclines in chair, pulling monitor forward-down with a single finger.",
        },
        technicalNote: {
          id: "POV 3 Low-Angle: Demonstrasi piston gas spring 2–9 kg, gerakan stabil tanpa goyang (zero drift).",
          en: "POV 3 Low-Angle: 2–9 kg gas spring piston demonstration, stable glide with zero drift.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-v2-sb-4",
        scene: {
          id: "Cut 02 · Adegan 4: Driver's POV Anti-Glare Tilt & Cable Concealment",
          en: "Cut 02 · Scene 4: Driver's POV Anti-Glare Tilt & Cable Concealment",
        },
        timecode: "00:15 - 00:22",
        visualDescription: {
          id: "Sudut pandang mata penonton (POV): kedua tangan memiringkan layar 15°, silau lampu lenyap seketika, jalur kabel tersembunyi rapi.",
          en: "First-person driver's POV: hands tilt screen 15°, room glare vanishes instantly, concealed cable routing revealed.",
        },
        technicalNote: {
          id: "POV 4 First-Person: SFX rotasi engsel VESA + snap kabel plastik renyah.",
          en: "POV 4 First-Person: Tactile VESA hinge rotation click + clean plastic cable snap SFX.",
        },
        toolUsed: "Midjourney v6.1 + Kling AI",
        assetType: "Motion Graphic",
      },
      {
        id: "oximus-v2-sb-5",
        scene: {
          id: "Cut 02 · Adegan 5: High-Angle Studio Sweep & CTA",
          en: "Cut 02 · Scene 5: High-Angle Studio Sweep & CTA",
        },
        timecode: "00:22 - 00:30",
        visualDescription: {
          id: "Kamera high-angle menyapu dari atas serong kanan: talent mengetik tegak dan memberi jempol ramah ke kamera dengan badge garansi resmi.",
          en: "High-angle camera sweeping from top-right: talent typing upright and flashing a thumbs-up with official warranty badge.",
        },
        technicalNote: {
          id: "POV 5 High-Angle: Resolusi aspirasional, musik chillhop swell menuju akord penutup + UI chime bell.",
          en: "POV 5 High-Angle: Aspirational resolution, chillhop swell to final chord + positive UI chime bell.",
        },
        toolUsed: "Adobe Premiere Pro + After Effects",
        assetType: "Motion Graphic",
      },
    ],
    videoVariations: [
      {
        id: "oximus-con-001",
        label: {
          id: "Variasi 1: Spatial Relief & Gas Spring Glide (30s)",
          en: "Variation 1: Spatial Relief & Gas Spring Glide (30s)",
        },
        hookHeadline: {
          id: "“Meja Lu Sempit Bukan Karena Kurang Lebar!”",
          en: "“Your Desk Feels Cramped Not Because It's Too Small!”",
        },
        angleDescription: {
          id: "Membongkar friksi stand monitor bawaan pabrik yang memakan 40% area meja, dialihkan ke sensasi monitor melayang bebas dengan Oximus Hydra ZDP1118.",
          en: "Deconstructing OEM monitor stand bulk that steals 40% of workspace, shifting to one-finger floating ergonomic freedom with Oximus Hydra ZDP1118.",
        },
        videoSrc: "/videos/oximus/oximus-hydra-zdp1118-v1.mp4",
        aspectRatio: "9:16",
        duration: "30s",
        specs: {
          durationFrames: "900 Frames",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Indonesian Neural Voice (Tempo Natural ~130 WPM)",
        },
        keyTakeaway: {
          id: "Transisi dari meja sempit berantakan ke setup melayang bersih menciptakan kepuasan visual instan (spatial relief). Didukung 7 efek suara taktil (clamp clack, gas spring hiss) dan musik chillhop 95 BPM yang menjaga retensi hingga detik ke-30.",
          en: "The immediate transition from a cluttered desk to a clean floating setup triggers powerful spatial relief satisfaction. Reinforced by 7 tactile ASMR sound effects (clamp lock, gas spring glide) and 95 BPM chillhop keeping retention high through 30 seconds.",
        },
      },
      {
        id: "oximus-con-003",
        label: {
          id: "Variasi 2: Say Goodbye to Tech-Neck (30s)",
          en: "Variation 2: Say Goodbye to Tech-Neck (30s)",
        },
        hookHeadline: {
          id: "“Lehermu Kaku Tiap Sore Karena Monitormu Kurang Tinggi!”",
          en: "“Your Neck is Stiff Every Afternoon Because Your Monitor Sits Too Low!”",
        },
        angleDescription: {
          id: "Mengangkat friksi fisik leher pegal jam 3 sore akibat monitor rendah diganjal buku, dibuktikan dengan dorongan gas spring satu jari naik sejajar mata (Eye-Level Trust Anchor) dan 5 variasi sudut kamera sinematik dinamis.",
          en: "Targeting acute physical neck ache from book-stacked screens, proven by one-finger gas spring rise to true eye level (Trust Anchor) across 5 dynamic cinematic POVs.",
        },
        videoSrc: "/videos/oximus/oximus-hydra-zdp1118-v2.mp4",
        aspectRatio: "9:16",
        duration: "30s",
        specs: {
          durationFrames: "900 Frames",
          fps: "30.00 FPS",
          resolution: "1080 × 1920 (9:16)",
          voiceModel: "ElevenLabs Indonesian Neural Voice (Tempo Natural ~132 WPM)",
        },
        keyTakeaway: {
          id: "Membangkitkan empati kinestetik di detik awal dengan gestur memijat leher dan pembuktian postur tegak di detik ke-3. Menggunakan 5 variasi sudut kamera sinematik (OTS, Frontal, Tabletop Low-Angle, POV Mata, dan Studio Sweep) yang menghilangkan kebosanan visual.",
          en: "Triggers immediate kinesthetic empathy with a neck-massage gesture and rapid eye-level trust anchor at second 3. Driven by 5 dynamic cinematic camera POVs (OTS, Frontal Horizon, Tabletop Low-Angle, First-Person POV, and Studio Sweep) ensuring zero visual monotony.",
        },
      },
    ],
    productionWorkflow: [
      {
        phase: "01",
        title: {
          id: "Riset Friksi Spasial & Formula Hook Naskah",
          en: "Spatial Friction Research & Script Hook Formulation",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: ["Notion", "Shopee/Tokopedia VOC", "Competitive Intelligence"],
        summary: {
          id: "Membedah keluhan pengguna monitor stand bawaan (meja sempit, kabel ruwet, leher pegal) untuk merumuskan hook pola interupsi 'Bukan Mejanya yang Kekecilan'.",
          en: "Analyzing customer complaints regarding stock monitor stands (cramped desks, cable mess, neck ache) to engineer the 'Not because your desk is too small' pattern-interrupt hook.",
        },
        keyDeliverable: {
          id: "Master Script CON-001 (5 Beats, VO Bahasa Indonesia, Safe-Zone Captions)",
          en: "Master Script CON-001 (5 Beats, Indonesian VO, Safe-Zone Captions)",
        },
      },
      {
        phase: "02",
        title: {
          id: "Pembangkitan Aset Visual AI & Motion Diffusion",
          en: "AI Visual Asset Generation & Motion Diffusion",
        },
        turnaroundTime: {
          id: "2 Hari",
          en: "2 Days",
        },
        tools: ["Midjourney v6.1", "Kling AI", "Prompt Engineering"],
        summary: {
          id: "Menghasilkan keyframe visual fotorealistis untuk 6 adegan terarah (meja sempit, clamp lock, gas spring push, cable management, clean setup) dan menganimasikannya dengan motion diffusion.",
          en: "Generating photorealistic keyframes for 6 choreographed scenes (cluttered desk, clamp lock, gas spring push, cable routing, clean desk) animated with motion diffusion.",
        },
        keyDeliverable: {
          id: "6 Render Klip Gerak Resolusi Tinggi (CLIP-001A hingga CLIP-005)",
          en: "6 High-Resolution Motion Clips (CLIP-001A through CLIP-005)",
        },
      },
      {
        phase: "03",
        title: {
          id: "Desain Audio Taktil ASMR & Narasi Neural AI Bahasa Indonesia",
          en: "Tactile ASMR Sound Design & Neural Voiceover",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: ["ElevenLabs", "Adobe Audition", "Tactile Foley Suite"],
        summary: {
          id: "Memproduksi vokal AI bahasa Indonesia dengan intonasi kasual natural (~130 WPM), memadukan 7 efek suara foley mekanik (clamp clack, gas spring hiss, cable snap), dan mengalibrasi BGM Lo-Fi 95 BPM.",
          en: "Producing natural Indonesian neural voiceover (~130 WPM), layering 7 tactile mechanical foley effects (clamp click, gas spring hiss, cable snap), and calibrating 95 BPM Lo-Fi music.",
        },
        keyDeliverable: {
          id: "Stem Audio Terkalibrasi (-14 LUFS, Ducking Musik ke -18 dB)",
          en: "Calibrated Audio Stems (-14 LUFS, Music Ducked to -18 dB)",
        },
      },
      {
        phase: "04",
        title: {
          id: "Editing Timeline NLE & Tipografi Dinamis",
          en: "NLE Timeline Assembly & Dynamic Typography",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: ["Adobe Premiere Pro", "CapCut Desktop", "Adobe After Effects"],
        summary: {
          id: "Menyusun timeline 30 detik dengan transisi cepat 2–3 detik per klip, menempelkan teks kinetik All-Caps 2 baris dalam Safe Zone TikTok, dan menyelaraskan ketukan beat musik dengan pergantian visual.",
          en: "Assembling the 30s timeline with brisk 2–3s cuts, applying 2-line All-Caps kinetic captions within TikTok safe zones, and synchronizing visual beats to music accents.",
        },
        keyDeliverable: {
          id: "Rough Cut & Final Assembly Timeline Premiere Pro",
          en: "Rough Cut & Final Assembly Premiere Pro Timeline",
        },
      },
      {
        phase: "05",
        title: {
          id: "Safe-Zone Compliance & Final Master Export",
          en: "Safe-Zone Compliance & Final Master Export",
        },
        turnaroundTime: {
          id: "4 Jam",
          en: "4 Hours",
        },
        tools: ["Premiere Pro", "Safe-Zone Mobile Overlays"],
        summary: {
          id: "Memverifikasi seluruh elemen visual dan teks bebas dari obstruksi antarmuka TikTok Ads & Instagram Reels (tombol like, caption bawah, username), lalu mengekspor master MP4 1080×1920 30fps siap pakai.",
          en: "Verifying all visual and caption elements stay clear of TikTok Ads and Instagram Reels UI elements (likes, bottom caption, username), exporting the master MP4 1080×1920 30fps ready for deployment.",
        },
        keyDeliverable: {
          id: "File Master Video MP4 Vertikal Siap Iklan Direct Response",
          en: "Ad-Ready Master Direct Response Vertical MP4 Video File",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Hook CON-001 ('Meja Lu Sempit Bukan Karena Kurang Lebar') dan Hook CON-003 ('Lehermu Kaku Tiap Sore') memberikan dua sudut pengujian konversi yang saling melengkapi (spasial kerapian meja vs. empati kinestetik kesehatan fisik).",
          en: "Hook CON-001 ('Your desk isn't too small') and Hook CON-003 ('Your neck is stiff every afternoon') deliver two complementary conversion angles (spatial desk transformation vs. kinesthetic physical empathy).",
        },
        {
          id: "Demonstrasi gas spring satu jari (one-finger push) pada kedua variasi memberikan bukti visual tak terbantahkan terhadap klaim kemudahan gerak dan fleksibilitas ergonomis.",
          en: "The one-finger gas spring push demonstration across both variations provides irrefutable visual proof of effortless counterbalance and ergonomic adaptability.",
        },
        {
          id: "Penerapan 5 variasi sudut kamera sinematik pada Cut 02 (OTS, Frontal Horizon, Low-Angle Tabletop, First-Person POV, dan High-Angle Studio Sweep) sukses mengeliminasi kebosanan visual penonton.",
          en: "Implementing 5 dynamic cinematic POVs on Cut 02 (OTS, Frontal Horizon, Low-Angle Tabletop, First-Person POV, and Studio Sweep) successfully eliminated visual monotony.",
        },
      ],
      underperformers: [
        {
          id: "Karena diproduksi melalui pipeline AI diffusion, detail visual mekanisme sekrup klem dan ganjalan buku memerlukan tipografi layar yang tegas agar penonton awam memahami pesan tanpa kebingungan.",
          en: "Due to AI diffusion generation, fine mechanical clamp threading and book-stack textures benefit from bold on-screen captions to prevent viewer ambiguity.",
        },
        {
          id: "Durasi kedua cut yang tepat 30.0 detik memerlukan hook 0–2 detik yang sangat padat kata agar penonton tidak melakukan scroll-away sebelum Trust Anchor di detik ke-3.",
          en: "A strict 30.0-second cut duration requires hyper-compressed 0–2s spoken words so viewers never scroll away before the Trust Anchor at second 3.",
        },
      ],
      creativeAssessment: {
        id: "Evaluasi ini difokuskan pada analisis keputusan kreatif, ritme pacing, dan kekuatan narasi naskah. Karena ini merupakan spec ad independen yang belum dijalankan pada dashboard iklan berbayar (paid media), tidak ada klaim ROAS atau konversi semu yang dibuat.",
        en: "This evaluation focuses strictly on creative decision-making, editorial pacing, and narrative strength. As an independent spec ad not yet run in active paid ad accounts, no synthetic ROAS or conversion metrics are claimed.",
      },
      creativeLearnings: [
        {
          id: "Pada produk workstation, membandingkan Cut 01 (Kerapian Meja) dengan Cut 02 (Kesehatan Leher) membuktikan bahwa audiens WFH merespons empati kinestetik (memijat leher) sama kuatnya dengan kepuasan visual sebelum-sesudah.",
          en: "In workstation accessories, pitting Cut 01 (Desk Clutter) against Cut 02 (Neck Health) proves remote audiences respond to kinesthetic empathy (massaging neck) just as intensely as visual before-and-after contrast.",
        },
        {
          id: "Desain audio foley taktil (ASMR klik logam, desis gas spring hidrolik, dan snap kabel) secara konsisten meningkatkan persepsi nilai produk premium pada audiens yang menonton dalam mode sound-on.",
          en: "Tactile ASMR foley sound design (metal click, hydraulic gas spring hiss, cable snap) consistently elevates perceived product craftsmanship for sound-on mobile audiences.",
        },
      ],
      nextIterationStrategy: {
        id: "Menjalankan Meta Dynamic Creative Ads (DCT) dengan membandingkan rasio Thumbstop 3 detik pertama antara Hook Spasial CON-001 dan Hook Postur Leher CON-003 untuk menentukan pemenang retensi skala besar.",
        en: "Deploy a Meta Dynamic Creative (DCT) split-test pitting the 3-second Thumbstop rate of Spatial Hook CON-001 against Neck Posture Hook CON-003 to identify the conversion winner at scale.",
      },
    },
    productionProof: [
      {
        id: "oximus-con003-google-flow",
        imageSrc: "/images/oximus/oximus_con003_bts_google_flow.jpg",
        toolBadge: "Google Flow",
        cutLabel: "CON-003",
        title: {
          id: "Penguncian Produk, Karakter & Klip 5-POV",
          en: "Product, Character & 5-POV Clip Generation",
        },
        caption: {
          id: "Ruang kerja Google Flow menggabungkan referensi produk Oximus Hydra ZDP1118 putih, konsistensi wajah talent & workstation kayu, hingga 5 sudut kamera sinematik ergonomi.",
          en: "Google Flow workspace combining the isolated white Oximus Hydra ZDP1118 arm reference, talent & wooden desk continuity, and 5 dynamic ergonomic camera POVs.",
        },
      },
      {
        id: "oximus-con003-capcut-timeline",
        imageSrc: "/images/oximus/oximus_con003_bts_capcut_timeline.jpg",
        toolBadge: "CapCut Desktop",
        cutLabel: "CON-003",
        title: {
          id: "Perakitan 12-Track Timeline Direct Response (30s)",
          en: "12-Track Direct Response Timeline Assembly (30s)",
        },
        caption: {
          id: "Timeline Oximus-CON-003-DR-30s-v01 (1080×1920 @ 30 FPS, 12 track, 39 klip) dengan pemisahan SFX foley, BGM Lo-Fi mid-scoop + ducking, dan 5 beat VO ElevenLabs.",
          en: "Oximus-CON-003-DR-30s-v01 timeline (1080×1920 @ 30 FPS, 12 tracks, 39 clips) separating tactile SFX hits, mid-scooped ducked Lo-Fi BGM, and 5 ElevenLabs VO beats.",
        },
      },
    ],
  },
  {
    id: "agoda-weekend-getaway",
    slug: "agoda-weekend-getaway",
    title: "Agoda: Weekend Getaway",
    client: "Agoda (Spec Ad / AI Creative Sprint)",
    category: {
      id: "Hospitality & Travel / AI Drama Ads",
      en: "Hospitality & Travel / AI Drama Ads",
    },
    year: "2026",
    tagline: {
      id: "Rangkaian 2 iklan micro-drama sinematik AI vertikal (9:16) untuk Agoda Mobile App: mematahkan mitos weekend surcharge (CON-005) & tombol mute kebisingan kota menuju kabin hutan pinus (CON-004).",
      en: "A 2-part vertical cinematic AI micro-drama series (9:16) for the Agoda Mobile App: busting the weekend surcharge myth (CON-005) & muting city noise into a silent pine cabin sanctuary (CON-004).",
    },
    heroSummary: {
      id: "Studi kasus creative advertising multi-variasi untuk Agoda Mobile App. Menguji 2 sudut pandang micro-drama AI independen: (1) CON-005 The Weekend Surcharge Myth — drama warkop terik antara dua sahabat yang beralih ke diskon App-Only 35% dan infinity pool; serta (2) CON-004 The Secret Solo Sanctuary — hook komedi absurd menekan tombol MUTE remot TV ke kerumunan food court yang dijembatani Agoda Map View menuju kabin hutan pinus berkabut.",
      en: "A multi-variation creative advertising case study for the Agoda Mobile App. Testing 2 distinct AI micro-drama angles: (1) CON-005 The Weekend Surcharge Myth — a sweltering street stall debate transitioning to 35% App-Only Deals and an infinity pool; and (2) CON-004 The Secret Solo Sanctuary — an absurd physical hook pressing a TV remote MUTE button at a loud food court bridged by Agoda Map View into a misty pine forest cabin.",
    },
    featured: true,
    primaryHighlight: {
      value: "2 Video Cuts",
      label: {
        id: "Variasi Angle AI Micro-Drama",
        en: "AI Micro-Drama Angle Variations",
      },
      subtext: {
        id: "30s & 36s Vertikal 9:16 (CON-005 & CON-004)",
        en: "30s & 36s 9:16 Vertical (CON-005 & CON-004)",
      },
    },
    secondaryHighlights: [
      {
        value: "9:16",
        label: {
          id: "Format Vertikal Mobile",
          en: "Mobile Vertical Format",
        },
      },
      {
        value: "Google Flow",
        label: {
          id: "Omni Flash Video Gen",
          en: "Omni Flash Video Gen",
        },
      },
      {
        value: "5 Beats",
        label: {
          id: "Arsitektur Direct Response",
          en: "Direct Response Architecture",
        },
      },
    ],
    toolsUsed: [
      "Google Flow Omni Flash",
      "Midjourney v6.1",
      "ElevenLabs (Indonesian & English VO)",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "CapCut Desktop",
      "Remotion",
    ],
    creativeBrief: {
      clientObjective: {
        id: "Merancang rangkaian 2 video iklan direct response format vertikal (9:16) yang mematahkan hambatan psikologis liburan akhir pekan (mitos weekend surcharge & kelelahan sosial/bising kota) serta mendorong instalasi dan reservasi via Agoda Mobile App.",
        en: "Produce a 2-part vertical direct response video ad series (9:16) overcoming weekend travel barriers (weekend surcharge myths & urban sensory burnout) to drive Agoda Mobile App installs and bookings.",
      },
      targetAudience: {
        id: "Karyawan swasta, desainer grafis, pekerja kreatif/agency, dan profesional urban berusia 23–34 tahun yang mengalami kejenuhan rutinitas kantor serta kebisingan kota namun tetap sensitif terhadap harga penginapan akhir pekan.",
        en: "Corporate employees, graphic designers, creative agency workers, and urban professionals aged 23–34 experiencing workweek burnout and urban noise fatigue while remaining price-sensitive on weekend stays.",
      },
      coreProblem: {
        id: "Pekerja urban terjebak dua friksi utama: (1) persepsi bahwa tarif hotel akhir pekan selalu melonjak mahal (weekend surcharge myth), dan (2) kelelahan sensorik akibat kebisingan kantin/kota sehari-hari tanpa tahu cara cepat menemukan penginapan sunyi di luar keramaian.",
        en: "Urban workers face two core frictions: (1) the belief that weekend hotel rates unavoidably surge, and (2) daily sensory overload from crowded lunch halls and city noise without an easy way to locate peaceful hidden retreats.",
      },
      angleHookStrategy: {
        id: "Menguji 2 mekanisme persuasi kontras: (1) CON-005 Cognitive Disruption & Smart Shopper Victory — membuka dengan frustrasi harga di warkop terik menuju infinity pool; dan (2) CON-004 Absurd Pattern Interrupt to Sensory Silence — aksi fisik deadpan menekan tombol MUTE remot TV ke kerumunan food court lalu memakai Agoda Map View menuju kabin hutan pinus sunyi.",
        en: "Testing 2 contrasting persuasion mechanisms: (1) CON-005 Cognitive Disruption & Smart Shopper Victory — sweltering street stall price frustration shifting to an infinity pool; and (2) CON-004 Absurd Pattern Interrupt to Sensory Silence — deadpan physical comedy pressing a TV remote MUTE button at a loud food court, shifting via Agoda Map View to a silent pine cabin.",
      },
      keyDifferentiators: [
        {
          id: "App-Only Deals dengan diskon hingga 35% khusus aplikasi seluler",
          en: "Exclusive App-Only Deals with up to 35% off on mobile",
        },
        {
          id: "Fitur Agoda Map View untuk menggeser peta keluar dari keramaian kota menuju kabin & resort tenang (rating ketenangan 9.2+)",
          en: "Agoda Map View feature letting travelers slide past crowded city hubs directly to quiet nature retreats (9.2+ quiet rating)",
        },
        {
          id: "Layanan EasyCancel (Jaminan Pembatalan Gratis tanpa cemas)",
          en: "EasyCancel free cancellation guarantee for zero-risk bookings",
        },
        {
          id: "Benefit sarapan pagi gratis (Free Breakfast Included) & konfirmasi reservasi instan",
          en: "Complimentary breakfast included & instant one-tap room confirmation",
        },
      ],
      deliverables: [
        {
          id: "Variasi 1 (CON-005): Video Vertikal 'The Weekend Surcharge Myth' (30s, 1080x1920 @ 30 FPS)",
          en: "Variation 1 (CON-005): Vertical Video 'The Weekend Surcharge Myth' (30s, 1080x1920 @ 30 FPS)",
        },
        {
          id: "Variasi 2 (CON-004): Video Vertikal 'The Secret Solo Sanctuary / The Human Mute Button' (36s, 1080x1920 @ 30 FPS)",
          en: "Variation 2 (CON-004): Vertical Video 'The Secret Solo Sanctuary / The Human Mute Button' (36s, 1080x1920 @ 30 FPS)",
        },
        {
          id: "Naskah Dwibahasa (ID/EN), Voiceover Brand Narrator ElevenLabs, & Storyboard 5-POV untuk kedua konsep",
          en: "Bilingual Master Scripts (ID/EN), ElevenLabs Brand Narrator VO, & 5-POV Storyboards for both concepts",
        },
        {
          id: "Paket Handoff Produksi, Visual Asset Bible, & Blueprint Direct Response Editing",
          en: "Production Handoff Package, Visual Asset Bible, & Direct Response Editing Blueprints",
        },
      ],
    },
    creativeStrategy: {
      projectType: {
        id: "Spec Ad / AI Creative Sprint",
        en: "Spec Ad / AI Creative Sprint",
      },
      objective: {
        id: "Menguji performa 2 angle Cinematic AI Micro-Drama (Price Myth Buster vs. Absurd Silence Escape) dalam mendorong unduhan aplikasi Agoda dan reservasi weekend getaway.",
        en: "Test 2 distinct Cinematic AI Micro-Drama angles (Price Myth Buster vs. Absurd Silence Escape) driving Agoda App downloads and weekend getaway bookings.",
      },
      targetAudience: {
        id: "The Skeptical Deal Seeker & Overstimulated Urban Creative (23–34 tahun): pekerja urban yang lelah oleh rutinitas serta bising kota, mendambakan liburan singkat yang terjangkau sekaligus menenangkan.",
        en: "The Skeptical Deal Seeker & Overstimulated Urban Creative (ages 23–34): city workers drained by work routines and noise, seeking affordable yet restorative short escapes.",
      },
      audienceInsight: {
        id: "Konsumen kerap membatalkan rencana liburan karena melihat tarif akhir pekan tinggi di browser biasa, dan di sisi lain pekerja kreatif yang kelelahan sosial merasa kesulitan mencari penginapan sunyi di luar kepadatan kota secara cepat.",
        en: "Travelers frequently abort trips after seeing high weekend web rates, while socially drained creatives struggle to quickly pinpoint quiet nature stays away from dense urban zones.",
      },
      coreAngle: {
        id: "Pengujian 2 sudut narasi: (1) CON-005 Smart-Shopper Drama — kontras warkop terik vs infinity pool lewat App-Only Deals; (2) CON-004 The Secret Solo Sanctuary — komedi fisik tombol MUTE remot TV di food court bising vs keheningan kabin hutan pinus lewat Agoda Map View.",
        en: "Testing 2 narrative angles: (1) CON-005 Smart-Shopper Drama — sweltering street stall vs infinity pool via App-Only Deals; (2) CON-004 The Secret Solo Sanctuary — absurd TV remote MUTE button in a loud food court vs misty pine forest silence via Agoda Map View.",
      },
      hookStrategy: {
        id: "Dual Pattern Interrupt (0–3s): Cut 01 membuka dengan hempasan ponsel frustrasi di warkop panas ('WEEKEND SURCHARGE / BIKIN DOMPET BONCOS?'); Cut 02 membuka dengan 2-shot FPP tangan Maya menekan tombol merah MUTE remot TV ke kerumunan food court ('KOTA GAK PUNYA TOMBOL MUTE / CARI BUKIT SEPI DI AGODA').",
        en: "Dual Pattern Interrupt (0–3s): Cut 01 opens with a frustrated phone slap at a sweltering stall ('WEEKEND SURCHARGE / DRAINING YOUR WALLET?'); Cut 02 opens with a 2-shot FPP of Maya pressing a TV remote red MUTE button at a loud food court ('CITIES HAVE NO MUTE BUTTON / FIND QUIET CABINS ON AGODA').",
      },
      valueProposition: {
        id: "Agoda Map View + App-Only Deals hingga 35% + Free Breakfast + Free Cancellation menjadikan liburan akhir pekan mewah maupun solo retreat sunyi mudah ditemukan dan ramah di dompet.",
        en: "Agoda Map View + App-Only Deals up to 35% off + Free Breakfast + Free Cancellation makes both luxury getaways and quiet solo retreats easy to locate and budget-friendly.",
      },
      callToAction: {
        id: "“Butuh waktu tenang buat diri sendiri atau weekend escape mewah? Buka aplikasi Agoda sekarang.”",
        en: "“Need quiet time for yourself or a luxury weekend escape? Open the Agoda app today.”",
      },
      creativeRationale: {
        id: "Iklan travel konvensional terlalu sering langsung menampilkan montase pemandangan tanpa konflik. Dengan membangun ketegangan relatable terlebih dahulu (panas terik warkop & bising food court) lalu memotongnya secara drastis (Hard Cut / Acoustic Dopamine Snap) ke resort sejuk dan kabin hutan pinus hening, penonton merasakan pelepasan emosi instan yang mendorong aksi unduh aplikasi.",
        en: "Conventional travel ads jump straight into generic scenic montages without tension. By establishing relatable urban friction first (35°C street heat & food court noise) and snapping abruptly via Hard Cut / Acoustic Dopamine Snap into a cool resort and silent pine cabin, viewers feel instant emotional relief that drives app installs.",
      },
    },
    assetBreakdown: [
      {
        id: "agoda-asset-01",
        name: {
          id: "Visual Warkop Terik & Pattern Interrupt Hook (CLIP-001)",
          en: "Sweltering Street Stall Visual & Pattern Interrupt Hook (CLIP-001)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Google Flow Omni Flash + Midjourney v6.1",
        myContribution: {
          id: "Sutradara visual: prompting ekspresi frustrasi Rian, meja kayu rustic berpeluh, gelas es teh manis berembun, dan audio taktil hempasan ponsel.",
          en: "Visual directing: prompting Rian's exasperation, sweating rustic table, frosty iced tea, and tactile phone slap audio.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Mempertegas suhu panas 35°C di pelipis karakter untuk memvalidasi keletihan pekerja kantoran di hari Jumat.",
          en: "Accentuating 35°C heat sweat on temples to validate Friday desk-worker fatigue.",
        },
      },
      {
        id: "agoda-asset-02",
        name: {
          id: "Reverse Shot Dimas & Penyingkapan Aplikasi Agoda (CLIP-002)",
          en: "Dimas Reverse Shot & Agoda App Reveal (CLIP-002)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Google Flow Omni Flash + Midjourney v6.1",
        myContribution: {
          id: "Penyusunan adegan over-the-shoulder, ekspresi tenang Dimas, dan gerakan mulus menyodorkan layar smartphone melintasi meja.",
          en: "OTS blocking, Dimas's relaxed posture, and fluid camera tracking phone sliding across rustic tabletop.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Kontras karakter: Dimas tetap tenang dan segar di bawah naungan tenda warkop, merepresentasikan smart booker.",
          en: "Character contrast: Dimas stays poised under shade, embodying the smart-shopper avatar.",
        },
      },
      {
        id: "agoda-asset-03",
        name: {
          id: "Macro UI Agoda App: Diskon 35% & Booking Instan (CLIP-003)",
          en: "Macro Agoda App UI: 35% Off & Instant Booking (CLIP-003)",
        },
        category: "Motion graphics and compositing",
        sourceOrTool: "Adobe After Effects + Midjourney v6.1",
        myContribution: {
          id: "Rekayasa motion UI: animasi coret harga diskon 35%, lencana ungu App-Only Deals, ikon sarapan gratis, dan centang konfirmasi reservasi.",
          en: "Motion UI engineering: 35% price cut animation, purple App-Only badge, free breakfast icon, and verified checkmark.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Fokus makro pada layar smartphone di atas meja kayu warkop untuk mempertahankan kesinambungan latar.",
          en: "Macro focus on smartphone surface atop the stall table maintaining location continuity.",
        },
      },
      {
        id: "agoda-asset-04",
        name: {
          id: "Resort Bintang 4 & Infinity Pool Lereng Bukit (CLIP-004)",
          en: "4-Star Hillside Resort & Infinity Pool Payoff (CLIP-004)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Google Flow Omni Flash + Premiere Pro",
        myContribution: {
          id: "Sutradara visual lanskap alam megah: perbukitan Lembang berkabut, air kolam renang berkilau toska, dan relaksasi Rian menyeruput kelapa muda.",
          en: "Visual directing scenic landscape: misty hills, shimmering aqua infinity pool, and Rian sipping fresh coconut.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Titik balik emosional: Hard cut di detik 15.0 melepaskan dopamin penonton setelah ketegangan di warkop.",
          en: "Emotional turning point: second 15.0 hard cut triggers massive dopamine relief after urban friction.",
        },
      },
      {
        id: "agoda-asset-05",
        name: {
          id: "Two-Shot Bersulang Kelapa Muda & End-Card CTA (CLIP-005)",
          en: "Two-Shot Coconut Toast & End-Card CTA (CLIP-005)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Google Flow Omni Flash + Adobe Premiere Pro",
        myContribution: {
          id: "Komposisi kamera slow pedestal pull-back, foley benturan kelapa muda, dan penempatan kartu konversi unduhan Agoda di area aman mobile.",
          en: "Slow pedestal pull-back framing, tactile coconut toast foley, and mobile-safe Agoda CTA card overlay.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Penutup mantap dengan tatapan percaya diri kedua karakter ke lensa penonton, mempertegas smart shopper victory.",
          en: "Confident direct eye contact from both characters cementing smart-shopper triumph.",
        },
      },
      {
        id: "agoda-asset-06",
        name: {
          id: "Master Character & Location Consistency Bible",
          en: "Master Character & Location Consistency Bible",
        },
        category: "Product images or external assets",
        sourceOrTool: "Midjourney v6.1 + Prompt Engineering",
        myContribution: {
          id: "Penguncian atribut visual permanen untuk Rian (CHAR-001), Dimas (CHAR-002), Maya (CHAR-003), Warkop (LOC-001A/B), Food Court (LOC-003A/B), Resort (LOC-002), dan Kabin Hutan Pinus (LOC-004).",
          en: "Permanent attribute locking for Rian (CHAR-001), Dimas (CHAR-002), Maya (CHAR-003), Stall (LOC-001A/B), Food Court (LOC-003A/B), Resort (LOC-002), and Pine Forest Cabin (LOC-004).",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Menjamin kontinuitas wajah, pakaian, properti remot TV hitam, dan palet pencahayaan di seluruh klip AI pada CON-005 dan CON-004.",
          en: "Guarantees face, apparel, matte black TV remote prop, and lighting consistency across all discrete AI generation clips in CON-005 and CON-004.",
        },
      },
      {
        id: "agoda-v2-asset-01",
        name: {
          id: "CON-004 · 2-Shot FPP Remot TV Mute & Reaksi Maya Merengut (CLIP-001A/B)",
          en: "CON-004 · 2-Shot FPP TV Remote Mute & Maya Pout Reaction (CLIP-001A/B)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Google Flow Omni Flash + ElevenLabs VO-0",
        myContribution: {
          id: "Penyutradaraan hook absurd 2-shot: POV tangan kanan menekan tombol merah MUTE 3x ke kerumunan food court kantor, disusul fast cut Maya merengut menaruh remot di meja.",
          en: "Absurd 2-shot hook direction: FPP right hand pressing red MUTE button 3x toward loud office food court crowd, cut sharply to Maya pouting and setting down the remote.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Dilapisi Brand Narrator VO-0 ('Eh, eh, mana bisa di-mute gitu!') serta foley klik tombol remot dan keriuhan meja sebelah.",
          en: "Layered with Brand Narrator VO-0 tease alongside tactile remote clicks and ambient lunch hall chatter.",
        },
      },
      {
        id: "agoda-v2-asset-02",
        name: {
          id: "CON-004 · OTS Agoda Map View & Macro UI Kabin Hutan Pinus (CLIP-002 & CLIP-003)",
          en: "CON-004 · OTS Agoda Map View & Macro Pine Cabin UI (CLIP-002 & CLIP-003)",
        },
        category: "Motion graphics and compositing",
        sourceOrTool: "Google Flow Omni Flash + Remotion / CapCut Desktop",
        myContribution: {
          id: "Transisi 45° OTS geser peta Agoda Map View dari kota menuju pin hijau 'IDR 680K - Pine Cabin 9.2', dilanjutkan 90° macro screen insert diskon 35% hingga centang Booking Confirmed!",
          en: "45° OTS Agoda Map View swipe out of city clusters to green 'IDR 680K - Pine Cabin 9.2' pin, transitioning to 90° macro screen insert showing 35% discount and Booking Confirmed! tick.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Ujung remot TV hitam dipertahankan di sudut kiri atas meja kantin pada CLIP-003 sebagai jangkar kontinuitas ruang.",
          en: "Edge of the black TV remote stays visible at top-left of canteen table in CLIP-003 as a spatial continuity anchor.",
        },
      },
      {
        id: "agoda-v2-asset-03",
        name: {
          id: "CON-004 · Balkon Kabin Hutan Pinus Berkabut & Zero Lip-Clash CTA (CLIP-004 & CLIP-005)",
          en: "CON-004 · Misty Pine Forest Cabin Balcony & Zero Lip-Clash CTA (CLIP-004 & CLIP-005)",
        },
        category: "AI-generated footage or audio",
        sourceOrTool: "Google Flow Omni Flash + ElevenLabs VO-2/VO-3 + Remotion",
        myContribution: {
          id: "Hard cut silence drop ke teras kabin pinus berkabut dengan god rays pagi, kardigan krem & uap teh keramik, ditutup pedestal pull-back 30 cm Maya tersenyum tanpa gerak bibir.",
          en: "Hard-cut acoustic silence drop to misty pine cabin balcony with morning god rays, knit cardigan & steaming ceramic tea, closed by a 30cm pedestal pull-back with silent smile.",
        },
        licenseStatus: "Self-Created / Original",
        notes: {
          id: "Menerapkan Zero Lip-Clash Guarantee: Maya hanya tersenyum dan melakukan gentle toast cangkir teh sementara Brand Narrator VO-3 menyampaikan CTA.",
          en: "Enforces Zero Lip-Clash Guarantee: Maya smiles silently and raises her tea mug in a gentle toast while Brand Narrator VO-3 delivers the CTA.",
        },
      },
    ],
    scriptAngles: [
      {
        id: "agoda-con-005",
        name: {
          id: "CON-005: The Weekend Surcharge Myth (Smart-Shopper Drama)",
          en: "CON-005: The Weekend Surcharge Myth (Smart-Shopper Drama)",
        },
        hookType: {
          id: "Pattern Interrupt & Frustrasi Warkop Terik",
          en: "Pattern Interrupt & Sweltering Stall Frustration",
        },
        duration: "30s",
        concept: {
          id: "Membongkar anggapan salah bahwa liburan akhir pekan selalu mahal karena surcharge, dialihkan ke penawaran eksklusif App-Only Deals Agoda.",
          en: "Dismantling the myth that weekend trips are inherently overpriced due to surcharges, shifting to Agoda App-Only Deals.",
        },
        lines: [
          {
            time: "00:00 - 00:03",
            visual: {
              id: "CLIP-001: Rian gerah berpeluh di warkop terik, menghempaskan smartphone ke meja kayu di samping es teh manis berembun.",
              en: "CLIP-001: Rian sweating in a roadside coffee stall, slamming his phone onto the rustic wooden table beside iced tea.",
            },
            audio: {
              id: "Rian (On-Camera): 'Weekend ini pengen kabur, tapi liat deh! Harga hotel pada gila-gilaan semua!'",
              en: "Rian (On-Camera): 'I need a weekend escape, but look at this! Hotel prices are completely insane!'",
            },
            psychologyIntent: {
              id: "Pattern Interrupt & Pain Agitation: Memvalidasi kepenatan kerja dan frustrasi harga akhir pekan untuk menahan jempol penonton.",
              en: "Pattern Interrupt & Pain Agitation: Validating work burnout and weekend price frustration to stop mobile scrolling.",
            },
          },
          {
            time: "00:03 - 00:08",
            visual: {
              id: "CLIP-002: Dimas tersenyum tenang di seberang meja warkop, meluncurkan smartphone-nya membuka antarmuka promo Agoda.",
              en: "CLIP-002: Dimas smiles calmly across the table, smoothly sliding his phone displaying Agoda's promotion screen.",
            },
            audio: {
              id: "Dimas (On-Camera to VO): 'Itu kalau lo nyarinya di web biasa! Coba buka aplikasi Agoda di HP, langsung keluar App-Only Deals.'",
              en: "Dimas (On-Camera to VO): 'That’s because you’re browsing regular websites! Open the Agoda app on your phone for exclusive App-Only Deals.'",
            },
            psychologyIntent: {
              id: "Cognitive Disruption & Secret Weapon: Menyadarkan kesalahan umum audiens dan menyodorkan solusi cerdas dalam aplikasi.",
              en: "Cognitive Disruption & Secret Weapon: Shifting perspective from generic browsers to exclusive app savings.",
            },
          },
          {
            time: "00:08 - 00:15",
            visual: {
              id: "CLIP-003: Macro insert ke layar Agoda: filter resort bintang 4, diskon 35% App-Only Deal, gratis sarapan, dan centang booking instan.",
              en: "CLIP-003: Macro screen insert of Agoda: 4-star resort filter, 35% App-Only discount, free breakfast, and instant booking tick.",
            },
            audio: {
              id: "Voiceover: 'Resort bintang empat ini dipotong tiga puluh lima persen, plus sarapan gratis dan garansi pembatalan tanpa cemas.'",
              en: "Voiceover: 'This four-star resort is slashed thirty-five percent, with free breakfast included and zero-stress free cancellation.'",
            },
            psychologyIntent: {
              id: "Mechanism Proof & Frictionless Action: Menghilangkan keraguan harga dengan bukti diskon visual dan kepastian pembatalan gratis.",
              en: "Mechanism Proof & Frictionless Action: Dispelling price doubts through tangible UI verification and risk reversal.",
            },
          },
          {
            time: "00:15 - 00:22",
            visual: {
              id: "CLIP-004: Hard Cut keesokan harinya di resort sejuk: Rian bersantai di lounger tepi infinity pool megah berlatar perbukitan berkabut, menyeruput kelapa muda.",
              en: "CLIP-004: Hard Cut to the next day: Rian lounging by a tranquil infinity pool overlooking misty hills, sipping fresh coconut.",
            },
            audio: {
              id: "Voiceover: 'Sabtu siang udah bisa rebahan di infinity pool sejuk, pemandangan bukit asri, tanpa mikirin dompet boncos.'",
              en: "Voiceover: 'By Saturday noon you're lounging by an infinity pool with mountain breezes, without breaking the bank.'",
            },
            psychologyIntent: {
              id: "Sensory Dopamine Payoff: Kontras sensorik ekstrem dari warkop panas terik ke kemewahan sejuk melepaskan kepuasan emosional.",
              en: "Sensory Dopamine Payoff: Radical sensory contrast from hot stall to misty retreat releasing emotional reward.",
            },
          },
          {
            time: "00:22 - 00:30",
            visual: {
              id: "CLIP-005: Rian dan Dimas bersulang kelapa muda, tersenyum mantap ke arah kamera saat kartu CTA Agoda 'Download Sekarang' muncul.",
              en: "CLIP-005: Rian and Dimas clink fresh coconut glasses, smiling confidently into camera as the Agoda 'Download Now' card appears.",
            },
            audio: {
              id: "Rian & Dimas + VO: 'Mau weekend escape mewah tanpa bayar mahal? Buka aplikasi Agoda sekarang. Agoda, temukan penginapan impianmu.'",
              en: "Rian & Dimas + VO: 'Want a luxury weekend escape without the crazy price? Open the Agoda app today. Agoda, find your dream getaway.'",
            },
            psychologyIntent: {
              id: "Smart Shopper Pride & Conversion CTA: Merayakan kemenangan belanja cerdas dengan dorongan instalasi aplikasi tanpa hambatan.",
              en: "Smart Shopper Pride & Conversion CTA: Celebrating smart booking triumph paired with low-friction download prompt.",
            },
          },
        ],
      },
      {
        id: "agoda-con-004",
        name: {
          id: "CON-004: The Secret Solo Sanctuary (The Human Mute Button)",
          en: "CON-004: The Secret Solo Sanctuary (The Human Mute Button)",
        },
        hookType: {
          id: "Absurd Pattern Interrupt & Komedi Fisik Remot TV",
          en: "Absurd Pattern Interrupt & TV Remote Physical Comedy",
        },
        duration: "36s",
        concept: {
          id: "Pekerja kreatif urban yang lelah oleh kebisingan food court mencoba men-mute kerumunan memakai remot TV, lalu menemukan pelarian sunyi di kabin hutan pinus via Agoda Map View.",
          en: "An overstimulated urban creative tries muting a noisy office food court with a TV remote before escaping to a misty pine forest cabin via Agoda Map View.",
        },
        lines: [
          {
            time: "00:00 - 00:03",
            visual: {
              id: "CLIP-001A/B (2-Shot Split): FPP tangan kanan Maya mengarahkan remot TV hitam ke rombongan food court berisik dan menekan MUTE 3x, lalu fast cut Maya merengut menaruh remot di meja.",
              en: "CLIP-001A/B (2-Shot Split): FPP right hand pointing a black TV remote at a noisy food court crowd pressing MUTE 3x, hard-cutting to Maya pouting and placing the remote on the table.",
            },
            audio: {
              id: "VO-0 + Foley: 'Eh, eh, mana bisa di-mute gitu!' + 3x klik tombol remot, tawa berisik meja sebelah, & desahan kesal Maya.",
              en: "VO-0 + Foley: 'Wait, you can't mute real people like that!' + 3x remote button clicks, loud canteen chatter, & Maya's frustrated sigh.",
            },
            psychologyIntent: {
              id: "Absurd Pattern Interrupt: Visual ganjil memencet remot TV ke arah kerumunan menghentikan scroll jempol secara instan dan memvalidasi kelelahan sosial.",
              en: "Absurd Pattern Interrupt: Unexpected visual comedy aiming a TV remote at a loud crowd arrests mobile scrolling and validates social burnout.",
            },
          },
          {
            time: "00:03 - 00:08",
            visual: {
              id: "CLIP-002 (45° High-Angle OTS): Maya menaruh remot di samping es kopi susu, membuka Agoda Map View di HP, dan menggeser peta keluar kota menuju pin hijau 'IDR 680K - Pine Cabin 9.2'.",
              en: "CLIP-002 (45° High-Angle OTS): Maya sets the remote beside her iced coffee, opens Agoda Map View, and slides out of the crowded city to a green 'IDR 680K - Pine Cabin 9.2' pin.",
            },
            audio: {
              id: "Maya (On-Camera): 'Buka peta Agoda di HP, geser keluar kota, langsung ketemu kabin tengah hutan.'",
              en: "Maya (On-Camera): 'Open Agoda Map View on your phone, slide past the city, and pick a forest cabin.'",
            },
            psychologyIntent: {
              id: "Lock-In Zone & Feature Discovery: Memperkenalkan Agoda Map View sebagai mekanisme visual paling mudah untuk kabur dari keramaian kota.",
              en: "Lock-In Zone & Feature Discovery: Positioning Agoda Map View as an intuitive visual escape tool away from urban noise.",
            },
          },
          {
            time: "00:08 - 00:15",
            visual: {
              id: "CLIP-003 (90° Macro Top-Down): Layar Agoda 'Lembang Pine Forest Cabin' (4.8/5 Quiet & Peaceful), diskon 35% (IDR 1,050,000 → IDR 682,500), Free Breakfast & Free Cancellation, tap Book Now → Booking Confirmed!.",
              en: "CLIP-003 (90° Macro Top-Down): Agoda screen for 'Lembang Pine Forest Cabin' (4.8/5 Quiet & Peaceful), 35% App-Only slash, Free Breakfast & Free Cancellation, tapping Book Now → Booking Confirmed!.",
            },
            audio: {
              id: "Brand Narrator (VO-1): 'Di aplikasi Agoda, nikmati diskon App-Only Deals hingga tiga puluh lima persen, lengkap sarapan gratis dan bebas pembatalan.'",
              en: "Brand Narrator (VO-1): 'On the Agoda app, unlock App-Only Deals up to thirty-five percent off, with free breakfast and free cancellation.'",
            },
            psychologyIntent: {
              id: "Proof & Zero-Risk Mechanism: Mengonfirmasi potongan harga nyata, rating ketenangan 9.2+, dan pembatalan bebas cemas tanpa friksi.",
              en: "Proof & Zero-Risk Mechanism: Verifying tangible 35% savings, 9.2+ quiet rating, and zero-risk cancellation in-app.",
            },
          },
          {
            time: "00:15 - 00:22",
            visual: {
              id: "CLIP-004 (28mm Wide Balcony Glide): Hard Cut tanpa dissolve. Maya duduk memakai kardigan rajut krem di teras kabin kayu menghadap hutan pinus berkabut pagi, memegang cangkir teh beruap.",
              en: "CLIP-004 (28mm Wide Balcony Glide): Hard Cut with zero dissolve. Maya in a cream knit cardigan relaxes on a wooden cabin balcony facing misty morning pine trees, cradling steaming ceramic tea.",
            },
            audio: {
              id: "Silence Drop + VO-2: Bising kota putus total berganti angin hutan & kicau burung. 'Besok paginya, ganti suara bising kota dengan kabut hutan pinus yang sunyi dan udara bukit yang dingin.'",
              en: "Silence Drop + VO-2: City noise cuts dead into pine breeze & morning birdsong. 'By tomorrow morning, trade city noise for silent pine mist and crisp mountain air.'",
            },
            psychologyIntent: {
              id: "The Acoustic Dopamine Snap: Pemutusan total suara bising menuju keheningan hutan menciptakan kelegaan sensorik mendalam.",
              en: "The Acoustic Dopamine Snap: Abrupt cutoff from urban din to serene pine-forest ambience triggers immediate sensory relief.",
            },
          },
          {
            time: "00:22 - 00:30",
            visual: {
              id: "CLIP-005 (35mm Medium Portrait + Pedestal Pull-Back): Maya tersenyum tenang mengangkat cangkir teh (gentle toast, bibir tertutup) sementara kamera mundur 30 cm membuka ruang End-Card CTA Agoda.",
              en: "CLIP-005 (35mm Medium Portrait + Pedestal Pull-Back): Maya smiles calmly raising her tea mug in a gentle silent toast as the camera glides back 30cm revealing the Agoda End-Card CTA.",
            },
            audio: {
              id: "Brand Narrator (VO-3): 'Butuh waktu tenang buat diri sendiri? Buka aplikasi Agoda sekarang! Agoda. Temukan penginapan impianmu.'",
              en: "Brand Narrator (VO-3): 'Need quiet time for yourself? Open the Agoda app today! Agoda. Find your dream stay.'",
            },
            psychologyIntent: {
              id: "Solo Recharge Satisfaction & Frictionless CTA: Mengunci aspirasi self-recharge tanpa bentrokan gerak bibir (Zero Lip-Clash) menuju tombol Download.",
              en: "Solo Recharge Satisfaction & Frictionless CTA: Locking solo-recharge aspiration with zero lip-sync clash leading into app download.",
            },
          },
        ],
      },
    ],
    storyboard: [
      {
        id: "agoda-sb-1",
        scene: {
          id: "Adegan 1: The Frustration Hook (Warkop Terik)",
          en: "Scene 1: The Frustration Hook (Sweltering Stall)",
        },
        timecode: "00:00 - 00:03",
        visualDescription: {
          id: "CLIP-001: Tight medium close-up Rian berkeringat di warkop panas terik, menghempaskan smartphone ke meja kayu di samping es teh manis berembun.",
          en: "CLIP-001: Tight medium close-up of sweating Rian slamming his phone onto a rustic stall table beside frosty iced tea.",
        },
        technicalNote: {
          id: "50mm f/2.4, shallow depth of field, micro push-in ke ekspresi frustrasi Rian. Text super: 'WEEKEND SURCHARGE / BIKIN DOMPET BONCOS?'.",
          en: "50mm f/2.4, shallow depth of field, micro push-in on Rian's exasperation. Super: 'WEEKEND SURCHARGE / DRAINING YOUR WALLET?'.",
        },
        toolUsed: "Google Flow Omni Flash + Midjourney v6.1",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-sb-2",
        scene: {
          id: "Adegan 2: The Lock-In Zone & Secret App Reveal",
          en: "Scene 2: The Lock-In Zone & Secret App Reveal",
        },
        timecode: "00:03 - 00:08",
        visualDescription: {
          id: "CLIP-002: Reverse angle OTS dari bahu Rian. Dimas tersenyum santai di bawah tenda warkop, menyodorkan smartphone membuka aplikasi Agoda.",
          en: "CLIP-002: Reverse OTS angle over Rian's shoulder. Dimas chuckles calmly under the stall awning, sliding his phone showing the Agoda app.",
        },
        technicalNote: {
          id: "Framing stabil meja warkop, match cut / zoom-in transition ke layar smartphone di detik 00:07.8.",
          en: "Stable tabletop framing, match cut / zoom-in transition to mobile screen insert at second 00:07.8.",
        },
        toolUsed: "Google Flow Omni Flash + Premiere Pro",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-sb-3",
        scene: {
          id: "Adegan 3: The Mechanism & Price Slash Proof",
          en: "Scene 3: The Mechanism & Price Slash Proof",
        },
        timecode: "00:08 - 00:15",
        visualDescription: {
          id: "CLIP-003: Macro top-down ke layar Agoda: animasi coret harga diskon 35% App-Only Deal, free breakfast, dan tap tombol 'Pesan Sekarang' hingga centang hijau.",
          en: "CLIP-003: Macro top-down screen insert of Agoda app: 35% App-Only Deal strikeout animation, free breakfast, and instant confirmed reservation tick.",
        },
        technicalNote: {
          id: "UI animation sync, tactile screen tap SFX, hard flash cut / dopamine snap di detik 00:15.0 langsung ke resort sejuk.",
          en: "UI animation sync, tactile screen tap SFX, hard flash cut / dopamine snap at second 00:15.0 straight to hillside resort.",
        },
        toolUsed: "Adobe After Effects + Midjourney v6.1",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-sb-4",
        scene: {
          id: "Adegan 4: Sensory Proof & Paradise Payoff",
          en: "Scene 4: Sensory Proof & Paradise Payoff",
        },
        timecode: "00:15 - 00:22",
        visualDescription: {
          id: "CLIP-004: Wide majestic nature sweep di resort lereng bukit. Rian bersantai di lounger tepi infinity pool berkilau, menyeruput kelapa muda dingin.",
          en: "CLIP-004: Wide majestic nature sweep at a hillside resort. Rian lounging beside a sparkling infinity pool, sipping fresh coconut.",
        },
        technicalNote: {
          id: "Slow panoramic camera glide, transisi grading dari 5800K hangat terik ke 4800K sejuk segar, BGM swell audio ke summer chill house.",
          en: "Slow panoramic camera glide, grading shift from 5800K warm stall to 4800K crisp cool retreat, BGM swells into chill summer house.",
        },
        toolUsed: "Google Flow Omni Flash + Lumetri Color",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-sb-5",
        scene: {
          id: "Adegan 5: Resolution & Conversion End-Card",
          en: "Scene 5: Resolution & Conversion End-Card",
        },
        timecode: "00:22 - 00:30",
        visualDescription: {
          id: "CLIP-005: Medium two-shot Rian dan Dimas bersulang kelapa muda, tersenyum mantap ke kamera. Slow pedestal pull-back membuka ruang kartu CTA Agoda.",
          en: "CLIP-005: Medium two-shot of Rian and Dimas clinking coconut glasses, smiling into camera. Slow pedestal pull-back reveals Agoda CTA card.",
        },
        technicalNote: {
          id: "Slow pedestal pull-back, end-card badge 'App-Only Deals & Free Cancellation', pulsing download CTA button, fade to black di 00:30.0.",
          en: "Slow pedestal pull-back, end-card badge 'App-Only Deals & Free Cancellation', pulsing download CTA button, 0.3s fade to black at 00:30.0.",
        },
        toolUsed: "Adobe Premiere Pro + After Effects",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-v2-sb-1",
        scene: {
          id: "Cut 02 · Adegan 1: The Human Mute Button (2-Shot FPP & Reaction)",
          en: "Cut 02 · Scene 1: The Human Mute Button (2-Shot FPP & Reaction)",
        },
        timecode: "00:00 - 00:03",
        visualDescription: {
          id: "CLIP-001A/B: FPP tangan kanan Maya mengacungkan remot TV hitam ke kerumunan food court bising menekan tombol MUTE 3x, lalu fast cut close-up Maya merengut menurunkan remot ke meja.",
          en: "CLIP-001A/B: FPP right hand aiming a matte black TV remote at a noisy food court crowd pressing MUTE 3x, hard-cutting to Maya pouting and placing the remote on the table.",
        },
        technicalNote: {
          id: "POV 1 FPP (~35mm) + Fast Cut Reaction: Super kuning 'KOTA GAK PUNYA TOMBOL MUTE / CARI BUKIT SEPI DI AGODA', Brand Narrator VO-0 & 3x remote click foley.",
          en: "POV 1 FPP (~35mm) + Fast Cut Reaction: Yellow super 'CITIES HAVE NO MUTE BUTTON / FIND QUIET CABINS ON AGODA', Brand Narrator VO-0 & 3x remote click foley.",
        },
        toolUsed: "Google Flow Omni Flash + ElevenLabs VO",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-v2-sb-2",
        scene: {
          id: "Cut 02 · Adegan 2: Lock-In Zone — Agoda Map View Escape",
          en: "Cut 02 · Scene 2: Lock-In Zone — Agoda Map View Escape",
        },
        timecode: "00:03 - 00:08",
        visualDescription: {
          id: "CLIP-002: 45° High-Angle Over-The-Shoulder (OTS) di meja kantin. Maya menaruh remot di samping es kopi susu, lalu menggeser peta Agoda Map View menuju pin hijau 'IDR 680K - Pine Cabin 9.2'.",
          en: "CLIP-002: 45° High-Angle OTS at canteen table. Maya places the remote beside her iced coffee and swipes Agoda Map View out of the city to a green 'IDR 680K - Pine Cabin 9.2' pin.",
        },
        technicalNote: {
          id: "POV 2 45° OTS (~40mm): 2 sequential cues ('GESER PETA KELUAR KOTA' → 'PAKAI AGODA MAP VIEW' kapsul ungu-putih), match cut ke macro insert layar.",
          en: "POV 2 45° OTS (~40mm): 2 sequential cues ('SLIDE PAST THE CITY' → 'USE AGODA MAP VIEW' purple-white pill), match cut into macro screen insert.",
        },
        toolUsed: "Google Flow Omni Flash + CapCut Desktop",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-v2-sb-3",
        scene: {
          id: "Cut 02 · Adegan 3: Macro UI Price Slash & Instant Confirmation",
          en: "Cut 02 · Scene 3: Macro UI Price Slash & Instant Confirmation",
        },
        timecode: "00:08 - 00:15",
        visualDescription: {
          id: "CLIP-003: 90° Macro Top-Down layar Agoda 'Lembang Pine Forest Cabin' (4.8/5 Quiet & Peaceful), diskon 35% App-Only Deal, Free Breakfast & Free Cancellation, tap Book Now hingga Booking Confirmed!.",
          en: "CLIP-003: 90° Macro Top-Down Agoda screen for 'Lembang Pine Forest Cabin' (4.8/5 Quiet & Peaceful), 35% App-Only Deal, Free Breakfast & Free Cancellation, tapping Book Now to Booking Confirmed!.",
        },
        technicalNote: {
          id: "POV 3 Macro (~60mm): Ujung remot TV hitam terlihat di sudut kiri meja sebagai kontinuitas ruang; SFX tap & success chime menuju hard cut detik 15.",
          en: "POV 3 Macro (~60mm): Edge of black TV remote remains top-left for spatial continuity; tap & success chime SFX leading into the second-15 hard cut.",
        },
        toolUsed: "Google Flow Omni Flash + Remotion",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-v2-sb-4",
        scene: {
          id: "Cut 02 · Adegan 4: Acoustic Dopamine Snap — Misty Pine Cabin",
          en: "Cut 02 · Scene 4: Acoustic Dopamine Snap — Misty Pine Cabin",
        },
        timecode: "00:15 - 00:22",
        visualDescription: {
          id: "CLIP-004: 28mm Low-Angle Wide lateral glide di teras kabin kayu hutan pinus berkabut pagi dengan god rays. Maya berkardigan rajut krem memejamkan mata sambil menggenggam cangkir teh beruap.",
          en: "CLIP-004: 28mm Low-Angle Wide lateral glide across a wooden cabin balcony facing misty morning pine forest with god rays. Maya in cream knit cardigan closes her eyes cradling steaming tea.",
        },
        technicalNote: {
          id: "POV 4 Wide Balcony (~28mm): Hard cut tanpa dissolve; kebisingan kantin terputus total berganti angin hutan & kicau burung pagi + Brand Narrator VO-2.",
          en: "POV 4 Wide Balcony (~28mm): Zero-dissolve hard cut; canteen noise drops completely into pine wind & morning birdsong + Brand Narrator VO-2.",
        },
        toolUsed: "Google Flow Omni Flash + ElevenLabs VO",
        assetType: "Motion Graphic",
      },
      {
        id: "agoda-v2-sb-5",
        scene: {
          id: "Cut 02 · Adegan 5: Peaceful Tea Toast & Zero Lip-Clash CTA",
          en: "Cut 02 · Scene 5: Peaceful Tea Toast & Zero Lip-Clash CTA",
        },
        timecode: "00:22 - 00:30",
        visualDescription: {
          id: "CLIP-005: 35mm Three-Quarter Medium Portrait Maya bersandar di balkon kayu, menoleh tersenyum tenang (bibir tertutup) mengangkat cangkir teh, diikuti slow pedestal pull-back 30 cm untuk End-Card Agoda.",
          en: "CLIP-005: 35mm Three-Quarter Medium Portrait of Maya leaning on wooden balcony, turning with a silent serene smile raising her tea mug, followed by 30cm pedestal pull-back for Agoda End-Card.",
        },
        technicalNote: {
          id: "POV 5 Medium Portrait (~35mm): Zero Lip-Clash Guarantee agar Brand Narrator VO-3 & tombol oranye 'DOWNLOAD SEKARANG' tampil bersih di safe zone bawah.",
          en: "POV 5 Medium Portrait (~35mm): Zero Lip-Clash Guarantee keeping Brand Narrator VO-3 & orange 'DOWNLOAD NOW' button crystal clear in lower safe zone.",
        },
        toolUsed: "Remotion + CapCut Desktop",
        assetType: "Motion Graphic",
      },
    ],
    videoVariations: [
      {
        id: "agoda-con-005",
        label: {
          id: "Variasi 1: The Weekend Surcharge Myth (CON-005)",
          en: "Variation 1: The Weekend Surcharge Myth (CON-005)",
        },
        hookHeadline: {
          id: "Weekend Ini Mau Kabur Tapi Hotel Pada Gila-Gilaan?",
          en: "Planning a Weekend Escape But Hotel Prices Suddenly Doubled?",
        },
        angleDescription: {
          id: "Mikro-drama dua sahabat di warkop terik yang membongkar mitos tarif akhir pekan lewat diskon eksklusif aplikasi Agoda hingga relaksasi di infinity pool lereng bukit.",
          en: "Two-friend micro-drama at a sweltering coffee stall dismantling the weekend surcharge myth through Agoda App-Only Deals and hillside pool relaxation.",
        },
        videoSrc: "/videos/agoda/agoda-weekend-getaway-v1.mp4",
        aspectRatio: "9:16",
        duration: "30s",
        specs: {
          durationFrames: "900 Frames",
          fps: "30.00 FPS",
          resolution: "1080x1920 (9:16 Mobile Vertical)",
          voiceModel: "ElevenLabs Neural Voiceover & Live Dialogue Sync",
        },
        keyTakeaway: {
          id: "Kontras visual tajam (hard cut) antara warkop panas terik dan kolam renang infinity pool menciptakan kepuasan dopamin yang mendorong aksi konversi unduhan seketika.",
          en: "A sharp hard-cut contrast between a sweltering 35°C warkop and a tranquil infinity pool produces a powerful dopamine payoff that spurs instant app downloads.",
        },
      },
      {
        id: "agoda-con-004",
        label: {
          id: "Variasi 2: The Secret Solo Sanctuary (CON-004)",
          en: "Variation 2: The Secret Solo Sanctuary (CON-004)",
        },
        hookHeadline: {
          id: "Kota Gak Punya Tombol Mute — Cari Bukit Sepi di Agoda",
          en: "Cities Have No Mute Button — Find Quiet Cabins on Agoda",
        },
        angleDescription: {
          id: "Hook komedi fisik 2-shot menekan tombol MUTE remot TV ke kerumunan food court bising, dijembatani fitur Agoda Map View dan diskon 35% menuju keheningan kabin hutan pinus berkabut.",
          en: "Absurd 2-shot physical comedy pressing a TV remote MUTE button at a loud food court, bridged via Agoda Map View and 35% App-Only Deals into a misty pine forest cabin sanctuary.",
        },
        videoSrc: "/videos/agoda/agoda-weekend-getaway-v2.mp4",
        aspectRatio: "9:16",
        duration: "36s",
        specs: {
          durationFrames: "1095 Frames",
          fps: "30.00 FPS",
          resolution: "1080x1920 (9:16 Mobile Vertical)",
          voiceModel: "ElevenLabs Brand Narrator (VO-0/1/2/3) & Native Speech",
        },
        keyTakeaway: {
          id: "Pola 'Absurd Pattern Interrupt to Acoustic Silence Drop' memutus kebisingan food court secara instan menjadi hening hutan pinus, memicu retensi tinggi bagi segmen pekerja urban yang kelelahan sosial.",
          en: "The 'Absurd Pattern Interrupt to Acoustic Silence Drop' abruptly severs food-court din into serene pine-forest stillness, driving strong retention for socially fatigued urban workers.",
        },
      },
    ],
    productionWorkflow: [
      {
        phase: "Phase 01",
        title: {
          id: "Riset Audiens & Dekonstruksi Mitos Surcharge",
          en: "Audience Research & Surcharge Myth Deconstruction",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: [
          "Google Maps Travel Reviews",
          "OTA Pricing Competitor Benchmark",
          "Voice of Customer Social Listening",
        ],
        summary: {
          id: "Menganalisis resistensi harga karyawan urban terhadap kenaikan tarif hotel di akhir pekan dan mengidentifikasi keunggulan App-Only Deals Agoda sebagai value wedge pembeda.",
          en: "Analyzing urban employee price sensitivity toward weekend hotel surcharges, positioning Agoda's mobile App-Only Deals as the definitive value wedge.",
        },
        keyDeliverable: {
          id: "Dokumen Riset Audiens & Matriks Seleksi Konsep (CON-001 s/d CON-005)",
          en: "Audience Research Dossier & Candidate Concept Selection Matrix",
        },
      },
      {
        phase: "Phase 02",
        title: {
          id: "Perumusan Naskah & Pacing Direct-Response 30s",
          en: "Direct-Response Scriptwriting & 30s Pacing Curve",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: [
          "Bilingual Direct-Response Framework",
          "ElevenLabs Neural Voiceover",
          "Adobe Audition",
        ],
        summary: {
          id: "Menulis naskah mikro-drama percakapan alami 5 beat yang mematuhi kurva direct-response (Hook warkop terik, Lock-in Agoda App, UI Proof, Sensory Payoff kolam renang, dan CTA).",
          en: "Writing a natural 5-beat conversational drama script adhering to direct-response curves (Sweltering stall Hook, Lock-in Zone, UI Proof, Pool Payoff, and CTA).",
        },
        keyDeliverable: {
          id: "Naskah Master Dwibahasa (ID/EN) & Voiceover Terkalibrasi -14 LUFS",
          en: "Bilingual Master Script (ID/EN) & Audio Mix Normalized to -14 LUFS",
        },
      },
      {
        phase: "Phase 03",
        title: {
          id: "Penguncian Karakter & Master Visual Asset Bible",
          en: "Character Consistency & Master Visual Asset Bible",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: [
          "Midjourney v6.1",
          "Character Reference Sheets",
          "Location Blueprinting",
        ],
        summary: {
          id: "Mengunci fitur visual permanen untuk Rian (CHAR-001), Dimas (CHAR-002), Warkop (LOC-001A/B), dan Resort Mewah (LOC-002) guna mencegah variasi wajah dan pakaian di lintas adegan.",
          en: "Locking permanent visual attributes for Rian (CHAR-001), Dimas (CHAR-002), Stall (LOC-001A/B), and Resort (LOC-002) to prevent cross-scene AI drift.",
        },
        keyDeliverable: {
          id: "Master Visual Asset Bible & 5 Keyframe Disetujui (CP4 Gate)",
          en: "Master Visual Asset Bible & 5 Approved Reference Keyframes",
        },
      },
      {
        phase: "Phase 04",
        title: {
          id: "Generasi Video AI Google Flow & NLE Direct-Response Edit",
          en: "Google Flow Video Generation & NLE Direct-Response Edit",
        },
        turnaroundTime: {
          id: "2 Hari",
          en: "2 Days",
        },
        tools: [
          "Google Flow Omni Flash",
          "Adobe Premiere Pro",
          "Adobe After Effects",
        ],
        summary: {
          id: "Merender 5 klip video vertikal resolusi tinggi dengan prompt kamera presisi, lalu merakitnya di timeline Premiere Pro dengan hard cut on action dan motion graphic Agoda UI.",
          en: "Generating 5 high-fidelity vertical video clips via prompt engineering, then cutting in Premiere Pro with hard cut on action and Agoda UI motion graphics.",
        },
        keyDeliverable: {
          id: "Master Video 30s Vertikal 9:16 (1080x1920 @ 30 FPS)",
          en: "Ad-Ready 30s Vertical Master Cut 9:16 (1080x1920 @ 30 FPS)",
        },
      },
      {
        phase: "Phase 05",
        title: {
          id: "Multi-Track Sound Engineering & Color Contrast",
          en: "Multi-Track Sound Engineering & Color Contrast",
        },
        turnaroundTime: {
          id: "1 Hari",
          en: "1 Day",
        },
        tools: [
          "Adobe Premiere Pro NLE",
          "Lumetri Color Grade",
          "ASMR & Environmental Foley Library",
        ],
        summary: {
          id: "Menyelaraskan 4 trek audio (dialog, voiceover brand, taktil foley es batu/hempasan ponsel/kelapa muda, dan BGM summer chill) serta transisi grading warna dari 5800K warkop terik ke 4800K resort sejuk.",
          en: "Engineering 4 audio tracks (dialogue, brand VO, tactile foley clinks/slaps, and chill BGM) and color grading transition from 5800K stall heat to 4800K resort cool.",
        },
        keyDeliverable: {
          id: "Master Broadcast File & Color Master Grade",
          en: "Broadcast-Ready Master Deliverable & Final Color Grade",
        },
      },
    ],
    honestEvaluation: {
      topPerformers: [
        {
          id: "Hard cut kontras sensori di detik ke-15 pada kedua variasi — warkop panas 35°C ke infinity pool (CON-005) dan riuh food court ke silence drop kabin hutan pinus (CON-004) — menghadirkan pelepasan dopamin visual dan audio yang sangat kuat.",
          en: "The second-15 sensory hard cut across both cuts — 35°C sweltering stall to infinity pool (CON-005) and noisy food court to pine cabin silence drop (CON-004) — delivers intense visual and acoustic dopamine relief.",
        },
        {
          id: "Penerapan Zero Lip-Clash Guarantee di Klip 5 CON-004 (Maya tersenyum sunyi mengangkat cangkir teh sementara Brand Narrator VO-3 berbicara) dan 2-shot FPP hook remot TV membuat ritme editing terasa bersih layaknya iklan live-action.",
          en: "Applying the Zero Lip-Clash Guarantee on CON-004 Clip 5 (Maya smiling silently with a gentle tea toast under Brand Narrator VO-3) alongside the 2-shot FPP TV remote hook delivers live-action editorial polish.",
        },
      ],
      underperformers: [
        {
          id: "Sinkronisasi gerak bibir pada dialog on-camera AI di Klip 1–2 tetap membutuhkan seleksi take ketat agar artikulasi kata terasa natural di tempo cepat.",
          en: "Lip-sync fidelity on AI on-camera dialogue in Clips 1–2 still demands strict take selection to keep spoken cadence natural at fast social pacing.",
        },
        {
          id: "Kepadatan elemen visual antarmuka peta (Agoda Map View) dan banner promo pada layar 9:16 memerlukan penempatan safe zone super yang disiplin agar tidak saling bertabrakan.",
          en: "Visual density of in-app map pins (Agoda Map View) and promo banners on 9:16 screens requires disciplined text safe-zone placement to avoid visual clutter.",
        },
      ],
      creativeAssessment: {
        id: "Evaluasi difokuskan pada kekuatan narasi mikro-drama dua konsep, akurasi kontinuitas karakter dan properti (termasuk remot TV & cangkir teh), serta presisi ritme direct response. Sebagai spec ad independen, tidak ada klaim ROAS atau metrik palsu.",
        en: "Evaluation centers on dual-concept micro-drama strength, character and prop continuity (including TV remote & ceramic mug invariants), and direct-response editing rhythm. As an independent spec ad, no fabricated ROAS or vanity metrics are presented.",
      },
      creativeLearnings: [
        {
          id: "Menggabungkan dua sudut pandang berbeda — rasional harga ('Weekend Surcharge Myth', CON-005) dan emosional sensorik ('The Human Mute Button', CON-004) — membuktikan satu produk aplikasi bisa menjangkau dua motivasi liburan yang kontras.",
          en: "Pairing two distinct persuasion triggers — rational pricing ('Weekend Surcharge Myth', CON-005) and sensory relief ('The Human Mute Button', CON-004) — proves one app product can unlock two very different travel motivations.",
        },
        {
          id: "Menggunakan Broadcast Hybrid Audio (dialog karakter asli di 0–8 detik pertama, lalu beralih ke Brand Narrator VO profesional di detik 8–30) secara signifikan meningkatkan kejernihan pesan promo dan konversi CTA.",
          en: "Using Broadcast Hybrid Audio (native character speech in seconds 0–8, handing off to a dedicated Brand Narrator VO in seconds 8–30) markedly sharpens promotional clarity and CTA authority.",
        },
      ],
      nextIterationStrategy: {
        id: "Menjalankan Meta Dynamic Creative Testing (DCT) untuk mengadu Thumbstop Rate 3 detik pertama antara Hook Frustrasi Harga Warkop (CON-005) melawan Hook Komedi Absurd Remot TV Mute (CON-004) guna memetakan pemenang akuisisi aplikasi.",
        en: "Run a Meta Dynamic Creative Test (DCT) pitting the 3-second Thumbstop Rate of the Sweltering Stall Price Hook (CON-005) against the Absurd TV Remote Mute Hook (CON-004) to identify the top app-install driver.",
      },
    },
    productionProof: [
      {
        id: "agoda-con004-google-flow",
        imageSrc: "/images/agoda/agoda_con004_bts_google_flow.jpg",
        toolBadge: "Google Flow",
        cutLabel: "CON-004",
        title: {
          id: "Konsistensi Karakter & Generasi Adegan (Maya)",
          en: "Character Consistency & Scene Generation (Maya)",
        },
        caption: {
          id: "Generasi keyframe & klip video 5-POV di Google Flow dengan penguncian wajah Maya, properti remot TV hitam, meja food court, UI Agoda, hingga balkon kabin hutan pinus.",
          en: "5-POV keyframe & video generation in Google Flow locking Maya's likeness, matte black TV remote, food court table, Agoda UI, and misty pine cabin balcony.",
        },
      },
      {
        id: "agoda-con004-remotion-studio",
        imageSrc: "/images/agoda/agoda_con004_bts_remotion_timeline.jpg",
        toolBadge: "Remotion Studio",
        cutLabel: "CON-004",
        title: {
          id: "Komposisi Multi-Track Timeline (AgodaCON004)",
          en: "Multi-Track Timeline Composition (AgodaCON004)",
        },
        caption: {
          id: "Perakitan presisi 1080×1920 @ 30 FPS dengan layer terpisah: V1 (Beat 1A–5), MG (Comedic Remote HUD), T1 (Direct-Response Copy), A1 (Brand Narrator VO), dan A2 (Native Foley & Ambience).",
          en: "Frame-accurate 1080×1920 @ 30 FPS assembly across dedicated tracks: V1 (Beats 1A–5), MG (Comedic Remote HUD), T1 (Direct-Response Copy), A1 (Brand Narrator VO), and A2 (Native Foley & Ambience).",
        },
      },
    ],
  },
];

export const PRODUCTION_PIPELINE = [
  {
    step: "01",
    phase: {
      id: "Riset Audiens & Voice of Customer (VOC)",
      en: "Audience & Voice of Customer (VOC) Research",
    },
    tools: ["Google Maps Reviews", "Media Sosial", "Katalog F&B"],
    summary: {
      id: "Membedah ulasan asli pengunjung dan pola bahasa pelanggan untuk menemukan friksi terbesar (kafe tutup awal, colokan rebutan, meja sempit) dan keunikan produk yang paling dihargai.",
      en: "Deconstructing real visitor reviews and customer language patterns to uncover primary friction points (early closing, outlet shortages) and most-valued amenities.",
    },
    badge: {
      id: "Fondasi Direct Response",
      en: "Direct Response Foundation",
    },
  },
  {
    step: "02",
    phase: {
      id: "Matriks Sudut Pandang Kreatif (Angles Matrix)",
      en: "Creative Angles Matrix Formulation",
    },
    tools: ["Notion", "Copywriting Framework"],
    summary: {
      id: "Merumuskan beragam hipotesis sudut pandang (kontras realitas, eksplorasi fitur langka, urgensi deadline) untuk menghasilkan beberapa variasi pesan yang dapat diuji secara terpisah.",
      en: "Formulating diverse angle hypotheses (reality contrast, rare feature discovery, deadline emergency) to yield testable, isolated message variations.",
    },
    badge: {
      id: "Strategi Angle",
      en: "Angle Strategy",
    },
  },
  {
    step: "03",
    phase: {
      id: "Penulisan Naskah & Storyboard 6 Adegan",
      en: "Scriptwriting & 6-Scene Storyboard Choreography",
    },
    tools: ["Markdown", "ElevenLabs Scripting"],
    summary: {
      id: "Menulis teks voiceover percakapan natural yang diselaraskan per frame dengan tindakan visual, teks layar sound-off, dan arahan efek suara (SFX) pendukung.",
      en: "Writing natural conversational voiceover copy tightly mapped to visual actions, sound-off captions, and tactile sound design (SFX) cues.",
    },
    badge: {
      id: "Arsitektur Narasi",
      en: "Narrative Architecture",
    },
  },
  {
    step: "04",
    phase: {
      id: "Rekayasa Video Programmatic (Remotion + React)",
      en: "Programmatic Video Engineering (Remotion + React)",
    },
    tools: ["Remotion", "TypeScript", "Tailwind CSS", "ElevenLabs"],
    summary: {
      id: "Memprogram video secara modular menggunakan React dan TypeScript. Menghasilkan animasi teks kinetik, ilustrasi vektor, dan transisi frame-accurate yang terkunci presisi pada vokal AI.",
      en: "Coding video modularly using React and TypeScript. Building kinetic typography, vector graphics, and frame-accurate transitions locked to AI vocal cadences.",
    },
    badge: {
      id: "Engine Programmatic",
      en: "Programmatic Engine",
    },
  },
  {
    step: "05",
    phase: {
      id: "Mastering Audio & Ekspor Multi-Variasi",
      en: "Audio Mastering & Multi-Variation Rendering",
    },
    tools: ["Remotion CLI", "Audio Mastering"],
    summary: {
      id: "Merender video vertikal berkualitas tinggi (1080×1920 30fps) dengan audio terkalibrasi (-14 LUFS) yang siap diunggah ke TikTok Ads, Reels, maupun Meta Dynamic Creative.",
      en: "Rendering high-fidelity vertical video (1080×1920 30fps) with calibrated audio (-14 LUFS) ready for direct upload to TikTok Ads, Reels, or Meta DCT.",
    },
    badge: {
      id: "Ekspor Siap Iklan",
      en: "Ad-Ready Export",
    },
  },
];
