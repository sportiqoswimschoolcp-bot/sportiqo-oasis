import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { IMAGES } from "@/lib/images";
import { BRAND } from "@/lib/site-data";

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

const MILESTONES = [
  [`${BRAND.since}`, "Sportiqo opens in Prabhadevi with two coaches and one shallow lane."],
  ["2019", "The Australian learn-to-swim progression is adopted across every batch."],
  ["2021", "Kothrud, Pune opens — our first full-length training pool."],
  ["2023", "The Cuffe Parade rooftop pool becomes our flagship South Mumbai branch."],
  ["Today", "Four pools, 3,500+ swimmers trained, and a squad racing at state level."],
];

const CREDENTIALS = [
  ["Australian Learn-To-Swim Certification", "Our head coaches are certified on the Australian progression, the syllabus we teach at every branch."],
  ["MIT World Peace University Partnership", "Collaborative coaching and facility access supporting our Pune athlete pathway."],
  ["Khade Aquatics Affiliation", "A long-standing affiliation that keeps our competitive programme connected to the wider aquatics circuit."],
  ["Certified Lifeguards On Deck", "Every session, every pool, without exception — including private lessons."],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We are not in the business of getting people wet."
        subtitle="Sportiqo exists because most swim classes in India teach children to survive water rather than to swim well. We chose the harder, slower, better method."
        image={IMAGES.coachKids}
        imageAlt="A Sportiqo coach instructing children at the poolside during a learn-to-swim class"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              An Australian method, taught in Mumbai and Pune
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Australia teaches more children to swim, more consistently, than almost anywhere on
              earth. Its learn-to-swim progression is deliberately unglamorous: water confidence
              first, breath control second, stroke mechanics only once both are automatic. It
              takes longer in week three and pays for itself for the rest of a swimmer's life.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We adopted that progression wholesale and refused to shortcut it, even when parents
              asked us to. It is why a Sportiqo swimmer's freestyle looks the same at Prabhadevi as
              it does at BKC, and why our squad athletes arrive at competitive training without
              habits that need unlearning.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The rest is discipline: small batches, coaches in the water for beginners, water
              chemistry logged twice a day, and an assessment at the end of every level so nobody
              is guessing about progress.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card rounded-2xl p-8">
              <p className="eyebrow">Milestones</p>
              <ul className="mt-6 space-y-6">
                {MILESTONES.map(([year, text]) => (
                  <li key={year} className="border-l border-primary/40 pl-5">
                    <p className="font-display text-lg text-primary">{year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-deep/40 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Credentials & partnerships</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-5xl">
              Proof, not adjectives.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CREDENTIALS.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08} rotate>
                <div className="surface-card h-full rounded-2xl p-8">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come see a session before you decide"
        body="Watch a batch, meet the coach, ask about the water. Then book if it feels right."
      />
    </>
  );
}
