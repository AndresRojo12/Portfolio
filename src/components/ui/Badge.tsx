interface Props {
  text: string;
}

const Badge = ({
  text,
}: Props) => {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-500/30
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        text-cyan-300
      "
    >
      {text}
    </span>
  );
};

export default Badge;