const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const authorRouter = require("./api/authors/routes");
const tagRouter = require("./api/tags/routes");
const authRouter = require("./api/auth/routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");

connectDb();
app.use(express.json());
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/posts", postsRoutes);
app.use("/authors", authorRouter);
app.use("/tags", tagRouter);
app.use("/auth", authRouter);

// Not found handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || err.msg || "Internal Server Error",
  });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
