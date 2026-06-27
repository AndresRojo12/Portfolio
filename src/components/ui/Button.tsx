import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  href,
  download,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 text-black hover:bg-cyan-400 hover:-translate-y-1",

    secondary:
      "border border-cyan-500 text-white hover:bg-cyan-500 hover:text-black hover:-translate-y-1",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]}`}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;