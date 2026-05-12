"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/services", label: "Our Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-shalom-bayit", label: "Why Shalom Bayit" },
  { href: "/jerusalem", label: "Jerusalem" },
  { href: "/owner-stories", label: "Owner Stories" },
  { href: "/about", label: "About Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-light tracking-wide text-charcoal hover:text-gold transition-colors whitespace-nowrap flex-shrink-0 mr-8">
          Shalom Bayit
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium uppercase tracking-wider text-charcoal/70 hover:text-charcoal transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-olive text-cream font-body text-sm font-medium uppercase tracking-wider hover:bg-stone-dark transition-colors whitespace-nowrap"
          >
            Request a Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-stone/30 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium uppercase tracking-widest text-charcoal/70"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-6 py-3 bg-olive text-cream font-body text-sm font-medium uppercase tracking-widest text-center"
            onClick={() => setOpen(false)}
          >
            Request a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
