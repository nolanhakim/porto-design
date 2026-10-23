import ContactFooter from "@/components/ContactFooter";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import PolaroidLineCarousel from "@/components/PolaroidLineCarousel";
import SiteNav from "@/components/SiteNav";
import { Skiper19 } from "@/components/Skiper19";
import { COVERFLOW_SLIDES, GALLERY_ASSETS } from "@/lib/gallery";

const GALLERY_SLIDES = GALLERY_ASSETS.map((image, i) => ({
  image,
  title: `Project ${String(i + 1).padStart(2, "0")}`,
  alt: `Project ${String(i + 1).padStart(2, "0")} by Catraliya Nolan Hakim`,
}));

export default function Home() {
  return (
    <div id="top">
      <SiteNav />
      <Skiper19 />
      <section className="relative w-full bg-[#FAFDEE] py-16 sm:py-24 overflow-hidden border-t border-[#1F3A4B]/10">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-8 mb-6 sm:mb-10 text-center">
          <p className="font-jakarta-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#1F3A4B]/60">
            Selected Work
          </p>
          <h2 className="font-jakarta-sans mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1F3A4B]">
            Recent Projects
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#1F3A4B]/70 max-w-md mx-auto">
            Drag, swipe, or use the arrow keys.
          </p>
        </div>
        <CoverflowCarousel
          slides={COVERFLOW_SLIDES}
          showCaption={true}
          showNavigation={true}
          showPagination={true}
          cardWidth="clamp(200px, 25vw, 320px)"
          className="mx-auto max-w-[1600px] px-4"
        />
      </section>
      <section id="work" className="scroll-mt-24">
        <PolaroidLineCarousel
          background="#FAFDEE"
          ink="#1F3A4B"
          slides={GALLERY_SLIDES}
        />
      </section>
      <ContactFooter />
    </div>
  );
}

