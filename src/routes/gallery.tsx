import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { GALLERY, IMAGES } from "@/lib/images";

const TITLE = "Gallery | Sportiqo Swim School Mumbai & Pune";
const DESC =
  "Inside our pools: kids learn-to-swim batches, rooftop evening sessions in Cuffe Parade, squad training in Pune and medal days at inter-club meets.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A wall of ordinary mornings."
        subtitle="No stock photography. Just our pools, our coaches and the swimmers who show up at six in the morning."
        image={IMAGES.awards}
        imageAlt="Young Sportiqo swimmers holding medals and trophies after a swim meet"
      />

      <section className="py-16 md:py-24">
        <div className="container-x columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.concat(GALLERY.slice(0, 4)).map((shot, i) => (
            <Reveal key={`${shot.alt}-${i}`} delay={(i % 3) * 0.06}>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className={`w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-swim)] hover:scale-105 ${
                    i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="See it in person"
        body="Book a trial session and walk the deck yourself — the water tells you more than any photograph."
      />
    </>
  );
}
