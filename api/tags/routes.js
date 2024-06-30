const express = require("express");
const tagRouter = express.Router();
const { createTag, getAllTags } = require("./controllers");

tagRouter.post("/", createTag);
tagRouter.get("/", getAllTags);

module.exports = tagRouter;
