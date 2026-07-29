import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ShieldCheck, Waves, Users, Sparkles, Phone, MapPin, Quote } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { WaveDivider } from "@/components/site/WaveDivider";
import { CtaBand } from "@/components/site/CtaBand";
import { GALLERY, IMAGES, PHOTOS, buildShotRows } from "@/lib/images";
import { BRAND, LOCATIONS, PRIMARY_WA, mapEmbed, waLink } from "@/lib/site-data";

const TITLE = "Sportiqo Swim School | Mumbai's Most Loved Swimming Pool";
const DESC =
  "Premium swim academy in Mumbai & Pune. Australian-certified coaching for kids, adults and competitive athletes across four pools. Book a trial session today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const STATS = [
  "4 Pools · Mumbai & Pune",
  "3,500+ Swimmers Trained",
  "Australian-Certified Coaches",
  `Teaching Since ${BRAND.since}`,
  "1:4 Coach-to-Swimmer Ratio",
  "Water Tested Twice Daily",
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Safety, engineered",
    body: "Lifeguards on deck for every session, water chemistry logged twice a day, and a coach in the water — never only on the edge — for beginner batches.",
  },
  {
    icon: Waves,
    title: "Australian coaching pedigree",
    body: "Our curriculum follows the Australian learn-to-swim progression: water confidence, breath control, then stroke mechanics. Nothing is skipped to look fast.",
  },
  {
    icon: Users,
    title: "Age-appropriate tracks",
    body: "Four-year-olds don't train like fourteen-year-olds. Kids, adults and squad athletes each follow a distinct syllabus with their own assessment ladder.",
  },
  {
    icon: Sparkles,
    title: "Facilities worth showing up for",
    body: "From the rooftop pool at Cuffe Parade to the full-length lanes in Kothrud, every deck is clean, floodlit and built for serious practice.",
  },
];

const PROGRAMS = [
  {
    title: "Kids",
    age: "Ages 4–14",
    body: "Water confidence to competitive-ready, in five graded levels with a progress card parents can actually read.",
    image: PHOTOS.kidsKickboard,
    alt: "Two young Sportiqo swimmers working across the pool with kickboards beside their coach",
  },
  {
    title: "Toddlers & Parent-Child",
    age: "6 months – 3.5 years",
    body: "Baby and toddler water familiarisation, with a parent in the water for the youngest swimmers. Songs, holds, floats and first submersions.",
    image: PHOTOS.parentChild,
    alt: "A parent holding their toddler in the pool during a Sportiqo parent-and-child class",
  },
  {
    title: "Adults",
    age: "Beginner to fitness",
    body: "For the adult who never learned, and the one chasing a cleaner freestyle. Private and small-group options, judgement-free.",
    image: IMAGES.adults,
    alt: "Adults swimming lengths in a coached Sportiqo adult batch",
  },
  {
    title: "Athletes",
    age: "Squad & competitive",
    body: "Periodised training blocks, video stroke analysis and a meet calendar that takes swimmers to district and state level.",
    image: IMAGES.competitive,
    alt: "Competitive swimmer training butterfly in a Sportiqo squad session",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My daughter went from refusing to put her face in the water to swimming 50 metres unaided in one term. The coaches never rushed her once.",
    name: "Anuja M.",
    detail: "Parent · Prabhadevi",
  },
  {
    quote:
      "I learned to swim at 41 on a rooftop looking at the Mumbai skyline. Honestly, it stopped feeling like a class and started feeling like the best hour of my week.",
    name: "Rohan D.",
    detail: "Adult beginner · Cuffe Parade",
  },
  {
    quote:
      "The squad programme is genuinely serious. Timing sets, video feedback, a real meet calendar. My son dropped four seconds off his 100 free in a season.",
    name: "Shweta K.",
    detail: "Parent · Kothrud, Pune",
  },
];

const CREDENTIALS = [
  "Australian Learn-To-Swim Certified Coaches",
  "MIT World Peace University Partnership",
  "Khade Aquatics Affiliation",
  "Certified Pool Lifeguards On Deck",
  "District & State Meet Medallists",
  "Swimming Federation Aligned Syllabus",
];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySportiqo />
      <ImageWall />
      <ProgramsOverview />
      <LocationsSection />
      <Testimonials />
      <Credentials />
      <CtaBand
        title="Book your child's trial class today"
        body="One session is usually all it takes. Message us on WhatsApp and we'll suggest a batch, a pool and a time that fits your week."
      />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate h-[100svh] min-h-[620px] overflow-hidden">
      <motion.img
        src={IMAGES.heroRooftop}
        alt="Sportiqo's rooftop swimming pool at Cuffe Parade glowing turquoise at night with the Mumbai skyline behind"
        width={1920}
        height={1280}
        fetchPriority="high"
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 h-[120%] w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--abyss) 55%, transparent) 0%, color-mix(in oklab, var(--abyss) 18%, transparent) 42%, var(--abyss) 96%)",
        }}
      />

      <motion.div
        style={{ y: fgY, opacity: fade }}
        className="container-x flex h-full flex-col justify-end pb-24 md:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display text-[2.6rem] leading-[1.02] md:text-7xl"
        >
          Swimming, taught the way it should be.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          World-class Australian coaching for kids, adults and competitive athletes — across four
          pools in Mumbai and Pune.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={waLink(PRIMARY_WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[image:var(--gradient-cta)] px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a Trial Session
          </a>
          <a
            href={waLink(PRIMARY_WA)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Sportiqo on WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.68.44 3.31 1.28 4.75L2.5 21.5l4.87-1.28a9.46 9.46 0 0 0 4.67 1.22h.01c5.24 0 9.5-4.26 9.5-9.5s-4.27-9.44-9.51-9.44z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <WaveDivider fill="var(--abyss)" className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

function TrustBar() {
  return (
    <section aria-label="Sportiqo at a glance" className="border-y border-border bg-deep/60 py-5 [border-image:linear-gradient(90deg,transparent,color-mix(in_oklab,var(--amber-cta)_55%,transparent),transparent)_1]">
      <Marquee duration={38}>
        {STATS.map((s) => (
          <span
            key={s}
            className="flex items-center gap-6 px-6 text-xs tracking-[0.22em] whitespace-nowrap text-muted-foreground uppercase md:text-sm"
          >
            {s}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function WhySportiqo() {
  return (
    <section className="caustics aurora-white relative py-24 md:py-32">
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">Why Sportiqo</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            A swim school built on method, not marketing.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} rotate>
              <motion.article
                whileHover={{ y: -8, rotateX: -4, rotateY: 4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1000 }}
                className="surface-card h-full rounded-2xl p-8 md:p-10"
              >
                <p.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.body}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageWall() {
  const shotRows = buildShotRows(3, 5, GALLERY);
  const rows = [
    { shots: shotRows[0], duration: 52, reverse: false },
    { shots: shotRows[1], duration: 64, reverse: true },
    { shots: shotRows[2], duration: 46, reverse: false },
  ];

  return (
    <section aria-label="Life at Sportiqo" className="relative overflow-hidden bg-deep/40 py-20">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Life at the pool</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
            Four decks. Thousands of mornings. One standard.
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        {rows.map((row, ri) => (
          <Marquee key={ri} duration={row.duration} reverse={row.reverse}>
            {row.shots.map((shot, i) => (
              <figure
                key={`${ri}-${i}`}
                className="mx-2 h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-border md:h-56 md:w-96"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}

function ProgramsOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Programs</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Four tracks. Each one taken seriously.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Link
                to="/programs"
                className="group surface-card block h-full overflow-hidden rounded-2xl"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-swim)] group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow">{p.age}</p>
                  <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-primary">
                    Explore the syllabus →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="aurora-white relative bg-deep/40 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Locations</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Four pools across Mumbai and Pune.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map pinned on Sportiqo Swim School, Cuffe Parade, Mumbai"
              src={mapEmbed(LOCATIONS[1].mapQuery, LOCATIONS[1].geo)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.07}>
              <article className="surface-card flex h-full flex-col rounded-2xl p-6">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl">
                  {l.name}, {l.city}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {l.oneLiner}
                </p>
                <a
                  href={`tel:+${l.phone}`}
                  className="mt-4 flex items-center gap-2 text-sm text-foreground hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" /> +91 {l.phoneDisplay}
                </a>
                <Link
                  to={l.path}
                  className="mt-5 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  View Location
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="aurora-white py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">In their words</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="surface-card h-full rounded-2xl p-8">
                <Quote className="h-8 w-8 text-primary/70" aria-hidden="true" />
                <blockquote className="mt-5 font-display text-lg leading-relaxed italic md:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section aria-label="Awards and credentials" className="border-y border-border py-6">
      <Marquee duration={50} reverse>
        {CREDENTIALS.map((c) => (
          <span
            key={c}
            className="flex items-center gap-5 px-6 font-display text-sm whitespace-nowrap text-muted-foreground md:text-base"
          >
            {c}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
