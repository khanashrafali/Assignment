const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    summary: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", BookSchema);
