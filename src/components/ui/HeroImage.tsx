import profile from "../../assets/images/andres.webp";

import FloatingBadge from "./FloatingBadge";

import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";

import { SiPostgresql, SiTypescript } from "react-icons/si";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[100px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

      <div className="relative overflow-hidden rounded-[32px] border border-slate-700 bg-slate-900 p-3">
        <img
          src={profile}
          className="h-[300px]w-fullrounded-[24px] object-coversm:h-[420px]lg:h-[520px]"
          loading="lazy"
          decoding="async"
          alt="Fotografia de Andres Rojo"
        />
      </div>

      <FloatingBadge icon={FaReact} title="React" className="-left-5 top-8" />

      <FloatingBadge
        icon={FaNodeJs}
        title="Node.js"
        className="-right-5 top-24"
      />

      <FloatingBadge
        icon={FaDocker}
        title="Docker"
        className="-left-8 bottom-20"
      />

      <FloatingBadge
        icon={SiPostgresql}
        title="PostgreSQL"
        className="-right-10 bottom-5"
      />

      <FloatingBadge
        icon={SiTypescript}
        title="TypeScript"
        className="left-1/2 -translate-x-1/2 -top-5"
      />
    </div>
  );
};

export default HeroImage;
