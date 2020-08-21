// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./sketch.js");
// require("./markov.js");
// require("./fw.txt");
// require("./bonbon.txt");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:3000/`);
});
