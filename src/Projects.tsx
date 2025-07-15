import { ImageLoader } from "./components/ImageLoader";
import { LinearLayout } from "./components/LinearLayout";

import "./ProjectElement.css";

import SHIRT_MAKER_3D_BANNER from './assets/projects_banners/shirt_maker_3d_banner.jpg';
import DARK_PEOPLE_BANNER from './assets/projects_banners/dark_people_banner.png';
import PRESSURE_POINT_BANNER from './assets/projects_banners/pressure_point_banner.png';
import ARKANET_BANNER from './assets/projects_banners/arkanet_banner.png';
import FPSCS_BANNER from './assets/projects_banners/fpscs_banner.png';

import { Icon } from "./components/Icon";


type ProjectElementProps = {
    projectTitle: string;
    projectDescription: string;
    coverSrc: string;
    moreInfoLink?: string;
    pixelatedCover?: boolean;
    projectYear?: number;
}

type ProjectInfo = {
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
        title: "Pressure Point",
        description: "Un videojuego multijugador online en el que te enfretarás a un oponente. Actualmente sus servidores están cerrados.",
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
        description: "Un videojuego basado en Five Night's at Freddy's, desarrollado en Godot Engine 3. Nunca pude terminarlo, lo estuve desarrollando a los 11 años.",
        cover: DARK_PEOPLE_BANNER,
        link: "https://bastiasa.itch.io/dark-people-beta",
        blank: true,
        year:2022
    }
]

function ProjectElement({projectTitle, projectDescription, coverSrc, moreInfoLink, pixelatedCover = false, projectYear}:ProjectElementProps) {
    return (

        <LinearLayout className="project-container" spacing="0" alignItems="stretch">

            <ImageLoader
                src={coverSrc || "https://placehold.co/3000x3000"}
                alt={projectTitle}
                className={`project-cover inline-block ${pixelatedCover ? 'pixelated' : ''}`} />

            <section className="w-0" style={{flexGrow:"1"}}>
                <LinearLayout direction="vertical" className="p-4" spacing="6px">
                    <h5  className="project-title">{projectTitle + (projectYear ? ` - ${projectYear}`: "")}</h5>
                    <p className="project-description">{projectDescription}</p>
                    {moreInfoLink && <a className="project-link text-right w-full block" target="_blank" href={moreInfoLink}>Ver más <Icon name="open_in_new" /></a>}
                </LinearLayout>
            </section>
        </LinearLayout>

    );
}

export default function Projects() {
    return (
        <LinearLayout className="w-full flex-wrap pt-8" justifyContent="center" alignItems="flex-start" spacing="14px">

            {PROJECTS.map((project, i) => <ProjectElement
                key={`project#${i}`}
                projectTitle={project.title}
                projectDescription={project.description}
                coverSrc={project.cover}
                moreInfoLink={project.link}
                pixelatedCover={project.pixelatedCover}
                projectYear={project.year}
            />)}
            
        </LinearLayout>
  );
}
