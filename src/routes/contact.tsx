import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Navigation, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { LOCATIONS, PRIMARY_WA, mapDirections, mapEmbed, waLink } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const TITLE = "Contact Sportiqo Swim School | Mumbai & Pune Swimming Classes";
const DESC =
  "Call, WhatsApp or message Sportiqo Swim School. Direct numbers and maps for Prabhadevi, Cuffe Parade, Kothrud Pune and DSC.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [branch, setBranch] = useState(LOCATIONS[1].slug);

  const selected = LOCATIONS.find((l) => l.slug === branch) ?? LOCATIONS[1];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a coach, not a call centre."
        subtitle="WhatsApp is fastest — every branch desk answers directly. Prefer email? The form below reaches the same team."
        image={IMAGES.caustics}
        imageAlt="Sunlight caustics rippling across clear blue swimming pool water"
      >
        <a
          href={waLink(PRIMARY_WA)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[image:var(--gradient-cta)] px-8 py-4 font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
        >
          Message us on WhatsApp
        </a>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">Send an enquiry</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us who's swimming and where — we'll reply with batch options.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                e.currentTarget.reset();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your name" type="text" />
                <Field id="phone" label="Phone number" type="tel" />
              </div>
              <Field id="email" label="Email" type="email" />

              <div>
                <label htmlFor="branch" className="eyebrow">
                  Preferred pool
                </label>
                <select
                  id="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="mt-3 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l.slug} value={l.slug} className="bg-background">
                      {l.name}, {l.city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="My daughter is 6 and has never swum before…"
                  className="mt-3 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.01]"
              >
                Send enquiry
              </button>

              {sent && (
                <p role="status" className="text-sm text-primary">
                  Thank you — the {selected.name} desk will get back to you shortly. For an
                  instant reply, WhatsApp +91 {selected.phoneDisplay}.
                </p>
              )}
            </form>

            <a
              href="mailto:hello@sportiqoswimschool.com"
              className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" /> hello@sportiqoswimschool.com
            </a>
          </Reveal>

          <div className="space-y-5">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.06}>
                <article className="surface-card rounded-2xl p-6">
                  <h3 className="font-display text-xl">
                    {l.name}, {l.city}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {l.address}, {l.locality} {l.postal}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:+${l.phone}`}
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                    >
                      <Phone className="h-3.5 w-3.5" /> +91 {l.phoneDisplay}
                    </a>
                    <a
                      href={waLink(l.wa, `Hi Sportiqo ${l.name}!`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#062b17]"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={mapDirections(l.mapQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Directions
                    </a>
                  </div>
                  <iframe
                    title={`Map of Sportiqo Swim School ${l.name}`}
                    src={mapEmbed(l.mapQuery)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-4 h-40 w-full rounded-xl border border-border"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type }: { id: string; label: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-3 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
