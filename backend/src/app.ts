import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  })
);

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "Portfolio Backend funcionando 🚀",
  });
});

export default app;