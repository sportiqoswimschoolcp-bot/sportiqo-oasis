import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { IMAGES } from "@/lib/images";

const TITLE = "Swimming Programs for Kids, Adults & Athletes | Sportiqo Swim School";
const DESC =
  "Three structured tracks: kids learn-to-swim, adult beginner and fitness swimming, and competitive squad training — all on an Australian coaching syllabus.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const TRACKS = [
  {
    title: "Kids",
    age: "Ages 4–14",
    image: IMAGES.kidUnderwater,
    alt: "A young Sportiqo swimmer gliding underwater during a kids learn-to-swim session",
    intro:
      "Five graded levels, from blowing bubbles to swimming a confident 100 metres. Every level ends with an assessment and a progress card, so you always know exactly where your child is.",
    levels: [
      ["Level 1 · Water confidence", "Entry, submersion, breath control, floating with support."],
      ["Level 2 · Independence", "Unaided float and glide, kick with board, safe pool exit."],
      ["Level 3 · Freestyle & backstroke", "Side breathing, straight-line freestyle, backstroke basics."],
      ["Level 4 · Four strokes", "Breaststroke and butterfly introduced, 50m continuous swims."],
      ["Level 5 · Pre-competitive", "Turns, dives, pace awareness, squad trial readiness."],
    ],
  },
  {
    title: "Adults",
    age: "Beginner to fitness",
    image: IMAGES.adults,
    alt: "Adults swimming lengths during a coached Sportiqo adult batch",
    intro:
      "Most adults who join us have avoided water for decades. We start where you are, in the shallow lane, with a coach in the water. No group stares, no timed sets on day one.",
    levels: [
      ["Fear-to-float", "Six sessions dedicated purely to comfort and breathing."],
      ["First 25 metres", "Freestyle mechanics broken into drills you can actually feel."],
      ["Fitness lane", "Structured aerobic sets for adults who already swim."],
      ["Private coaching", "One-to-one, scheduled around your working week."],
    ],
  },
  {
    title: "Athletes",
    age: "Squad & competitive",
    image: IMAGES.competitive,
    alt: "Sportiqo squad swimmer powering through a butterfly stroke in training",
    intro:
      "A genuine performance pathway: periodised training blocks, video stroke analysis, dryland conditioning and a race calendar that runs from club galas to state meets.",
    levels: [
      ["Development squad", "Technique volume, legal turns, first competitive entries."],
      ["Performance squad", "Threshold and race-pace sets, split analysis, taper planning."],
      ["Dryland S&C", "Shoulder health, core stability and land-based power."],
      ["Meet support", "Warm-up protocols and on-deck coaching at competitions."],
    ],
  },
];

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Three tracks. Each one taken seriously."
        subtitle="Kids, adults and competitive athletes follow entirely separate syllabi — because a four-year-old learning to float and a fourteen-year-old chasing a state time need very different mornings."
        image={IMAGES.caustics}
        imageAlt="Sunlight caustics shimmering across clear turquoise swimming pool water"
      />

      {TRACKS.map((t, i) => (
        <section key={t.title} className={i % 2 === 1 ? "bg-deep/40 py-20 md:py-28" : "py-20 md:py-28"}>
          <div className="container-x grid items-center gap-12 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={t.image}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow">{t.age}</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl">{t.title}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{t.intro}</p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {t.levels.map(([label, detail]) => (
                  <li key={label} className="py-4">
                    <p className="font-medium">{label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        title="Start with one trial session"
        body="We'll assess where you or your child currently sits, recommend a level, and only then talk about batches."
      />
    </>
  );
}
