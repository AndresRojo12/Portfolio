import profile from "../../assets/images/andres.jpg";

import FloatingBadge from "./FloatingBadge";

import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";

import { SiPostgresql, SiTypescript } from "react-icons/si";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative overflow-hidden rounded-[40px] border border-slate-700 bg-slate-900 p-3">
        <img src={profile} className="h-[520px] rounded-[30px] object-cover" loading="eager" decoding="async" alt="Fotografia de Andres Rojo"/>
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
