const express = require("express");
const authorRouter = express.Router();
const { createAuthor } = require("./controllers");

authorRouter.post("/", createAuthor);

module.exports = authorRouter;
