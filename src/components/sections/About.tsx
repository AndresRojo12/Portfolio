import profile from "../../assets/images/andres.webp";

import SkillBar from "../ui/SkillBar";

import { skills } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

const About = () => {
  return (
    <>
      <SectionHeader
        eyebrow="Sobre mí"
        title="Más que escribir código, construyo soluciones."
        description="Soy desarrollador Full Stack apasionado por crear aplicaciones web y móviles modernas, escalables y enfocadas en resolver problemas reales. Disfruto trabajar tanto en frontend como en backend, diseñando soluciones completas desde la interfaz hasta la arquitectura del servidor."
        centered
      />

      <div className="mt-20 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Imagen */}

        <div>
          <img
            src={profile}
            alt="Andrés Rojo"
            loading="lazy"
            decoding="async"
            className="w-fullmax-h-[650px]rounded-3xlborderborder-slate-800object-covershadow-2xl"
          />
        </div>

        {/* Contenido */}

        <div>
          <div className="space-y-6 text-slate-400 leading-8">
            <p>
              Me especializo en construir aplicaciones web y móviles modernas
              utilizando tecnologías como React, React Native, Node.js y
              TypeScript.
            </p>

            <p>
              Disfruto participar en todo el ciclo de desarrollo, desde el
              análisis del problema hasta el despliegue en producción, siempre
              buscando escribir código limpio, mantenible y escalable.
            </p>

            <p>
              Mi objetivo es crear soluciones que realmente aporten valor a
              empresas, startups y emprendedores.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-500">
              ✔ Código limpio
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-500">
              ✔ Arquitecturas escalables
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-500">
              ✔ APIs REST
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-500">
              ✔ Aprendizaje continuo
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {skills.map((skill) => (
              <SkillBar key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
