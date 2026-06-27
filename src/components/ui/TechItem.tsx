import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  name: string;
}

const TechItem = ({
  icon: Icon,
  name,
}: Props) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 transition hover:border-cyan-500 hover:bg-slate-900">
      <Icon className="text-2xl text-cyan-400" />

      <span className="font-medium">
        {name}
      </span>
    </div>
  );
};

export default TechItem;