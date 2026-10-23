"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Featured items (matching reference-style section-1.png: 4 tall portrait cards)
  const featuredTreatments = [
    {
      title: "Anten 100",
      subtitle: "Tekanan Darah Tinggi",
      image: "/assets/product-1.webp",
      link: "#produk",
    },
    {
      title: "Dilong Kapsul",
      subtitle: "Pereda Demam & Tipes",
      image: "/assets/product-2.webp",
      link: "#produk",
    },
    {
      title: "Hou Tung Pien",
      subtitle: "Jamu Sakit Tenggorokan",
      image: "/assets/product-3.webp",
      link: "#produk",
    },
    {
      title: "Kapsuma Ginseng",
      subtitle: "Penambah Nafsu Makan",
      image: "/assets/product-4.webp",
      link: "#produk",
    },
  ];

  // Product collection (matching reference-style section-2.png: Cosmetics / Jamu & Herbal cards)
  const products = [
    {
      id: "anten100",
      brand: "THE LINE MELASTOMA",
      title: "Anten 100 Tablet",
      category: "Darah Tinggi & Hipertensi",
      price: "Rp 49.000",
      badge: "BPOM RESMI",
      image: "/assets/product-1.webp",
    },
    {
      id: "dilong",
      brand: "MELASTOMA OFFICIAL",
      title: "Dilong Kapsul Cacing (Botol)",
      category: "Demam, Tipes & Daya Tahan",
      price: "Rp 48.015",
      oldPrice: "Rp 59.000",
      badge: "OBRAL",
      image: "/assets/product-2.webp",
    },
    {
      id: "houtungpien",
      brand: "MELASTOMA BRAND",
      title: "Hou Tung Pien (Jamu Tenggorokan)",
      category: "Panas Dalam & Radang",
      price: "Rp 23.100",
      oldPrice: "Rp 25.500",
      badge: "BEST SELLER",
      image: "/assets/product-3.webp",
    },
    {
      id: "kapsuma",
      brand: "MELASTOMA GINSENG",
      title: "Kapsuma Kianpi Pil (60 Kapsul)",
      category: "Penambah Nafsu Makan & Stamina",
      price: "Rp 69.300",
      oldPrice: "Rp 87.000",
      badge: "OBRAL",
      image: "/assets/product-4.webp",
    },
    {
      id: "herbal-care-5",
      brand: "MELASTOMA NATURAL",
      title: "SKS Herbal Vitality Blend",
      category: "Stamina & Daya Tahan Tubuh",
      price: "Rp 54.000",
      badge: "ORIGINAL",
      image: "/assets/product-5.webp",
    },
    {
      id: "pilandar",
      brand: "MELASTOMA SPECIAL",
      title: "Pilandar (Tung Shueh Pill)",
      category: "Peredaran Darah & Kolesterol",
      price: "Rp 45.000",
      badge: "RESEP ASLI",
      image: "/assets/product-6.webp",
    },
  ];

  // Packs (matching reference-style section-3.png: DC Packs luxury styling)
  const packs = [
    {
      name: "SKS Platinum Care",
      tier: "PLATINUM PACK",
      badge: "PEMULIHAN TOTAL",
      styleClass: styles.packVisualPlatinum,
      accentColor: "#e5e7eb",
      desc: "Kombinasi komprehensif Kapsuma, Dilong Cacing, dan Hou Tung Pien untuk mengembalikan daya tahan tubuh & nafsu makan secara intensif.",
      price: "Rp 135.000",
    },
    {
      name: "SKS Gold Heart & Vigor",
      tier: "GOLD PACK",
      badge: "SIRKULASI & JANTUNG",
      styleClass: styles.packVisualGold,
      accentColor: "#fef3c7",
      desc: "Formula sinergi Anten 100 dan Pilandar khusus membantu menstabilkan tekanan darah dan melancarkan sirkulasi pembuluh darah.",
      price: "Rp 89.000",
    },
    {
      name: "SKS Classic Defense",
      tier: "CLASSIC PACK",
      badge: "IMUNITAS HARIAN",
      styleClass: styles.packVisualClassic,
      accentColor: "#374151",
      desc: "Paket perlindungan saluran pernapasan & tenggorokan keluarga dari cuaca ekstrem dan panas dalam dengan bahan 100% herbal.",
      price: "Rp 68.000",
    },
  ];

  // Treatments / Solutions category (matching reference-style section-4.png: 5 tall portrait cards)
  const categories = [
    {
      title: "Hipertensi",
      subtitle: "Lihat Produk ↳",
      image: "/assets/section-1-img-2.webp",
    },
    {
      title: "Pencernaan",
      subtitle: "Lihat Produk ↳",
      image: "/assets/section-5-img.png",
    },
    {
      title: "Demam & Tipes",
      subtitle: "Lihat Produk ↳",
      image: "/assets/section-3-img.webp",
    },
    {
      title: "Tenggorokan",
      subtitle: "Lihat Produk ↳",
      image: "/assets/article-img-2.webp",
    },
    {
      title: "Sendi & Otot",
      subtitle: "Lihat Produk ↳",
      image: "/assets/article-img-1.webp",
    },
  ];

  // Testimonials (matching reference-style section-5.png: “the opinion of our customers”)
  const testimonials = [
    {
      number: "01",
      name: "Hendra Wijaya",
      role: "KONSUMEN SETIA (6 TAHUN)",
      avatar: "/assets/article-img-3.webp",
      text: "“Setelah sakit berkepanjangan dan berat badan turun drastis, saya rutin mengonsumsi Kapsuma. Dalam 3 minggu nafsu makan pulih normal dan tubuh kembali bertenaga. Sangat terbukti tanpa efek samping kimiawi.”",
    },
    {
      number: "02",
      name: "Siti Rahmawati",
      role: "VERIFIED BUYER",
      avatar: "/assets/article-img-4.webp",
      text: "“Hou Tung Pien jadi pertolongan pertama di rumah setiap ada yang kena gejala radang tenggorokan atau panas dalam. Tenggorokan langsung terasa adem dan nyaman. Melastoma kualitasnya konsisten sejak dulu.”",
    },
    {
      number: "03",
      name: "Bambang Santoso",
      role: "KONSUMEN HERBAL",
      avatar: "/assets/article-img-5.webp",
      text: "“Tekanan darah saya lebih terkontrol sejak rutin pendampingan Anten 100. Ditambah ketenangan hati karena produk PT. Sinar Kaliman Sehat resmi terdaftar di BPOM dan bersertifikat CPOTB standar pabrik modern.”",
    },
  ];

  // Educational Articles (from original site converted into sleek modern cards)
  const articles = [
    {
      tag: "EDUKASI JAMU",
      title: "Hou Tung Pien Obat Apa? Kegunaan, Komposisi, & Aturan Pakai",
      excerpt:
        "Panduan lengkap mengenai khasiat herbal tradisional Hou Tung Pien untuk meredakan panas dalam, sakit tenggorokan, dan sariawan secara alami.",
      readTime: "4 menit baca",
      image: "/assets/article-img-2.webp",
      link: "#",
    },
    {
      tag: "KESEHATAN VASKULAR",
      title: "Mengenal Pilandar: Khasiat Alami Untuk Melancarkan Sirkulasi Darah",
      excerpt:
        "Bagaimana ramuan herbal pilihan bekerja membantu elastisitas pembuluh darah dan mengatasi pegal linu akibat peredaran darah kurang lancar.",
      readTime: "5 menit baca",
      image: "/assets/article-img-6.webp",
      link: "#",
    },
    {
      tag: "STANDAR INDUSTRI",
      title: "Pentingnya Sertifikasi CPOTB dari BPOM Dalam Pembuatan Obat Tradisional",
      excerpt:
        "Melihat standar higienis dan kendali mutu laboratorium modern di PT. Sinar Kaliman Sehat untuk menjamin keamanan setiap butir kapsul jamu.",
      readTime: "6 menit baca",
      image: "/assets/section-1-img-1.webp",
      link: "#",
    },
  ];

  // Product categories for filter tabs
  const categoryFilters = [
    { id: "all", label: "Semua Produk" },
    { id: "darah-tinggi", label: "Darah Tinggi" },
    { id: "demam", label: "Demam & Tipes" },
    { id: "tenggorokan", label: "Tenggorokan" },
    { id: "nafsu-makan", label: "Nafsu Makan" },
    { id: "sirkulasi", label: "Sirkulasi Darah" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => {
          if (activeCategory === "darah-tinggi") return p.category.includes("Darah Tinggi");
          if (activeCategory === "demam") return p.category.includes("Demam");
          if (activeCategory === "tenggorokan") return p.category.includes("Panas Dalam");
          if (activeCategory === "nafsu-makan") return p.category.includes("Nafsu Makan");
          if (activeCategory === "sirkulasi") return p.category.includes("Peredaran Darah") || p.category.includes("Stamina");
          return true;
        });

  return (
    <div className={styles.page}>
      <div className="site-wrapper">
        {/* =========================================================================
            HEADER / NAVBAR (Transparent Glassmorphic Bar)
            ========================================================================= */}
        <header className={styles.navbar}>
          <div className={styles.navBrand}>
            <Link href="/">
              <Image
                src="/assets/logo.webp"
                alt="Sinar Kaliman Sehat Logo"
                width={160}
                height={40}
                className={styles.brandLogo}
                priority
              />
            </Link>
          </div>

          <nav>
            <ul className={styles.navLinks}>
              <li>
                <a href="#featured" className={styles.navLink}>
                  Produk Unggulan <span className={styles.navChevron}>▾</span>
                </a>
              </li>
              <li>
                <a href="#produk" className={styles.navLink}>
                  Koleksi Herbal <span className={styles.navChevron}>▾</span>
                </a>
              </li>
              <li>
                <a href="#paket" className={styles.navLink}>
                  Paket Sehat
                </a>
              </li>
              <li>
                <a href="#solusi" className={styles.navLink}>
                  Khasiat & Solusi
                </a>
              </li>
              <li>
                <a href="#standar-mutu" className={styles.navLink}>
                  Standar CPOTB
                </a>
              </li>
              <li>
                <a href="#artikel" className={styles.navLink}>
                  Artikel
                </a>
              </li>
              <li>
                <a href="#kontak" className={styles.navLink}>
                  Kontak
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.navActions}>
            <a
              href="#produk"
              className={styles.iconBtn}
              title="Katalog Produk"
              aria-label="Katalog Produk"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </a>
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className={styles.mobileNavDropdown}>
              <a href="#featured" onClick={() => setMobileMenuOpen(false)}>Produk Unggulan</a>
              <a href="#produk" onClick={() => setMobileMenuOpen(false)}>Koleksi Herbal</a>
              <a href="#paket" onClick={() => setMobileMenuOpen(false)}>Paket Sehat</a>
              <a href="#solusi" onClick={() => setMobileMenuOpen(false)}>Khasiat & Solusi</a>
              <a href="#standar-mutu" onClick={() => setMobileMenuOpen(false)}>Standar Mutu CPOTB</a>
              <a href="#artikel" onClick={() => setMobileMenuOpen(false)}>Artikel</a>
              <a href="#kontak" onClick={() => setMobileMenuOpen(false)}>Kontak</a>
            </div>
          )}
        </header>

        {/* =========================================================================
            HERO SECTION (Matching public/reference-style/hero.png)
            ========================================================================= */}
        <section className={styles.heroContainer}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
            poster="/assets/section-1-img-2.webp"
          >
            <source src="/assets/bg-hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <div className="pill-badge pill-badge-light">
              MELASTOMA BRAND • SEJAK 1980
            </div>
            <h1 className={styles.heroTitle}>
              HERBAL &<br />
              WELLNESS
            </h1>
            <p className={styles.heroDescription}>
              Menghadirkan kebaikan alam dengan formulasi herbal berstandar CPOTB
              dan izin resmi BPOM. Solusi kesehatan alami terpercaya untuk
              menemani produktivitas Anda setiap hari.
            </p>
            <div className={styles.heroActions}>
              <a href="#featured" className={styles.heroBtnPrimary}>
                Jelajahi Produk Pilihan <span>↓</span>
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Sinar%20Kaliman%20Sehat%2C%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroBtnSecondary}
              >
                Konsultasi Ahli Kami
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: FEATURED TREATMENTS / PRODUCTS (Matching reference-style/section-1.png)
            ========================================================================= */}
        <section id="featured" className={styles.sectionFeatured}>
          <h2 className="section-title section-title-caps">
            FEATURED PRODUCTS
          </h2>

          <div className={styles.featuredGrid}>
            {featuredTreatments.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={styles.featuredCard}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.featuredCardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className={styles.featuredCardOverlay} />
                <div className={styles.featuredCardContent}>
                  <h3 className={styles.featuredCardTitle}>{item.title}</h3>
                  <span className={styles.featuredCardLink}>
                    See details ↳
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PRODUCTS / KOLEKSI HERBAL (Matching reference-style/section-2.png)
            ========================================================================= */}
        <section id="produk" className={styles.sectionProducts}>
          <div className="pill-badge">PRODUCTS</div>
          <h2 className="section-title">Koleksi Herbal Melastoma</h2>

          {/* Category Filter Pills */}
          <div className={styles.filterPillsRow}>
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterPill} ${
                  activeCategory === cat.id ? styles.filterPillActive : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((prod) => (
              <div key={prod.id} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <span
                    className={`${styles.productBadge} ${
                      prod.badge === "OBRAL" ? styles.productBadgeRed : ""
                    }`}
                  >
                    {prod.badge}
                  </span>
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    width={320}
                    height={320}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productCategory}>{prod.brand}</span>
                  <h3 className={styles.productTitle}>{prod.title}</h3>
                  <div className={styles.productPrice}>
                    {prod.oldPrice && (
                      <span className={styles.productPriceOld}>
                        {prod.oldPrice}
                      </span>
                    )}
                    <span>{prod.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: DC PACKS / PAKET SOLUSI (Matching reference-style/section-3.png)
            ========================================================================= */}
        <section id="paket" className={styles.sectionPacks}>
          <div className="carousel-dots" style={{ marginBottom: "24px" }}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>

          <h2 className="section-title">Paket Solusi Kesehatan</h2>

          <div className={styles.packsGrid}>
            {packs.map((pack, index) => (
              <div key={index} className={styles.packCard}>
                <div className={`${styles.packVisualWrap} ${pack.styleClass}`}>
                  <div
                    style={{
                      textAlign: "center",
                      color: pack.accentColor,
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        opacity: 0.85,
                      }}
                    >
                      SINAR KALIMAN SEHAT
                    </div>
                    <div
                      style={{
                        fontSize: "1.45rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }}
                    >
                      {pack.tier}
                    </div>
                    <div
                      style={{
                        marginTop: "12px",
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        border: `1px solid ${pack.accentColor}`,
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      {pack.badge}
                    </div>
                  </div>
                </div>

                <h3 className={styles.packCardTitle}>{pack.name}</h3>
                <div className={styles.packCardPrice}>{pack.price}</div>
                <p className={styles.packCardDesc}>{pack.desc}</p>

                <a
                  href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20pesan%20${encodeURIComponent(
                    pack.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.packBtn}
                >
                  Pesan Paket Ini →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: TREATMENTS / KHASIAT KATEGORI (Matching reference-style/section-4.png)
            ========================================================================= */}
        <section id="solusi" className={styles.sectionTreatments}>
          <div className="pill-badge">CLINIC & SOLUTIONS</div>
          <h2 className="section-title">Kategori Solusi Tubuh</h2>

          <div className={styles.treatmentsGrid}>
            {categories.map((cat, idx) => (
              <a key={idx} href="#produk" className={styles.treatmentCard}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className={styles.treatmentCardImage}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className={styles.treatmentCardOverlay} />
                <div className={styles.treatmentCardContent}>
                  <h3 className={styles.treatmentCardTitle}>{cat.title}</h3>
                  <span className={styles.treatmentCardLink}>
                    {cat.subtitle}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="carousel-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: TESTIMONIALS (Matching reference-style/section-5.png)
            ========================================================================= */}
        <section className={styles.sectionTestimonials}>
          <div className={styles.testimonialHeader}>
            <h2 className={styles.testimonialTitle}>
              “kata mereka tentang melastoma”
            </h2>
            <div className={styles.testimonialArrow}>↴</div>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <div className={styles.testimonialUser}>
                  <div className={styles.testimonialUserInfo}>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={64}
                      height={64}
                      className={styles.testimonialAvatar}
                    />
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                  </div>
                  <div className={styles.testimonialIndex}>{t.number}</div>
                </div>
                <p className={styles.testimonialQuote}>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: STANDAR MUTU CPOTB & PRODUKSI MODERN
            ========================================================================= */}
        <section id="standar-mutu" className={styles.sectionStandards}>
          <div className={styles.standardsContainer}>
            <div className={styles.standardsContent}>
              <div className="pill-badge">STANDAR & KUALITAS</div>
              <h2 className={styles.standardsTitle}>
                Kebaikan Alam Yang Dipadukan Dengan Produksi Standar CPOTB Modern
              </h2>
              <p className={styles.standardsDesc}>
                Setiap butir jamu Melastoma diproduksi di fasilitas pabrik PT
                Sinar Kaliman Sehat yang telah memenuhi standar Cara Pembuatan
                Obat Tradisional yang Baik (CPOTB) dari BPOM RI.
              </p>

              <div className={styles.standardsList}>
                <div className={styles.standardItem}>
                  <div className={styles.standardIcon}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.standardItemTitle}>
                      100% Herbal Pilihan & Higienis
                    </h4>
                    <p className={styles.standardItemText}>
                      Bahan baku alami diseleksi ketat di laboratorium untuk
                      memastikan kemurnian senyawa aktif.
                    </p>
                  </div>
                </div>

                <div className={styles.standardItem}>
                  <div className={styles.standardIcon}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.standardItemTitle}>
                      Izin Edar Resmi BPOM RI & Halal
                    </h4>
                    <p className={styles.standardItemText}>
                      Memberikan kepastian rasa aman, bebas dari bahan kimia obat
                      berbahaya, dan teruji secara klinis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.standardsVisual}>
              <Image
                src="/assets/section-1-img-1.webp"
                alt="Laboratorium Sinar Kaliman Sehat"
                width={300}
                height={280}
                className={styles.standardPhoto}
              />
              <Image
                src="/assets/section-3-img.webp"
                alt="Penelitian Bahan Baku Herbal"
                width={300}
                height={280}
                className={styles.standardPhoto}
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: ARTIKEL & EDUKASI KESEHATAN
            ========================================================================= */}
        <section id="artikel" className={styles.sectionArticles}>
          <div className="pill-badge">EDUKASI & INSIGHT</div>
          <h2 className="section-title">Artikel & Tips Kesehatan</h2>

          <div className={styles.articlesGrid}>
            {articles.map((art, idx) => (
              <article key={idx} className={styles.articleCard}>
                <div className={styles.articleImageWrap}>
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className={styles.articleImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.articleBody}>
                  <span className={styles.articleTag}>{art.tag}</span>
                  <h3 className={styles.articleHeading}>{art.title}</h3>
                  <p className={styles.articleExcerpt}>{art.excerpt}</p>
                  <div className={styles.articleFooter}>
                    <span>{art.readTime}</span>
                    <span style={{ fontWeight: 600, color: "#17181c" }}>
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================================
            FOOTER (Matching public/reference-style/footer.png)
            ========================================================================= */}
        <footer id="kontak" className={styles.footerContainer}>
          <div className={styles.footerWatermark}>HERBAL & WELLNESS</div>

          <div className={styles.footerGrid}>
            <div className={styles.footerBrandCol}>
              <Image
                src="/assets/logo.webp"
                alt="Sinar Kaliman Sehat"
                width={180}
                height={48}
                className={styles.footerLogo}
              />
              <a
                href="https://wa.me/6281234567890?text=Halo%20Sinar%20Kaliman%20Sehat%2C%20saya%20ingin%20jadwalkan%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerCtaBtn}
              >
                Jadwalkan Konsultasi →
              </a>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Kontak</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                  <strong>Layanan Konsumen:</strong>
                  <br />
                  +62 21 5565-XXXX
                </li>
                <li className={styles.footerItem}>
                  <strong>WhatsApp Resmi:</strong>
                  <br />
                  +62 812-3456-7890
                </li>
                <li className={styles.footerItem}>
                  <strong>Jam Operasional:</strong>
                  <br />
                  Senin - Jumat: 08.00 - 17.00 WIB
                </li>
                <li className={styles.footerItem}>
                  <strong>Email:</strong>
                  <br />
                  info@sinarkalimansehat.co.id
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Kantor & Pabrik</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                  <strong>PT. Sinar Kaliman Sehat</strong>
                  <br />
                  Kawasan Industri Manis
                  <br />
                  Jl. Manis Raya No. 9, Tangerang
                  <br />
                  Banten 15136, Indonesia
                </li>
                <li className={styles.footerItem}>
                  <strong>Sertifikasi:</strong>
                  <br />
                  Standar CPOTB BPOM RI
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.footerColTitle}>Social & Official Store</h4>
              <ul className={styles.footerList}>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerSocialLink}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    @sinarkalimansehat
                  </a>
                </li>
                <li>
                  <a
                    href="https://tokopedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerSocialLink}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Tokopedia Official Store
                  </a>
                </li>
                <li>
                  <a
                    href="https://shopee.co.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerSocialLink}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    Shopee Mall
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div>
              Copyright © 2026 PT Sinar Kaliman Sehat - All Rights Reserved
            </div>
            <div>Melastoma Brand • Obat Tradisional Terpercaya</div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          FLOATING WHATSAPP BUTTON (Matching bottom right green pill from reference)
          ========================================================================= */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20Sinar%20Kaliman%20Sehat%2C%20saya%20ingin%20konsultasi%20produk%20herbal"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp Kami"
      >
        <span>WhatsApp Kami</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.81 1.56 5.37L2 22l4.75-1.52a9.99 9.99 0 0 0 5.28 1.48c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.31a8.27 8.27 0 0 1-4.22-1.15l-.3-.18-3.13 1 1.02-3.05-.2-.32a8.27 8.27 0 0 1-1.27-4.47c0-4.57 3.72-8.29 8.29-8.29s8.29 3.72 8.29 8.29c0 4.58-3.72 8.3-8.29 8.3zm4.55-6.22c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.74 4.34 3.84.61.26 1.08.42 1.45.54.61.19 1.17.17 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3z" />
        </svg>
      </a>
    </div>
  );
}
