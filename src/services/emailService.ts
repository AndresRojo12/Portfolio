import type { ContactFormData } from "../schemas/contactSchema";

export async function sendEmail(data: ContactFormData) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("No fue posible enviar el mensaje.");
  }

  return response.json();
}