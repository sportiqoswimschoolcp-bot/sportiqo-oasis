import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/sportiqo-logo.png.asset.json";
import { PRIMARY_WA, waLink } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3 md:pt-5">
      <div
        className={`glass-nav w-full max-w-5xl rounded-[1.75rem] transition-all duration-500 ${
          scrolled ? "shadow-2xl md:max-w-4xl" : ""
        }`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-3 py-2 md:px-4 md:py-2.5">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <img
              src={logo.url}
              alt="Sportiqo Swim School logo"
              width={44}
              height={44}
              className="h-9 w-9 shrink-0 rounded-full bg-sand object-contain p-1 md:h-10 md:w-10"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-tight tracking-tight">
                Sportiqo
              </span>
              <span className="block truncate text-[0.55rem] tracking-[0.28em] text-muted-foreground uppercase">
                Swim School
              </span>
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                activeProps={{
                  className:
                    "text-foreground bg-white/10 shadow-[0_0_0_1px_color-mix(in_oklab,var(--amber-cta)_35%,transparent)]",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <a
              href={waLink(PRIMARY_WA)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[image:var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[0_10px_30px_-12px_var(--amber-cta)] transition-transform duration-300 hover:scale-[1.04] lg:inline-flex"
            >
              Book a Trial
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <nav className="flex flex-col px-5 pb-4" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 font-display text-lg"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={waLink(PRIMARY_WA)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-cta)] px-5 py-3 font-semibold text-accent-foreground"
              >
                <Phone className="h-4 w-4" /> Book a Trial Session
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>

  );
}
