import { PRIMARY_WA, waLink } from "@/lib/site-data";

/** Sticky WhatsApp conversion button, present on every page. */
export function WhatsAppFab() {
  return (
    <a
      href={waLink(PRIMARY_WA)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sportiqo Swim School on WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#062b17] shadow-[var(--shadow-float)] transition-transform duration-300 hover:scale-105 md:right-6 md:bottom-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 [animation:ripple-out_2.6s_ease-out_infinite]" />
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.68.44 3.31 1.28 4.75L2.5 21.5l4.87-1.28a9.46 9.46 0 0 0 4.67 1.22h.01c5.24 0 9.5-4.26 9.5-9.5s-4.27-9.44-9.51-9.44z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
