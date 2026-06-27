import type { FieldError } from "react-hook-form";

interface Props {

  label:string;

  error?:FieldError;

} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormTextarea = ({
  label,
  error,
  ...props
}:Props)=>{

  return(

    <div>

      <label className="mb-2 block">

        {label}

      </label>

      <textarea

        {...props}

        rows={7}

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

      {error && (

        <p className="mt-2 text-red-400">

          {error.message}

        </p>

      )}

    </div>

  );

};

export default FormTextarea;