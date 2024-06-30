const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, unique: true },
  body: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Post", PostSchema);
