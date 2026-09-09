import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { LOCATIONS, localBusinessSchema } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const L = LOCATIONS[2];
const TITLE = "Swimming Academy in Kothrud, Pune | Sportiqo Swim School";
const DESC =
  "Full-length lane pool in Kothrud, Pune. Learn-to-swim, stroke correction and competitive squad training with Australian-certified coaches. Near Karve Road & Bavdhan.";

export const Route = createFileRoute("/locations/kothrud-pune")({
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
      image={IMAGES.poolPune}
      imageAlt="Sportiqo's full-length outdoor lane swimming pool in Kothrud, Pune at golden hour"
      intro={[
        "Kothrud is our training pool. Full-length lanes, clean pace clocks, and enough water to actually build endurance rather than turn every four strokes. If your child has outgrown a small learn-to-swim tank, this is where they go next.",
        "Pune's competitive scene is genuinely strong, and our Kothrud squad feeds it. Swimmers here follow periodised blocks through the season, get filmed for stroke analysis, and race a real meet calendar rather than an occasional internal gala.",
        "It is still a beginner-friendly pool. Karve Road, Bavdhan, Warje and Deccan families make up most of our morning learn-to-swim batches, and our six-week summer intensive routinely takes a nervous first-timer to comfortable, unaided lengths.",
      ]}
    />
  );
}
