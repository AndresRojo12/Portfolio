import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const ProcessCard = ({
  icon: Icon,
  title,
  description,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-cyan-500"
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

    </motion.div>
  );
};

export default ProcessCard;