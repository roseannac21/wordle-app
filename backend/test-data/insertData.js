const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Words = require("../Schemas/WordsSchema");
const words = require("../test-data/test-words");

require("dotenv").config({
  path: `${__dirname}/../.env.dev`,
});

const url = process.env.DATABASE_URL;

mongoose.connect(url);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

Words.insert(words, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("multiple words inserted into words collection");
  }
});

// const insertWords = new Words(words);

// insertWords.save(function (err, docs) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("words inserted into words collection");
//   }
// });
