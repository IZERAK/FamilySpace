import pool from "../config/db";
import bcrypt from "bcryptjs";

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

interface UserRowWithPassword {
  id: number;
  email: string;
  password_hash: string;
  first_name: string | null;
  last_name: string | null;
}

class AuthRepository {
  async register(userData: RegisterUserData): Promise<UserRow> {
    const { email, password, first_name, last_name } = userData;

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
      if (error.code === "23505") {
        throw new Error("User with this email already exists");
      }
      throw error;
    }
  }

  async findByEmail(email: string): Promise<UserRowWithPassword | undefined> {
    const query =
      "SELECT id, email, password_hash, first_name, last_name FROM users WHERE email = $1";
    const values = [email];

    const result = await pool.query<UserRowWithPassword>(query, values);
    return result.rows[0];
  }
}

export default new AuthRepository();
