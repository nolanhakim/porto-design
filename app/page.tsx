import ContactFooter from "@/components/ContactFooter";
import HeroSection from "@/components/HeroSection";
import PolaroidLineCarousel from "@/components/PolaroidLineCarousel";
import SiteNav from "@/components/SiteNav";
import { Skiper19 } from "@/components/Skiper19";
import { GALLERY_ASSETS } from "@/lib/gallery";

const GALLERY_SLIDES = GALLERY_ASSETS.map((image, i) => ({
  image,
  title: `Project ${String(i + 1).padStart(2, "0")}`,
  alt: `Design work ${i + 1} by Catraliya Nolan Hakim`,
}));

export default function Home() {
  return (
    <div id="top">
      <SiteNav />
      <Skiper19 />
      <HeroSection />
      <PolaroidLineCarousel
        background="#FAFDEE"
        ink="#1F3A4B"
        slides={GALLERY_SLIDES}
      />
      <ContactFooter />
    </div>
  );
}
