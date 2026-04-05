import AuthRepository from '../repositories/auth.repository';
import bcrypt from 'bcryptjs';
import jwt, { Secret, SignOptions } from 'jsonwebtoken'; // Импортируем типы

interface JwtPayload {
  userId: number; // Или string, если UUID
  email: string;
}

interface LoginUserData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    first_name: string | null;
    last_name: string | null;
  };
}

interface RegisterUserData {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

class AuthService {
  async register(userData: RegisterUserData) {
    if (!userData.email || !userData.password) {
      throw new Error('Email and password are required');
    }
    const user = await AuthRepository.register(userData);
    return user;
  }

  async login(userData: LoginUserData): Promise<AuthResponse> {
    const { email, password } = userData;

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = await AuthRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    const expiresIn = process.env.JWT_EXPIRES_IN || '1h';

    const payload: JwtPayload = {
      userId: user.id,
      email: user.email
    };

    const token = jwt.sign(
      payload, 
      secret as Secret, 
      { expiresIn: expiresIn } as SignOptions
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
      }
    };
  }
}

export default new AuthService();