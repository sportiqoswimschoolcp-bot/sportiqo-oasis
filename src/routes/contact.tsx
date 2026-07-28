import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Navigation, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { LOCATIONS, PRIMARY_WA, mapDirections, mapEmbed, waLink } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";

const TITLE = "Contact Sportiqo Swim School | Mumbai & Pune Swimming Classes";
const DESC =
  "Call, WhatsApp or message Sportiqo Swim School. Direct numbers and maps for Prabhadevi, Cuffe Parade, Kothrud Pune and DSC.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact;
});

function Contact() {
  return null;
}
