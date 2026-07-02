import {
  FaCode,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";

export const services = [
  {
    icon: FaCode,
    title: "Desarrollo Web",
    description:
      "Creo aplicaciones web modernas, rápidas y completamente responsivas para empresas, startups y emprendedores.",

    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
    ],
  },

  {
    icon: FaMobileAlt,
    title: "Aplicaciones Móviles",
    description:
      "Desarrollo aplicaciones móviles multiplataforma con una experiencia fluida y un diseño intuitivo.",

    technologies: [
      "React Native",
      "Android",
      "iOS",
    ],
  },

  {
    icon: FaServer,
    title: "Backend & APIs",
    description:
      "Construyo APIs seguras y escalables, autenticación, bases de datos y arquitectura backend para aplicaciones modernas.",

    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
    ],
  },
];