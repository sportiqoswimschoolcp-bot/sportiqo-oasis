import { useEffect, useState } from "react";

/** Subtle water-droplet cursor. Desktop + fine-pointer only. */
export function RippleCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[60] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 mix-blend-screen transition-transform duration-200 ease-out lg:block"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle at 40% 35%, color-mix(in oklab, var(--aqua) 35%, transparent), transparent 65%)",
      }}
    />
  );
}
