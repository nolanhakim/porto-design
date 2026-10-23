export const GALLERY_ASSETS = [
  "/asset/asset1.webp",
  "/asset/asset2.webp",
  "/asset/asset3.webp",
  "/asset/asset4.webp",
  "/asset/asset5.webp",
  "/asset/asset6.webp",
  "/asset/asset7.webp",
  "/asset/asset8.webp",
  "/asset/asset9.webp",
  "/asset/asset10.webp",
  "/asset/asset13.webp",
  "/asset/asset14.webp",
  "/asset/asset15.webp",
  "/asset/asset16.webp",
  "/asset/asset17.webp",
  "/asset/asset18.webp",
];

export interface CoverflowSlideItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
}

export const COVERFLOW_SLIDES: CoverflowSlideItem[] = [
  {
    src: "/asset/asset1.webp",
    alt: "Poster promo nasi suwir dan nasi katsu dengan headline Jarang Dicoba, Padahal Enak Banget",
    title: "Jarang Dicoba, Padahal Enak Banget",
    subtitle: "Promo nasi suwir & nasi katsu",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset2.webp",
    alt: "Poster promo minuman sehat Si Hijau dengan harga Rp 15.000 per pcs",
    title: "Si Hijau yang Bikin Hidup Lebih Sehat",
    subtitle: "Minuman sehat, Rp 15.000 per pcs",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset3.webp",
    alt: "Poster promo Seporsi Kalahan dengan ayam Rp 12.000",
    title: "Seporsi Kalahan Sebelum Memulai Hari",
    subtitle: "Promo ayam Rp 12.000",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset4.webp",
    alt: "Poster promo Agustus dengan penawaran berlaku sepanjang bulan",
    title: "Promo Agustus",
    subtitle: "Penawaran berlaku sepanjang bulan",
    meta: [
      { label: "Category", value: "Promotion" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset5.webp",
    alt: "Poster snek kripik kulit ayam pedas kemasan 250 gram",
    title: "Pedasnya Bikin Nagih",
    subtitle: "Kripik kulit ayam pedas, 250 gram",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset6.webp",
    alt: "Poster promo Gemilang dengan headline Jarang, Padahal Enak Banget",
    title: "Jarang, Padahal Enak Banget",
    subtitle: "Gemilang · Promo menu",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset7.webp",
    alt: "Poster testimoni pelanggan Cahaya Gemilang",
    title: "Kata Mereka",
    subtitle: "Cahaya Gemilang · Testimoni pelanggan",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Testimonial Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset8.webp",
    alt: "Poster menu baru dengan varian nasi kulit",
    title: "Menu Baru, Wajib Banget Dicoba",
    subtitle: "Varian nasi kulit terbaru",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset9.webp",
    alt: "Poster daftar harga enam varian nasi kulit Cahaya Gemilang",
    title: "Harga Makin Bersahabat",
    subtitle: "Enam varian nasi kulit Cahaya Gemilang",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Feed Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset10.webp",
    alt: "Poster produk premium Chokaido Tomorokoshi dengan harga Rp 71.500 per pcs",
    title: "Chokaido Tomorokoshi",
    subtitle: "Produk premium, manis dan berair",
    meta: [
      { label: "Category", value: "Food & Beverage" },
      { label: "Deliverable", value: "Product Post" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset13.webp",
    alt: "Poster Rumasa dengan promo diskon untuk pasangan pengantin baru",
    title: "Diskon Pasutri Baru",
    subtitle: "Rumasa · Promo pasangan pengantin",
    meta: [
      { label: "Category", value: "Real Estate" },
      { label: "Project", value: "Rumasa" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset14.webp",
    alt: "Poster Rumasa dengan penawaran desain awal gratis untuk konsultasi",
    title: "Gratis Desain untuk Konsultasi",
    subtitle: "Rumasa · Desain awal tanpa biaya",
    meta: [
      { label: "Category", value: "Real Estate" },
      { label: "Project", value: "Rumasa" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset15.webp",
    alt: "Poster Rumasa tentang penyebab bangun rumah sering overbudget",
    title: "Kenapa Bangun Rumah Sering Overbudget?",
    subtitle: "Rumasa · Empat penyebab utama",
    meta: [
      { label: "Category", value: "Real Estate" },
      { label: "Project", value: "Rumasa" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset16.webp",
    alt: "Poster Rumasa tentang dampak warna mencolok berlebihan di rumah",
    title: "Warna Mencolok Bikin Gak Betah",
    subtitle: "Rumasa · Tips memilih warna rumah",
    meta: [
      { label: "Category", value: "Real Estate" },
      { label: "Project", value: "Rumasa" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset17.webp",
    alt: "Poster Rumasa tentang tiga hal yang perlu diketahui sebelum membangun ruko",
    title: "Mau Bangun Ruko Impian?",
    subtitle: "Rumasa · Tiga hal sebelum mulai",
    meta: [
      { label: "Category", value: "Real Estate" },
      { label: "Project", value: "Rumasa" },
      { label: "Platform", value: "Instagram" },
    ],
  },
  {
    src: "/asset/asset18.webp",
    alt: "Poster Rumasa membandingkan rumah klasik dan rumah modern",
    title: "Rumah Klasik vs Rumah Modern",
    subtitle: "Rumasa · Panduan memilih gaya",
    meta: [
      { label: "Category", value: "Real Estate" },
      { label: "Project", value: "Rumasa" },
      { label: "Platform", value: "Instagram" },
    ],
  },
];
