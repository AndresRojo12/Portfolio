import { process } from "../../data/process";
import ProcessCard from "../ui/ProcessCard";

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400">
          Mi proceso
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Así desarrollo cada proyecto
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Desde la idea inicial hasta la puesta en producción,
          sigo un proceso estructurado que garantiza calidad,
          escalabilidad y una excelente experiencia para el usuario.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {process.map((step) => (

            <ProcessCard
              key={step.title}
              {...step}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;