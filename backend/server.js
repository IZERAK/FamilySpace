const express = require('express');
require('dotenv').config();

// --- ОТЛАДКА НАЧАЛО ---
console.log('--- DEBUG ENV VARS ---');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', `"${process.env.DB_PASSWORD}"`); // Кавычки покажут пробелы
console.log('DB_NAME:', process.env.DB_NAME);
console.log('----------------------');
// --- ОТЛАДКА КОНЕЦ ---

const pool = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'OK', time: result.rows[0] });
  } catch (err) {
    console.error('❌ DB Query Error:', err.message);
    res.status(500).json({ error: 'DB Error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});