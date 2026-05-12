import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Owner Stories | Shalom Bayit",
  description: "What North American homeowners say about managing their Jerusalem properties with Shalom Bayit.",
};

export default function OwnerStoriesPage() {
  return (
    <>
      <PageHero
        label="Owner stories"
        headline="From the people whose homes we care for."
        subheadline="We believe in specificity — real details, real situations, real outcomes. Stories from our owners are coming soon."
      />

      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="w-8 h-px mb-10" style={{ backgroundColor: "#A68B5B" }} />
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "rgba(44,42,40,0.65)" }}>
              We are a new company and we are not yet ready to publish owner stories. We would rather say nothing than publish something generic or unattributed.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "rgba(44,42,40,0.65)" }}>
              When we have owners who have experienced our service and are willing to speak honestly about it, we will publish their stories here — with real details, real situations, and real outcomes.
            </p>
            <p className="font-body text-base leading-relaxed mb-12" style={{ color: "rgba(44,42,40,0.65)" }}>
              In the meantime, we are happy to speak with you directly. Tell us about your home and what you are looking for. We will tell you honestly whether we are the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
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
