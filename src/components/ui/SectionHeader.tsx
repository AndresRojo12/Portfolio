import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className={centered ? "text-center" : ""}
    >
      <span className="text-cyan-400 font-semibold uppercase tracking-[4px] text-sm">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
        {title}
      </h2>

      <p
        className={`mt-6 text-slate-400 text-lg leading-8 ${
          centered
            ? "mx-auto max-w-3xl"
            : "max-w-3xl"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;