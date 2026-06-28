import type { FieldError } from "react-hook-form";

type Props = {
  label: string;

  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;


const FormInput = ({ label, error, ...props }: Props) => {
  const inputId = props.id ?? props.name;
  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block font-medium">
        {label}
      </label>

      <input
        id={inputId}
        {...props}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          px-5
          py-4
          outline-none
          transition
          focus:border-cyan-500
        "
      />

      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormInput;
