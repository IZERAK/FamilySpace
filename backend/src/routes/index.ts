import { Router } from 'express';
import authRoutes from './auth.routes';

const router = Router();

// Подключаем роуты авторизации по пути /auth
router.use('/auth', authRoutes);

// Здесь в будущем добавим:
// router.use('/users', userRoutes);
// router.use('/gifts', giftRoutes);

export default router;