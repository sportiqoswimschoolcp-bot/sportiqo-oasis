# Sportiqo Oasis

Build a premium, ultra-modern multi-page website for Sportiqo Swim School, a luxury swim academy brand operating four locations across Mumbai and Pune. This should NOT look like a generic gym/coaching template — think of the aesthetic language of a boutique hospitality brand (Aman Resorts, Soho House) crossed with a high-performance sports brand (Nike, Lululemon). Deep, elegant, aquatic, cinematic. Every scroll should feel intentional and premium.

BRAND

Name: Sportiqo Swim School

Tagline direction: "Mumbai's Most Loved Swimming Pool" / "World-Class Australian Coaching"

Positioning: Premium swim academy for kids, adults, and competitive athletes. Not a budget/mass-market swim class — a high-end, results-driven, safety-first academy with international coaching pedigree.

Brand colors: Deep navy / ocean blue (#0A2540 to #1B4F72 range), aqua/teal accent (#2EC4E0 range), white, with a warm orange/amber accent for CTAs (matches their existing Instagram creative — "We Are Open", "99 Problems" campaign style uses orange typography on blue water backgrounds)

Typography: A elegant modern serif or high-contrast display font for headlines (evokes luxury), paired with a clean geometric sans-serif for body text. Avoid default system fonts — use Google Fonts like "Fraunces" or "Playfair Display" for headlines + "Inter" or "Manrope" for body.

Visual motifs: Water ripples, light caustics (the shimmering light patterns seen at the bottom of pools), lane lines, droplets, subtle wave-shaped section dividers instead of hard straight lines between sections.

LOCATIONS (build a dedicated page/section for each — critical for local SEO)

Prabhadevi, Mumbai — 98921 27669

Cuffe Parade, Mumbai — 7039376559 (premium rooftop pool location — flagship)

Kothrud, Pune — 7499416930

DSC — 8452917393

Each location needs its own dedicated sub-page (see sitemap below) with unique, locally-optimized content — not duplicated boilerplate — so each one can independently rank on Google for searches like "swimming classes in Prabhadevi," "swim school Cuffe Parade," "swimming academy Kothrud Pune," etc.

SITE STRUCTURE / SITEMAP

/ — Home (flagship experience, see below)

/locations — Overview of all 4 branches with an interactive map/selector

/locations/prabhadevi

/locations/cuffe-parade

/locations/kothrud-pune

/locations/dsc

/programs — Kids / Adults / Competitive Athletes (three clear tracks)

/about — Story, Australian coaching pedigree, awards/credentials

/gallery — Photo/video wall

/contact — Form + WhatsApp click-to-chat + all 4 numbers + embedded maps

Each location page should also have its own contact micro-section with that branch's specific number and a "Get Directions" button.

This subpage structure is what lets each location independently show up in Google (location pages are the #1 lever for local SEO for multi-branch businesses).

HOMEPAGE — SECTION BY SECTION

Hero: Full-bleed cinematic video/image background of the Cuffe Parade rooftop pool at night (their existing content already has this exact shot — city skyline behind the pool). Large serif headline, one-line subhead, single primary CTA ("Book a Trial Session") + WhatsApp icon CTA. Subtle parallax so the water background moves slower than foreground text on scroll.

Trust bar: Animated marquee/ticker with logos or stats — "4 Locations", "3,500+ Swimmers Trained", "Australian-Certified Coaches", "Since [X]" — continuously auto-scrolling left to right, pausing on hover.

"Why Sportiqo" — 3D scroll section: As the user scrolls, 3 or 4 feature cards (Safety, Coaching Pedigree, Age-Appropriate Programs, Facilities) animate in with a subtle 3D tilt/depth effect (cards appear to float and rotate slightly into place using scroll-triggered transforms — use Framer Motion or GSAP ScrollTrigger).

Image showcase — triple-row horizontal marquee: This is a signature moment. Build 3 stacked rows of photos from their pools/classes/events, each row auto-scrolling continuously right to left at a slightly different speed (creates a parallax "wall of motion" effect — like Apple's product pages or Linear's site). Use their actual content style: swim classes, awards ceremonies, "We Are Open" campaign shots, kids in pools, group photos. Infinite loop, pause on hover, lazy-loaded images.

Programs overview: 3 clean cards — Kids / Adults / Athletes — each with icon, short description, link to /programs.

Locations map section: Interactive embedded map (or stylized custom map graphic) showing all 4 pins, each clickable to jump to that location's page. Directly below, a clean 4-column card grid with location name, one-line description, phone number (click-to-call on mobile), and "View Location" button.

Testimonials / Social proof: Carousel of parent/swimmer quotes, styled elegantly (not default Bootstrap-card look) — large quotation marks, serif italic text, subtle fade transitions.

Awards & credentials strip: Pull from their "AWARDS" Instagram highlight — logos/badges of certifications, MIT World Peace University partnership, Khade Aquatics affiliation, etc.

Final CTA section: Bold, full-width, dark background with a single strong closing call to action — "Book Your Child's Trial Class Today" — with WhatsApp button prioritized (WhatsApp-first lead capture, since that's the fastest way to reduce lead drop-off) and a lead form as backup.

Footer: All 4 locations + numbers, social links, quick nav, newsletter signup, Google-map micro-embeds per location if possible.

INTERACTION / MOTION REQUIREMENTS

Scroll-triggered reveal animations throughout (fade + slide + slight 3D rotateX/rotateY) using Framer Motion or GSAP — nothing should just "appear," everything should feel like it's arriving with weight and depth.

Custom cursor on desktop (optional but adds polish) — subtle water-droplet or ripple cursor effect.

Section transitions use soft wave-shaped SVG dividers, not hard horizontal lines.

Sticky/floating WhatsApp button, bottom-right, on every page — this is the primary conversion mechanism.

Smooth scroll (Lenis or native smooth-scroll) site-wide.

Loading state: elegant, branded (ripple/wave animation), never a generic spinner.

PERFORMANCE & SEO (non-negotiable)

Fully responsive, mobile-first (majority of traffic will be mobile searches like "swimming classes near me")

Lazy-load all images and video; use next-gen formats (WebP/AVIF) and responsive srcset

Semantic HTML5 structure with proper heading hierarchy (single H1 per page)

Unique, keyword-optimized <title> and meta description per page — especially per-location pages (e.g., "Swimming Classes in Cuffe Parade, Mumbai | Sportiqo Swim School")

Schema.org structured data: LocalBusiness / SportsActivityLocation markup for each branch (name, address, phone, geo-coordinates, opening hours) — this is what enables Google Maps/local pack rankings

Open Graph + Twitter Card meta tags for social sharing previews

XML sitemap and clean robots.txt

Fast Core Web Vitals — target LCP under 2s, minimal layout shift, no render-blocking scripts

Alt text on every image describing the location/activity (also helps AI/LLM-based search discovery going forward, e.g., ChatGPT/Perplexity citing the site)

Click-to-call (tel:) links on all phone numbers on mobile, and https://wa.me/91XXXXXXXXXX deep links for WhatsApp buttons

TONE OF COPY

Confident, warm, slightly aspirational — never generic "learn to swim today" stock copy. Use specific proof points (Australian coaching credentials, named location advantages like the Cuffe Parade rooftop setting, MIT-WPU partnership) rather than vague claims. Every page should have one clear, singular call to action — don't dilute with multiple competing CTAs.

DELIVERABLE

A production-ready, multi-page React site with the structure above, using Tailwind CSS for styling, Framer Motion/GSAP for scroll animations, and clean component architecture so each location page can be updated independently without touching shared layout code.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6e48c516-f9a0-47b6-8dd5-707e1f0cb110).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
