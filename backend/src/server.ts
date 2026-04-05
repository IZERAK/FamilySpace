import express from "express";
import dotenv from "dotenv";
import pool from "./config/db";
import routes from "./routes/index";
import errorMiddleware from "./middleware/error.middleware"; // Добавлено .js

// Загрузка переменных окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorMiddleware);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Проверка подключения к БД (опционально, можно убрать из server.ts в config)
pool.on("connect", () => {
  console.log("✅ Connected to Local Dev DB");
});
