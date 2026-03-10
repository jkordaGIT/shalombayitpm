"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    neighborhood: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Form submission — wire to Formspree or email service before going live
    // Replace YOUR_FORM_ID with actual Formspree endpoint
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // Fail silently in dev — handle properly before launch
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        label="Get in touch"
        headline="Tell us about your home."
        subheadline="We begin with a conversation. No commitment, no pressure — just an honest discussion about what your Jerusalem home needs and whether we are the right fit."
      />

      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact info */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#A68B5B" }}
              >
                Location
              </p>
              <p className="font-body text-base" style={{ color: "rgba(44,42,40,0.7)" }}>
                Jerusalem, Israel
              </p>
            </div>
            <div>
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#A68B5B" }}
              >
                Email
              </p>
              <a
                href="mailto:hello@shalombayitpm.com"
                className="font-body text-base transition-colors"
                style={{ color: "#2C2A28" }}
              >
                hello@shalombayitpm.com
              </a>
            </div>
            <div>
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#A68B5B" }}
              >
                WhatsApp
              </p>
              <p className="font-body text-base" style={{ color: "rgba(44,42,40,0.7)" }}>
                Available — details provided after initial consultation
              </p>
            </div>
            <div>
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#A68B5B" }}
              >
                Response time
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                Within 24 hours on business days. We are aware of North American time zones and schedule conversations to suit you — mornings in Israel are evenings in New York.
              </p>
            </div>
            <div>
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "#A68B5B" }}
              >
                Who you will speak with
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "rgba(44,42,40,0.7)" }}>
                Marc Miller, Managing Partner. Not an intake coordinator. The person who would be managing your home.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="flex flex-col gap-4 py-16">
                <div className="w-8 h-px" style={{ backgroundColor: "#A68B5B" }} />
                <h2 className="font-display text-4xl font-light" style={{ color: "#2C2A28" }}>
                  Thank you.
                </h2>
                <p className="font-body text-base leading-relaxed max-w-md" style={{ color: "rgba(44,42,40,0.65)" }}>
                  We have received your message and will be in touch within 24 hours. If you have an urgent matter, you are welcome to email us directly at hello@shalombayitpm.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-body text-xs font-medium uppercase tracking-widest"
                      style={{ color: "rgba(44,42,40,0.5)" }}
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="px-0 py-3 font-body text-base bg-transparent border-b outline-none focus:border-b-2 transition-all"
                      style={{
                        borderColor: "rgba(44,42,40,0.2)",
                        color: "#2C2A28",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-body text-xs font-medium uppercase tracking-widest"
                      style={{ color: "rgba(44,42,40,0.5)" }}
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="px-0 py-3 font-body text-base bg-transparent border-b outline-none focus:border-b-2 transition-all"
                      style={{
                        borderColor: "rgba(44,42,40,0.2)",
                        color: "#2C2A28",
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="location"
                      className="font-body text-xs font-medium uppercase tracking-widest"
                      style={{ color: "rgba(44,42,40,0.5)" }}
                    >
                      Where you are based
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="New York, Toronto, Los Angeles…"
                      value={form.location}
                      onChange={handleChange}
                      className="px-0 py-3 font-body text-base bg-transparent border-b outline-none placeholder:opacity-30"
                      style={{
                        borderColor: "rgba(44,42,40,0.2)",
                        color: "#2C2A28",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="neighborhood"
                      className="font-body text-xs font-medium uppercase tracking-widest"
                      style={{ color: "rgba(44,42,40,0.5)" }}
                    >
                      Neighborhood in Jerusalem
                    </label>
                    <input
                      id="neighborhood"
                      name="neighborhood"
                      type="text"
                      placeholder="Rechavia, Katamon, German Colony…"
                      value={form.neighborhood}
                      onChange={handleChange}
                      className="px-0 py-3 font-body text-base bg-transparent border-b outline-none placeholder:opacity-30"
                      style={{
                        borderColor: "rgba(44,42,40,0.2)",
                        color: "#2C2A28",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-body text-xs font-medium uppercase tracking-widest"
                    style={{ color: "rgba(44,42,40,0.5)" }}
                  >
                    Tell us about your home and situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What does your apartment need? What has frustrated you about property management in the past?"
                    className="px-0 py-3 font-body text-base bg-transparent border-b outline-none resize-none placeholder:opacity-30"
                    style={{
                      borderColor: "rgba(44,42,40,0.2)",
                      color: "#2C2A28",
                    }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-10 py-4 font-body text-sm font-medium uppercase tracking-widest transition-colors"
                    style={{ backgroundColor: "#5C6B3A", color: "#F7F3EE" }}
                  >
                    Send Message
                  </button>
                  <p
                    className="font-body text-xs mt-4"
                    style={{ color: "rgba(44,42,40,0.4)" }}
                  >
                    We respond within 24 hours on business days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
