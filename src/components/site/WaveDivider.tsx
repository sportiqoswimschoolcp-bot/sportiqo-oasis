type WaveProps = {
  /** Color of the wave fill — a CSS color value from the design system. */
  fill?: string;
  flip?: boolean;
  className?: string;
};

/** Soft wave-shaped section divider used instead of hard horizontal rules. */
export function WaveDivider({
  fill = "var(--abyss)",
  flip = false,
  className = "",
}: WaveProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative -mt-px w-full leading-none ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[110px]"
      >
        <path
          d="M0,64 C240,120 480,8 720,40 C960,72 1200,120 1440,72 L1440,120 L0,120 Z"
          fill={fill}
          opacity="0.55"
        />
        <path
          d="M0,88 C260,40 520,120 780,84 C1040,48 1240,96 1440,56 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
