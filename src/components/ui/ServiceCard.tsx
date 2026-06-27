import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
  technologies: string[];
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  technologies,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{ duration: .3 }}
      className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-lg transition hover:border-cyan-500"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

        <Icon className="text-3xl text-cyan-400" />

      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-cyan-300"
          >
            {tech}
          </span>

        ))}

      </div>

    </motion.div>
  );
};

export default ServiceCard;