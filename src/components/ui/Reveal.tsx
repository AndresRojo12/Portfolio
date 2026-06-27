import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../../animations/variants";
import { transition } from "../../animations/transitions";

interface Props {
  children: ReactNode;
}

const Reveal = ({ children }: Props) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;