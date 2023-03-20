const Words = require("./Schemas/WordsSchema");

const getWord = (req, res, next) => {
  return Words.find()
    .then((result) => {
      res.status(200);
    })
    .catch(next);
};

module.exports = { getWord };
