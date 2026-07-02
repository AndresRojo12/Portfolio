import { motion } from "framer-motion";
import ScrollIndicator from "../ui/ScrollIndicator";
import StatusBadge from "../ui/StatusBadge";
import HeroImage from "../ui/HeroImage";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { hero } from "../../data/hero";
import cv from "../../assets/cv/Andres-Rojo-CV.pdf";


const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute left-40 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[130px] pointer-events-none" />

      <div className="absolute right-40 bottom-0 h-72 w-72 rounded-full bg-blue-700/20 blur-[140px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
        linear-gradient(#ffffff 1px, transparent 1px),
        linear-gradient(90deg,#ffffff 1px,transparent 1px)
        `,
          backgroundSize: "70px 70px",
        }}
      />
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <motion.div>
            <StatusBadge />

            <p className="mt-8 text-cyan-400">Hola, soy</p>

            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Andres Rojo
              <br />
            </h1>
            <p className="mt-8 text-3xl text-slate-300">Full Stack Developer</p>

            <h2 className="mt-5 text-xl text-slate-300 sm:text-2xl lg:text-3xl">{hero.title}</h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="w-full sm:w-auto" href="#projects">Ver proyectos</Button>

              <Button className="w-full sm:w-auto" variant="secondary" href={cv} download>
                Descargar CV
              </Button>
            </div>

            <SocialLinks />
          </motion.div>

          <HeroImage />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
