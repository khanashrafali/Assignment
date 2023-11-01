const { check, validationResult, body } = require("express-validator");

const addBook = [
  body("title", "Please enter valid title").exists().trim().notEmpty(),
  body("author", "Please enter valid author").exists().trim().notEmpty(),
  body("summary", "Please enter valid summary").exists().trim().notEmpty(),
];

const updateBook = [...addBook];

module.exports = {
  addBook,
  updateBook,
};
