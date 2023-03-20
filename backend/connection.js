const mongoose = require("mongoose");

require("dotenv").config({
  path: `${__dirname}/.env.test`,
});

const url = process.env.DATABASE_URL;

mongoose.connect(url);
const database = mongoose.connection;

module.exports = database;
