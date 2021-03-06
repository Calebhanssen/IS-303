let express = require("express");

let app = express();

let path = require("path");

const port = 3000;

app.use(express.urlencoded({ extended: true }));

const knex = require("knex")({
  client: "pg",
  version: "13.6",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "Wtmcac99",
    database: "Company",
    port: 5433,
  }
});

console.log('connected');

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
  knex.select().from("employee").then((emp) => {
      res.render("displayName", { name: emp });
  }).catch((err) => {
      console.log(err);
      res.status(500).json({ err });
  });
});

//first()

app.get("/getName/:firstName", (req, res) => {
  // var sSearch = req.params.firstName.charAt(0).toUpperCase() + req.params.first
  knex.select("first_name", "last_name").from("employee").where("first_name", req.params.firstName.toUpperCase()).first().then((emp) => {
      // returns an array to the emp file. Make sure to use square brackets in
      res.render("findName", { name: emp });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err }); // change to res.send file to send html error file.
    });
});

app.listen(port, () => console.log("I am listening!"));
