import { Link } from "@tanstack/react-router";
import { Phone, Navigation, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { CtaBand } from "./CtaBand";
import { type Location, mapEmbed, waLink } from "@/lib/site-data";

type Props = {
  location: Location;
  image: string;
  imageAlt: string;
  intro: string[];
  batches: { label: string; detail: string }[];
};

/** Shared shell for a single branch page. Copy stays in each route file. */
export function LocationPage({ location: l, image, imageAlt, intro, batches }: Props) {
  return (
    <>
      <PageHero
        eyebrow={`${l.name} · ${l.city}`}
        title={l.headline}
        subtitle={l.oneLiner}
        image={image}
        imageAlt={imageAlt}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={waLink(l.wa, `Hi Sportiqo ${l.name}! I'd like to book a trial swim session.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[image:var(--gradient-cta)] px-7 py-3.5 font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a Trial at {l.name}
          </a>
          <a
            href={`tel:+${l.phone}`}
            className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +91 {l.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                What swimming at {l.name} is actually like
              </h2>
              {intro.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {l.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.06}>
                  <div className="surface-card flex h-full items-start gap-3 rounded-xl p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-sm leading-relaxed">{h}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h3 className="mt-14 font-display text-2xl">Batches at this pool</h3>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {batches.map((b) => (
                  <li key={b.label} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                    <span className="font-medium">{b.label}</span>
                    <span className="text-sm text-muted-foreground">{b.detail}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="surface-card rounded-2xl p-7">
                <p className="eyebrow">Contact this branch</p>
                <h3 className="mt-3 font-display text-2xl">
                  Sportiqo {l.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {l.address}, {l.locality}, {l.city} {l.postal}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0 text-primary" /> Open daily,{" "}
                  {l.hours.replace("Mo-Su ", "")}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={waLink(l.wa, `Hi Sportiqo ${l.name}! I'd like batch details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[image:var(--gradient-cta)] px-6 py-3 text-center font-semibold text-accent-foreground"
                  >
                    WhatsApp {l.name}
                  </a>
                  <a
                    href={`tel:+${l.phone}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:border-primary hover:text-primary"
                  >
                    <Phone className="h-4 w-4" /> +91 {l.phoneDisplay}
                  </a>
                  <a
                    href={l.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:border-primary hover:text-primary"
                  >
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                </div>

                <iframe
                  title={`Map to Sportiqo Swim School ${l.name}, ${l.city}`}
                  src={mapEmbed(l.mapQuery, l.geo)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mt-6 h-56 w-full rounded-xl border border-border"
                />
              </div>

              <Link
                to="/locations"
                className="mt-6 inline-block text-sm text-muted-foreground hover:text-primary"
              >
                ← See all four Sportiqo pools
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow={`${l.name}, ${l.city}`}
        title={`Swim at ${l.name} this week`}
        body={`Message the ${l.name} desk directly and we'll hold a slot in the next available batch.`}
        waNumber={l.wa}
        waMessage={`Hi Sportiqo ${l.name}! I'd like to book a trial session.`}
      />
    </>
  );
}
