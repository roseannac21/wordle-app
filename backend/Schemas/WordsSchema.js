const mongoose = require("mongoose");

const WordsSchema = new mongoose.Schema({
  word: { type: String, required: true },
});

const Words = mongoose.model("Words", WordsSchema, "words");

module.exports = Words;
