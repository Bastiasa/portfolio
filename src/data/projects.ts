import type { ProjectInfo } from "../types";
import { transformGlobFiles } from "../utils";

const RAW_IMAGES = import.meta.glob("../assets/projects_banners/*.{png,jpg,webp,jpeg}", {
  eager: true,
  import: "default"
}) as Record<string, { src: string }>;

const IMAGES = transformGlobFiles(RAW_IMAGES);

console.log(IMAGES("shirt_maker_3d.jpg"));

// Replace with your real projects. The order defines the catalog number.
export const projects: ProjectInfo[] = [

  {
    title: "Shirt Maker 3D",
    description: "Create a mockup quickly and easily using your favorite images. Built with Vite.",
    cover: IMAGES("shirt_maker_3d.jpg"),
    link: "https://bastiasa.github.io/shirt_maker",
    blank: true,
    year: 2024
  },

  {
    title: "Voting System",
    description: "Run voting sessions across multiple devices, featuring a real-time bar chart. Built with React and Electron.",
    cover: IMAGES("voting_system.webp"),
    link: "https://github.com/Bastiasa/voting-system",
    year: 2025
  },

  {
    title: "Blog Cutter",
    description:
      "Create clips from your longer videos with this fast and easy-to-use application. Built with React and Capacitor.",
    cover: IMAGES("blogcutter.png"),
    link: "https://github.com/Bastiasa/blogcutter/",
    year: 2025,
  },

  /*{
    title: "Santa Store",
    description:
      "E-commerce website for a custom printing company called Santa Store Diseños Personalizados.",
    cover: IMAGES("santa_store.png"),
    link: "https://santastore.site",
    year: 2026,
  },*/

  {
    title: "Pressure Point",
    description:
      "An online multiplayer video game where you face off in a 1v1 battle. Developed for a Game Jam. Built with Godot Engine and Node.js.",
    cover: IMAGES("pressure_point.png"),
    link: "https://bastiasa.itch.io/pressure-point",
    pixelatedCover: true,
    blank: true,
    year: 2024,
  },

  {
    title: "First Person Showcase",
    description:
      "A small demo showcasing my skills as a 3D game developer. Built with Godot Engine.",
    cover: IMAGES("first_person_showcase.png"),
    link: "https://bastiasa.itch.io/fptest",
    year: 2024,
  },

  {
    title: "ArkaNet",
    description: "A shoot'em up video game developed for a Platzi course. Built with Godot Engine.",
    link: "https://bastiasa.itch.io/arkanet",
    cover: IMAGES("arkanet.png"),
    blank: true,
    year: 2022
  },

  {
    title: "Dark People",
    description: "A video game inspired by Five Nights at Freddy's. Built with Godot Engine.",
    cover: IMAGES("dark_people.png"),
    link: "https://bastiasa.itch.io/dark-people-beta",
    blank: true,
    year: 2022
  }
];

/**
 *
 * type ProjectInfo = {
 *   title: string;
 *   description: string;
 *   cover: string;
 *   link?: string;
 *   blank?: boolean;
 *   pixelatedCover?: boolean;
 *   year?: number;
 * }
 *
 * const PROJECTS: ProjectInfo[] = [
 *   {
 *     title: "Santa Store",
 *     description: "E-commerce website for a custom printing company called Santa Store Diseños Personalizados.",
 *     cover: SANTA_STORE_LOGO,
 *     link: "https://santastore.site",
 *     year: 2026
 *   },
 *
 *   {
 *     title: "Blog Cutter",
 *     description: "An Android application for efficiently trimming long videos.",
 *     cover: BC_LOGO,
 *     link: "https://github.com/Bastiasa/blogcutter/",
 *     year: 2025
 *   },
 *
 *   {
 *     title: "Pressure Point",
 *     description: "An online multiplayer video game where you face off in a 1v1 battle. Developed for a Game Jam.",
 *     cover: PRESSURE_POINT_BANNER,
 *     link: "https://bastiasa.itch.io/pressure-point",
 *     blank: true,
 *     pixelatedCover: true,
 *     year: 2024
 *   },
 *
 *   {
 *     title: "First Person Showcase",
 *     description: "A small demo showcasing my skills as a 3D game developer.",
 *     cover: FPSCS_BANNER,
 *     link: "https://bastiasa.itch.io/fptest",
 *     blank: true,
 *     pixelatedCover: false,
 *     year: 2024
 *   },
 *
 *   {
 *     title: "Shirt Maker 3D",
 *     description: "A website for previewing t-shirt designs in 3D.",
 *     cover: SHIRT_MAKER_3D_BANNER,
 *     link: "https://bastiasa.github.io/shirt_maker",
 *     blank: true,
 *     year: 2024
 *   },
 *
 *   {
 *     title: "ArkaNet",
 *     description: "This video game was created for a Platzi course.",
 *     link: "https://bastiasa.itch.io/arkanet",
 *     cover: ARKANET_BANNER,
 *     blank: true,
 *     year: 2022
 *   },
 *
 *   {
 *     title: "Dark People",
 *     description: "A video game inspired by Five Nights at Freddy's, developed with Godot Engine 3.",
 *     cover: DARK_PEOPLE_BANNER,
 *     link: "https://bastiasa.itch.io/dark-people-beta",
 *     blank: true,
 *     year: 2022
 *   }
 * ];
 */