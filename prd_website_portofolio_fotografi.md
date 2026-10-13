
# Product Requirement Document (PRD)
## Website Portofolio Fotografi Personal

---

### 1. Ringkasan Eksekutif (Executive Summary)
Website ini adalah platform portofolio fotografi minimalis dan performan tinggi yang dirancang untuk menampilkan karya-karya fotografi secara visual, elegan, dan cepat. Pengunjung dapat mengeksplorasi koleksi foto berdasarkan kategori, melihat detail teknis/kamera (EXIF data), dan menghubungi fotografer untuk kolaborasi atau proyek komersial.

---

### 2. Tujuan & Sasaran Proyek (Goals & Objectives)
* **Tujuan Utama:** Menampilkan karya fotografi terbaik dengan tampilan visual premium dan waktu muat (*load time*) yang sangat cepat.
* **Target Sasarans:**
  * Klien potensial (brand, agency, majalah, atau pasangan untuk event/wedding).
  * Pengagum seni visual & komunitas fotografer.
* **Metrik Keberhasilan (KPIs):**
  * Core Web Vitals tinggi (Performance & LCP score > 90 di Lighthouse).
  * Waktu panggil/load gambar di bawah 1.5 detik (menggunakan otomasi Next.js Image Optimization).
  * Terjadi *lead conversion* dari halaman kontak atau tombol reservasi/inquiry.

---

### 3. Pengguna Sasaran (User Persona)
1. **Klien Komersial / Brand Manager:** Mencari fotografer profesional dengan tema/kategori tertentu (Street, Landscape, Portrait, Architecture).
2. **Pengunjung Umum / Kolektor:** Menikmati estetika visual, tertarik pada aspek teknis fotografi (kamera, lensa, lokasi).

---

### 4. Spesifikasi Fitur (Feature Specifications)

#### Fitur Utama (Core Features)
1. **Hero / Landing Gallery:**
   * Tampilan *masonry grid* atau *fullscreen carousel* responsif yang menampilkan foto-foto unggulan (*curated collection*).
   * Efek *smooth hover* dan pemuatan gambar bertahap (*blur-up preview*).

2. **Kategori / Filter Album:**
   * Pengelompokan foto berdasarkan tema (contoh: *Street, Portrait, Landscape, Minimalist, Editorial*).
   * Filter dinamis tanpa *reload* halaman (menggunakan App Router / State React).

3. **Lightbox / Image Detail Modal:**
   * Ketika foto diklik, terbuka modal *fullscreen* berkualitas tinggi.
   * Menampilkan Metadata EXIF opsional (Kamera, Lensa, Focal Length, Aperture, ISO, Shutter Speed, Lokasi).
   * Tombol navigasi (Next/Previous, Keyboard Shortcuts Arrow keys).

4. **Halaman / Seksi "About & Gear":**
   * Cerita singkat fotografer dan pendekatan artistiknya.
   * Daftar *Gear/Equipment* yang biasa digunakan.

5. **Halaman / Seksi Kontak (Inquiry Form):**
   * Formulir pemesanan/pertanyaan terintegrasi.
   * Tautan media sosial (Instagram, Unsplash, Behance, Email, WhatsApp).

6. **Dark / Light Mode Toggle:**
   * Default mode gelap (*Dark Mode*) untuk menekankan kontras warna foto, dengan opsi ubah ke mode terang (*Light Mode*).

---

### 5. Kebutuhan Non-Fungsional (Non-Functional Requirements)

* **Performa & Optimasi Gambar:**
  * Menggunakan format gambar modern (`.webp` atau `.avif`).
  * Implementasi *Lazy Loading* & CDN untuk gambar.
* **SEO (Search Engine Optimization):**
  * Dynamic Open Graph metadata untuk membagikan tautan foto ke media sosial.
  * Tag `alt` otomatis/kustom untuk aksesibilitas dan SEO.
* **Responsivitas:**
  * Fully Responsive di seluruh resolusi layar (Mobile, Tablet, Desktop, Ultra-wide).

---

### 6. Teknologi yang Digunakan (Tech Stack)
* **Framework:** Next.js (App Router, React 19/18, TypeScript)
* **Styling:** Tailwind CSS + Framer Motion (untuk animasi)
* **Icons:** Lucide React
* **Image Management:** Next.js Image Optimization / Cloudinary / Unsplash API