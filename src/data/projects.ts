import inventory from "../assets/projects/Inventario.png";
import fitness from "../assets/projects/fitness.png";

export const projects = [
  {
    id: 1,

    title: "Sistema de Gestión de Inventarios",

    description:
      "Aplicación Full Stack para administrar productos, categorías, ventas e inventario con autenticación y roles.",

    image: inventory,

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],

    github: "https://github.com/AndresRojo12/App_Facturation",

    demo: "https://andresrojo12.github.io/market-pro-inventory-system/",

    featured: true,
  },

  {
    id: 2,

    title: "Aplicación Fitness",

    description:
      "Aplicación móvil para gestionar rutinas, ejercicios y categorías con autenticación y persistencia de datos.",

    image: fitness,

    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
    ],

    github: "https://github.com/AndresRojo12/Men_Women_Gym",

    demo: "https://andresrojo12.github.io/men-women-gym/",

    featured: true,
  },
];