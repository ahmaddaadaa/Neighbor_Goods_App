const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, "views")));

// GET /
app.get("/", (req, res) => {
  res.render("mainPage");
});

app.get("/filter", (req, res) => {
  res.render("filter");
});

app.get("/favorites", (req, res) => {
  res.render("favorites");
});

app.get("/inbox", (req, res) => {
  res.render("inbox");
});

app.get("/logout", (req, res) => {
  res.render("logout");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
