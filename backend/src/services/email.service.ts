import { Resend } from "resend";

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: process.env.SENDER_EMAIL!,
    to: process.env.RECIPIENT_EMAIL!,
    subject: `Nuevo contacto - ${data.subject}`,
    replyTo: data.email,
    html: `
      <h2>Nuevo mensaje desde el Portafolio</h2>

      <p><strong>Nombre:</strong> ${data.name}</p>

      <p><strong>Correo:</strong> ${data.email}</p>

      <p><strong>Asunto:</strong> ${data.subject}</p>

      <hr/>

      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}