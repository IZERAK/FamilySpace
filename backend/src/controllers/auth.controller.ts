import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/auth.service';

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      
      res.status(201).json({
        message: 'User registered successfully',
        user
      });
    } catch (error) {
      // Передаем ошибку в глобальный обработчик ошибок
      next(error);
    }
  }
}

export default new AuthController();