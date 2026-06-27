interface Props {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const TimelineItem = ({
  year,
  title,
  company,
  description,
  technologies,
}: Props) => {
  return (
    <div className="relative pl-14">

      <div className="absolute left-3 top-2 h-full w-[2px] bg-slate-700" />

      <div className="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-cyan-500 bg-[#030712]" />

      <span className="text-cyan-400 font-semibold">
        {year}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {title}
      </h3>

      <p className="text-slate-500">
        {company}
      </p>

      <p className="mt-5 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-cyan-300"
          >
            {tech}
          </span>

        ))}

      </div>

    </div>
  );
};

export default TimelineItem;