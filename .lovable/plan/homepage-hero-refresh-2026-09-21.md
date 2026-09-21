# Homepage hero refresh

## Scope
Update only the homepage’s first viewport. Leave navigation, all later homepage sections, other pages, colors outside the hero, and existing functionality unchanged.

## Changes
- Use the uploaded Sportiqo group photograph as the full-bleed hero background.
- Apply responsive cover positioning that preserves the swimmers and skyline while reducing excess foreground water.
- Add a restrained navy readability overlay concentrated behind the left-aligned copy.
- Replace only the hero copy with the supplied eyebrow, headline, description, programme line, and exact WhatsApp trial link.
- Keep the orange primary action and add a simple outlined secondary WhatsApp action without adding new destinations.
- Use fast, staggered fade/up entrance motion and remove the current scrolling/parallax movement from this hero.
- Validate the first viewport at desktop and mobile sizes, including image crop, text readability, and button destination.

## Technical details
- Import the uploaded image through its CDN asset pointer.
- Use hero-local semantic styling and existing brand tokens; no global palette or shared-component changes.
- Keep the hero approximately 100svh with responsive `object-position` values and touch-sized actions.
