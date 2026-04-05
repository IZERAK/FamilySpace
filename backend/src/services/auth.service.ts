import AuthRepository from '../repositories/auth.repository';

interface RegisterUserData {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

class AuthService {
  async register(userData: RegisterUserData) {
    // 1. Валидация входных данных
    if (!userData.email || !userData.password) {
      throw new Error('Email and password are required');
    }

    // 2. Вызов репозитория для сохранения в БД
    const user = await AuthRepository.register(userData);
    
    // 3. Возврат результата (без пароля, так как репозиторий уже вернул только нужные поля)
    return user;
  }
}

export default new AuthService();