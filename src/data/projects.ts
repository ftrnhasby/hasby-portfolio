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
        id: "Evaluasi ini difokuskan pada analisis keputusan kreatif, ritme pacing, dan kekuatan narasi naskah. Karena ini merupakan spec ad portofolio independen yang belum dijalankan pada dashboard iklan berbayar (paid media), tidak ada klaim ROAS atau konversi semu yang dibuat.",
        en: "This evaluation focuses strictly on creative decision-making, editorial pacing, and narrative strength. As an independent portfolio spec ad not yet run in active paid ad accounts, no synthetic ROAS or conversion metrics are claimed.",
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
        id: "30s Vertikal 9:16 (Render Nyata Remotion)",
        en: "30s 9:16 Vertical (Actual Remotion Renders)",
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
          id: "Variasi 1: Video Vertikal 'The 08:55 AM Meeting Emergency' (30 Detik, 900 frame @ 30fps)",
          en: "Variation 1: Vertical Video 'The 08:55 AM Meeting Emergency' (30s, 900 frames @ 30fps)",
        },
        {
          id: "Variasi 2: Video Vertikal 'The 30-Second Desk Barista / Crema Contrast' (30 Detik, 900 frame @ 30fps)",
          en: "Variation 2: Vertical Video 'The 30-Second Desk Barista / Crema Contrast' (30s, 900 frames @ 30fps)",
        },
        {
          id: "Komposisi Remotion modular (NespressoVideo & NespressoVideoV2) dengan sinkronisasi vokal ElevenLabs",
          en: "Modular Remotion composition repository (NespressoVideo & NespressoVideoV2) with ElevenLabs neural voice sync",
        },
      ],
    },
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
        duration: "30s",
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
        duration: "30s",
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
        duration: "30s",
        specs: {
          durationFrames: "900 Frames",
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
        duration: "30s",
        specs: {
          durationFrames: "900 Frames",
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
          id: "Merender video vertikal 1080×1920 30fps (900 frame) langsung dari CLI Remotion. Menyeimbangkan audio loudness (-14 LUFS) dengan perpaduan VO vokal jernih, background music modern lofi-groove, dan SFX mekanikal mesin presisi.",
          en: "Rendered 1080×1920 30fps vertical video (900 frames) directly via Remotion CLI. Balanced audio loudness (-14 LUFS) combining clear voiceover, modern lofi-groove BGM, and tactile mechanical SFX.",
        },
        keyDeliverable: {
          id: "2 File Video MP4 Final (V1 Emergency 30s & V2 Sensory 30s)",
          en: "2 Final MP4 Video Files (V1 Emergency 30s & V2 Sensory 30s)",
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
          id: "Macro shot sendok menyibak busa crema pada Variasi 2 memberikan thumb-stop rate instan melalui daya pikat sensori ASMR kopi yang memuaskan.",
          en: "The macro crema spoon dip in Variation 2 delivers immediate thumb-stop retention through satisfying coffee ASMR appeal.",
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
        id: "Evaluasi ini difokuskan pada analisis keputusan ritme editing, sinkronisasi audio-visual, dan efektivitas struktur direct response. Karena berstatus spec ad portofolio independen yang belum dijalankan pada dashboard iklan berbayar (paid media), tidak ada klaim performa ROAS atau konversi semu yang dibuat.",
        en: "This evaluation focuses strictly on editorial rhythm, audio-visual synchronization, and direct response pacing. As an independent portfolio spec ad case study not yet run in active paid ad accounts, no synthetic ROAS or conversion metrics are claimed.",
      },
      creativeLearnings: [
        {
          id: "Pacing kontras (cut cepat 1.2s saat fase panik, melambat ke 3s saat fase sensori crema) menjaga momentum retensi penonton secara signifikan.",
          en: "Contrasting pacing (rapid 1.2s cuts during panic scenes slowing down to 3s for sensory crema) substantially preserves viewer retention.",
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
