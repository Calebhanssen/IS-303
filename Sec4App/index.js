const { request } = require("express");
let express = require("express");

let app = express();

app.get("/", (req, res) => res.send("Welcome to my life"));

app.listen(3000, () => console.log("I am listening :)"));
