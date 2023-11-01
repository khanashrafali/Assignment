const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
const validator = require("./validator");

const Book = require("../model/Book");

router.post("", validator.addBook, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { title, author, summary } = req.body;
  try {
    let book = await Book.findOne({
      title,
      author,
    });
    if (book) {
      return res.status(400).json({
        msg: "Book Already Exists",
      });
    }

    book = new Book({
      title,
      author,
      summary,
    });

    await book.save();

    res.status(200).json({
      message: "Book created in the database",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in Saving");
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    if (!books?.length) return res.status(404).send("Not found any books");
    res.json(books);
  } catch (e) {
    res.send({ message: "Error in Fetching book" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send("Book does not exists.");
    res.json(book);
  } catch (e) {
    res.send({ message: "Error in Fetching book" });
  }
});

router.put("/:id", validator.updateBook, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book)
      return res.status(404).json({
        message: "Book does Not Exist",
      });

    const isExist = await Book.findOne({
      title: req.body.title,
      author: req.body.author,
      _id: { $ne: req.params.id },
    });
    if (isExist)
      return res.status(404).json({
        message: "Book already Exist",
      });
    await book.set({ ...req.body }).save();
    res.status(200).json({
      message: "Book updated successfully.",
    });
  } catch (e) {
    res.status(500).send("Error in updating the book");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book)
      return res.status(404).json({
        message: "Book does Not Exist",
      });
    await book.delete();
    res.status(200).json({
      message: "Book deleted successfully.",
    });
  } catch (error) {
    res.status(500).send("Error in deleting the book");
  }
});

module.exports = router;
