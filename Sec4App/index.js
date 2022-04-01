let express = require("express");

let app = express();

let path = require("path");

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Welcome to the Thunderdome!"));
app.get("/about", (req, res) => res.redirect("https://www.byu.edu"));
app.get("/employee", (req, res) => {
  console.log("In the employee");
  res.sendFile(path.join(__dirname + "/testData.html"));
});

app.get("/storeIt", (req, res) => {
  res.sendFile(path.join(__dirname + "/getData.html"));
});

app.post("/storeIt", (req, res) => {
  res.send("Stored Data!" + req.body.lname);
});

app.get("/displayName", (req, res) => {
  let aNames = ["Cougars", "Spam", "Bacon"];
  res.render("displayName", { name: "Cougars" });
});

app.listen(port, () => console.log("I am listening!"));
