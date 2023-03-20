const request = require("supertest");
const { app } = require("../app");
const mongoose = require("mongoose");
const Words = require("../Schemas/WordsSchema");
const database = require("../connection");
const words = require("../test-data/test-words");
const url = process.env.DATABASE_URL;

beforeEach(async () => {
  await mongoose.connect(url);
  await Words.deleteMany();
  await Words.collection.insertMany(words);
});

afterAll(async () => {
  await database.close();
});

describe("wordle app", () => {
  describe("get request- random word", () => {
    test("return status 200", () => {
      return request(app).get("/api/users").expect(200);
    });
  });
});
