interface PageHeroProps {
  label: string;
  headline: string;
  subheadline?: string;
}

export default function PageHero({ label, headline, subheadline }: PageHeroProps) {
  return (
    <section
      className="pt-40 pb-20 lg:pt-48 lg:pb-28"
      style={{ backgroundColor: "#F7F3EE" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p
          className="font-body text-xs font-medium uppercase tracking-widest mb-5"
          style={{ color: "#A68B5B" }}
        >
          {label}
        </p>
        <h1
          className="font-display text-5xl lg:text-7xl font-light leading-tight max-w-4xl"
          style={{ color: "#2C2A28" }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            className="font-body text-lg leading-relaxed mt-8 max-w-2xl"
            style={{ color: "rgba(44,42,40,0.65)" }}
          >
            {subheadline}
          </p>
        )}
        <div className="w-16 h-px mt-10" style={{ backgroundColor: "#A68B5B" }} />
      </div>
    </section>
  );
}
