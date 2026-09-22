import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { IMAGES } from "@/lib/images";
import { LOCATIONS } from "@/lib/site-data";

const TITLE = "About Sportiqo Swim School | Australian Coaching in Mumbai & Pune";
const DESC =
  "Our story, our Australian learn-to-swim methodology, and the partnerships and credentials behind Sportiqo Swim School's four pools in Mumbai and Pune.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Swimming, taught with purpose."
        subtitle="Sportiqo Swim School offers structured, supportive swimming programmes for toddlers, children, adults and athletes across Mumbai and Pune."
        image={IMAGES.coachKids}
        imageAlt="A Sportiqo coach instructing children at the poolside during a learn-to-swim class"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              About Sportiqo
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We help swimmers build confidence, sound technique and a lasting relationship with
              the water. Every programme is shaped around the swimmer's age, experience and goals,
              from a first comfortable float to focused athlete training.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our coaches create a calm, encouraging environment while keeping each session
              purposeful. Families can choose the branch that best suits their routine across
              Mumbai and Pune.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card rounded-2xl p-8">
              <p className="eyebrow">Our branches</p>
              <ul className="mt-6 divide-y divide-border">
                {LOCATIONS.map((location) => (
                  <li key={location.slug} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-display text-xl">{location.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{location.city}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Come see a session before you decide"
        body="Watch a batch, meet the coach, ask about the water. Then book if it feels right."
      />
    </>
  );
}
