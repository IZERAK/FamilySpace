import { Pool, PoolClient } from 'pg'; // Импортируем типы
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on('connect', () => {
  console.log('✅ Connected to Local Dev DB (TS)');
});

// Типизируем ошибку как any или Error, чтобы strict mode не ругался
pool.on('error', (err: any) => {
  console.error('❌ Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;