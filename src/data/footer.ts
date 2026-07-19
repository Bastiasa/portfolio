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
    },

    {
        label: "Freelancer.com",
        href: "https://www.freelancer.com/u/Bastiasa",
        icon: "work"
    },

    {
        label: "Upwork",
        href: "https://www.upwork.com/freelancers/~01fbbb2576482e139e?mp_source=share",
        icon: "work"
    },

    {
        label: "Itch.io",
        href: "https://bastiasa.itch.io/",
        icon: "stadia_controller"
    },

    {
        label: "Dev.to",
        href: "https://dev.to/bastiasa",
        icon: "news"
    }
]

export const FOOTER_DATA: FooterProps = {
    name: NAME,
    email: "leysantqm@gmail.com",
    location: LOCATION,
    socials: SOCIALS_DATA
}