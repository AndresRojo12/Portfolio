import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: Props) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition hover:border-cyan-500"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-10 flex gap-4">

          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 transition hover:border-cyan-400"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            <HiOutlineArrowTopRightOnSquare />

            Demo
          </a>

        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;