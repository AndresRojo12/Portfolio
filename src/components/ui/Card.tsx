import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-8
        transition-all
        duration-300
        hover:border-cyan-500
      "
    >
      {children}
    </motion.div>
  );
};

export default Card;