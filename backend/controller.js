const Words = require("./Schemas/WordsSchema");

const getWord = (req, res, next) => {
  return Words.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
      res.status(200).send({ word: result[0] });
    })
    .catch(next);
};

module.exports = { getWord };
