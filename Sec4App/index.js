let express = require("express");

let app = express();

let path = require("path");

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Welcome to my life"));

app.get("/about", (req, res) => res.redirect("https://www.byu.edu"));

app.get("/employee", (req, res) => {
  console.log("Callling the employee");
  res.sendFile(path.join(__dirname + "/testdata.html"));
});

app.listen(port, () => console.log("I am listening :)"));
