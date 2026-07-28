import heroRooftop from "@/assets/hero-rooftop-pool.jpg";
import kidUnderwater from "@/assets/gallery-kid-underwater.jpg";
import coachKids from "@/assets/gallery-coach-kids.jpg";
import competitive from "@/assets/gallery-competitive.jpg";
import adults from "@/assets/gallery-adults.jpg";
import awards from "@/assets/gallery-awards.jpg";
import caustics from "@/assets/texture-caustics.jpg";
import poolPune from "@/assets/pool-pune.jpg";

export const IMAGES = {
  heroRooftop,
  kidUnderwater,
  coachKids,
  competitive,
  adults,
  awards,
  caustics,
  poolPune,
};

export type Shot = { src: string; alt: string };

export const GALLERY: Shot[] = [
  {
    src: heroRooftop,
    alt: "Sportiqo's floodlit rooftop swimming pool in Cuffe Parade with the Mumbai skyline behind it at night",
  },
  {
    src: kidUnderwater,
    alt: "A young Sportiqo swimmer in goggles gliding underwater during a kids learn-to-swim class",
  },
  {
    src: coachKids,
    alt: "An Australian-certified Sportiqo coach instructing a small group of children at the poolside in Prabhadevi",
  },
  {
    src: competitive,
    alt: "A competitive Sportiqo athlete powering through a butterfly stroke during squad training",
  },
  {
    src: adults,
    alt: "Adult beginners swimming lengths during a coached adult batch at Sportiqo Swim School",
  },
  {
    src: awards,
    alt: "Young Sportiqo swimmers holding medals and trophies after an inter-club swim meet",
  },
  {
    src: poolPune,
    alt: "Sportiqo's full-length outdoor lane pool in Kothrud, Pune at golden hour",
  },
  {
    src: caustics,
    alt: "Close-up of sunlight caustics shimmering across clear turquoise pool water",
  },
];
