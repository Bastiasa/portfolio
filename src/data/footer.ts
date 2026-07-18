import type { FooterProps, SocialLink } from "../components/Footer";
import { LOCATION, NAME } from "./globals";

export const SOCIALS_DATA: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/Bastiasa",
        icon: "code"
    },

    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/luis-bastidas-64b06a29b/",
        icon: "work",
    }
]

export const FOOTER_DATA: FooterProps = {
    name: NAME,
    email: "leysantqm@gmail.com",
    location: LOCATION,
    socials: SOCIALS_DATA
}