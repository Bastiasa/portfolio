import type { CertificateData } from "../types";
import { transformGlobFiles } from "../utils";

const LOGOS_RAW = import.meta.glob("../assets/certifications_logos/*.{png,jpg,webp,jpeg,avif}", {
  eager: true,
  import: "default"
}) as Record<string, {src:string}>;

const LOGOS = transformGlobFiles(LOGOS_RAW);

const r = function (id: string) {
  return `c/${id}`;
}

export const certificates: CertificateData[] = [
  {
    image: LOGOS('aptis_logo.avif'),
    url: "https://credentials.britishcouncil.org/37a53c25-e2bf-41f0-85e6-88133caad087?key=c8d0195bacb345d8d6b4930107b5b5072840e8a9750994123f6eb76115bb70de",
    title: "Aptis General",
    issuer: "British Council",
  },

  {
    image: LOGOS('php_logo.webp'),
    url: r("9123002706555TI1107854150C.pdf"),
    title: "DESARROLLO WEB CON PHP",
    issuer: "Servicio Nacional de Aprendizaje (CO)",
  },
  {
    image: LOGOS('java_logo.webp'),
    url: r("9502002716242TI1107854150C.pdf"),
    title: "PROGRAMACIÓN ORIENTADA A OBJETOS CON JAVA",
    issuer: "Servicion Nacional de Aprendizaje (CO)",
  },

  {
    image: r('national-english-cert.webp'),
    url: r('national-english-cert.pdf'),
    title: "INGLÉS B2",
    issuer: "Teaching Languages Service (TLS)"
  },

  {
    image: r('diploma-godot-videojuegos2d.webp'),
    url: r('diploma-godot-videojuegos2d.pdf'),
    title: "CREAR UN VIDEOJUEGO SHOOT'EM UP",
    issuer: "Platzi"
  },

  {
    image: r('diploma-introduccion-godot.webp'),
    url: r('diploma-introduccion-godot.pdf'),
    title: "INTRODUCCIÓN A GODOT",
    issuer: "Platzi"
  }



];
