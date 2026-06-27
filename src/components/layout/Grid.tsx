import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

const Grid = ({
  children,
  columns = 3,
}: Props) => {
  const classes = {
    2: "grid md:grid-cols-2 gap-8",

    3: "grid md:grid-cols-2 xl:grid-cols-3 gap-8",

    4: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8",
  };

  return (
    <div className={classes[columns]}>
      {children}
    </div>
  );
};

export default Grid;