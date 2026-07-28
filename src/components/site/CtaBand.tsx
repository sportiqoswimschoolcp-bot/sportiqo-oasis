import { Link } from "@tanstack/react-router";
import { PRIMARY_WA, waLink } from "@/lib/site-data";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  waNumber?: string;
  waMessage?: string;
};

/** Final full-width conversion band. WhatsApp-first, form as backup. */
export function CtaBand({
  eyebrow = "One clear next step",
  title,
  body,
  waNumber = PRIMARY_WA,
  waMessage,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-deep py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--aqua) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x relative text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(waNumber, waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[image:var(--gradient-cta)] px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
            >
              Book on WhatsApp
            </a>
            <Link
              to="/contact"
              className="w-full rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
            >
              Or send an enquiry
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
