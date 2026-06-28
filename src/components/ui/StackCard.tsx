import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import TechItem from "./TechItem";

interface Props {
  title: string;

  technologies: {
    icon: IconType;
    name: string;
  }[];
}

const StackCard = ({
  title,
  technologies,
}: Props) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
    >
      <h3 className="mb-8 text-2xl font-bold">
        {title}
      </h3>

      <div className="space-y-4">
        {technologies.map((tech) => (
          <TechItem
            key={tech.name}
            {...tech}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default StackCard;