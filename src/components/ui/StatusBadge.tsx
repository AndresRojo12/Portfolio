import { motion } from "framer-motion";

const StatusBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2"
    >
      <span className="relative flex h-3 w-3">

        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

      </span>

      <span className="text-sm font-medium text-emerald-300">
        Disponible para nuevos proyectos
      </span>

    </motion.div>
  );
};

export default StatusBadge;