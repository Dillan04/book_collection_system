const genreModel = require('../models/genreModel');

// Get all genres
exports.getGenres = async (req, res) => {
  try {
    const genres = await genreModel.getAllGenres();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new genre
exports.createGenre = async (req, res) => {
  const { name } = req.body;
  try {
    const newGenre = await genreModel.addGenre(name);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a genre by ID
exports.getGenreById = async (req, res) => {
  const { id } = req.params;
  try {
    const genre = await genreModel.getGenreById(id);
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a genre
exports.updateGenre = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedGenre = await genreModel.updateGenre(id, name);
    if (updatedGenre) {
      res.json(updatedGenre);
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a genre
exports.deleteGenre = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await genreModel.deleteGenre(id);
    if (deleted) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
