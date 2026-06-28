import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Ingresa tu nombre."),

  email: z.string().email("Correo inválido."),

  subject: z.string().min(5, "Ingresa un asunto."),

  message: z
    .string()
    .min(20, "Describe un poco más tu proyecto."),
});

export type ContactFormData = z.infer<typeof contactSchema>;