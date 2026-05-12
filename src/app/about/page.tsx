import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Shalom Bayit",
  description: "Meet the people behind Shalom Bayit Property Management.",
};

const team = [
  {
    name: "Marc Miller",
    title: "Managing Partner",
    photo: null, // Replace with: "/images/marc.jpg"
    bio: "Placeholder bio for Marc. Add your background, qualifications, relevant experience, and what drew you to Jerusalem property management. Two to four sentences works well here — enough to establish credibility without overstating it.",
  },
  {
    name: "Justin [Last Name]",
    title: "Partner",
    photo: null, // Replace with: "/images/justin.jpg"
    bio: "Placeholder bio for Justin. Add his background, qualifications, relevant experience, and his role in day-to-day operations. Keep it honest and specific — the same tone as the rest of the site.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About us"
        headline="The people behind your home."
        subheadline="Shalom Bayit is a small team by design. You will always know who is responsible for your property — because it is one of us."
      />

      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-0">
          {team.map((person, i) => (
            <div
              key={person.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-16 border-t"
              style={{ borderColor: "rgba(210,190,158,0.5)" }}
            >
              {/* Photo */}
              <div className="lg:col-span-4">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={600}
                    height={750}
                    className="w-full h-auto"
                    style={{ filter: "sepia(15%) saturate(110%) contrast(105%)" }}
                  />
                ) : (
                  <div
                    className="w-full aspect-[4/5] flex items-center justify-center"
                    style={{ backgroundColor: "rgba(210,190,158,0.25)", border: "1px dashed rgba(166,139,91,0.4)" }}
                  >
                    <p
                      className="font-body text-xs uppercase tracking-widest text-center"
                      style={{ color: "rgba(44,42,40,0.3)" }}
                    >
                      Photo coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* Bio */}
              <div className="lg:col-span-8 flex flex-col justify-center gap-6">
                <div>
                  <p
                    className="font-body text-xs font-medium uppercase tracking-widest mb-3"
                    style={{ color: "#A68B5B" }}
                  >
                    {person.title}
                  </p>
                  <h2
                    className="font-display text-4xl lg:text-5xl font-light"
                    style={{ color: "#2C2A28" }}
                  >
                    {person.name}
                  </h2>
                </div>
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "#A68B5B" }}
                />
                <p
                  className="font-body text-base leading-relaxed max-w-xl"
                  style={{ color: "rgba(44,42,40,0.65)" }}
                >
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t" style={{ borderColor: "rgba(210,190,158,0.5)", paddingTop: "6rem" }}>
          <h2 className="font-display text-4xl lg:text-5xl font-light mb-6" style={{ color: "#2C2A28" }}>
            Have a conversation with us.
          </h2>
          <p className="font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(44,42,40,0.6)" }}>
            No intake coordinator. The person you speak with is the person who will manage your home.
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
