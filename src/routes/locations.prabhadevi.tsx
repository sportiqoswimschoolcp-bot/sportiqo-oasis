import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { LOCATIONS, localBusinessSchema } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const L = LOCATIONS[0];
const TITLE = "Swimming Classes in Prabhadevi, Mumbai | Sportiqo Swim School";
const DESC =
  "Learn to swim in Prabhadevi with Australian-certified coaches. Kids and adult batches, 1:6 ratio, warm clean water. Minutes from Dadar, Worli and Mahim.";

export const Route = createFileRoute("/locations/prabhadevi")({
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
      image={IMAGES.prabhadeviPool}
      imageAlt="Sportiqo's covered eight-lane swimming pool at Prabhadevi, Mumbai with starting blocks and clear blue water"
      intro={[
        "Prabhadevi is where Sportiqo started, and it still sets the tone for every other pool we run. It is a working central-Mumbai neighbourhood pool: no queues at the deck, no oversized batches, and a coach who knows every swimmer's name by the second week.",
        "Because we sit between Dadar, Worli, Lower Parel and Mahim, most families reach us in under fifteen minutes. That matters more than it sounds — swimming only improves with frequency, and the pool you can actually get to is the pool your child will improve in.",
        "Beginners start in the shallow lane with a coach in the water alongside them. Nobody is pushed into deep water to prove a point. Progression here is graded, recorded and shared with parents at the end of every level.",
      ]}
    />
  );
}
