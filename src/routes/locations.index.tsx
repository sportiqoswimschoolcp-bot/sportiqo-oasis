import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Navigation } from "lucide-react";
import { GoogleMapsIcon } from "@/components/site/GoogleMapsIcon";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { LOCATIONS, mapEmbed } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const TITLE = "Our Swimming Pools in Mumbai & Pune | Sportiqo Swim School";
const DESC =
  "Four Sportiqo pools: Prabhadevi and Cuffe Parade in Mumbai, Kothrud in Pune and District Sports Club in BKC. Find batch timings, phone numbers and directions for each branch.";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  const [active, setActive] = useState(LOCATIONS[1]);

  return (
    <>
      <PageHero
        eyebrow="Four pools, one standard"
        title="Find your Sportiqo pool"
        subtitle="Three in Mumbai, one in Pune. Each with its own coaching desk, its own batch calendar, and its own character."
        image={IMAGES.poolPune}
        imageAlt="Sportiqo's outdoor lane swimming pool with palm trees at golden hour"
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Select a branch</p>
              <ul className="mt-6 space-y-3">
                {LOCATIONS.map((l) => {
                  const isActive = l.slug === active.slug;
                  return (
                    <li key={l.slug}>
                      <button
                        type="button"
                        onClick={() => setActive(l)}
                        className={`w-full rounded-xl border px-5 py-4 text-left transition-colors ${
                          isActive
                            ? "border-primary bg-card"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="block font-display text-xl">
                          {l.name}, {l.city}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {l.oneLiner}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="surface-card overflow-hidden rounded-2xl">
              <iframe
                key={active.slug}
                title={`Map of Sportiqo Swim School ${active.name}, ${active.city}`}
                src={mapEmbed(active.mapQuery, active.geo)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full md:h-[420px]"
              />
              <div className="p-7">
                <h2 className="font-display text-2xl">
                  {active.name}, {active.city}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {active.address}, {active.locality} {active.postal}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={active.path}
                    className="rounded-full bg-[image:var(--gradient-cta)] px-6 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    View {active.name} page
                  </Link>
                  <a
                    href={`tel:+${active.phone}`}
                    className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:border-primary hover:text-primary"
                  >
                    <Phone className="h-4 w-4" /> +91 {active.phoneDisplay}
                  </a>
                  <a
                    href={active.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:border-primary hover:text-primary"
                  >
                    <Navigation className="h-4 w-4" /> Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.07}>
              <article className="surface-card flex h-full flex-col rounded-2xl p-6">
                <h3 className="font-display text-xl">
                  {l.name}, {l.city}
                </h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                  {l.highlights.slice(0, 2).map((h) => (
                    <li key={h}>· {h}</li>
                  ))}
                </ul>
                <Link
                  to={l.path}
                  className="mt-5 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium hover:border-primary hover:text-primary"
                >
                  View Location
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which pool suits you?"
        body="Tell us where you live and what you're after — we'll point you to the right branch and the right batch."
      />
    </>
  );
}
