import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-14 w-8 justify-center rounded-full border border-cyan-500">

        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
        />

      </div>
    </motion.div>
  );
};

export default ScrollIndicator;