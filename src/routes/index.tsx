import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ShieldCheck,
  Waves,
  Users,
  Sparkles,
  Phone,
  MapPin,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { GoogleMapsIcon } from "@/components/site/GoogleMapsIcon";

import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { WaveDivider } from "@/components/site/WaveDivider";
import { CtaBand } from "@/components/site/CtaBand";
import heroGroupPhoto from "@/assets/sportiqo-indoor-group-hero.jpg.asset.json";
import { GALLERY, IMAGES, PHOTOS, buildShotRows } from "@/lib/images";
import { LOCATIONS, mapEmbed, waLink } from "@/lib/site-data";

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
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const STATS = [
  "",
  "35,000+ SWIMMERS TRAINED\n",
  "Australian-Certified Coaches",
  "Multiple Locations Across Maharashtra",
  "1:6 Student-Coach Ratio",
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
    title: "Toddler/Parent-Child Program",
    age: "6 months – 3.5 years",
    body: "Baby and toddler water familiarisation, with a parent in the water for the youngest swimmers. Songs, holds, floats and first submersions.",
    image: PHOTOS.parentChild,
    alt: "A parent holding their toddler in the pool during a Sportiqo parent-and-child class",
  },
  {
    title: "Kids",
    age: "Ages 4–14",
    body: "Water confidence to competitive-ready, in five graded levels with a progress card parents can actually read.",
    image: PHOTOS.kidsKickboard,
    alt: "Two young Sportiqo swimmers working across the pool with kickboards beside their coach",
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
  {
    quote:
      "We started the parent-and-child batch when our son was eleven months old. He now floats on his back and giggles through it. The coaches are unbelievably patient with babies.",
    name: "Farhan & Zoya S.",
    detail: "Parent-child batch · Prabhadevi",
  },
  {
    quote:
      "I had a genuine fear of deep water for thirty years. Nobody made me feel silly about it. Six weeks in, I swam a full length without stopping.",
    name: "Meghana R.",
    detail: "Adult beginner · District Sports Club, BKC",
  },
  {
    quote:
      "What sold us was the ratio. Four kids to a coach means someone is actually watching your child every single minute — you can see it from the deck.",
    name: "Arjun T.",
    detail: "Parent · Cuffe Parade",
  },
  {
    quote:
      "The water is clean, the deck is safe and the batches start on time. As a working parent, that reliability is worth as much as the coaching.",
    name: "Priya N.",
    detail: "Parent · Kothrud, Pune",
  },
];


const CREDENTIALS = [
  "Australian Learn-To-Swim Certified Coaches",
  "Multiple Schools and University Partnerships",
  "Collaboration with Khade Aquatics",
  "Certified Pool Lifeguards On Deck",
  "National and International Medalists",
  "Swimming Federation Aligned Syllabus",
];

const EXPANSION_CITIES = ["Navi Mumbai", "Bangalore", "Hyderabad", "Delhi", "More Cities"];

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
  const trialUrl =
    "https://api.whatsapp.com/send/?phone=918452917393&text=Hi+Sportiqo%21+I%27d+like+to+book+a+trial+swim+session.&type=phone_number&app_absent=0";

  return (
    <section className="relative isolate h-[100svh] min-h-[680px] overflow-hidden bg-foreground md:min-h-[720px]">
      <motion.img
        src={heroGroupPhoto.url}
        alt="Sportiqo swimmers and their instructor together in the pool at night with the city skyline behind them"
        width={1280}
        height={960}
        fetchPriority="high"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[52%_center] md:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/95 via-foreground/60 to-foreground/10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/15 md:from-foreground/35" />

      <div aria-hidden="true" className="pointer-events-none absolute left-[5%] top-[24%] hidden h-32 w-32 rounded-full border border-accent/45 border-r-transparent border-b-transparent md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[7%] top-[22%] hidden h-px w-36 rotate-[-14deg] bg-accent/70 md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[16%] right-[7%] h-24 w-24 rounded-full border border-accent/35 border-l-transparent border-t-transparent" />

      <div className="container-x flex h-full flex-col justify-end pb-24 pt-32 md:justify-center md:pb-12 md:pt-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-bold tracking-[0.22em] text-accent uppercase"
        >
          SPORTIQO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-[600px] font-display text-5xl leading-[0.98] font-semibold text-primary-foreground sm:text-6xl md:text-7xl"
        >
          Learn to Swim.
          <br />
          Learn for Life.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-[580px] text-sm leading-relaxed text-primary-foreground/85 sm:text-base md:text-lg"
        >
          Structured swimming programs for Toddlers, Kids &amp; Adults — with professional coaching
          designed to build confidence, technique and lifelong swimming skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex items-center"
        >
          <a
            href={trialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-trial-shimmer inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full border border-accent/70 bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-[0_10px_28px_-14px_color-mix(in_oklab,var(--amber-cta)_75%,transparent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-14px_color-mix(in_oklab,var(--amber-cta)_90%,transparent)]"
          >
            BOOK YOUR FREE TRIAL
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[600px] text-[0.64rem] leading-relaxed font-semibold tracking-[0.13em] text-primary-foreground/75 uppercase sm:text-xs"
        >
          TODDLERS (6 MONTHS TO 3.5 YEARS)&nbsp; • &nbsp;KIDS&nbsp; • &nbsp;ADULTS&nbsp; • &nbsp;LADIES SPECIAL BATCHES&nbsp; •
          &nbsp;ATHLETE TRAINING
        </motion.p>
      </div>

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
            Multiple Decks
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
            Multiple Tracks, Each One Taken Seriously
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
  const [active, setActive] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);
  const L = LOCATIONS[active];

  const select = (i: number) => {
    setActive(i);
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="aurora-white relative bg-deep/40 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Locations</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Mumbai today. More cities coming soon.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={mapRef}
            className="mt-12 overflow-hidden rounded-2xl border border-border scroll-mt-28"
          >
            <iframe
              key={L.slug}
              title={`Map pinned on Sportiqo Swim School, ${L.name}, ${L.city}`}
              src={mapEmbed(L.mapQuery, L.geo)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{L.name}, {L.city}</span> — tap
            any pool below to move the pin.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {LOCATIONS.map((l, i) => {
            const isActive = i === active;
            return (
              <Reveal key={l.slug} delay={i * 0.07}>
                <article
                  onClick={() => select(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      select(i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  className={`surface-card flex h-full cursor-pointer flex-col rounded-2xl p-6 transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-swim)] hover:-translate-y-2 hover:shadow-[var(--shadow-float)] ${
                    isActive
                      ? "-translate-y-2 border-primary shadow-[var(--shadow-float)]"
                      : "translate-y-0"
                  }`}
                >
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl">
                    {l.slug === "bkc" ? "DSC / BKC" : `${l.name}, ${l.city}`}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {l.oneLiner}
                  </p>
                  <a
                    href={`tel:+${l.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 flex items-center gap-2 text-sm text-foreground hover:text-primary"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" /> +91 {l.phoneDisplay}
                  </a>
                  <div className="mt-5 flex flex-col gap-2">
                    <a
                      href={l.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                    >
                      <GoogleMapsIcon className="h-4 w-4 shrink-0" /> Directions
                    </a>
                    <a
                      href={waLink(l.wa, `Hi Sportiqo ${l.name}! I'd like to know more about batches at ${l.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-[#062b17] transition-transform hover:scale-[1.02]"
                    >
                      WhatsApp {l.name}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {EXPANSION_CITIES.map((city, i) => (
            <Reveal key={city} delay={(LOCATIONS.length + i) * 0.07}>
              <article className="relative flex h-full min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-destructive/50 bg-[color-mix(in_oklab,var(--destructive)_5%,transparent)] p-6 text-center transition-transform duration-500 ease-[var(--ease-swim)] hover:-translate-y-2">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-destructive"
                >
                  ?
                </span>
                <h3 className="mt-4 font-display text-lg">{city}</h3>
                <p className="mt-1 text-xs tracking-[0.28em] text-destructive uppercase">
                  Coming Soon
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), 5200);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const t = TESTIMONIALS[active];

  return (
    <section className="aurora-white py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">In their words</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
            Families who stayed.
          </h2>
        </Reveal>

        <div
          className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <Reveal>
            <figure className="surface-card relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-primary/10 select-none md:-top-14 md:text-[12rem]"
              >
                “
              </span>
              <Quote className="h-6 w-6 shrink-0 text-primary/70 md:h-7 md:w-7" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 min-h-[9.5rem] font-display text-lg leading-relaxed sm:min-h-[8rem] sm:text-xl md:min-h-[10rem] md:text-3xl"
                >
                  {t.quote}
                </motion.blockquote>
              </AnimatePresence>
              <figcaption className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-t border-border pt-5 sm:flex sm:gap-4 md:mt-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-cta)] font-display text-base text-accent-foreground md:h-11 md:w-11">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold md:text-base">
                    {t.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground md:text-sm">
                    {t.detail}
                  </span>
                </span>
                <span className="col-span-2 shrink-0 text-xs tracking-[0.3em] text-accent sm:col-span-1 sm:ml-auto sm:text-sm">
                  ★★★★★
                </span>
              </figcaption>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex flex-1 gap-1.5" role="tablist" aria-label="Testimonials">
                  {TESTIMONIALS.map((item, i) => (
                    <button
                      key={item.name}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      aria-label={`Show testimonial from ${item.name}`}
                      onClick={() => setActive(i)}
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                        i === active ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActive((i) => (i - 1 + total) % total)}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActive((i) => (i + 1) % total)}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="hidden h-full flex-col gap-2 lg:flex">
              {TESTIMONIALS.map((item, i) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`w-full rounded-2xl border px-5 py-4 text-left transition-all duration-500 ease-[var(--ease-swim)] ${
                      i === active
                        ? "translate-x-1 border-primary bg-[color-mix(in_oklab,var(--primary)_8%,transparent)]"
                        : "border-border hover:translate-x-1 hover:border-primary/50"
                    }`}
                  >
                    <span className="block truncate text-sm font-semibold">{item.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {item.detail}
                    </span>
                  </button>
                </li>
              ))}

            </ul>
          </Reveal>
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
