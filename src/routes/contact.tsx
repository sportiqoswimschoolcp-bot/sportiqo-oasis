import { createFileRoute } from "@tanstack/react-router";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  LOCATIONS,
  GENERAL_PHONE,
  GENERAL_PHONE_DISPLAY,
  GENERAL_WA,
  mapEmbed,
  waLink,
} from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const TITLE = "Contact Sportiqo Swim School | Mumbai & Pune Swimming Classes";
const DESC =
  "Call, WhatsApp or message Sportiqo Swim School. Direct numbers and maps for Prabhadevi, Cuffe Parade, Kothrud Pune and BKC.";

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
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a coach, not a call centre."
        subtitle="No forms, no waiting. Call or WhatsApp us on +91 84529 17393 for batches, pricing and trials — or reach a specific pool directly below."
        image={IMAGES.caustics}
        imageAlt="Sunlight caustics rippling across clear blue swimming pool water"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={waLink(GENERAL_WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-cta)] px-8 py-4 font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp +91 {GENERAL_PHONE_DISPLAY}
          </a>
          <a
            href={`tel:+${GENERAL_PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" /> Call us
          </a>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">Our pools</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Each pool has its own desk — call or WhatsApp the branch directly for its batch
              timings and availability.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
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
                      href={l.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Directions
                    </a>
                  </div>
                  <iframe
                    title={`Map of Sportiqo Swim School ${l.name}`}
                    src={mapEmbed(l.mapQuery, l.geo)}
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

