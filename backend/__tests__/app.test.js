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
      return request(app).get("/api/words").expect(200);
    });
    test("return status 200 and a random word", () => {
      return request(app)
        .get("/api/words")
        .expect(200)
        .then(({ body: { word } }) => {
          expect(word).toHaveProperty("_id");
          expect(word).toHaveProperty("word");
          expect(word.word).toHaveLength(5);
        });
    });
    test("error handling: 404 not found", () => {
      return request(app).get("/api/worddd").expect(404);
    });
  });
});
