const Author = require("../../models/Author");

const createAuthor = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};

module.exports = { createAuthor };
