const pool = require('./db');

// Get all books or filter by genre
exports.getAllBooks = async (genreId = null) => {
  let query = 'SELECT * FROM books';
  let params = [];
  if (genreId) {
    query += ' WHERE genre_id = $1';
    params = [genreId];
  }
  const result = await pool.query(query, params);
  return result.rows;
};

// Get a book by ID
exports.getBookById = async (id) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  return result.rows[0]; // Return the first row (or undefined if not found)
};

// Add a new book
exports.addBook = async ({ title, author, price, genre_id, copies_left }) => {
  const result = await pool.query(
    'INSERT INTO books (title, author, price, genre_id, copies_left) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, author, price, genre_id, copies_left]
  );
  return result.rows[0];
};

// Update a book by ID
exports.updateBook = async (id, { title, author, price, genre_id, copies_left }) => {
  const result = await pool.query(
    'UPDATE books SET title = $1, author = $2, price = $3, genre_id = $4, copies_left = $5 WHERE id = $6 RETURNING *',
    [title, author, price, genre_id, copies_left, id]
  );
  return result.rows[0]; // Return the updated book (or undefined if not found)
};

// Delete a book by ID
exports.deleteBook = async (id) => {
  const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
  return result.rowCount > 0; // Return true if a row was deleted
};
