const EMAIL = "nolanhakimm10@gmail.com";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-[#1F3A4B] px-5 py-20 text-[#FAFDEE] sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col">
        <p className="text-xs uppercase tracking-[0.14em] opacity-60">
          Contact
        </p>
        <h2 className="font-jakarta-sans mt-6 max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Let&apos;s work together.
        </h2>

        <a
          href={`mailto:${EMAIL}`}
          className="group mt-12 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full bg-[#C2F84F] px-5 py-3.5 text-[13px] font-medium text-nowrap text-[#1F3A4B] transition-transform hover:scale-[1.03] sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
        >
          {EMAIL}
          <span
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
          </span>
        </a>

        <div className="mt-24 flex flex-col gap-3 border-t border-white/15 pt-8 text-xs uppercase tracking-[0.14em] opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <span>Surakarta, Jawa Tengah / Available online</span>
          <span>© Catraliya Nolan Hakim</span>
        </div>
      </div>
    </footer>
  );
}
