const pool = require('./db');

// Get all genres
exports.getAllGenres = async () => {
  const result = await pool.query('SELECT * FROM genres');
  return result.rows;
};

// Get a genre by ID
exports.getGenreById = async (id) => {
  const result = await pool.query('SELECT * FROM genres WHERE id = $1', [id]);
  return result.rows[0];
};

// Add a new genre
exports.addGenre = async (name) => {
  const result = await pool.query(
    'INSERT INTO genres (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
};

// Update a genre
exports.updateGenre = async (id, name) => {
  const result = await pool.query(
    'UPDATE genres SET name = $1 WHERE id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
};

// Delete a genre
exports.deleteGenre = async (id) => {
  const result = await pool.query('DELETE FROM genres WHERE id = $1 RETURNING *', [id]);
  return result.rowCount > 0; // Return true if a row was deleted
};
