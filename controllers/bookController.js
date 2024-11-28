const bookModel = require('../models/bookModel');

exports.getBooks = async (req, res) => {
  try {
    const books = await bookModel.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookModel.getBookById(id);
    if (book) res.json(book);
    else res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await bookModel.addBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await bookModel.updateBook(id, req.body);
    if (updatedBook) res.json(updatedBook);
    else res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await bookModel.deleteBook(id);
    if (deleted) res.status(204).send();
    else res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
