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

        <div></div>

        <div className="mt-12">
          {skills.map((skill) => (
            <SkillBar key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
