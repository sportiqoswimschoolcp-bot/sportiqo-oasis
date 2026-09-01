import { Link } from "@tanstack/react-router";
import { Instagram, Phone } from "lucide-react";
import logo from "@/assets/sportiqo-logo.png.asset.json";
import {
  BRAND,
  LOCATIONS,
  GENERAL_PHONE,
  GENERAL_PHONE_DISPLAY,
  GENERAL_WA,
  INSTAGRAM_URL,
  mapEmbed,
  waLink,
} from "@/lib/site-data";
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

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:+${GENERAL_PHONE}`}
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" /> +91 {GENERAL_PHONE_DISPLAY}
              </a>
              <a
                href={waLink(GENERAL_WA)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#062b17]"
              >
                WhatsApp us
              </a>
            </div>

            <div className="mt-7 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sportiqo Swim School on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
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
