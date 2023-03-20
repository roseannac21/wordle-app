const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { getWord } = require("./controller");

require("dotenv").config({
  path: `${__dirname}/.env.test`,
});

const app = express();

const url = process.env.DATABASE_URL;

mongoose.connect(url);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(cors({ origin: true, credentials: true }));
app.get("/api/words", getWord);

app.listen(3000, () => {
  console.log("listening");
});

module.exports = { app, mongoose };
