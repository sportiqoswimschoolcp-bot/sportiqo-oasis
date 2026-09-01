export const BRAND = {
  name: "Sportiqo Swim School",
  short: "Sportiqo",
  tagline: "Mumbai's Most Loved Swimming Pool",
  since: 2016,
  swimmers: "3,500+",
} as const;

export type Location = {
  slug: string;
  name: string;
  city: string;
  path: string;
  phone: string;
  phoneDisplay: string;
  wa: string;
  headline: string;
  oneLiner: string;
  address: string;
  locality: string;
  region: string;
  postal: string;
  geo: { lat: number; lng: number };
  hours: string;
  mapQuery: string;
  mapsUrl: string;
  highlights: string[];
  keywords: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "prabhadevi",
    name: "Prabhadevi",
    city: "Mumbai",
    path: "/locations/prabhadevi",
    phone: "919892127669",
    phoneDisplay: "98921 27669",
    wa: "919892127669",
    headline: "Swimming Classes in Prabhadevi, Mumbai",
    oneLiner: "Our original home — warm-water coaching minutes from Dadar and Worli.",
    address: "Prabhadevi, Near Siddhivinayak Temple",
    locality: "Prabhadevi",
    region: "Maharashtra",
    postal: "400025",
    geo: { lat: 19.0176, lng: 72.8296 },
    hours: "Mo-Su 06:00-21:00",
    mapQuery: "Sportiqo Swim School, Prabhadevi, Mumbai, Maharashtra 400025",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sportiqo%20Swim%20School%20Prabhadevi%20Mumbai",
    highlights: [
      "Learn-to-swim batches for ages 4+ with a 1:4 coach ratio",
      "Warm, chlorine-balanced water tested twice daily",
      "Ten minutes from Dadar, Worli, Lower Parel and Mahim",
      "Weekday early-morning slots designed around school timings",
    ],
    keywords:
      "swimming classes in Prabhadevi, swim school Dadar, swimming coaching Worli, kids swimming Prabhadevi Mumbai",
  },
  {
    slug: "cuffe-parade",
    name: "Cuffe Parade",
    city: "Mumbai",
    path: "/locations/cuffe-parade",
    phone: "917039376559",
    phoneDisplay: "70393 76559",
    wa: "917039376559",
    headline: "Rooftop Swimming Classes in Cuffe Parade, Mumbai",
    oneLiner: "Our flagship rooftop pool, with the South Mumbai skyline as your backdrop.",
    address: "Sportiqo Swim School — Cuffe Parade, Captain Prakash Pethe Marg",
    locality: "Cuffe Parade",
    region: "Maharashtra",
    postal: "400005",
    geo: { lat: 18.913181, lng: 72.8209781 },
    hours: "Mo-Su 06:00-22:00",
    mapQuery: "Sportiqo Swim School - Cuffe Parade, Mumbai",
    mapsUrl: "https://maps.app.goo.gl/NUSqMSveA9jjd3z8A",
    highlights: [
      "Rooftop pool with uninterrupted skyline and sea-facing views",
      "Floodlit evening batches — the most requested slot in South Mumbai",
      "Private and semi-private coaching for adults who prefer discretion",
      "Serving Colaba, Churchgate, Nariman Point and Marine Drive",
    ],
    keywords:
      "swim school Cuffe Parade, rooftop swimming pool Mumbai, swimming classes Colaba, adult swimming lessons South Mumbai",
  },
  {
    slug: "kothrud-pune",
    name: "Kothrud",
    city: "Pune",
    path: "/locations/kothrud-pune",
    phone: "917499416930",
    phoneDisplay: "74994 16930",
    wa: "917499416930",
    headline: "Swimming Academy in Kothrud, Pune",
    oneLiner: "A full-length training pool for Pune's most competitive young swimmers.",
    address: "Kothrud, Pune",
    locality: "Kothrud",
    region: "Maharashtra",
    postal: "411038",
    geo: { lat: 18.5074, lng: 73.8077 },
    hours: "Mo-Su 06:00-21:00",
    mapQuery: "Sportiqo Swim School, Kothrud, Pune, Maharashtra 411038",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sportiqo%20Swim%20School%20Kothrud%20Pune",
    highlights: [
      "Full-length lane pool built for stroke correction and endurance sets",
      "Squad programme feeding district and state-level meets",
      "Easy access from Karve Road, Bavdhan, Warje and Deccan",
      "Summer intensives that take a beginner to confident in six weeks",
    ],
    keywords:
      "swimming academy Kothrud, swimming classes in Kothrud Pune, swim coaching Karve Road, competitive swimming Pune",
  },
  {
    slug: "dsc",
    name: "DSC",
    city: "Pune",
    path: "/locations/dsc",
    phone: "918452917393",
    phoneDisplay: "84529 17393",
    wa: "918452917393",
    headline: "Swimming Classes at DSC (Deccan Sports Club)",
    oneLiner: "A club-standard pool for structured, year-round athlete development.",
    address: "DSC Sports Complex",
    locality: "DSC",
    region: "Maharashtra",
    postal: "411004",
    geo: { lat: 18.5167, lng: 73.8412 },
    hours: "Mo-Su 06:00-20:30",
    mapQuery: "Deccan Sports Club, Pune, Maharashtra",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Deccan%20Sports%20Club%20Pune",
    highlights: [
      "Club-grade facility with timing systems and starting blocks",
      "Year-round squad calendar with periodised training blocks",
      "Strength-and-conditioning support alongside pool sessions",
      "Dedicated masters lane for adult fitness swimmers",
    ],
    keywords:
      "DSC swimming classes, swimming coaching DSC, swim academy DSC, competitive swim squad DSC",
  },
];

/** General enquiry line — used everywhere that is not branch-specific. */
export const GENERAL_PHONE = "918452917393";
export const GENERAL_PHONE_DISPLAY = "84529 17393";
export const GENERAL_WA = GENERAL_PHONE;
export const INSTAGRAM_URL = "https://www.instagram.com/sportiqo.in/";

export const PRIMARY_WA = GENERAL_WA;

export const waLink = (number: string, message = "Hi Sportiqo! I'd like to book a trial swim session.") =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Embed a pinned map. Pass geo coordinates to drop the pin exactly. */
export const mapEmbed = (query: string, geo?: { lat: number; lng: number }) =>
  geo
    ? `https://www.google.com/maps?q=${geo.lat},${geo.lng}(${encodeURIComponent(query)})&z=17&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapDirections = (query: string, geo?: { lat: number; lng: number }) =>
  geo
    ? `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const localBusinessSchema = (l: Location) => ({
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: `${BRAND.name} — ${l.name}`,
  description: l.oneLiner,
  url: `https://sportiqoswimschool.com${l.path}`,
  telephone: `+${l.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: l.address,
    addressLocality: l.locality,
    addressRegion: l.region,
    postalCode: l.postal,
    addressCountry: "IN",
  },
  hasMap: l.mapsUrl,
  geo: { "@type": "GeoCoordinates", latitude: l.geo.lat, longitude: l.geo.lng },
  openingHours: l.hours,
  priceRange: "₹₹₹",
  sport: "Swimming",
});
