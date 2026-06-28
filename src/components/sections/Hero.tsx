import { motion } from "framer-motion";
import ScrollIndicator from "../ui/ScrollIndicator";
import StatusBadge from "../ui/StatusBadge";
import HeroImage from "../ui/HeroImage";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { hero } from "../../data/hero";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute left-40 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[130px]" />

      <div className="absolute right-40 bottom-0 h-72 w-72 rounded-full bg-blue-700/20 blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
        linear-gradient(#ffffff 1px, transparent 1px),
        linear-gradient(90deg,#ffffff 1px,transparent 1px)
        `,
          backgroundSize: "70px 70px",
        }}
      />
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <motion.div>
            <StatusBadge />

            <p className="mt-8 text-cyan-400">Hola, soy</p>

            <h1 className="mt-3 text-7xl font-black">
              {hero.title}
              <br />
            </h1>

            <h2 className="mt-6 text-3xl text-slate-300">
              Full Stack Developer
            </h2>

            <p className="mt-8 max-w-xl leading-9 text-slate-400">
              {hero.description}
            </p>

            <div className="mt-10 flex gap-5">
              <Button href="proyectos">Ver proyectos</Button>

              <Button variant="secondary" href="contacto">
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
