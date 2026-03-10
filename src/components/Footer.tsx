import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* Arch icon — cream frame on dark background */}
            <svg width="20" height="23" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fillRule="evenodd" d="M0,0 H60 V70 H0 Z M12,70 L12,40 A18,18 0 0,1 48,40 L48,70 Z" fill="#F7F3EE" fillOpacity="0.85"/>
              <path d="M17,70 L17,44 A13,13 0 0,1 43,44 L43,70" fill="none" stroke="#F7F3EE" strokeWidth="1.2" strokeOpacity="0.3"/>
              <line x1="30" y1="23" x2="30" y2="31" stroke="#F7F3EE" strokeWidth="1.2" strokeOpacity="0.3"/>
            </svg>
            <p className="font-display text-2xl font-light text-cream">Shalom Bayit</p>
          </div>
          <p className="font-body text-sm leading-relaxed text-cream/60">
            Premium property management for North American homeowners in Jerusalem.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-widest text-cream/40 mb-4">Pages</p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/services", label: "Our Services" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/why-shalom-bayit", label: "Why Shalom Bayit" },
              { href: "/jerusalem", label: "Jerusalem" },
              { href: "/owner-stories", label: "Owner Stories" },
              { href: "/contact", label: "Request a Consultation" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-widest text-cream/40 mb-4">Contact</p>
          <div className="flex flex-col gap-3 font-body text-sm text-cream/60">
            <p>Jerusalem, Israel</p>
            <a href="mailto:hello@shalombayitpm.com" className="hover:text-cream transition-colors">
              hello@shalombayitpm.com
            </a>
            <p className="text-cream/40 text-xs mt-2">
              Available during North American business hours and Jerusalem time.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Shalom Bayit Property Management. Jerusalem, Israel.
          </p>
          <p className="font-body text-xs text-cream/30">shalombayitpm.com</p>
        </div>
      </div>
    </footer>
  );
}
