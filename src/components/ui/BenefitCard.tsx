import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const BenefitCard = ({
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
      className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-cyan-500"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
        <Icon className="text-2xl text-cyan-400" />
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
};

export default BenefitCard;