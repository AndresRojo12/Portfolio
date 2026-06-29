import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  href,
  download,
  className = "",
  onClick,
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
        download={download}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;