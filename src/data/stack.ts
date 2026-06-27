import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiFigma,
} from "react-icons/si";

export const stack = [
  {
    title: "Frontend",

    technologies: [
      {
        icon: FaReact,
        name: "React",
      },

      {
        icon: SiTypescript,
        name: "TypeScript",
      },

      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },

  {
    title: "Backend",

    technologies: [
      {
        icon: FaNodeJs,
        name: "Node.js",
      },

      {
        icon: SiExpress,
        name: "Express",
      },

      {
        icon: SiNestjs,
        name: "NestJS",
      },
    ],
  },

  {
    title: "Bases de Datos",

    technologies: [
      {
        icon: SiPostgresql,
        name: "PostgreSQL",
      },

      {
        icon: SiMysql,
        name: "MySQL",
      },

      {
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },

  {
    title: "Herramientas",

    technologies: [
      {
        icon: FaGitAlt,
        name: "Git",
      },

      {
        icon: FaGithub,
        name: "GitHub",
      },

      {
        icon: FaDocker,
        name: "Docker",
      },

      {
        icon: SiPostman,
        name: "Postman",
      },

      {
        icon: SiFigma,
        name: "Figma",
      },
    ],
  },
];