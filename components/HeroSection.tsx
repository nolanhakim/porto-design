"use client";

import ImageStreamHero from "@/components/ImageStreamHero";
import { GALLERY_ASSETS } from "@/lib/gallery";

const IMAGES = GALLERY_ASSETS.map((src) => ({ src }));

export default function HeroSection() {
  return (
    <section id="work" className="scroll-mt-24 bg-[#FAFDEE]">
      <ImageStreamHero
        images={IMAGES}
        cards={8}
        speed={18}
        axis={54}
        className="min-h-[100svh] bg-[#FAFDEE]"
      />
    </section>
  );
}
