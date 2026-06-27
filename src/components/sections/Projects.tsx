import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400">
          Portafolio
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Proyectos Destacados
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Estos proyectos reflejan mi experiencia desarrollando aplicaciones web y móviles con tecnologías modernas, enfocadas en rendimiento, escalabilidad y una excelente experiencia de usuario.
        </p>

        <div className="mt-20 grid gap-10">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              {...project}
            />

          ))}

        </div>

      </div>
      
    </section>
  );
};

export default Projects;