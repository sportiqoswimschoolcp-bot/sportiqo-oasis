import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/** Branded ripple loading veil shown briefly on first paint. */
export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-abyss"
        >
          <div className="relative flex h-32 w-32 items-center justify-center">
            {[0, 0.4, 0.8].map((d) => (
              <span
                key={d}
                className="absolute h-20 w-20 rounded-full border border-primary/50"
                style={{ animation: `ripple-out 2.2s ${d}s ease-out infinite` }}
              />
            ))}
            <span className="font-display text-sm tracking-[0.4em] text-primary uppercase">
              Sportiqo
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
