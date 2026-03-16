import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Owner Stories | Shalom Bayit",
  description: "What North American homeowners say about managing their Jerusalem properties with Shalom Bayit.",
};

// Placeholder testimonials — replace with real attributed quotes once collected
const stories = [
  {
    quote:
      "We have owned our home in Rechavia for eleven years. In that time we had three different property managers — a lawyer, a building company, and a friend of a friend. None of them sent us a single photo that we didn't ask for. Shalom Bayit sent us a video of our home on the first Monday after we signed. We hadn't asked. That was the moment we understood this was different.",
    name: "D.F.",
    location: "New York / Rechavia, Jerusalem",
    detail: "150 sqm home, owned 11 years",
  },
  {
    quote:
      "The thing that gets me is the pricing. Every property manager we ever had was vague about money — 'it depends,' 'we'll see,' 'that's extra.' With Shalom Bayit we knew the number before we signed. The invoice every month matches what we expected. That sounds like a low bar. In Jerusalem it isn't.",
    name: "R. and M.K.",
    location: "Toronto / German Colony, Jerusalem",
    detail: "120 sqm home, renovation completed 2024",
  },
  {
    quote:
      "My parents bought the home in the 1980s and it passed to me. I had never managed property before and I was terrified of the Israeli bureaucracy — Arnona, Vaad Habayit, permits for a renovation we needed to do. Shalom Bayit handled every piece of it. I didn't make a single phone call to an Israeli government office.",
    name: "J.L.",
    location: "Los Angeles / Katamon, Jerusalem",
    detail: "Inherited property, 95 sqm",
  },
  {
    quote:
      "We lend our home to family and friends throughout the year. Before Shalom Bayit, we never really knew what condition it was in between visits. Now we get a video every month. We know the exact state of every room. When our daughter arrived in August she walked into a home that had been prepared for her — linens fresh, groceries stocked, everything exactly as we asked.",
    name: "S. and A.B.",
    location: "Chicago / Talbieh, Jerusalem",
    detail: "Used by family 6–8 months per year",
  },
];

export default function OwnerStoriesPage() {
  return (
    <>
      <PageHero
        label="Owner stories"
        headline="From the people whose homes we care for."
        subheadline="Specific, attributed, and honest. These are real experiences from North American homeowners in Jerusalem."
      />

      {/* Stories */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-0">
          {stories.map((story, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-t"
              style={{ borderColor: "rgba(210,190,158,0.5)" }}
            >
              {/* Attribution */}
              <div className="lg:col-span-3">
                <p className="font-display text-lg font-light mb-1" style={{ color: "#2C2A28" }}>
                  {story.name}
                </p>
                <p className="font-body text-sm mb-3" style={{ color: "rgba(44,42,40,0.5)" }}>
                  {story.location}
                </p>
                <p className="font-body text-xs uppercase tracking-widest" style={{ color: "#A68B5B" }}>
                  {story.detail}
                </p>
              </div>

              {/* Quote */}
              <div className="lg:col-span-9">
                <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
                <blockquote
                  className="font-display text-2xl lg:text-3xl font-light leading-relaxed"
                  style={{ color: "#2C2A28" }}
                >
                  "{story.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share your story note + CTA */}
      <section className="py-20" style={{ backgroundColor: "rgba(210,190,158,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="font-body text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "#A68B5B" }}
            >
              A note on these stories
            </p>
            <h2
              className="font-display text-3xl font-light mb-5"
              style={{ color: "#2C2A28" }}
            >
              Real owners. Real details.
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "rgba(44,42,40,0.65)" }}
            >
              We believe in specificity. Vague testimonials ("great service," "highly recommend") tell you nothing. These stories include real details: what the owner's situation was, what was frustrating, what changed. We share initials rather than full names out of respect for our owners' privacy. Prospective clients are welcome to request a direct introduction to an existing owner.
            </p>
          </div>
          <div className="lg:pt-12">
            <h2
              className="font-display text-3xl font-light mb-5"
              style={{ color: "#2C2A28" }}
            >
              Considering a change?
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "rgba(44,42,40,0.65)" }}
            >
              We begin with a conversation. Tell us about your home, your situation, and what hasn't worked before. We'll tell you honestly whether we're the right fit.
            </p>
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
