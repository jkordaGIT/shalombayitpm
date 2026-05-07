import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Why Shalom Bayit | Shalom Bayit",
  description: "What makes Shalom Bayit different — specific, substantiated, and honest.",
};

const differentiators = [
  {
    title: "We occupy a position no one else does.",
    body: "We sit at an intersection that no one else occupies. No local Israeli company communicates at North American standards or understands what it means to own a home abroad. And no global platform (Onefinestay, Vacasa, Luxury Retreats) has meaningful Jerusalem presence or understands the diaspora owner. It is not a niche. It is an uncontested position.",
  },
  {
    title: "We live the calendar you care about.",
    body: "Your Jerusalem home exists inside a Jewish calendar: Shabbat, Rosh Hashanah, Sukkot, Pesach, Shavuot. We do not need to be reminded that you want the home ready before Shabbat, or that Pesach kitchen preparation is not a minor detail. We understand this because it is our calendar too. This cultural fluency cannot be trained into a property manager. It has to be lived.",
  },
  {
    title: "We send a video, not just a report.",
    body: "Every month, a named Shalom Bayit team member walks through your home on camera. You see your home as if you were standing in it. You see the water stain we found under the sink, the shutters we adjusted, the way the light falls in the afternoon. No competitor offers this. It is our most concrete expression of the transparency promise.",
  },
  {
    title: "We charge what we charge. And that is everything.",
    body: "Our pricing is a formula: 15 NIS per square meter per month, minimum 1,800 NIS. Sub-contractors are passed through at actual cost. Zero markup, ever. Hourly supervision is billed at 400 NIS, in 15-minute increments, with a 30-minute minimum. You know what you will pay before you sign, and the invoice never surprises you. This alone separates us from nearly every property manager operating in Jerusalem today.",
  },
  {
    title: "We answer in 24 hours. Sooner in an emergency.",
    body: "This is not a policy aspiration. It is a contractual standard. Even if there is no news to report, you will hear from us. Knowing that everything is in order is itself valuable. North American owners should not have to send a follow-up message, wonder if their message was received, or adjust their expectations downward because that is how things work in Israel. For emergencies, we act first and report immediately. We hold ourselves to the communication standard you would expect from a service provider at home. That is the service we are selling.",
  },
  {
    title: "We are boutique by choice, not by circumstance.",
    body: "We manage fewer homes than we could. This is deliberate. It is what allows us to know your building, your Vaad Habayit chairman, your preferred grocery list, and the exact age and expectations of your major systems. Scale is not our goal. Being the best property manager for a small number of homes, and earning that reputation, is.",
  },
];

export default function WhyShalomBayitPage() {
  return (
    <>
      <PageHero
        label="Why us"
        headline="Specific reasons. Not marketing language."
        subheadline="We are not the only property manager in Jerusalem. Here is why we believe we are the right one for North American owners."
      />

      {/* Differentiators */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-0">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-14 border-t"
              style={{ borderColor: "rgba(210,190,158,0.5)" }}
            >
              <div className="lg:col-span-1">
                <p
                  className="font-display text-3xl font-light"
                  style={{ color: "#D2BE9E" }}
                >
                  {i + 1}
                </p>
              </div>
              <div className="lg:col-span-11">
                <h2
                  className="font-display text-3xl font-light mb-5 max-w-2xl"
                  style={{ color: "#2C2A28" }}
                >
                  {d.title}
                </h2>
                <p
                  className="font-body text-base leading-relaxed max-w-3xl"
                  style={{ color: "rgba(44,42,40,0.65)" }}
                >
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Panorama */}
      <section className="px-6 lg:px-16 py-4" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/reuven.jpg"
            alt="Jerusalem neighbourhood panorama"
            width={1600}
            height={1200}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
            style={{ filter: "sepia(33%) saturate(125%) contrast(105%) brightness(96%)", display: "block" }}
          />
        </div>
      </section>

      {/* The honest comparison */}
      <section className="py-20" style={{ backgroundColor: "rgba(210,190,158,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: "#A68B5B" }}
          >
            Jerusalem's expanding inner corridor
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl font-light mb-8 max-w-2xl"
            style={{ color: "#2C2A28" }}
          >
            Israeli property management today.
          </h2>
          <p
            className="font-body text-base leading-relaxed mb-12 max-w-3xl"
            style={{ color: "rgba(44,42,40,0.65)" }}
          >
            We do one thing and one thing only: vacant home management for North American owners in Jerusalem&apos;s inner corridor. Rechavia, Talbiya, Baka, the German Colony. We do not sell properties. We do not lease them. We do not manage Airbnb rentals. We do not offer general real estate services. The narrow focus is not a gap in our offering. It is the offering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(210,190,158,0.4)" }}>
            {[
              {
                label: "The typical Israeli manager",
                points: [
                  "A lawyer, accountant, real estate agent, or designer, or a neighbor or family member, doing this as a side business",
                  "Opaque pricing: percentage of rent, or vague retainers",
                  "Responsive on Israeli time, not your time",
                  "No structured reporting. You ask; sometimes you get an answer.",
                  "Markup on contractor work, often undisclosed",
                  "Does not know your home. Manages dozens like it.",
                ],
                dark: false,
              },
              {
                label: "Shalom Bayit",
                points: [
                  "Purpose-built for this role. Nothing else on the side.",
                  "15 NIS/sqm, minimum 1,800 NIS per month. A formula, not a negotiation.",
                  "Responds within 24 hours, always. Sooner for urgent matters.",
                  "Monthly written report and video, delivered without asking",
                  "Zero markup on sub-contractors, ever. Invoice passed through at cost.",
                  "Knows your home by name. Manages fewer homes to do each better.",
                ],
                dark: true,
              },
            ].map((col) => (
              <div
                key={col.label}
                className="p-8 lg:p-10"
                style={{ backgroundColor: col.dark ? "#4A3F35" : "#F7F3EE" }}
              >
                <p
                  className="font-body text-xs font-medium uppercase tracking-widest mb-6"
                  style={{ color: col.dark ? "#A68B5B" : "rgba(44,42,40,0.4)" }}
                >
                  {col.label}
                </p>
                <ul className="flex flex-col gap-4">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        className="mt-2 shrink-0 w-1 h-1 rounded-full"
                        style={{ backgroundColor: col.dark ? "#A68B5B" : "rgba(44,42,40,0.3)" }}
                      />
                      <span
                        className="font-body text-sm leading-relaxed"
                        style={{ color: col.dark ? "rgba(247,243,238,0.75)" : "rgba(44,42,40,0.65)" }}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl lg:text-5xl font-light mb-6" style={{ color: "#2C2A28" }}>
            Inquire about your home.
          </h2>
          <p className="font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(44,42,40,0.6)" }}>
            We take on a limited number of homes each year. If you are considering a change, the time to have this conversation is now.
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
    </>
  );
}
