import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { LOCATIONS, localBusinessSchema } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const L = LOCATIONS[3];
const TITLE = "Swimming Classes at District Sports Club, BKC | Sportiqo";
const DESC =
  "Club-grade swim coaching at District Sports Club, BKC, Mumbai. Starting blocks, timing systems, periodised squad training and a dedicated masters lane for adult fitness swimmers.";

export const Route = createFileRoute("/locations/bkc")({
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
      image={IMAGES.competitive}
      imageAlt="A Sportiqo squad swimmer training butterfly in the club-grade competition pool at District Sports Club, BKC"
      intro={[
        "District Sports Club in BKC is the most club-like of our four pools, and it is built for swimmers who have decided they are serious. Starting blocks, timing systems and a coaching deck that runs on splits rather than vibes.",
        "The calendar here is year-round and periodised: base endurance, threshold work, race pace, taper, repeat. Athletes get dryland strength-and-conditioning alongside pool volume, because the shoulder that carries a season is built out of the water as much as in it.",
        "Not everyone here is racing. A dedicated masters lane runs early mornings for adults who simply want a hard, well-coached swim before work — same standards, no medals required.",
      ]}
    />
  );
}
