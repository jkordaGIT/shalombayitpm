import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Jerusalem | Shalom Bayit",
  description: "Why Jerusalem is unlike any other city — and why managing a home here requires genuine local understanding.",
};

export default function JerusalemPage() {
  return (
    <>
      <PageHero
        label="The city"
        headline="Jerusalem is not a location. It is a relationship."
        subheadline="Understanding this city — deeply, practically, culturally — is not a selling point. It is a precondition."
      />

      {/* Editorial sections */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20">

          {/* The light */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t" style={{ borderColor: "rgba(210,190,158,0.5)" }}>
            <div className="lg:col-span-4">
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
              <h2 className="font-display text-3xl font-light" style={{ color: "#2C2A28" }}>
                The light before Shabbat.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(44,42,40,0.7)" }}>
                There is an hour in Jerusalem — in the late afternoon on a Friday, in the weeks around the chagim — when the limestone turns amber. The walls of the Old City, the stone facades of Rechavia and Talbieh, the terraces overlooking the Judean Hills — all of it catches the light in a way that exists nowhere else on earth.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                Owners who have flown in for Shabbat know this light. They have stepped off a plane, arrived at an apartment that was ready and waiting, and felt — before unpacking, before anything — that they were home. This is what we are in the business of preserving.
              </p>
            </div>
          </div>

          {/* The calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t" style={{ borderColor: "rgba(210,190,158,0.5)" }}>
            <div className="lg:col-span-4">
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
              <h2 className="font-display text-3xl font-light" style={{ color: "#2C2A28" }}>
                A city that runs on a different clock.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(44,42,40,0.7)" }}>
                Jerusalem slows down on Friday afternoon and does not resume until Saturday night. Sukkot empties the city of noise and fills terraces with schach and string lights. Pesach transforms kitchens. Rosh Hashana brings family from five continents to apartments that have been empty since last summer.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                Managing a Jerusalem home means knowing this calendar intimately — not as a scheduling constraint, but as the actual rhythm of life here. We know when to prepare your home, what to prepare, and what it means if we miss the timing. This is not knowledge that transfers from property management experience in Miami or Toronto.
              </p>
            </div>
          </div>

          {/* The neighborhoods */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t" style={{ borderColor: "rgba(210,190,158,0.5)" }}>
            <div className="lg:col-span-4">
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
              <h2 className="font-display text-3xl font-light" style={{ color: "#2C2A28" }}>
                The neighborhoods North Americans choose.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(44,42,40,0.7)" }}>
                Rechavia and Talbieh — the limestone apartments with high ceilings, arched windows, and prewar dignity. Katamon, with its quieter streets and proximity to everything. The German Colony, where the mix of secular and traditional feels like nowhere else in Israel. The Old City's Jewish Quarter, where an apartment balcony looks out over two thousand years of history.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                Each neighborhood has its own va'ad bayit dynamics, its own building politics, its own quirks. We know the buildings where water pressure problems are chronic. We know the buildings where the va'ad chairman requires communication in a particular way. We know your neighborhood because we work in it.
              </p>
            </div>
          </div>

          {/* Security and tension */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t" style={{ borderColor: "rgba(210,190,158,0.5)" }}>
            <div className="lg:col-span-4">
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
              <h2 className="font-display text-3xl font-light" style={{ color: "#2C2A28" }}>
                The conversation about security.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(44,42,40,0.7)" }}>
                North American owners think about this. They do not always say it directly, but the question is always somewhere in the room: what happens to my home when things are difficult?
              </p>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(44,42,40,0.7)" }}>
                We address it directly. During periods of tension, we increase inspection frequency. We communicate proactively — we do not wait for you to ask. We tell you what we see, what the neighborhood feels like, and what, if anything, you need to know. We are not a news service and we will not catastrophize. But we will never let you find out from a headline what you should have heard from us first.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                Jerusalem has been home to people who love it through every period of its history. It will continue to be. Your home is part of that story.
              </p>
            </div>
          </div>

          {/* The bureaucracy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t" style={{ borderColor: "rgba(210,190,158,0.5)" }}>
            <div className="lg:col-span-4">
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#A68B5B" }} />
              <h2 className="font-display text-3xl font-light" style={{ color: "#2C2A28" }}>
                The Israeli layer.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "rgba(44,42,40,0.7)" }}>
                Arnona, va'ad bayit, Misrad HaShikun, the utility companies — the administrative infrastructure of owning property in Israel is not intuitive from abroad. It requires Hebrew, patience, and a willingness to be put on hold by Bezeq for forty minutes.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                We handle this layer entirely. It does not require your involvement unless a decision exceeds your spending threshold or requires your signature. You should never need to call an Israeli government office. That is part of what you are paying for.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24" style={{ backgroundColor: "#4A3F35" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="w-8 h-px mb-10" style={{ backgroundColor: "#A68B5B" }} />
          <blockquote
            className="font-display text-3xl lg:text-4xl font-light leading-relaxed"
            style={{ color: "#F7F3EE" }}
          >
            "A home in Jerusalem is rarely just an investment. We treat it accordingly."
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl lg:text-5xl font-light mb-6" style={{ color: "#2C2A28" }}>
            Tell us about your home.
          </h2>
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
