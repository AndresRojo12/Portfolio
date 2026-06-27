import profile from "../../assets/images/andres.jpg";

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
      
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <div>

          <img
            src={profile}
            className="rounded-3xl border border-slate-800 shadow-2xl"
          />

        </div>

        <div>

          <p className="text-cyan-400">
            Sobre mí
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Más que escribir código,
            construyo soluciones.
          </h2>

          <p className="mt-8 leading-9 text-slate-400">

            Soy desarrollador Full Stack apasionado por crear
            aplicaciones web y móviles modernas, escalables y
            enfocadas en resolver problemas reales.

            <br />
            <br />

            Disfruto trabajar tanto en frontend como en backend,
            diseñando soluciones completas desde la interfaz hasta
            la arquitectura del servidor.

          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-slate-800 p-4">
              ✔ Código limpio
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              ✔ Arquitecturas escalables
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              ✔ APIs REST
            </div>

            <div className="rounded-xl border border-slate-800 p-4">
              ✔ Aprendizaje continuo
            </div>

          </div>

          <div className="mt-12">

            {skills.map((skill) => (

              <SkillBar
                key={skill.title}
                {...skill}
              />

            ))}

          </div>

        </div>

      </div>
    
    </>
  );
};

export default About;