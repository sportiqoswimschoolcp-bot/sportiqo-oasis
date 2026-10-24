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
import sportiqoKidGoggles from "@/assets/sportiqo-kid-goggles.webp.asset.json";
import sportiqoKidPoolside from "@/assets/sportiqo-kid-poolside.webp.asset.json";
import sportiqoIndoorPool from "@/assets/sportiqo-indoor-pool.webp.asset.json";
import sportiqoCoachLesson from "@/assets/sportiqo-coach-lesson.webp.asset.json";
import sportiqoAdultsIndoor from "@/assets/sportiqo-adults-indoor.jpg.asset.json";
import sportiqoAthletesAwards from "@/assets/sportiqo-athletes-awards.jpg.asset.json";
import poolToddlerLesson from "@/assets/pool-toddler-lesson.jpg.asset.json";
import awardLadySwimmer from "@/assets/award-lady-swimmer.jpg.asset.json";
import awardBoysGroup from "@/assets/award-boys-group.jpg.asset.json";
import awardToddlerGirl from "@/assets/award-toddler-girl.jpg.asset.json";
import awardKidsTrio from "@/assets/award-kids-trio.jpg.asset.json";
import awardLadiesBatch from "@/assets/award-ladies-batch.jpg.asset.json";
import awardAdultPair from "@/assets/award-adult-pair.jpg.asset.json";
import testimonialSinghPreet from "@/assets/testimonial-singh-preet.jpg.asset.json";
import testimonialParentToddler from "@/assets/testimonial-parent-toddler.jpg.asset.json";
import testimonialKidBackstroke from "@/assets/testimonial-kid-backstroke.jpg.asset.json";
import testimonialKidFreestyle from "@/assets/testimonial-kid-freestyle.jpg.asset.json";
import testimonialKidBackfloat from "@/assets/testimonial-kid-backfloat.jpg.asset.json";
import testimonialKidRacer from "@/assets/testimonial-kid-racer.jpg.asset.json";

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
  kidGoggles: sportiqoKidGoggles.url,
  kidPoolside: sportiqoKidPoolside.url,
  indoorPool: sportiqoIndoorPool.url,
  coachLesson: sportiqoCoachLesson.url,
  adultsIndoor: sportiqoAdultsIndoor.url,
  athletesAwards: sportiqoAthletesAwards.url,
  toddlerLesson: poolToddlerLesson.url,
  awardLadySwimmer: awardLadySwimmer.url,
  awardBoysGroup: awardBoysGroup.url,
  awardToddlerGirl: awardToddlerGirl.url,
  awardKidsTrio: awardKidsTrio.url,
  awardLadiesBatch: awardLadiesBatch.url,
  awardAdultPair: awardAdultPair.url,
};


export const IMAGES = {
  heroRooftop: PHOTOS.indoorPool,
  kidUnderwater: PHOTOS.kidGoggles,
  coachKids: PHOTOS.coachLesson,
  competitive: PHOTOS.athletesAwards,
  adults: PHOTOS.adultsIndoor,
  awards: PHOTOS.athletesAwards,
  caustics: PHOTOS.indoorPool,
  poolPune: PHOTOS.indoorPool,
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
    src: PHOTOS.prabhadeviSquad,
    alt: "The Sportiqo squad standing together in the lane pool at Prabhadevi, Mumbai after an evening training session",
  },
  {
    src: PHOTOS.prabhadeviLanes,
    alt: "Wide view of the roped lanes and coaching deck at Sportiqo Prabhadevi during a busy training block",
  },
  {
    src: PHOTOS.prabhadeviDeck,
    alt: "Swimmers resting at the wall while Sportiqo coaches brief them from the deck at Prabhadevi",
  },
  {
    src: PHOTOS.prabhadeviMorning,
    alt: "Early morning batch swimming in the sunlit indoor pool at Sportiqo Prabhadevi",
  },
  {
    src: PHOTOS.prabhadeviCoaches,
    alt: "Two Sportiqo coaches running a stroke drill with adult swimmers at the Prabhadevi pool",
  },
  {
    src: PHOTOS.bkcGroupNight,
    alt: "Sportiqo swimmers celebrating in the floodlit outdoor pool at District Sports Club, BKC, Mumbai",
  },
  {
    src: PHOTOS.bkcBackfloat,
    alt: "A Sportiqo coach supporting a child through a back float at District Sports Club, BKC",
  },
  {
    src: PHOTOS.indoorPool,
    alt: "Sportiqo's bright indoor training pool with starting blocks and clear blue water",
  },
  {
    src: PHOTOS.kidGoggles,
    alt: "A young Sportiqo swimmer adjusting their goggles before entering the pool",
  },
  {
    src: PHOTOS.kidPoolside,
    alt: "A young Sportiqo swimmer seated at the pool edge during a coached lesson",
  },
  {
    src: PHOTOS.coachLesson,
    alt: "A Sportiqo coach guiding a young swimmer through a pool lesson",
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
  {
    src: PHOTOS.toddlerLesson,
    alt: "A Sportiqo coach guiding a toddler through a first lesson under the Sportiqo-branded pool banner",
  },
  {
    src: PHOTOS.awardLadySwimmer,
    alt: "A Sportiqo swimmer receiving her Torpya Gold Level certificate from her coach at the poolside",
  },
  {
    src: PHOTOS.awardBoysGroup,
    alt: "Three proud Sportiqo swimmers with their coach holding their level certificates at the pool edge",
  },
  {
    src: PHOTOS.awardToddlerGirl,
    alt: "A young Sportiqo swimmer in pink goggles receiving her Torpya Gold Level certificate from her coach",
  },
  {
    src: PHOTOS.awardKidsTrio,
    alt: "Three Sportiqo kids posing with their Speedy Gold Level certificates alongside their coach",
  },
  {
    src: PHOTOS.awardLadiesBatch,
    alt: "A Sportiqo coach presenting a Torpya Gold Level certificate to a swimmer from the ladies batch",
  },
  {
    src: PHOTOS.awardAdultPair,
    alt: "Two adult Sportiqo swimmers holding their Dynamite Gold Level certificate at the outdoor pool",
  },
];

export const GALLERY: Shot[] = [
  ...REAL_SHOTS,
];

/**
 * Build N marquee rows. Every photograph is used at most once across the whole
 * set of rows (when the pool is large enough), so no image is ever on screen
 * twice at the same moment. Rows are also strided so neighbouring rows never
 * scroll the same subject side by side.
 */
export function buildShotRows(rows: number, perRow: number, pool: Shot[] = GALLERY): Shot[][] {
  const n = pool.length;
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  let step = 7;
  while (step > 1 && gcd(step, n) !== 1) step -= 1;
  const order = Array.from({ length: n }, (_, i) => pool[(i * step + 3) % n]);


  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: perRow }, (_, c) => order[(r * perRow + c) % n]),
  );

}

/** Faces behind the real testimonials on the homepage. */
export const TESTIMONIAL_PHOTOS = {
  singhPreet: testimonialSinghPreet.url,
  parentToddler: testimonialParentToddler.url,
  kidBackstroke: testimonialKidBackstroke.url,
  kidFreestyle: testimonialKidFreestyle.url,
  kidBackfloat: testimonialKidBackfloat.url,
  kidRacer: testimonialKidRacer.url,
};
