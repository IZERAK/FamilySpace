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
      next(error);
    }
  }

  // Добавляем метод login
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const authData = await AuthService.login(req.body);
      
      res.status(200).json({
        message: 'Login successful',
        ...authData
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();