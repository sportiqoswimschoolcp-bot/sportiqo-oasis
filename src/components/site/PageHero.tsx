import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { WaveDivider } from "./WaveDivider";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

/** Compact cinematic hero used on every inner page. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--abyss) 92%, transparent) 0%, color-mix(in oklab, var(--abyss) 70%, transparent) 45%, var(--abyss) 100%)",
        }}
      />
      <div className="container-x flex min-h-[62vh] flex-col justify-end pt-32 pb-16 md:min-h-[70vh] md:pb-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
      <WaveDivider fill="var(--abyss)" />
    </section>
  );
}
