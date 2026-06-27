import { experience } from "../../data/experience";
import TimelineItem from "../ui/TimelineItem";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-cyan-400">
          Trayectoria
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Mi experiencia
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Cada proyecto ha sido una oportunidad para aprender,
          mejorar mis habilidades y desarrollar soluciones con
          impacto real.
        </p>

        <div className="mt-20 space-y-20">

          {experience.map((item) => (

            <TimelineItem
              key={item.year + item.title}
              {...item}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;