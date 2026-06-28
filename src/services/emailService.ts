import emailjs from "@emailjs/browser";
import type { ContactFormData } from "../schemas/contactSchema";

export const sendEmail = async (
  data: ContactFormData
) => {

  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE,
    import.meta.env.VITE_EMAIL_TEMPLATE,
    data,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  );

};