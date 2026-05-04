import Link from "next/link";
import Image from "next/image";

/* ─── Section: Hero ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-20">
      {/* Full-bleed hero photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/jerusalem-sunset.png"
          alt="Jerusalem sunset over the Old City"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "sepia(33%) saturate(125%) contrast(105%) brightness(96%)" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(44,42,40,0.85) 0%, rgba(44,42,40,0.3) 50%, transparent 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            Jerusalem Property Management
          </p>
          <h1
            className="font-display text-6xl lg:text-8xl font-light leading-tight mb-8"
            style={{ color: "#F7F3EE" }}
          >
            Your Jerusalem home, cared for like our own.
          </h1>
          <p
            className="font-body text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(247,243,238,0.7)" }}
          >
            Boutique property management for North American homeowners in Jerusalem —
            combining genuine local expertise with the communication standards you expect at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
              style={{ backgroundColor: "#5C6B3A", color: "#F7F3EE" }}
            >
              Request a Consultation
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block px-8 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
              style={{ border: "1px solid rgba(247,243,238,0.3)", color: "#F7F3EE" }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Value Props ───────────────────────────────────── */
const values = [
  {
    label: "Boutique by design",
    body: "We manage fewer homes to do each one better. You will always speak with someone who knows your apartment.",
  },
  {
    label: "Peace of mind",
    body: "Two inspections a month. A written report and walkthrough video delivered to your inbox. You always know what is happening at your home.",
  },
  {
    label: "North American standards",
    body: "Messages answered within 24 hours. Transparent pricing. No surprises. We operate at the level you expect at home.",
  },
];

function Values() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {values.map((v) => (
            <div key={v.label}>
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
              <h3 className="font-display text-2xl font-light mb-4" style={{ color: "#2C2A28" }}>
                {v.label}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Services Preview ──────────────────────────────── */
const services = [
  {
    category: "Property Oversight",
    description:
      "Monthly inspections with standardized photo documentation and written narrative reports. The same eyes on your home every visit.",
  },
  {
    category: "Shabbat & Holiday Preparation",
    description:
      "Your home readied before you arrive — Shabbat ritual and meal preparation based on your exact preferences. We understand the calendar because we live it.",
  },
  {
    category: "Maintenance & Repairs",
    description:
      "Vetted contractors, zero markup on costs, complete transparency on every invoice. We coordinate; you approve anything above 1,000 NIS.",
  },
  {
    category: "Arrival Preparation",
    description:
      "Walk in and feel at home. Climate control on, your grocery list filled, the apartment aired and ready — the moment you land.",
  },
  {
    category: "Legal & Financial Liaison",
    description:
      "Arnona, va'ad bayit, Mas Hachnasa. We handle the Israeli bureaucratic layer on your behalf — in both languages, without burdening you.",
  },
  {
    category: "Concierge",
    description:
      "Transportation, reservations, specialist sourcing. Whatever your home needs, we coordinate it — from across the Atlantic or around the corner.",
  },
];

function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "rgba(210,190,158,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "#A68B5B" }}
          >
            What we do
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light max-w-2xl" style={{ color: "#2C2A28" }}>
            Everything your home needs. Nothing you do not.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(210,190,158,0.4)" }}
        >
          {services.map((s) => (
            <div key={s.category} className="p-8 lg:p-10" style={{ backgroundColor: "#F7F3EE" }}>
              <h3 className="font-display text-xl font-light mb-3" style={{ color: "#2C2A28" }}>
                {s.category}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(44,42,40,0.6)" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
            style={{ border: "1px solid rgba(44,42,40,0.3)", color: "#2C2A28" }}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Jerusalem Photo Strip ─────────────────────────── */
const jerusalemPhotos = [
  {
    src: "/images/yoel-solomon.jpeg",
    alt: "Yoel Solomon Street, Nahalat Shiva, Jerusalem",
    caption: "Nahalat Shiva",
  },
  {
    src: "/images/jerusalem-sunset.png",
    alt: "Jerusalem sunset over the Old City",
    caption: "Old City",
  },
  {
    src: "/images/mamilla.jpeg",
    alt: "Mamilla covered promenade, Jerusalem",
    caption: "Mamilla",
  },
  {
    src: "/images/consulate.jpeg",
    alt: "Talbiya neighbourhood, Jerusalem",
    caption: "Talbiya",
  },
];

function JerusalemStrip() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "#A68B5B" }}
          >
            The city
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light max-w-2xl" style={{ color: "#2C2A28" }}>
            Jerusalem is unlike anywhere else on earth.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {jerusalemPhotos.map((photo) => (
            <div key={photo.src} className="group relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ filter: "sepia(33%) saturate(125%) contrast(105%) brightness(96%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(44,42,40,0.6) 0%, transparent 50%)" }}
              />
              <p
                className="absolute bottom-4 left-4 font-body text-xs uppercase tracking-widest"
                style={{ color: "#F7F3EE" }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/jerusalem"
            className="inline-block px-8 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
            style={{ border: "1px solid rgba(44,42,40,0.3)", color: "#2C2A28" }}
          >
            About Jerusalem
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Property Photo Strip ──────────────────────────── */
const propertyPhotos = [
  { src: "/images/apt1.jpeg", alt: "Classic Jerusalem stone apartment building" },
  { src: "/images/apt2.jpeg", alt: "Modern Jerusalem stone tower with glass balconies" },
  { src: "/images/apt3.jpeg", alt: "Jerusalem stone building with arched windows" },
];

function PropertyStrip() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "rgba(210,190,158,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "#A68B5B" }}
          >
            The homes we care for
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light max-w-2xl" style={{ color: "#2C2A28" }}>
            Every Jerusalem home tells a story.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {propertyPhotos.map((photo) => (
            <div key={photo.src} className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ filter: "sepia(33%) saturate(125%) contrast(105%) brightness(96%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: How It Works ──────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Consultation",
    body: "A conversation about your home, your calendar, and what peace of mind means to you.",
  },
  {
    num: "02",
    title: "Assessment",
    body: "We walk through your apartment together — in person or via video — and document its current condition.",
  },
  {
    num: "03",
    title: "Agreement",
    body: "One clear contract. One transparent price. No surprises, no hidden fees, no ambiguity.",
  },
  {
    num: "04",
    title: "Ongoing Management",
    body: "Your home is in our hands. You receive your report every month and hear from us whenever something needs attention.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "#A68B5B" }}
          >
            The process
          </p>
          <h2 className="font-display text-5xl lg:text-6xl font-light" style={{ color: "#2C2A28" }}>
            Simple from the start.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num}>
              <p className="font-display text-6xl font-light mb-6" style={{ color: "#D2BE9E" }}>
                {s.num}
              </p>
              <h3 className="font-display text-2xl font-light mb-3" style={{ color: "#2C2A28" }}>
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(44,42,40,0.6)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Pull Quote ────────────────────────────────────── */
function PullQuote() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#4A3F35" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="w-8 h-px mb-10" style={{ backgroundColor: "#A68B5B" }} />
          <blockquote
            className="font-display text-3xl lg:text-4xl font-light leading-relaxed mb-10"
            style={{ color: "#F7F3EE" }}
          >
            We have North American experience — but we chose to live here in Jerusalem.
            Our dream is to make you feel at home every time you arrive.
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px" style={{ backgroundColor: "#A68B5B" }} />
            <p
              className="font-body text-sm uppercase tracking-widest"
              style={{ color: "rgba(247,243,238,0.4)" }}
            >
              Shalom Bayit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: CTA ───────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-24 lg:py-32 text-center" style={{ backgroundColor: "#F7F3EE" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p
          className="font-body text-xs font-medium uppercase tracking-widest mb-6"
          style={{ color: "#A68B5B" }}
        >
          Get started
        </p>
        <h2
          className="font-display text-5xl lg:text-6xl font-light mb-6 max-w-2xl mx-auto"
          style={{ color: "#2C2A28" }}
        >
          Tell us about your home.
        </h2>
        <p
          className="font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(44,42,40,0.6)" }}
        >
          We begin with a conversation. No commitment, no pressure — just an honest discussion
          about what your Jerusalem home needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
          style={{ backgroundColor: "#5C6B3A", color: "#F7F3EE" }}
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <ServicesPreview />
      <JerusalemStrip />
      <PropertyStrip />
      <HowItWorks />
      <PullQuote />
      <CTA />
    </>
  );
}
