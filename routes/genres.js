const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Get all genres
router.get('/', genreController.getGenres);

// Add a new genre
router.post('/', genreController.createGenre);

// Get a genre by ID
router.get('/:id', genreController.getGenreById);

// Update a genre
router.put('/:id', genreController.updateGenre);

// Delete a genre
router.delete('/:id', genreController.deleteGenre);

module.exports = router;
