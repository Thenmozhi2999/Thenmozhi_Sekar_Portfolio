import { useState } from "react";
import { navLinks, profile } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="font-['Space_Grotesk'] text-lg font-bold text-white">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky-400/30 hover:bg-white/10 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="text-lg">{isOpen ? "X" : "="}</span>
        </button>

        <a
          href="#contact"
          className="hidden rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/20 lg:inline-flex"
        >
          Contact Me
        </a>
      </div>

      {isOpen ? (
        <div className="section-shell border-t border-white/10 py-4 lg:hidden">
          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400/30 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 inline-flex justify-center rounded-2xl bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Contact Me
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
