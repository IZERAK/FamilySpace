import pool from '../config/db';
import bcrypt from 'bcryptjs';

interface RegisterUserData {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

interface UserRow {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  created_at: Date;
}

class AuthRepository {
  async register(userData: RegisterUserData): Promise<UserRow> {
    const { email, password, first_name, last_name } = userData;
    
    // Хэшируем пароль
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    const query = `
      INSERT INTO users (email, password_hash, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, first_name, last_name, created_at
    `;
    const values = [email, password_hash, first_name, last_name];
    
    try {
      const result = await pool.query<UserRow>(query, values);
      return result.rows[0];
    } catch (error: any) {
      if (error.code === '23505') { // Unique violation (duplicate email)
        throw new Error('User with this email already exists');
      }
      throw error;
    }
  }
}

export default new AuthRepository();