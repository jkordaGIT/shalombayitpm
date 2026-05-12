import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Services | Shalom Bayit",
  description: "Full-service property management for North American homeowners in Jerusalem — organized around what your home actually needs.",
};

const categories = [
  {
    title: "Property Oversight",
    intro:
      "The foundation of everything we do. Your home is physically inspected twice a month by the same team member, with standardized photography, a written condition report, and a short walkthrough video. You receive this package within five business days of the second inspection, every month, without asking.",
    services: [
      "Two scheduled interior inspections per month",
      "Standardized photo documentation, same angles, every visit",
      "Monthly written narrative report with issue severity ratings",
      "Accompanying walkthrough video, a named team member on camera",
      "Plumbing, electrical, HVAC, boiler, and appliance checks",
      "Window, shutter, balcony, lock, and safety system checks",
      "Moisture, humidity, and odor detection",
      "Ongoing maintenance history and condition tracking",
    ],
  },
  {
    title: "Maintenance & Repairs",
    intro:
      "When something needs attention, we handle it. Vetted contractors, zero markup on costs, and complete visibility on every invoice. You approve any expense above 1,000 NIS before work begins, except in emergencies, where we act first and document immediately.",
    services: [
      "Vetted contractor network, licensed, insured, and performance-tracked",
      "Quote collection and comparison for non-urgent repairs",
      "On-site supervision of all contractor work",
      "Quality control inspection after every job",
      "Zero markup on sub-contractor and vendor costs",
      "Owner approval required above 1,000 NIS per occurrence",
      "Emergency response 24/7: we act, then we report",
      "Preventive maintenance identification and scheduling",
    ],
  },
  {
    title: "Holiday & Chag Services",
    intro:
      "We understand the Jewish calendar because we live it. Your home is prepared before every Shabbat or Yom Tov arrival, not as a checklist item, but as an expression of what it means to walk into a home that was waiting for you.",
    services: [
      "Pre-Shabbat and pre-chag preparation done to your personal specifications",
      "Fresh linens, aired home, kitchen stocked to your standing list",
      "Sukkah building and breakdown coordination",
      "Pesach kitchen preparation and chametz removal coordination",
      "Chag arrival packages",
      "Seasonal chag inspection and home readiness checks",
    ],
  },
  {
    title: "Arrival Preparation",
    intro:
      "Walk in and feel at home, regardless of how long you have been away. We prepare your home to your exact specifications before every arrival, so the transition from airport to home is seamless.",
    services: [
      "Climate control activated before your arrival",
      "Full home deep clean",
      "Grocery stocking to your standing or custom list",
      "Bed making and linen setup in all rooms",
      "Bathroom and toiletries prepared",
      "Refrigerator and pantry stocked",
      "Airport pickup and transportation coordination",
      "Post-departure close-out: full clean, refrigerator cleared, systems shut down",
    ],
  },
  {
    title: "Legal & Financial Coordination",
    intro:
      "The Israeli administrative layer, Arnona, Vaad Habayit, utility accounts, municipal bureaucracy, is handled on your behalf. You should never need to navigate an Israeli government office from abroad.",
    services: [
      "Arnona (property tax) monitoring and communication",
      "Vaad Habayit (building committee) liaison and payment coordination",
      "Utility account monitoring, activation, and deactivation",
      "Foreign credit card facilitation for Israeli bills",
      "Monthly expense reconciliation and documentation",
      "Annual summaries prepared for your accountant or family office",
      "Permit-related coordination support",
      "Mas Hachnasa compliance coordination (where applicable)",
    ],
  },
  {
    title: "Concierge Services",
    intro:
      "Beyond the home itself. When you need things arranged, whether before you arrive, during your stay, or for family and guests, we are the local address for everything that requires a trusted presence in Jerusalem.",
    services: [
      "Guest and family key handover and home orientation",
      "On-call support during guest stays. Issues resolved without involving you.",
      "Restaurant, service, and experience reservations",
      "Transportation and driver coordination",
      "Package handling and specialty deliveries",
      "Furniture and appliance delivery coordination",
      "Contractor scheduling on your behalf",
      "Local sourcing and errand coordination",
    ],
  },
  {
    title: "Our Network of Trusted Professionals",
    intro:
      "We do one thing and do it exceptionally well. But we understand that owning a home in Jerusalem touches every aspect of life here, legal, financial, architectural, administrative. We have built trusted relationships with the professionals North American owners need most: people who communicate at your standards, understand diaspora client expectations, and have earned our confidence through consistent performance. We make introductions when you need them. We never mark up their services.",
    services: [
      "Real estate attorneys experienced with North American diaspora clients",
      "Accountants specializing in Israeli-American and Israeli-Canadian tax matters",
      "Interior designers who understand absentee owner needs and timelines",
      "Architects for renovations both modest and significant",
      "Real estate agents for purchase, sale, or market assessment",
      "Financial advisors with cross-border Israel-US and Israel-Canada expertise",
      "Specialty contractors for larger projects beyond standard maintenance scope",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What we do"
        headline="Every service your Jerusalem home needs."
        subheadline="Organized around real owner needs, not a generic property management checklist."
      />

      {/* Services */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t"
              style={{ borderColor: "rgba(210,190,158,0.5)" }}
            >
              {/* Title */}
              <div className="lg:col-span-4">
                <h2
                  className="font-display text-3xl font-light mb-6"
                  style={{ color: "#2C2A28" }}
                >
                  {cat.title}
                </h2>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "rgba(44,42,40,0.65)" }}
                >
                  {cat.intro}
                </p>
              </div>

              {/* Service list */}
              <div className="lg:col-span-8">
                <ul className="columns-1 md:columns-2 gap-x-12">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 break-inside-avoid mb-4">
                      <span
                        className="mt-2 shrink-0 w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#A68B5B" }}
                      />
                      <span
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "rgba(44,42,40,0.75)" }}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property photo strip */}
      <section style={{ backgroundColor: "#F7F3EE" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {[
            { src: "/images/german-colony.jpg", alt: "German Colony neighbourhood, Jerusalem", caption: "German Colony" },
            { src: "/images/talpiot-north.jpg", alt: "Talpiot North neighbourhood, Jerusalem", caption: "Talpiot North" },
            { src: "/images/pat.jpg", alt: "Pat neighbourhood, Jerusalem", caption: "Pat" },
          ].map((photo) => (
            <div key={photo.src} className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ filter: "sepia(33%) saturate(125%) contrast(105%) brightness(96%)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(44,42,40,0.6) 0%, transparent 50%)" }} />
              <p className="absolute bottom-4 left-4 font-body text-xs uppercase tracking-widest" style={{ color: "#F7F3EE" }}>
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-20" style={{ backgroundColor: "rgba(210,190,158,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="font-body text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#A68B5B" }}
            >
              Transparent pricing
            </p>
            <h2
              className="font-display text-4xl font-light mb-6"
              style={{ color: "#2C2A28" }}
            >
              One package. One price. No surprises.
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "rgba(44,42,40,0.65)" }}
            >
              The Chai Package covers property oversight, monthly reports, and routine coordination.
              Pricing is straightforward: 15 NIS per sqm per month, with a minimum of 1,800 NIS + VAT.
              Sub-contractors are passed through at actual cost. Zero markup, ever. Work requiring
              on-site supervision is billed at 400 NIS per hour, with a 30-minute minimum.
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "rgba(44,42,40,0.65)" }}
            >
              The monthly retainer represents a small fraction of the cost of a single preventable
              issue. A leak left undetected, a system failure that compounds over weeks. This is not
              overhead. It is protection.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
              style={{ backgroundColor: "#5C6B3A", color: "#F7F3EE" }}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
