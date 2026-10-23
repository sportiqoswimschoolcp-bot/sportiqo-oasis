import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Waves,
  Users,
  Sparkles,
  Phone,
  MapPin,
  Quote,
} from "lucide-react";

import { GoogleMapsIcon } from "@/components/site/GoogleMapsIcon";

import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { WaveDivider } from "@/components/site/WaveDivider";
import { CtaBand } from "@/components/site/CtaBand";
import heroGroupPhoto from "@/assets/sportiqo-indoor-group-hero.jpg.asset.json";
import { GALLERY, IMAGES, PHOTOS, TESTIMONIAL_PHOTOS, buildShotRows } from "@/lib/images";
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
      "My daughter began swimming here as a hobby — at 14 she is now preparing for her nationals with Sportiqo and Khade Aquatics. Not just strokes: proper stroke correction, technique and care. To be here is to be at the best place for swimming.",
    name: "Singh Preet",
    detail: "Father of a 14-year-old competitive swimmer",
    photo: TESTIMONIAL_PHOTOS.singhPreet,
    pos: "50% 35%",
  },
  {
    quote:
      "I stay in Byculla, a 30-minute drive away, but this pool is cleaner, low-chlorine and temperature-controlled. My son enrolled at two; at three he swims and floats. All credit to Francis, Aniket and Ritik sir.",
    name: "Sportiqo parent · Byculla",
    detail: "Father of a 3-year-old swimmer",
    photo: TESTIMONIAL_PHOTOS.parentToddler,
    pos: "62% 30%",
  },
  {
    quote:
      "I used to be scared to put my face in the water. My coach stayed with me until I wasn't. Now backstroke is my favourite stroke, and I count the days till my next class.",
    name: "Sportiqo kid · backstroke fan",
    detail: "Kids programme",
    photo: TESTIMONIAL_PHOTOS.kidBackstroke,
  },
  {
    quote:
      "My coach taught me to blow bubbles first, then floating, then freestyle. I can swim a full length all by myself now, and my breathing gets better every week.",
    name: "Sportiqo kid · freestyle in progress",
    detail: "Kids programme",
    photo: TESTIMONIAL_PHOTOS.kidFreestyle,
  },
  {
    quote:
      "Swimming class is the best part of my day. We play games in the warm-up, and last week I floated on my back all by myself for the first time.",
    name: "Sportiqo kid · new back-floater",
    detail: "Kids programme",
    photo: TESTIMONIAL_PHOTOS.kidBackfloat,
  },
  {
    quote:
      "I love how clear the water is here. My coach says my kick is getting stronger every batch. One day I want to swim in a real race, like the big kids.",
    name: "Sportiqo kid · future racer",
    detail: "Kids programme",
    photo: TESTIMONIAL_PHOTOS.kidRacer,
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
            Mumbai and Pune today. Navi Mumbai, Bangalore, Hyderabad, Delhi, and more cities coming soon.
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
                    {l.slug === "bkc" ? "DSC / BKC" : l.name}
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
  return (
    <section className="aurora-white overflow-hidden py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">In their words</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-5xl">
            Families who stayed.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Marquee duration={70} className="mt-12">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="mx-3 flex w-[260px] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm sm:w-[300px]"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={t.photo}
                  alt={`Photo of ${t.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: t.pos ?? "50% 35%" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <Quote className="h-4 w-4 shrink-0 text-primary/70" aria-hidden="true" />
                <p className="mt-2 line-clamp-6 min-h-[8.5rem] text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </p>
                <div className="mt-auto border-t border-border pt-3">
                  <span className="block truncate text-sm font-semibold">{t.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t.detail}</span>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </Reveal>
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
