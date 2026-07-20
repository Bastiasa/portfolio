import type { ProjectInfo } from "../types";
import { transformGlobFiles } from "../utils";

const RAW_IMAGES = import.meta.glob("../assets/projects_banners/*.{png,jpg,webp,jpeg}", {
  eager: true,
  import: "default"
}) as Record<string, {src:string}>;

const IMAGES = transformGlobFiles(RAW_IMAGES);

console.log(IMAGES('shirt_maker_3d.jpg'))

// Reemplaza con tus proyectos reales. El orden define el número de catálogo.
export const projects: ProjectInfo[] = [

  {
    title: "Shirt Maker 3D",
    description: "Puedes crear un mockup fácil y rápido, con tus imágenes favoritas.",
    cover: IMAGES('shirt_maker_3d.jpg'),
    link: "https://bastiasa.github.io/shirt_maker",
    blank: true,
    year: 2024
  },

  {
    title: "Sistema de Votación",
    description: "Realiza votaciones en varios dispositivos. Con un gráfico de barras en tiempo real.",
    cover: IMAGES('voting_system.webp'),
    link: "https://github.com/Bastiasa/voting-system",
    year: 2025
  },

  {
    title: "Blog Cutter",
    description:
      "Haz clips de tus videos más largos con esta aplicación de una forma rápida y sencilla.",
    cover: IMAGES('blogcutter.png'),
    link: "https://github.com/Bastiasa/blogcutter/",
    year: 2025,
  },



  /*{
    title: "Santa Store",
    description:
      "E-Commerce de una empresa de estampados llamada Santa Store Diseños Personalizados.",
    cover: IMAGES('santa_store.png'),
    link: "https://santastore.site",
    year: 2026,
  },*/


  {
    title: "Pressure Point",
    description:
      "Un videojuego multijugador online en el que te enfretarás en un 1v1. Desarrollado para una Game Jam con Godot Engine.",
    cover: IMAGES('pressure_point.png'),
    link: "https://bastiasa.itch.io/pressure-point",
    pixelatedCover: true,
    blank: true,
    year: 2024,
  },

  {
    title: "First Person Showcase",
    description:
      "Un pequeño test para mostrar mis habilidades como programador de videojuegos en el ámbito 3D.",
    cover: IMAGES('first_person_showcase.png'),
    link: "https://bastiasa.itch.io/fptest",
    year: 2024,
  },

  {
    title: "ArkaNet",
    description: "Videojuego shoot'em up desarrollado para un curso de Platzi.",
    link: "https://bastiasa.itch.io/arkanet",
    cover: IMAGES('arkanet.png'),
    blank: true,
    year: 2022
  },

  {
    title: "Dark People",
    description: "Un videojuego basado en Five Night's at Freddy's, desarrollado en Godot Engine 3.",
    cover: IMAGES('dark_people.png'),
    link: "https://bastiasa.itch.io/dark-people-beta",
    blank: true,
    year: 2022
  }
];


/**
 * 
 * type ProjectInfo = {
    title: string;
    description: string;
    cover: string;
    link?: string;
    blank?: boolean;
    pixelatedCover?: boolean,
    year?:number
}

const PROJECTS: ProjectInfo[] = [
    {
        title:"Santa Store",
        description:"E-Commerce de una empresa de estampados llamada Santa Store Diseños Personalizados",
        cover:SANTA_STORE_LOGO,
        link:"https://santastore.site",
        year: 2026
    },

    {
        title: "Blog Cutter",
        description: "Una aplicación Android para cortar videos largos de forma eficiente.",
        cover:BC_LOGO,
        link: "https://github.com/Bastiasa/blogcutter/",
        year: 2025
    },
    
    {
        title: "Pressure Point",
        description: "Un videojuego multijugador online en el que te enfretarás en un 1v1. Desarrollado para una Game Jam.",
        cover: PRESSURE_POINT_BANNER,
        link: "https://bastiasa.itch.io/pressure-point",
        blank: true,
        pixelatedCover:true,
        year:2024
    },

    {
        title: "First Person Showcase",
        description: "Un pequeño test para mostrar mis habilidades como programador de videojuegos en el ámbito 3D.",
        cover: FPSCS_BANNER,
        link: "https://bastiasa.itch.io/fptest",
        blank: true,
        pixelatedCover:false,
        year:2024
    },

    {
        title: "Shirt Maker 3D",
        description: "Un sitio web para visualizar estampados de camisetas en 3D.",
        cover: SHIRT_MAKER_3D_BANNER,
        link: "https://bastiasa.github.io/shirt_maker",
        blank: true,
        year:2024
    },

    {
        title: "ArkaNet",
        description: "Este videojuego fue hecho para un curso de Platzi.",
        link: "https://bastiasa.itch.io/arkanet",
        cover: ARKANET_BANNER,
        blank: true,
        year: 2022
    },

    {
        title: "Dark People",
        description: "Un videojuego basado en Five Night's at Freddy's, desarrollado en Godot Engine 3.",
        cover: DARK_PEOPLE_BANNER,
        link: "https://bastiasa.itch.io/dark-people-beta",
        blank: true,
        year:2022
    }
]
 */