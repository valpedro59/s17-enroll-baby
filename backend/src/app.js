import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route de santé (Health Check)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API Anroll Baby opérationnelle" });
});
