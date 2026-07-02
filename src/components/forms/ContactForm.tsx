import { useState } from "react";
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
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFeedback({ type: null, message: "" });

    try {
      await sendEmail(data);

      setFeedback({
        type: "success",
        message: "Tu mensaje se ha enviado correctamente. Te responderé pronto.",
      });

      reset();
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "No fue posible enviar el mensaje. Intenta de nuevo más tarde.",
      });
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

      {feedback.message && (
        <p
          role="status"
          className={`rounded-xl border px-4 py-3 text-sm ${
            feedback.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border-rose-500/30 bg-rose-500/10 text-rose-300"
          }`}
        >
          {feedback.message}
        </p>
      )}

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
