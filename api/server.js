import express from 'express';      // Use import instead of require
import fetch from 'node-fetch';     // Use import for node-fetch
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/rates', async (req, res) => {
  try {
    const response = await fetch(process.env.API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rates' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
