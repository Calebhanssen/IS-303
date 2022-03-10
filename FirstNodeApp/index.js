let express = require("express");

let app = express();

// "/" = root directory
app.get("/", (req, res) =>
  res.send("This is my first node express application")
);
app.get("/about", (req, res) => res.send("Please contact tech support"));
app.get("/help", (req, res) => res.send("Please contact tech support"));

app.listen(3000, () => console.log("The serve has started to listen."));
console.log("Server is running");
