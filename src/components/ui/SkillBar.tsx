interface Props {
  title: string;
  percentage: number;
}

const SkillBar = ({ title, percentage }: Props) => {
  return (
    <div className="mb-8">

      <div className="mb-3 flex justify-between">

        <span className="font-semibold">
          {title}
        </span>

        <span className="text-cyan-400">
          {percentage}%
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-800">

        <div
          className="h-2 rounded-full bg-cyan-400"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
};

export default SkillBar;