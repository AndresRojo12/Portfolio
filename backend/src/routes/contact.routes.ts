import { Router } from "express";
import { sendContactEmail } from "../services/email.service.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    await sendContactEmail(req.body);

    return res.status(200).json({
      success: true,
      message: "Correo enviado correctamente.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "No fue posible enviar el correo.",
    });
  }
});

export default router;