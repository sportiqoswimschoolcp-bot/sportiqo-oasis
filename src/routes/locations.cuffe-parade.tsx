import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { LOCATIONS, localBusinessSchema } from "@/lib/site-data";
import { PHOTOS } from "@/lib/images";

const L = LOCATIONS[1];
const TITLE = "Swimming Classes in Cuffe Parade, Mumbai | Sportiqo Swim School";
const DESC =
  "Swim at our flagship rooftop pool in Cuffe Parade, South Mumbai. Floodlit evening batches, adult and kids coaching, private lessons. Serving Colaba & Nariman Point.";

export const Route = createFileRoute("/locations/cuffe-parade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: L.keywords },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "business.business" },
      { property: "og:url", content: L.path },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: L.path }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema(L)) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationPage
      location={L}
      image={PHOTOS.cuffeNight}
      imageAlt="Sportiqo's floodlit lane pool at Cuffe Parade, Mumbai lit turquoise in the evening"
      intro={[
        "Cuffe Parade is our flagship, and the reason is simple: it is a rooftop pool with the South Mumbai skyline on one side and the sea breeze on the other. Swimmers book the 7pm slot months in advance, and they are not doing it for the lane markings.",
        "The setting is the headline, but the coaching is the reason people stay. This is our most requested branch for adult beginners — professionals from Nariman Point and Colaba who never learned as children and would rather learn without an audience. Semi-private and fully private slots exist for exactly that reason.",
        "Kids' batches run in daylight hours with a lifeguard and a coach on deck at all times. Evening squad sessions run under floodlights, which is when the pool looks its best and the sets get their hardest.",
      ]}
    />
  );
}
