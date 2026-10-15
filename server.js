const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const TEACHER_PASSWORD = process.env.TEACHER_PASSWORD || 'Shawgar2026';

// بەستنەوەی داتابەیسی PostgreSQL لەسەر Railway
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// دروستکردنی خشتەکان بە شێوەی ئۆتۆماتیکی لەناو PostgreSQL
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS videos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        url TEXT NOT NULL,
        topic TEXT,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS homeworks (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        topic TEXT,
        description TEXT,
        due_date TEXT,
        points INTEGER DEFAULT 10,
        hw_type TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS quizzes (
        id SERIAL PRIMARY KEY,
        ku_question TEXT NOT NULL,
        en_question TEXT,
        topic TEXT,
        options JSONB NOT NULL,
        correct INTEGER NOT NULL,
        explanation TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        hw_id TEXT,
        hw_title TEXT,
        student_name TEXT,
        student_id TEXT,
        answer TEXT,
        submitted_at TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // ئەگەر خشتەی ڤیدیۆکان بەتاڵ بوو، با ٣ ڤیدیۆ سەرەتاییەکەی مامۆستا شەوگار زیاد بکات
    const { rowCount } = await pool.query('SELECT 1 FROM videos LIMIT 1');
    if (rowCount === 0) {
      await pool.query(`
        INSERT INTO videos (title, url, topic, description) VALUES
        ('وانەی یەکەم: بنەماکانی خشتەی خولی و ڕیزبەندی ئەلیکترۆنی', 'https://www.youtube.com/watch?v=0hX0q7Zgq6Y', 'خاسیەتە خولییەکان', 'ڕوونکردنەوەی تەواوی کۆمەڵە و خولەکانی خشتەی خولی لەلایەن مامۆستا شەوگار.'),
        ('وانەی دووەم: هاوسەنگکردنی هاوکێشە کیمیاییەکان بە شێوازی زانستی', 'https://www.youtube.com/watch?v=2Juem0lcifE', 'بارستەی مۆڵی و ستۆکیۆمێتری', 'شیکارکردنی هەنگاو بە هەنگاوی یاسای پاراستنی بارستە و هاوسەنگکردن.'),
        ('وانەی سێیەم: ژمارەی ئۆکسان و کارلێکەکانی ئۆکسان و کەمبوونەوە', 'https://www.youtube.com/watch?v=wXSTe1o_QkM', 'ژمارەی ئۆکسان', 'یاساکانی دۆزینەوەی باری ئۆکسانی توخمەکان لە ئاوێتە کیمیاییەکاندا.');
      `);
    }

    console.log('PostgreSQL Database connected and all tables are ready!');
  } catch (err) {
    console.error('Database initialization error:', err);
  }
};

initDB();

// ١. هێنانی هەموو زانیارییەکان بەیەکەوە بۆ هەموو قوتابییەکان
app.get('/api/data', async (req, res) => {
  try {
    const videosRes = await pool.query('SELECT * FROM videos ORDER BY id ASC');
    const hwRes = await pool.query('SELECT * FROM homeworks ORDER BY id DESC');
    const quizRes = await pool.query('SELECT * FROM quizzes ORDER BY id DESC');
    const subRes = await pool.query('SELECT * FROM submissions ORDER BY id DESC');

    res.json({
      videos: videosRes.rows.map((r, i) => ({
        id: String(r.id),
        order: i + 1,
        title: r.title,
        url: r.url,
        topic: r.topic,
        desc: r.description || ''
      })),
      homeworks: hwRes.rows.map(r => ({
        id: String(r.id),
        title: r.title,
        topic: r.topic,
        desc: r.description,
        dueDate: r.due_date,
        points: r.points,
        type: r.hw_type
      })),
      quizzes: quizRes.rows.map(r => ({
        id: String(r.id),
        kuQuestion: r.ku_question,
        enQuestion: r.en_question,
        topic: r.topic,
        options: r.options,
        correct: r.correct,
        explanation: r.explanation
      })),
      submissions: subRes.rows.map(r => ({
        id: String(r.id),
        hwId: r.hw_id,
        hwTitle: r.hw_title,
        studentName: r.student_name,
        studentId: r.student_id,
        answer: r.answer,
        submittedAt: r.submitted_at
      }))
    });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Database fetch error' });
  }
});

// ٢. زیادکردنی ڤیدیۆ (تەنها مامۆستا)
app.post('/api/videos', async (req, res) => {
  const { title, url, topic, desc, password } = req.body;
  if (password !== TEACHER_PASSWORD) return res.status(403).json({ error: 'Unauthorized' });
  try {
    const result = await pool.query(
      'INSERT INTO videos (title, url, topic, description) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, url, topic || 'خاسیەتە خولییەکان', desc || '']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ٣. گۆڕینی بەستەر و دەستکاریکردنی ڤیدیۆ (تەنها مامۆستا)
app.put('/api/videos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, url, topic, desc, password } = req.body;
  if (password !== TEACHER_PASSWORD) return res.status(403).json({ error: 'Unauthorized' });
  try {
    await pool.query(
      'UPDATE videos SET title = $1, url = $2, topic = $3, description = $4 WHERE id = $5',
      [title, url, topic || 'خاسیەتە خولییەکان', desc || '', id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ٤. سڕینەوەی ڤیدیۆ (تەنها مامۆستا)
app.delete('/api/videos/:id', async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  if (password !== TEACHER_PASSWORD) return res.status(403).json({ error: 'Unauthorized' });
  try {
    await pool.query('DELETE FROM videos WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ٥. زیادکردنی ئەرکی ماڵەوە (تەنها مامۆستا)
app.post('/api/homeworks', async (req, res) => {
  const { title, topic, desc, dueDate, points, type, password } = req.body;
  if (password !== TEACHER_PASSWORD) return res.status(403).json({ error: 'Unauthorized' });
  try {
    await pool.query(
      'INSERT INTO homeworks (title, topic, description, due_date, points, hw_type) VALUES ($1, $2, $3, $4, $5, $6)',
      [title, topic, desc, dueDate, Number(points) || 10, type]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ٦. زیادکردنی پرسیاری تاقیکردنەوە (تەنها مامۆستا)
app.post('/api/quizzes', async (req, res) => {
  const { kuQuestion, enQuestion, topic, options, correct, explanation, password } = req.body;
  if (password !== TEACHER_PASSWORD) return res.status(403).json({ error: 'Unauthorized' });
  try {
    await pool.query(
      'INSERT INTO quizzes (ku_question, en_question, topic, options, correct, explanation) VALUES ($1, $2, $3, $4, $5, $6)',
      [kuQuestion, enQuestion, topic, JSON.stringify(options), Number(correct), explanation]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ٧. ناردنی وەڵامی ئەرک لەلایەن قوتابییانەوە بۆ مامۆستا
app.post('/api/submissions', async (req, res) => {
  const { hwId, hwTitle, studentName, studentId, answer, submittedAt } = req.body;
  try {
    await pool.query(
      'INSERT INTO submissions (hw_id, hw_title, student_name, student_id, answer, submitted_at) VALUES ($1, $2, $3, $4, $5, $6)',
      [hwId, hwTitle, studentName, studentId, answer, submittedAt]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});