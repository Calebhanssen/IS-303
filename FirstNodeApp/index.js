// "author": "Caleb Hanssen"

let express = require("express");

let app = express();

// "/" = root directory
app.get("/", (req, res) =>
  res.send("This is my first node express application")
);
app.get("/help", (req, res) => res.send("Please contact tech support"));

console.log("Server is running");
