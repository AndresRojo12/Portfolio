import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  className: string;
}

const FloatingBadge = ({ icon: Icon, title, className }: Props) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2 backdrop-blur ${className}`}
    >
      <Icon className="text-cyan-400 text-xl" />

      <span className="text-sm font-medium">
        {title}
      </span>
    </motion.div>
  );
};

export default FloatingBadge;