const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 text-xs uppercase tracking-[0.14em] sm:px-6 sm:py-5 sm:text-sm">
        <a href="#top" className="font-jakarta-sans font-medium">
          Catraliya Nolan Hakim
        </a>
        <div className="flex shrink-0 gap-4 sm:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
