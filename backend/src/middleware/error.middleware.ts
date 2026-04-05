import { Request, Response, NextFunction } from 'express';

// Интерфейс для кастомной ошибки (опционально, но полезно для TS)
interface CustomError extends Error {
  statusCode?: number;
}

const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] ${statusCode}: ${message}`);
  console.error(err.stack); // Для отладки в консоли сервера

  res.status(statusCode).json({
    success: false,
    error: message
  });
};

export default errorMiddleware;