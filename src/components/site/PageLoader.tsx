import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/** Branded geometric loading veil shown briefly on first paint. */
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
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-foreground"
        >
          <div className="sportiqo-loader" aria-label="Loading Sportiqo" role="status" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
