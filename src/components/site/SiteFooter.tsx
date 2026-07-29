import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";
import logo from "@/assets/sportiqo-logo.png.asset.json";
import { BRAND, LOCATIONS, mapEmbed } from "@/lib/site-data";
import { WaveDivider } from "./WaveDivider";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-deep">
      <WaveDivider fill="var(--deep)" flip className="-mt-[59px] md:-mt-[109px]" />
      <div className="container-x pt-8 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo.url}
                alt="Sportiqo Swim School logo"
                width={56}
                height={56}
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-full bg-sand object-contain p-1"
              />
              <span className="font-display text-xl">{BRAND.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              World-class Australian coaching methodology, delivered across four pools in Mumbai
              and Pune. Safety-first, results-driven, and genuinely loved by the families who
              swim with us.
            </p>

            <form
              className="mt-7 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                alert("Thanks — you're on the list. We'll share batch openings first.");
              }}
            >
              <label htmlFor="newsletter" className="eyebrow">
                Batch openings first
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 rounded-full border border-input bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Join
                </button>
              </div>
            </form>

            <div className="mt-7 flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Sportiqo Swim School on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="eyebrow">Our Pools</h2>
              <ul className="mt-5 space-y-5">
                {LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link to={l.path} className="font-display text-lg hover:text-primary">
                      {l.name}, {l.city}
                    </Link>
                    <a
                      href={`tel:+${l.phone}`}
                      className="mt-1 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0" /> +91 {l.phoneDisplay}
                    </a>
                    <iframe
                      title={`Map of Sportiqo Swim School ${l.name}`}
                      src={mapEmbed(l.mapQuery, l.geo)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="mt-2 h-20 w-full rounded-md border border-border opacity-80 grayscale-[0.3]"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Explore</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {[
                  { to: "/programs", label: "Programs" },
                  { to: "/locations", label: "All Locations" },
                  { to: "/about", label: "Our Story" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact" },
                ].map((i) => (
                  <li key={i.to}>
                    <Link to={i.to} className="hover:text-foreground">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@sportiqoswimschool.com"
                className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" /> hello@sportiqoswimschool.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>Mumbai · Pune — swimming taught properly since {BRAND.since}.</p>
        </div>
      </div>
    </footer>
  );
}
