import { motion } from "framer-motion";

interface Props {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-5 backdrop-blur-lg"
    >
      <h3 className="text-3xl font-bold text-cyan-400">
        {number}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;