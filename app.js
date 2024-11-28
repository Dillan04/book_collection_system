const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const bookRoutes = require('./routes/books');
const genreRoutes = require('./routes/genres');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/books', bookRoutes);
app.use('/genres', genreRoutes);

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
