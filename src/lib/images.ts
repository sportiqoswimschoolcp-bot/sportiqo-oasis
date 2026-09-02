import heroRooftop from "@/assets/hero-rooftop-pool.jpg";
import kidUnderwater from "@/assets/gallery-kid-underwater.jpg";
import coachKids from "@/assets/gallery-coach-kids.jpg";
import competitive from "@/assets/gallery-competitive.jpg";
import adults from "@/assets/gallery-adults.jpg";
import awards from "@/assets/gallery-awards.jpg";
import caustics from "@/assets/texture-caustics.jpg";
import poolPune from "@/assets/pool-pune.jpg";

import cuffeNight from "@/assets/photo-cuffe-night.jpg.asset.json";
import kidsKickboard from "@/assets/photo-kids-kickboard.jpg.asset.json";
import kidsCoach from "@/assets/photo-kids-coach.jpg.asset.json";
import toddlerLift from "@/assets/photo-toddler-lift.jpg.asset.json";
import parentChild from "@/assets/photo-parent-child.jpg.asset.json";
import babyClass from "@/assets/photo-baby-class.jpg.asset.json";
import prabhadeviPool from "@/assets/photo-prabhadevi-pool.jpg.asset.json";
import prabhadeviDeck from "@/assets/prabhadevi-deck-1.jpg.asset.json";
import prabhadeviSquad from "@/assets/prabhadevi-squad.jpg.asset.json";
import prabhadeviLanes from "@/assets/prabhadevi-lanes.jpg.asset.json";
import prabhadeviMorning from "@/assets/prabhadevi-morning.jpg.asset.json";
import prabhadeviCoaches from "@/assets/prabhadevi-coaches.jpg.asset.json";
import bkcGroupNight from "@/assets/bkc-group-night.jpg.asset.json";
import bkcBackfloat from "@/assets/bkc-backfloat.jpg.asset.json";

/** Real photography from our pools. */
export const PHOTOS = {
  prabhadeviPool: prabhadeviPool.url,
  prabhadeviDeck: prabhadeviDeck.url,
  prabhadeviSquad: prabhadeviSquad.url,
  prabhadeviLanes: prabhadeviLanes.url,
  prabhadeviMorning: prabhadeviMorning.url,
  prabhadeviCoaches: prabhadeviCoaches.url,
  bkcGroupNight: bkcGroupNight.url,
  bkcBackfloat: bkcBackfloat.url,
  cuffeNight: cuffeNight.url,
  kidsKickboard: kidsKickboard.url,
  kidsCoach: kidsCoach.url,
  toddlerLift: toddlerLift.url,
  parentChild: parentChild.url,
  babyClass: babyClass.url,
};


export const IMAGES = {
  heroRooftop,
  kidUnderwater,
  coachKids,
  competitive,
  adults,
  awards,
  caustics,
  poolPune,
  ...PHOTOS,
};

export type Shot = { src: string; alt: string };

/** Real photographs — these lead every visual wall. */
export const REAL_SHOTS: Shot[] = [
  {
    src: PHOTOS.prabhadeviPool,
    alt: "Sportiqo's covered eight-lane swimming pool at Prabhadevi, Mumbai with starting blocks and clear blue water",
  },
  {
    src: PHOTOS.cuffeNight,
    alt: "Sportiqo's floodlit lane pool at Cuffe Parade, Mumbai glowing turquoise in the evening",
  },
  {
    src: PHOTOS.kidsKickboard,
    alt: "Two young Sportiqo swimmers with kickboards working across the pool beside their coach",
  },
  {
    src: PHOTOS.kidsCoach,
    alt: "A Sportiqo coach supporting two children during a learn-to-swim session by the branded pool wall",
  },
  {
    src: PHOTOS.toddlerLift,
    alt: "A Sportiqo coach lifting a toddler out of the water during a baby swim class",
  },
  {
    src: PHOTOS.parentChild,
    alt: "A father holding his toddler in the pool during a Sportiqo parent-and-child session",
  },
  {
    src: PHOTOS.babyClass,
    alt: "Parents and toddlers on the pool edge during a Sportiqo parent-child group class",
  },
];

export const GALLERY: Shot[] = [
  ...REAL_SHOTS,
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

/**
 * Build N marquee rows where no photograph repeats within a row, and no two
 * rows show the same photograph in the same column position.
 */
export function buildShotRows(rows: number, perRow: number, pool: Shot[] = GALLERY): Shot[][] {
  const n = pool.length;
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: perRow }, (_, c) => pool[(r * 5 + c * 3 + r * c) % n]),
  ).map((row) =>
    // de-duplicate inside the row by nudging collisions forward
    row.reduce<Shot[]>((acc, shot) => {
      let candidate = shot;
      let guard = 0;
      while (acc.includes(candidate) && guard < n) {
        candidate = pool[(pool.indexOf(candidate) + 1) % n];
        guard += 1;
      }
      acc.push(candidate);
      return acc;
    }, []),
  );
}
