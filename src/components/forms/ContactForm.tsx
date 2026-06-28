import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

import {
  contactSchema,
  type ContactFormData,
} from "../../schemas/contactSchema";

import { sendEmail } from "../../services/emailService";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data);

      alert("Mensaje enviado correctamente.");

      reset();
    } catch {
      alert("No fue posible enviar el mensaje.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Nombre"
        placeholder="Tu nombre"
        error={errors.name}
        {...register("name")}
      />

      <FormInput
        label="Correo"
        type="email"
        placeholder="correo@email.com"
        error={errors.email}
        {...register("email")}
      />

      <FormInput
        label="Asunto"
        placeholder="Quiero una aplicación..."
        error={errors.subject}
        {...register("subject")}
      />

      <FormTextarea
        label="Mensaje"
        placeholder="Cuéntame sobre tu proyecto..."
        error={errors.message}
        {...register("message")}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full
          rounded-xl
          bg-cyan-500
          py-4
          font-semibold
          text-black
          transition
          hover:bg-cyan-400
          disabled:opacity-50
        "
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
};

export default ContactForm;
