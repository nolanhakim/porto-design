import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catraliya Nolan Hakim — Design Portfolio",
  description:
    "Portfolio design by Catraliya Nolan Hakim. A collection of visual work, branding, and design explorations.",
  openGraph: {
    title: "Catraliya Nolan Hakim — Design Portfolio",
    description:
      "Portfolio design by Catraliya Nolan Hakim. A collection of visual work, branding, and design explorations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catraliya Nolan Hakim — Design Portfolio",
    description:
      "Portfolio design by Catraliya Nolan Hakim. A collection of visual work, branding, and design explorations.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
