import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How It Works | Shalom Bayit",
  description: "From first conversation to ongoing care — the Shalom Bayit process, explained simply.",
};

const steps = [
  {
    num: "1",
    title: "Consultation",
    duration: "30–45 minutes",
    description:
      "We begin with a conversation. Not a sales pitch. We want to understand your home, your calendar, how often you visit, who uses the home in your absence, and what has frustrated you about property management in the past. This call happens over Zoom or WhatsApp, on your schedule, in your time zone.",
    details: [
      "We ask about your home: size, age, systems, any known issues",
      "We ask about your visit patterns and who has access",
      "We explain exactly what we do and what we do not do",
      "We answer every question you have about pricing and process",
      "No obligation, no pressure. Just clarity.",
    ],
  },
  {
    num: "2",
    title: "Property Assessment",
    duration: "1–2 hours on-site",
    description:
      "Before any agreement is signed, we walk through your home. In person if you are in Jerusalem, or via a thorough video walkthrough with a live call if you are abroad. We document the current condition of every room and system. This becomes the baseline record for everything that follows.",
    details: [
      "Full interior walkthrough with photo and video documentation",
      "Systems check: plumbing, electrical, HVAC, boiler, appliances",
      "Existing issue identification and severity classification",
      "Key and access coordination",
      "Baseline condition report delivered before the agreement is signed",
    ],
  },
  {
    num: "3",
    title: "Agreement",
    duration: "One document. No ambiguity.",
    description:
      "Our service agreement is written to be understood, not to obscure. It defines exactly what is included in your monthly fee, exactly what triggers hourly billing, and exactly what authority we have to act on your behalf. We fill in every blank before you sign.",
    details: [
      "One clear monthly fee based on your property's square meterage",
      "Explicit list of what is included in the base package",
      "Clear definition of what triggers the 400 NIS/hour supervision fee",
      "Agreed spending threshold (1,000 NIS): above which we always ask first",
      "Emergency response protocol and communication standards in writing",
    ],
  },
  {
    num: "4",
    title: "Ongoing Management",
    duration: "Every month, indefinitely",
    description:
      "From the moment the agreement is signed, your home is in our care. Two inspections per month. A written report and walkthrough video delivered within five business days. Proactive outreach the same day anything critical is found. You are never the last to know. You never have to chase us for an update.",
    details: [
      "Two physical inspections per month, same team, same standards",
      "Monthly PDF report and walkthrough video within 5 business days",
      "Same-day notification for any critical finding",
      "All WhatsApp messages answered within 24 hours (sooner for urgent matters)",
      "Full maintenance history maintained and available on request",
      "Annual property health summary with forward-looking recommendations",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="The process"
        headline="Simple from the start. Consistent forever after."
        subheadline="Four steps from first conversation to ongoing care. No surprises, no ambiguity, no chasing."
      />

      {/* Steps */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-t"
              style={{ borderColor: "rgba(210,190,158,0.5)" }}
            >
              {/* Number + Meta */}
              <div className="lg:col-span-3">
                <p
                  className="font-display text-7xl font-light leading-none mb-2"
                  style={{ color: "#D2BE9E" }}
                >
                  {step.num}
                </p>
                <p
                  className="font-body text-xs uppercase tracking-widest"
                  style={{ color: "#A68B5B" }}
                >
                  {step.duration}
                </p>
              </div>

              {/* Content */}
              <div className="lg:col-span-9">
                <h2
                  className="font-display text-4xl font-light mb-5"
                  style={{ color: "#2C2A28" }}
                >
                  {step.title}
                </h2>
                <p
                  className="font-body text-base leading-relaxed mb-8 max-w-2xl"
                  style={{ color: "rgba(44,42,40,0.65)" }}
                >
                  {step.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span
                        className="mt-2 shrink-0 w-1 h-1 rounded-full"
                        style={{ backgroundColor: "#A68B5B" }}
                      />
                      <span
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "rgba(44,42,40,0.7)" }}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you receive monthly */}
      <section className="py-20" style={{ backgroundColor: "#4A3F35" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-6"
            style={{ color: "#A68B5B" }}
          >
            Every month, without asking
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl font-light mb-12 max-w-2xl"
            style={{ color: "#F7F3EE" }}
          >
            What lands in your inbox.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(247,243,238,0.1)" }}>
            {[
              {
                title: "Written Report",
                body: "A full narrative of your property's condition: every room, every system, every issue found and rated by severity. Photographs of every standard angle, every visit.",
              },
              {
                title: "Walkthrough Video",
                body: "A named Shalom Bayit team member walks through your home on camera. You see your home as if you were there. No competitor offers this.",
              },
              {
                title: "Action Summary",
                body: "Every issue addressed that month. Every vendor engaged. Every expense. Anything still open and why. Nothing left unexplained.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 lg:p-10"
                style={{ backgroundColor: "#4A3F35" }}
              >
                <div className="w-6 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
                <h3
                  className="font-display text-2xl font-light mb-4"
                  style={{ color: "#F7F3EE" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(247,243,238,0.6)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed panorama break */}
      <section className="relative overflow-hidden" style={{ height: "40vh", minHeight: "280px" }}>
        <Image
          src="/images/consulate.jpeg"
          alt="Talbiya neighbourhood, Jerusalem"
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "sepia(33%) saturate(125%) contrast(105%) brightness(96%)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(44,42,40,0.35)" }} />
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2
            className="font-display text-4xl lg:text-5xl font-light mb-6"
            style={{ color: "#2C2A28" }}
          >
            Ready to begin?
          </h2>
          <p
            className="font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(44,42,40,0.6)" }}
          >
            The first step is a conversation. Tell us about your home.
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
