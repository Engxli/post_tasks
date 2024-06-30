const express = require("express");
const router = express.Router();
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  addPostToTag,
} = require("./posts.controllers");
const passport = require("passport");

// what is this???
router.param("postId", async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  if (post) {
    req.post = post;
    next();
  } else {
    const err = new Error("Post Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", passport.authenticate("jwt", { session: false }), postsGet);
router.post("/", passport.authenticate("jwt", { session: false }), postsCreate);
router.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  postsDelete
);
router.put("/:postId", postsUpdate);
router.put("/:postId/:tagId", addPostToTag);

module.exports = router;
