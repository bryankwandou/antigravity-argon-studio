export const translations = {
  en: {
    nav: {
      brand: "Antigravity Argon",
      badge: "Sovereign Web Atelier",
      modules: "Architecture",
      simulator: "Live Stack",
      cases: "Case Records",
      process: "Methodology",
      tiers: "Partnership",
      cta: "Initiate Partnership",
      themeToggle: "Toggle Theme",
      langToggle: "Bahasa Indonesia"
    },
    hero: {
      tag: "Next-Gen Enterprise Web Systems",
      headline: "Architecting the sovereign digital frontier.",
      subheadline: "A private atelier for high-velocity enterprise platforms, hyper-responsive web applications, and mission-critical cloud interfaces. Handcrafted with mathematical precision.",
      ctaPrimary: "Reserve Project Sprint",
      ctaSecondary: "Inspect Live Stack",
      stat1Val: "99.999%",
      stat1Label: "Availability SLA",
      stat2Val: "< 3.8ms",
      stat2Label: "Global P99 Latency",
      stat3Val: "240+",
      stat3Label: "Edge PoP Routing",
      stat4Val: "48+",
      stat4Label: "Deployed Systems"
    },
    marquee: [
      "SOVEREIGN REACTIVE INTERFACES",
      "DISTRIBUTED EDGE TOPOLOGY",
      "QUANTUM-RESISTANT CRYPTOGRAPHY",
      "KUBERNETES MICROSERVICES",
      "CUSTOM WEBGL SHADER ENGINES",
      "ZERO-TRUST AUTHENTICATION",
      "ULTRA-LOW LATENCY WEBSOCKETS",
      "ENTERPRISE CLOUD ATELIER"
    ],
    mission: {
      tag: "The Argon Standard",
      headline: "The future of enterprise software is not cookie-cutter boilerplate. It is bespoke digital craftsmanship.",
      col1Title: "Algorithmic Precision",
      col1Text: "Every millisecond is accounted for. We engineer web experiences with native hardware acceleration, micro-cached assets, and state-of-the-art layout engines.",
      col2Title: "Exclusive Engagement",
      col2Text: "We take on a maximum of three enterprise partnerships each quarter. Every deployment receives senior architectural oversight from Day 0 through global launch."
    },
    modules: {
      tag: "Core Capabilities",
      title: "Four Architectural Pillars. Zero Compromise.",
      subtitle: "Engineered specifically for technology leaders who require distinctive digital presence, unmatched security, and instant response times.",
      items: [
        {
          id: "01",
          name: "Reactive Neural Canvas",
          category: "Visual Computing",
          desc: "Sub-millisecond interactive shaders, custom WebGL graphics, and frictionless micro-interactions that captivate high-value enterprise decision makers.",
          latency: "1.8 ms",
          tech: "GLSL / WebGL2",
          cadence: "120 FPS"
        },
        {
          id: "02",
          name: "Distributed Edge Mesh",
          category: "Global Infrastructure",
          desc: "Global multi-region edge compute network with automated geolocation routing, dynamic SSR caching, and instant instant cache invalidation.",
          latency: "3.2 ms",
          tech: "Anycast Edge",
          cadence: "240+ PoPs"
        },
        {
          id: "03",
          name: "Quantum-Safe Protocol",
          category: "Cyber Resilience",
          desc: "Rigorous zero-trust access control, automated audit logging, hardware security key support, and post-quantum encryption standards.",
          latency: "0.4 ms",
          tech: "Kyber-768 / TLS 1.3",
          cadence: "Zero-Trust"
        },
        {
          id: "04",
          name: "Sovereign Backend Core",
          category: "Cloud Engineering",
          desc: "High-concurrency microservices, streaming event pipelines, distributed PostgreSQL clusters, and automated blue-green CI/CD deployment pipelines.",
          latency: "4.1 ms",
          tech: "Go / Rust / k8s",
          cadence: "99.999% SLA"
        }
      ]
    },
    simulator: {
      tag: "Live Interactive Architecture",
      title: "Inspect System Topologies in Real-Time.",
      subtitle: "Select an architecture profile below to inspect simulated throughput, live telemetry, and routing metrics.",
      tabs: [
        {
          id: "fintech",
          name: "FinTech Ultra-Scale",
          tagline: "High-frequency transaction dashboard & trading portal",
          metrics: {
            throughput: "245,000 req/s",
            latency: "2.1 ms",
            p99: "4.8 ms",
            security: "mTLS + FIPS 140-3",
            encryption: "AES-256-GCM / Kyber-768",
            regions: "14 Global Datacenters"
          },
          nodes: ["Edge Gateway (Frankfurt)", "Consensus Mesh (Zurich)", "Hot Storage (Tokyo)", "Audit Ledger (New York)"]
        },
        {
          id: "telemetry",
          name: "Aerospace Telemetry",
          tagline: "Live telemetry stream with 3D geospatial telemetry rendering",
          metrics: {
            throughput: "580,000 evt/s",
            latency: "1.4 ms",
            p99: "3.1 ms",
            security: "Air-Gapped Sovereign VPN",
            encryption: "Quantum-Resistant Mesh",
            regions: "8 Ground Stations"
          },
          nodes: ["Uplink Node (Houston)", "Stream Broker (Stockholm)", "3D Render Pool (Tokyo)", "Time-Series Store (Oregon)"]
        },
        {
          id: "healthcare",
          name: "Clinical AI Workspace",
          tagline: "HIPAA-certified multimodal diagnostics & clinician web portal",
          metrics: {
            throughput: "92,000 req/s",
            latency: "3.6 ms",
            p99: "6.2 ms",
            security: "HIPAA / SOC2 Type II",
            encryption: "Homomorphic + Zero-Knowledge",
            regions: "6 Sovereign Enclaves"
          },
          nodes: ["Sanitized Ingestion (Geneva)", "Inference Enclave (Dublin)", "Encrypted Vault (Virginia)", "Clinician Portal (Sydney)"]
        },
        {
          id: "logistics",
          name: "Autonomous Logistics Grid",
          tagline: "Global multimodal supply chain orchestration & dispatch portal",
          metrics: {
            throughput: "410,000 req/s",
            latency: "2.8 ms",
            p99: "5.4 ms",
            security: "Mutual Hardware Attestation",
            encryption: "ChaCha20-Poly1305",
            regions: "22 Port Hubs"
          },
          nodes: ["Vessel Ingest (Singapore)", "Dispatch Node (Rotterdam)", "Route Optimizer (Los Angeles)", "Archive Vault (London)"]
        }
      ]
    },
    cases: {
      tag: "Case Records",
      title: "Engineered for Market Leaders.",
      subtitle: "Selected enterprise records demonstrating sovereign digital architecture delivered on budget and ahead of schedule.",
      items: [
        {
          code: "REC-01",
          client: "Aetherial Capital",
          project: "Institutional Liquidity Terminal",
          metric: "4.2x Concurrency Boost",
          location: "Singapore & London",
          badge: "Financial Technology",
          details: "Architected a custom web trading terminal capable of rendering 120,000 simultaneous orderbook depth updates per second with zero UI jank."
        },
        {
          code: "REC-02",
          client: "Vektor Aerospace",
          project: "Fleet Telemetry Command Center",
          metric: "99.999% Field Uptime",
          location: "Munich & Tokyo",
          badge: "Defense & Aerospace",
          details: "Built an interactive WebGL geospatial tracking dashboard synchronizing satellite telemetry across three global mission control facilities."
        },
        {
          code: "REC-03",
          client: "Helios Genomic",
          project: "Precision Medicine Research Web App",
          metric: "Sub-50ms Genome Search",
          location: "Zurich & Boston",
          badge: "Biotechnology",
          details: "Engineered an ultra-secure clinician web portal featuring encrypted genetic sequence visualizers and real-time collaborative clinical notes."
        },
        {
          code: "REC-04",
          client: "Centauri Cloud",
          project: "Global Edge Infrastructure Portal",
          metric: "180M Monthly Invocations",
          location: "San Francisco & Sydney",
          badge: "Enterprise SaaS",
          details: "Designed and deployed a modern developer control plane with instant live-reloading serverless logs and real-time bandwidth visualization."
        }
      ]
    },
    methodology: {
      tag: "Engineering Protocol",
      title: "From Initial Blueprint to Global Edge.",
      steps: [
        {
          num: "01",
          title: "Topology Cartography & UX Architecture",
          desc: "Comprehensive analysis of brand identity, high-conversion user pathways, and technical requirements before writing a single line of production code."
        },
        {
          num: "02",
          title: "High-Fidelity Codecraft & Micro-Interactions",
          desc: "Handcrafted frontend development with custom CSS animations, responsive fluid layouts, and zero third-party framework bloat."
        },
        {
          num: "03",
          title: "Global Edge Deployment & Stress Verification",
          desc: "Automated multi-region CI/CD rollout, rigorous Lighthouse 100/100 audits, penetration testing, and 24/7 telemetry monitoring."
        }
      ]
    },
    tiers: {
      tag: "Partnership Framework",
      title: "Structured for Meaningful Collaboration.",
      toggleQuarterly: "Sprint Scope",
      toggleAnnual: "Retainer Scope (15% Efficiency)",
      featuredBadge: "Recommended for Enterprises",
      items: [
        {
          tier: "Tier 01",
          name: "Design & Prototype Sprint",
          badge: "4-Week Engagement",
          priceQuarterly: "$18,500",
          priceAnnual: "$15,700",
          period: "per sprint",
          desc: "High-fidelity interactive prototypes, design system tokens, and full technical architecture specification.",
          features: [
            "Complete UX/UI Design in Figma",
            "Functional Interactive HTML/CSS Prototype",
            "Custom Design System & Tokens File",
            "Technical Architecture Blueprint",
            "Performance & SEO Optimization Strategy"
          ],
          cta: "Reserve Sprint"
        },
        {
          tier: "Tier 02",
          name: "Flagship Enterprise Web Application",
          badge: "Most Popular",
          featured: true,
          priceQuarterly: "$38,000",
          priceAnnual: "$32,300",
          period: "full delivery",
          desc: "End-to-end custom website and web application engineered with bespoke animations, full localization, and edge hosting.",
          features: [
            "Everything in Tier 01",
            "Custom 60 FPS Micro-Interactions & Shaders",
            "Full Multi-Language (EN/ID) Architecture",
            "Edge Deployment on Vercel / Cloudflare",
            "Strict WCAG 2.1 AA Accessibility Standards",
            "100/100 Lighthouse Performance Guarantee",
            "3 Months Dedicated Engineering Support"
          ],
          cta: "Commission Flagship"
        },
        {
          tier: "Tier 03",
          name: "Sovereign Engineering Retainer",
          badge: "Dedicated Pod",
          priceQuarterly: "$65,000",
          priceAnnual: "$55,250",
          period: "per quarter",
          desc: "A dedicated senior engineering and design pod embedded in your organization for continuous high-impact digital initiatives.",
          features: [
            "Everything in Tier 02",
            "Dedicated Principal UI/UX Architect",
            "Custom Microservices & API Development",
            "24/7 Production SLA & Rapid Response",
            "Quarterly Infrastructure Security Audits",
            "Executive Architectural Steering Committee"
          ],
          cta: "Initiate Retainer"
        }
      ]
    },
    rfp: {
      tag: "Initiate Collaboration",
      title: "Build your flagship digital asset with Antigravity Argon.",
      subtitle: "Tell us about your organization and target requirements. We respond with a comprehensive architectural brief within 24 hours.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alexander Vance",
      companyLabel: "Company / Organization",
      companyPlaceholder: "e.g. Apex Global Systems",
      emailLabel: "Corporate Email",
      emailPlaceholder: "alexander@apexsystems.com",
      scopeLabel: "Project Scope",
      scopeOptions: [
        "Flagship Corporate Website",
        "High-Scale Web Application",
        "Design System & UI Modernization",
        "Edge Infrastructure & Performance Audit"
      ],
      budgetLabel: "Target Investment Range",
      budgetOptions: [
        "$15,000 - $30,000 (Rapid Sprint)",
        "$30,000 - $60,000 (Enterprise Flagship)",
        "$60,000+ (Full Digital Transformation)"
      ],
      notesLabel: "Project Objectives & Technical Requirements",
      notesPlaceholder: "Describe your timeline, current stack, and desired capabilities...",
      submitBtn: "Transmit Architectural Request",
      successTitle: "Transmission Confirmed",
      successDesc: "Your project specification has been logged in our secure intake registry. Reference Code:",
      successClose: "Acknowledge"
    },
    footer: {
      brandDesc: "Antigravity Argon is an elite software atelier specializing in high-performance web systems, custom interactive interfaces, and sovereign digital architecture.",
      rights: "© 2026 Antigravity Argon Studio. All digital assets, architectural blueprints, and interactive systems reserved.",
      status: "SYSTEMS OPERATIONAL • EDGE SYNCHRONIZED",
      links: ["Security Posture", "Architecture Standards", "Service Level Agreement", "GitHub Repository", "Live Vercel Deployment"]
    }
  },
  id: {
    nav: {
      brand: "Antigravity Argon",
      badge: "Studio Web Berdaulat",
      modules: "Arsitektur",
      simulator: "Live Stack",
      cases: "Rekam Kasus",
      process: "Metodologi",
      tiers: "Kemitraan",
      cta: "Mulai Kemitraan",
      themeToggle: "Ganti Tema",
      langToggle: "English"
    },
    hero: {
      tag: "Sistem Web Perusahaan Generasi Baru",
      headline: "Merancang batas baru lanskap digital berdaulat.",
      subheadline: "Studio privat untuk platform enterprise berkecepatan tinggi, aplikasi web ultra-responsif, dan antarmuka cloud misi-kritis. Diciptakan dengan presisi matematis dan standar estetika tertinggi.",
      ctaPrimary: "Jadwalkan Sprint Proyek",
      ctaSecondary: "Inspeksi Live Stack",
      stat1Val: "99.999%",
      stat1Label: "SLA Ketersediaan",
      stat2Val: "< 3.8ms",
      stat2Label: "Latensi Global P99",
      stat3Val: "240+",
      stat3Label: "Rute Edge Global",
      stat4Val: "48+",
      stat4Label: "Sistem Terpasang"
    },
    marquee: [
      "ANTARMUKA REAKTIF BERDAULAT",
      "TOPOLOGI EDGE TERDISTRIBUSI",
      "KRIPTOGRAFI KUANTUM RESISTEN",
      "MIKROSERVIS KUBERNETES",
      "ENGINE SHADER WEBGL KUSTOM",
      "AUTENTIKASI ZERO-TRUST",
      "WEBSOCKET LATENSI ULTRA-RENDAH",
      "ATELIER CLOUD ENTERPRISE"
    ],
    mission: {
      tag: "Standar Argon",
      headline: "Masa depan rekayasa perangkat lunak perusahaan bukanlah template murahan. Ini adalah keahlian seni digital kelas dunia.",
      col1Title: "Presisi Algoritmik",
      col1Text: "Setiap milidetik dihitung secara seksama. Kami membangun pengalaman web dengan akselerasi perangkat keras asli, aset micro-cached, dan engine tata letak termutakhir.",
      col2Title: "Keterlibatan Eksklusif",
      col2Text: "Kami hanya menerima maksimal tiga kemitraan enterprise dalam setiap kuartal. Setiap deployment dipandu langsung oleh arsitek senior dari Hari ke-0 hingga peluncuran global."
    },
    modules: {
      tag: "Kapabilitas Inti",
      title: "Empat Pilar Arsitektur. Tanpa Kompromi.",
      subtitle: "Dirancang khusus bagi para pemimpin teknologi yang membutuhkan kehadiran digital berkarakter kuat, keamanan tanpa celah, dan responsivitas kilat.",
      items: [
        {
          id: "01",
          name: "Canvas Neural Reaktif",
          category: "Komputasi Visual",
          desc: "Shader interaktif sub-milidetik, grafis WebGL kustom, dan mikro-interaksi tanpa hambatan yang memukau para pengambil keputusan enterprise.",
          latency: "1.8 ms",
          tech: "GLSL / WebGL2",
          cadence: "120 FPS"
        },
        {
          id: "02",
          name: "Mesh Edge Terdistribusi",
          category: "Infrastruktur Global",
          desc: "Jaringan komputasi edge multi-region global dengan perutean geolokasi otomatis, caching SSR dinamis, dan invalidasi cache instan.",
          latency: "3.2 ms",
          tech: "Anycast Edge",
          cadence: "240+ PoP"
        },
        {
          id: "03",
          name: "Protokol Siap-Kuantum",
          category: "Ketahanan Siber",
          desc: "Kontrol akses zero-trust ketat, pencatatan audit otomatis, dukungan kunci keamanan fisik, dan standar enkripsi pasca-kuantum.",
          latency: "0.4 ms",
          tech: "Kyber-768 / TLS 1.3",
          cadence: "Zero-Trust"
        },
        {
          id: "04",
          name: "Inti Backend Berdaulat",
          category: "Rekayasa Cloud",
          desc: "Mikroservis konkurensi tinggi, pipeline event streaming, kluster PostgreSQL terdistribusi, dan pipeline CI/CD blue-green otomatis.",
          latency: "4.1 ms",
          tech: "Go / Rust / k8s",
          cadence: "99.999% SLA"
        }
      ]
    },
    simulator: {
      tag: "Arsitektur Interaktif Langsung",
      title: "Inspeksi Topologi Sistem Secara Real-Time.",
      subtitle: "Pilih profil arsitektur di bawah ini untuk menginspeksi throughput simulasi, telemetri langsung, dan metrik perutean sistem.",
      tabs: [
        {
          id: "fintech",
          name: "FinTech Ultra-Scale",
          tagline: "Dashboard transaksi frekuensi tinggi & portal trading likuiditas",
          metrics: {
            throughput: "245.000 req/s",
            latency: "2.1 ms",
            p99: "4.8 ms",
            security: "mTLS + FIPS 140-3",
            encryption: "AES-256-GCM / Kyber-768",
            regions: "14 Pusat Data Global"
          },
          nodes: ["Gateway Edge (Frankfurt)", "Mesh Konsensus (Zurich)", "Penyimpanan Cepat (Tokyo)", "Buku Besar Audit (New York)"]
        },
        {
          id: "telemetry",
          name: "Telemetri Dirgantara",
          tagline: "Stream telemetri langsung dengan visualisasi geospasial 3D",
          metrics: {
            throughput: "580.000 evt/s",
            latency: "1.4 ms",
            p99: "3.1 ms",
            security: "VPN Berdaulat Air-Gapped",
            encryption: "Mesh Tahan Kuantum",
            regions: "8 Stasiun Bumi"
          },
          nodes: ["Node Uplink (Houston)", "Broker Stream (Stockholm)", "Pool Render 3D (Tokyo)", "Store Time-Series (Oregon)"]
        },
        {
          id: "healthcare",
          name: "Portal AI Medis & Klinis",
          tagline: "Portal web diagnostik multimodal & dokter bersertifikat HIPAA",
          metrics: {
            throughput: "92.000 req/s",
            latency: "3.6 ms",
            p99: "6.2 ms",
            security: "HIPAA / SOC2 Type II",
            encryption: "Homomorfik + Zero-Knowledge",
            regions: "6 Enklave Berdaulat"
          },
          nodes: ["Ingest Bersih (Jenewa)", "Enklave Inferensi (Dublin)", "Kubah Terenkripsi (Virginia)", "Portal Klinis (Sydney)"]
        },
        {
          id: "logistics",
          name: "Jaringan Logistik Otonom",
          tagline: "Portal orkestrasi & dispatch rantai pasok multimodal global",
          metrics: {
            throughput: "410.000 req/s",
            latency: "2.8 ms",
            p99: "5.4 ms",
            security: "Atestasi Perangkat Keras",
            encryption: "ChaCha20-Poly1305",
            regions: "22 Hub Pelabuhan"
          },
          nodes: ["Ingest Kapal (Singapura)", "Node Dispatch (Rotterdam)", "Pengoptimal Rute (Los Angeles)", "Kubah Arsip (London)"]
        }
      ]
    },
    cases: {
      tag: "Rekam Kasus Nyata",
      title: "Direkayasa untuk Pemimpin Industri.",
      subtitle: "Catatan proyek terpilih yang membuktikan kualitas arsitektur digital berdaulat tepat waktu dan tepat sasaran.",
      items: [
        {
          code: "REC-01",
          client: "Aetherial Capital",
          project: "Terminal Likuiditas Institusional",
          metric: "Peningkatan Konkurensi 4.2x",
          location: "Singapura & London",
          badge: "Teknologi Finansial",
          details: "Membangun terminal trading web kustom dengan kemampuan merender 120.000 pembaruan orderbook per detik tanpa lag antarmuka."
        },
        {
          code: "REC-02",
          client: "Vektor Aerospace",
          project: "Pusat Komando Telemetri Armada",
          metric: "Uptime Lapangan 99.999%",
          location: "Munich & Tokyo",
          badge: "Pertahanan & Dirgantara",
          details: "Membangun dashboard pelacakan geospasial WebGL interaktif yang menyinkronkan data satelit di tiga fasilitas kontrol misi global."
        },
        {
          code: "REC-03",
          client: "Helios Genomic",
          project: "Aplikasi Web Riset Kedokteran Presisi",
          metric: "Pencarian Genom < 50ms",
          location: "Zurich & Boston",
          badge: "Bioteknologi",
          details: "Merancang portal klinisi ultra-aman dengan visualisator sekuens DNA terenkripsi dan kolaborasi catatan medis real-time."
        },
        {
          code: "REC-04",
          client: "Centauri Cloud",
          project: "Portal Infrastruktur Edge Global",
          metric: "180 Juta Invokasi Bulanan",
          location: "San Francisco & Sydney",
          badge: "SaaS Enterprise",
          details: "Merancang control plane modern untuk developer dengan streaming log serverless instan dan visualisasi bandwidth real-time."
        }
      ]
    },
    methodology: {
      tag: "Protokol Rekayasa",
      title: "Dari Cetak Biru Awal Hingga Edge Global.",
      steps: [
        {
          num: "01",
          title: "Kartografi Topologi & Arsitektur UX",
          desc: "Analisis menyeluruh identitas brand, alur pengguna bernilai tinggi, dan spesifikasi teknis sebelum menulis sebaris kode produksi."
        },
        {
          num: "02",
          title: "Kode Presisi Tinggi & Mikro-Interaksi",
          desc: "Pengembangan frontend murni dengan animasi CSS kustom, tata letak fluid responsif, dan bebas dari dependensi framework berlebih."
        },
        {
          num: "03",
          title: "Deployment Edge Global & Uji Beban Ketat",
          desc: "Rollout CI/CD multi-region otomatis, audit skor Lighthouse 100/100, uji penetrasi keamanan, dan pemantauan telemetri 24/7."
        }
      ]
    },
    tiers: {
      tag: "Kerangka Kemitraan",
      title: "Terstruktur untuk Kolaborasi Berdampak Nyata.",
      toggleQuarterly: "Cakupan Sprint",
      toggleAnnual: "Cakupan Retainer (Efisiensi 15%)",
      featuredBadge: "Paling Diminati Enterprise",
      items: [
        {
          tier: "Tingkat 01",
          name: "Sprint Desain & Prototipe",
          badge: "Keterlibatan 4 Minggu",
          priceQuarterly: "Rp 290.000.000",
          priceAnnual: "Rp 246.500.000",
          period: "per sprint",
          desc: "Prototipe interaktif ketelitian tinggi, token design system terpadu, dan spesifikasi arsitektur teknis lengkap.",
          features: [
            "Desain Lengkap UX/UI di Figma",
            "Prototipe Interaktif Berfungsi (HTML/CSS)",
            "File Token & Design System Kustom",
            "Cetak Biru Arsitektur Teknis",
            "Strategi Optimasi Kinerja & SEO"
          ],
          cta: "Pesan Jadwal Sprint"
        },
        {
          tier: "Tingkat 02",
          name: "Aplikasi Web Enterprise Unggulan",
          badge: "Paling Diminati",
          featured: true,
          priceQuarterly: "Rp 590.000.000",
          priceAnnual: "Rp 501.500.000",
          period: "pemberian penuh",
          desc: "Website dan aplikasi web enterprise lengkap dari hulu ke hilir dengan animasi kustom, multi-bahasa, dan hosting edge global.",
          features: [
            "Semua Fitur di Tingkat 01",
            "Mikro-Interaksi & Shader 60 FPS Kustom",
            "Arsitektur Penuh Multi-Bahasa (ID/EN)",
            "Deployment Edge di Vercel / Cloudflare",
            "Standar Aksesibilitas Ketat WCAG 2.1 AA",
            "Garansi Kinerja Lighthouse 100/100",
            "3 Bulan Dukungan Rekayasa Khusus"
          ],
          cta: "Bangun Proyek Unggulan"
        },
        {
          tier: "Tingkat 03",
          name: "Retainer Rekayasa Berdaulat",
          badge: "Tim Khusus Terdedikasi",
          priceQuarterly: "Rp 980.000.000",
          priceAnnual: "Rp 833.000.000",
          period: "per kuartal",
          desc: "Pod rekayasa dan desain senior yang diintegrasikan langsung ke dalam organisasi Anda untuk inovasi digital berkelanjutan.",
          features: [
            "Semua Fitur di Tingkat 02",
            "Arsitek Utama UI/UX Berdedikasi Penuh",
            "Pengembangan Mikroservis & API Kustom",
            "SLA Produksi 24/7 & Penanganan Darurat",
            "Audit Keamanan Infrastruktur Berkala",
            "Komite Pengarah Arsitektur Eksekutif"
          ],
          cta: "Mulai Retainer"
        }
      ]
    },
    rfp: {
      tag: "Mulai Kolaborasi",
      title: "Bangun aset digital unggulan Anda bersama Antigravity Argon.",
      subtitle: "Beri tahu kami mengenai profil perusahaan dan kebutuhan spesifik proyek Anda. Kami akan merespons dengan ringkasan arsitektur lengkap dalam waktu 24 jam.",
      nameLabel: "Nama Lengkap Anda",
      namePlaceholder: "contoh: Vincentius Bryan",
      companyLabel: "Nama Perusahaan / Institusi",
      companyPlaceholder: "contoh: PT Multi Dinamika Teknologi",
      emailLabel: "Email Bisnis Resmi",
      emailPlaceholder: "bryan@perusahaan.co.id",
      scopeLabel: "Cakupan Proyek yang Dibutuhkan",
      scopeOptions: [
        "Website Perusahaan Unggulan",
        "Aplikasi Web Skala Besar",
        "Modernisasi UI & Design System",
        "Audit Kinerja & Infrastruktur Edge"
      ],
      budgetLabel: "Perkiraan Rentang Investasi",
      budgetOptions: [
        "Rp 250 Jt - Rp 500 Jt (Sprint Cepat)",
        "Rp 500 Jt - Rp 1 Milyar (Website Enterprise)",
        "> Rp 1 Milyar (Transformasi Digital Menyeluruh)"
      ],
      notesLabel: "Tujuan Proyek & Spesifikasi Teknis Khusus",
      notesPlaceholder: "Jelaskan target peluncuran, stack saat ini, dan fitur utama yang diinginkan...",
      submitBtn: "Kirimkan Permintaan Arsitektur",
      successTitle: "Transmisi Berhasil Dikonfirmasi",
      successDesc: "Spesifikasi proyek Anda telah tercatat aman dalam registri sistem kami. Kode Referensi Anda:",
      successClose: "Tutup & Mengerti"
    },
    footer: {
      brandDesc: "Antigravity Argon adalah atelier rekayasa perangkat lunak elit yang berspesialisasi dalam sistem web berkinerja ekstrem, antarmuka interaktif kustom, dan arsitektur digital berdaulat.",
      rights: "© 2026 Antigravity Argon Studio. Seluruh aset digital, cetak biru arsitektur, dan sistem interaktif dilindungi hak cipta.",
      status: "SISTEM BEROPERASI NORMAL • EDGE TERSINKRONISASI",
      links: ["Postur Keamanan", "Standar Arsitektur", "Perjanjian SLA", "Repositori GitHub", "Deployment Live Vercel"]
    }
  }
};
