import express from 'express';
import dotenv from 'dotenv';
import pool from './config/db';
import routes from './routes/index';
import errorMiddleware from './middleware/error.middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger'; // Импортируем спеку

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger UI доступен по адресу /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);
app.use(errorMiddleware);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📄 Swagger Docs available at http://localhost:${PORT}/api-docs`);
  });
}

export default app;