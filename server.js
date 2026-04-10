const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Main game route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check for Railway
app.get('/health', (req, res) => {
  res.json({ status: 'ok', game: 'City Clean Crew 🌟' });
});

app.listen(PORT, () => {
  console.log(`🏙️ City Clean Crew server running on port ${PORT}`);
  console.log(`🌟 Open http://localhost:${PORT} to play!`);
});
