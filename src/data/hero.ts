import { type HeroProps } from "../components/Hero";

import HERO_PHOTO from "../assets/hero-photo.png";
import { LOCATION } from "./globals";

export const HERO_DATA: HeroProps = {
    name: "Luis Bastidas",
    role: "Backend Developer",
    tagline: "I build robust web products, from prototype to production.",
    photoSrc: HERO_PHOTO.src,
    location: LOCATION,
    availability: "Available for new projects"
};